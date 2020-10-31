import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import EventBus from '@/plugins/eventBus'

import msToMm from '@/filters/ms-to-mm.js'
import blur from '@/directives/blur.js'

import routes from '@/routes.js'
import store from '@/store.js'
import i18n from '@/i18n.js'

Vue.config.productionTip = false

Vue.use(EventBus)
Vue.use(msToMm)
Vue.use(VueRouter)
Vue.use(blur)

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  render: h => h(App),
  router,
  store,
  i18n
}).$mount('#app')
