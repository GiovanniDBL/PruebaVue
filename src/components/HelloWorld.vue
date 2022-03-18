<template>
  <div >
  <!-- <sidebar></sidebar>  -->
  
   <div class="container contenido-cards">
  <div class="row">
    <div class="col-6">
<div class="card" >
   <div class="card-body">
      <h5 class="card-title">Notificaciones en seguimiento</h5>
      <div class="table-wrapper-scroll-y my-custom-scrollbar">
<table class="table table-light  table-hover  table-striped table-borderless" >
  <thead class="table-danger">
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Cuenta</th>
      <th scope="col">Dispositivo</th>
      <th scope="col">Evento</th>
      <th scope="col">Fecha</th>
      <th scope="col">Estado de alarma</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in items" :key="item.name">
      <th scope="row">{{item.id}}</th>
      <td>{{item.cuenta}}</td>
      <td>{{item.dispositivo}}</td>
      <td>{{item.evento}}</td>
      <td>{{item.fecha}}</td>
      <td>{{item.estado}}</td>
    </tr>
  </tbody>
</table>
</div>
</div>
</div>
    </div>


    <div class="col-6">
<div class="card" >
   <div class="card-body">
      <h5 class="card-title">Notificaciones</h5>
      <div class="table-wrapper-scroll-y my-custom-scrollbar">
<table class="table table-light  table-hover  table-striped table-borderless">
  <thead class="table-danger">
   <tr>
      <th scope="col">ID</th>
      <th scope="col">Cuenta</th>
      <th scope="col">Dispositivo</th>
      <th scope="col">Evento</th>
      <th scope="col">Fecha</th>
      <th scope="col">Estado de alarma</th>
    </tr>
  </thead>
  <tbody>
     <tr v-for="item in items" :key="item.name">
      <th scope="row">{{item.id}}</th>
      <td>{{item.cuenta}}</td>
      <td>{{item.dispositivo}}</td>
      <td>{{item.evento}}</td>
      <td>{{item.fecha}}</td>
      <td>{{item.estado}}</td>
    </tr>

  </tbody>
</table>
</div>
</div>
</div>
    </div>
 
  </div>
</div>
  </div>
















  
</template>

<script lang="ts">

import sidebar from '@/components/Sidebar.vue';


export default {
  name:'HelloWordl',
  components: {
    sidebar

  },
  data(){
    return {items:[
      {id: '8319', cuenta:'GSI Sucursal 1', dispositivo: '414150', evento: 'Desprendimiento', fecha: '16/03/2022 14:22:39', estado: 'pendiente'},
      {id: '8319', cuenta:'GSI Sucursal 1', dispositivo: '414150', evento: 'Desprendimiento', fecha: '16/03/2022 14:22:39', estado: 'pendiente'},
      {id: '8319', cuenta:'GSI Sucursal 1', dispositivo: '414150', evento: 'Desprendimiento', fecha: '16/03/2022 14:22:39', estado: 'pendiente'},
      {id: '8319', cuenta:'GSI Sucursal 1', dispositivo: '414150', evento: 'Desprendimiento', fecha: '16/03/2022 14:22:39', estado: 'pendiente'},
      {id: '8319', cuenta:'GSI Sucursal 1', dispositivo: '414150', evento: 'Desprendimiento', fecha: '16/03/2022 14:22:39', estado: 'pendiente'}
      ]}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contenido-cards{
  margin-top: 1rem;
}
/* .my-custom-scrollbar {
position: relative;
height: 200px;
overflow: auto;
}
.table-wrapper-scroll-y {
display: block;
} */
</style>
