<template lang="pug">
  section.hero.is-success
    .hero-head
      header.navbar
        .container
          .navbar-left
            .navbar-item
              strong 📻 Vue.la Music
          .navbar-right.navbar-menu
            a.navbar-item(@click="selectLang('en')") EN
            a.navbar-item(@click="selectLang('en')") ES
            router-link.navbar-item(to="search") {{ $t('search') }}
            router-link.navbar-item(to="about") {{ $t('about') }}
    .hero-body
      .container.has-text-centered
        h1.title Vue.la Music
        h2.subtitle Canciones que estan VUEnisimas
        pm-player
</template>

<script>
import PmPlayer from '@/components/Player.vue'
export default {
  components: { PmPlayer },
  methods: {
    selectLang (lang) {
      this.$i18n.locale = lang
    }
  }
}
</script>
