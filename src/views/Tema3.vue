<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Psicología del consumidor
    
    .bloque-texto-g.color-terciario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img01.jpg')})`}" data-aos="fade-right" alt="Imagen decorativa"
      )
      .bloque-texto-g__texto.py-md-5.py-4.px-4(data-aos="fade-left")
        p.mb-0 Como es sabido, la influencia del internet hace que los consumidores digitales adquieran nuevas características necesarias de comprender. Y para poder hacerlo, el mercadeo interactúa con ciencias como la psicología y la antropología. Por tanto, al referirnos a la psicología del consumidor, se hace referencia al estudio de los patrones de consumo, así como de los múltiples aspectos que influyen en una decisión de compra.

    p(data-aos="fade-right") De hecho, a una gran velocidad, el mercadeo tiende cada vez más a humanizarse, es decir, ha pasado de solo satisfacer necesidades a cubrir también sus ansias, sus deseos y a forjar relaciones genuinas. Es por eso por lo que el nuevo consumidor premia con su preferencia a las marcas que son más incluyentes, que transmiten más confianza, que son más conscientes. Claramente, ahora las comunidades son digitales.
    p.mb-5(data-aos="fade-right") El conocimiento profundo del consumidor y la integración de ese conocimiento con datos es la combinación que brinda a las empresas bases sólidas para establecer efectivas estrategias de mercadeo.

    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Características del consumidor digital
    
    p.mb-5(data-aos="fade-right") Algunas de las características que se muestran como las más relevantes en el camino de entender los principios de la psicología del consumidor son:

    .row.justify-content-center.mb-5
      .col-xl-3.col-lg-4.col-md-6.col-sm-7.col-8.mb-xl-0.mb-4(data-aos="fade-right")
        .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema3/img02.svg')})`}")
            .tarjeta-flip__contenido.p-xxl-5.p-4
              p Gracias a la híper conectividad, los consumidores modernos investigan, aprenden y comparten esa información.
              p.mb-0 Esto da como resultado consumidores altamente educados, capaces de encontrar las propuestas de valor que mejor se ajustan a su necesidad.
      .col-xl-3.col-lg-4.col-md-6.col-sm-7.col-8.mb-xl-0.mb-4(data-aos="flip-right")
        .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema3/img03.svg')})`}")
            .tarjeta-flip__contenido.p-xxl-5.p-4
              p.mb-0 En este sentido y al trasladarse el escenario de compra al medio digital, el nuevo consumidor, además de ser impaciente, espera, como mínimo, ser escuchado y recibir una respuesta personalizada hasta donde sea posible. Además de eso, valora la honestidad de la información que recibe.
      .col-xl-3.col-lg-4.col-md-6.col-sm-7.col-8.mb-xl-0.mb-4(data-aos="flip-left")
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema3/img04.svg')})`}")
            .tarjeta-flip__contenido.p-xxl-5.p-4
              p La misma facilidad que brinda el Internet en comunicación, se traslada a la relación comercial digital. 
              p.mb-0 Es muy común que, antes de comprar, un cliente busque productos o servicios, compare todos los detalles que considere relevantes y se nutra de información.
      .col-xl-3.col-lg-4.col-md-6.col-sm-7.col-8.mb-xl-0.mb-4(data-aos="fade-left")
        .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema3/img05.svg')})`}")
            .tarjeta-flip__contenido.p-xxl-5.p-4
              p.text-white.mb-0 Esta declaración de poder es posible hacerla con base en las tendencias actuales, es decir, si se piensa un instante, el cliente tiene el poder de investigar, de compartir, de interactuar y tiene a su disposición audiencias para premiar o castigar un producto o servicio.

    p(data-aos="fade-right") Con esto en mente, es válido afirmar que, entre más se conoce al cliente, más fácil es entablar una relación con él y brindarle lo que espera.
              
    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Embudo de compra (#[em purchase funnel]) en turismo

    p(data-aos="fade-right") Se ha mencionado también con anterioridad el concepto de embudo de compra, por lo que es de interés en este apartado enfocar ese conocimiento al sector turismo, y así aplicar el concepto y fijarlo.
    p(data-aos="fade-right") Ya se sabe que la tecnología ha cambiado para siempre al consumidor y que este evoluciona a cada segundo. El consumidor investiga, aprende, comparte, y lo que desea es ser escuchado. Por tanto, lo que resta es garantizar que el prospecto pueda encontrar lo que necesita en cada etapa de su camino y acompañarlo para que, al final, la decisión de compra sea favorable.
    p.mb-5(data-aos="fade-right") Con el fin de generar un aprendizaje práctico, se realizará el siguiente ejercicio: cree un embudo de compra aplicado al turismo, para lo que se tomará como ejemplo un viaje, siguiendo los pasos que se indican a continuación:

    .row.justify-content-center.mb-5
      .col-auto.mb-4(data-aos="fade-right")
        .BGS07.py-2.px-5
          .h4.text-white.mb-0 Ejercicio práctico - Embudo de compra en el sector turismo

    PasosA.color-primario.mb-5(tipo="n")
      .row.justify-content-center
        .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
          .h4 ¿Quién es y qué busca el turista? 
          p Algunos datos de interés que ayudan a resolver esta pregunta corresponden con las estadísticas ofrecidas por Google, que indica que el 75 % de las personas que viajan reservan en línea.
          p El informe “#[em Mobile Travel Report]” ofrece información relevante al respecto, como: 
          ul.lista-ul--color
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #EB6F2D;")
              | Los colombianos reservan en su mayoría hoteles de 3 y 4 estrellas.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #EB6F2D;")
              | Los destinos favoritos en el exterior son Madrid y Miami.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #EB6F2D;")
              | Los destinos favoritos en Colombia son Bogotá, Medellín, Cartagena.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #EB6F2D;")
              | La plataforma preferida es la web.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #EB6F2D;")
              | La categoría de vuelos económica es la más reservada.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #EB6F2D;")
              | Y gastamos entre 3 y 4 minutos para encontrar la opción queremos.
        .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/tema3/img06.png' alt="Imagen decorativa")
      .row.justify-content-center
        .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/tema3/img07.png' alt="Imagen decorativa")
        .col-lg-8(data-aos="fade-left")
          .h4.text-start Optimizar el embudo
          p.text-start Hay que tener en mente que, a través del embudo de compra, no buscamos forzar al cliente, sino entender el comportamiento y la necesidad del viajero y adaptarnos a ella. Recordemos que antes de cualquier decisión de compra, el prospecto pasa por unas etapas:
          ul.lista-ul--color
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #EB6F2D;")
              | Descubrimiento.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #EB6F2D;")
              | Consideración.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #EB6F2D;")
              | Decisión.

    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-right")
        .tarjeta.BG04.p-4
          .row.justify-content-center.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/img01.svg" alt="Imagen decorativa")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.text-white.mb-1 Kayak - #[em Mobile travel report]
                  p.text-white.mb-0 Este documento informa sobre las tendencias de viaje en las distintas plataformas digitales.
                .col-sm-auto
                  a.boton.color-acento-contenido(:href="obtenerLink('/downloads/Kayak-Mobile_travel_report.pdf')" target="_blank" type="application/pdf")
                    span(style="color: #12263F !important") Descargar
                    i.fas.fa-link(style="color: #12263F !important")

    p.mb-5(data-aos="fade-right") En relación a la optimización del embudo y las 3 etapas por las cuales debe pasar el prospecto, su explicación consiste en:

    .row.justify-content-center.mb-5
      .col-auto.mb-4(data-aos="fade-right")
        .BGS07.py-2.px-5
          .h4.text-white.text-center.mb-0 Optimización del embudo a través de 3 etapas

    .tarjeta.BG12.p-4.mb-5(data-aos="zoom-in")
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center.px-2
          .col-lg-7.order-lg-1.order-2
            .h4 Descubrimiento
            p El prospecto está en busca de información que resuelva su necesidad. A través de una estrategia de #[em marketing online], nos comunicamos con el perfil, definido en el buyer persona, y tratamos de indagar cuáles son sus necesidades, qué le preocupa, qué es lo que más valora.
            p #[strong Ejemplo:] Marcela es una madre de familia indagando por las vacaciones familiares. Ella se preocupa por el bienestar de sus hijos, por tanto, se fija en la seguridad, la alimentación, las atracciones del lugar, entre otras cosas. 
            p.mb-0 Para conseguir que se fije en nuestros productos, debemos transmitir, tanto en la comunicación de la web como en la estrategia de contenidos, temas relacionados con estos requerimientos.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema3/img08.png' alt="Imagen decorativa")
        .row.justify-content-center.align-items-center.px-2
          .col-lg-7.order-lg-1.order-2
            .h4 Consideración
            p Una vez hemos logrado atraer al usuario con nuestra primera estrategia de #[em marketing online], es el momento de que Marcela se fije en nuestras instalaciones, servicios, comentarios. Allí descubrirá si nuestra oferta de valor es lo que realmente necesita.
            p En el momento, el lead, que ya conoce su problema, empieza a buscar posibles soluciones; es aquí donde hacemos que nos valore entre las opciones. 
            p.mb-0 Un video o recomendación de un experto o de otros clientes suele ser efectivo en esta fase.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema3/img09.png' alt="Imagen decorativa")
        .row.justify-content-center.align-items-center.px-2
          .col-lg-7.order-lg-1.order-2
            .h4 Decisión
            p El prospecto analiza las posibles opciones y decide seleccionar el alojamiento que mejor solucione su problema. 
            p Es el momento de reservar, último paso, pero no por ello menos importante. El hecho de que nos haya elegido no significa que vaya a terminar su reserva. En este paso, es importante que la plataforma que utilicemos (motor de reserva) sea 100 % usable e intuitiva, así como implementar estrategias upselling y cross selling.
            p.mb-0 ¿Alguna vez te ha pasado que has querido reservar en la página de un hotel y algo ha fallado o no sabías cómo continuar? Esta fase se trata de asegurarte de que el proceso de venta se completa y que Marcela hace la reserva en tu sitio web y no abandona la operación sin finalizar o recurrir a alguna OTA.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema3/img10.png' alt="Imagen decorativa")
    
    p(data-aos="fade-right") En este simple ejemplo, es posible ver cómo, implementando estrategias de mercadeo de atracción, se puede lograr aumentar las posibilidades de atraer a usuarios cualificados a la web, de una forma natural y no invasiva. Es por eso por lo que la implementación de embudos para que los usuarios lleguen a la conversión final es tan importante y depende, en gran medida, de la estrategia correcta y de que toda la tecnología esté alineada y lista para ese propósito.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    indicadorTarjetaFlip: true,
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
