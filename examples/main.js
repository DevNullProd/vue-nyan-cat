import Vue from 'vue'
import App from './App.vue';

import NyanCat from '../src/main.js'

Vue.use(NyanCat)

new Vue({
  el: '#app',
  render(h){ return h(App) }
})
