<template>
    <div>
        <sidebar></sidebar> 
        <section class="home">
     <div class="card" >
        <div class="card-header">
    Cuentas
  </div>
  <div class="card-body">
<div class="scrollable">
   <!-- <table cellspacing="1" cellpadding="1" class="table table-success  table-bordered   table-hover  table-striped table-borderless table-tamaño" > -->
   <table cellspacing="1" cellpadding="1" class="table table-hover" >
  <thead class="">
    <tr>
      <th scope="col">ID_Cuenta</th>
      <th scope="col">Nombre de cuenta</th>
      <th scope="col">Estado</th>
      <th scope="col">Contacto</th>
      <th scope="col">Correo</th>
      <th scope="col">Opciones</th>
    </tr>
  </thead>
  <tbody>
    <tr @click="popup(item.id)" v-for="item in items" :key="item.name">
      <th scope="row">{{item.id}}</th>
      <td>{{item.cuenta}}</td>
      <td>{{item.estado}}</td>
      <td>{{item.contacto}}</td>
      <td>{{item.correo}}</td>
      <td>
        <button class="btn btn-primary">Info</button>
        <button class="btn btn-danger">Baja</button>
      </td>
    </tr>
  </tbody>
</table>
</div>
  </div>
</div>
 </section>
    </div>
</template>

<script>
import sidebar from './Sidebar';
export default {
    name: "cuentaComponent",
      components: {
    sidebar
  },
      data(){
    return {items:[
      {id: '19', cuenta:'Grupo Zigbmax', estado: '1', contacto: 'Jose Perez', correo: 'andybraga@outlook.es'},
      {id: '7', cuenta:'Grupo Cumbres', estado: '1', contacto: 'Jose Perez', correo: 'andybraga@outlook.es'},
      {id: '4', cuenta:'GrupoOxxo', estado: '1', contacto: 'Jose Perez', correo: 'andybraga@outlook.es'},
      {id: '1', cuenta:'Sisec', estado: '1', contacto: 'Jose Perez', correo: 'andybraga@outlook.es'},
      ],
      
      }
  },
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
/* .scrollable{
  height:250px;
  overflow: scroll;
} */
/* .table-tamaño{
  font-size:9pt; 
  width:95%; 
  margin-left:2.5%;
} */
.card{
  background: #27293d;
}
.card-header{
  color: #fff;
}
Table{
  color: #fff;
  border-color: #ffffff1a;
}


</style>