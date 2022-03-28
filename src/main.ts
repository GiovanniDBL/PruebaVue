import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'jquery'
import 'popper.js'
import './assets/styles.css'
import 'bootstrap/dist/js/bootstrap.js'
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
createApp(App).use(store).use(router).use(VueToast).mount('#app')
// let instance = App.$toast.open('You did it!');
// instance.dismiss();
// App.$toast.clear();