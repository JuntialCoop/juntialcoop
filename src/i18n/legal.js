// Textos legales: Aviso legal (LSSI-CE), Política de privacidad (RGPD / LOPDGDD)
// y Política de cookies. El texto en castellano es el que prevalece; FR y CA
// muestran la versión en castellano con un aviso.
import { company as c } from '../data/company'

const UPDATED = '21/11/2026'
const addr = `${c.address.street}, ${c.address.postalCode} ${c.address.locality} (${c.address.region}), ${c.address.country}`
const registryEs = c.registry ? [`Datos registrales: ${c.registry}.`] : []
const registryEn = c.registry ? [`Registration details: ${c.registry}.`] : []

const es = {
  notice: 'Esta página está disponible en castellano, que es la versión que prevalece.',
  updatedLabel: 'Última actualización',
  docs: {
    legal: {
      title: 'Aviso legal',
      sections: [
        {
          h: '1. Datos identificativos del titular',
          blocks: [
            'En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa de los datos del titular de este sitio web:',
            { list: [
              `Titular: ${c.legalName}`,
              `NIF: ${c.taxId}`,
              `Domicilio social: ${addr}`,
              `Correo electrónico: ${c.email}`,
              `Sitio web: ${c.url}`,
              ...registryEs,
            ] },
          ],
        },
        {
          h: '2. Objeto y aceptación',
          blocks: [
            'El presente aviso legal regula el acceso y uso del sitio web juntial.es (en adelante, el «sitio web»), a través del cual el titular informa sobre sus servicios de desarrollo de software a medida, automatización de procesos, inteligencia artificial e integración de Zoho One.',
            'El acceso al sitio web atribuye la condición de usuario e implica la aceptación de las condiciones recogidas en este aviso legal. Si no está de acuerdo con ellas, le rogamos que no utilice el sitio web.',
          ],
        },
        {
          h: '3. Condiciones de uso',
          blocks: [
            'El usuario se compromete a hacer un uso adecuado del sitio web y de sus contenidos, conforme a la ley, la buena fe y el orden público, y a no emplearlos para:',
            { list: [
              'Realizar actividades ilícitas o contrarias a la buena fe y al orden público.',
              'Introducir o difundir virus informáticos o cualquier otro sistema que pueda causar daños en los sistemas del titular o de terceros.',
              'Intentar acceder sin autorización a áreas restringidas, sistemas o datos del titular o de terceros.',
              'Enviar a través de los formularios información falsa, de terceros sin su consentimiento o comunicaciones comerciales no solicitadas.',
            ] },
          ],
        },
        {
          h: '4. Propiedad intelectual e industrial',
          blocks: [
            'Todos los contenidos del sitio web (textos, imágenes, vídeos, diseño, logotipos, código fuente y demás elementos) son titularidad de JUNTIAL, COOP. V. o de terceros que han autorizado su uso, y están protegidos por la normativa de propiedad intelectual e industrial.',
            'Queda prohibida su reproducción, distribución, comunicación pública o transformación, total o parcial, sin autorización expresa y por escrito del titular. Las marcas de terceros que puedan aparecer (por ejemplo, Zoho) pertenecen a sus respectivos propietarios y se citan solo a efectos informativos.',
          ],
        },
        {
          h: '5. Responsabilidad',
          blocks: [
            'El titular trabaja para que la información del sitio web sea correcta y esté actualizada, pero no garantiza la ausencia de errores ni la disponibilidad ininterrumpida del sitio. Los casos prácticos y ejemplos que se muestran tienen carácter ilustrativo y no constituyen una oferta vinculante: cada proyecto se presupuesta de forma individual.',
            'El titular no se hace responsable de los daños derivados de un uso indebido del sitio web, ni de interrupciones, virus o fallos técnicos ajenos a su control.',
          ],
        },
        {
          h: '6. Enlaces a terceros',
          blocks: [
            'El sitio web puede contener enlaces a sitios de terceros (por ejemplo, Google Maps). El titular no controla esos sitios ni se responsabiliza de sus contenidos o de sus políticas de privacidad.',
          ],
        },
        {
          h: '7. Protección de datos y cookies',
          blocks: [
            'El tratamiento de los datos personales que se recogen a través del sitio web se rige por nuestra Política de privacidad, y el uso de cookies y tecnologías similares por nuestra Política de cookies.',
          ],
        },
        {
          h: '8. Legislación aplicable y jurisdicción',
          blocks: [
            'Este aviso legal se rige por la legislación española. Para la resolución de cualquier controversia, las partes se someten a los juzgados y tribunales que correspondan conforme a la ley; cuando el usuario tenga la condición de consumidor, serán competentes los de su domicilio.',
          ],
        },
      ],
    },

    privacy: {
      title: 'Política de privacidad',
      sections: [
        {
          h: '1. Responsable del tratamiento',
          blocks: [
            { list: [
              `Responsable: ${c.legalName}`,
              `NIF: ${c.taxId}`,
              `Dirección postal: ${addr}`,
              `Correo electrónico de contacto: ${c.email}`,
            ] },
            'Tratamos sus datos personales conforme al Reglamento (UE) 2016/679, General de Protección de Datos (RGPD), y a la Ley Orgánica 3/2018, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD).',
          ],
        },
        {
          h: '2. Qué datos tratamos',
          blocks: [
            'Solo tratamos los datos que usted nos facilita voluntariamente y los estrictamente necesarios para el funcionamiento del sitio web:',
            { list: [
              'Formulario de contacto («Hablemos»): nombre, apellido, teléfono y/o correo electrónico y la descripción que nos escriba. Le pedimos que no incluya en ella datos sensibles ni datos de terceros.',
              'Comunicaciones posteriores: los datos que intercambiemos por correo, teléfono o reuniones a raíz de su solicitud.',
              'Datos técnicos de navegación: el servidor que aloja la web registra de forma automática datos como la dirección IP, la fecha y hora de acceso y el navegador utilizado, con fines de seguridad y funcionamiento.',
            ] },
          ],
        },
        {
          h: '3. Finalidades del tratamiento',
          blocks: [
            { list: [
              'Atender su solicitud de información o de presupuesto y ponernos en contacto con usted por el medio que nos haya indicado.',
              'Gestionar la relación precontractual y, en su caso, contractual: preparación de propuestas, reuniones y seguimiento comercial de su solicitud.',
              'Garantizar la seguridad del sitio web y prevenir abusos (por ejemplo, envíos automatizados de spam).',
            ] },
            'No elaboramos perfiles ni tomamos decisiones automatizadas con efectos jurídicos sobre usted. No le enviaremos comunicaciones comerciales periódicas (boletines) salvo que nos dé su consentimiento expreso para ello.',
          ],
        },
        {
          h: '4. Base jurídica',
          blocks: [
            { list: [
              'Su consentimiento (art. 6.1.a RGPD), que presta al enviar el formulario tras aceptar esta política. Puede retirarlo en cualquier momento sin que ello afecte a la licitud del tratamiento previo.',
              'La aplicación de medidas precontractuales a petición suya y, en su caso, la ejecución del contrato (art. 6.1.b RGPD).',
              'Nuestro interés legítimo en mantener la seguridad del sitio web (art. 6.1.f RGPD), respecto de los datos técnicos de navegación.',
              'El cumplimiento de obligaciones legales (art. 6.1.c RGPD), por ejemplo fiscales y contables si llegamos a contratar.',
            ] },
          ],
        },
        {
          h: '5. Plazo de conservación',
          blocks: [
            'Conservaremos los datos de su solicitud mientras sean necesarios para atenderla. Si no llega a formalizarse una relación contractual, los suprimiremos como máximo a los 12 meses desde nuestro último contacto. Si se formaliza, los conservaremos mientras dure la relación y, después, durante los plazos de prescripción de las obligaciones legales aplicables. Los registros técnicos del servidor se conservan durante un periodo breve, según la configuración del proveedor de alojamiento.',
          ],
        },
        {
          h: '6. Destinatarios y encargados del tratamiento',
          blocks: [
            'No cedemos sus datos a terceros, salvo obligación legal. Para prestar nuestros servicios contamos con proveedores que tratan datos por nuestra cuenta, con los que tenemos suscritos los correspondientes contratos de encargo del tratamiento:',
            { list: [
              'Zoho Corporation B.V. (Países Bajos): software CRM en el que registramos y gestionamos las solicitudes de contacto. Los datos se alojan en su centro de datos de la Unión Europea.',
              'Hostinger: proveedor de alojamiento del sitio web.',
            ] },
            'Si algún proveedor accediera a los datos desde fuera del Espacio Económico Europeo, la transferencia se realizaría con las garantías adecuadas previstas en el RGPD, como las cláusulas contractuales tipo aprobadas por la Comisión Europea.',
          ],
        },
        {
          h: '7. Sus derechos',
          blocks: [
            'Puede ejercer en cualquier momento sus derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad de sus datos, así como retirar su consentimiento:',
            { list: [
              `Por correo electrónico a ${c.email}, indicando en el asunto «Protección de datos».`,
              `Por correo postal a ${c.legalName}, ${addr}.`,
            ] },
            'Le responderemos en el plazo máximo de un mes. Si tenemos dudas razonables sobre su identidad, podremos pedirle información adicional para confirmarla.',
            'Si considera que no hemos tratado sus datos correctamente, puede presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).',
          ],
        },
        {
          h: '8. Menores de edad',
          blocks: [
            'Nuestros servicios se dirigen a empresas y profesionales. No recogemos de forma consciente datos de menores de 14 años; si detectamos que se nos han facilitado, los eliminaremos.',
          ],
        },
        {
          h: '9. Seguridad',
          blocks: [
            'Aplicamos medidas técnicas y organizativas adecuadas para proteger sus datos frente a pérdida, alteración o acceso no autorizado, como el cifrado de las comunicaciones (HTTPS) y el control de acceso a nuestros sistemas.',
          ],
        },
        {
          h: '10. Cambios en esta política',
          blocks: [
            'Podemos actualizar esta política para adaptarla a cambios legales o en nuestros servicios. La fecha de la última actualización figura al inicio de esta página.',
          ],
        },
      ],
    },

    cookies: {
      title: 'Política de cookies',
      sections: [
        {
          h: '1. Qué son las cookies',
          blocks: [
            'Las cookies y tecnologías similares (como el almacenamiento local del navegador, «localStorage») son pequeños archivos o datos que un sitio web guarda en su dispositivo para recordar información sobre su visita.',
          ],
        },
        {
          h: '2. Qué cookies utiliza este sitio web',
          blocks: [
            'Este sitio web no utiliza cookies de análisis, de publicidad ni de seguimiento, ni propias ni de terceros. Solo guarda en su navegador las preferencias que usted elige, para mantenerlas entre visitas:',
            { table: {
              head: ['Nombre', 'Tipo', 'Finalidad', 'Duración'],
              rows: [
                ['juntial-lang', 'Propia · técnica (localStorage)', 'Recordar el idioma elegido', 'Hasta que la borre'],
                ['juntial-theme', 'Propia · técnica (localStorage)', 'Recordar el tema claro u oscuro', 'Hasta que la borre'],
              ],
            } },
            'Estas tecnologías son estrictamente necesarias para ofrecer un servicio solicitado por usted, por lo que están exentas del deber de recabar consentimiento según el artículo 22.2 de la LSSI-CE y la Guía sobre el uso de las cookies de la Agencia Española de Protección de Datos.',
          ],
        },
        {
          h: '3. Contenidos de terceros',
          blocks: [
            'Algunos vídeos pueden mostrarse mediante YouTube en su modo de privacidad mejorada (youtube-nocookie.com). No se carga nada de YouTube hasta que usted pulsa el botón de reproducir; a partir de ese momento, YouTube (Google) puede almacenar información en su navegador conforme a su propia política de privacidad.',
            'El enlace a Google Maps del pie de página solo le lleva a la web de Google cuando hace clic en él.',
          ],
        },
        {
          h: '4. Cómo gestionar o eliminar las cookies',
          blocks: [
            'Puede borrar en cualquier momento los datos guardados por este sitio web, o bloquearlos, desde la configuración de su navegador (normalmente en «Privacidad» o «Datos de sitios»). Si los elimina, simplemente se restablecerán el idioma y el tema por defecto.',
          ],
        },
        {
          h: '5. Cambios en esta política',
          blocks: [
            'Si en el futuro incorporamos cookies que requieran su consentimiento (por ejemplo, de análisis), actualizaremos esta política y le pediremos su consentimiento antes de instalarlas.',
          ],
        },
      ],
    },
  },
}

const en = {
  notice: '',
  updatedLabel: 'Last updated',
  docs: {
    legal: {
      title: 'Legal notice',
      sections: [
        {
          h: '1. Owner details',
          blocks: [
            'In accordance with article 10 of Spanish Law 34/2002 on Information Society Services and E-commerce (LSSI-CE), the details of the owner of this website are:',
            { list: [
              `Owner: ${c.legalName}`,
              `Tax ID (NIF): ${c.taxId}`,
              `Registered office: ${addr}`,
              `Email: ${c.email}`,
              `Website: ${c.url}`,
              ...registryEn,
            ] },
          ],
        },
        {
          h: '2. Purpose and acceptance',
          blocks: [
            'This legal notice governs access to and use of juntial.es (the "website"), through which the owner provides information about its custom software development, process automation, artificial intelligence and Zoho One integration services.',
            'Accessing the website makes you a user and implies acceptance of these terms. If you do not agree with them, please do not use the website.',
          ],
        },
        {
          h: '3. Terms of use',
          blocks: [
            'Users undertake to use the website and its contents lawfully, in good faith and in accordance with public order, and not to use them to:',
            { list: [
              'Carry out unlawful activities or activities contrary to good faith and public order.',
              'Introduce or spread computer viruses or any other system that may damage the systems of the owner or third parties.',
              'Attempt to gain unauthorised access to restricted areas, systems or data of the owner or third parties.',
              'Submit false information, third-party data without their consent or unsolicited commercial communications through the forms.',
            ] },
          ],
        },
        {
          h: '4. Intellectual and industrial property',
          blocks: [
            'All website contents (texts, images, videos, design, logos, source code and other elements) belong to JUNTIAL, COOP. V. or to third parties who have authorised their use, and are protected by intellectual and industrial property law.',
            'Their total or partial reproduction, distribution, public communication or transformation without the owner\'s express written authorisation is prohibited. Third-party trademarks that may appear (e.g. Zoho) belong to their respective owners and are mentioned for information purposes only.',
          ],
        },
        {
          h: '5. Liability',
          blocks: [
            'The owner strives to keep the information on the website accurate and up to date, but does not guarantee that it is error-free or that the website will be available without interruption. The use cases and examples shown are illustrative and do not constitute a binding offer: each project is quoted individually.',
            'The owner is not liable for damages arising from misuse of the website, or for interruptions, viruses or technical failures beyond its control.',
          ],
        },
        {
          h: '6. Third-party links',
          blocks: [
            'The website may contain links to third-party sites (e.g. Google Maps). The owner does not control those sites and is not responsible for their contents or privacy policies.',
          ],
        },
        {
          h: '7. Data protection and cookies',
          blocks: [
            'The processing of personal data collected through the website is governed by our Privacy policy, and the use of cookies and similar technologies by our Cookie policy.',
          ],
        },
        {
          h: '8. Governing law and jurisdiction',
          blocks: [
            'This legal notice is governed by Spanish law. Any dispute shall be submitted to the courts that are competent by law; where the user is a consumer, the courts of their place of residence shall be competent.',
          ],
        },
      ],
    },

    privacy: {
      title: 'Privacy policy',
      sections: [
        {
          h: '1. Data controller',
          blocks: [
            { list: [
              `Controller: ${c.legalName}`,
              `Tax ID (NIF): ${c.taxId}`,
              `Postal address: ${addr}`,
              `Contact email: ${c.email}`,
            ] },
            'We process your personal data in accordance with Regulation (EU) 2016/679, the General Data Protection Regulation (GDPR), and Spanish Organic Law 3/2018 on Personal Data Protection (LOPDGDD).',
          ],
        },
        {
          h: '2. What data we process',
          blocks: [
            'We only process the data you voluntarily provide and the data strictly necessary for the website to work:',
            { list: [
              'Contact form ("Let\'s talk"): first name, last name, phone and/or email and the description you write. Please do not include sensitive data or third-party data in it.',
              'Further communications: the data we exchange by email, phone or meetings as a result of your request.',
              'Technical browsing data: the server hosting the website automatically logs data such as IP address, date and time of access and browser used, for security and operational purposes.',
            ] },
          ],
        },
        {
          h: '3. Purposes',
          blocks: [
            { list: [
              'Responding to your request for information or a quote and contacting you through the channel you indicated.',
              'Managing the pre-contractual and, where applicable, contractual relationship: proposals, meetings and commercial follow-up of your request.',
              'Ensuring the security of the website and preventing abuse (e.g. automated spam submissions).',
            ] },
            'We do not create profiles or make automated decisions with legal effects on you. We will not send you periodic commercial communications (newsletters) unless you give your express consent.',
          ],
        },
        {
          h: '4. Legal basis',
          blocks: [
            { list: [
              'Your consent (art. 6.1.a GDPR), given when you submit the form after accepting this policy. You may withdraw it at any time without affecting the lawfulness of prior processing.',
              'Taking pre-contractual steps at your request and, where applicable, performing the contract (art. 6.1.b GDPR).',
              'Our legitimate interest in keeping the website secure (art. 6.1.f GDPR), regarding technical browsing data.',
              'Compliance with legal obligations (art. 6.1.c GDPR), e.g. tax and accounting obligations if we enter into a contract.',
            ] },
          ],
        },
        {
          h: '5. Retention period',
          blocks: [
            'We will keep the data of your request for as long as necessary to handle it. If no contractual relationship is formed, we will delete it no later than 12 months after our last contact. If one is formed, we will keep it for the duration of the relationship and then for the limitation periods of the applicable legal obligations. Server technical logs are kept for a short period according to the hosting provider\'s configuration.',
          ],
        },
        {
          h: '6. Recipients and processors',
          blocks: [
            'We do not share your data with third parties unless required by law. We rely on providers who process data on our behalf, with whom we have signed the corresponding data processing agreements:',
            { list: [
              'Zoho Corporation B.V. (Netherlands): CRM software in which we record and manage contact requests. Data is hosted in its European Union data centre.',
              'Hostinger: website hosting provider.',
            ] },
            'Should any provider access the data from outside the European Economic Area, the transfer would be carried out with the appropriate safeguards provided for in the GDPR, such as the standard contractual clauses approved by the European Commission.',
          ],
        },
        {
          h: '7. Your rights',
          blocks: [
            'You may at any time exercise your rights of access, rectification, erasure, objection, restriction of processing and data portability, and withdraw your consent:',
            { list: [
              `By email to ${c.email}, with the subject "Data protection".`,
              `By post to ${c.legalName}, ${addr}.`,
            ] },
            'We will reply within one month. If we have reasonable doubts about your identity, we may ask for additional information to confirm it.',
            'If you believe we have not processed your data correctly, you may lodge a complaint with the Spanish Data Protection Agency (www.aepd.es).',
          ],
        },
        {
          h: '8. Minors',
          blocks: [
            'Our services are aimed at businesses and professionals. We do not knowingly collect data from children under 14; if we detect that such data has been provided, we will delete it.',
          ],
        },
        {
          h: '9. Security',
          blocks: [
            'We apply appropriate technical and organisational measures to protect your data against loss, alteration or unauthorised access, such as encrypted communications (HTTPS) and access control to our systems.',
          ],
        },
        {
          h: '10. Changes to this policy',
          blocks: [
            'We may update this policy to reflect legal changes or changes to our services. The date of the last update is shown at the top of this page.',
          ],
        },
      ],
    },

    cookies: {
      title: 'Cookie policy',
      sections: [
        {
          h: '1. What cookies are',
          blocks: [
            'Cookies and similar technologies (such as the browser\'s local storage, "localStorage") are small files or pieces of data that a website stores on your device to remember information about your visit.',
          ],
        },
        {
          h: '2. Cookies used on this website',
          blocks: [
            'This website does not use analytics, advertising or tracking cookies, whether first-party or third-party. It only stores in your browser the preferences you choose, to keep them between visits:',
            { table: {
              head: ['Name', 'Type', 'Purpose', 'Duration'],
              rows: [
                ['juntial-lang', 'First-party · technical (localStorage)', 'Remember the chosen language', 'Until you delete it'],
                ['juntial-theme', 'First-party · technical (localStorage)', 'Remember the light or dark theme', 'Until you delete it'],
              ],
            } },
            'These technologies are strictly necessary to provide a service you requested, so they are exempt from the consent requirement under article 22.2 of the LSSI-CE and the Spanish Data Protection Agency\'s Guide on the use of cookies.',
          ],
        },
        {
          h: '3. Third-party content',
          blocks: [
            'Some videos may be displayed through YouTube in its privacy-enhanced mode (youtube-nocookie.com). Nothing is loaded from YouTube until you press play; from that moment, YouTube (Google) may store information in your browser in accordance with its own privacy policy.',
            'The Google Maps link in the footer only takes you to Google\'s website when you click it.',
          ],
        },
        {
          h: '4. How to manage or delete cookies',
          blocks: [
            'You can delete or block the data stored by this website at any time from your browser settings (usually under "Privacy" or "Site data"). If you delete it, the default language and theme will simply be restored.',
          ],
        },
        {
          h: '5. Changes to this policy',
          blocks: [
            'If in the future we add cookies that require your consent (e.g. analytics), we will update this policy and ask for your consent before setting them.',
          ],
        },
      ],
    },
  },
}

export const legal = { es, en, fr: es, ca: es }
export const legalUpdated = UPDATED
