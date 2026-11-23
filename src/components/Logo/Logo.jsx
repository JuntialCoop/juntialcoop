// Isotipo oficial de Juntial: cuatro barras facetadas en anillo hexagonal con punto azul central.
export function LogoMark({ size = 30 }) {
  return (
    <svg width={size} height={size} viewBox="195 205 773 773" aria-hidden="true">
      <polygon points="480,215 850,325 720,455 350,348" fill="var(--logo-a)" />
      <polygon points="850,325 958,692 826,826 720,455" fill="var(--logo-b)" />
      <polygon points="800,848 683,968 312,860 430,742" fill="var(--logo-b)" />
      <polygon points="322,374 430,742 312,860 205,490" fill="var(--logo-a)" />
      <circle cx="582" cy="592" r="101" fill="var(--blue)" />
    </svg>
  )
}

export function LogoFull({ markSize = 28, textSize = 20, gap = 12 }) {
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap,
      fontFamily: 'var(--heading)',
      fontWeight: 700,
      fontSize: textSize,
      letterSpacing: '-0.02em',
      color: 'var(--text)',
      lineHeight: 1,
    }}>
      <LogoMark size={markSize} />
      <span>{'JUNT'}<span style={{ color: 'var(--blue)' }}>IA</span>{'L'}</span>
    </span>
  )
}
