<template lang="pug">
  #app
    pm-header

    router-view

    pm-footer
</template>

<script>
import PmFooter from '@/components/layout/Footer.vue'
import PmHeader from '@/components/layout/Header.vue'

export default {
  name: 'App',
  components: { PmFooter, PmHeader },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
@import './sass/main.sass';
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');

.results{
  margin-top: 50px;
}
.is-active{
  border: 3px #23d160 solid;
}
</style>
