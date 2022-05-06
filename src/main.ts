import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App.vue'
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
let app = createApp(App);
app.config.globalProperties.globalVar = 'https://xm704xl9zk.execute-api.us-east-1.amazonaws.com/dev/';
// app.config.globalProperties.itemsAlertsProgreso = [];
app.use(store).use(router).use(VueToast).use(VueGoogleMaps,{
    load:{
        key:'AIzaSyBCZwJMYmQ2Radf9HlSjG6ozbCyWVZ0Jjg',
    },
}).mount('#app')
// createApp(App).use(store).use(router).use(VueToast).mount('#app')
// let instance = App.$toast.open('You did it!');
// instance.dismiss();
// App.$toast.clear();
