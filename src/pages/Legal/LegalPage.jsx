import { NavLink } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'
import { legal, legalUpdated } from '../../i18n/legal'
import { legalRoutes } from '../../data/company'
import './LegalPage.css'

const EYEBROW = { es: 'Información legal', en: 'Legal information', fr: 'Informations légales', ca: 'Informació legal' }
const NOTICE = {
  fr: 'Cette page est disponible en espagnol, qui est la version faisant foi.',
  ca: 'Aquesta pàgina està disponible en castellà, que és la versió que preval.',
}

function Block({ block }) {
  if (typeof block === 'string') return <p>{block}</p>
  if (block.list) {
    return <ul>{block.list.map((item, i) => <li key={i}>{item}</li>)}</ul>
  }
  if (block.table) {
    return (
      <div className="legal__table-wrap">
        <table className="legal__table">
          <thead>
            <tr>{block.table.head.map((h) => <th key={h}>{h}</th>)}</tr>
          </thead>
          <tbody>
            {block.table.rows.map((row, i) => (
              <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
  return null
}

// doc: 'legal' | 'privacy' | 'cookies'
export default function LegalPage({ doc }) {
  const { language } = useLanguage()
  const content = legal[language] || legal.es
  const page = content.docs[doc]

  return (
    <div className="legal container">
      <header className="legal__head">
        <span className="eyebrow">{EYEBROW[language] || EYEBROW.es}</span>
        <h1>{page.title}</h1>
        <p className="legal__updated">{content.updatedLabel}: {legalUpdated}</p>
        {NOTICE[language] && <p className="legal__notice">{NOTICE[language]}</p>}
      </header>

      <nav className="legal__tabs" aria-label={EYEBROW[language] || EYEBROW.es}>
        {Object.entries(legalRoutes).map(([key, to]) => (
          <NavLink key={key} to={to} className={({ isActive }) => `legal__tab${isActive ? ' is-active' : ''}`}>
            {content.docs[key].title}
          </NavLink>
        ))}
      </nav>

      <article className="legal__body">
        {page.sections.map((s) => (
          <section key={s.h}>
            <h2>{s.h}</h2>
            {s.blocks.map((b, i) => <Block key={i} block={b} />)}
          </section>
        ))}
      </article>
    </div>
  )
}
