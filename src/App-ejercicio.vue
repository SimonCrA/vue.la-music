<template lang="pug">
  #app
    .container
      form
        .logo
          img(alt="estacion", src="./assets/logo.jpg")
        h1.title.is-4 Registro Estacion PLatzi
        .field
          label.has-text-weight-bold.is-size-7 Nombre
          .control
            input.input(value="Platzetiro")
        .field
          label.has-text-weight-bold.is-size-7 Apellido
          .control
            input.input(value="cool de la web")
        .field
          label.has-text-weight-bold.is-size-7 Cargo
          .control
            input.input(value="FullStack JS")
        .column.is-offset-7
          button.button ENVIAR
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data () {
    return {
      msg: 'Hola Vue.js'
    }
  },
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">
@import './sass/main.sass';
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');
.container{
  position: relative;
  color: $color-letras;
  width: 320px;
  height: 409px;
  font-family: 'Roboto', sans-serif;
  box-shadow: rgba(44, 39, 39, 0.911);
}
.logo{
  text-align: center;
}
.title{
  color: $color-boton;
  font-weight: bold;
  text-align: center;
}
label{
  color: $color-letras-form;
  font-size: 0.75em;
}
.button{
  background: $color-boton;
  color: $color-letras-boton;
}
</style>



<template lang="pug">
  #app
    input(v-model="name")
    p {{name}}
    label.label Ingresa Fecha de Nacimiento
    input(v-model="fechaDeNacimiento")
    p {{ edad }}
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      msg: 'Hola simon',
      name: '',
      fechaDeNacimiento: '0'
    }
  },
  computed: {
    edad () {
      const year = new Date().getFullYear()
      return `${year - parseInt(this.fechaDeNacimiento)}`
    }
  },
  watch: {
    name (newVal, oldVal) {
      console.log(newVal, oldVal)
    }
  }
}
</script>