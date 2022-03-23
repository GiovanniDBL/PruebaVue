<template>
    <div>
        <sidebar></sidebar> 
        <section class="home">
     <h1 class="text"> Monitoreo</h1>


     <div class="card" style="width: 50rem;">
  <div class="card-body">
    <h5 class="card-title">Alarmas pendientes</h5>

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













    
 </section>
    </div>
</template>

<script>
import sidebar from './Sidebar';
export default {
    name: "monitoreoComponent",
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

<style scoped>
.home {
    position: relative;
    height: 100vh;
    left: 88px;
    width: calc(100% - 88px);
    transition: all 0.5s ease;
     padding: 8px 40px;
}
.home .text{
  font-size:30px;
  font-weight: 500;
}



</style>