import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'jquery'
import 'popper.js'
import './assets/styles.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/js/bootstrap.js';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import VueGoogleMaps from '@fawmi/vue-google-maps'
const pinia = createPinia();
let app = createApp(App);
app.config.globalProperties.globalVar = 'https://xm704xl9zk.execute-api.us-east-1.amazonaws.com/dev/';
// app.config.globalProperties.itemsAlertsProgreso = [];
app.use(store).use(pinia).use(router).use(VueToast).use(VueGoogleMaps,{
    load:{
        key:'AIzaSyCAqkhU3QuQn1CFDv5BuC91-eocb-0v1mA', /* API proporcionada por el ANDY BOYS*/
        // key:'AIzaSyBCZwJMYmQ2Radf9HlSjG6ozbCyWVZ0Jjg', /* API CREADA POR MI, solo para desarrolladores */
    },
}).mount('#app')
// createApp(App).use(store).use(router).use(VueToast).mount('#app')
// let instance = App.$toast.open('You did it!');
// instance.dismiss();
// App.$toast.clear();
