<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5(data-aos="fade-right") Es importante que revise el siguiente mapa conceptual, el cual resume de manera precisa lo ya explicado en los temas tratados:

    .row.justify-content-center
      .col-lg-10.mb-5(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Imagen que contiene un mapa conceptual que resume la temática tratada en el componente formativo, la cual parte de la venta de productos y servicios digitales que tiene presente lo siguientes aspectos y características: Ventas online: experiencia turística, consumo digital, herramientas tecnológicas, métodos de pagos, logística eCommerce y promoción comercial. Estrategia de marketing online: producto en el mercado turístico, planteamiento de la estrategia digital, creación y desarrollo de nuevos productos en internet. Psicología del consumidor: características en el entorno digital y embudo de compra.  Revenue Management: distribución, segmentación, pricing, precos, pronósticos.")
      .col-auto(data-aos="flip-up")
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
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
