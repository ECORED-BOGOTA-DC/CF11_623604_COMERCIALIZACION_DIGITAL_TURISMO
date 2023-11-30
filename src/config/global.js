export default {
  global: {
    componenteFormativo: 'Venta de productos y servicios digitales',
    descripcionCurso:
      'Hoy en día las ventas en internet tienen más relevancia, cada día las personas rompen más paradigmas, cada día las personas rompen paradigmas y, los nuevos servicios de Internet y una mayor cobertura de datos, dan paso a la comercialización por este medio. El mercado turístico es una muestra de cómo la web puede ser una gran aliada para mejorar las ventas y no quedar rezagados.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Venta <em>online</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'La venta <em>online</em> de la experiencia turística',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'El consumo digital',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Herramientas tecnológicas de comercio electrónico',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo:
              'Herramientas tecnológicas de comercio electrónico para el sector turístico',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Medios de pago en un entorno digital',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'La logística <em>eCommerce</em>',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo:
              'Propuesta comercial de las experiencias turísticas digitales',
            hash: 't_1_7',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Estrategia y <em>marketing online</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'La estrategia de producto en el mercadeo digital turístico',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Planteamientos en la estrategia digital',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Creación y desarrollo de nuevos productos en Internet',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo:
              'El precio en la mezcla de mercado digital y sus características',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Psicología del consumidor',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Características del consumidor digital',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Embudo de compra (<em>purchase funnel</em>) en turismo',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Revenue management',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'La distribución',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'La segmentación',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'El <em>pricing</em>',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'El pronóstico (<em>forecasting</em>)',
            hash: 't_4_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/623604_CF11_DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'El consumo digital',
      referencia:
        'Cámara Colombiana de Comercio Electrónico [CCCE]. (s. f.). <em>Informe Comportamiento del eCommerce en Colombia durante 2020 y perspectivas para el 2021</em>.',
      tipo: 'Documento',
      link:
        'https://www.ccce.org.co/wp-content/uploads/2020/10/informe-comportamiento-y-perspectiva-ecommerce-2020-2021.pdf',
    },
    {
      tema: 'Embudo de compra',
      referencia:
        'KAYAK América Latina. (2017). <em>Mobile Travel Report Latinoamérica 2017</em>. KAYAK.',
      tipo: 'Documento',
      link: 'https://www.es.kayak.com/news/mobile-travel-report/.',
    },
    {
      tema: 'El consumo digital',
      referencia:
        'KPMG International. (2020). <em>Respondiendo las tendencias de los consumidores en la nueva realidad. Covid-19, encuesta de pulso</em>. KPMG.',
      tipo: 'Documento',
      link:
        'https://assets.kpmg/content/dam/kpmg/co/sac/pdf/2020/12/consumers-new-reality-esp.pdf ',
    },
    {
      tema: 'Psicología del consumidor',
      referencia:
        'KPMG International. (2017). <em>La realidad de los consumidores online. Informe global sobre consumidores en Internet</em>. KPMG.',
      tipo: 'Documento',
      link:
        'https://assets.kpmg/content/dam/kpmg/es/pdf/2017/06/la-realidad-de-consumidores-online.pdf ',
    },
    {
      tema: 'Portafolio de servicios',
      referencia:
        'Hotel Dorado Plaza Cartagena de Indias. (2021). <em>Portafolio de servicios. Convenciones & Eventos</em>.',
      tipo: 'Portafolio',
      link:
        'http://www.hotelsanfelipeplaza.com/docs/6225_Portafolio-de-Servicios-Corporativo.pdf',
    },
  ],
  glosario: [
    {
      termino: '<em>Buyer persona</em>',
      significado:
        'es la representación ficticia del cliente ideal, basada en datos reales sobre el comportamiento y las características demográficas de los clientes, así como en una creación de sus historias personales, motivaciones, objetivos, retos y preocupaciones.',
    },
    {
      termino: '<em>eCommerce</em>',
      significado:
        'comercio por Internet o comercio en línea— consiste en la compra y venta de productos o de servicios a través de Internet, tales como redes sociales y otras páginas web.',
    },
    {
      termino: '<em>Channel manager</em>',
      significado:
        'es una herramienta digital encargada de centralizar y gestionar la disponibilidad de los servicios de un hotel, independientemente de la cantidad de plataformas en las que estos son ofrecidos.',
    },
    {
      termino: '<em>Forecast</em>',
      significado:
        'estimación en situaciones de incertidumbre. El término predicción es similar, pero más general, y usualmente se refiere a la estimación de series temporales o datos instantáneos.',
    },
    {
      termino: '<em>Overbooking</em>',
      significado:
        'sobreventa o exceso de reservas es un término usado por las compañías para referirse al exceso de venta de un servicio sobre la capacidad real de la empresa. La sobreventa es una práctica legal y común en el sector turístico y de Internet.',
    },
    {
      termino: '<em>Yield management</em>',
      significado:
        'se centra en maximizar los beneficios de un activo concreto en un momento determinado, por ejemplo, los ingresos por habitación de hotel en temporada alta.',
    },
  ],
  referencias: [
    {
      referencia:
        'American Hotel & Lodging Association [AHLA]. (2006). <em>Revenue Management</em>.',
    },
    {
      referencia:
        'Cross, R. (1997). <em>Revenue Management: Hard-Core Tactics for Market Domination</em>. Broadway Books.',
    },
    {
      referencia:
        'Kotler, P., García, M., Flores, J., Bowen, J. y Makens, J. (2011). <em>Marketing Turístico</em>. Pearson Educación.',
    },
    {
      referencia:
        'Meijomil, S. (2022). <em>Reputación online: qué es, su importancia y cómo cuidarla [Guía Completa]</em>. Inboundcycle.',
      link:
        'https://www.inboundcycle.com/blog-de-inbound-marketing/reputacion-online-guia-completa',
    },
    {
      referencia:
        'Torres, D. (2021). <em>Las 6 técnicas de negociación más eficaces para tus ventas</em>. Hubspot.',
      link: 'https://blog.hubspot.es/sales/tecnicas-negociacion',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Harbey Enrique Castelblanco',
          cargo: 'Experto Técnico',
          centro: 'Regional Atlántico - Centro Nacional Colombo Alemán',
        },
        {
          nombre: 'María Inés Machado López',
          cargo: 'Diseñadora Instruccional',
          centro:
            'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Asesora Metodológica ',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable del Equipo de Desarrollo Curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Darío González',
          cargo: 'Corrector de Estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Nelly Parra Guarín',
          cargo: 'Adecuación instruccional-2023',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Adriana Marcela Suarez Eljure',
          cargo: 'Diseñador web',
          centro:
            'Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Lady Adriana Ariza Luque',
          cargo: 'Animador y Producción audiovisual',
          centro:
            'Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo',
          cargo: 'Animador y Producción audiovisual',
          centro:
            'Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y Producción audiovisual',
          centro:
            'Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo:
            'Validación de recursos educativos digitales y vinculación LMS',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Leyson Fabián Castaño Pérez',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
