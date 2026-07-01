export type Locale = 'en' | 'es';

export const defaultLocale: Locale = 'en';
export const locales: Locale[] = ['en', 'es'];

export const siteUrl = 'https://berajaremodeling.com';

export const business = {
  name: 'Beraja Remodeling LLC',
  phone: '+1 352-246-3543',
  phones: ['+1 352-246-3543', '+1 352-246-5346', '+1 352-246-2103'],
  mapUrl:
    'https://www.google.com/maps/place/Beraja+Remodeling+LLC/@29.6803102,-82.2962524,17z/data=!3m1!4b1!4m6!3m5!1s0x88e8a7ba8b3ef58b:0x4477fe32f390eeba!8m2!3d29.6803102!4d-82.2962524!16s%2Fg%2F11zg3ttp8g!18m1!1e1?entry=ttu',
  facebookUrl: 'https://www.facebook.com/profile.php?id=61559592172474',
  addressLocality: 'Gainesville',
  addressRegion: 'FL',
  addressCountry: 'US',
};

export const serviceAreas = [
  'Gainesville',
  'Alachua',
  'Newberry',
  'High Springs',
  'Archer',
  'Ocala',
  'Lake City',
  'Jacksonville',
];

export const content = {
  en: {
    path: '/en/',
    langName: 'English',
    title: 'Kitchen Remodeling & Home Construction in Gainesville, FL | Beraja Remodeling',
    description:
      'Beraja Remodeling provides kitchen remodeling, bathroom renovation, home remodeling, additions, and construction services in Gainesville, Jacksonville, Ocala, Alachua, Newberry, High Springs, and nearby North Florida communities.',
    keywords:
      'kitchen remodeling Gainesville FL, kitchen renovation Gainesville, home remodeling Gainesville FL, bathroom remodeling Gainesville, construction Gainesville FL, remodeling Jacksonville FL',
    cta: {
      call: 'Call',
      estimate: 'Request an Estimate',
      local: 'Find Us Locally',
      discuss: 'Discuss this project',
    },
    hero: {
      eyebrow: 'Construction & Remodeling in Gainesville, FL',
      heading: 'Kitchen remodeling and home construction with a local crew that manages the details.',
      body:
        'Beraja Remodeling helps homeowners upgrade kitchens, bathrooms, additions, and full interiors across Gainesville, Jacksonville, Ocala, Alachua, Newberry, High Springs, and nearby North Florida communities.',
      serving: 'Serving:',
      imageAlt: 'Luxury kitchen remodel completed by Beraja Remodeling in North Florida',
    },
    servicesIntro: {
      eyebrow: 'Remodeling and construction services in North Florida',
      heading: 'Search-worthy services backed by real jobsite discipline.',
      body:
        'Whether you are searching for kitchen remodeling in Gainesville, bathroom renovation near Jacksonville, or a reliable construction company for a whole-home project, Beraja Remodeling keeps the scope, finish work, and communication clear.',
    },
    services: [
      {
        title: 'Kitchen Remodeling',
        description:
          'Custom kitchen layouts, cabinetry, lighting, countertops, flooring, and finish details for Gainesville-area homes.',
        detail: 'Kitchen renovation',
      },
      {
        title: 'Bathroom Renovations',
        description:
          'Bathroom remodeling with waterproofing, tilework, fixtures, vanities, and spa-style upgrades built for daily use.',
        detail: 'Bath remodeling',
      },
      {
        title: 'Construction & Home Remodeling',
        description:
          'Whole-home remodeling, additions, flooring, trim, interior upgrades, and construction project management.',
        detail: 'Full project control',
      },
    ],
    transformation: {
      eyebrow: 'Before and after kitchen remodeling',
      heading: 'From empty shell to a kitchen that earns attention.',
      body:
        'The right remodel should look beautiful, but it also has to work: better light, better flow, smarter storage, and finishes that hold up after the reveal.',
      before: 'BEFORE',
      after: 'AFTER',
      benefits: [
        'Kitchen remodeling planned for Gainesville-area homes',
        'Material guidance before the first demo day',
        'A cleaner closeout with punch-list accountability',
      ],
    },
    stats: {
      eyebrow: 'Why Gainesville homeowners call Beraja',
      heading: 'A remodeling partner close enough to show up and experienced enough to lead.',
      body:
        'We serve Gainesville, Jacksonville, Ocala, Alachua, Newberry, High Springs, and nearby communities with clear scope, organized scheduling, and finish quality that respects the home.',
      items: [
        { value: '20+', label: 'Years of Experience' },
        { value: 'Local', label: 'Gainesville-Based Team' },
        { value: 'Finish', label: 'Detail-Driven Closeout' },
      ],
    },
    footer: {
      summary: 'Kitchen remodeling, bathroom renovation, construction, and home remodeling services for Gainesville, FL and nearby North Florida communities.',
      contact: 'CONTACT',
      local: 'LOCAL PRESENCE',
      rights: 'All rights reserved.',
      tagline: 'Quality work you can trust',
    },
  },
  es: {
    path: '/es/',
    langName: 'Español',
    title: 'Remodelación de Cocinas y Construcción en Gainesville, FL | Beraja Remodeling',
    description:
      'Beraja Remodeling ofrece remodelación de cocinas, baños, casas, adiciones y servicios de construcción en Gainesville, Jacksonville, Ocala, Alachua, Newberry, High Springs y comunidades cercanas del norte de Florida.',
    keywords:
      'remodelación de cocinas Gainesville FL, remodelación de cocina Gainesville, remodelación de baños Gainesville, construcción Gainesville FL, remodelación Jacksonville FL',
    cta: {
      call: 'Llamar',
      estimate: 'Solicitar Estimado',
      local: 'Ver Ubicación',
      discuss: 'Hablar del proyecto',
    },
    hero: {
      eyebrow: 'Construcción y remodelación en Gainesville, FL',
      heading: 'Remodelación de cocinas y construcción residencial con un equipo local que cuida los detalles.',
      body:
        'Beraja Remodeling ayuda a propietarios a renovar cocinas, baños, adiciones e interiores completos en Gainesville, Jacksonville, Ocala, Alachua, Newberry, High Springs y comunidades cercanas del norte de Florida.',
      serving: 'Servimos:',
      imageAlt: 'Remodelación de cocina de lujo realizada por Beraja Remodeling en el norte de Florida',
    },
    servicesIntro: {
      eyebrow: 'Servicios de remodelación y construcción en el norte de Florida',
      heading: 'Servicios claros para propietarios que buscan remodelar con confianza.',
      body:
        'Si buscas remodelación de cocina en Gainesville, renovación de baño cerca de Jacksonville o una compañía de construcción para renovar tu casa, Beraja Remodeling mantiene claro el alcance, los acabados y la comunicación.',
    },
    services: [
      {
        title: 'Remodelación de Cocinas',
        description:
          'Diseño de cocinas, gabinetes, iluminación, topes, pisos y acabados para hogares en Gainesville y alrededores.',
        detail: 'Renovación de cocina',
      },
      {
        title: 'Remodelación de Baños',
        description:
          'Renovación de baños con impermeabilización, losas, accesorios, vanidades y detalles tipo spa para uso diario.',
        detail: 'Baños modernos',
      },
      {
        title: 'Construcción y Remodelación',
        description:
          'Remodelación completa de casas, adiciones, pisos, molduras, mejoras interiores y manejo del proyecto.',
        detail: 'Proyecto completo',
      },
    ],
    transformation: {
      eyebrow: 'Antes y después de remodelación de cocina',
      heading: 'De un espacio vacío a una cocina que llama la atención.',
      body:
        'Una buena remodelación debe verse elegante, pero también funcionar mejor: más luz, mejor distribución, más almacenamiento y acabados duraderos.',
      before: 'ANTES',
      after: 'DESPUÉS',
      benefits: [
        'Remodelación de cocina planificada para hogares en Gainesville',
        'Guía de materiales antes de comenzar la demolición',
        'Cierre limpio con revisión final de detalles',
      ],
    },
    stats: {
      eyebrow: 'Por qué propietarios en Gainesville llaman a Beraja',
      heading: 'Un equipo local de remodelación con experiencia para dirigir el proyecto.',
      body:
        'Servimos Gainesville, Jacksonville, Ocala, Alachua, Newberry, High Springs y comunidades cercanas con alcances claros, planificación organizada y acabados de calidad.',
      items: [
        { value: '20+', label: 'Años de Experiencia' },
        { value: 'Local', label: 'Equipo en Gainesville' },
        { value: 'Detalle', label: 'Acabados Cuidados' },
      ],
    },
    footer: {
      summary: 'Remodelación de cocinas, baños, construcción y mejoras del hogar para Gainesville, FL y comunidades cercanas del norte de Florida.',
      contact: 'CONTACTO',
      local: 'PRESENCIA LOCAL',
      rights: 'Todos los derechos reservados.',
      tagline: 'Trabajo de calidad en el que puedes confiar',
    },
  },
} as const;

export const servicePages = [
  {
    locale: 'en',
    slug: 'kitchen-remodeling-gainesville-fl',
    service: 'Kitchen Remodeling',
    city: 'Gainesville',
    title: 'Kitchen Remodeling in Gainesville, FL | Beraja Remodeling',
    description:
      'Kitchen remodeling in Gainesville, FL with cabinetry, countertops, lighting, flooring, and project management by Beraja Remodeling.',
    heading: 'Kitchen remodeling in Gainesville, FL',
    body:
      'Beraja Remodeling renovates Gainesville kitchens with practical layouts, durable surfaces, premium finishes, and clear communication from planning to punch list.',
  },
  {
    locale: 'en',
    slug: 'bathroom-remodeling-gainesville-fl',
    service: 'Bathroom Remodeling',
    city: 'Gainesville',
    title: 'Bathroom Remodeling in Gainesville, FL | Beraja Remodeling',
    description:
      'Bathroom remodeling and renovation in Gainesville, FL with tile, waterproofing, vanities, fixtures, and finish work.',
    heading: 'Bathroom remodeling in Gainesville, FL',
    body:
      'From guest baths to primary suites, Beraja Remodeling upgrades Gainesville bathrooms with durable waterproofing, clean tilework, and finishes that feel polished.',
  },
  {
    locale: 'en',
    slug: 'home-remodeling-gainesville-fl',
    service: 'Home Remodeling',
    city: 'Gainesville',
    title: 'Home Remodeling and Construction in Gainesville, FL | Beraja Remodeling',
    description:
      'Whole-home remodeling, additions, interior upgrades, and construction services in Gainesville, FL.',
    heading: 'Home remodeling and construction in Gainesville, FL',
    body:
      'Beraja Remodeling manages whole-home projects, additions, flooring, trim, and interior construction for Gainesville homeowners who want a dependable local crew.',
  },
  {
    locale: 'en',
    slug: 'construction-remodeling-jacksonville-fl',
    service: 'Construction and Remodeling',
    city: 'Jacksonville',
    title: 'Construction and Remodeling in Jacksonville, FL | Beraja Remodeling',
    description:
      'Construction, kitchen remodeling, bathroom remodeling, and home renovation services for Jacksonville, FL and North Florida.',
    heading: 'Construction and remodeling in Jacksonville, FL',
    body:
      'Beraja Remodeling supports Jacksonville-area homeowners with kitchen renovation, bathroom remodeling, interior upgrades, and construction project management.',
  },
  {
    locale: 'en',
    slug: 'remodeling-alachua-fl',
    service: 'Home Remodeling',
    city: 'Alachua',
    title: 'Remodeling in Alachua, FL | Beraja Remodeling',
    description: 'Kitchen, bathroom, and home remodeling services in Alachua, FL.',
    heading: 'Remodeling services in Alachua, FL',
    body:
      'Beraja Remodeling brings kitchen remodeling, bathroom renovation, and finish-focused construction services to homeowners in Alachua, FL.',
  },
  {
    locale: 'en',
    slug: 'remodeling-newberry-fl',
    service: 'Home Remodeling',
    city: 'Newberry',
    title: 'Remodeling in Newberry, FL | Beraja Remodeling',
    description: 'Kitchen, bathroom, and home remodeling services in Newberry, FL.',
    heading: 'Remodeling services in Newberry, FL',
    body:
      'Beraja Remodeling helps Newberry homeowners improve kitchens, bathrooms, additions, and interiors with organized construction and careful finishes.',
  },
  {
    locale: 'es',
    slug: 'remodelacion-de-cocinas-gainesville-fl',
    service: 'Remodelación de Cocinas',
    city: 'Gainesville',
    title: 'Remodelación de Cocinas en Gainesville, FL | Beraja Remodeling',
    description:
      'Remodelación de cocinas en Gainesville, FL con gabinetes, topes, iluminación, pisos y manejo del proyecto.',
    heading: 'Remodelación de cocinas en Gainesville, FL',
    body:
      'Beraja Remodeling renueva cocinas en Gainesville con diseños funcionales, acabados duraderos y comunicación clara desde la planificación hasta la revisión final.',
  },
  {
    locale: 'es',
    slug: 'remodelacion-de-banos-gainesville-fl',
    service: 'Remodelación de Baños',
    city: 'Gainesville',
    title: 'Remodelación de Baños en Gainesville, FL | Beraja Remodeling',
    description:
      'Remodelación y renovación de baños en Gainesville, FL con losas, impermeabilización, vanidades y acabados.',
    heading: 'Remodelación de baños en Gainesville, FL',
    body:
      'Beraja Remodeling mejora baños en Gainesville con impermeabilización correcta, losas limpias, accesorios modernos y acabados duraderos.',
  },
  {
    locale: 'es',
    slug: 'remodelacion-de-casas-gainesville-fl',
    service: 'Remodelación de Casas',
    city: 'Gainesville',
    title: 'Remodelación de Casas y Construcción en Gainesville, FL | Beraja Remodeling',
    description:
      'Remodelación completa de casas, adiciones, interiores y servicios de construcción en Gainesville, FL.',
    heading: 'Remodelación de casas y construcción en Gainesville, FL',
    body:
      'Beraja Remodeling maneja remodelaciones completas, adiciones, pisos, molduras y construcción interior para propietarios en Gainesville.',
  },
  {
    locale: 'es',
    slug: 'construccion-remodelacion-jacksonville-fl',
    service: 'Construcción y Remodelación',
    city: 'Jacksonville',
    title: 'Construcción y Remodelación en Jacksonville, FL | Beraja Remodeling',
    description:
      'Servicios de construcción, remodelación de cocinas, baños y casas para Jacksonville, FL y el norte de Florida.',
    heading: 'Construcción y remodelación en Jacksonville, FL',
    body:
      'Beraja Remodeling apoya a propietarios en Jacksonville con renovación de cocinas, baños, mejoras interiores y manejo del proyecto de construcción.',
  },
  {
    locale: 'es',
    slug: 'remodelacion-alachua-fl',
    service: 'Remodelación de Casas',
    city: 'Alachua',
    title: 'Remodelación en Alachua, FL | Beraja Remodeling',
    description: 'Servicios de remodelación de cocinas, baños y casas en Alachua, FL.',
    heading: 'Servicios de remodelación en Alachua, FL',
    body:
      'Beraja Remodeling ofrece remodelación de cocinas, baños y construcción con acabados cuidados para propietarios en Alachua, FL.',
  },
  {
    locale: 'es',
    slug: 'remodelacion-newberry-fl',
    service: 'Remodelación de Casas',
    city: 'Newberry',
    title: 'Remodelación en Newberry, FL | Beraja Remodeling',
    description: 'Servicios de remodelación de cocinas, baños y casas en Newberry, FL.',
    heading: 'Servicios de remodelación en Newberry, FL',
    body:
      'Beraja Remodeling ayuda a propietarios en Newberry a mejorar cocinas, baños, adiciones e interiores con construcción organizada.',
  },
] as const;

export function phoneHref(phone: string) {
  return `tel:+${phone.replace(/\D/g, '')}`;
}

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}

export function localizedPath(locale: Locale) {
  return content[locale].path;
}

export function servicePagePath(page: (typeof servicePages)[number]) {
  return `/${page.locale}/${page.slug}/`;
}

export function serviceAlternatePaths(page: (typeof servicePages)[number]) {
  const localePages = {
    en: servicePages.filter((item) => item.locale === 'en'),
    es: servicePages.filter((item) => item.locale === 'es'),
  };
  const index = localePages[page.locale].findIndex((item) => item.slug === page.slug);
  const enPage = localePages.en[index] ?? localePages.en[0];
  const esPage = localePages.es[index] ?? localePages.es[0];

  return {
    en: servicePagePath(enPage),
    es: servicePagePath(esPage),
    'x-default': servicePagePath(enPage),
  };
}
