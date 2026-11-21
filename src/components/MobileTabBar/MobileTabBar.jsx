import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'
import { useContact } from '../../context/ContactContext'
import BottomSheet from '../BottomSheet/BottomSheet'
import './MobileTabBar.css'

const SERVICE_PATHS = ['/Custom-development', '/automation-ai', '/integration-zoho-one']

const Icon = {
  home: (
    <path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z" />
  ),
  services: (
    <>
      <rect x="3.5" y="3.5" width="7" height="7" rx="2" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="2" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="2" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="2" />
    </>
  ),
  cases: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18" />
    </>
  ),
  about: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M18 14.5a6.5 6.5 0 0 1 3.5 5.5" />
    </>
  ),
  talk: (
    <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20.5l1.4-4.9A8 8 0 1 1 21 12zM8.5 12h.01M12 12h.01M15.5 12h.01" />
  ),
  code: <path d="m8 7-5 5 5 5M16 7l5 5-5 5M13.5 4l-3 16" />,
  spark: <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6" />,
  hex: <path d="M12 2.5 20.5 7.3v9.4L12 21.5l-8.5-4.8V7.3z M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" />,
  chevron: <path d="m9 6 6 6-6 6" />,
}

function Svg({ name, size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {Icon[name]}
    </svg>
  )
}

// Barra de navegación inferior para móviles (estilo app).
export default function MobileTabBar() {
  const { t } = useLanguage()
  const { openContact } = useContact()
  const { pathname } = useLocation()
  const [servicesOpen, setServicesOpen] = useState(false)

  const servicesActive = SERVICE_PATHS.includes(pathname)
  const services = [
    { to: SERVICE_PATHS[0], icon: 'code', title: t('home.line1title'), desc: t('home.line1desc') },
    { to: SERVICE_PATHS[1], icon: 'spark', title: t('home.line2title'), desc: t('home.line2desc') },
    { to: SERVICE_PATHS[2], icon: 'hex', title: t('home.line3title'), desc: t('home.line3desc') },
  ]

  const tab = ({ isActive }) => `tabbar__item${isActive ? ' is-active' : ''}`

  return (
    <>
      <nav className="tabbar" aria-label={t('nav.tabsLabel')}>
        <NavLink to="/" end className={tab}>
          <Svg name="home" />
          <span>{t('nav.home')}</span>
        </NavLink>

        <button
          type="button"
          className={`tabbar__item${servicesActive || servicesOpen ? ' is-active' : ''}`}
          aria-haspopup="dialog"
          aria-expanded={servicesOpen}
          onClick={() => setServicesOpen(true)}
        >
          <Svg name="services" />
          <span>{t('nav.tabServices')}</span>
        </button>

        <button type="button" className="tabbar__item tabbar__talk" onClick={openContact}>
          <span className="tabbar__talk-bubble"><Svg name="talk" size={26} /></span>
          <span>{t('nav.cta')}</span>
        </button>

        <NavLink to="/Real-life-cases" className={tab}>
          <Svg name="cases" />
          <span>{t('nav.tabCases')}</span>
        </NavLink>

        <NavLink to="/about" className={tab}>
          <Svg name="about" />
          <span>{t('nav.about')}</span>
        </NavLink>
      </nav>

      <BottomSheet
        open={servicesOpen}
        onClose={() => setServicesOpen(false)}
        title={t('nav.servicesSheetTitle')}
        closeLabel={t('contact.close')}
      >
        <ul className="svc-list">
          {services.map((s) => (
            <li key={s.to}>
              <Link
                to={s.to}
                className={`svc-item${pathname === s.to ? ' is-active' : ''}`}
                onClick={() => setServicesOpen(false)}
              >
                <span className="svc-item__icon"><Svg name={s.icon} /></span>
                <span className="svc-item__text">
                  <strong>{s.title}</strong>
                  <small>{s.desc}</small>
                </span>
                <span className="svc-item__chev"><Svg name="chevron" size={20} /></span>
              </Link>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="svc-cta"
          onClick={() => { setServicesOpen(false); openContact() }}
        >
          <Svg name="talk" size={20} /> {t('common.talkToUs')}
        </button>
      </BottomSheet>
    </>
  )
}
