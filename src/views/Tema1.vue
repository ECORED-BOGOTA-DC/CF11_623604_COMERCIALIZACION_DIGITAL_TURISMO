<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Venta #[em online]
      
    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img01.jpg')})`}" data-aos="fade-right" alt="Imagen decorativa"
      )
      .bloque-texto-g__texto.py-md-5.py-4.px-4(data-aos="fade-left")
        p.mb-0 Exhibir en la red productos, marcas, servicios, etc., debe tener como objetivo “convertir al navegante en cliente”. Está demostrado que la mayor parte de los usuarios siempre dejan para después su decisión de comprar, a pesar de estar convencidos y persuadidos para hacerlo. Siempre encuentran una razón, como ver si pueden obtener mejores precios en otro lugar o esperar a contrastar su decisión con otra persona de confianza (amigos, compañeros o familiares); o esperar a ver y tocar el producto en una tienda física.

    p.mb-5 Pero, en esencia, la #[strong venta #[em online]] consiste en lograr que los potenciales clientes se conviertan en clientes y compren. Para lograr esto, en primer lugar, hay que reflexionar sobre quiénes son sus clientes potenciales y cuáles son las motivaciones por las que se pueden interesar en sus productos o servicios o sobre cuáles son las razones o motivos que esos usuarios podrían tener para no tomar una decisión en el instante en que han entrado en su sitio web.

    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 La venta #[em online] de la experiencia turística
    
    p.mb-5(data-aos="fade-right") En el mundo real, en los puntos de venta físicos, los consumidores cuentan con el producto 'tangible', que pueden ver y tocar; en la industria turística, la venta es de un intangible, dicho de otra forma, servicios que se materializan solo cuando el cliente los utiliza. Por lo tanto, el éxito del desarrollo del comercio electrónico radica en convertir al cliente en el centro de atención, ofreciéndole una experiencia diferenciada, que pueda elegir cuando él quiera, de manera eficiente, rápida y cómoda.

    .BGIMG01.px-md-5.px-4.py-4.mb-5(data-aos="zoom-in")
      .h4.text-center.mb-5 Contenido venta turística #[em online]
      .px-1
        SlyderB(:datos="datosSlyder")
    
    p.mb-5(data-aos="fade-right") En el caso de la industria turística y del proceso de compra del cliente (#[em customer journey]), el contenido es de gran relevancia, ya que debe ofrecer material digital real (fotos, videos) que logre transmitir lo que el cliente está buscando y lo conecte con esa futura experiencia, para conseguir concretar la venta (conversión). Luego, ya #[em in situ], brindar una experiencia que genere el 100 % de satisfacción.

    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 El consumo digital
    
    p.mb-5(data-aos="fade-right") El comercio digital ha venido creciendo sostenidamente en el país en la última década; este crecimiento se elevó por los cierres provocados por la emergencia sanitaria, tal como se puede ver en la figura 1. Pero, más allá de esta situación fortuita, el comercio electrónico crece por varias razones, la principal es, fundamentalmente, la comodidad y la facilidad de compra. Es así como, desde cualquier dispositivo, el consumidor digital puede:

    ul.lista-ul--color.lista-ul--separador.ms-5.mb-5
      li(style="margin-bottom: 2px" data-aos="fade-right")
        i.fas.fa-shopping-basket(style="color: #2B95F9;")
        | Acceder a ofertas exclusivas.
      li(style="margin-bottom: 2px" data-aos="fade-right")
        i.fas.fa-shopping-basket(style="color: #2B95F9;")
        | Ahorrar tiempo.
      li(style="margin-bottom: 2px" data-aos="fade-right")
        i.fas.fa-shopping-basket(style="color: #2B95F9;")
        | Ampliar el radio de compra (importar productos).
      li(style="margin-bottom: 2px" data-aos="fade-right")
        i.fas.fa-shopping-basket(style="color: #2B95F9;")
        | Comparar precios.
      li(style="margin-bottom: 2px" data-aos="fade-right")
        i.fas.fa-shopping-basket(style="color: #2B95F9;")
        | Comprar novedades.
      li(style="margin-bottom: 2px" data-aos="fade-right")
        i.fas.fa-shopping-basket(style="color: #2B95F9;")
        | Múltiples formas de pago.
      li(style="margin-bottom: 2px" data-aos="fade-right")
        i.fas.fa-shopping-basket(style="color: #2B95F9;")
        | Ver referencias de otros compradores.
      
    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 1.
          span Venta a través de comercio electrónico entre enero y agosto de 2019 y 2020
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema1/img06.svg' alt="Figura que expone de manera gráfica el comportamiento de las ventas a través de comercio electrónico en el año 2019 y 2020.")
          figcaption Nota. <span style="font-weight: 400">Adaptado de </span><u><a style="color: #111e61" href="https://www.ccce.org.co/wp-content/uploads/2020/10/informe-comportamiento-y-perspectiva-ecommerce-2020-2021.pdf" target="_blank">Informe Comportamiento y Perspectiva #[em eCommerce] en Colombia durante 2020 y perspectivas para 2021</a></u>

    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="flip-up")
        .BGS02.p-4
          i.fas.fa-quote-left.text-start(style="font-size: 2em; color: #EA6E42")
          h4.mx-4 Adicionalmente a los productos efectivamente adquiridos por Internet, debemos sumar que al menos un 75 % de las personas busca información y compara precios mayormente desde teléfonos inteligentes, lo que aumenta el tráfico y las posibilidades de crecimiento de este tipo de transacciones.
          i.fas.fa-quote-right.mb-0(style="font-size: 2em; color: #EA6E42; position: relative; left: calc(100% - 25px);")

    p.mb-5(data-aos="fade-right") De acuerdo con el informe “Comportamiento del #[em ecommerce] en Colombia durante 2020 y perspectivas para 2021”, publicado por la Cámara Colombiana de Comercio Electrónico, en 2020, se identificó:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9.order-lg-1.order-2(data-aos="fade-right")
        TabsA.color-acento-botones.mb-5
          .tarjeta.BG03.p-4(titulo="Crecimiento")
            p.mb-0 El #[em eCommerce] en Colombia creció, en promedio, un 2 % mensual, durante el periodo de estudio.
          .tarjeta.BG03.p-4(titulo="Canal electrónico")
            p.mb-0 El canal electrónico se ha ido convirtiendo en uno de los canales fundamentales para las empresas con intención de vender al consumidor final directamente (B2C).
          .tarjeta.BG03.p-4(titulo="Presencia <em>online</em>")
            p.mb-0 La presencia #[em online] no solo incide en la venta (transacción), sino que, además, tiene fuertes implicaciones en el proceso de búsqueda de información, previo a la compra, por parte del consumidor. 
          .tarjeta.BG03.p-4(titulo="Factores de éxito")
            p.mb-0 Los factores de éxito básicos en #[em eCommerce] son la confianza, la amplitud de surtido con precios ajustados y la generación del tráfico.
      .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img07.png' alt="Imagen decorativa")
    
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-right")
        .tarjeta.BG04.p-4
          .row.justify-content-center.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/img01.svg" alt="Imagen decorativa")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.text-white.mb-1 Informe: comportamiento del #[em eCommerce] en Colombia durante 2020 y perspectivas para 2021
                  p.text-white.mb-0 Este documento hace referencia al comportamiento de ventas y transacciones de comercio electrónico en el país.
                .col-sm-auto
                  a.boton.color-acento-contenido(href="https://www.ccce.org.co/wp-content/uploads/2020/10/informe-comportamiento-y-perspectiva-ecommerce-2020-2021.pdf" target="_blank")
                    span(style="color: #12263F !important") Descargar
                    i.fas.fa-link(style="color: #12263F !important")
    
    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Herramientas tecnológicas de comercio electrónico
    
    p(data-aos="fade-right") Una vez tomada la decisión de lanzar su #[em eCommerce], con base en un modelo de negocio válido, la decisión en relación con la plataforma (herramienta) se basará en factores como el estado del proyecto (test o comprobado), el número de referencias disponibles o el nivel de inversión necesario.
    p.mb-5(data-aos="fade-right") En el siguiente recurso educativo, se describen los grupos de posibilidades que se ofrecen para realizar el comercio electrónico:

    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="zoom-in")
        ImagenInfograficaB.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema1/img08.jpg')

          .row.justify-content-center(x="10%" y="10%" tooltip="Desarrollo propio" numero="1")
            .col-lg-7.order-lg-1.order-2
              .h5.text-white.mb-3 Desarrollo propio
              p.text-white.mb-0 Contratando un equipo de desarrolladores para realizar el proyecto desde cero. La ventaja es que se cuenta con una personalización total de la herramienta, pero depende de un equipo de desarrolladores y los costes de desarrollo serán bastante altos.
            .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema1/img09.png' alt="Imagen decorativa")
          .row.justify-content-center(x="2 " y="80%" tooltip="CMS de <em>software</em> libre" numero="2")
            .col-lg-7.order-lg-1.order-2
              .h5.text-white.mb-3 CMS de #[em software] libre
              p.text-white.mb-0 Basados en #[em software] libre y gratuito.
            .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema1/img10.png' alt="Imagen decorativa")
          .row.justify-content-center(x="8 " y="3 " tooltip="Plataformas de comercio electrónico" numero="3")
            .col-lg-7.order-lg-1.order-2
              .h5.text-white.mb-3 Plataformas de comercio electrónico
              p.text-white.mb-0 Estas son plataformas que alojan y personalizan tiendas #[em online], integrando servicios de #[em hosting], pago, logística y de servicio, a cambio de una tarifa fija o un porcentaje de ventas. Son plataformas de fácil funcionamiento, pero regularmente limitadas en procesamiento de datos y personalización, pero son una buena forma de ingresar al mundo del comercio electrónico.
            .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema1/img11.png' alt="Imagen decorativa")

    p.mb-5(data-aos="fade-right") En cuanto a las plataformas de comercio electrónico de código abierto (#[em open source]), las más utilizadas suelen ser Magento, Prestashop y Woocommerce. Aunque estas plataformas son de #[em software] libre, la implementación, las integraciones y las herramientas adicionales pueden tener costos y es importante seleccionar tecnologías para las cuales se pueda encontrar, de una forma fácil, profesionales que dominen las mismas. Entre las más utilizadas actualmente, están:

    .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
      h5 Figura 2.
      span Plataformas libres de comercio electrónico más utilizadas
    
    .row.justify-content-center.mb-5
      .col-lg-4.col-sm-6.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta--boton.color-secundario.h-100.p-4
          .row.justify-content-center.mb-3
            .col-6
              a.boton.indicador__container(
                style="background-color: transparent" 
                href='http://magento.com/' 
                target="_blank" 
                @mouseover="mostrarIndicador = false"
              )
                img(src='@/assets/curso/tema1/img12.png', alt='Imagen decorativa')
                .indicador--click(v-if="mostrarIndicador")
          h4.text-center Magento
          p.text-center.mb-0 Es un #[em software] bastante robusto, recomendado para comercios con un número de referencias superior a las 600 y unos costes de desarrollo a partir de 20 millones.
      .col-lg-4.col-sm-6.mb-lg-0.mb-4(data-aos="flip-up")
        .tarjeta--boton.color-secundario.h-100.p-4
          .row.justify-content-center.mb-3
            .col-6
              a.boton.indicador__container(
                style="background-color: transparent" 
                href='http://www.prestashop.com' 
                target="_blank" 
                @mouseover="mostrarIndicador = false"
              )
                img(src='@/assets/curso/tema1/img13.png', alt='Imagen decorativa')
                .indicador--click(v-if="mostrarIndicador")
          h4.text-center Prestashop
          p.text-center.mb-0 Para aquellos comercios o tiendas de hasta 500 / 600 referencias y con un coste. Como en la mayoría de plataformas, se puede iniciar gratis, pero, al incorporar herramientas y servicios, el costo puede elevarse a unos 10 millones de pesos.
      .col-lg-4.col-sm-6(data-aos="fade-left")
        .tarjeta--boton.color-secundario.h-100.p-4
          .row.justify-content-center.mb-3
            .col-6
              a.boton.indicador__container(
                style="background-color: transparent" 
                href='http://wordpress.org/plugins/woocommerce/' 
                target="_blank" 
                @mouseover="mostrarIndicador = false"
              )
                img(src='@/assets/curso/tema1/img14.png', alt='Imagen decorativa')
                .indicador--click(v-if="mostrarIndicador")
          h4.text-center WooCommerce
          p.text-center.mb-0 Un #[em plugin] para el conocido CMS WordPress.  Es intuitivo y potente, y se le atribuye cerca del 60 % de las páginas web del mundo. El costo depende de la cantidad de herramientas, temas e integraciones que se necesiten.


    p(data-aos="fade-right") Es también de suma importancia, considerar los costos de alojamiento que se requiere en cada uno de los casos, dependiendo de la herramienta escogida para desarrollar el proyecto. Esto influirá directamente en el desempeño del sitio.
    p.mb-5(data-aos="fade-right") En cuanto a las plataformas de comercio electrónico, se encuentran Shopify, y a nivel local, Rocketfy, Dropi, Komercia, Effi, entre otras. Todas estas herramientas están enfocadas en tiendas que ofertan productos físicos y también cuentan con la modalidad de #[em dropshipping].

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 1.
          span Tiendas de venta #[em online] y productos físicos
        .tabla-a.color-acento-contenido.h-100
          table(alt="Tabla que muestra las tiendas de venta online y productos físicos.")
            thead(style="border-color: transparent")
              tr(data-aos="fade-right")
                th(style="background-color: #EB6F2D; width: 25%;") Herramienta
                th(style="background-color: #EB6F2D; width: 75%;") Descripción
            tbody
              tr(data-aos="fade-right")
                td(style="background-color: #F6F6F6;")
                  .px-lg-4
                    a.boton.indicador__container(
                      style="background-color: transparent" 
                      href='https://www.shopify.com.co/' 
                      target="_blank" 
                      @mouseover="mostrarIndicador = false"
                    )
                      img(src='@/assets/curso/tema1/img15.png', alt='Imagen decorativa')
                      .indicador--click(v-if="mostrarIndicador")
                td(style="background-color: #F6F6F6;") Es una plataforma canadiense para crear tiendas en línea, que provee todos los servicios en un solo lugar.
              tr(data-aos="fade-right")
                td(style="background-color: #FFF;")
                  .px-lg-4
                    a.boton.indicador__container(
                      style="background-color: transparent" 
                      href="https://www.rocketfy.co/" 
                      target="_blank" 
                      @mouseover="mostrarIndicador = false"
                    )
                      img(src='@/assets/curso/tema1/img16.png', alt='Imagen decorativa')
                      .indicador--click(v-if="mostrarIndicador")
                td(style="background-color: #FFF;") Es una plataforma colombiana, se le conoce como el Shopify colombiano, ya que utiliza un modelo de negocio similar al de la empresa canadiense.
              tr(data-aos="fade-right")
                td(style="background-color: #F6F6F6;")
                  .px-lg-4
                    a.boton.indicador__container(
                      style="background-color: transparent" 
                      href="https://dropi.co/" 
                      target="_blank" 
                      @mouseover="mostrarIndicador = false"
                    )
                      img(src='@/assets/curso/tema1/img17.png', alt='Imagen decorativa')
                      .indicador--click(v-if="mostrarIndicador")
                td(style="background-color: #F6F6F6;") Dropi es una plataforma colombiana, que se especializa en el modelo #[em dropshipping].
              tr(data-aos="fade-right")
                td(style="background-color: #FFF;")
                  .px-lg-4
                    a.boton.indicador__container(
                      style="background-color: transparent" 
                      href="https://www.komercia.co/" 
                      target="_blank" 
                      @mouseover="mostrarIndicador = false"
                    )
                      img(src='@/assets/curso/tema1/img18.png', alt='Imagen decorativa')
                      .indicador--click(v-if="mostrarIndicador")
                td(style="background-color: #FFF;") Es una plataforma colombiana que, al igual que sus pares, integra todos los servicios en una plataforma, permitiendo a los comerciantes entrar de una forma fácil al mundo del comercio electrónico.
              tr(data-aos="fade-right")
                td(style="background-color: #F6F6F6;")
                  .px-lg-4
                    a.boton.indicador__container(
                      style="background-color: transparent" 
                      href="https://www.efficommerce.com/" 
                      target="_blank" 
                      @mouseover="mostrarIndicador = false"
                    )
                      img(src='@/assets/curso/tema1/img19.png', alt='Imagen decorativa')
                      .indicador--click(v-if="mostrarIndicador")
                td(style="background-color: #F6F6F6;") Efficommerce es un #[em hub] logístico administrativo que provee herramientas de comercio electrónico.

    p.mb-5(data-aos="fade-right") Respecto de herramientas especializadas en el campo turístico, las hay para: hoteles, agencias de viaje en línea, ventas de comida a domicilio, por mencionar algunas. La verdad es que el comercio electrónico ha permeado toda nuestra vida y casi cualquier producto o servicio ya tiene herramientas tecnológicas para ser comerciado en línea. Algunas de estas herramientas se explican a continuación.

    separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4 Herramientas tecnológicas de comercio electrónico para el sector turístico
    
    p.mb-5(data-aos="fade-right") Como se ha evidenciado, el sector turístico, por su condición de venta de experiencias “intangibles”, requiere un mayor esfuerzo que otros sectores al implementar herramientas tecnológicas. Es por esta razón que estas se especializan de acuerdo con las necesidades del sector. A continuación algunas de ellas.
    
    .row.mb-5(data-aos="fade-right")
      .col-auto
        .BGR05.px-3.py-2
          .h4.mb-0 <i class="fas fa-globe fa-spin"></i> #[em Website]

    p(data-aos="fade-right") La página web en los hoteles y restaurantes es la mejor forma de mostrar los productos y servicios, así, y cumpliendo algunos requisitos, también puede ser la mejor herramienta de ventas y comunicación que tienen los establecimientos turísticos. Uno de esos requisitos es la integración de aplicativos conocidos como motores de reserva (IBE), que hacen que el hotel venda vía web, en tiempo real, 24 horas al día, 7 días a la semana y 365 días al año.
    p.mb-5(data-aos="fade-right") Además del motor de reservas, una web hotelera debe:

    SlyderF.mb-5(columnas="col-lg-6" data-aos="zoom-in")
      .tarjeta--boton.color-primario.h-100.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema1/img20.svg', alt='Imagen decorativa')
        h4.text-center Tener un tiempo de carga rápido
        p.text-center.mb-0 Se recomienda que este sea inferior a 4 segundos. Estos tiempos se pueden medir con aplicativos como Google PageSpeed Insights o Gmetrix.
      .tarjeta--boton.color-primario.h-100.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema1/img20.svg', alt='Imagen decorativa')
        h4.text-center Imágenes de alta resolución y en capas
        p.text-center.mb-0 Se ha mencionado en varias oportunidades que el contenido es el rey, el reto está en compatibilizar contenidos de alto valor en diseño y calidad con la velocidad de carga. 
      .tarjeta--boton.color-primario.h-100.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema1/img20.svg', alt='Imagen decorativa')
        h4.text-center Énfasis en el desplazamiento
        p.text-center.mb-0 El tiempo de visita a una web es limitado, por tanto, tener todo en la portada y hacer énfasis en el desplazamiento hacia abajo es fundamental para lograr una mejor experiencia de navegación.
      .tarjeta--boton.color-primario.h-100.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema1/img20.svg', alt='Imagen decorativa')
        h4.text-center Usabilidad mejorada
        p.text-center.mb-0 La experiencia de usuario, o UX, hace referencia a cómo usamos las cosas, a la facilidad con la que las usamos y a si nos permite hacer lo que queremos hacer. Esto, traducido a web, es que, al entrar a la web, el usuario encuentre lo que va a buscar fácilmente y que pueda cerrar el ciclo de compra, igualmente, de forma sencilla.
      .tarjeta--boton.color-primario.h-100.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/tema1/img20.svg', alt='Imagen decorativa')
        h4.text-center Presencia móvil
        p.text-center.mb-0 Hoy en día, una web debe ser, como mínimo, diseñada en formato responsivo, es decir, adaptable a cualquier dispositivo móvil. En casos más avanzados, se desarrollan webs diferenciadas para móvil y PC, acompañadas de una aplicación móvil.

    .row.mb-5(data-aos="fade-right")
      .col-auto
        .BGR05.px-3.py-2
          .h4.mb-0 <i class="fas fa-globe fa-spin"></i> Motores de reservas
    
    p.mb-5(data-aos="fade-right") En una página web hotelera o de agencias de viajes, el motor de reservas es la herramienta tecnológica que permite al cliente hacer una reserva directamente en el hotel o comprar un tiquete o paquete en la agencia de viajes en línea.

    .row.justify-content-center.mb-5
      .col-lg-8
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema1/img21.jpg' alt="Imagen que muestra una reserva a través de la página web de una habitación de un hotel.")
    
    p.mb-5(data-aos="fade-right") Estas piezas de #[em software] se integran a la página web, dentro de un #[em framework], y lucen como parte de la página, logrando gestionar el inventario del hotel o de la agencia de viajes de forma directa. Las características más relevantes de un #[em software] de reservaciones son:

    .tabla-a.color-primario.mb-5
      table(alt="Texto alternativo tabla")
        thead(style="border-color: transparent")
          tr(data-aos="fade-right")
            th(style="background-color: #FFB339;") Características
        tbody
          tr(data-aos="fade-right")
            td(style="background-color: #E8E8E8;") Acceso para poder adherirse vía dispositivo móvil.
          tr(data-aos="fade-right")
            td(style="background-color: #FFF;") Análisis de conversión y módulo de analítica.
          tr(data-aos="fade-right")
            td(style="background-color: #E8E8E8;") Avisos de últimas habitaciones disponibles.
          tr(data-aos="fade-right")
            td(style="background-color: #FFF;") Certificados de seguridad de la información: ejemplo: #[em thawte], PCI.
          tr(data-aos="fade-right")
            td(style="background-color: #E8E8E8;") Combinación de tarifas: extraer el mejor precio día a día y calcularlo para ofrecer como la mejor tarifa disponible en el precio total.
          tr(data-aos="fade-right")
            td(style="background-color: #FFF;") Conexión con pasarela de pagos (débito y crédito) y posibilidad de otras formas de pago.
          tr(data-aos="fade-right")
            td(style="background-color: #E8E8E8;") Configuración de precios dinámicos por tipo de habitación.
          tr(data-aos="fade-right")
            td(style="background-color: #FFF;") Configuración y ajustes en tiempo real.
          tr(data-aos="fade-right")
            td(style="background-color: #E8E8E8;") Confirmación de reserva inmediata.
          tr(data-aos="fade-right")
            td(style="background-color: #FFF;") Descuentos exclusivos solo si la búsqueda se realiza desde web #[em mobile].
          tr(data-aos="fade-right")
            td(style="background-color: #E8E8E8;") En caso de ofertas, mostrar el precio de antes de la oferta tachado, mostrar el porcentaje de descuento.
          tr(data-aos="fade-right")
            td(style="background-color: #FFF;") Envío de #[em e-mail] & SMS, previo a la estancia, en el que se ofrece #[em up-selling].
          tr(data-aos="fade-right")
            td(style="background-color: #E8E8E8;") Guardar datos de pasajeros para agilizar proceso de reserva.
          tr(data-aos="fade-right")
            td(style="background-color: #FFF;") Integración con Channel Manager en doble vía.
          tr(data-aos="fade-right")
            td(style="background-color: #E8E8E8;") Integración con PMS en doble vía: carga y descuenta inventario directamente y administra tarifas en el PMS.
          tr(data-aos="fade-right")
            td(style="background-color: #FFF;") Integrado en web de manera que, al saltar al proceso de reserva, mantenga el mismo #[em look and feel].
          tr(data-aos="fade-right")
            td(style="background-color: #E8E8E8;") Manejo de Allotment.
          tr(data-aos="fade-right")
            td(style="background-color: #FFF;") Manejo de códigos promocionales, corporativos, empleados, fidelización.
          tr(data-aos="fade-right")
            td(style="background-color: #E8E8E8;") Módulo específico de reservas #[em online] para grupos con tarifas grupales especiales.
          tr(data-aos="fade-right")
            td(style="background-color: #FFF;") Mostrar, a lo largo del proceso de reserva, las ventajas de las que disfrutaría el usuario al realizar la reserva a través de la web oficial.
          tr(data-aos="fade-right")
            td(style="background-color: #E8E8E8;") Mostrar contador de cuenta atrás de finalización de una oferta.
          tr(data-aos="fade-right")
            td(style="background-color: #FFF;") Motor de reservas debe permitir visibilidad en metabuscadores.
          tr(data-aos="fade-right")
            td(style="background-color: #E8E8E8;") Motor de reservas incrustable en Facebook, Instagram y Twitter.
          tr(data-aos="fade-right")
            td(style="background-color: #FFF;") Motor de reservas responsivo, #[em tablet] y motor de reservas específico para versión #[em mobile (look and feel)].
          tr(data-aos="fade-right")
            td(style="background-color: #E8E8E8;") Multidivisas y multiidioma.
          tr(data-aos="fade-right")
            td(style="background-color: #FFF;") Posibilidad de cancelación y modificación vía hotel y usuario final, bajo condiciones específicas.
          tr(data-aos="fade-right")
            td(style="background-color: #E8E8E8;") Posibilidad de crear restricciones de tarifas: los mínimos y máximos, CTA; CTD; Compra Anticipada; #[em Day of Week].
          tr(data-aos="fade-right")
            td(style="background-color: #FFF;") Posibilidad de reserva de varias habitaciones en un mismo proceso de reserva.
          tr(data-aos="fade-right")
            td(style="background-color: #E8E8E8;") Posibilidad de tarificar inventario según la IP del usuario que accede al motor de reservas (#[em geomarketing]).
          tr(data-aos="fade-right")
            td(style="background-color: #FFF;") Proceso de reservas rápido y sencillo: no usar demasiados campos obligatorios.
          tr(data-aos="fade-right")
            td(style="background-color: #E8E8E8;") #[em Remarketing] a procesos de reserva inconclusos.
          tr(data-aos="fade-right")
            td(style="background-color: #FFF;") Seleccionar rango de fechas en que aplica la tarifa para dos (2) años.
          tr(data-aos="fade-right")
            td(style="background-color: #E8E8E8;") Si no hay disponibilidad de habitaciones para un criterio de búsqueda, explicar los motivos y facilitar fechas alternativas o #[em cross-selling].
          tr(data-aos="fade-right")
            td(style="background-color: #FFF;") Venta de extras, por ejemplo: al añadir una habitación, muestra un mensaje del tipo “agregar elementos adicionales”.
          tr(data-aos="fade-right")
            td(style="background-color: #E8E8E8;") Vista amigable y manejo vía #[em dashboard] (vista de calendario).
          tr(data-aos="fade-right")
            td(style="background-color: #FFF;") Vista de tarifas configurable.

    .row.mb-5(data-aos="fade-right")
      .col-auto
        .BGR05.px-3.py-2
          .h4.mb-0 <i class="fas fa-globe fa-spin"></i> Channel Manager
        
    p.mb-5(data-aos="fade-right") Con la explosión de canales para la comercialización electrónica de alojamientos, se vuelve muy complejo el control del inventario, tarifas y operación de los mismos.

    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 3.
          span Channel Manager
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema1/img22.jpg' alt="Figura que muestra los logos de cada una de las marcas y estas se utilizaron en un trabajo educativo.")
        .BG17.p-4
          .h5.text-center Autor: Harbey Castelblanco
          p.text-center.mb-0  Los logos utilizados pertenecen a cada una de las marcas y fueron usados como referencia, este es un trabajo educativo sin fines comerciales. Las imágenes de los logos e iconografía fueron obtenidas de #[a(href="flaticon.com" target="_blank") flaticon.com], #[a(href="freepik.com" target="_blank") freepik.com] y las webs de las marcas.

    p.mb-5(data-aos="fade-right") El gestor de canales “Channel Manager” es un #[em software] que permite ofertar las habitaciones del hotel en múltiples canales a los que la propiedad esté conectada, procesando el inventario en tiempo real, minimizando el riesgo de sobreventas. Dentro de las principales características a analizar para adquirir este tipo de herramientas, están:

    ul.lista-ul--color.lista-ul--separador.ms-5.mb-5
      li(style="margin-bottom: 2px" data-aos="fade-right")
        i.fas.fa-star(style="color: #2B95F9;")
        | Actualización automática instantánea en todos los canales.
      li(style="margin-bottom: 2px" data-aos="fade-right")
        i.fas.fa-star(style="color: #2B95F9;")
        | Gestión de todos los canales de distribución en un único punto.
      li(style="margin-bottom: 2px" data-aos="fade-right")
        i.fas.fa-star(style="color: #2B95F9;")
        | Gestión del rendimiento. Reglas de desempeño tarifario versus ocupación.  
      li(style="margin-bottom: 2px" data-aos="fade-right")
        i.fas.fa-star(style="color: #2B95F9;")
        | Integración con PMS y motor de reservas.
      li(style="margin-bottom: 2px" data-aos="fade-right")
        i.fas.fa-star(style="color: #2B95F9;")
        | Mantenimiento de paridad tarifaria.
      li(style="margin-bottom: 2px" data-aos="fade-right")
        i.fas.fa-star(style="color: #2B95F9;")
        | Manejo unificado de tarifas e inventarios en tiempo real.
      li(style="margin-bottom: 2px" data-aos="fade-right")
        i.fas.fa-star(style="color: #2B95F9;")
        | Módulo de analítica.
      li(style="margin-bottom: 2px" data-aos="fade-right")
        i.fas.fa-star(style="color: #2B95F9;")
        | Monitoreo de precios de la competencia.
      li(style="margin-bottom: 2px" data-aos="fade-right")
        i.fas.fa-star(style="color: #2B95F9;")
        p.mb-0 #[em Overbooking] mínimo.
      li(style="margin-bottom: 2px" data-aos="fade-right")
        i.fas.fa-star(style="color: #2B95F9;")
        | Portafolio amplio de conexiones para seleccionar los canales adecuados para su hotel.   

    .row.mb-5(data-aos="fade-right")
      .col-auto
        .BGR05.px-3.py-2
          .h4.mb-0 <i class="fas fa-globe fa-spin"></i> Gestor de comentarios (Reputation Manager)

    p(data-aos="fade-right") Una de las principales características del comprador moderno es que está informado y contrasta información. Debido a este fenómeno, tener una reputación #[em online] bien cuidada es uno de los principales motores de venta hoy en día. El antiguo “voz a voz” son ahora los comentarios de redes sociales o de las plataformas de comercio.
    p.mb-5(data-aos="fade-right") La reputación #[em online] es todo el conjunto de elementos que representan el prestigio de una marca o persona en la red. Estas “señales” las forman, sobre todo, los propios usuarios/consumidores, por lo que es de vital importancia cuidarla; en caso contrario, no se podrá modificar una visión negativa fácilmente. (Meijomil, 2022).

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6.order-lg-1.order-2
        .BGS06.p-4.mb-4(data-aos="fade-right")
          p Entre los beneficios más notables de tener una buena reputación #[em online], está la autoridad. Una página web o blog con autoridad es beneficiado con mejor posicionamiento y, por ende, con más tráfico orgánico.
          p.mb-0 En la industria turística, y particularmente en la hotelera, existen gestores de comentarios, cuya función es ayudar a centralizar y gestionar la reputación #[em online]. Estos programas informáticos permiten, en principio, centralizar la información que todos los días crece, y adicionalmente:
        ul.lista-ul--color
          li(style="margin-bottom: 2px" data-aos="fade-right")
            i.fas.fa-star(style="color: #2B95F9;")
            | Dar un manejo profesional a las interacciones.
          li(style="margin-bottom: 2px" data-aos="fade-right")
            i.fas.fa-star(style="color: #2B95F9;")
            | Captar más comentarios.
          li(style="margin-bottom: 2px" data-aos="fade-right")
            i.fas.fa-star(style="color: #2B95F9;")
            | Analizar los perfiles de usuario y conocer más a los huéspedes.
          li(style="margin-bottom: 2px" data-aos="fade-right")
            i.fas.fa-star(style="color: #2B95F9;")
            | Difundir con más fuerza los mejores comentarios.
          li(style="margin-bottom: 2px" data-aos="fade-right")
            i.fas.fa-star(style="color: #2B95F9;")
            | Responder de forma centralizada.
          li(style="margin-bottom: 2px" data-aos="fade-right")
            i.fas.fa-star(style="color: #2B95F9;")
            | Medir y tener un análisis detallado de rendimiento.
      .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img23.jpg' alt="Imagen decorativa")

    separador
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.5 Medios de pago en un entorno digital
    
    p.mb-5(data-aos="fade-right") Una de las formas en que los medios de pago contribuyen a mejorar la venta #[em online] es ofreciendo múltiples posibilidades. De esta forma, el consumidor tiene ventajas a su alcance y podrá comprar sin que la forma en que realiza el pago sea una excusa para no terminar el proceso. Las siguientes son las más utilizadas en Colombia:

    .row.justify-content-center.mb-5
      .col-auto.mb-4(data-aos="fade-right")
        .BGS07.py-2.px-5
          .h4.text-white.text-center.mb-0 Medios de pago en un entorno digital
      
      .col-lg-8(data-aos="zoom-in")
        ImagenInfograficaB.color-acento-botones.xlarge
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema1/img24.svg')

          .row.justify-content-center(x="50%" y="12%" tooltip="Billeteras electrónicas" numero="1")
            .col-lg-5.col-10.mb-4
              img(src='@/assets/curso/tema1/img25.png' alt="Imagen decorativa")
            .col-lg-8
              .h5.text-white.mb-3 Billeteras electrónicas
              p.text-white.mb-0 Son aplicativos de pago bancarizados y no bancarizados (#[em fintech]), que ofrecen a los clientes transar montos bajos y realizar pagos, la premisa general es reemplazar el efectivo y, al parecer, se está logrando, ya que cada vez son más los usuarios de estas #[em apps]. Entre las más conocidas, se tienen: Tpaga, Nequi (Bancolombia), Movii, Powwi, Davipay (Davivienda), Rappi Pay, Tuya, Billetera Colpatria, Bbva Wallet y Billetera Móvil Bancolombia.
            
          .row.justify-content-center(x="83%" y="31%" tooltip="Botones de pago" numero="2")
            .col-lg-5.col-10.mb-4
              img(src='@/assets/curso/tema1/img26.png' alt="Imagen decorativa")
            .col-lg-8
              .h5.text-white.mb-3 Botones de pago
              p.text-white.mb-0 En este caso, se redirige al cliente a la entidad bancaria, para que efectúe allí el pago. De este modo, el vendedor no accede a los datos del cliente. El botón de pago más conocido es PSE.
            
          .row.justify-content-center(x="83%" y="69%" tooltip="Contra reembolso" numero="3")
            .col-lg-5.col-10.mb-4
              img(src='@/assets/curso/tema1/img27.png' alt="Imagen decorativa")
            .col-lg-8
              .h5.text-white.mb-3 Contra reembolso
              p.text-white.mb-0 Sistema en el cual el consumidor únicamente le paga a la agencia de transporte / mensajería cuando le entrega el producto y, de esta forma, siempre tiene el 100 % de garantías. Hay unos costes adicionales de aproximadamente el 3 % del pedido, en caso de utilizar este sistema. Es popular en los sistemas de domicilios de comida.
            
          .row.justify-content-center(x="50%" y="88%" tooltip="Formulario  de pago" numero="4")
            .col-lg-5.col-10.mb-4
              img(src='@/assets/curso/tema1/img28.png' alt="Imagen decorativa")
            .col-lg-8
              .h5.text-white.mb-3 Formulario  de pago
              p.text-white.mb-0 En este sistema, el cliente rellena un formulario y efectúa la compra. Este sistema conlleva riesgos de seguridad, ya que el vendedor tiene acceso a los datos de la tarjeta de crédito del cliente. Es bastante difundido en las Agencias de Viaje en línea (OTA), ya que se usa para garantizar reservas, cobrándolas cuando se causan o cuando, por algún incumplimiento, se cobra una penalidad.
            
          .row.justify-content-center(x="17%" y="69%" tooltip="Pasarelas de pago o TPV virtual  (terminal de punto de venta virtual)" numero="5")
            .col-lg-5.col-10.mb-4
              img(src='@/assets/curso/tema1/img29.png' alt="Imagen decorativa")
            .col-lg-8
              .h5.text-white.mb-3 Pasarelas de pago o TPV virtual  (terminal de punto de venta virtual)
              p.text-white.mb-0 Son sistemas (aplicativos web) que permiten al vendedor aceptar tarjetas de crédito y otros métodos de pago electrónico. Se trata de un servicio que automatiza la operación de pago entre el cliente y el vendedor, a través de un sistema de procesos informáticos que verifica o rechaza las operaciones de tarjetas en nombre del comerciante, por medio de conexiones seguras de Internet. El costo de transacción es de aproximadamente el 4 % de la venta. En Colombia hay más de 30 de estas empresas dedicadas al recaudo de pagos, todas cumplen estándares de seguridad con protocolos SSL (#[em secure sockets layers]) y encriptación de datos. Las más conocidas son: PayU, ePayco, OpenPay, PayZen, MercadoPago, d-local.
            
          .row.justify-content-center(x="17%" y="31%" tooltip="PayPal" numero="6")
            .col-lg-5.col-10.mb-4
              img(src='@/assets/curso/tema1/img30.png' alt="Imagen decorativa")
            .col-lg-8
              .h5.text-white.mb-3 PayPal
              p.text-white.mb-0 Este sistema de pago pertenece a eBay y consiste en la transferencia de dinero entre usuarios vinculando una cuenta de correo electrónico a las cuentas bancarias correspondientes a las tarjetas de crédito.
            

    separador
    #t_1_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.6 La logística #[em eCommerce]
    
    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img31.svg' alt="Imagen decorativa")
      .col-lg-8(data-aos="fade-left")
        .BG08.p-4.mb-4
          p Al hablar de comercio electrónico, la logística tiene una gran relevancia en el éxito o fracaso del proyecto. Se refiere a todo lo que tiene que ver con almacenamiento, transporte y entrega de los productos. Cualquier error en el proceso disminuye las posibilidades de fidelizar al cliente.
          p.mb-0 El tema logístico es un punto de difícil tratamiento, ya que al cliente final poco le importa lo que hay que hacer para llevar un producto a su puerta. A él le interesa que, una vez efectuada la compra, el producto llegue en el menor tiempo posible, y, de otro lado, el cliente tampoco está dispuesto a pagar por servicios premium de entrega rápida que suelen ser bastante costosos.
        p.mb-0 De cualquier forma, el sistema logístico ha evolucionado mucho y se ha especializado en sus diferentes etapas, logrando sinergias eficientes y a costos asequibles. En Colombia, las empresas con mayor experiencia en el ramo son Servientrega, Interrapidísimo, Coordinadora, Envía y TCC. También están las compañías internacionales como FedEx, UPS y, por supuesto, compañías de logística de última milla como RapiGo, Speedy Zubale, Cubbo, por mencionar solo algunas.

    .BGS09.p-4.mb-5(data-aos="flip-up")
      p.mb-0 #[em Fulfillment] es el término que describe el proceso de, tratamiento de una orden de comercio electrónico y abarca el proceso de recepción, almacenamiento, empaquetado y envió de mercancías. La idea es que este proceso sea interno, pero es un proceso que requiere de grandes infraestructuras físicas (bodegas) y tecnológicas (#[em software] de seguimiento), es por eso por lo que han nacido las compañías especializadas en este proceso, que ponen estas infraestructuras al servicio de comercios más pequeños.

    separador
    #t_1_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.7 Propuesta comercial de las experiencias turísticas digitales

    .BGS06.p-4.mb-5(data-aos="flip-up")
      p La propuesta comercial puede tener varias formas en el ámbito digital. En el caso del B2C, la propuesta toma la forma de portafolio o simplemente el estilo en el que se organizan y muestran los productos de una tienda #[em online].
      p.mb-0  En el caso del B2B, puede ser un documento que muy concisamente muestra el producto o servicio ofrecido, valor, plazo y formas de pago. Una muestra tangible, pero concreta, de por qué el producto o servicio que se ofrece es la mejor solución. Observe cómo hacerla.
    
    p.mb-5(data-aos="fade-right") Para lograr elaborar una propuesta comercial efectiva, existen unos pasos más o menos normalizados que estudiará a continuación:

    .row.justify-content-center.mb-5
      .col-auto(data-aos="fade-right")
        .BGS07.py-2.px-5
          .h4.text-white.text-center.mb-0 Propuesta Comercial

    .row.justify-content-center.mb-5
      .col-lg-4.d-lg-flex.d-none(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img32.png' alt="Imagen decorativa")
      .col-lg-8
        .h4.text-center(data-aos="fade-left") Etapa 1
        LineaTiempoD.color-acento-botones.mb-4(data-aos="fade-left")
          p.text-small(numero="1" titulo="Cualificación de prospectos") Primero, determinar si vale la pena invertir esfuerzo en la elaboración de la propuesta comercial. Buscar prospectos que sean lo más afines posibles al buyer persona. Este análisis es esencial, para maximizar los resultados y  focalizar el esfuerzo donde haya mayor probabilidad de éxito, ya que la interacción digital inicial es informativa y suele llamar la atención, no solo de posibles clientes, sino de otros públicos.
            | <br><br>Aquí debe utilizar técnicas del #[em lead scoring], para establecer si los prospectos son:
            | <br>#[strong TOFU]: Top of the funnel o prospectos fríos.
            | <br>#[strong MOFU]: Middle of the funnel o prospectos tibios.
            | <br>#[strong BOFU]: Bottom of the funnel o prospectos calientes (listos para la compra).
          p.text-small(numero="2" titulo="Entrevista inicial o <em>briefing</em>") Normalmente, uno no confía en alguien que lleve una solución sin haber intentado entender el problema o profundizado en los síntomas. Por tal razón, se hace la  reunión de #[em briefing]. Este es el momento de iniciar una relación de confianza. Se deben tener en cuenta tres cosas básicas: crear afinidad, escuchar y hacer las preguntas correctas.
        .h4.text-center(data-aos="fade-left") Etapa 2
        LineaTiempoD.color-primario.mb-4(data-aos="fade-left")
          p.text-small(numero="3" titulo="Construcción de la solución") Recuerde que las necesidades de cada cliente son particulares y, por tanto, la propuesta debe ser diferente para cada uno. Hay que tomar la información proporcionada por el cliente en el #[em briefing] y reflexionar e investigar. La mayoría de las veces, el cliente no sabe las respuestas a sus preguntas y es su deber dárselas.
            | <br>Adicionalmente, analice la competencia, con esto tendrá la información necesaria para construir una verdadera solución. 
          p.text-small(numero="4" titulo="Presentación de la propuesta") Organiza una presentación práctica y que toque los puntos neurálgicos:
            ul.lista-ul--color
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #EB6F2D;")
                | Problema
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #EB6F2D;")
                | Objetivo
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #EB6F2D;")
                | Escenario ideal
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #EB6F2D;")
                | Escenario actual
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #EB6F2D;")
                | Competencia
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #EB6F2D;")
                | Plan táctico
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #EB6F2D;")
                | Inversión
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #EB6F2D;")
                | Alineación del sueño

        .h4.text-center(data-aos="fade-left") Etapa 3
        LineaTiempoD.color-secundario(data-aos="fade-left")
          p.text-small(numero="5" titulo="Seguimiento y cierre") Esta parte es importante. Al final de la reunión, se deben aclarar todas las objeciones. Obtener la retroalimentación del prospecto es una técnica muy eficiente. 
            | <br><br>Adicionalmente, concertar una fecha de seguimiento y trazar intrínsecamente una ruta que le permita al cliente tomar la decisión. 
            | <br><br>Una sugerencia extra es transmitir sentido de pertenencia y crear un sentido de urgencia en el cliente.

    p.mb-5(data-aos="fade-right") También, dependiendo del tipo de negocio, se deben tener en cuenta otros ítems muy variados, que verá a continuación, para entender a profundidad y dominar la elaboración de propuestas comerciales.

    .row.mb-5(data-aos="fade-right")
      .col-auto
        .BGR05.px-3.py-2
          .h4.mb-0 <i class="fas fa-globe fa-spin"></i> Portafolio de productos y servicios
    
    .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img33.jpg')})`}" data-aos="fade-right" alt="Imagen decorativa"
      )
      .bloque-texto-g__texto.py-md-5.py-4.px-4(data-aos="fade-left")
        p.mb-0 El portafolio de servicios es un documento preparado por una empresa, organización o individuo, en el que se describen sintéticamente los servicios que se ofrece, se detallan los límites y ofrecimientos del proveedor para todos los clientes, y las áreas de mercado a las que sirve. La industria turística, en general, basa su oferta comercial en servicios intangibles, por lo cual se apoya de elementos gráficos que soportan la transmisión del mensaje a los posibles clientes, uno de los más usados es el portafolio.

    p(data-aos="fade-right") Este puede ser impreso o digital, y se trata de una descripción detallada de los productos o servicios que ofrece la empresa, su función es informar a los posibles clientes sobre las ventajas y beneficios de contratar a la empresa, en ellos se suministra información sobre:

    ul.lista-ul--color.lista-ul--separador.ms-5.mb-5
      li(style="margin-bottom: 2px" data-aos="fade-right")
        i.fas.fa-star(style="color: #2B95F9;")
        | Descripción del servicio.
      li(style="margin-bottom: 2px" data-aos="fade-right")
        i.fas.fa-star(style="color: #2B95F9;")
        | Alcance del servicio.
      li(style="margin-bottom: 2px" data-aos="fade-right")
        i.fas.fa-star(style="color: #2B95F9;")
        | Beneficios percibidos por el servicio.
      li(style="margin-bottom: 2px" data-aos="fade-right")
        i.fas.fa-star(style="color: #2B95F9;")
        | Impacto del uso del servicio.
      li(style="margin-bottom: 2px" data-aos="fade-right")
        i.fas.fa-star(style="color: #2B95F9;")
        | Procedimiento para la utilización del servicio.
      li(style="margin-bottom: 2px" data-aos="fade-right")
        i.fas.fa-star(style="color: #2B95F9;")
        | Vinculación con otros servicios. 

    p.mb-5(data-aos="fade-right") Además de la descripción de productos y servicios, también se incluyen diversos apartados. Cada uno de estos suministra información sobre un aspecto de la empresa que puede resultar de utilidad para los futuros clientes o socios, como es la trayectoria, características de la empresa, socios, objetivos, misión y visión, proveedores, clientes, información de contacto, entre otros. Todo esto tendiente a aportar credibilidad en la oferta.

    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-right")
        .tarjeta.BG04.p-4
          .row.justify-content-center.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/img01.svg" alt="Imagen decorativa")
            .col
              p.text-white.mb-0 El SENA ha dispuesto algunos videos que tratan el tema de portafolio de servicios; con el fin de reforzar lo visto hasta ahora, podrá consultarlos en los siguientes enlaces:
              .row.justify-content-between.align-items-center.mb-4
                .col.mb-3.mb-sm-0
                  .h4.text-white.mb-0 Definición de portafolio 
                .col-sm-auto
                  a.boton.color-acento-contenido(href="https://www.youtube.com/watch?v=mkIdPKBfpXc" target="_blank")
                    span(style="color: #12263F !important") Enlace
                    i.fas.fa-link(style="color: #12263F !important")
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  .h4.text-white.mb-0 Portafolio y características del producto
                .col-sm-auto
                  a.boton.color-acento-contenido(href="https://www.youtube.com/watch?v=QrJ2hZkRpiM" target="_blank")
                    span(style="color: #12263F !important") Enlace
                    i.fas.fa-link(style="color: #12263F !important")

    .row.mb-5(data-aos="fade-right")
      .col-auto
        .BGR05.px-3.py-2
          .h4.mb-0 <i class="fas fa-globe fa-spin"></i> Técnicas de negociación
    
    p(data-aos="fade-right") Las técnicas de negociación son herramientas de resolución de conflictos que te ayudarán a influir en los demás por medio del uso de la palabra, del control de las reacciones y de un pensamiento analítico, entre otros aspectos. (Torres, 2021).
    p.mb-5(data-aos="fade-right") A través de los años, estas técnicas de negociación han sido estudiadas y refinadas, y se pueden referenciar las siguientes técnicas y métodos:

    ul.lista-ul--color.lista-ul--separador.ms-5.mb-5
      li(style="margin-bottom: 2px" data-aos="fade-right")
        i.fas.fa-star(style="color: #2B95F9;")
        | Estrategia cara a cara.
      li(style="margin-bottom: 2px" data-aos="fade-right")
        i.fas.fa-star(style="color: #2B95F9;")
        | El método AIDA.
      li(style="margin-bottom: 2px" data-aos="fade-right")
        i.fas.fa-star(style="color: #2B95F9;")
        | El método de negociación Harvard.
      li(style="margin-bottom: 2px" data-aos="fade-right")
        i.fas.fa-star(style="color: #2B95F9;")
        | El método SPIN.
      li(style="margin-bottom: 2px" data-aos="fade-right")
        i.fas.fa-star(style="color: #2B95F9;")
        | La empatía estratégica.
      li(style="margin-bottom: 2px" data-aos="fade-right")
        i.fas.fa-star(style="color: #2B95F9;")
        | La técnica de negociación ganar-ganar.

    p.mb-5(data-aos="fade-right") En el siguiente video, se explica más en detalle cada una de estas:

    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/c5gtk-6v0rQ?si=QH5h6RscQL8z1TTd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mb-5(data-aos="fade-right") Estas técnicas fueron creadas para la venta presencial, pero bien pueden ser aplicadas a la venta #[em online], ya que el común denominador de ellas es conocer al cliente o su necesidad y practicar la escucha activa. Usted podrá investigar más sobre cada una de estas técnicas e implementar la que más se acomode a su tipo de negocio.

    .row.mb-5(data-aos="fade-right")
      .col-auto
        .BGR05.px-3.py-2
          .h4.mb-0 <i class="fas fa-globe fa-spin"></i> Políticas de servicio  

    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img34.jpg' alt="Imagen decorativa")
      .col-lg-8(data-aos="fade-left")
        .BG08.p-4.mb-4
          p.mb-0 Las políticas de servicio son un sistema estructurado, encaminado a ofrecer el mejor servicio posible a nuestros clientes. Se podría decir que las políticas, en general, son la esencia de la empresa traducida a reglas básicas y normas de comportamiento.
        p.mb-0 Desde el aspecto comercial y el mundo digital, es altamente recomendable establecer políticas: para uso de los sitios web, de descuentos, de servicio, de devoluciones, de entrega, en las que es necesario establecer criterios de transparencia para los clientes.
        
    .row.justify-content-center.mb-5
      .col-lg-8.BG01(data-aos="fade-right")
        .row.justify-content-center.align-items-center
          .col-lg-4.col-6.px-0.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/img35.jpg' alt="Imagen decorativa")
          .col-lg-8
            .p-4
              p.mb-0 Recuerde que una venta es la solución a una necesidad, por lo tanto, siempre será valioso incorporar en estas políticas ítems que propendan a entregar al cliente un servicio claro y en el que el cliente no se sienta acorralado.

    .row.mb-5(data-aos="fade-right")
      .col-auto
        .BGR05.px-3.py-2
          .h4.mb-0 <i class="fas fa-globe fa-spin"></i> Atención al cliente
    
    p.mb-5(data-aos="fade-right") La atención al cliente es un ítem preponderante en la venta tradicional y, más aún, en la venta digital. Recuerde que, al vender, está ofreciendo soluciones, por tanto, todo el soporte preventa y posventa que se da será altamente apreciado. No basta con solo crear un buen contenido y ponerlo en la web, o promoverlo en redes sociales, si al final del día el prospecto o el cliente no pueden lograr el trato que desean.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        .BGS02.p-4
          i.fas.fa-quote-left.text-start(style="font-size: 2em; color: #EA6E42")
          h4.mx-4 Un cliente, la gran mayoría de las veces, solo desea ser escuchado
          i.fas.fa-quote-right.mb-0(style="font-size: 2em; color: #EA6E42; position: relative; left: calc(100% - 25px);")
      .col-lg-8(data-aos="fade-left")
        p Dentro de la venta digital, hay múltiples herramientas que funcionan como medios para generar ventas, pero también como medios de interacción y comunicación. 
        p.mb-0 Por este motivo, hay que utilizarlos responsablemente, pero sobre todo enfocados a brindar un servicio genuino. Entre estas herramientas, están los servicios de chat, los #[em bots] de servicio, los formularios de contacto, los enlaces telefónicos, los foros o los grupos de ayuda y las redes sociales. Todos ellos, individualmente o en conjunto, cumplen la misma función: establecer una comunicación con el cliente. Se debe recordar que la gran mayoría de las veces un cliente solo desea ser escuchado.

    p.mb-5(data-aos="fade-right") En relación al servicio al cliente, hay unas características que deben tenerse en cuenta:

    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="zoom-in")
        ImagenInfograficaB.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema1/img36.svg')

          .row.justify-content-center(x="34.25%" y="11.2%" tooltip="Manejo de objeciones" numero="1")
            .col-lg-7.order-lg-1.order-2
              .h5.text-white.mb-3 Manejo de objeciones
              p.text-white En consonancia con lo que se ha explicado, se puede afirmar categóricamente que a la gente le gusta comprarle a la gente. Es decir, es válido y necesario, hoy en día, utilizar herramientas tecnológicas para el servicio al cliente, pero no se debe abusar de ellas y mucho menos manejar las objeciones a través de ellas. 
              p.text-white.mb-0 La objeción es un mecanismo de negociación y, para poder entenderla, se debe empatizar con el cliente, y esto no lo puede lograr un robot, por avanzado que sea, por lo que la sugerencia, en este aspecto, es que la objeción se aísle y se maneje directamente por un profesional en el tema.
            .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema1/img37.png' alt="Imagen decorativa")
          .row.justify-content-center(x="60%" y="32%" tooltip="Acuerdos de venta" numero="2")
            .col-lg-7.order-lg-1.order-2
              .h5.text-white.mb-3 Acuerdos de venta
              p.text-white Los acuerdos de venta son entendimientos a los que se llega con los clientes. En la venta digital, se considera que una venta está cerrada cuando el cliente efectúa el pago en el carrito de compras. Pero existen algunos tipos de negocios en los que se pueden hacer acuerdos previos al cierre del negocio.
              p.text-white Este tipo de acuerdos son frecuentes cuando se manejan altas cifras de dinero, como el comercio de autos o el negocio inmobiliario, y se les conoce como “promesa de venta”. También son utilizados en otra forma dentro del mercado turístico, y se llaman reservas.
              p.text-white.mb-0 Por lo general, estos acuerdos de venta ocasionan penalidades en caso de no concretarse el negocio.
            .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema1/img38.png' alt="Imagen decorativa")
          .row.justify-content-center(x="90%" y="35%" tooltip="Servicio posventa" numero="3")
            .col-lg-7.order-lg-1.order-2
              .h5.text-white.mb-3 Servicio posventa
              p.text-white Una vez cerrada la transacción de venta, en todos los tipos de ventas, pero con mayor relevancia en las transacciones digitales, está la relación o servicio posventa.
              p.text-white.mb-0 En este tratamiento, el cliente, por lo general, preguntará sobre las condiciones de uso del producto o servicio y aclarará las dudas que tenga al respecto del desarrollo del servicio. Este servicio posventa es esencial en el comercio electrónico y en el negocio turístico, ya que garantiza el pleno disfrute del servicio y provoca acciones de recompra.
            .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/tema1/img39.png' alt="Imagen decorativa")

    p(data-aos="fade-right") Teniendo en cuenta todos los ítems anteriormente mencionados, podrá construir propuestas comerciales exitosas para las actividades turísticas que decida promover. 
    p.mb-5(data-aos="fade-right") Cada negocio es diferente y, en ese sentido, encontrará que al final del tiempo la práctica hace al maestro. Es decir que se debe practicar y testear para lograr un método de preparación de las propuestas comerciales que lo haga sentir confiado de lograr el objetivo final, que consiste en cerrar la venta.

    .row.mb-5(data-aos="fade-right")
      .col-auto
        .BGR05.px-3.py-2
          .h4.mb-0 <i class="fas fa-globe fa-spin"></i> Fidelización de clientes
    
    p.mb-5(data-aos="fade-right") Otro de los elementos relevantes de la venta, y aún más de la venta #[em online], es la fidelización. Está demostrado por cientos de estudios que es más costoso encontrar nuevos clientes que mantener los existentes logrando que compren más o que nos recomienden.

    .BG05.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
          .p-4
            p En sí, el concepto de fidelización del cliente es bastante simple y poderoso. Consiste en desarrollar una relación positiva con los consumidores, de esta forma, estos continúan comprando y recomendando los productos o servicios, influenciados por las experiencias positivas que han tenido con la empresa. Estas experiencias positivas deben mantenerse y alimentarse a través del tiempo.
            p.mb-0 En términos prácticos, por ejemplo, un restaurante logra fidelizar por sus recetas y su servicio; un hotel, por su confortabilidad y por lograr dar la experiencia de usuario esperada.  Esas experiencias positivas quedan grabadas en el inconsciente del cliente, que las traerá de vuelta al necesitar satisfacer nuevamente una necesidad.
        .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/tema1/img40.jpg' alt="Imagen decorativa")

    p(data-aos="fade-right") Para lograr este cometido, los expertos recomiendan.

    ul.lista-ul--color.lista-ul--separador.ms-5.mb-5
      li(style="margin-bottom: 2px" data-aos="fade-right")
        i.fas.fa-star(style="color: #2B95F9;")
        | Ayudar al cliente a aprovechar bien el producto o servicio.
      li(style="margin-bottom: 2px" data-aos="fade-right")
        i.fas.fa-star(style="color: #2B95F9;")
        | Crear un programa de fidelización.
      li(style="margin-bottom: 2px" data-aos="fade-right")
        i.fas.fa-star(style="color: #2B95F9;")
        | Escuchar activamente al cliente.
      li(style="margin-bottom: 2px" data-aos="fade-right")
        i.fas.fa-star(style="color: #2B95F9;")
        | Invertir en servicio al cliente.
      li(style="margin-bottom: 2px" data-aos="fade-right")
        i.fas.fa-star(style="color: #2B95F9;")
        | Personalizar la comunicación.

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    mostrarIndicador: true,
    datosSlyder: [
      {
        texto:
          'Seguramente, una playa blanca y un mar cristalino, como los de la imagen, ayudarán a conectar con clientes que deseen tomar unas vacaciones y estar a la orilla del mar.',
        imagen: require('@/assets/curso/tema1/img02.png'),
      },
      {
        texto:
          'Si la oferta se relaciona con un tema romántico, una escapada en pareja o un plan para compartir con esa persona amada, una imagen así puede lograr el efecto deseado.',
        imagen: require('@/assets/curso/tema1/img03.png'),
      },
      {
        texto:
          'La fotografía gastronómica representa grandes retos a la hora de transmitir las características del producto, que, además, suple una necesidad primaria del ser humano.',
        imagen: require('@/assets/curso/tema1/img04.png'),
      },
      {
        texto:
          ' La venta <em>online</em> incluye también la promoción de eventos como conciertos y festivales.',
        imagen: require('@/assets/curso/tema1/img05.png'),
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
