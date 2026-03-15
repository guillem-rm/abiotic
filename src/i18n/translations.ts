export const locales = ['ca', 'es', 'en', 'fr'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'ca';

export const languageNames: Record<Locale, string> = {
  ca: 'Català',
  es: 'Español',
  en: 'English',
  fr: 'Français',
};

export const languageFlagImg: Record<Locale, string> = {
  ca: '/flags/ad.webp',
  es: '/flags/es.webp',
  en: '/flags/gb.webp',
  fr: '/flags/fr.webp',
};

export const ogLocales: Record<Locale, string> = {
  ca: 'ca_AD',
  es: 'es_AD',
  en: 'en_AD',
  fr: 'fr_AD',
};

// ── UI strings ────────────────────────────────────────────────────────────────

export const ui = {
  ca: {
    'nav.home': 'Inici',
    'nav.company': "L'empresa",
    'nav.services': 'Serveis',
    'nav.contact': 'Contacte',
    'nav.services.water': "Gestió d'Aigua",
    'nav.services.environmental': 'Gestió Ambiental',
    'nav.services.engineering': 'Enginyeria',
    'nav.openMenu': 'Obrir menú',
    'footer.nav': 'Navegació',
    'footer.contact': 'Contacte',
    'footer.rights': 'Tots els drets reservats',
    'footer.privacy': 'Política de Privacitat',
    'footer.tagline': 'Consultoria ambiental i gestió de recursos hídrics a Andorra.',
    'home.hero.eyebrow': 'Consultoria ambiental · Andorra',
    'home.hero.cta.services': 'Descobreix els serveis',
    'home.hero.cta.contact': "Contacta'ns",
    'home.stats.founded': 'Fundació',
    'home.stats.areas': "Àrees d'especialització",
    'home.stats.presence': 'Presència local',
    'home.services.title': 'Els nostres serveis',
    'home.services.subtitle': "Tres àrees d'especialització",
    'home.mission.label': 'La nostra missió',
    'home.mission.quote': "L'aigua és un servei essencial i alhora un recurs escàs.",
    'home.mission.years': "Anys d'experiència",
    'home.values.title': 'Per què Àbiòtic',
    'home.values.subtitle': 'Els nostres compromisos',
    'company.eyebrow': "L'empresa",
    'company.hero.title': 'Qui som',
    'company.hero.subtitle': "Empresa de gestió ambiental i consultoria tècnica al Principat d'Andorra.",
    'company.foundedLabel': 'Fundació',
    'company.certLabel': 'Certificació acreditada',
    'company.areas.title': "Àrees d'activitat",
    'company.values.title': 'Els nostres valors',
    'contact.eyebrow': 'Contacte',
    'contact.hero.title': 'Parlem del teu projecte.',
    'contact.form.title': "Envia'ns un missatge",
    'contact.success.label': 'Missatge enviat',
    'contact.success.title': 'Gràcies pel teu contacte.',
    'contact.success.body': 'Ens posarem en contacte amb tu tan aviat com sigui possible.',
    'contact.info.title': 'Informació de contacte',
    'contact.info.address': 'Adreça',
    'contact.info.phone': 'Telèfon',
    'contact.info.email': 'Correu electrònic',
    'contact.info.social': 'Xarxes socials',
    'form.name': 'Nom i cognoms',
    'form.email': 'Correu electrònic',
    'form.company': 'Empresa',
    'form.company.optional': '(opcional)',
    'form.company.placeholder': "Nom de l'empresa",
    'form.message': 'Missatge',
    'form.message.placeholder': "Explica'ns en què podem ajudar-te...",
    'form.privacy': 'He llegit i accepto la',
    'form.privacy.link': 'política de privadesa',
    'form.submit': 'Envia el missatge',
    'services.eyebrow': 'Serveis',
    'services.areas': "Àmbits d'actuació",
    'services.applications': 'Aplicacions',
    'services.other': 'Altres serveis',
    'services.otherSub': 'Explorar més àrees',
    'services.cta.heading': 'Parlem del teu projecte',
    'home.services.cta': 'Veure servei',
    'marquee.text': 'El potencial de les energies renovables és immens',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.company': 'La empresa',
    'nav.services': 'Servicios',
    'nav.contact': 'Contacto',
    'nav.services.water': 'Gestión del Agua',
    'nav.services.environmental': 'Gestión Ambiental',
    'nav.services.engineering': 'Ingeniería',
    'nav.openMenu': 'Abrir menú',
    'footer.nav': 'Navegación',
    'footer.contact': 'Contacto',
    'footer.rights': 'Todos los derechos reservados',
    'footer.privacy': 'Política de Privacidad',
    'footer.tagline': 'Consultoría ambiental y gestión de recursos hídricos en Andorra.',
    'home.hero.eyebrow': 'Consultoría ambiental · Andorra',
    'home.hero.cta.services': 'Descubre los servicios',
    'home.hero.cta.contact': 'Contáctanos',
    'home.stats.founded': 'Fundación',
    'home.stats.areas': 'Áreas de especialización',
    'home.stats.presence': 'Presencia local',
    'home.services.title': 'Nuestros servicios',
    'home.services.subtitle': 'Tres áreas de especialización',
    'home.mission.label': 'Nuestra misión',
    'home.mission.quote': 'El agua es un servicio esencial y a la vez un recurso escaso.',
    'home.mission.years': 'Años de experiencia',
    'home.values.title': 'Por qué Àbiòtic',
    'home.values.subtitle': 'Nuestros compromisos',
    'company.eyebrow': 'La empresa',
    'company.hero.title': 'Quiénes somos',
    'company.hero.subtitle': 'Empresa de gestión ambiental y consultoría técnica en el Principado de Andorra.',
    'company.foundedLabel': 'Fundación',
    'company.certLabel': 'Certificación acreditada',
    'company.areas.title': 'Áreas de actividad',
    'company.values.title': 'Nuestros valores',
    'contact.eyebrow': 'Contacto',
    'contact.hero.title': 'Hablemos de tu proyecto.',
    'contact.form.title': 'Envíanos un mensaje',
    'contact.success.label': 'Mensaje enviado',
    'contact.success.title': 'Gracias por tu contacto.',
    'contact.success.body': 'Nos pondremos en contacto contigo lo antes posible.',
    'contact.info.title': 'Información de contacto',
    'contact.info.address': 'Dirección',
    'contact.info.phone': 'Teléfono',
    'contact.info.email': 'Correo electrónico',
    'contact.info.social': 'Redes sociales',
    'form.name': 'Nombre y apellidos',
    'form.email': 'Correo electrónico',
    'form.company': 'Empresa',
    'form.company.optional': '(opcional)',
    'form.company.placeholder': 'Nombre de la empresa',
    'form.message': 'Mensaje',
    'form.message.placeholder': 'Explícanos en qué podemos ayudarte...',
    'form.privacy': 'He leído y acepto la',
    'form.privacy.link': 'política de privacidad',
    'form.submit': 'Enviar mensaje',
    'services.eyebrow': 'Servicios',
    'services.areas': 'Ámbitos de actuación',
    'services.applications': 'Aplicaciones',
    'services.other': 'Otros servicios',
    'services.otherSub': 'Explorar más áreas',
    'services.cta.heading': 'Hablemos de tu proyecto',
    'home.services.cta': 'Ver servicio',
    'marquee.text': 'El potencial de las energías renovables es inmenso',
  },
  en: {
    'nav.home': 'Home',
    'nav.company': 'The Company',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.services.water': 'Water Management',
    'nav.services.environmental': 'Environmental Management',
    'nav.services.engineering': 'Engineering',
    'nav.openMenu': 'Open menu',
    'footer.nav': 'Navigation',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved',
    'footer.privacy': 'Privacy Policy',
    'footer.tagline': 'Environmental consulting and water resource management in Andorra.',
    'home.hero.eyebrow': 'Environmental consulting · Andorra',
    'home.hero.cta.services': 'Explore services',
    'home.hero.cta.contact': 'Contact us',
    'home.stats.founded': 'Founded',
    'home.stats.areas': 'Areas of expertise',
    'home.stats.presence': 'Local presence',
    'home.services.title': 'Our services',
    'home.services.subtitle': 'Three areas of expertise',
    'home.mission.label': 'Our mission',
    'home.mission.quote': 'Water is an essential service and a scarce resource.',
    'home.mission.years': 'Years of experience',
    'home.values.title': 'Why Àbiòtic',
    'home.values.subtitle': 'Our commitments',
    'company.eyebrow': 'The Company',
    'company.hero.title': 'Who we are',
    'company.hero.subtitle': 'Environmental management and technical consultancy in the Principality of Andorra.',
    'company.foundedLabel': 'Founded',
    'company.certLabel': 'Accredited certification',
    'company.areas.title': 'Areas of activity',
    'company.values.title': 'Our values',
    'contact.eyebrow': 'Contact',
    'contact.hero.title': "Let's talk about your project.",
    'contact.form.title': 'Send us a message',
    'contact.success.label': 'Message sent',
    'contact.success.title': 'Thank you for contacting us.',
    'contact.success.body': 'We will get in touch with you as soon as possible.',
    'contact.info.title': 'Contact information',
    'contact.info.address': 'Address',
    'contact.info.phone': 'Phone',
    'contact.info.email': 'Email address',
    'contact.info.social': 'Social media',
    'form.name': 'Full name',
    'form.email': 'Email address',
    'form.company': 'Company',
    'form.company.optional': '(optional)',
    'form.company.placeholder': 'Company name',
    'form.message': 'Message',
    'form.message.placeholder': 'Tell us how we can help you...',
    'form.privacy': 'I have read and accept the',
    'form.privacy.link': 'privacy policy',
    'form.submit': 'Send message',
    'services.eyebrow': 'Services',
    'services.areas': 'Areas of activity',
    'services.applications': 'Applications',
    'services.other': 'Other services',
    'services.otherSub': 'Explore more areas',
    'services.cta.heading': "Let's talk about your project",
    'home.services.cta': 'View service',
    'marquee.text': 'The potential of renewable energy is immense',
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.company': "L'entreprise",
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.services.water': "Gestion de l'Eau",
    'nav.services.environmental': 'Gestion Environnementale',
    'nav.services.engineering': 'Ingénierie',
    'nav.openMenu': 'Ouvrir le menu',
    'footer.nav': 'Navigation',
    'footer.contact': 'Contact',
    'footer.rights': 'Tous droits réservés',
    'footer.privacy': 'Politique de Confidentialité',
    'footer.tagline': "Conseil environnemental et gestion des ressources en eau en Andorre.",
    'home.hero.eyebrow': 'Conseil environnemental · Andorre',
    'home.hero.cta.services': 'Découvrir les services',
    'home.hero.cta.contact': 'Nous contacter',
    'home.stats.founded': 'Fondation',
    'home.stats.areas': 'Domaines de spécialisation',
    'home.stats.presence': 'Présence locale',
    'home.services.title': 'Nos services',
    'home.services.subtitle': "Trois domaines d'expertise",
    'home.mission.label': 'Notre mission',
    'home.mission.quote': "L'eau est un service essentiel et une ressource rare.",
    'home.mission.years': "Années d'expérience",
    'home.values.title': 'Pourquoi Àbiòtic',
    'home.values.subtitle': 'Nos engagements',
    'company.eyebrow': "L'entreprise",
    'company.hero.title': 'Qui sommes-nous',
    'company.hero.subtitle': "Entreprise de gestion environnementale et de conseil technique en Principauté d'Andorre.",
    'company.foundedLabel': 'Fondation',
    'company.certLabel': 'Certification accréditée',
    'company.areas.title': "Domaines d'activité",
    'company.values.title': 'Nos valeurs',
    'contact.eyebrow': 'Contact',
    'contact.hero.title': 'Parlons de votre projet.',
    'contact.form.title': 'Envoyez-nous un message',
    'contact.success.label': 'Message envoyé',
    'contact.success.title': 'Merci de nous avoir contacté.',
    'contact.success.body': 'Nous vous contacterons dès que possible.',
    'contact.info.title': 'Informations de contact',
    'contact.info.address': 'Adresse',
    'contact.info.phone': 'Téléphone',
    'contact.info.email': 'Adresse e-mail',
    'contact.info.social': 'Réseaux sociaux',
    'form.name': 'Nom et prénom',
    'form.email': 'Adresse e-mail',
    'form.company': 'Entreprise',
    'form.company.optional': '(facultatif)',
    'form.company.placeholder': "Nom de l'entreprise",
    'form.message': 'Message',
    'form.message.placeholder': 'Dites-nous comment nous pouvons vous aider...',
    'form.privacy': "J'ai lu et j'accepte la",
    'form.privacy.link': 'politique de confidentialité',
    'form.submit': 'Envoyer le message',
    'services.eyebrow': 'Services',
    'services.areas': "Domaines d'action",
    'services.applications': 'Applications',
    'services.other': 'Autres services',
    'services.otherSub': "Explorer d'autres domaines",
    'services.cta.heading': 'Parlons de votre projet',
    'home.services.cta': 'Voir le service',
    'marquee.text': 'Le potentiel des énergies renouvelables est immense',
  },
} as const;

export type UIKey = keyof (typeof ui)['ca'];

// ── Page content ──────────────────────────────────────────────────────────────

export interface ServiceData {
  title: string;
  description: string;
  href: string;
}

export interface ValueData {
  title: string;
  description: string;
}

export interface HomeData {
  hero: { headline: string[]; tagline: string };
  services: ServiceData[];
  mission: { heading: string; body: string; visio: string };
  values: ValueData[];
  cta: { heading: string; label: string; href: string };
}

export interface CompanyData {
  pullquote: { year: string; text: string };
  standards: string[];
  areas: ServiceData[];
  values: ValueData[];
  cta: { heading: string; label: string; href: string };
  bodyHtml: string;
}

export interface ContactData {
  intro: string;
  address: { street: string; city: string; country: string };
  phones: string[];
  email: string;
  instagram: string;
}

export interface ServicePageData {
  title: string;
  description: string;
  services: string[];
  applications: string[];
  body?: string;
}

// Home content for ES / EN / FR (CA comes from markdown)
export const homeContent: Record<'es' | 'en' | 'fr', HomeData> = {
  es: {
    hero: {
      headline: ['Gestión de redes de agua', 'Gestión ambiental', 'Energías renovables'],
      tagline: 'Consultoría ambiental y gestión de recursos hídricos en Andorra desde 2019.',
    },
    services: [
      { title: 'Gestión del Agua', description: 'Gestión de redes de agua potable e infraestructuras hídricas para municipios y empresas.', href: '/es/services/water-management' },
      { title: 'Gestión Ambiental', description: 'Consultoría ambiental, auditorías y soporte a certificaciones ISO 14001 y EMAS.', href: '/es/services/environmental' },
      { title: 'Ingeniería', description: 'Aplicación de nuevas tecnologías y soluciones técnicas en proyectos ambientales.', href: '/es/services/engineering' },
    ],
    mission: {
      heading: 'Invertimos en ciudades más saludables',
      body: 'El agua es un servicio esencial y a la vez un recurso escaso. Desde Àbiòtic velamos por asegurar la captación, el tratamiento, la distribución y el suministro de agua potable de calidad.',
      visio: 'El potencial de las energías renovables es inmenso. La integración del medioambiente en la gestión empresarial es hoy una fuente de ventaja competitiva.',
    },
    values: [
      { title: 'Plazos de ejecución', description: 'La experiencia del equipo y una planificación detallada de los trabajos permiten garantizar los plazos de ejecución de cada proyecto.' },
      { title: 'Servicio personalizado', description: 'Se ofrecen servicios adaptados a las necesidades reales del cliente, con un trato cercano y de confianza, buscando siempre la solución más óptima.' },
      { title: 'Proximidad', description: 'La proximidad geográfica con los clientes en Andorra permite establecer relaciones profesionales directas y eficientes.' },
    ],
    cta: { heading: 'Hablemos de tu proyecto', label: 'Contáctanos', href: '/es/contact' },
  },
  en: {
    hero: {
      headline: ['Water network management', 'Environmental management', 'Renewable energy'],
      tagline: 'Environmental consulting and water resource management in Andorra since 2019.',
    },
    services: [
      { title: 'Water Management', description: 'Management of drinking water networks and water infrastructures for municipalities and businesses.', href: '/en/services/water-management' },
      { title: 'Environmental Management', description: 'Environmental consulting, audits and support for ISO 14001 and EMAS certifications.', href: '/en/services/environmental' },
      { title: 'Engineering', description: 'Application of new technologies and technical solutions in environmental projects.', href: '/en/services/engineering' },
    ],
    mission: {
      heading: 'Investing in healthier cities',
      body: 'Water is an essential service and at the same time a scarce resource. At Àbiòtic we ensure the collection, treatment, distribution and supply of quality drinking water.',
      visio: 'The potential of renewable energies is immense. The integration of the environment into business management is today a source of competitive advantage.',
    },
    values: [
      { title: 'Delivery timelines', description: "The team's experience and detailed work planning allow us to guarantee the execution deadlines of each project." },
      { title: 'Personalised service', description: 'Services tailored to the real needs of each client, with a close and trustworthy approach, always seeking the most optimal solution.' },
      { title: 'Local proximity', description: 'Geographic proximity to clients in Andorra allows us to establish direct and efficient professional relationships.' },
    ],
    cta: { heading: "Let's talk about your project", label: 'Contact us', href: '/en/contact' },
  },
  fr: {
    hero: {
      headline: ["Gestion des réseaux d'eau", 'Gestion environnementale', 'Énergies renouvelables'],
      tagline: "Conseil environnemental et gestion des ressources en eau en Andorre depuis 2019.",
    },
    services: [
      { title: "Gestion de l'Eau", description: "Gestion des réseaux d'eau potable et des infrastructures hydrauliques pour les municipalités et les entreprises.", href: '/fr/services/water-management' },
      { title: 'Gestion Environnementale', description: 'Conseil environnemental, audits et soutien aux certifications ISO 14001 et EMAS.', href: '/fr/services/environmental' },
      { title: 'Ingénierie', description: "Application de nouvelles technologies et solutions techniques dans les projets environnementaux.", href: '/fr/services/engineering' },
    ],
    mission: {
      heading: 'Investir dans des villes plus saines',
      body: "L'eau est un service essentiel et à la fois une ressource rare. Chez Àbiòtic, nous veillons à assurer la collecte, le traitement, la distribution et la fourniture d'eau potable de qualité.",
      visio: "Le potentiel des énergies renouvelables est immense. L'intégration de l'environnement dans la gestion des entreprises est aujourd'hui une source d'avantage concurrentiel.",
    },
    values: [
      { title: "Délais d'exécution", description: "L'expérience de l'équipe et une planification détaillée des travaux permettent de garantir les délais d'exécution de chaque projet." },
      { title: 'Service personnalisé', description: "Des services adaptés aux besoins réels de chaque client, avec une approche proche et de confiance, en cherchant toujours la solution la plus optimale." },
      { title: 'Proximité', description: "La proximité géographique avec les clients en Andorre permet d'établir des relations professionnelles directes et efficaces." },
    ],
    cta: { heading: 'Parlons de votre projet', label: 'Nous contacter', href: '/fr/contact' },
  },
};

// Company content for ES / EN / FR
export const companyContent: Record<'es' | 'en' | 'fr', CompanyData> = {
  es: {
    pullquote: {
      year: '2019',
      text: 'Empresa de gestión ambiental fundada en el Principado de Andorra para dar respuesta a la creciente demanda de respeto y protección del medioambiente.',
    },
    standards: ['ISO 14001', 'EMAS'],
    areas: [
      { title: 'Gestión del Agua', description: 'Gestión de redes de agua potable e infraestructuras asociadas.', href: '/es/services/water-management' },
      { title: 'Gestión Ambiental', description: 'Servicios de gestión ambiental y apoyo a la sostenibilidad empresarial.', href: '/es/services/environmental' },
      { title: 'Ingeniería', description: 'Aplicación de nuevas tecnologías y soluciones técnicas en proyectos ambientales y energéticos.', href: '/es/services/engineering' },
    ],
    values: [
      { title: 'Plazos de ejecución', description: 'La experiencia del equipo y una planificación detallada de los trabajos permiten garantizar plazos de ejecución fiables. El departamento técnico estudia cada caso de forma independiente y elabora documentación técnica, incluyendo materiales y planos cuando es necesario, para optimizar el proceso de ejecución.' },
      { title: 'Servicio personalizado', description: 'Cada cliente tiene necesidades diferentes. Àbiòtic adapta sus servicios para ofrecer soluciones específicas, con un trato profesional, cercano y orientado a encontrar la opción más eficiente para cada situación.' },
      { title: 'Proximidad', description: 'La proximidad geográfica con los clientes en Andorra permite establecer relaciones profesionales más directas y eficientes. El objetivo es ofrecer una gestión integral del medioambiente mediante la diversificación de los servicios.' },
    ],
    cta: { heading: 'Trabaja con Àbiòtic', label: 'Contáctanos', href: '/es/contact' },
    bodyHtml: `<p>Àbiòtic nace en mayo de 2019 como empresa de gestión ambiental con el objetivo de dar respuesta a una creciente demanda de respeto, protección, mejora y conservación del medioambiente.</p>
<p>La creciente concienciación de los responsables políticos hacia la mejora medioambiental, así como una ciudadanía cada vez más exigente que reclama ciudades más saludables, ha provocado un aumento de las regulaciones ambientales que afectan a empresas públicas, privadas y particulares.</p>
<p>En este contexto, la integración del medioambiente en la gestión empresarial se ha convertido en una fuente de ventaja competitiva, especialmente en aspectos como la reducción del consumo de recursos, la disminución de residuos y la mejora de la imagen pública de la organización.</p>
<p>Cada vez son más las empresas que adoptan normas internacionales de gestión ambiental como el Reglamento europeo EMAS y la norma ISO 14001.</p>`,
  },
  en: {
    pullquote: {
      year: '2019',
      text: 'Environmental management company founded in the Principality of Andorra to meet the growing demand for respect and protection of the environment.',
    },
    standards: ['ISO 14001', 'EMAS'],
    areas: [
      { title: 'Water Management', description: 'Management of drinking water networks and associated infrastructure.', href: '/en/services/water-management' },
      { title: 'Environmental Management', description: 'Environmental management services and support for corporate sustainability.', href: '/en/services/environmental' },
      { title: 'Engineering', description: 'Application of new technologies and technical solutions in environmental and energy projects.', href: '/en/services/engineering' },
    ],
    values: [
      { title: 'Delivery timelines', description: "The team's experience and detailed work planning ensure reliable execution deadlines. The technical department studies each case independently and prepares technical documentation, including materials and plans when necessary, to optimise the execution process." },
      { title: 'Personalised service', description: 'Each client has different needs. Àbiòtic adapts its services to offer specific solutions, with a professional, close and efficiency-oriented approach to finding the best option for each situation.' },
      { title: 'Proximity', description: 'Geographic proximity to clients in Andorra allows more direct and efficient professional relationships. The goal is to offer comprehensive environmental management through diversification of services.' },
    ],
    cta: { heading: 'Work with Àbiòtic', label: 'Contact us', href: '/en/contact' },
    bodyHtml: `<p>Àbiòtic was founded in May 2019 as an environmental management company with the objective of responding to a growing demand for respect, protection, improvement and conservation of the environment.</p>
<p>The growing awareness of political leaders towards environmental improvement, as well as an increasingly demanding citizenry calling for healthier cities, has led to an increase in environmental regulations affecting public, private companies and individuals.</p>
<p>In this context, the integration of the environment into business management has become a source of competitive advantage, especially in aspects such as the reduction of resource consumption, waste reduction and the improvement of the public image of the organisation.</p>
<p>More and more companies are adopting international environmental management standards such as the European EMAS Regulation and the ISO 14001 standard.</p>`,
  },
  fr: {
    pullquote: {
      year: '2019',
      text: "Entreprise de gestion environnementale fondée en Principauté d'Andorre pour répondre à la demande croissante de respect et de protection de l'environnement.",
    },
    standards: ['ISO 14001', 'EMAS'],
    areas: [
      { title: "Gestion de l'Eau", description: "Gestion des réseaux d'eau potable et des infrastructures associées.", href: '/fr/services/water-management' },
      { title: 'Gestion Environnementale', description: 'Services de gestion environnementale et soutien à la durabilité des entreprises.', href: '/fr/services/environmental' },
      { title: 'Ingénierie', description: 'Application de nouvelles technologies et solutions techniques dans les projets environnementaux et énergétiques.', href: '/fr/services/engineering' },
    ],
    values: [
      { title: "Délais d'exécution", description: "L'expérience de l'équipe et une planification détaillée des travaux permettent de garantir des délais d'exécution fiables. Le département technique étudie chaque cas de façon indépendante et élabore la documentation technique, y compris les matériaux et les plans si nécessaire, pour optimiser le processus d'exécution." },
      { title: 'Service personnalisé', description: "Chaque client a des besoins différents. Àbiòtic adapte ses services pour offrir des solutions spécifiques, avec une approche professionnelle, proche et orientée vers la recherche de l'option la plus efficace pour chaque situation." },
      { title: 'Proximité', description: "La proximité géographique avec les clients en Andorre permet d'établir des relations professionnelles plus directes et efficaces. L'objectif est d'offrir une gestion intégrée de l'environnement grâce à la diversification des services." },
    ],
    cta: { heading: 'Travaillez avec Àbiòtic', label: 'Nous contacter', href: '/fr/contact' },
    bodyHtml: `<p>Àbiòtic a été fondée en mai 2019 en tant qu'entreprise de gestion environnementale avec pour objectif de répondre à une demande croissante de respect, de protection, d'amélioration et de conservation de l'environnement.</p>
<p>La sensibilisation croissante des responsables politiques à l'amélioration environnementale, ainsi qu'une citoyenneté de plus en plus exigeante réclamant des villes plus saines, a entraîné une augmentation des réglementations environnementales affectant les entreprises publiques, privées et les particuliers.</p>
<p>Dans ce contexte, l'intégration de l'environnement dans la gestion des entreprises est devenue une source d'avantage concurrentiel, notamment en termes de réduction de la consommation de ressources, de diminution des déchets et d'amélioration de l'image publique de l'organisation.</p>
<p>De plus en plus d'entreprises adoptent des normes internationales de gestion environnementale telles que le Règlement européen EMAS et la norme ISO 14001.</p>`,
  },
};

// Contact data (address/phones/email the same; only intro differs)
export const contactContent: Record<'es' | 'en' | 'fr', ContactData> = {
  es: {
    intro: 'Si quieres más información sobre nuestros servicios o hablar de un proyecto, puedes contactar con nosotros mediante el formulario o con los datos siguientes.',
    address: { street: 'Sant Joan de Caselles, Edifici Vilaedra nº75', city: 'AD100 Canillo', country: 'Principado de Andorra' },
    phones: ['+376 877 770', '+376 677 588'],
    email: 'abiotic.and@gmail.com',
    instagram: 'https://www.instagram.com/_abiotic_/',
  },
  en: {
    intro: 'If you would like more information about our services or discuss a project, you can contact us via the form or using the details below.',
    address: { street: 'Sant Joan de Caselles, Edifici Vilaedra nº75', city: 'AD100 Canillo', country: 'Principality of Andorra' },
    phones: ['+376 877 770', '+376 677 588'],
    email: 'abiotic.and@gmail.com',
    instagram: 'https://www.instagram.com/_abiotic_/',
  },
  fr: {
    intro: "Si vous souhaitez plus d'informations sur nos services ou discuter d'un projet, vous pouvez nous contacter via le formulaire ou en utilisant les coordonnées suivantes.",
    address: { street: 'Sant Joan de Caselles, Edifici Vilaedra nº75', city: 'AD100 Canillo', country: "Principauté d'Andorre" },
    phones: ['+376 877 770', '+376 677 588'],
    email: 'abiotic.and@gmail.com',
    instagram: 'https://www.instagram.com/_abiotic_/',
  },
};

// Services content for ES / EN / FR (CA comes from content collection)
export const servicesContent: Record<
  'water-management' | 'environmental' | 'engineering',
  Record<'es' | 'en' | 'fr', ServicePageData>
> = {
  'water-management': {
    es: {
      title: 'Gestión de Redes de Agua',
      description: 'Más de 20 años de experiencia en el ciclo del agua. Especialistas en construcción y mantenimiento de redes de agua potable, tratamiento, control de calidad y detección de fugas.',
      services: [
        'Instalación, reparación y mantenimiento de depósitos de captación.',
        'Tratamiento y potabilización de agua para el consumo humano.',
        'Gestión de redes de distribución y canalización.',
        'Ingeniería hidráulica: estudios y proyectos de obras.',
        'Control de calidad del agua potable (ISO 17025, ISO 9001).',
        'Detección de fugas con tecnología avanzada.',
      ],
      applications: ['Administraciones públicas', 'Municipios y comunes', 'Empresas e industrias', 'Edificios residenciales'],
      body: `<p>Tenemos una gran trayectoria y un amplio conocimiento de las infraestructuras hidráulicas. Somos especialistas reconocidos en el ámbito de la construcción y el mantenimiento de redes de agua.</p>
<p>Disponemos de una avanzada tecnología de comunicación, inspección y rehabilitación para la conservación de redes y canalizaciones, y realizamos permanentemente inspecciones y auditorías técnicas exhaustivas de las obras.</p>
<p><strong>Más de 20 años de experiencia en el ciclo del agua.</strong> Disponibilidad <strong>24 horas / 365 días al año</strong>. Recursos humanos, medios y maquinaria propia.</p>
<hr>
<h2>Instalación, reparación y mantenimiento de depósitos</h2>
<img src="/images/water-diposit-captacio.jpg" alt="Depósito de captación de agua potable">
<hr>
<h2>Tratamiento y control de calidad del agua potable</h2>
<p>En la fase de tratamiento se <strong>potabiliza el agua</strong> para que sea <strong>apta para el consumo humano</strong>. El tratamiento debe garantizar que el agua cumpla los requisitos de salud establecidos en la <strong>normativa vigente</strong>, asegurando la <strong>calidad y salubridad</strong> y eliminando cualquier tipo de contaminación.</p>
<p>El agua bruta contiene materia orgánica e inorgánica, microorganismos, sabor, olor, color y turbidez. Todos estos elementos se eliminan mediante diferentes procesos en las estaciones de tratamiento de agua potable.</p>
<img src="/images/water-estacio-tractament.jpg" alt="Estación de tratamiento de agua potable">
<p><strong>Pretratamiento</strong> — Se eliminan los cuerpos extraños mediante cribado progresivo. En el proceso de preoxidación se introducen agentes químicos oxidantes que reaccionan con las materias orgánicas e inorgánicas disueltas.</p>
<p><strong>Coagulación y floculación</strong> — Se añaden productos químicos y se realiza agitación rápida y lenta para favorecer la formación de <strong>flóculos</strong>.</p>
<p><strong>Decantación</strong> — El agua pasa a los <strong>decantadores</strong>, donde los flóculos se separan por gravedad y se depositan en el fondo en forma de lodo.</p>
<p><strong>Filtración</strong> — Los microflóculos que no se han eliminado se retienen en un <strong>lecho de arena</strong> que actúa como filtro.</p>
<p><strong>Neutralización</strong> — Se añaden reactivos como <strong>cal</strong> para ajustar la acidez y evitar corrosión o incrustaciones en las tuberías.</p>
<p><strong>Desinfección final</strong> — Se añaden agentes oxidantes como <strong>cloro y derivados</strong> para garantizar la calidad del agua frente a posibles contaminaciones en la red.</p>
<hr>
<h2>Red y canalización</h2>
<p>El abastecimiento consiste en hacer llegar <strong>agua potable</strong> a los puntos de demanda en perfectas condiciones de calidad y salubridad. La red de abastecimiento cuenta con <strong>28 depósitos</strong> que permiten almacenar agua potable y suministrarla a la red de distribución.</p>
<img src="/images/water-diposit-xarxa.jpg" alt="Depósito de la red de distribución">
<p>A través de la red de distribución el agua llega a hogares e industrias mediante infraestructuras <strong>electromecánicas</strong> que regulan caudal, presión y calidad del agua.</p>
<img src="/images/water-infraestructura-xarxa.jpg" alt="Infraestructura electromecánica de la red">
<hr>
<h2>Ingeniería del agua</h2>
<p>Desarrollamos <strong>estudios y proyectos de obras hidráulicas</strong> y mantenemos contratos de conservación y explotación de infraestructuras vinculadas al ciclo del agua, incluyendo captación, potabilización, distribución en alta, depuración de aguas residuales y reutilización del agua.</p>
<p>Nuestra actividad se extiende a <strong>todo el territorio andorrano</strong>. Más de <strong>50 instalaciones hidráulicas en explotación</strong> con diseño e ingeniería específica para cada proyecto, y más de <strong>50 años de experiencia en tratamiento de aguas</strong>.</p>
<img src="/images/water-enginyeria-hidraulica.jpg" alt="Ingeniería hidráulica en Andorra">
<hr>
<h2>Control de calidad del agua</h2>
<p>El control de la calidad del agua es una de las principales prioridades de <strong>ÀBIÒTIC</strong>. Disponemos de <strong>agentes acreditados para el análisis de aguas</strong> según UNE-EN ISO 17025 y UNE-EN ISO 9001, garantizando un <strong>Programa de Vigilancia y Control de la Calidad de las Aguas</strong> que cubre todo el ciclo.</p>
<img src="/images/water-control-qualitat.jpg" alt="Laboratorio de control de calidad del agua">
<table><thead><tr><th>Parámetro</th><th>Valor (agosto 2023)</th></tr></thead><tbody><tr><td>Cloro libre (mg/l)</td><td>0,5</td></tr><tr><td>pH</td><td>7,9</td></tr><tr><td>Turbidez (NTU)</td><td>0,16</td></tr><tr><td>Dureza (ºF)</td><td>16</td></tr></tbody></table>
<hr>
<h2>Detección de fugas</h2>
<img src="/images/water-deteccio-fuites.jpg" alt="Equipo de detección de fugas en red">
<p>Para más información sobre tecnología de detección: <a href="https://www.hidrofugas.es">hidrofugas.es</a></p>`,
    },
    en: {
      title: 'Water Network Management',
      description: 'Over 20 years of experience in the water cycle. Specialists in the construction and maintenance of drinking water networks, treatment, quality control and leak detection.',
      services: [
        'Installation, repair and maintenance of catchment tanks.',
        'Water treatment and purification for human consumption.',
        'Management of distribution networks and piping.',
        'Hydraulic engineering: studies and construction projects.',
        'Drinking water quality control (ISO 17025, ISO 9001).',
        'Leak detection with advanced technology.',
      ],
      applications: ['Public administrations', 'Municipalities', 'Companies and industries', 'Residential buildings'],
      body: `<p>We have an extensive track record and broad knowledge of hydraulic infrastructure. We are recognised specialists in the construction and maintenance of water networks.</p>
<p>We deploy advanced communication, inspection and rehabilitation technology for the conservation of networks and pipelines, and carry out permanent thorough technical inspections and audits of works.</p>
<p><strong>Over 20 years of experience in the water cycle.</strong> Availability <strong>24 hours / 365 days a year</strong>. Own human resources, equipment and machinery.</p>
<hr>
<h2>Installation, repair and maintenance of tanks</h2>
<img src="/images/water-diposit-captacio.jpg" alt="Drinking water catchment tank">
<hr>
<h2>Treatment and quality control of drinking water</h2>
<p>In the treatment phase, water is <strong>purified</strong> to make it <strong>safe for human consumption</strong>. Treatment must ensure that water meets the health requirements established by <strong>current regulations</strong>, guaranteeing <strong>quality and safety</strong> and eliminating all types of contamination.</p>
<p>Raw water contains organic and inorganic matter, microorganisms, taste, odour, colour and turbidity. All these elements are eliminated through different processes at drinking water treatment stations.</p>
<img src="/images/water-estacio-tractament.jpg" alt="Drinking water treatment station">
<p><strong>Pre-treatment</strong> — Foreign bodies are removed by progressive screening. In the pre-oxidation process, oxidising chemical agents are introduced to react with dissolved organic and inorganic matter.</p>
<p><strong>Coagulation and flocculation</strong> — Suspended particles are separated. Chemical products are added and rapid and slow agitation is carried out to promote the formation of <strong>flocs</strong>.</p>
<p><strong>Decantation</strong> — Water passes to <strong>decanters</strong>, where flocs are separated by gravity and settle to the bottom as sludge.</p>
<p><strong>Filtration</strong> — Micro-flocs that have not been eliminated are retained in a <strong>sand bed</strong> acting as a filter.</p>
<p><strong>Neutralisation</strong> — Reagents such as <strong>lime</strong> are added to adjust acidity and prevent corrosion or scaling in pipes.</p>
<p><strong>Final disinfection</strong> — Oxidising agents such as <strong>chlorine and derivatives</strong> are added to guarantee water quality against possible contamination in the network.</p>
<hr>
<h2>Network and piping</h2>
<p>The supply consists of delivering <strong>drinking water</strong> to demand points in perfect quality and safety conditions. The supply network has <strong>28 tanks</strong> that allow drinking water to be stored and supplied to the distribution network.</p>
<img src="/images/water-diposit-xarxa.jpg" alt="Distribution network tank">
<p>Through the distribution network, water reaches homes and industries via <strong>electromechanical</strong> infrastructure that regulates flow rate, pressure and water quality.</p>
<img src="/images/water-infraestructura-xarxa.jpg" alt="Electromechanical network infrastructure">
<hr>
<h2>Water engineering</h2>
<p>We develop <strong>studies and hydraulic construction projects</strong> and maintain conservation and operation contracts for infrastructure linked to the water cycle, including catchment, purification, high-level distribution, wastewater treatment and water reuse.</p>
<p>Our activity extends to the <strong>entire Andorran territory</strong>. Over <strong>50 hydraulic installations in operation</strong> with specific design and engineering for each project, and over <strong>50 years of experience in water treatment</strong>.</p>
<img src="/images/water-enginyeria-hidraulica.jpg" alt="Hydraulic engineering in Andorra">
<hr>
<h2>Water quality control</h2>
<p>Water quality control is one of <strong>ÀBIÒTIC</strong>'s main priorities. We have <strong>accredited agents for water analysis</strong> according to UNE-EN ISO 17025 and UNE-EN ISO 9001, guaranteeing a <strong>Water Quality Surveillance and Control Programme</strong> covering the entire cycle.</p>
<img src="/images/water-control-qualitat.jpg" alt="Water quality control laboratory">
<table><thead><tr><th>Parameter</th><th>Value (August 2023)</th></tr></thead><tbody><tr><td>Free chlorine (mg/l)</td><td>0.5</td></tr><tr><td>pH</td><td>7.9</td></tr><tr><td>Turbidity (NTU)</td><td>0.16</td></tr><tr><td>Hardness (ºF)</td><td>16</td></tr></tbody></table>
<hr>
<h2>Leak detection</h2>
<img src="/images/water-deteccio-fuites.jpg" alt="Leak detection equipment in network">
<p>For more information on detection technology: <a href="https://www.hidrofugas.es">hidrofugas.es</a></p>`,
    },
    fr: {
      title: "Gestion des Réseaux d'Eau",
      description: "Plus de 20 ans d'expérience dans le cycle de l'eau. Spécialistes dans la construction et la maintenance des réseaux d'eau potable, traitement, contrôle qualité et détection de fuites.",
      services: [
        "Installation, réparation et maintenance des réservoirs de captage.",
        "Traitement et potabilisation de l'eau pour la consommation humaine.",
        "Gestion des réseaux de distribution et de canalisation.",
        "Ingénierie hydraulique : études et projets de travaux.",
        "Contrôle qualité de l'eau potable (ISO 17025, ISO 9001).",
        "Détection de fuites avec technologie avancée.",
      ],
      applications: ['Administrations publiques', 'Municipalités', 'Entreprises et industries', 'Bâtiments résidentiels'],
      body: `<p>Nous avons un solide parcours et une connaissance approfondie des infrastructures hydrauliques. Nous sommes des spécialistes reconnus dans le domaine de la construction et de la maintenance des réseaux d'eau.</p>
<p>Nous disposons d'une technologie avancée de communication, d'inspection et de réhabilitation pour la conservation des réseaux et des canalisations, et nous effectuons en permanence des inspections et des audits techniques exhaustifs des travaux.</p>
<p><strong>Plus de 20 ans d'expérience dans le cycle de l'eau.</strong> Disponibilité <strong>24 heures / 365 jours par an</strong>. Ressources humaines, moyens et machines propres.</p>
<hr>
<h2>Installation, réparation et maintenance des réservoirs</h2>
<img src="/images/water-diposit-captacio.jpg" alt="Réservoir de captage d'eau potable">
<hr>
<h2>Traitement et contrôle qualité de l'eau potable</h2>
<p>Dans la phase de traitement, l'eau est <strong>potabilisée</strong> pour être <strong>apte à la consommation humaine</strong>. Le traitement doit garantir que l'eau répond aux exigences sanitaires établies par la <strong>réglementation en vigueur</strong>, assurant la <strong>qualité et la salubrité</strong> et éliminant tout type de contamination.</p>
<p>L'eau brute contient des matières organiques et inorganiques, des microorganismes, goût, odeur, couleur et turbidité. Tous ces éléments sont éliminés par différents procédés dans les stations de traitement d'eau potable.</p>
<img src="/images/water-estacio-tractament.jpg" alt="Station de traitement d'eau potable">
<p><strong>Prétraitement</strong> — Les corps étrangers sont éliminés par criblage progressif. Dans le processus de préoxydation, des agents chimiques oxydants sont introduits pour réagir avec les matières organiques et inorganiques dissoutes.</p>
<p><strong>Coagulation et floculation</strong> — Des produits chimiques sont ajoutés et une agitation rapide et lente est réalisée pour favoriser la formation de <strong>flocs</strong>.</p>
<p><strong>Décantation</strong> — L'eau passe dans les <strong>décanteurs</strong>, où les flocs se séparent par gravité et se déposent au fond sous forme de boue.</p>
<p><strong>Filtration</strong> — Les micro-flocs non éliminés sont retenus dans un <strong>lit de sable</strong> faisant office de filtre.</p>
<p><strong>Neutralisation</strong> — Des réactifs comme la <strong>chaux</strong> sont ajoutés pour ajuster l'acidité et éviter la corrosion ou le tartre dans les tuyaux.</p>
<p><strong>Désinfection finale</strong> — Des agents oxydants comme le <strong>chlore et dérivés</strong> sont ajoutés pour garantir la qualité de l'eau face aux contaminations possibles dans le réseau.</p>
<hr>
<h2>Réseau et canalisation</h2>
<p>L'approvisionnement consiste à acheminer l'<strong>eau potable</strong> vers les points de demande dans des conditions parfaites de qualité et de salubrité. Le réseau d'approvisionnement compte <strong>28 réservoirs</strong> permettant de stocker l'eau potable et de l'alimenter au réseau de distribution.</p>
<img src="/images/water-diposit-xarxa.jpg" alt="Réservoir du réseau de distribution">
<p>À travers le réseau de distribution, l'eau parvient aux foyers et aux industries via des infrastructures <strong>électromécaniques</strong> qui régulent le débit, la pression et la qualité de l'eau.</p>
<img src="/images/water-infraestructura-xarxa.jpg" alt="Infrastructure électromécanique du réseau">
<hr>
<h2>Ingénierie de l'eau</h2>
<p>Nous développons des <strong>études et projets d'ouvrages hydrauliques</strong> et maintenons des contrats de conservation et d'exploitation d'infrastructures liées au cycle de l'eau, incluant captage, potabilisation, distribution haute, épuration des eaux usées et réutilisation de l'eau.</p>
<p>Notre activité s'étend à <strong>tout le territoire andorran</strong>. Plus de <strong>50 installations hydrauliques en exploitation</strong> avec une conception et une ingénierie spécifiques à chaque projet, et plus de <strong>50 ans d'expérience dans le traitement des eaux</strong>.</p>
<img src="/images/water-enginyeria-hidraulica.jpg" alt="Ingénierie hydraulique en Andorre">
<hr>
<h2>Contrôle qualité de l'eau</h2>
<p>Le contrôle qualité de l'eau est l'une des principales priorités d'<strong>ÀBIÒTIC</strong>. Nous disposons d'<strong>agents accrédités pour l'analyse des eaux</strong> selon UNE-EN ISO 17025 et UNE-EN ISO 9001, garantissant un <strong>Programme de Surveillance et de Contrôle de la Qualité des Eaux</strong> couvrant l'intégralité du cycle.</p>
<img src="/images/water-control-qualitat.jpg" alt="Laboratoire de contrôle qualité de l'eau">
<table><thead><tr><th>Paramètre</th><th>Valeur (août 2023)</th></tr></thead><tbody><tr><td>Chlore libre (mg/l)</td><td>0,5</td></tr><tr><td>pH</td><td>7,9</td></tr><tr><td>Turbidité (NTU)</td><td>0,16</td></tr><tr><td>Dureté (ºF)</td><td>16</td></tr></tbody></table>
<hr>
<h2>Détection de fuites</h2>
<img src="/images/water-deteccio-fuites.jpg" alt="Équipement de détection de fuites sur réseau">
<p>Pour plus d'informations sur la technologie de détection : <a href="https://www.hidrofugas.es">hidrofugas.es</a></p>`,
    },
  },
  environmental: {
    es: {
      title: 'Gestión Ambiental',
      description: 'Ofrecemos soluciones integrales de gestión ambiental: asesoramiento técnico, aguas residuales, control de plagas y transporte de residuos para empresas, particulares y administraciones.',
      services: [
        'Asesoramiento técnico para bordes, empresas y espacios comunales.',
        'Diseño con nuevas tecnologías y digitalización del ciclo del agua.',
        'Gestión de aguas residuales: depuradoras ECOFLO y separadores de grasa.',
        'Lucha integral de plagas para instalaciones comerciales y residenciales.',
        'Control alimentario y asesoramiento sanitario.',
        'Transporte y gestión de residuos con autorización ADR.',
      ],
      applications: ['Bordes y residencias privadas', 'Empresas y constructoras', 'Hoteles y restaurantes', 'Espacios comunales', 'Administraciones públicas'],
      body: `<h2>Asesoramiento técnico</h2>
<p>Realizamos presupuestos para <strong>bordes privadas</strong>, <strong>empresas y constructoras</strong> y espacios <strong>comunales</strong>. No dude en ponerse en contacto con nosotros para cualquier consulta.</p>
<hr>
<h2>Diseño y nuevas tecnologías</h2>
<ul><li><strong>Programas de ingeniería</strong></li><li><strong>Material de última generación</strong></li><li><strong>Máquinas especializadas: control de cloro y potabilización</strong></li><li><strong>Software de control de depósitos</strong></li></ul>
<p>ÀBIÒTIC cuenta con la digitalización del ciclo del agua con la incorporación de nuevas tecnologías en gestión del agua para optimizar el servicio. Disponemos de datos en tiempo real de la red de agua potable para actuar inmediatamente en situaciones urgentes y planificar el mantenimiento.</p>
<img src="/images/ambiental-control-diposits.jpg" alt="Control de depósitos en tiempo real">
<hr>
<h2>Gestión de aguas residuales</h2>
<h3>Instalación de depuradoras ECOFLO</h3>
<p>En aquellas instalaciones donde la disponibilidad de corriente eléctrica es compleja o imposible, nuestro compromiso con el vertido responsable de las aguas residuales al medio ambiente sigue siendo una prioridad.</p>
<p><a href="https://xoli.co.uk/product/ecoflo-coco-filter/">ECOFLO</a> permite mejorar la calidad del agua de salida de una fosa séptica tradicional mediante la instalación de un filtro biológico aireado que utiliza <strong>cáscaras de coco</strong> como medio filtrante. También puede actuar como <strong>tratamiento terciario</strong> para mejorar la calidad del efluente antes del vertido al medio ambiente.</p>
<p><strong>Primera fase</strong> — La digestión de las aguas residuales se produce en la fosa séptica equipada con un prefiltro laminar de alto rendimiento. Decantan los sólidos, se retienen los flotantes y se produce una digestión anaeróbica de los lodos acumulados.</p>
<p><strong>Segunda fase</strong> — El tratamiento biológico se realiza en un filtro de fibra de coco donde las colonias de microorganismos reducen la carga contaminante.</p>
<p>Los equipos ECOFLO disponen de <strong>marcado CE según la norma UNE-EN 12566-3:2017</strong>, que certifica la eficiencia del tratamiento, la capacidad de depuración, el consumo energético, la estanqueidad y la resistencia mecánica.</p>
<img src="/images/ambiental-ecoflo-1.png" alt="Sistema ECOFLO — filtro de fibra de coco">
<img src="/images/ambiental-ecoflo-2.png" alt="Sistema ECOFLO — filtro biológico aireado">
<img src="/images/ambiental-ecoflo-3.png" alt="Sistema ECOFLO — instalación completa">
<p>Aplicaciones: residencias principales o secundarias, edificios de apartamentos, campings y parques naturales, oficinas y escuelas, pequeñas poblaciones y refugios de montaña.</p>
<h3>Separadores de grasa</h3>
<p>La gama de separadores de grasa <strong>Rewatec</strong> ofrece soluciones <strong>prefabricadas y listas para instalar</strong> con marcado CE según la norma <strong>EN 1825</strong>, indicadas para hoteles, restaurantes, industria agroalimentaria, escuelas y centros de salud.</p>
<img src="/images/ambiental-separador-greix-1.png" alt="Separador de grasa Rewatec — modelo compacto">
<img src="/images/ambiental-separador-greix-2.png" alt="Separador de grasa Rewatec — modelo gran caudal">
<h3>Depósitos de almacenamiento de agua pluvial</h3>
<img src="/images/ambiental-diposit-pluvial.png" alt="Depósito de almacenamiento de agua pluvial">
<hr>
<h2>Lucha integral de plagas</h2>
<p>Los productos y servicios que <strong>ÀBIÒTIC</strong> ofrece para la lucha y control de plagas son utilizados tanto por administraciones públicas como por establecimientos comerciales, industriales y residenciales.</p>
<p>Sistemas utilizados: <strong>fototrómpicos</strong> (control de insectos voladores con luz ultravioleta), <strong>feromonas y kairohmonas</strong> (atracción específica de plagas), <strong>trampas de golpe y captura</strong> y <strong>trampas adhesivas</strong>. El objetivo es la mejora continua de los servicios, garantizando la seguridad sanitaria, el respeto por el medio ambiente y la calidad en la ejecución.</p>
<img src="/images/ambiental-control-plagues.jpg" alt="Control integral de plagas">
<hr>
<h2>Control alimentario</h2>
<p>Asesoramiento de control alimentario a través de <a href="https://menjarsegur.com/">menjarsegur.com</a>.</p>
<hr>
<h2>Transporte de residuos</h2>
<p>ÀBIÒTIC se autorizará como <strong>Gestor de Residuos</strong> para clientes que generan residuos que necesitan una gestión específica. Servicios incluidos: carga y descarga de residuos, separación y clasificación por tipo y clase, y asesoría ambiental. Se dispone de una <strong>camioneta específica para la recogida de residuos</strong> con autorización para el transporte de mercancías peligrosas (<strong>ADR</strong>).</p>`,
    },
    en: {
      title: 'Environmental Management',
      description: 'We offer comprehensive environmental management solutions: technical advice, wastewater, pest control and waste transport for businesses, individuals and public administrations.',
      services: [
        'Technical advice for private estates, businesses and communal spaces.',
        'Design with new technologies and digitalisation of the water cycle.',
        'Wastewater management: ECOFLO treatment plants and grease separators.',
        'Integrated pest control for commercial and residential premises.',
        'Food safety control and sanitary advisory.',
        'Waste transport and management with ADR authorisation.',
      ],
      applications: ['Private estates and residences', 'Companies and builders', 'Hotels and restaurants', 'Community spaces', 'Public administrations'],
      body: `<h2>Technical advice</h2>
<p>We provide quotes for <strong>private estates</strong>, <strong>companies and builders</strong> and <strong>communal spaces</strong>. Feel free to contact us for any enquiry.</p>
<hr>
<h2>Design and new technologies</h2>
<ul><li><strong>Engineering software</strong></li><li><strong>State-of-the-art materials</strong></li><li><strong>Specialised machinery: chlorine control and purification</strong></li><li><strong>Tank control software</strong></li></ul>
<p>ÀBIÒTIC features the digitalisation of the water cycle with the incorporation of new water management technologies to optimise service. We have real-time data from the drinking water network to act immediately in urgent situations and plan maintenance.</p>
<img src="/images/ambiental-control-diposits.jpg" alt="Real-time tank monitoring">
<hr>
<h2>Wastewater management</h2>
<h3>ECOFLO treatment plant installation</h3>
<p>In installations where electrical supply is complex or impossible, our commitment to responsible discharge of wastewater to the environment remains a priority.</p>
<p><a href="https://xoli.co.uk/product/ecoflo-coco-filter/">ECOFLO</a> improves the quality of water leaving a traditional septic tank by installing an aerated biological filter that uses <strong>coconut shells</strong> as the filtering medium. It can also act as a <strong>tertiary treatment</strong> to improve effluent quality before discharge to the environment.</p>
<p><strong>First phase</strong> — Digestion of wastewater takes place in the septic tank equipped with a high-performance lamellar pre-filter. Solids settle, floatables are retained and anaerobic digestion of accumulated sludge occurs.</p>
<p><strong>Second phase</strong> — Biological treatment takes place in a coconut fibre filter where colonies of microorganisms reduce the pollutant load.</p>
<p>ECOFLO equipment carries <strong>CE marking under standard UNE-EN 12566-3:2017</strong>, certifying treatment efficiency, purification capacity, energy consumption, watertightness and mechanical resistance.</p>
<img src="/images/ambiental-ecoflo-1.png" alt="ECOFLO system — coconut fibre filter">
<img src="/images/ambiental-ecoflo-2.png" alt="ECOFLO system — aerated biological filter">
<img src="/images/ambiental-ecoflo-3.png" alt="ECOFLO system — complete installation">
<p>Applications: primary or secondary residences, apartment buildings, campsites and nature parks, offices and schools, small communities and mountain shelters.</p>
<h3>Grease separators</h3>
<p>The <strong>Rewatec</strong> grease separator range offers <strong>prefabricated, ready-to-install</strong> solutions with CE marking under <strong>EN 1825</strong>, suitable for hotels, restaurants, food industry, schools and health centres.</p>
<img src="/images/ambiental-separador-greix-1.png" alt="Rewatec grease separator — compact model">
<img src="/images/ambiental-separador-greix-2.png" alt="Rewatec grease separator — high-flow model">
<h3>Rainwater storage tanks</h3>
<img src="/images/ambiental-diposit-pluvial.png" alt="Rainwater storage tank">
<hr>
<h2>Integrated pest control</h2>
<p>The products and services <strong>ÀBIÒTIC</strong> offers for pest control are used by public administrations and commercial, industrial and residential establishments alike.</p>
<p>Systems used: <strong>phototrophic</strong> (flying insect control with ultraviolet light), <strong>pheromones and kairomones</strong> (specific pest attraction), <strong>impact and capture traps</strong> and <strong>adhesive traps</strong>. The goal is continuous service improvement, guaranteeing product safety, environmental respect and quality in execution.</p>
<img src="/images/ambiental-control-plagues.jpg" alt="Integrated pest control">
<hr>
<h2>Food safety control</h2>
<p>Food safety advisory through <a href="https://menjarsegur.com/">menjarsegur.com</a>.</p>
<hr>
<h2>Waste transport</h2>
<p>ÀBIÒTIC will be authorised as a <strong>Waste Manager</strong> for clients generating waste requiring specific management. Services include: loading and unloading, separation and classification by type and class, and environmental advisory. A <strong>dedicated waste collection vehicle</strong> with authorisation for dangerous goods transport (<strong>ADR</strong>) is available.</p>`,
    },
    fr: {
      title: 'Gestion Environnementale',
      description: "Nous offrons des solutions intégrales de gestion environnementale : conseil technique, eaux usées, lutte antiparasitaire et transport de déchets pour entreprises, particuliers et administrations.",
      services: [
        "Conseil technique pour bordes privées, entreprises et espaces communaux.",
        "Conception avec nouvelles technologies et numérisation du cycle de l'eau.",
        "Gestion des eaux usées : stations ECOFLO et séparateurs de graisses.",
        "Lutte intégrale antiparasitaire pour installations commerciales et résidentielles.",
        "Contrôle alimentaire et conseil sanitaire.",
        "Transport et gestion des déchets avec autorisation ADR.",
      ],
      applications: ['Bordes et résidences privées', 'Entreprises et constructeurs', 'Hôtels et restaurants', 'Espaces communaux', 'Administrations publiques'],
      body: `<h2>Conseil technique</h2>
<p>Nous réalisons des devis pour les <strong>bordes privées</strong>, les <strong>entreprises et constructeurs</strong> et les espaces <strong>communaux</strong>. N'hésitez pas à nous contacter pour toute question.</p>
<hr>
<h2>Conception et nouvelles technologies</h2>
<ul><li><strong>Logiciels d'ingénierie</strong></li><li><strong>Matériaux de dernière génération</strong></li><li><strong>Machines spécialisées : contrôle du chlore et potabilisation</strong></li><li><strong>Logiciel de contrôle des réservoirs</strong></li></ul>
<p>ÀBIÒTIC intègre la numérisation du cycle de l'eau avec l'incorporation de nouvelles technologies de gestion de l'eau pour optimiser le service. Nous disposons de données en temps réel du réseau d'eau potable pour agir immédiatement en cas d'urgence et planifier la maintenance.</p>
<img src="/images/ambiental-control-diposits.jpg" alt="Contrôle des réservoirs en temps réel">
<hr>
<h2>Gestion des eaux usées</h2>
<h3>Installation de stations d'épuration ECOFLO</h3>
<p>Dans les installations où la disponibilité du courant électrique est complexe ou impossible, notre engagement envers le rejet responsable des eaux usées dans l'environnement reste une priorité.</p>
<p><a href="https://xoli.co.uk/product/ecoflo-coco-filter/">ECOFLO</a> améliore la qualité de l'eau sortant d'une fosse septique traditionnelle grâce à un filtre biologique aéré utilisant des <strong>coques de noix de coco</strong> comme milieu filtrant. Il peut également agir comme <strong>traitement tertiaire</strong> pour améliorer la qualité de l'effluent avant rejet dans l'environnement.</p>
<p><strong>Première phase</strong> — La digestion des eaux usées a lieu dans la fosse septique équipée d'un préfiltre lamellaire haute performance. Les solides décantent, les flottants sont retenus et une digestion anaérobie des boues accumulées se produit.</p>
<p><strong>Deuxième phase</strong> — Le traitement biologique s'effectue dans un filtre à fibre de coco où les colonies de microorganismes réduisent la charge polluante.</p>
<p>Les équipements ECOFLO disposent du <strong>marquage CE selon la norme UNE-EN 12566-3:2017</strong>, certifiant l'efficacité du traitement, la capacité d'épuration, la consommation énergétique, l'étanchéité et la résistance mécanique.</p>
<img src="/images/ambiental-ecoflo-1.png" alt="Système ECOFLO — filtre à fibre de coco">
<img src="/images/ambiental-ecoflo-2.png" alt="Système ECOFLO — filtre biologique aéré">
<img src="/images/ambiental-ecoflo-3.png" alt="Système ECOFLO — installation complète">
<p>Applications : résidences principales ou secondaires, immeubles d'appartements, campings et parcs naturels, bureaux et écoles, petites communautés et refuges de montagne.</p>
<h3>Séparateurs de graisses</h3>
<p>La gamme de séparateurs de graisses <strong>Rewatec</strong> propose des solutions <strong>préfabriquées et prêtes à installer</strong> avec marquage CE selon la norme <strong>EN 1825</strong>, indiquées pour hôtels, restaurants, industrie agroalimentaire, écoles et centres de santé.</p>
<img src="/images/ambiental-separador-greix-1.png" alt="Séparateur de graisses Rewatec — modèle compact">
<img src="/images/ambiental-separador-greix-2.png" alt="Séparateur de graisses Rewatec — modèle grand débit">
<h3>Réservoirs de stockage d'eau pluviale</h3>
<img src="/images/ambiental-diposit-pluvial.png" alt="Réservoir de stockage d'eau pluviale">
<hr>
<h2>Lutte intégrale antiparasitaire</h2>
<p>Les produits et services proposés par <strong>ÀBIÒTIC</strong> pour la lutte et le contrôle des nuisibles sont utilisés aussi bien par les administrations publiques que par les établissements commerciaux, industriels et résidentiels.</p>
<p>Systèmes utilisés : <strong>phototropiques</strong> (contrôle des insectes volants par lumière ultraviolette), <strong>phéromones et kaïromones</strong> (attraction spécifique des nuisibles), <strong>pièges à choc et capture</strong> et <strong>pièges adhésifs</strong>. L'objectif est l'amélioration continue des services, garantissant la sécurité sanitaire, le respect de l'environnement et la qualité d'exécution.</p>
<img src="/images/ambiental-control-plagues.jpg" alt="Lutte intégrale antiparasitaire">
<hr>
<h2>Contrôle alimentaire</h2>
<p>Conseil en contrôle alimentaire via <a href="https://menjarsegur.com/">menjarsegur.com</a>.</p>
<hr>
<h2>Transport de déchets</h2>
<p>ÀBIÒTIC sera autorisée en tant que <strong>Gestionnaire de Déchets</strong> pour les clients générant des déchets nécessitant une gestion spécifique. Services inclus : chargement et déchargement, séparation et classification par type et classe, et conseil environnemental. Un <strong>véhicule dédié à la collecte des déchets</strong> avec autorisation de transport de marchandises dangereuses (<strong>ADR</strong>) est disponible.</p>`,
    },
  },
  engineering: {
    es: {
      title: 'Ingeniería y Tecnología',
      description: 'Àbiòtic integra tecnología e innovación en proyectos de infraestructuras y gestión ambiental para obtener soluciones técnicas eficientes y sostenibles.',
      services: ['Diseño y ejecución de proyectos técnicos.', 'Incorporación de nuevas tecnologías y digitalización.', 'Soporte técnico en ingeniería ambiental e hidráulica.'],
      applications: ['Proyectos de innovación tecnológica', 'Infraestructuras sostenibles'],
    },
    en: {
      title: 'Engineering & Technology',
      description: 'Àbiòtic integrates technology and innovation in infrastructure and environmental management projects to achieve efficient and sustainable technical solutions.',
      services: ['Design and execution of technical projects.', 'Incorporation of new technologies and digitalisation.', 'Technical support in environmental and hydraulic engineering.'],
      applications: ['Technology innovation projects', 'Sustainable infrastructure'],
    },
    fr: {
      title: 'Ingénierie et Technologie',
      description: "Àbiòtic intègre la technologie et l'innovation dans des projets d'infrastructure et de gestion environnementale pour obtenir des solutions techniques efficaces et durables.",
      services: ['Conception et exécution de projets techniques.', "Intégration de nouvelles technologies et numérisation.", "Soutien technique en ingénierie environnementale et hydraulique."],
      applications: ["Projets d'innovation technologique", 'Infrastructures durables'],
    },
  },
};

// Helper: other services (for the "Altres serveis" section on service pages)
export function getOtherServices(
  locale: 'es' | 'en' | 'fr',
  currentServiceId: string,
): Array<{ title: string; description: string; href: string }> {
  const allIds = ['water-management', 'environmental', 'engineering'] as const;
  return allIds
    .filter((id) => id !== currentServiceId)
    .map((id) => ({
      title: servicesContent[id][locale].title,
      description: servicesContent[id][locale].description,
      href: `/${locale}/services/${id}`,
    }));
}
