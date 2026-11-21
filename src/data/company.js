// Datos oficiales de la empresa (tarjeta NIF definitiva, AEAT, 29-09-2026).
// Si cambian, actualizar también el JSON-LD de index.html.
export const company = {
  brand: 'Juntial',
  legalName: 'JUNTIAL, COOP. V.',
  taxId: 'F93988400',
  email: 'admin@juntial.es',
  url: 'https://juntial.es',
  // Datos de inscripción en el Registro de Cooperativas de la Comunitat
  // Valenciana (p. ej. 'Registro de Cooperativas de la Comunitat Valenciana,
  // n.º de inscripción X'). Si se rellena, aparece en el Aviso legal.
  registry: '',
  address: {
    street: 'C/ Presidente del Gobierno José María Aznar, 2',
    postalCode: '03350',
    locality: 'Cox',
    region: 'Alicante',
    country: 'España',
  },
}

// Rutas de las páginas legales (compartidas por router, pie y formulario).
export const legalRoutes = {
  legal: '/aviso-legal',
  privacy: '/politica-privacidad',
  cookies: '/politica-cookies',
}
