<template>
    <div >
        <section class="home">

<!-- ********************** ALARMAS********************************************** -->



  <div class="row section-alarmas">
    <!-- *PRIMER COLUMNA ALARMAS -->
    <div class="col">
        <div class="card bg-light" style="width: 38rem;">
          <div class="card-header ">
            <span class="position-relative" style="padding-right:5px;">
               Alarmas   
              <span class="position-absolute top-0 start-100 translate-middl badge rounded-pill bg-danger">12</span>
            </span>
           
   
            </div>
  <div class="card-body">
<div class="scrollable">
   <table cellspacing="1" cellpadding="1" class="table table-danger table-sm table-bordered   table-hover  table-striped table-borderless table-tamaño" >
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
    <tr @click="popup()" v-for="item in items" :key="item.name">
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

<!-- *SEGUNDA COLUMNA ALARMAS EN PROGRESO -->
    <div class="col">
          <div class="card bg-light" style="width: 38rem;">
              <div class="card-header">
                 <span class="position-relative" style="padding-right:5px;">
               Alarmas en progreso
              <span class="position-absolute top-0 start-100 translate-middl badge rounded-pill bg-danger">12</span>
            </span>
                </div>
  <div class="card-body">
<div class="scrollable">
   <table cellspacing="1" cellpadding="1" class="table table-danger table-sm table-bordered  table-hover  table-striped table-borderless table-tamaño" >
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


  <!-- ******************************* ALERTAS  ********************************************** -->


  <div class="row section-alertas">
    <!-- *PRIMER COLUMNA ALERTAS -->
    <div class="col">
        <div class="card bg-light" style="width: 38rem;">
          <div class="card-header">
            <span class="position-relative" style="padding-right:5px;">
               Alertas
              <span class="position-absolute top-0 start-100 translate-middl badge rounded-pill bg-danger">12</span>
            </span>
            </div>
  <div class="card-body">
<div class="scrollable">
   <table cellspacing="1" cellpadding="1" class="table table-warning table-sm table-bordered   table-hover  table-striped table-borderless table-tamaño" >
  <thead class="table-warning">
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

<!-- *SEGUNDA COLUMNA ALERTAS EN PROGRESO -->
    <div class="col">
          <div class="card bg-light" style="width: 38rem;">
              <div class="card-header">
                 <span class="position-relative" style="padding-right:5px;">
               Alertas en progreso
              <span class="position-absolute top-0 start-100 translate-middl badge rounded-pill bg-danger">12</span>
            </span>
                </div>
  <div class="card-body">
<div class="scrollable">
   <table cellspacing="1" cellpadding="1" class="table table-warning table-sm table-bordered  table-hover  table-striped table-borderless table-tamaño" >
  <thead class="table-warning">
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


<!-- *********************** EVENTOS ****************************** -->
  <div class="section-eventos">
    <div class="card  bg-light" >
          <div class="card-header">
             <span class="position-relative" style="padding-right:5px;">
               Eventos
              <span class="position-absolute top-0 start-100 translate-middl badge rounded-pill bg-danger">12</span>
            </span>
            </div>
              <div class="card-body">
<!-- *PRIMER COLUMNA EVENTOS-->
<div class="scrollable">
   <table cellspacing="1" cellpadding="1" class="table table-success  table-bordered   table-hover  table-striped table-borderless table-tamaño" >
  <thead class="table-success">
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
      {id: '8319', cuenta:'GSI Sucursal 1', dispositivo: '414150', evento: 'Desprendimiento', fecha: '16/03/2022 14:22:39', estado: 'pendiente'},
      {id: '8319', cuenta:'GSI Sucursal 1', dispositivo: '414150', evento: 'Desprendimiento', fecha: '16/03/2022 14:22:39', estado: 'pendiente'},
      {id: '8319', cuenta:'GSI Sucursal 1', dispositivo: '414150', evento: 'Desprendimiento', fecha: '16/03/2022 14:22:39', estado: 'pendiente'},
      {id: '8319', cuenta:'GSI Sucursal 1', dispositivo: '414150', evento: 'Desprendimiento', fecha: '16/03/2022 14:22:39', estado: 'pendiente'},
      {id: '8319', cuenta:'GSI Sucursal 1', dispositivo: '414150', evento: 'Desprendimiento', fecha: '16/03/2022 14:22:39', estado: 'pendiente'},
      {id: '8319', cuenta:'GSI Sucursal 1', dispositivo: '414150', evento: 'Desprendimiento', fecha: '16/03/2022 14:22:39', estado: 'pendiente'},
      {id: '8319', cuenta:'GSI Sucursal 1', dispositivo: '414150', evento: 'Desprendimiento', fecha: '16/03/2022 14:22:39', estado: 'pendiente'},
      {id: '8319', cuenta:'GSI Sucursal 1', dispositivo: '414150', evento: 'Desprendimiento', fecha: '16/03/2022 14:22:39', estado: 'pendiente'},
      ]}
  },
     methods: {
    popup(){
      window.open("/detalles", "Central de monitoreox", "location=0,status=0,scrollbars=0,width=1000,height=600,top=50%")
    }
  }
  
}
</script>

<style scoped>

.home {
    position: relative;
    /* height: 100vh; */
    left: 10px;
    width: calc(100% - 10px);
    transition: all 0.5s ease;
     padding: 8px 40px;
     padding-top: 5rem
}
.home .text{
  font-size:30px;
  font-weight: 500;
}
.table-tamaño{
  font-size:9pt; 
  width:95%; 
  margin-left:2.5%;
}
.card-body{
  padding:1rem 0;
}
.card-title{
  text-align: center;
}
.section-alertas{
  margin-top: 2rem;
}
.section-eventos{
   margin-top: 2rem;
    margin-bottom:2rem;
}

  
.card-header{
  background-color: #414548 !important;
  color: #FFF;
}
.card{
  border-color: #414548;
  border-radius: 6px;
}
.scrollable{
  height:200px;
  overflow: scroll;
}



</style>