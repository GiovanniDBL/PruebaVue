<template>
<div>
    <section class="home">

        <div class="card" >
            <div class="card-header">
             Dispositivos
            </div>
        <div class="card-body">
            <div class="scrollable">
 <table cellspacing="1" cellpadding="1" class="table ">
  <thead class="thead_color text-light ">
  <tr>
  <th>Id Device</th>
  <th>Name Device</th>
  
  <th>Nivel de señal</th>
  <th>Estado Comunicación</th>
  <th>Temp</th>
  <th>Voltaje</th>
  <th>Cuenta</th>
  <th>Ver información</th>
  </tr>
  </thead>
  
  <tbody   v-for="item in itemsDevices" :key="item.idDevice">
  <tr :id="'device-'+item.idDevice">
  <td>{{item.idDevice}}</td>
  <td>{{item.deviceName}}</td>
  
  <td class="text-center">

  <svg v-if="item.linkQuality==4" style=" color: gray;" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-reception-0" viewBox="0 0 16 16">
  <path d="M0 13.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
</svg>

  <svg v-if="item.linkQuality==null" style=" color: gray;" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-reception-0" viewBox="0 0 16 16">
  <path d="M0 13.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
</svg>

<svg v-if="item.linkQuality==0" style=" color: #B22203" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-reception-1" viewBox="0 0 16 16">
  <path d="M0 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2zm4 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
</svg>
 
 <svg v-if="item.linkQuality==1" style=" color: #ADFF2F" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-reception-2" viewBox="0 0 16 16">
  <path d="M0 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-5zm4 5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm4 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
</svg>

<svg v-if="item.linkQuality==2" style=" color: lightgreen;" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-reception-3" viewBox="0 0 16 16">
  <path d="M0 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-5zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-8zm4 8a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
</svg>

<svg v-if="item.linkQuality==3" style=" color: green;" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-reception-4" viewBox="0 0 16 16">
  <path d="M0 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-5zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-8zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-11z"/>
</svg>
  </td>
   <td class="text-center">

    <span v-if="item.com_status==1" class="badge badge-pill badge-success">Online</span>
    <span v-if="item.com_status==2" class="badge badge-pill badge-danger">Offline</span>

   </td>
   <td>{{item.tempAmb}}</td>
   <td>{{item.voltDevice}}</td>
   <td>{{item.nameCuenta}}</td>
   <td><button class="btn btn-danger">Detalles</button></td>

  </tr>
  </tbody>
  </table>s
            </div>
        </div>
        </div>

        

    </section>
</div>


</template>






<script>

export default{
    name: "Devices",
     data: function () {
    return {
      hours: 8,
      arrayLabels:[],
      itemsDevices:[],
      itemsUbicacionesInternas:[],
      idUbicIntSelecionada:{},
      deviceSeleccionado: {},//<-- el seleccionado estará aquí
    };
  },
    components: {
    },
    computed:{
    },
    mounted() {
     this.getAllDevices();
     
    },
    methods: {
    getAllDevices(){
      
      
      //var idUbicacion =this.$route.params.idSubAccount;
      //console.log("Obteniendo devices", idUbicInt);
      var data= {
         typeFunction: "getAllDevices",
         //idUbic: idUbicInt,
         "page":1,
         "perPage": 10,
         "idUserLoged":1,
         "typeUserLoged":1
      };
      const xhr = new XMLHttpRequest();
      xhr.open(
        "POST",
        "https://xm704xl9zk.execute-api.us-east-1.amazonaws.com/dev/managerDevices"
      );

      // set headers (arreglalo porque lo envia too weird el form sjaskj)
      xhr.setRequestHeader("Content-Type", "multipart/form-data");
      //xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
      xhr.send(JSON.stringify(data));


       // listen for `load` event
      xhr.onload = () => {
        let resp = JSON.parse(xhr.responseText);
        console.log("xml request all devices", resp);
        var json= resp;
        for(var index in json.data){
          console.log(json.data[index]["NameDevice"]);
          
         this.itemsDevices.push({
           deviceName: json.data[index]["NameDevice"],
           idDevice: json.data[index]["idDeviceZona"],
           nameCuenta:json.data[index]["NameUbica"],
           linkQuality:json.data[index]["linkQuality"],
           com_status:json.data[index]["comun_status"],
           tempAmb:json.data[index]["tempAmb"],
           voltDevice: json.data[index]["voltDevice"]
         });
         console.log("array",this.itemsDevices);

        }
      }
    },    
  },
     created:function(){
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
  height:500px;
  overflow: scroll;
}
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