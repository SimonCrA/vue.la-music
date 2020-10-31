<template lang="pug">
  main
    transition(name="move")
      pm-notification(v-show="showNotification")
        p(slot="body") No se encontraron resultados

    transition(name="move")
      pm-loader(v-show="isLoading")

    section.section(v-show="!isLoading")
      nav.nav
        .container
          .field.has-addons
            .control
              input.input.is-large(
                type="text",
                placeholder="¿Qué canción estás buscando?",
                v-model="searchQuery",
                v-on:keyup.enter="search"
              )
            .control
              a.button.is-info.is-large(v-on:click="search") Buscar
            .control
              a.button.is-danger.is-large &times;
      p.help.is-info.has-text-left
        small {{ searchMessage }}
      .container.results
        .columns.is-multiline
          .column.is-one-quarter(v-for="t in tracks")
            pm-track( v-blur="t.preview_url"
                      :class="{ 'is-active': t.id === selectedTrack }",
                      :track="t",
                      @select="setSelectedTrack")
</template>

<script>
import trackService from '@/services/track.js'
import PmTrack from '@/components/Track.vue'
import PmLoader from '@/components/shared/Loader.vue'
import PmNotification from '@/components/shared/Notification.vue'

export default {
  name: 'App',
  components: { PmTrack, PmLoader, PmNotification },
  data () {
    return {
      searchQuery: '',
      tracks: [],
      isLoading: false,
      showNotification: false,
      selectedTrack: ''
    }
  },
  methods: {
    search () {
      if (!this.searchQuery) {
        return
      }
      this.isLoading = true
      trackService.search(this.searchQuery)
        .then(res => {
          this.showNotification = res.tracks.total === 0
          this.tracks = res.tracks.items
          this.isLoading = false
        })
    },
    setSelectedTrack (id) {
      this.selectedTrack = id
    }
  },
  computed: {
    searchMessage () {
      return `Encontrados: ${this.tracks.length}`
    }
  },
  watch: {
    showNotification () {
      if (this.showNotification) {
        setTimeout(() => {
          this.showNotification = false
        }, 3000)
      }
    }
  }
}
</script>

<style lang="scss">
.results{
  margin-top: 50px;
}
.is-active{
  border: 3px #23d160 solid;
}
</style>
