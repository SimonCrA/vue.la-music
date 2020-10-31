<template lang="pug">
  section.hero.is-success
    .hero-head
      header.navbar
        .container
          .navbar-left
            .navbar-item
              strong 📻 Vue.la Music
          .navbar-right.navbar-menu
            router-link.navbar-item(:to="{ name: 'search' }") Buscar
            router-link.navbar-item(to="about") Nosotros
    .hero-body
      .container.has-text-centered
        h1.title Platzi Music
        h2.subtitle Canciones que estan VUEnisimas
        pm-player
</template>

<script>
import PmPlayer from '@/components/Player.vue'
export default {
  components: { PmPlayer }
}
</script>
