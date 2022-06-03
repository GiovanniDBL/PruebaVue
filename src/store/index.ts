import { createStore } from 'vuex'

export default createStore({
  state: {
    title: 'Soy un super título de vuex',
    itemsAlertsProgreso: [] as any, 
    // itemsAlertsProgreso: [], 
    idDeviceSelected:'',
    count:1,
    amigos:[] as any,
    amigo: null
  },
  getters: {
    title: state => state.title
  },
  mutations: {
    addAmigo( state ){
      state.amigos = [state.amigo,...state.amigos]
    }
  },
  actions: {
    addAmigoAction( context ){
      context.commit('addAmigo');
    }
  },
  modules: {
  }
})
