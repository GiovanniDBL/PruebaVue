import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// import helloword from '@/components/HelloWorld.vue';
import dashboard from '@/components/dashboard.vue';
import sidebar from '@/components/Sidebar.vue';
import monitoreo from '@/components/monitoreo.vue';
import cuenta from '@/components/cuentas.vue';
import subcuenta from '@/components/subcuentas.vue';
import dispositivos from '@/components/dispositivos.vue';
import usuarios from '@/components/usuarios.vue';
import notificaciones from '@/components/notificaciones.vue';
import detalles from '@/components/detalles.vue';
import devices from '@/components/devices.vue';
import sidebarr from '@/components/sidebarr.vue';
import cuentaDetalles from '@/components/detallesCuenta.vue';
import login from '@/components/login.vue';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'loginComponent',
    component: login
  },
  {
    path: '/dashboard',
    name: 'dashboardComponent',
    component: dashboard
  },
  {
    path: '/sidebar',
    name: 'SidebarComponent',
    component: sidebar
  },
  {
    path: '/monitoreo',
    name: 'monitoreoComponent',
    component: monitoreo
  },
  {
    path: '/cuentas',
    name: 'cuentaComponent',
    component: cuenta
  },
  {
    path: '/subcuentas',
    name: 'subcuentaComponent',
    component: subcuenta
  },
  {
    path: '/dispositivos',
    name: 'dispositivosComponent',
    component: dispositivos
  },
  {
    path: '/usuarios',
    name: 'usuariosComponent',
    component: usuarios
  },
  {
    path: '/notificaciones',
    name: 'notificacionesComponent',
    component: notificaciones
  },
  {
    path: '/detalles/:id',
    name: 'detallesComponent',
    component: detalles
  },
  {
    path: '/detallesDeCuenta/:id',
    name: 'detallesCuentaComponent',
    component: cuentaDetalles
  },
  {
    path: '/devices',
    name: 'Devices',
    component: devices
  },
  {
    path: '/sidebarr',
    name: 'Sidebarr',
    component: sidebarr
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
