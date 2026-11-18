import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import './ContactModal.css'

// Endpoint propio (mismo dominio) que reenvía a la función de Zoho CRM
// leads_juantial_web_1. Zoho no acepta llamadas directas desde el navegador.
// En desarrollo lo resuelve el proxy de vite.config.js (ZOHO_LEADS_URL en .env).
const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT || '/api/contact'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_RE = /^\+?[\d\s().-]{7,20}$/

const EMPTY = { firstName: '', lastName: '', phone: '', email: '', message: '' }

function validate(values) {
  const errors = {}
  const phone = values.phone.trim()
  const email = values.email.trim()

  if (!values.firstName.trim()) errors.firstName = 'required'
  if (!phone && !email) {
    errors.contact = 'contactRequired'
  }
  if (email && !EMAIL_RE.test(email)) errors.email = 'invalidEmail'
  if (phone && !PHONE_RE.test(phone)) errors.phone = 'invalidPhone'
  return errors
}

export default function ContactModal({ onClose }) {
  const { t } = useLanguage()
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const firstFieldRef = useRef(null)

  useEffect(() => {
    firstFieldRef.current?.focus()
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [onClose])

  const handleChange = (e) => {
    const next = { ...values, [e.target.name]: e.target.value }
    setValues(next)
    if (submitted) setErrors(validate(next))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitted(true)
    const errs = validate(values)
    setErrors(errs)
    if (Object.keys(errs).length) return

    const payload = Object.fromEntries(
      Object.entries(values).map(([k, v]) => [k, v.trim()]),
    )

    setStatus('sending')
    try {
      // La función de Zoho lee el cuerpo crudo (crmAPIRequest.body), así que
      // se manda el JSON tal cual.
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json().catch(() => null)
      if (!res.ok || data?.status === 'error') {
        throw new Error(`HTTP ${res.status} ${data ? JSON.stringify(data) : ''}`)
      }
      setStatus('success')
    } catch (err) {
      console.error('[ContactModal] Error al enviar', err)
      setStatus('error')
    }
  }

  const err = (key) => (errors[key] ? t(`contact.errors.${errors[key]}`) : null)
  const contactMissing = !!errors.contact

  return (
    <div className="contact-modal__backdrop" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <div className="contact-modal" role="dialog" aria-modal="true" aria-labelledby="contact-modal-title">
        <button type="button" className="contact-modal__close" aria-label={t('contact.close')} onClick={onClose}>×</button>

        {status === 'success' ? (
          <div className="contact-modal__success">
            <h2 id="contact-modal-title">{t('contact.successTitle')}</h2>
            <p>{t('contact.successText')}</p>
            <button type="button" className="btn-primary" onClick={onClose}>{t('contact.close')}</button>
          </div>
        ) : (
          <>
            <h2 id="contact-modal-title">{t('contact.title')}</h2>
            <p className="contact-modal__lead">{t('contact.lead')}</p>

            <form className="contact-modal__form" onSubmit={handleSubmit} noValidate>
              <div className="contact-modal__row">
                <label className={`contact-field${errors.firstName ? ' has-error' : ''}`}>
                  <span>{t('contact.firstName')} *</span>
                  <input
                    ref={firstFieldRef}
                    name="firstName"
                    autoComplete="given-name"
                    value={values.firstName}
                    onChange={handleChange}
                    aria-invalid={!!errors.firstName}
                  />
                  {err('firstName') && <small>{err('firstName')}</small>}
                </label>
                <label className="contact-field">
                  <span>{t('contact.lastName')}</span>
                  <input
                    name="lastName"
                    autoComplete="family-name"
                    value={values.lastName}
                    onChange={handleChange}
                  />
                </label>
              </div>

              <div className="contact-modal__row">
                <label className={`contact-field${errors.phone || contactMissing ? ' has-error' : ''}`}>
                  <span>{t('contact.phone')}</span>
                  <input
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={values.phone}
                    onChange={handleChange}
                    aria-invalid={!!errors.phone || contactMissing}
                  />
                  {err('phone') && <small>{err('phone')}</small>}
                </label>
                <label className={`contact-field${errors.email || contactMissing ? ' has-error' : ''}`}>
                  <span>{t('contact.email')}</span>
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={handleChange}
                    aria-invalid={!!errors.email || contactMissing}
                  />
                  {err('email') && <small>{err('email')}</small>}
                </label>
              </div>
              <p className={`contact-modal__hint${contactMissing ? ' is-error' : ''}`}>
                {contactMissing ? err('contact') : t('contact.contactHint')}
              </p>

              <label className="contact-field">
                <span>{t('contact.message')}</span>
                <textarea
                  name="message"
                  rows={4}
                  value={values.message}
                  onChange={handleChange}
                  placeholder={t('contact.messagePlaceholder')}
                />
              </label>

              {status === 'error' && <p className="contact-modal__hint is-error">{t('contact.errors.send')}</p>}

              <div className="contact-modal__actions">
                <button type="submit" className="btn-primary" disabled={status === 'sending'}>
                  {status === 'sending' ? t('contact.sending') : t('contact.submit')}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
