import { Link } from 'react-router-dom'
import { LogoFull } from '../Logo/Logo'
import { useLanguage } from '../../context/LanguageContext'
import { useContact } from '../../context/ContactContext'
import { company, legalRoutes } from '../../data/company'
import './Footer.css'

export default function Footer() {
  const { t } = useLanguage()
  const { openContact } = useContact()
  const { address } = company
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${address.street}, ${address.postalCode} ${address.locality}, ${address.region}`)}`
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__top container">
        <div className="footer__brand">
          <LogoFull markSize={26} textSize={20} />
          <p>{t('footer.tagline')}</p>
        </div>

        <div className="footer__col">
          <h4>{t('footer.servicesTitle')}</h4>
          <Link to="/Custom-development">{t('nav.customDev')}</Link>
          <Link to="/automation-ai">{t('nav.automation')}</Link>
          <Link to="/integration-zoho-one">{t('nav.zoho')}</Link>
        </div>

        <div className="footer__col">
          <h4>{t('footer.companyTitle')}</h4>
          <Link to="/about">{t('nav.about')}</Link>
          <Link to="/Real-life-cases">{t('nav.cases')}</Link>
        </div>

        <div className="footer__col footer__contact">
          <h4>{t('footer.contactTitle')}</h4>
          <address>
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
              {address.street}<br />
              {address.postalCode} {address.locality} ({address.region})<br />
              {address.country}
            </a>
          </address>
          <a href={`mailto:${company.email}`}>{company.email}</a>
          <button type="button" className="footer__contact-btn" onClick={openContact}>{t('nav.cta')} →</button>
        </div>

        <div className="footer__newsletter">
          <h4>{t('footer.newsletterTitle')}</h4>
          <p>{t('footer.newsletterText')}</p>
          <form className="footer__nl-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder={t('footer.newsletterPlaceholder')} />
            <button type="submit">{t('footer.newsletterBtn')}</button>
          </form>
        </div>
      </div>

      <div className="footer__bottom container">
        <div>© {year} {company.legalName} · NIF {company.taxId}. {t('footer.rights')}</div>
        <div className="footer__legal">
          <Link to={legalRoutes.legal}>{t('footer.legal')}</Link>
          <Link to={legalRoutes.privacy}>{t('footer.privacy')}</Link>
          <Link to={legalRoutes.cookies}>{t('footer.cookies')}</Link>
        </div>
      </div>
    </footer>
  )
}
