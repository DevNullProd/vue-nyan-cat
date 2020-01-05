import NyanCat from './nyan-cat.vue'

export default {
  install : function(vue, opts){
    vue.component('NyanCat', NyanCat)
  }
}
