import { createStore } from 'vuex'

export default createStore({
  state: {
    title: 'Soy un super título de vuex',
    arrayprueba:[], 
    idDeviceSelected:'',
  },
  getters: {
    title: state => state.title
  },
  mutations: {
  

  },
  actions: {
  },
  modules: {
  }
})
