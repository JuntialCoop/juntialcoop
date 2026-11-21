import { Link } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'
import { useContact } from '../../context/ContactContext'
import TypewriterHeading from '../../components/TypewriterHeading/TypewriterHeading'
import '../../components/TypewriterHeading/TypewriterHeading.css'
import aboutBanner from '../../assets/about-banner.png'
import './About.css'

export default function About() {
  const { t } = useLanguage()
  const { openContact } = useContact()
  const steps = t('about.steps')

  return (
    <div className="page about-page">
      <section className="about-hero container">
        <div className="eyebrow">{t('about.eyebrow')}</div>
        <TypewriterHeading text={t('about.title')} key={t('about.title')} />
        <p className="about-hero__lead">{t('about.lead')}</p>
      </section>

      <section className="about-body container">
        <div className="about-body__text">
          <p>{t('about.body1')}</p>
          <p>{t('about.body2')}</p>
        </div>
        <figure className="about-body__banner">
          <img
            src={aboutBanner}
            alt={t('about.bannerAlt')}
            width="1920"
            height="800"
            loading="lazy"
            decoding="async"
          />
        </figure>
      </section>

      <section className="about-grid container">
        <div className="about-grid__card">
          <h3>{t('about.howTitle')}</h3>
          <p>{t('about.howBody')}</p>
        </div>
        <div className="about-grid__card">
          <h3>{t('about.whoTitle')}</h3>
          <p>{t('about.whoBody')}</p>
        </div>
      </section>

      <section className="about-steps container">
        <div className="about-steps__head">
          <h2>{t('about.stepsTitle')}</h2>
          <p>{t('about.stepsLead')}</p>
        </div>
        <div className="about-steps__list">
          {steps.map((s, i) => (
            <div className="about-step" key={i}>
              <div className="about-step__marker">0{i + 1}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="about-steps__cta">
          <Link to="/Real-life-cases" className="btn-outline">{t('nav.cases')} →</Link>
          <button type="button" className="btn-primary" onClick={openContact}>{t('common.getStarted')}</button>
        </div>
      </section>
    </div>
  )
}
