import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Que el navegador no restaure la posición al recargar: siempre se empieza arriba.
if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual'
}

// Al cambiar de página (o recargar) vuelve arriba del todo.
// Si la URL lleva #ancla, se respeta para que el componente haga scroll a ella.
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useLayoutEffect(() => {
    if (hash) return
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname, hash])

  return null
}
