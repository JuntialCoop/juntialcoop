import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  // Acepta también el nombre antiguo de la variable.
  env.ZOHO_LEADS_URL = env.ZOHO_LEADS_URL || env.VITE_CONTACT_ENDPOINT || ''

  // Zoho rechaza las peticiones que llevan cabecera Origin (las de un navegador),
  // así que el formulario de contacto llama a /api/contact y este proxy la
  // reenvía a la función de Zoho CRM desde el servidor, sin Origin.
  // La URL (con la API key) vive solo en .env, no en el código del navegador.
  const proxy = {}
  if (env.ZOHO_LEADS_URL) {
    const zoho = new URL(env.ZOHO_LEADS_URL)
    proxy['/api/contact'] = {
      target: zoho.origin,
      changeOrigin: true,
      rewrite: () => zoho.pathname + zoho.search,
      configure: (p) => {
        p.on('proxyReq', (req) => {
          req.removeHeader('origin')
          req.removeHeader('referer')
          req.removeHeader('cookie')
        })
      },
    }
  }

  // En producción (Hostinger, estático + PHP) genera dist/api/contact.php con
  // la URL de Zoho tomada de la variable de entorno en el momento del build.
  const contactPhp = {
    name: 'contact-php',
    apply: 'build',
    generateBundle() {
      const tpl = readFileSync(resolve(process.cwd(), 'server/contact.php'), 'utf8')
      const url = (env.ZOHO_LEADS_URL || '').replace(/\\/g, '\\\\').replace(/'/g, "\\'")
      if (!url) this.warn('ZOHO_LEADS_URL no definida: contact.php dependerá de getenv() en el servidor')
      this.emitFile({
        type: 'asset',
        fileName: 'api/contact.php',
        source: tpl.replace('__ZOHO_LEADS_URL__', url),
      })
    },
  }

  return {
    plugins: [react(), contactPhp],
    server: { proxy },
    preview: { proxy },
  }
})
