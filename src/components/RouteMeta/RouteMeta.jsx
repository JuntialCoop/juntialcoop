import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'
import { seo } from '../../i18n/seo'
import { company } from '../../data/company'

const OG_LOCALES = { es: 'es_ES', en: 'en_GB', fr: 'fr_FR', ca: 'ca_ES' }

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

// Actualiza <title>, descripción, canonical y Open Graph según la página e idioma.
export default function RouteMeta() {
  const { pathname } = useLocation()
  const { language } = useLanguage()

  useEffect(() => {
    const dict = seo[language] || seo.es
    const meta = dict[pathname] || seo.es[pathname] || dict['/']
    const url = company.url + (pathname === '/' ? '/' : pathname)

    document.title = meta.title
    setMeta('name', 'description', meta.description)
    setMeta('property', 'og:title', meta.title)
    setMeta('property', 'og:description', meta.description)
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:locale', OG_LOCALES[language] || 'es_ES')
    setMeta('name', 'twitter:title', meta.title)
    setMeta('name', 'twitter:description', meta.description)
    setCanonical(url)
  }, [pathname, language])

  return null
}
