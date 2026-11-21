import { useLanguage } from '../../context/LanguageContext'
import { useContact } from '../../context/ContactContext'
import TypewriterHeading from '../TypewriterHeading/TypewriterHeading'
import '../TypewriterHeading/TypewriterHeading.css'
import './ServiceLinePage.css'

/**
 * Plantilla compartida por las tres líneas de servicio:
 * Desarrollo a Medida, Automatización e IA, Integración Zoho One.
 * lineKey: 'dev' | 'automation' | 'zoho'
 * banner (opcional): imagen ancha bajo la cabecera; su texto alternativo
 * se toma de lines.<lineKey>.bannerAlt.
 */
export default function ServiceLinePage({ lineKey, banner }) {
  const { t } = useLanguage()
  const { openContact } = useContact()
  const line = t(`lines.${lineKey}`)

  return (
    <div className="page service-line">
      <section className="sl-hero container">
        <div className="eyebrow">{line.eyebrow}</div>
        <TypewriterHeading text={line.title} key={lineKey + line.title} />
        <p className="sl-hero__intro">{line.intro}</p>
      </section>

      {banner && (
        <section className="sl-media container">
          <figure className="sl-banner">
            <img src={banner} alt={line.bannerAlt || line.title} width="1920" height="800" decoding="async" />
          </figure>
        </section>
      )}

      <section className="sl-services container">
        <div className="sl-services__label">{t('common.servicesInLine')}</div>
        <div className="sl-services__list">
          {line.services.map((svc, i) => (
            <div className="sl-service" key={i}>
              <div className="sl-service__index">{String(i + 1).padStart(2, '0')}</div>
              <div className="sl-service__body">
                <h3>{svc.name}</h3>
                <p>{svc.desc}</p>
                <div className="sl-service__ideal">
                  <span className="sl-service__ideal-label">{t('common.idealWhen')}</span> {svc.ideal}
                </div>
              </div>
            </div>
          ))}
        </div>
        {line.note && (
          <div className="sl-note">{line.note}</div>
        )}
      </section>

      <section className="container">
        <div className="sl-cta">
          <h2>{t('common.talkToUs')}</h2>
          <button type="button" className="btn-primary" onClick={openContact}>{t('home.ctaPrimary')}</button>
        </div>
      </section>
    </div>
  )
}
