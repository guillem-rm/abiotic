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
      title: 'Gestión del Agua',
      description: 'Àbiòtic ofrece servicios de gestión de redes de agua potable e infraestructuras hídricas para municipios, empresas y operadoras.',
      services: ['Planificación y mantenimiento de redes de agua.', 'Monitorización y diagnóstico de infraestructuras.', 'Consultoría técnica para municipios y empresas.'],
      applications: ['Administraciones públicas', 'Ingenierías y operadoras de infraestructuras'],
    },
    en: {
      title: 'Water Management',
      description: 'Àbiòtic provides drinking water network management and water infrastructure services for municipalities, businesses and operators.',
      services: ['Planning and maintenance of water networks.', 'Monitoring and diagnosis of infrastructure.', 'Technical consultancy for municipalities and businesses.'],
      applications: ['Public administrations', 'Engineering firms and infrastructure operators'],
    },
    fr: {
      title: "Gestion de l'Eau",
      description: "Àbiòtic fournit des services de gestion des réseaux d'eau potable et des infrastructures hydrauliques pour les municipalités, les entreprises et les opérateurs.",
      services: ["Planification et maintenance des réseaux d'eau.", 'Surveillance et diagnostic des infrastructures.', 'Conseil technique pour les municipalités et les entreprises.'],
      applications: ['Administrations publiques', "Bureaux d'études et opérateurs d'infrastructures"],
    },
  },
  environmental: {
    es: {
      title: 'Gestión Ambiental',
      description: 'Ofrecemos consultoría ambiental y soluciones de energías renovables para empresas y entidades públicas que buscan mejorar su impacto ambiental.',
      services: ['Auditorías e informes ambientales.', 'Planificación e implementación de energías renovables.', 'Soporte a certificaciones ambientales (ISO 14001, EMAS).'],
      applications: ['Empresas que buscan reducir el impacto ambiental', 'Proyectos de eficiencia energética'],
    },
    en: {
      title: 'Environmental Management',
      description: 'We offer environmental consulting and renewable energy solutions for companies and public entities seeking to improve their environmental impact.',
      services: ['Environmental audits and reports.', 'Planning and implementation of renewable energies.', 'Support for environmental certifications (ISO 14001, EMAS).'],
      applications: ['Companies seeking to reduce environmental impact', 'Energy efficiency projects'],
    },
    fr: {
      title: 'Gestion Environnementale',
      description: "Nous offrons des services de conseil environnemental et des solutions d'énergies renouvelables pour les entreprises et les entités publiques souhaitant améliorer leur impact environnemental.",
      services: ['Audits et rapports environnementaux.', "Planification et mise en œuvre des énergies renouvelables.", 'Soutien aux certifications environnementales (ISO 14001, EMAS).'],
      applications: ["Entreprises cherchant à réduire leur impact environnemental", "Projets d'efficacité énergétique"],
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
