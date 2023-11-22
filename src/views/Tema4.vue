<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Revenue Management
    
    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/img01.jpg')})`}" data-aos="fade-right" alt="Imagen decorativa"
      )
      .bloque-texto-g__texto.py-md-5.py-4.px-4(data-aos="fade-left")
        p.mb-0 Revenue Management, o gestión de ingresos, es una técnica avanzada de gestión de información, que tiene su origen en los años 80, en la industria de las aerolíneas, pero que hoy en día se aplica a varias industrias que cumplen con los requisitos para su uso, entre ellas, la hotelería.

    p(data-aos="fade-right") Seguramente, usted habrá notado cómo cambia el precio de un tiquete aéreo cada vez que se realiza una misma búsqueda, en las mismas fechas. Como ya se mencionó, las aerolíneas han sido las pioneras en el uso de los datos de oferta y demanda para optimizar su política de precios y manejo de inventario.
    p.mb-5(data-aos="fade-right") Pues, en esencia, eso es Revenue Management, y como lo define Robert Cross, considerado el gurú de este tema, quien indica: 
    
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="flip-up")
        .bloque-texto-f.color-acento-contenido.pt-4.px-5.mb-5
          .bloque-texto-f__comillas
            i.fas.fa-quote-left(style="color: #3BC192")
            i.fas.fa-quote-right(style="color: #3BC192")
          h4.text-regular.bloque-texto-f__texto La gestión de ingresos (en inglés, Revenue Management) es la aplicación disciplinada de herramientas analíticas que predicen el comportamiento del consumidor en un nivel de micromercado, y optimiza la disponibilidad y precio del producto para maximizar el crecimiento de los ingresos. El objetivo principal de la gestión de ingresos es la venta del producto adecuado al cliente adecuado, en el momento adecuado, al precio correcto y en el canal correcto. La esencia de esta disciplina es la comprensión de la percepción del valor del producto para los clientes, alineándola con precisión a los precios de los productos, la colocación y disponibilidad, para cada segmento de clientes. Todo esto soportado en una cultura organizacional basada en analítica.
          .bloque-texto-f__autor.mb-3
            h3.mb-0 Cross, 1997
          .bloque-texto-f__avatar
            .bloque-texto-f__avatar__img
              img(src='@/assets/curso/tema4/img02.png', alt="Imagen decorativa")

    p.mb-5(data-aos="fade-right") El Revenue Management, utiliza la información y ajusta los productos para después ofrecerlos en el momento y al cliente adecuados; a continuación, se explica de manera resumida, este proceso.

    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 3.
          span Revenue Management
        .tabla-a.color-acento-contenido
          table(data-aos="zoom-in"  alt="Tabla que muestra la definición y características del Renueve Management.")
            tbody(style="border-color: transparent")
              tr(data-aos="fade-right")
                th(style="background-color: #EB702D; width: 2%") &nbsp;
                td(style="background-color: #FFF; width: 41%; padding: 20px 40px" rowspan="3") #[strong.fs-25 Revenue Management]<br><br>
                  p.mb-0 Es el proceso de toma de decisiones, basado en analítica de datos, que aplica tácticas y estrategias para optimizar la disponibilidad y precio del producto, para maximizar ingresos y rentabilidad.
                td(style="background-color: #EB702D; width: 15%; font-size: 40px;").text-center.text-white #[strong 1]
                td(style="background-color: #F9CDB4; width: 37%;") El objetivo principal de la gestión de ingresos es la venta del producto adecuado al cliente adecuado, en el momento adecuado, al precio correcto y en el canal correcto.
              tr(data-aos="fade-right")
                th(style="background-color: #8D421B;") &nbsp;
                td(style="background-color: #8D421B; font-size: 40px;").text-center.text-white #[strong 2]
                td(style="background-color: #FCEAE0;") La esencia de esta disciplina es la comprensión de la percepción del valor del producto para los clientes, alineándola con precisión a los precios de los productos, la colocación y disponibilidad para cada segmento de clientes.
              tr(data-aos="fade-right")
                th(style="background-color: #FFB339;") &nbsp;
                td(style="background-color: #FFB339; font-size: 40px;").text-center.text-white #[strong 3]
                td(style="background-color: #FFE3BB;") Es la aplicación disciplinada de herramientas analíticas que predicen el comportamiento del consumidor en un nivel de micromercado, y optimiza la disponibilidad y precio del producto para maximizar el crecimiento de los ingresos.

    p.mb-5(data-aos="fade-right") Un breve recorrido por los hechos más relevantes y que dieron como resultado la implementación de lo que hoy en día se conoce como Revenue Management se observa en el siguiente recurso educativo:

    SlyderB.mb-5(:datos="datosSlyder" data-aos="zoom-in")
    
    p.mb-5(data-aos="fade-right") Al transitar la historia, se observa que los inicios se comparten entre la industria aeronáutica y la hotelería, sin embargo, el Revenue Management, es aplicable a una variedad de industrias y servicios, como los que se muestran en la siguiente figura:

    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 7.
          span Requisitos para aplicar Revenue Management
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema4/img03.svg' alt="Figura que describe los requisitos que se deben aplicar para Revenue Management.<br>Aerolíneas, pasajeros y carga<br>Avisos de televisión<br>Bares y clubes nocturnos<br>Buses<br>Campos de golf<br>Cruceros<br>Hoteles<br>Parqueaderos<br>Restaurantes<br>Renta de vehículos<br>Spas<br>Teatros y eventos públicos")

    p.mb-5(data-aos="fade-right") Al pensar por un momento en un hotel o un avión, es evidente que por ellos pasan muchas personas diferentes, en distintos momentos y, por supuesto, con necesidades distintas. Es allí, en esa variedad de usuarios, donde el Revenue Management toma forma y, a partir de la definición estudiada, se pueden observar cinco (5) grandes componentes que afectan la estructuración de esta disciplina:
    ul.lista-ul--color.lista-ul--separador.ms-5.mb-5
      li(style="margin-bottom: 2px" data-aos="fade-right")
        i.fas.fa-star(style="color: #2B95F9;")
        p.mb-0 El canal, que corresponde a la #[strong distribución] del producto o del servicio.
      li(style="margin-bottom: 2px" data-aos="fade-right")
        i.fas.fa-star(style="color: #2B95F9;")
        p.mb-0 El cliente, que hace parte de la #[strong segmentación] del mercado.
      li(style="margin-bottom: 2px" data-aos="fade-right")
        i.fas.fa-star(style="color: #2B95F9;")
        p.mb-0 El precio, que corresponde al #[strong #[em pricing]] -la forma en que estos se fijan-.
      li(style="margin-bottom: 2px" data-aos="fade-right")
        i.fas.fa-star(style="color: #2B95F9;")
        p.mb-0 El producto, que responde a la #[strong experiencia] del usuario.
      li(style="margin-bottom: 2px" data-aos="fade-right")
        i.fas.fa-star(style="color: #2B95F9;")
        p.mb-0 El momento, que #[strong pronostica] la tendencia de conducta del cliente frente a su consumo.
    p.mb-5(data-aos="fade-right") Con base en estos cinco elementos estructurales, el #[em revenue manager] desarrolla, a su vez, cinco tareas o técnicas que, por medio del análisis de datos, llegan a reducir la incertidumbre que rodea la demanda y a optimizar los precios. Y es así como, el proceso traza unos objetivos, entre los que se pueden mencionar.
    ul.lista-ul--color.lista-ul--separador.ms-5.mb-5
      li(style="margin-bottom: 2px" data-aos="fade-right")
        i.fas.fa-star(style="color: #2B95F9;")
        | Ocupación óptima.
      li(style="margin-bottom: 2px" data-aos="fade-right")
        i.fas.fa-star(style="color: #2B95F9;")
        | Ingreso máximo.
      li(style="margin-bottom: 2px" data-aos="fade-right")
        i.fas.fa-star(style="color: #2B95F9;")
        | Expansión del mercado.
    p(data-aos="fade-right") Estos grandes componentes que afectan cómo se lleva a cabo la estructuración del Revenue Management que se mencionaban antes requieren una mayor explicación, como se ofrece a continuación:

    separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1 La distribución
    
    p(data-aos="fade-right") El control de la distribución es uno de los primeros hitos de la gestión de ingresos o Revenue Management, y esto tiene que ver con la explosión de canales de distribución acaecidos con la llegada del Internet y la gestión de precios en todos los canales disponibles, lo cual era difícil, por no decir imposible. Por fortuna, a la par del desarrollo, se han creado las herramientas que facilitan el control del inventario, de manera estratégica y no demande mucho tiempo operativamente hablando.
    p.mb-5(data-aos="fade-right") Ahora, al mencionar la palabra estratégica, se hace referencia a temas como:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9.order-lg-1.order-2(data-aos="fade-right")
        TabsA.color-acento-botones.mb-5(data-aos="zoom-in")
          .tarjeta.BG13.p-4(titulo="Canal de inventario")
            p.mb-0 Determinar qué parte de su inventario de habitaciones distribuir a cada canal de venta, es decir, buscar el canal óptimo. Recordemos que el uso de estos canales acarrea un costo, que está atado a una efectividad, por lo que el análisis estratégico de canales es imperativo.
          .tarjeta.BG13.p-4(titulo="Canal directo")
            p.mb-0 Privilegiar los canales directos, una forma simple de probarlo es buscar un hotel a través de un motor de búsqueda como Google. Si los primeros resultados de búsqueda están dominados por los canales de terceros, como Booking o Expedia, y los canales directos están por debajo, puede que se deba revisar el sitio web y optimizarlo para los motores de búsqueda y tomar acciones para posicionarse mejor, además de hacer inversiones en mercadeo digital.
      .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema4/img04.png' alt="Imagen decorativa")

    separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.2 La segmentación
    
    p.mb-5(data-aos="fade-right") Una buena gestión de los ingresos tiene su base en una buena segmentación. Como ya lo se ha mencionado en repetidas oportunidades, entender al cliente y a sus necesidades específicas, es importante. Recuerde que cada huésped tiene motivos diferentes, expectativas diferentes, está dispuesto a pagar precios diferentes, elige productos diferentes. Para lograr este cometido, en primer lugar, se utilizan dos definiciones muy importantes:

    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-5.col-md-6.col-sm-7.col-8.mb-xl-2.mb-4(data-aos="fade-right")
        .tarjeta.tarjeta-flip.color-primario.h-100(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema4/img05.svg')})`}")
            .tarjeta-flip__contenido.p-xl-5.p-4
              .h4.mt-5 Segmentación
              p.mb-5 Se entiende por segmentación del mercado cuando una empresa divide el mercado, que es de característica heterogénea, en fragmentos más pequeños, que pueden ser atendidos con mayor eficiencia y eficacia con productos y servicios que respondan a sus necesidades únicas.
      .col-xl-4.col-lg-5.col-md-6.col-sm-7.col-8.mb-xl-2.mb-4(data-aos="fade-left")
        .tarjeta.tarjeta-flip.color-acento-contenido.h-100(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema4/img06.svg')})`}")
            .tarjeta-flip__contenido.p-xl-5.p-4
              .h4.mt-5 Segmento de mercado
              p.mb-5 Es un subconjunto o fragmento de un grupo de clientes que se puede identificar fácilmente por una o más características comunes, pero a la vez únicas del cliente (por ejemplo, los ingresos, el género, o el propósito del viaje).

    p.mb-5(data-aos="fade-right") Con esto en mente, se organiza la información en segmentos y subsegmentos, contestando preguntas como:
    ul.lista-ul--color.lista-ul--separador.ms-5.mb-5
      li(style="margin-bottom: 2px" data-aos="fade-right")
        i.fas.fa-star(style="color: #2B95F9;")
        | ¿Cómo reservan? (¿Por cuál canal y con qué antelación?).
      li(style="margin-bottom: 2px" data-aos="fade-right")
        i.fas.fa-star(style="color: #2B95F9;")
        | ¿Cómo utilizan su hotel? (¿negocios u ocio?).
      li(style="margin-bottom: 2px" data-aos="fade-right")
        i.fas.fa-star(style="color: #2B95F9;")
        | ¿Cuándo utilizan su hotel? (¿semana o fin de semana?).
      li(style="margin-bottom: 2px" data-aos="fade-right")
        i.fas.fa-star(style="color: #2B95F9;")
        | ¿Qué disposición de pago tienen?
      li(style="margin-bottom: 2px" data-aos="fade-right")
        i.fas.fa-star(style="color: #2B95F9;")
        | ¿Son individuales o grupos?
      li(style="margin-bottom: 2px" data-aos="fade-right")
        i.fas.fa-star(style="color: #2B95F9;")
        | ¿Las reservas son transitorias o contratadas?
      li(style="margin-bottom: 2px" data-aos="fade-right")
        i.fas.fa-star(style="color: #2B95F9;")
        p.mb-0 ¿Cuál es el LoS (#[em Long of Stay])? Es decir, la duración promedio de la estadía.
           
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-right")
        .tarjeta.BG04.p-4
          .row.justify-content-center.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/img01.svg" alt="Imagen decorativa")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.text-white.mb-1 Formulario de segmentación de clientes 
                  p.text-white.mb-0 En Anexo, se encuentra un formulario para realizar la segmentación de clientes, elaborado por el SENA y que puede ser de ayuda para comprender mejor el tema tratado.
                .col-sm-auto
                  a.boton.color-acento-contenido(:href="obtenerLink('/downloads/Formulario_de_segmentación_de_clientes.pdf')" target="_blank" type="application/pdf")
                    span(style="color: #12263F !important") Descargar
                    i.fas.fa-link(style="color: #12263F !important")

    p.mb-5(data-aos="fade-right") Aquí es importante mencionar que los segmentos obtenidos al final del análisis deben cumplir con las siguientes características:

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 8.
          span Características segmentos
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema4/img07.svg' alt="Figura que describe las características de los segmentos que son:<br>1. Ser accesible<br>¿Es un segmento que podemos entender?<br>2. Ser accionable<br>¿Reacciona a las acciones comerciales?<br>3. Ser medible<br>¿Cuál es el tamaño del segmento?<br>4. Ser significativo<br>¿Brinda valor a la empresa?")
    
    p.mb-5(data-aos="fade-right") Una vez se han preformado los diferentes segmentos y subsegmentos de mercado, se pueden organizar en la matriz de segmentación, que es un documento que muestra a una sola vista los segmentos que se trabaja.

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 4.
          span Matriz de segmentación
        .tabla-a.color-acento-contenido
          table(data-aos="zoom-in"  alt="Tabla que muestra la manera que se estructura la matriz de segmentación de un negocio.")
            tbody(style="border-color: transparent")
              tr(data-aos="fade-right")
                th(style="background-color: #F9D9A2; width: 26%; font-size: 18px;" rowspan="3") Individual (#[em Transient])
                th(style="background-color: #FFB338; width: 37%;") Negocios (#[em Business])
                th(style="background-color: #FFB338; width: 37%;") Turismo (#[em Leisure])
              tr(data-aos="fade-right")
                td(style="background-color: #FFF;") 
                  ul.lista-ul--color
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #EB6F2D;")
                      | Corta Estadía (IN-CE).
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #EB6F2D;")
                      | Larga Estadía (IN-LE).
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #EB6F2D;")
                      | Ferias y Congresos (IN-FC).
                td(style="background-color: #FFF;")
                  ul.lista-ul--color
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #EB6F2D;")
                      | FIT* (parejas, grupos de amigos): (IT-FI).
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #EB6F2D;")
                      | Familias (IT-FA).
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #EB6F2D;")
                      | Bodas y Eventos (IT-BE).
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #EB6F2D;")
                      p.mb-0 FIT (#[em Free Independent Traveler]).
              tr(data-aos="fade-right")
                td(style="background-color: #FFF4E1;" colspan="2")
                  ul.lista-ul--color
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #EB6F2D;")
                      | Parientes y Amigos (IN-PA).
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #EB6F2D;")
                      | Tarifa Industria Hospitalidad (IN-IH).
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #EB6F2D;")
                      | Empleados (IN-EM).
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #EB6F2D;")
                      | Canjes (IN-CJ).
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #EB6F2D;")
                      p.mb-0 #[em House Use] (IN-HU).
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #EB6F2D;")
                      p.mb-0 #[em Complementary] (IN-CO).
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #EB6F2D;")
                      p.mb-0 #[em Walk In] (IN-WI).
              tr(data-aos="fade-right")
                th(style="background-color: #F9D9A2; font-size: 18px;" rowspan="2") Grupos (#[em Groups])
                td(style="background-color: #FFF;")
                  ul.lista-ul--color
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #EB6F2D;")
                      | Banquetes, Congresos y Convenciones (GN-BC).
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #EB6F2D;")
                      | Incentivos y Excursiones (GN-IE).
                td(style="background-color: #FFF;")
                  ul.lista-ul--color
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #EB6F2D;")
                      | Bodas y Reuniones Familiares (GN-BR).
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #EB6F2D;")
                      | Turismo en Grupo (Tours) (GN-TO).
              tr(data-aos="fade-right")
                td(style="background-color: #FFF4E1;" colspan="2") 
                  ul.lista-ul--color
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #EB6F2D;")
                      | FAM TRIP (GR-FT)

    p(data-aos="fade-right") La segmentación de su negocio no sólo sirve para allanar el camino hacia las siguientes etapas de la gestión de ingresos o Revenue Management, sino que también beneficia otras operaciones relacionadas, como construir una estrategia de #[em marketing] hacia sus clientes mucho más rentable y entender mejor el mercado (competencia) en términos de estrategia. 
    p.mb-5(data-aos="fade-right") Mucha de la información que se aprende de la segmentación será muy diferente de un hotel a otro, o de un mercado a otro. Una segmentación correcta es un paso muy importante para la gestión eficaz de los ingresos de su propiedad.

    separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.3 El #[em pricing]

    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema4/img08.svg' alt="Imagen decorativa")
      .col-lg-8(data-aos="fade-left")
        p La fijación de precios (#[em pricing]) hace referencia a las técnicas empleadas para la asignación de precios al interior de una compañía. Esta fijación, desde el enfoque hotelero, se puede describir como una estructura de precios que cubra cada segmento y cada nivel de demanda de forma eficiente, es decir, asignando el máximo que el consumidor está dispuesto a pagar por el producto o servicio.
        .BG14.p-4
          p.mb-0 Partiendo de este marco conceptual, se puede ver la importancia del precio dentro de las estrategias comerciales; como lo mencionan Kotler y otros, el precio es el único elemento del #[em mix] de #[em marketing] que genera ingresos, todos los demás elementos representan gastos. (Kotler et al., 2011).

    .row.mb-5(data-aos="fade-right")
      .col-auto
        .BGR05.px-3.py-2
          .h4.mb-0 <i class="fas fa-globe fa-spin"></i> ¿Qué es el precio?
    
    p.mb-5(data-aos="fade-right") La definición de precio puede variar según el enfoque profesional; por ejemplo, para un abogado, sería una contraprestación monetaria por la ejecución de un contrato, en tanto que, para un economista, sería el costo de obtener un bien o servicio. Pero desde el punto de vista de Revenue Management, el precio va más allá del ingreso generado, en él se encierran los resultados alrededor del precio, como la satisfacción del cliente, el efecto de recompra, el desplazamiento que se pueda generar en otros clientes, la probabilidad de cancelación, e incluso los ingresos adicionales que esa reserva pueda generar en otros departamentos.

    .row.justify-content-center.mb-5
      .col-lg-10.BG01(data-aos="fade-right")
        .row.justify-content-center.align-items-center
          .col-lg-4.col-6.px-0.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/img35.jpg' alt="Imagen decorativa")
          .col-lg-8
            .p-4
              p.mb-0 El precio es posiblemente el elemento del mercadeo menos comprendido, lo que resulta en que se maneje a la ligera y sin el debido análisis, generando errores, como el excesivo enfoque en costos, relegando los otros componentes de la mezcla de mercado. En la práctica, los precios solo son percibidos de dos maneras por el cliente: me conviene o no me conviene.

    p.mb-5(data-aos="fade-right") Por tal razón, un sistema completo de #[em pricing] debe tener en cuenta todas o el mayor número de variables integradas al proceso de compra y pasar de manejar el concepto de tarifa en lugar del precio. Es este concepto el que va más allá de la mera cantidad monetaria e involucra variables como:

    .row.justify-content-center.mb-5
      .col-lg-5.col-sm-8
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 5.
          span Factores que influyen en la fijación de tarifas
        .tabla-a.color-secundario
          table(style="min-width: auto" data-aos="zoom-in" alt="Tabla que muestra los factores que influyen en la fijación de tarifas.")
            thead(style="border-color: transparent")
              tr(data-aos="fade-right")
                th(style="background-color: #B1DE19; font-size: 18px;") Factores que influyen en la fijación de tarifas
            tbody
              tr(data-aos="fade-right")
                td(style="background-color: #F6F6F6;")
                  ul.lista-ul--color
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #6A850F;")
                      | Calidad
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #6A850F;")
                      | Ubicación
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #6A850F;")
                      | Servicios
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #6A850F;")
                      | Categoría
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #6A850F;")
                      | Reputación
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #6A850F;")
                      | Canales de distribución 
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #6A850F;")
                      | Barreras de tarifas 
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #6A850F;")
                      | Demanda heterogénea 
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #6A850F;")
                      | Estacionalidad
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #6A850F;")
                      | Disposición de pago de cada segmento 
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #6A850F;")
                      | Transparencia de precios en Internet

    p.mb-5(data-aos="fade-right") Estos factores son los que logran ayudar a obtener un #[em mix] de tarifas óptimo y que la percepción del precio siempre sea #[em “Me conviene”]. En la siguiente figura, se aprecia la fijación de precios y las variables que intervienen:

    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 9.
          span Fijación de precios
        .row.justify-content-center.mb-4
          .col-auto.mb-4(data-aos="fade-right")
            .BGS07.py-2.px-5
              .h4.text-white.mb-0 Fijación de precios
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema4/img09.svg' alt="Figura que describe la fijación de los precios, esto es:<br>Antes, precio basado en costo: Costo de producción, de distribución y porcentaje de beneficio.<br>Ahora, precio basado en demanda: costo de distribución, porcentaje de beneficio y beneficio de YIELD.")
    
    .row.mb-5(data-aos="fade-right")
      .col-auto
        .BGR05.px-3.py-2
          .h4.mb-0 <i class="fas fa-globe fa-spin"></i> #[em Mix] de tarifas
    
    p.mb-5(data-aos="fade-right") El #[em mix] de tarifas hace relación directa a las múltiples tarifas que puede tener un hotel y está directamente relacionado con la heterogeneidad del mercado. Como se mencionó anteriormente, dicha heterogeneidad se minimiza con la segmentación y, de acuerdo con esta segmentación, se asignan tarifas.

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 10.
          span #[em Mix] de tarifas
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema4/img10.svg' alt="Figura que muestra unas gráficas de la mezcla de tarifas de precio con la demanda heterogénea.")

    p(data-aos="fade-right") Como se visualiza en la gráfica, es más fácil enfrentar una demanda heterogénea con un #[em mix] de tarifas mayor. Esto permite tener opciones de precio adecuadas a diferentes necesidades y segmentos del mercado. Claramente, no se trata solo de tener muchas tarifas, sino de hacer un análisis juicioso, que determine cuáles son tarifas necesarias, según el caso. 
    .BGS06.p-4.mb-4(data-aos="fade-right")
      p.mb-0 Este panorama puede cambiar mucho de un hotel a otro. Tampoco existe una regla escrita de cuantas tarifas tener, aunque se ha mencionado doce (12) como un número suficiente de tarifas para enfrentar un mercado.
    p.mb-5(data-aos="fade-right") El surgimiento de nuevos canales de distribución y las nuevas condiciones de los mercados exigen hoy una respuesta adecuada. Para este objetivo, el manejo de las tarifas hoy en día se realiza de forma dinámica (#[em Dynamic Pricing]). Los tiempos donde se tenía una tarifa de temporada alta, media y baja han pasado ya, otorgando a este apartado un manejo especial y la aplicación de diferentes tipos de tarifas; conozca algunas de ellas:

    .row.justify-content-center.mb-5
      .col-lg-10
        ImagenInfografica.color-secundario(data-aos="zoom-in")
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema4/img11.svg')

          .tarjeta.BG15.p-3(x="55%" y="20.7%" numero="1")
            p.text-white.mb-0 Es la tarifa oficial que cobra el hotel, a la cual no se aplica ningún descuento. Sirve de referencia para el manejo de tarifas.
          .tarjeta.BG15.p-3(x="37%" y="30%" numero="2")
            p.text-white.mb-0 Esta es la tarifa que se asigna a intermediarios, como agencias de viajes, bancos de camas y plataformas de #[em marketing], sobre la cual ellos pueden generar su utilidad o #[em Mark Up].
          .tarjeta.BG15.p-3(x="37%" y="39%" numero="3")
            p.text-white.mb-0 Es la tarifa que se le informó al cliente al momento de la reserva. Si al llegar el huésped no hay disponible una habitación acorde con la tarifa confirmada, se suele dar otra de mejor categoría por el mismo precio, lo que significa hacer un #[em upgrade].
          .tarjeta.BG15.p-3(x="48%" y="53%" numero="4")
            p.text-white.mb-0 Esta tiene un descuento sobre la tarifa Rack y unas condiciones en su otorgamiento. Por lo general, se da solo en negociaciones con empresas, agencias y asociaciones, entre otras, con base en una producción mínima de noches por mes.
          .tarjeta.BG15.p-3(x="48%" y="60%" numero="5")
            p.text-white.mb-0 Son las tarifas que se otorgan a determinadas entidades o personas que representan algún interés para el hotel. Por ejemplo: otros hoteles, asociaciones, conglomerados con condiciones delimitadas, empleados del hotel, amigos y familiares, etc.
          .tarjeta.BG15.p-3(x="48%" y="67%" numero="6")
            p.text-white.mb-0 Son descuentos que se aplican para fines de promoción del hotel, siguiendo unas políticas y restricciones, Ejemplo: Tarifas no reembolsables, menores de 12 años no pagan, pague 3 noches y hospédese 4.
          .tarjeta.BG15.p-3(x="48%" y="74%" numero="7")
            p.text-white.mb-0 Con el aumento de canales de distribución, hubo un momento en que el hotelero perdió el control sobre su precio, era usual que llegaran clientes al hotel que habían encontrado una tarifa inferior a través de un intermediario. Para dar solución a esta problemática y fortalecer la venta directa y aumentar la transparencia de las tarifas, los hoteleros comenzaron a publicar en sus webs la BAR (#[em Best Available Rate]), por su acrónimo en inglés. La mejor tarifa disponible garantiza que no se va a encontrar una tarifa inferior en ningún canal de distribución.
          .tarjeta.BG15.p-3(x="6%" y="77%" numero="8")
            p.text-white.mb-0 Estas tarifas se crean con base en la disponibilidad y las condiciones de mercado del momento en que se pide la cotización. Y aplican para grupos o eventos especiales, por ejemplo, ferias, conciertos, congresos.
          .tarjeta.BG15.p-3(x="6%" y="84%" numero="9")
            p.text-white.mb-0 Aplica para un número mínimo de noches al mes; incluso, con alguna frecuencia, hay personas que deciden vivir en los hoteles, por las ventajas que ello les proporciona y se catalogan como huéspedes permanentes.
          .tarjeta.BG15.p-3(x="6%" y="91%" numero="10")
            p.text-white.mb-0 Los paquetes son una forma de comercializar productos hoteleros para brindar a los clientes más servicios por precios más atractivos. Se puede empaquetar con productos propios o de terceros. Ejemplo: plan noche de bodas, paquete con alimentación y tours incluidos.
  
    p.mb-5(data-aos="fade-right") En la tabla que se presenta a continuación, puede verse la parrilla de tarifas ofrecidas en un hotel, teniendo en cuenta las dinámicas explicadas anteriormente.

    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      h5 Tabla 6.
      span Parrilla de tarifas 
    .tabla-a.color-acento-contenido.mb-5
      table(data-aos="zoom-in"  alt="Se muestran los diferentes precios o tarifas que se pueden ofrecer enun hotel.")
        tbody(style="border-color: transparent")
          tr(data-aos="fade-right")
            th(style="background-color: #FFB338; width: 25%; font-size: 20px;") Tarifa base
            th(style="background-color: #004E99; width: 75%; font-size: 20px;" colspan="5").text-white Estructura tarifas públicas hotel ejemplo
          tr(data-aos="fade-right")
            th(style="background-color: #FFE4B9; font-size: 20px;" rowspan="2") $299.000
            th(style="background-color: #F6F6F6;" colspan="5") Tarifas en pesos colombianos (COP)
          tr(data-aos="fade-right")
            th(style="background-color: #E8E8E8;")
            th(style="background-color: #E8E8E8;") Estándar
            th(style="background-color: #E8E8E8;") Deluxe
            th(style="background-color: #E8E8E8;") Junior Suite
            th(style="background-color: #E8E8E8;") Suite
          tr(data-aos="fade-right")
            th(style="background-color: #FFB338; font-size: 20px;") Persona adicional
            td(style="background-color: #FFB338;").text-center Variación por tipo habitación
            th(style="background-color: #FFB338; font-size: 20px;") $0
            th(style="background-color: #FFB338; font-size: 20px;") $30.000
            th(style="background-color: #FFB338; font-size: 20px;") $50.000
            th(style="background-color: #FFB338; font-size: 20px;") $100.000
          tr(data-aos="fade-right")
            th(style="background-color: #FFE4B9; font-size: 20px;") $30.000
            th(style="background-color: #FFB338; font-size: 18px;") Nivel
            th(style="background-color: #FFB338; font-size: 18px;") 2 PAX
            th(style="background-color: #FFB338; font-size: 18px;") 2 PAX
            th(style="background-color: #FFB338; font-size: 18px;") 2 PAX
            th(style="background-color: #FFB338; font-size: 18px;") 2 PAX
          tr(data-aos="fade-right")
            td(style="background-color: #FFF4E1;").text-center #[em Rack Rate] 100%
            td(style="background-color: #FFF4E1;").text-center #[em Rack]
            td(style="background-color: #FFF4E1;").text-center $299.000
            td(style="background-color: #FFF4E1;").text-center $329.000
            td(style="background-color: #FFF4E1;").text-center $349.000
            td(style="background-color: #FFF4E1;").text-center $399.000
          tr(data-aos="fade-right")
            td(style="background-color: #FFE4B9;").text-center #[em High Season] (71% - 99%)
            td(style="background-color: #FFE4B9;").text-center A
            td(style="background-color: #FFE4B9;").text-center $279.000
            td(style="background-color: #FFE4B9;").text-center $309.000
            td(style="background-color: #FFE4B9;").text-center $329.000
            td(style="background-color: #FFE4B9;").text-center $379.000
          tr(data-aos="fade-right")
            td(style="background-color: #FFF4E1;").text-center #[em Mid Season] (31% -70%)
            td(style="background-color: #FFF4E1;").text-center B
            td(style="background-color: #FFF4E1;").text-center $259.000
            td(style="background-color: #FFF4E1;").text-center $289.000
            td(style="background-color: #FFF4E1;").text-center $309.000
            td(style="background-color: #FFF4E1;").text-center $359.000
          tr(data-aos="fade-right")
            td(style="background-color: #FFE4B9;").text-center #[em Low Season] (0% -30%)
            td(style="background-color: #FFE4B9;").text-center C
            td(style="background-color: #FFE4B9;").text-center $239.000
            td(style="background-color: #FFE4B9;").text-center $269.000
            td(style="background-color: #FFE4B9;").text-center $289.000
            td(style="background-color: #FFE4B9;").text-center $339.000
          tr(data-aos="fade-right")
            th(style="background-color: #F6F6F6; font-size: 18px;" colspan="6") La sugerencia es tener hasta 12 niveles tarifarios (con base en el movimiento y mercado del hotel)
          tr(data-aos="fade-right")
            td(style="background-color: #FFF4E1;").text-center Corporativo y Planes
            td(style="background-color: #FFF4E1;").text-center A
            td(style="background-color: #FFF4E1;").text-center $169.000
            td(style="background-color: #FFF4E1;").text-center $199.000
            td(style="background-color: #FFF4E1;").text-center $229.000
            td(style="background-color: #FFF4E1;").text-center $259.000
          tr(data-aos="fade-right")
            td(style="background-color: #FFE4B9;").text-center Corporativo y Planes #[em Long Stay]
            td(style="background-color: #FFE4B9;").text-center B
            td(style="background-color: #FFE4B9;").text-center $149.000
            td(style="background-color: #FFE4B9;").text-center $179.000
            td(style="background-color: #FFE4B9;").text-center $209.000
            td(style="background-color: #FFE4B9;").text-center $239.000
          tr(data-aos="fade-right")
            th(style="background-color: #F6F6F6; font-size: 18px;" colspan="6") Promociones y tarifas descontadas
          tr(data-aos="fade-right")
            td(style="background-color: #FFE4B9;").text-center Valor base de BAR para calcular los descuentos
            td(style="background-color: #FFE4B9;").text-center B
            td(style="background-color: #FFE4B9;").text-center $259.000
            td(style="background-color: #FFE4B9;").text-center $289.000
            td(style="background-color: #FFE4B9;").text-center $309.000
            td(style="background-color: #FFE4B9;").text-center $359.000
          tr(data-aos="fade-right")
            th(style="background-color: #F6F6F6; font-size: 18px;" colspan="6") 
          tr(data-aos="fade-right")
            th(style="background-color: #FFE4B9;") No reembolsable
            th(style="background-color: #FFE4B9;") Descuento
            th(style="background-color: #F6F6F6;") Estándar
            th(style="background-color: #F6F6F6;") Deluxe
            th(style="background-color: #F6F6F6;") Junior Suite
            th(style="background-color: #F6F6F6;") Suite
          tr(data-aos="fade-right")
            td(style="background-color: #FFE4B9;").text-center de 0 a 29 días
            td(style="background-color: #FFE4B9;").text-center 35%
            td(style="background-color: #FFE4B9;").text-center $168.350
            td(style="background-color: #FFE4B9;").text-center $187.850
            td(style="background-color: #FFE4B9;").text-center $200.850
            td(style="background-color: #FFE4B9;").text-center $233.350
          tr(data-aos="fade-right")
            th(style="background-color: #FFE4B9;") Promoción compra anticipada +30
            th(style="background-color: #FFE4B9;") Descuento
            th(style="background-color: #F6F6F6;") Estándar
            th(style="background-color: #F6F6F6;") Deluxe
            th(style="background-color: #F6F6F6;") Junior Suite
            th(style="background-color: #F6F6F6;") Suite
          tr(data-aos="fade-right")
            td(style="background-color: #FFE4B9;").text-center más (+) de 30 días anticipación
            td(style="background-color: #FFE4B9;").text-center 25%
            td(style="background-color: #FFE4B9;").text-center $194.250
            td(style="background-color: #FFE4B9;").text-center $216.750
            td(style="background-color: #FFE4B9;").text-center $231.750
            td(style="background-color: #FFE4B9;").text-center $269.250
          tr(data-aos="fade-right")
            th(style="background-color: #FFE4B9;") Promoción Long Stay 4+
            th(style="background-color: #FFE4B9;") Descuento
            th(style="background-color: #F6F6F6;") Estándar
            th(style="background-color: #F6F6F6;") Deluxe
            th(style="background-color: #F6F6F6;") Junior Suite
            th(style="background-color: #F6F6F6;") Suite
          tr(data-aos="fade-right")
            td(style="background-color: #FFE4B9;").text-center Más de 5 días consecutivos
            td(style="background-color: #FFE4B9;").text-center 40%
            td(style="background-color: #FFE4B9;").text-center $155.400
            td(style="background-color: #FFE4B9;").text-center $173.400
            td(style="background-color: #FFE4B9;").text-center $185.400
            td(style="background-color: #FFE4B9;").text-center $215.400
    
    separador
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.4 El pronóstico (#[em forecasting])
        
    p.mb-5(data-aos="fade-right") Un pronóstico, en líneas generales, es una visión futura de la realidad que tiene una alta probabilidad de ocurrir, ya que se basa en criterios analíticos y científicos. Pero, ¿se puede predecir el futuro?

    .BG16.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/tema4/img12.jpg' alt="Imagen decorativa")
        .col-lg-9(data-aos="fade-left")
          .p-4
            p.text-white.mb-0 En el caso de los hoteles, y en general en las industrias donde se utiliza el Revenue Management, el objetivo es determinar qué demanda (ocupación) se tendrá en un periodo específico, pero no se trata de adivinar, sino de desarrollar un modelo estadístico matemático, con base en la relación de datos históricos, presentes y futuros, y con apoyo en tecnología, experiencia, lógica e intuición, de manera que se logre reducir la incertidumbre en la toma de decisiones.

    p(data-aos="fade-right") Un buen pronóstico de la demanda es un aspecto fundamental de la gestión de ingresos, ya que, al usarse el pronóstico como insumo en el proceso de asignación de inventario, se logran aumentos en las tarifas promedio por cliente y una optimización de la demanda de las noches adyacentes a las noches más ocupadas. También es una buena forma de facilitar la negación de reservas de baja calificación, porque se está seguro de que una demanda mejor calificada se materializará más tarde.
    p.mb-5(data-aos="fade-right") Otro beneficio puntual de desarrollar una buena rutina de pronóstico de la demanda en la gestión de ingresos es que las proyecciones de ocupación de habitaciones se pueden utilizar en otros departamentos del hotel, para programar pedidos de suministros y dotación de personal, lo que redundará en un mejor desempeño operacional. Es prudente mencionar que, por avanzadas que sean las técnicas, los pronósticos obtenidos mediante técnicas analíticas tienen porcentajes de desviación o irregularidades que deben ser también tenidas en cuenta. 

    .row.justify-content-center.mb-5
      .col-lg-7(data-aos="flip-up")
        .BGS02.p-4
          i.fas.fa-quote-left.text-start(style="font-size: 2em; color: #EA6E42")
          h4.mx-4 La recomendación para que el pronóstico de demanda sea exitoso es apoyarse, en la medida de lo posible, en sistemas automatizados de pronóstico y/o desarrollar una rutina propia, pero siempre con base en datos históricos probados y con el mayor apego a la realidad que viva el hotel.
          i.fas.fa-quote-right.mb-0(style="font-size: 2em; color: #EA6E42; position: relative; left: calc(100% - 25px);")

    p.mb-5 Al implementar un sistema exitoso de Revenue Management, se pueden contemplar varios componentes o pasos. Estos componentes del ciclo interactúan entre sí y se contemplan separados, para poder analizar puntos de mejora en el proceso, como se muestra a continuación:

    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="zoom-in")
        ImagenInfograficaB.color-acento-botones.medium
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema4/img13.svg')

          .row.justify-content-center(x="51.2%" y="9.8%" tooltip="Recolección de datos" numero="1")
            .col-lg-8.col-10.mb-4
              img(src='@/assets/curso/tema4/img14.png' alt="Imagen decorativa")
            .col-lg-8
              .h5.text-white.mb-3 Recolección de datos
              p.text-white.mb-0 Recolección sistematizada de datos históricos y actuales. Tendencias del mercado, incluyendo canales y datos de la competencia.
          .row.justify-content-center(x="88.1%" y="31%" tooltip="Analítica de datos" numero="2")
            .col-lg-8.col-10.mb-4
              img(src='@/assets/curso/tema4/img15.png' alt="Imagen decorativa")
            .col-lg-8
              .h5.text-white.mb-3 Analítica de datos
              p.text-white.mb-0 Uso de herramientas para analizar los datos recolectados y transferir información efectiva a la toma de decisiones.
          .row.justify-content-center(x="87.6%" y="70.3%" tooltip="Pronóstico (forecasting)" numero="3")
            .col-lg-8.col-10.mb-4
              img(src='@/assets/curso/tema4/img16.png' alt="Imagen decorativa")
            .col-lg-8
              .h5.text-white.mb-3 Pronóstico (#[em forecasting])
              p.text-white.mb-0 Pronósticos con demanda desrestringida, para la adquisición de solicitudes calificadas en alta demanda y controlar los periodos de baja petición.
          .row.justify-content-center(x="50.6%" y="90.5%" tooltip="Estrategia, precio y distribución" numero="4")
            .col-lg-8.col-10.mb-4
              img(src='@/assets/curso/tema4/img17.png' alt="Imagen decorativa")
            .col-lg-8
              .h5.text-white.mb-3 Estrategia, precio y distribución
              p.text-white.mb-0 Aproximación a los precios dinámicos. Análisis de precios de la competencia. Análisis de canales de distribución.
          .row.justify-content-center(x="12.9%" y="70.3%" tooltip="Implementación" numero="5")
            .col-lg-8.col-10.mb-4
              img(src='@/assets/curso/tema4/img18.png' alt="Imagen decorativa")
            .col-lg-8
              .h5.text-white.mb-3 Implementación
              p.text-white Poner en práctica la estrategia requerirá tiempo y, sobre todo, la planificación. Dos cuestiones son fundamentales:
              ul.lista-ul--color
                li(style="margin-bottom: 2px")
                  i.fas.fa-check-circle(style="color: #FFF;")
                  | Las soluciones tecnológicas.
                li(style="margin-bottom: 2px")
                  i.fas.fa-check-circle(style="color: #FFF;")
                  | El entrenamiento del personal.
          .row.justify-content-center(x="12.1%" y="30%" tooltip="Monitorear" numero="6")
            .col-lg-8.col-10.mb-4
              img(src='@/assets/curso/tema4/img19.png' alt="Imagen decorativa")
            .col-lg-8
              .h5.text-white.mb-3 Monitorear
              p.text-white.mb-0 Monitorear el desempeño de los resultados a través de informes periódicos que permitan establecer comparativas es otro de los puntos clave del #[em revenue].

    .row.mb-5(data-aos="fade-right")
      .col-auto
        .BGR05.px-3.py-2
          .h4.mb-0 <i class="fas fa-globe fa-spin"></i> ¿Cómo se hace el pronóstico?
    
    p(data-aos="fade-right") La primera claridad en esta parte del proceso es que el pronóstico no debe confundirse con el presupuesto. El presupuesto de ventas es una meta del departamento comercial, que está alineada con los objetivos del hotel, mientras el pronóstico es una previsión de la demanda en un periodo específico, con el objetivo de tener un control de la demanda, para:
    
    ul.lista-ul--color.lista-ul--separador.ms-5.mb-5
      li(style="margin-bottom: 2px" data-aos="fade-right")
        i.fas.fa-star(style="color: #2B95F9;")
        | Trazar estrategias acordes con las previsiones: precio e inventario.
      li(style="margin-bottom: 2px" data-aos="fade-right")
        i.fas.fa-star(style="color: #2B95F9;")
        | Estimular las ventas según sea necesario: promociones, restricciones y políticas.
      li(style="margin-bottom: 2px" data-aos="fade-right")
        i.fas.fa-star(style="color: #2B95F9;")
        | Planear la operación eficazmente: personal y recursos.

    p.mb-5(data-aos="fade-right") La elaboración de pronósticos se basa en cuatro (4) pilares fundamentales:

    .row.justify-content-center.mb-5
      .col-lg-6
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 11.
          span Pilares componentes del pronóstico
        .row.justify-content-center.mb-4
          .col-auto.mb-4(data-aos="fade-right")
            .BGS07.py-2.px-5
              .h4.text-white.mb-0 Componentes del pronóstico
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema4/img20.svg' alt="Figura que menciona los pilares componentes del pronóstico, estos pilares son:<br>Datos actuales, visión, datos futuros y datos históricos.")

    p.mb-5(data-aos="fade-right") Y se explican mediante la siguiente tabla:

    .tabla-a.color-acento-contenido.mb-5
      table(data-aos="zoom-in"  alt="Texto alternativo tabla")
        thead(style="border-color: transparent")
          tr(data-aos="fade-right")
            th(style="background-color: #FFECBE; width: 25%; font-size: 20px;") Los datos históricos
            th(style="background-color: #FFECBE; width: 75%; font-size: 20px;") Cada día que transcurre en una operación hotelera genera datos. Por eso, es deseable establecer desde el inicio buenos sistemas de gestión (PMS, Motor, Channel), que permitan la recolección de datos diaria. Los datos históricos que son de interés son:
        tbody
          tr(data-aos="fade-right")
            td(style="background-color: #FFF;" colspan="2")
              ul.lista-ul--color
                li(style="margin-bottom: 2px")
                  i.fas.fa-check-circle(style="color: #EB6F2D;")
                  p.mb-0 #[strong ADR:] #[em Average Daily Rate] (tarifa promedio).
                li(style="margin-bottom: 2px")
                  i.fas.fa-check-circle(style="color: #EB6F2D;")
                  p.mb-0 #[strong Cancelaciones:] promedio o cantidad de reservas canceladas por día.
                li(style="margin-bottom: 2px")
                  i.fas.fa-check-circle(style="color: #EB6F2D;")
                  p.mb-0 #[strong Cantidad de #[em Check-ins]:] entradas del día.
                li(style="margin-bottom: 2px")
                  i.fas.fa-check-circle(style="color: #EB6F2D;")
                  p.mb-0 #[strong Cantidad de #[em Check-outs]:] salidas del día.
                li(style="margin-bottom: 2px")
                  i.fas.fa-check-circle(style="color: #EB6F2D;")
                  p.mb-0 #[strong Huéspedes por habitación:] promedio de personas que ocupan las habitaciones.
                li(style="margin-bottom: 2px")
                  i.fas.fa-check-circle(style="color: #EB6F2D;")
                  p.mb-0 #[strong Longitud de estadía:] es el promedio de duración de las reservas.
                li(style="margin-bottom: 2px")
                  i.fas.fa-check-circle(style="color: #EB6F2D;")
                  p.mb-0 #[strong #[em No Shows]:] las reservas que no se presentan.
                li(style="margin-bottom: 2px")
                  i.fas.fa-check-circle(style="color: #EB6F2D;")
                  p.mb-0 #[strong #[em Overbookings]:] cantidad de habitaciones en sobreventa en un día.
                li(style="margin-bottom: 2px")
                  i.fas.fa-check-circle(style="color: #EB6F2D;")
                  p.mb-0 #[strong #[em PickUp]:] hace referencia al volumen de reservas materializadas desde el último informe. El Informe #[em pickup] diario indica cuántas reservas se han realizado desde ayer. También proporciona el ritmo de reservas comparando cifras con el año anterior.
                li(style="margin-bottom: 2px")
                  i.fas.fa-check-circle(style="color: #EB6F2D;")
                  p.mb-0 #[strong Porcentaje de ocupación:] es el porcentaje calculado entre la ocupación del día y la capacidad instalada del hotel.
                li(style="margin-bottom: 2px")
                  i.fas.fa-check-circle(style="color: #EB6F2D;")
                  p.mb-0 #[strong Rechazos:] reservas que se deben rechazar en un día.
                li(style="margin-bottom: 2px")
                  i.fas.fa-check-circle(style="color: #EB6F2D;")
                  p.mb-0 #[strong RevPAR:] #[em Revenue per available room] (ingresos por habitación disponible).
                li(style="margin-bottom: 2px")
                  i.fas.fa-check-circle(style="color: #EB6F2D;")
                  p.mb-0 #[strong Ventas por canal:] cantidad de reservas que se generan por cada canal de reserva.
                li(style="margin-bottom: 2px")
                  i.fas.fa-check-circle(style="color: #EB6F2D;")
                  p.mb-0 #[strong Ventas por segmento:] cantidad de reservas por cada segmento o subsegmento del mercado.
                li(style="margin-bottom: 2px")
                  i.fas.fa-check-circle(style="color: #EB6F2D;")
                  p.mb-0 #[strong #[em Walk-ins]:] estancias que se generan en el mostrador del hotel, sin previa reservación.
          tr(data-aos="fade-right")
            th(style="background-color: #B6E1FD; font-size: 20px;") Los datos actuales
            th(style="background-color: #B6E1FD; font-size: 20px;") Son los que reflejan la situación del hotel al momento en que se realiza el pronóstico.
          tr(data-aos="fade-right")
            td(style="background-color: #FFF;" colspan="2")
              ul.lista-ul--color
                li(style="margin-bottom: 2px")
                  i.fas.fa-check-circle(style="color: #EB6F2D;")
                  p.mb-0 #[strong ADR] #[em Average Daily Rate] (tarifa promedio).
                li(style="margin-bottom: 2px")
                  i.fas.fa-check-circle(style="color: #EB6F2D;")
                  p.mb-0 #[strong Disponibilidad de habitaciones.]
                li(style="margin-bottom: 2px")
                  i.fas.fa-check-circle(style="color: #EB6F2D;")
                  p.mb-0 #[strong Habitaciones ocupadas.]
                li(style="margin-bottom: 2px")
                  i.fas.fa-check-circle(style="color: #EB6F2D;")
                  p.mb-0 #[strong Habitaciones bloqueadas.]
                li(style="margin-bottom: 2px")
                  i.fas.fa-check-circle(style="color: #EB6F2D;")
                  p.mb-0 #[strong #[em PickUp].]
                li(style="margin-bottom: 2px")
                  i.fas.fa-check-circle(style="color: #EB6F2D;")
                  p.mb-0 #[strong Reservas de grupos:] el hotel tiene reservas de grupos ya confirmadas que afectan la disponibilidad.
                li(style="margin-bottom: 2px")
                  i.fas.fa-check-circle(style="color: #EB6F2D;")
                  p.mb-0 #[strong RevPar:] #[em Revenue per available room] (ingresos por habitación disponible).
                li(style="margin-bottom: 2px")
                  i.fas.fa-check-circle(style="color: #EB6F2D;")
                  p.mb-0 #[strong Segmentación de clientes.]
          tr(data-aos="fade-right")
            th(style="background-color: #E6F4B7; font-size: 20px;") Los datos futuros
            th(style="background-color: #E6F4B7; font-size: 20px;") Más que datos futuros, lo que se analiza en este ítem son los factores que puedan afectar esa demanda futura.
          tr(data-aos="fade-right")
            td(style="background-color: #FFF;" colspan="2")
              ul.lista-ul--color
                li(style="margin-bottom: 2px")
                  i.fas.fa-check-circle(style="color: #EB6F2D;")
                  p.mb-0 #[strong Apertura o cierre de hoteles competidores:] aumento o baja de la cantidad de habitaciones disponibles en un destino.
                li(style="margin-bottom: 2px")
                  i.fas.fa-check-circle(style="color: #EB6F2D;")
                  p.mb-0 #[strong Decisiones de precio de la competencia:] estar alerta de las estrategias de mercadeo de la competencia.
                li(style="margin-bottom: 2px")
                  i.fas.fa-check-circle(style="color: #EB6F2D;")
                  p.mb-0 #[strong Entorno económico (nivel local y nacional):] los cambios de la economía afectan las industrias.
                li(style="margin-bottom: 2px")
                  i.fas.fa-check-circle(style="color: #EB6F2D;")
                  p.mb-0 #[strong Estacionalidad:] es una característica de un periodo de tiempo que presenta unas regulares y predecibles que se repiten cada periodo. Por ejemplo, los fines de semana o la navidad son periodos que se pueden analizar y comparar y que tienen unas características más o menos homogéneas. 
                li(style="margin-bottom: 2px")
                  i.fas.fa-check-circle(style="color: #EB6F2D;")
                  p.mb-0 #[strong Eventos de ciudad (que afectan la demanda):] las municipalidades suelen efectuar eventos que por su interés general o particular afectan la demanda normal.
                li(style="margin-bottom: 2px")
                  i.fas.fa-check-circle(style="color: #EB6F2D;")
                  p.mb-0 #[strong Mejoras en accesibilidad e infraestructura (ciudad):] una nueva carretera o una nueva frecuencia aérea, sin duda, puede traer más volumen de reservas.
                li(style="margin-bottom: 2px")
                  i.fas.fa-check-circle(style="color: #EB6F2D;")
                  p.mb-0 #[strong Nuevos servicios del hotel:] aunque el inventario de un hotel es limitado, en algunas ocasiones, hay ampliaciones o lanzamiento de nuevos servicios vía remodelación. Esto siempre hay que tenerlo en cuenta.
                li(style="margin-bottom: 2px")
                  i.fas.fa-check-circle(style="color: #EB6F2D;")
                  p.mb-0 #[strong Nuevos atractivos turísticos:] al igual que los eventos, un nuevo atractivo en la ciudad, sin duda, afectará el volumen de reservas.

    p.mb-5(data-aos="fade-right") Como ya se mencionó, el pronóstico es un método matemático estadístico, por lo que existen varios métodos. Es parte de la habilidad del #[em revenue] escoger aquel que mejor resultado le brinde en términos de gestión. Además, cuenta con unos componentes y obedece a unas fases que ayudan a estructurar el cálculo. Estas fases son:

    .row.justify-content-center.mb-5
      .col-lg-10
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema4/img21.svg' alt="Imagen decorativa")

    .row.mb-5(data-aos="fade-right")
      .col-auto
        .BGR05.px-3.py-2
          .h4.mb-0 <i class="fas fa-globe fa-spin"></i> Curvas de reserva
    
    p.mb-5(data-aos="fade-right") Desde aproximadamente hace 25 años, los investigadores en Revenue Management de hoteles empezaron a tratar los datos de reserva como curvas de reserva o curvas de umbral (ver figura). Estas curvas son la representación gráfica de las reservas disponibles que un hotel espera en relación con el número de días de antelación a la llegada.

    .row.justify-content-center.mb-5
      .col-lg-6
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 12.
          span Curva de reservas
        figure(data-aos="zoom-in")
          img.mb-4(src='@/assets/curso/tema4/img22.svg' alt="Figura que muestra de manera gráfica el comportamiento en curva que se genera con las reservas determinando el precio y la ocupación.")
          figcaption Nota. <span style="font-weight: 400">Tomada de </span><u><a style="color: #111e61" href="https://www.smarttravel.news/wp-content/uploads/2019/10/Grafico-1-Curva-Demanda-B.png" target="_blank">smarttravel.news</a></u>

    p(data-aos="fade-right") En la industria hotelera, el método de reservas anticipadas, o pick up de reservas, es uno de los pronósticos más precisos del rendimiento futuro y es importante porque, al conocer el porcentaje de reservas en una ventana de tiempo antes de la llegada, se podrán determinar las acciones pertinentes en manejo de precios, inventarios y restricciones. (AHLA - American Hotel & Lodging Association, 2006).
    p.mb-5(data-aos="fade-right") En esencia, este modelo permite analizar el comportamiento de las reservas propias, y, si las reservas disponibles se ubican fuera del rango establecido, entonces el hotel debe ajustar las tarifas de las habitaciones al alza o a la baja para maximizar los ingresos.

    .row.mb-5(data-aos="fade-right")
      .col-auto
        .BGR09.px-3.py-2
          .h4.mb-0 <i class="fas fa-globe fa-spin"></i> Modelo de reservas anticipadas

    p(data-aos="fade-right") El modelo de reservas anticipadas se basa en los datos de reserva de un hotel, que corresponde al número de habitaciones reservadas por los huéspedes durante un periodo de tiempo, por ejemplo, 60 días antes de un día determinado, al que se le llama día cero (día 0). En un comportamiento estándar, las reservas aumentan a medida que el hotel se acerca al día 0.  
    .BGS09.p-4.mb-4(data-aos="fade-right")
      p.mb-0 Una característica de utilizar la tendencia de reserva como indicador de la ocupación final de la habitación es que el pronóstico resultante es específico de un hotel en particular y no de la demanda total de todos los hoteles en un destino.
    p.mb-5(data-aos="fade-right") Este análisis valida los datos de las reservas del hotel, identifica las tendencias y patrones identificados en los datos de reservas y utiliza su curva de reservas anticipadas para pronosticar las reservas de hotel. 

    .row.mb-5(data-aos="fade-right")
      .col-auto
        .BGR05.px-3.py-2
          .h4.mb-0 <i class="fas fa-globe fa-spin"></i> Calendarios de demanda
    
    p(data-aos="fade-right") Esta herramienta es el primer paso antes del proceso de pronóstico (#[em forecasting]) y es de uso frecuente para el #[em Revenue Manager].  Es un documento que recopila la demanda pasada y futura de hotel.
    .BGS06.p-4.mb-4(data-aos="fade-right")
      p.mb-0 En este formato, se lleva una relación detallada de la demanda del hotel, se detallan todos los eventos que pueden influir en la demanda de manera positiva o negativa. Y aunque suena bastante obvio, este calendario debe estar siempre actualizado. Esto le ayudará a valorar los ingresos que generan cada evento.
    p.mb-5(data-aos="fade-right") En una operación hotelera, la demanda analizada por segmentos tendrá comportamientos distintos y es deber del #[em Revenue Manager] estar al tanto de estos cambios. A manera de ejemplo, suponga que para un periodo particular se recibieron más reservas del segmento corporativo y muchas menos del segmento #[em tour & travel] en algunos días en particular. Además de tomar atenta nota, el #[em Revenue Manager] debe:
    
    ul.lista-ul--color.lista-ul--separador.ms-5.mb-5
      li(style="margin-bottom: 2px" data-aos="fade-right")
        i.fas.fa-star(style="color: #2B95F9;")
        | Identificar con anticipación estas fechas.
      li(style="margin-bottom: 2px" data-aos="fade-right")
        i.fas.fa-star(style="color: #2B95F9;")
        | Aislar las razones del aumento o decrecimiento según el segmento.
      li(style="margin-bottom: 2px" data-aos="fade-right")
        i.fas.fa-star(style="color: #2B95F9;")
        | Preguntarse si este comportamiento se repetirá o no.
      li(style="margin-bottom: 2px" data-aos="fade-right")
        i.fas.fa-star(style="color: #2B95F9;")
        | Recordar esto le será útil a futuro.
    
    p.mb-5(data-aos="fade-right") Un ejemplo de calendario de demanda se ofrece a continuación:

    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      h5 Figura 13.
      span Calendario de demanda
    figure.mb-5(data-aos="zoom-in")
      img(src='@/assets/curso/tema4/img23.svg' alt="Figura de un formato de registro de calendario de demanda de hotel.")

    ul.lista-ul--color.lista-ul--separador.ms-5.mb-5
      li(style="margin-bottom: 2px" data-aos="fade-right")
        i.fas.fa-star(style="color: #2B95F9;")
        | RevPAR año pasado.
      li(style="margin-bottom: 2px" data-aos="fade-right")
        i.fas.fa-star(style="color: #2B95F9;")
        | Grupos o eventos. 
      li(style="margin-bottom: 2px" data-aos="fade-right")
        i.fas.fa-star(style="color: #2B95F9;")
        | Indicador del nivel de demanda del año pasado (alto, medio, bajo).
      li(style="margin-bottom: 2px" data-aos="fade-right")
        i.fas.fa-star(style="color: #2B95F9;")
        | Indicador del nivel de demanda de este año (alto, medio, bajo).
      li(style="margin-bottom: 2px" data-aos="fade-right")
        i.fas.fa-star(style="color: #2B95F9;")
        | Festivos, vacaciones escolares.
    
    p.mb-5(data-aos="fade-right") El #[em Revenue] y el #[em Marketing] son dos prácticas que deben trabajar juntas. Es decir, las estrategias de #[em Revenue] necesitan una comercialización y promoción adecuada y, a su vez, las buenas prácticas de la gestión de ingresos complementan la parte final del embudo de ventas al maximizar los segmentos más rentables. Hoy en día, los profesionales hoteleros de estas áreas son cada vez más integrales y son determinantes en la buena gestión del hotel.

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    datosSlyder: [
      {
        texto:
          'Esta disciplina tuvo sus inicios en la década del 70, de la mano del analista Kenneth Linwood, quien, como parte de su trabajo para la aerolínea British Airways, presentó el informe “Forecasting and Control of Passenger bookings”, en español, pronóstico y control de reservas de pasajeros.',
        imagen: require('@/assets/curso/tema4/img24.svg'),
      },
      {
        texto:
          'Este informe exponía que, cuando existan dos precios para un mismo producto, deberá venderse al precio bajo hasta que exista la probabilidad de venderlo al precio alto, superando la relación entre estos precios (alto y bajo). A esto se le conoce como la regla Linwood, la cual se convertiría  posteriormente en la base de los algoritmos de optimización.',
        imagen: require('@/assets/curso/tema4/img25.svg'),
      },
      {
        texto:
          'Posteriormente, un hecho político sucedido en Estados Unidos en 1978, el “Airline Deregulation Act”, consistente con la ley federal que desreguló la industria de las aerolíneas, dio como consecuencia la liberación de tarifas aéreas y la entrada de nuevos competidores.',
        imagen: require('@/assets/curso/tema4/img26.jpg'),
      },
      {
        texto:
          'En 1985, la aerolínea American Airlines lanza la tarifa “Ultimate Super Savers”, que ofrecía descuentos hasta del 74 % en condiciones de compra más restrictivas. Es así como esta empresa desarrolló el sistema DINAMO (Dynamic Inventory and Maintenance Optimizer), un sistema basado en la regla Linwood, que calculaba la probabilidad de vender el último asiento a la tarifa <em>full</em>, y con esa base calculaba cuántos asientos ofrecer a la tarifa USS.',
        imagen: require('@/assets/curso/tema4/img27.jpg'),
      },
      {
        texto:
          'El inusitado éxito de esta fórmula de “<em>yield management</em>” se permeó a otras industrias y es así como Robert Crandall, CEO de American Airlines, comparte su éxito con su colega Bill Marriott, de Marriott Internacional, quien lo aplica magistralmente en la hotelería y desarrolla un sistema llamado DFS (Demand Forecast System), que proveía pronósticos de demanda para las cerca de 160.000 habitaciones del Marriott International.',
        imagen: require('@/assets/curso/tema4/img28.svg'),
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
