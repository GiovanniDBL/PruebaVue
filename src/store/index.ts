import { createStore } from 'vuex'

export default createStore({
  state: {
    title: 'Soy un super título de vuex',
    itemsAlertsProgreso: [] as any, 
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
