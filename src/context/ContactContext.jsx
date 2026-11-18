import { createContext, useContext, useState, useMemo, useCallback } from 'react'
import ContactModal from '../components/ContactModal/ContactModal'

const ContactContext = createContext(null)

export function ContactProvider({ children }) {
  const [open, setOpen] = useState(false)

  const openContact = useCallback(() => setOpen(true), [])
  const closeContact = useCallback(() => setOpen(false), [])

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
