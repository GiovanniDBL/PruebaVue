<template>
    <div >
      <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <span class="navbar-brand">Central de <span class="span-brand">monitoreo</span></span>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <span><i class="fad fa-satellite-dish"></i> Conexión: <span class="span-señal">Activa</span></span>
        </li>
        <li class="nav-item">
          <span> Última conexión: <span class="span-señal">25/03/2022 10:27 AM</span></span>
        </li>
      </ul>
      
    </div>
  </div>
</nav>


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
    <tr @click="popup(item.idAlarmas)" v-for="item in itemsAlerts" :key="item.idAlarmas">
      <th scope="row">{{item.idAlarmas}}</th>
      <td>{{item.account}}</td>
      <td>{{item.deviceid}}</td>
      <td>{{item.event}}</td>
      <td>{{item.fecha}}</td>
      <td>{{item.estado_alarma}}</td>
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
    <tr @click="popup(item.id)" v-for="item in items" :key="item.name">
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
    <tr @click="popup(item.id)" v-for="item in items" :key="item.name">
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
    <tr @click="popup(item.id)" v-for="item in items" :key="item.name">
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
    <tr @click="popup(item.id)" v-for="item in items" :key="item.name">
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
import Swal from 'sweetalert2';
import moment from 'moment'
export default {
    name: "monitoreoComponent",
      components: {
    sidebar
  },
mounted(){
// this.Alert();
this.getAlarmasFromHttp();
this.getDataFromSocket();
},
  
    data(){
    return {
      items:[
      {id: '8319', cuenta:'GSI Sucursal 1', dispositivo: '414150', evento: 'Desprendimiento', fecha: '16/03/2022 14:22:39', estado: 'pendiente'},
      {id: '8320', cuenta:'GSI Sucursal 1', dispositivo: '414150', evento: 'Desprendimiento', fecha: '16/03/2022 14:22:39', estado: 'pendiente'},
      {id: '8321', cuenta:'GSI Sucursal 1', dispositivo: '414150', evento: 'Desprendimiento', fecha: '16/03/2022 14:22:39', estado: 'pendiente'},
      {id: '8322', cuenta:'GSI Sucursal 1', dispositivo: '414150', evento: 'Desprendimiento', fecha: '16/03/2022 14:22:39', estado: 'pendiente'},
      {id: '8323', cuenta:'GSI Sucursal 1', dispositivo: '414150', evento: 'Desprendimiento', fecha: '16/03/2022 14:22:39', estado: 'pendiente'},
      {id: '8324', cuenta:'GSI Sucursal 1', dispositivo: '414150', evento: 'Desprendimiento', fecha: '16/03/2022 14:22:39', estado: 'pendiente'},
      {id: '8325', cuenta:'GSI Sucursal 1', dispositivo: '414150', evento: 'Desprendimiento', fecha: '16/03/2022 14:22:39', estado: 'pendiente'},
      {id: '8326', cuenta:'GSI Sucursal 1', dispositivo: '414150', evento: 'Desprendimiento', fecha: '16/03/2022 14:22:39', estado: 'pendiente'},
      {id: '8327', cuenta:'GSI Sucursal 1', dispositivo: '414150', evento: 'Desprendimiento', fecha: '16/03/2022 14:22:39', estado: 'pendiente'},
      {id: '8328', cuenta:'GSI Sucursal 1', dispositivo: '414150', evento: 'Desprendimiento', fecha: '16/03/2022 14:22:39', estado: 'pendiente'},
      {id: '8329', cuenta:'GSI Sucursal 1', dispositivo: '414150', evento: 'Desprendimiento', fecha: '16/03/2022 14:22:39', estado: 'pendiente'},
      {id: '8330', cuenta:'GSI Sucursal 1', dispositivo: '414150', evento: 'Desprendimiento', fecha: '16/03/2022 14:22:39', estado: 'pendiente'},
      ],
       itemsAlerts:[],
       flagRegistro: 0,
      }
  },
     methods: {
    popup(id){
      window.open("/detalles/" + id, id, "location=0,status=0,scrollbars=0,width=480,height=535,top=50%")
    },
    Alert:function(){
      var mouseStop=null;
      // var Time=60000; /** 1 minutos */ 
      // var Time=120000; /** 2 minutos */ 
      // var Time=5000; /** 5 segundos */
      document.onmousemove = function(){
        clearTimeout(mouseStop);
        mouseStop = setTimeout(function(){
         Swal.fire({
           icon: 'warning',
           title: 'Detección de inactividad',
           text: '¿Sigues ahí?',
           confirmButtonText: 'Si',
           cancelButtonText: 'No',
           showCloseButton: true,
           showCancelButton: true,
         }).then((result) =>{
           if (result.isConfirmed) {
            //  Swal.fire('hola')
           }else{
              // Swal.fire('no hola')
              window.close("/monitoreo", "Central de monitoreo", "location=0,status=0,scrollbars=0,width=700,height=600,top=50%");
           }
         })
        },Time)
      }
    },

    getAlarmasFromHttp(){


 
    var page=1;
    var perPage=10;


var idUser=1; //cambiarlo despues por el state
var typeUser=1;// cambiarlo luego por el state

    console.log("idUser es",idUser);
    console.log("idUser es",typeUser);

    
  var data = {
  "typeFunction": "GetAlarmas",
  "idcPrincipal":"1",
  "idcSecundaria": "null",
  "page":page,
  "perPage": perPage,
  "idUserLoged":idUser,
  "typeUserLoged":typeUser
  }

const xhr = new XMLHttpRequest();

            xhr.open('POST', 'https://xm704xl9zk.execute-api.us-east-1.amazonaws.com/dev/alarmas');
            // prepare form data

            // set headers (arreglalo porque lo envia too weird el form sjaskj)
             xhr.setRequestHeader("Content-Type", "multipart/form-data");
             //xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

            // send request
            xhr.send(JSON.stringify(data));

         
            xhr.onload = () => {
                let resp = JSON.parse(xhr.responseText)
                console.log("xml request aws",resp);  
                var json=resp;
                this.itemsAlerts.length =0; 

                this.pages=resp.totalPages;
                console.log("Datos son", json.data);

          

     for(var index in json.data){
       

          let locall = moment.utc(json.data[index]["timeAlarm"]).local().format('DD/MM/YYYY HH:mm:ss');

         this.itemsAlerts.push({
           idAlarmas: json.data[index]["idAlarmas"],
          deviceid: json.data[index]["NameDevice"],
          fecha: locall,
          account: json.data[index]["NameUbica"],
          event: json.data[index]["nameTypeAlarm"],
          zona:"000",
          cantidad:1,
          estado_alarma:json.data[index]["nombreStatus"]
        });

      }
}
},
getDataFromSocket() {
      console.log("Obteniendo Datos");
      this.WebSocketTest();
    },
    WebSocketTest() {
      if ("WebSocket" in window) {
        // alert("WebSocket is supported by your Browser!");
        var data = "";
        // Let us open a web socket
        /*var ws = new WebSocket(
          "wss://2uxmgq5r4j.execute-api.us-east-1.amazonaws.com/Dev"
        );*/

        //conexion al socket el cual genera un idConexion
        var ws = new WebSocket(
          "wss://2uxmgq5r4j.execute-api.us-east-1.amazonaws.com/Dev"
        );

console.log("IdUser es ", this.idUser);
var idUsuario= this.idUser;

        ws.onopen = function () {
          /*var msg = {
            action: "getData",
          };*/

    //se suscribe al topic tablaMonitor
    var msg = {
        "action": "setNotifications",
        "ActiveNotifications": 1,
        "userID": idUsuario,
        "topic":"/tablaMonitor"
    }
          // Web Socket is connected, send data using send()
          ws.send(JSON.stringify(msg));
          console.log("Enviamdo Mensaje...");
        };

        ws.onmessage = (evt) => {
          var received_msg = evt.data;
          console.log("Mensaje Recibido...");
          //console.log(received_msg);
          data = received_msg;
           var json= JSON.parse(data);
      console.log(json);

      var result=json.Result;  
    
      if(result!=undefined && result!="undefined"){
        if(result=="Registrado Correctamente"){
          this.flagRegistro=1;
        localStorage.setItem('IniciarSocket', '1')
        }
      }
          // var json= JSON.parse(data);
          let typeNotification=json["typeNotification"];
          //console.log(json);
          // console.log(typeNotification);
          if(typeNotification!=undefined && typeNotification!="undefined"){
            switch (typeNotification) {
              case 'Alarma':
                console.log("Enviando notificacion de Alarma");
            
                break;
                case 'Event':
            
                console.log("Enviando notificacion de Evento");
                break;

            }

          }
          
        };

        this.setAlive(ws);


        ws.onclose = function () {
          // websocket is closed.
          alert("Connection is closed...");
          localStorage.setItem('IniciarSocket', '0')
          this.flagRegistro=0;
           console.log("Bandera", this.flagRegistro);
        };
      } else {
        // The browser doesn't support WebSocket
        alert("WebSocket NOT supported by your Browser!");
      }
    },

   setAlive(socketConn){
  setInterval(() => {
    
      this.localll = moment().locale('es-us').format('LLL');
 
      localStorage.setItem('localsocket', this.localll)

console.log('[' + this.localll + '] ')
let msgtst = {
    "action":"testAlive"
}
socketConn.send(JSON.stringify(msgtst));
}, 60000 );
// 120000 = 2 minutos;
// 60000 = 1 minuto;
// 300000 = 5 minutos;

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

.nav-item span{
  color: #FFF;
}
.navbar-brand{
  color: #ffffff;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 2px;
}
.span-brand{
  color: #1abb97;
}
.nav-item{
  margin-right: 1rem;
}
.fa-satellite-dish{
  color: #1abb97;
  font-size: 1.2rem;
}
.nav-item .span-señal{
  color: #1abb97;
}

</style>