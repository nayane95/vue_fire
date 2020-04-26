import Vue from 'vue'
import App from './App.vue'

//create global filter
Vue.filter('snippet', val =>{
  // value ekk tiyenawada kiyala check karanawa then value eka string da balanawa
  if(!val || typeof(val) != 'string') return ''
  return val.slice(0,50)
})

new Vue({
  el: '#app',
  render: h => h(App)
})
