import './firebase'
import Vue from 'vue'
import VueRouter from 'vue-router'      //
import {router} from './routes'           //                    
import VueMoment from 'vue-moment'
import {store} from './stores'

import { firestorePlugin } from 'vuefire'
Vue.use(firestorePlugin)

Vue.use(VueRouter)

Vue.use(VueMoment)  
import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store                                //
})
