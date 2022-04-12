<template>
    <div>
        <sidebar></sidebar> 
        <!-- <section class="home animated fadeIn">
       <div class="card text-center" >
        <div class="card-header">
    <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a class="navbar-brand" >Cuentas ATMSense</a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
      </ul>
      <form class="d-flex">
      
        <input class="form-control me-2" type="text" v-model="search" placeholder="Buscar Dispositivos" aria-label="Search">
        <button class="btn btn-outline-success" type="submit"><i class="fas fa-search"></i></button>
      </form>
    </div>
  </div>
</nav>

 <div class="card-body">
    <div class="tab-content" id="pills-tabContent">
<div class="scrollable">
    <div  v-if="filterDataAccounts == 0 " class="alert animated fadeIn fast" role="alert" >
  No existen resultados con el termino: <span style="color:#ffc107">{{search}}</span>
</div>
  
   <table cellspacing="1" cellpadding="1" class="table table-tamaño table-hover" >
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
    <tr  v-for="item in filterDataAccounts" :key="item.idsCuent">
      <th scope="row">{{item.idsCuent}}</th>
      <td>{{item.sCuentName}}</td>
      <td>{{item.sCuentStatus}}</td>
      <td>{{item.nombreContacto}}</td>
      <td>{{item.suCuentaCorreo}}</td>
      <td>
         
          <button class="btn btn-danger" v-on:click="detalles(item.idsCuent)">Detalles</button>
      
      

      </td>
    </tr>
  </tbody>
</table>
</div>
</div>
  </div>
  </div>
 
</div>
 </section> -->
    </div>
</template>

<script>
import sidebar from './Sidebar';
export default {
    name: "subcuentaComponent",
      components: {
    sidebar
  },
    data(){
    return {
      itemsSubAccounts:[],
      search:'',
      GlobalApi:this.globalVar,
      
      }
  },
    computed:{
      filterDataSubAccounts(){
        return this.itemsSubAccounts.filter(blog =>{
          
          return blog.sCuentName.toLowerCase().includes(this.search.toLowerCase()) ||
           blog.idsCuent.toString().toLowerCase().includes(this.search.toLowerCase()) || blog.sCuentStatus.toString().toLowerCase().includes(this.search.toLowerCase())
        });
      }
    },
      mounted(){
    this.getAllSubAccounts();
  },
  methods:{
     getAllSubAccounts(){
      
      var data= {
         "typeFunction": "getUbicationByIDpCuenta",
         "cPrincipal": 1,
        "idUser": 1,
        "page":1,
         "perPage": 10,
      };
      const xhr = new XMLHttpRequest();
      xhr.open(
        "POST",
        this.GlobalApi+'cuentas',
      );

      xhr.setRequestHeader("Content-Type", "multipart/form-data");
      xhr.send(JSON.stringify(data));

      xhr.onload = () => {
        let resp = JSON.parse(xhr.responseText);
        console.log("xml request all devices", resp);
        // var json= resp;

        // for(var index in json){
          
        //  this.itemsAccounts.push({
        //    idsCuent: json[index]["idsCuent"],
        //    sCuentName: json[index]["sCuentName"],
        //    sCuentStatus:json[index]["sCuentStatus"],
        //    nombreContacto:json[index]["nombreContacto"],
        //    suCuentaCorreo:json[index]["suCuentaCorreo"]
        //  });

        // }
        //  console.log("array",this.itemsAccounts);
      }
    }, 
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

.scrollable{
  height:400px;
  overflow: scroll;
}
.scrollable::-webkit-scrollbar{
   background-color: #27293d;  
}
.scrollable::-webkit-scrollbar-thumb{
  background-color: #e6e6e805; 
 
}
.table-tamaño{
  font-size:12pt; 
  width:95%; 
  margin-left:2.5%;
}
.card{
  background: #27293d;
}
.card-header{
  color: #fff;
  /* border-bottom: 0; */
}
Table{
  border-color: #ffffff1a;
}
tr{
  color: #fff;
}
.table > :not(:first-child) {
    border-top: 0px solid #ffffff1a;
    /* padding: 12px 7px; */
}
.table-hover > tbody > tr:hover > * {
    --bs-table-accent-bg: var(--bs-table-hover-bg);
    color: #ffffff;
}
.form-control {
    display: block;
    /* width: 30%; */
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    /* color: #ffffff; */
    /* background-color: #171b2b6e; */
  
    border: 1px solid #ced4da00;
    margin: 0 auto;
}
.navbar-brand{
  color: #fff !important;
}
.alert {
    position: relative;
    padding: 1rem 1rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    background-color: #1b1b275e;
    display: block;
    margin: 0 auto;
    width: 50%;
}
@media only screen and (min-width: 1800px) {
  .scrollable{
  height:810px;
  overflow: scroll;
}
}




</style>