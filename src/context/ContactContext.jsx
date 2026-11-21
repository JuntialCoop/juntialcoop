import { createContext, useContext, useState, useMemo, useCallback, useEffect } from 'react'
import ContactModal from '../components/ContactModal/ContactModal'

const ContactContext = createContext(null)

export function ContactProvider({ children }) {
  // Acceso directo de la app instalada (manifest): /?contacto=1 abre el formulario.
  const [open, setOpen] = useState(
    () => typeof window !== 'undefined' && new URLSearchParams(window.location.search).has('contacto'),
  )

  const openContact = useCallback(() => setOpen(true), [])
  const closeContact = useCallback(() => setOpen(false), [])

  // Limpia ?contacto=1 de la URL para que no se vuelva a abrir al recargar.
  useEffect(() => {
    const url = new URL(window.location.href)
    if (!url.searchParams.has('contacto')) return
    url.searchParams.delete('contacto')
    window.history.replaceState(window.history.state, '', url.pathname + url.search + url.hash)
  }, [])

  const value = useMemo(() => ({ openContact, closeContact }), [openContact, closeContact])

  return (
    <ContactContext.Provider value={value}>
      {children}
      {open && <ContactModal onClose={closeContact} />}
    </ContactContext.Provider>
  )
}

export function useContact() {
  const ctx = useContext(ContactContext)
  if (!ctx) throw new Error('useContact must be used within ContactProvider')
  return ctx
}
