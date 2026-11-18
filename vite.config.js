import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

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

  return {
    plugins: [react()],
    server: { proxy },
    preview: { proxy },
  }
})
