<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.mb-5
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/intro/img01.svg' alt="Imagen decorativa")
      .col-lg-7(data-aos="fade-left")
        p Le damos la bienvenida al componente formativo “#[strong Venta de productos y servicios digitales]”, último contenido del programa de Comercialización digital de servicios turísticos. Recuerde que un producto digital es un activo intangible o un elemento multimedia que puede venderse y distribuirse online una y otra vez, sin necesidad de renovar el inventario.
        .BG01.p-4
          p.mb-0 Internet es un conjunto de redes de comunicación interconectadas a nivel mundial, en constante evolución y de uso relativamente sencillo para acceder a contenidos, servicios y productos. En ese sentido, la red mundial de ordenadores, o World Wide Web, se ha convertido en un canal de ventas que aumenta su relevancia día a día.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.order-lg-1.order-2
        p Cuando se hace referencia a la venta online, se está contextualizando el comercio electrónico. Este módulo pretende, por tanto, facilitar a los aprendices los conocimientos teóricos y estratégicos del entorno digital, entendiendo las principales posibilidades de implementación, las implicaciones de las funciones logísticas y su incidencia en la satisfacción del cliente.
        p.mb-5 La venta online tiene muchos beneficios:
        ul.lista-ul--color
          li(style="margin-bottom: 2px" data-aos="fade-right")
            i.fas.fa-star(style="color: #2B95F9;")
            | Bajos costos.
          li(style="margin-bottom: 2px" data-aos="fade-right")
            i.fas.fa-star(style="color: #2B95F9;")
            | Márgenes de ganancia relativamente altos
          li(style="margin-bottom: 2px" data-aos="fade-right")
            i.fas.fa-star(style="color: #2B95F9;")
            | Potencial de automatización.
          li(style="margin-bottom: 2px" data-aos="fade-right")
            i.fas.fa-star(style="color: #2B95F9;")
            | Flexibilidad en la oferta de productos.
        p.mb-0 Los productos digitales presentan muchas ventajas que los hacen singularmente atractivos para su venta:
      .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/intro/img02.svg' alt="Imagen decorativa")

    ul.lista-ul--color.mb-5
      li(style="margin-bottom: 2px" data-aos="fade-right")
        i.fas.fa-star(style="color: #2B95F9;")
        | No es necesario manejar inventarios ni incurrir en gastos de envío.
      li(style="margin-bottom: 2px" data-aos="fade-right")
        i.fas.fa-star(style="color: #2B95F9;")
        | No hay costos recurrentes, traduciéndose la mayor parte de las ventas en ganancias.
      li(style="margin-bottom: 2px" data-aos="fade-right")
        i.fas.fa-star(style="color: #2B95F9;")
        | Los pedidos se envían al instante, minimizando el manejo logístico de almacenamiento y despacho.
      li(style="margin-bottom: 2px" data-aos="fade-right")
        i.fas.fa-star(style="color: #2B95F9;")
        | Se pueden ofrecer productos gratis, fidelizando clientes, o acceso a contenidos digitales exclusivos.

    .row.justify-content-center.mb-5
      .col-lg-4.col-sm-8.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta.color-primario.p-5
          figure.mb-4
            img(src='@/assets/curso/intro/img03.png' alt="Imagen decorativa")
          .h3.text-center.mb-2 Transformación del
          .h3.text-center.mb-0 modelo de negocio
      .col-lg-4.col-sm-8.mb-lg-0.mb-4(data-aos="flip-up")
        .tarjeta.color-acento-contenido.p-5
          figure.mb-4
            img(src='@/assets/curso/intro/img04.png' alt="Imagen decorativa")
          .h3.text-center.mb-2 Mayor cobertura de 
          .h3.text-center.mb-0 clientes interesados
      .col-lg-4.col-sm-8(data-aos="fade-left")
        .tarjeta.color-acento-botones.p-5
          figure.mb-4
            img(src='@/assets/curso/intro/img05.png' alt="Imagen decorativa")
          .h3.text-center.mb-2 Posicionamiento del 
          .h3.text-center.mb-0 producto y del mercado
        
    p.mb-5 Aunque también puede presentar inconvenientes, como:
    ul.lista-ul--color.mb-5
      li(style="margin-bottom: 2px" data-aos="fade-right")
        i.fas.fa-star(style="color: #2B95F9;")
        | Es probable que los consumidores encuentren alternativas gratis para los productos digitales que está vendiendo en su página; es necesario tener claro el nicho de mercado.
      li(style="margin-bottom: 2px" data-aos="fade-right")
        i.fas.fa-star(style="color: #2B95F9;")
        | Se deben adoptar precauciones y reducir riesgos de robo, mediante el uso de herramientas adecuadas para la protección de productos.
      li(style="margin-bottom: 2px" data-aos="fade-right")
        i.fas.fa-star(style="color: #2B95F9;")
        | Debe tenerse clara la política comercial para venta de productos mediante canales digitales.

    p.mb-5 La venta de productos digitales también enfrenta desafíos:

    ImagenInfografica.color-acento-botones.mb-5(data-aos="zoom-in")
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/intro/img06.svg')
      .tarjeta.color-acento-botones.p-3(x="47%" y="15%" numero="1")
        p.mb-0 Se compite con contenidos gratuitos.
      .tarjeta.color-acento-botones.p-3(x="35%" y="80%" numero="2")
        p.mb-0 Exposición a la piratería y el robo de información.
      .tarjeta.color-acento-botones.p-3(x="85%" y="40%" numero="3")
        p.mb-0 Existen restricciones en cuanto al método de venta.
    
    p Conocer cómo se debe interactuar con los usuarios en la venta de productos y servicios #[em online] es crucial para poder desarrollar e implementar cambios y estrategias que ayuden a alcanzar óptimos resultados.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
