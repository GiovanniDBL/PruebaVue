<template>


<div class="">
  <!-- <input type="text" placeholder="custom text input" @change="$emit('customChange', $event.target.value)"> -->
<div class="card" style="width: 30rem;">

  <div class="card-body">
<ul class="list-group list-group-flush">
      <li class="list-group-item d-flex justify-content-between align-items-center">
    ID_Alarma:
    <span class="">{{alarmaID}}</span>
  </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
    ID_Dispositivo:
    <span class="">{{txtNameDevice}}</span>
  </li>
 <li class="list-group-item d-flex justify-content-between align-items-center">
    Cuenta:
    <span class="">{{txtCuenta}}</span>
  </li>
 <li class="list-group-item d-flex justify-content-between align-items-center">
    Dirección:
    <span class="">{{txtDireccion}}</span>
  </li>
 <li class="list-group-item d-flex justify-content-between align-items-center">
    Ciudad:
    <span class="">{{txtCiudad}}</span>
  </li>
 <li class="list-group-item d-flex justify-content-between align-items-center">
    Código postal:
    <span class="">77510</span>
  </li>
 <li class="list-group-item d-flex justify-content-between align-items-center">
    Tipo de alarma:
    <span class="">{{txtTypoAlarma}}</span>
  </li>
 <li class="list-group-item d-flex justify-content-between align-items-center">
    Fecha:
    <span class="">{{txtTimeAlarma}}</span>
  </li>
 <li class="list-group-item d-flex justify-content-between align-items-center">
    Estado_Alarma:  
    <span class="">{{txtStatus}}</span>
  </li>
 <li class="list-group-item d-flex justify-content-between align-items-center">
    Zona:  
    <span class="">{{txtZona}} - {{txtNombreZona}}</span>
  </li>
 <li class="list-group-item ">
 <div class="d-grid gap-2">
  <button data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="btn btn-success" v-if="txtStatus == 'Pendiente'" type="button" style="font-weight:bold;"><i class="fas fa-play"></i> Iniciar Atención</button>
  <button data-bs-toggle="modal" data-bs-target="#staticBackdropp" class="btn btn-danger" v-if="txtStatus == 'Progreso'" type="button" style="font-weight:bold;"><i class="fas fa-play"></i> Finalizar Atención</button>
  <i v-if="txtStatus == 'Finalizado'" style="text-align: center; font-size: 2rem; color:#1aa33c" class="fas fa-check-circle"></i>
  <span v-if="txtStatus == 'Finalizado'" style="text-align: center; color:#1aa33c">¡Atención finalizada!</span>
</div>
  </li>

</ul>
<!--//TODO PRUEBA SPLICE -->
<!-- <button class="btn btn-warning" @click="splice();"> prueba</button> -->

<!-- <h2>Amigos</h2>
<input type="text" v-model="amigo">
<button class="btn btn-warning" @click="splice();"> Agregar Amigo</button>
<ul>
  <li v-for="(amigo, index) in $store.state.amigos" :key="index" >
    {{amigo}}
  </li>
</ul> -->
<!--//TODO PRUEBA SPLICE -->
<hr>
<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true"><i class="fas fa-address-book"></i> Contactos</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false"><i class="fal fa-table"></i> Historial</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false"><i class="far fa-comment-alt-check"></i> Notas</button>
  </li>
</ul>
<div class="tab-content" id="myTabContent">

  <!-- *CONTACTOS -->
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
    <div class="scrollable">
<table cellspacing="1" cellpadding="1" class="table table-info  table-sm   table-hover  table-striped  table-tamaño2">
  <thead class="table-dark">
    <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Apellido</th>
      <th scope="col">Teléfono</th>
      <th scope="col">Correo Electrónico</th>
    </tr>
  </thead>
  <tbody v-for="item in contactosAlarma" :key="item.nombreContacto">
    <tr>
      <td scope="row">{{item.nombreContacto}}</td>
      <td>{{item.apellidoP}}</td>
      <td>{{item.telefono}}</td>
      <td>{{item.correo}}</td>
    </tr>
  </tbody>
</table>
</div>
  </div>
  <!-- *HISTORIAL -->
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
    <div class="scrollable">

    <table cellspacing="1" cellpadding="1" class="table table-info  table-sm   table-hover  table-striped  table-tamaño">
  <thead class="table-dark">
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Dispositivo</th>
      <th scope="col">Nombre</th>
      <th scope="col">Fecha</th>
    </tr>
  </thead>
  <tbody   v-for="item in historialAlarmas" :key="item.nombreContacto">
    <tr >
      <th scope="row">{{item.id}}</th>
      <td>{{item.NameDevice}}</td>
      <td>{{item.typeAlarm}}</td>
      <td >{{item.fechaAlarma}}</td>
    </tr>

  </tbody>
</table>
    </div>
  </div>
  <!-- *NOTAS -->
 
  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
  <!-- <svg xmlns="http://www.w3.org/2000/svg"  width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg>  -->
 

    <div class="scrollable">
<button class="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#staticBackdroppp" style="margin-top:1rem; margin-bottom:5px">
    <i class="fas fa-plus-circle"></i> Agregar nota</button>
    <table cellspacing="1" cellpadding="1" class="table table-info  table-sm   table-hover  table-striped  table-tamaño">
      
  <thead class="table-dark">
    <tr>
      <th scope="col">ID_Nota</th>
      <th scope="col">ID_Alarma</th>
      <th scope="col">Nota</th>
      <th scope="col">Fecha</th>
    </tr>
  </thead>
  <tbody  v-for="item in historialNotas" :key="item.idnotas_alarma">
    <tr >
      <th scope="row">{{item.idnotas_alarma}}</th>
      <td>{{item.nota_id_alarma}}</td>
      <td>{{item.nota_alarma}}</td>
      <td >{{item.date_note}}</td>
    </tr>

  </tbody>
</table>
    </div>
  </div>
</div>

<!-- //? ************** Modal de alarmas pendientes ************************* -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Inicializando Atención</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
     
    <form v-on:submit.prevent="PostEnviarNota">
    <div class="mb-3">

  <span style="color: #6c757d"><i class="fad fa-info-circle" style="color:#0d6efd"></i> Favor de escribir la nota</span>
  <!-- <textarea class="form-control" v-on:change="buscar($event)" style="width:95%" placeholder="Escribir nota..." id="exampleFormControlTextarea1" rows="5" minlength="100"  required></textarea> -->
  <!-- <textarea class="form-control" v-on:input="buscar($event)" style="width:95%" placeholder="Escribir nota..." id="exampleFormControlTextarea1" rows="5" minlength="100"  required></textarea> -->
  <textarea name="textoForm" class="form-control" v-on:change="buscar($event)" style="width:95%" placeholder="Escribir nota..." id="exampleFormControlTextarea1" rows="5" v-model="textoForm" required
  ></textarea>
</div>
    <div class="mb-3">
  <button class="btn btn-danger" data-bs-dismiss="modal"  id="btn1" >Envíar</button>
</div>
</form>
      </div>
    </div>
  </div>
</div>
<!-- //? ************** Modal de alarmas en progreso ************** -->
<div class="modal fade" id="staticBackdropp" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Finalizando Atención</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
     
   
    <form v-on:submit.prevent="PostEnviarNotaFinal">
      <div class="mb-3">
  <select class="form-select" aria-label="Default select example"  v-model="idciereAlarm" >
  <option disabled selected value="">Seleccione un evento</option>
  <option value="1">Evento Real</option>
  <option value="2">Evento Falso</option>
  <option value="3">Visita Fallas de equipo</option>
  <option value="4">Pruebas por Usuario</option>
</select>
      </div>
    <div class="mb-3">


  <textarea name="textoForm" class="form-control"  style="width:95%" placeholder="Escribir nota..." id="exampleFormControlTextarea1" rows="5" v-model="textoFormFinal" required
  ></textarea>
</div>
    <div class="mb-3">
  <button class="btn btn-danger"  data-bs-dismiss="modal">Envíar</button>
</div>
</form>
      </div>
    </div>
  </div>
</div>
<!-- //? ************** Modal Notas Nuevas ************** -->
<div class="modal fade" id="staticBackdroppp" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Crear nota nueva</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
     
   
    <form v-on:submit.prevent="AgregarNuevaNota">
    <div class="mb-3">

  <textarea name="textoForm" class="form-control"  style="width:95%" placeholder="Escribir nota..." id="exampleFormControlTextarea1" rows="5" v-model="textoFormNotaNueva" required
  ></textarea>
</div>
    <div class="mb-3">
  <button class="btn btn-danger" data-bs-dismiss="modal">Envíar</button>
</div>
</form>
      </div>
    </div>
  </div>
</div>
  </div>
</div>
  <!-- <monitore v-bind:name= this.jSonGlobal /> -->
</div>



</template>

<script>
import moment from 'moment'
import Swal from 'sweetalert2';
import monitore from './monitoreo';
import 'animate.css';
import { mapState } from 'vuex';
export default {
    name: "detallesComponent",
components: {
    monitore,
  },
         mounted(){
          this.alarmaID = this.$route.params.id;
            this.getInfoAlarma();
console.log('itemsAlertsProgreso',this.itemsAlertsProgreso);

            
    },

    data(){
        return{
            amigo:'',
            alarmaID:null,
            itemsAlerts:[],
            txtNombreAsignado:'',
            txtClasificacion:'',
            txtCuenta:'',
            txtDireccion:'',
            txtCiudad:'',
            txtTypoAlarma:'',
            txtTimeAlarma:'',
            txtStatus:'',
            txtNameDevice:'',
            txtZona:'',
            txtNombreZona:'',
            txtIdDispositivo:'',
            contactosAlarma:[],
            historialAlarmas:[],
            historialNotas:[],
            textoBuscar:'',
            textoForm:'',
            textoFormFinal:'',
            textoFormNotaNueva:'',
            idciereAlarm:'',
            jSonGlobal:'',
            af:'',
            GlobalApi:this.globalVar,
            // myVar:this.itemsAlertsProgreso,
        }
    },
    computed: {
      ...mapState(['itemsAlertsProgreso']),
    },
   
    methods:{
      splice(){

        this.$store.state.amigo = this.amigo;
        this.$store.dispatch('addAmigoAction');
        this.amigo = '';

        //         let jSON={
        //           deviceid: this.txtNameDevice,
        //           account: this.txtCuenta,
        //         fecha: this.txtTimeAlarma,
        //         event: this.txtTypoAlarma,
        //         zona: this.txtZona,
        //         cantidad: "1",
        //         idAlarmas: this.alarmaID,
        //         estado_alarma: 'progreso',
        //         nombreAsignado: this.txtNombreAsignado,
        //         nombre_zona: this.txtNombreZona,
        //         clasificacion: this.txtClasificacion
        // };

        //  this.itemsAlertsProgreso.splice(0,0,jSON);
        
        //  localStorage.setItem('JsonSplice', JSON.stringify(jSON));
        //  console.log('itemsAlertsProgreso',jSON);
      },
      texto(){
        // console.log("TxtAreaFinal",this.textoFormFinal);
        // console.log("SelectFinal",this.idciereAlarm);
         var data = {
  "typeFunction": "closeAlarm",
  "idAlarma": this.alarmaID,
  "idUser": 1,
  "notaFinal": this.textoFormFinal,
  "id_cierre_alarma": this.idciereAlarm,

  }
  console.log("DATA FINAL",data);
      },
       emitEvent() {
        myEmitter.emit('sample-event', 'foobar') 
      },
         
    getInfoAlarma(){
    
  var data = {
  "typeFunction": "getInfoAlarma",
  "idAlarma": this.alarmaID,
  }

  const xhr = new XMLHttpRequest();
       xhr.open(
        "POST",
        this.GlobalApi+'alarmas',
      );
      xhr.setRequestHeader("Content-Type", "multipart/form-data");
      xhr.send(JSON.stringify(data));

       xhr.onload = () => {
        let resp = JSON.parse(xhr.responseText)
        console.log("respuesta info alarma",resp);
        var json=resp; 



          for (var index in json){

          var nameTypeAlarm=json[index]["nameTypeAlarm"];
          var date=json[index]["timeAlarm"];
          var stillUtc = moment.utc(date).toDate();
          var local = moment(stillUtc).local().format('DD/MM/YYYY HH:mm:ss');
          var nombreStatus=json[index]["nombreStatus"];
          var idstatusAlarmas=json[index]["idstatusAlarmas"];
          var idAlarma=json[index]["idAlarmas"];
          var datoAlarma=json[index]["alarmData"];
          var nameCuenta=json[index]["NameUbica"];
          var direccion=json[index]["ubicacionDir"];
          var ciudad=json[index]["nombCuidadUbic"];
          var idUbic=json[index]["idUbic"];
          var idDevice=json[index]["idDeviceZona"];
          var nameDevice = json[index]["NameDevice"]
          var numero_zona = json[index]["numero_zona"]
          var nombre_zona = json[index]["nombre_zona"]
          var nombre_asignado = json[index]["nombre_asignado"]
          var id_clasificacion_alarma = json[index]["id_clasificacion_alarma"]
          var NameDevice = json[index]["nombre_zona"]


        }
        console.log(nameCuenta);
this.txtIdDispositivo = 
        this.txtTypoAlarma=nameTypeAlarm;
        this.txtCuenta=nameCuenta;
        this.txtDireccion=direccion;
       this.txtTimeAlarma=local;
       this.txtIdAlarma=idAlarma;
       this.txtDatoAlarma=datoAlarma;
       this.txtCiudad=ciudad;
       this.idDeviceSelected=idDevice;
       this.txtStatus=nombreStatus;
       this.txtNameDevice = nameDevice;
       this.txtZona = numero_zona;
       this.txtNombreZona = nombre_zona;
       this.txtNombreAsignado = nombre_asignado;
       this.txtClasificacion = id_clasificacion_alarma;
      //  var statusAlarma=document.getElementById("select-statusA");

      //  var opt = document.createElement('option');
      //  opt.value = idstatusAlarmas;
      //  opt.text = nombreStatus;
      //  statusAlarma.add(opt);

       this.getContactosAlarma(idUbic);
       this.getHistorialAlarmas(idDevice);
       this.getHistorialTickets(idAlarma)

      }
},
    PostEnviarNota(){
    
  var data = {
  "typeFunction": "iniciar_atencion_alarma",
  "notaInicio": this.textoForm,
  "idAlarma": this.alarmaID,
  "idUser": 1,
  }

  const xhr = new XMLHttpRequest();
       xhr.open(
        "POST",
        "https://xm704xl9zk.execute-api.us-east-1.amazonaws.com/dev/alarmas"
      );
      xhr.setRequestHeader("Content-Type", "multipart/form-data");
      xhr.send(JSON.stringify(data));
    
      Swal.fire({
  icon: 'success',
  title: 'Atención Iniciada',
  text: 'Nota enviada correctamente',
     showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
}).then(()=>{
location.reload();
})

       xhr.onload = () => {
        let resp = JSON.parse(xhr.responseText)
        console.log("respuesta info alarma",resp);
        console.log(data);
        var json=resp;
        let locall = moment.utc().local().format('DD/MM/YYYY HH:mm:ss');
        var id = json["insertId"]

        let jSON={
          idnotas_alarma: id,
          nota_id_alarma: this.alarmaID,
          nota_alarma: this.textoForm,
          date_note: locall,
        };

         this.historialNotas.splice(0,0,jSON);

     

      }
},
 PostEnviarNotaFinal(){
    
  var data = {
  "typeFunction": "closeAlarm",
  "idAlarma": this.alarmaID,
  "idUser": 1,
  "notaFinal": this.textoFormFinal,
  "Id_cierre_alarma": this.idciereAlarm,
  }

// console.log(data);
  const xhr = new XMLHttpRequest();
       xhr.open(
        "POST",
        "https://xm704xl9zk.execute-api.us-east-1.amazonaws.com/dev/alarmas"
      );
      xhr.setRequestHeader("Content-Type", "multipart/form-data");
      xhr.send(JSON.stringify(data));

      Swal.fire({
  icon: 'success',
  title: 'Atención Finalizada',
  text: 'Nota enviada correctamente',
  timer: 1900,
  showConfirmButton: false,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
}).then(()=>{
location.reload();
})

       xhr.onload = () => {
        let resp = JSON.parse(xhr.responseText)
        console.log("respuesta TicketFinal",resp);
          var json=resp;
        let locall = moment.utc().local().format('DD/MM/YYYY HH:mm:ss');
        var id = json["insertId"]

        let jSON={
          idnotas_alarma: id,
          nota_id_alarma: this.alarmaID,
          nota_alarma: this.textoFormFinal,
          date_note: locall,
        };

         this.historialNotas.splice(0,0,jSON);

      }
      
},
AgregarNuevaNota(){
  var data = {
  "typeFunction": "agregarNota",
  "idAlarma": this.alarmaID,
  "idUser": 1,
  "nota": this.textoFormNotaNueva,
  }

// console.log(data);
  const xhr = new XMLHttpRequest();
       xhr.open(
        "POST",
        "https://xm704xl9zk.execute-api.us-east-1.amazonaws.com/dev/alarmas"
      );
      xhr.setRequestHeader("Content-Type", "multipart/form-data");
      xhr.send(JSON.stringify(data));
      
           Swal.fire({
  icon: 'success',
  title: 'Se ha creado una nueva nota',
  text: 'Nota enviada correctamente',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
})
       xhr.onload = () => {
         let resp = JSON.parse(xhr.responseText)
        console.log("Nota agregada",resp);
        var json=resp;
        let locall = moment.utc().local().format('DD/MM/YYYY HH:mm:ss');
        var id = json["insertId"]
        console.log(id);

         let jSON={
          idnotas_alarma: id,
          nota_id_alarma: this.alarmaID,
          nota_alarma: this.textoFormNotaNueva,
          date_note: locall,
         };

         this.historialNotas.splice(0,0,jSON); 
      }

           
     
},
    getContactosAlarma(idUbic) {
      var data={
        typeFunction: "getContactosAlarma",
        idUbic: idUbic
      };
        const xhr = new XMLHttpRequest();
       xhr.open(
        "POST",
        "https://xm704xl9zk.execute-api.us-east-1.amazonaws.com/dev/alarmas"
      );
      // set headers (arreglalo porque lo envia too weird el form sjaskj)
      xhr.setRequestHeader("Content-Type", "multipart/form-data");
      //xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
      xhr.send(JSON.stringify(data));

       // listen for `load` event
            xhr.onload = () => {
                let resp = JSON.parse(xhr.responseText)
                // console.log("xml request aws",resp);  
                var json=resp;
                // this.contactosAlarma.length =0; 

                console.log("Contactos son", json);

                   //var table = document.getElementById ("tableAlerts");
                   //table.refresh ();
                     for(var index in json){
          //console.log("dato es",json.data[index]);


              this.contactosAlarma.push({
                nombreContacto: json[index]["nombre_contacto"],
                apellidoP: json[index]["apellidoP_contacto"],
                apellidoM: json[index]["apellidoM_contacto"],
                telefono: json[index]["telefono_contacto"],
                correo: json[index]["correo_contacto"],
              });

              console.log("Los contactos son:",this.contactosAlarma);
      }
  }

    },
    getHistorialAlarmas(idDevice){
      // var idDevice=this.idDeviceSelected;
      // var idDevice=6;

      //console.log("Obteniendo alarmas de device.. ",idDevice);

      //Pendiente Agregar tipo de usuarlo y token
      var data={
        typeFunction: "getAlarmasByDevice",
        idDevice: idDevice
      };

      const xhr = new XMLHttpRequest();
       xhr.open(
        "POST",
        "https://xm704xl9zk.execute-api.us-east-1.amazonaws.com/dev/alarmas"
      );
      // set headers (arreglalo porque lo envia too weird el form sjaskj)
      xhr.setRequestHeader("Content-Type", "multipart/form-data");
      //xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
      xhr.send(JSON.stringify(data));
      xhr.onload = () => {
         let resp = JSON.parse(xhr.responseText)
        console.log("respuesta getHistorialAlarmas",resp);
        var json=resp;  

        // this.itemsAlarmasDevice.length = 0;

        for(var index in json){
          var date= json[index]["timeAlarm"];
          var stillUtc = moment.utc(date).toDate();
          var local = moment(stillUtc).local().format('DD/MM/YYYY HH:mm:ss');
          var estadoAlarma=json[index]["estado_alarma"];
          var txtAlarma="";
          if(estadoAlarma==1){
            txtAlarma="Pendiente";
          }else{
            if(estadoAlarma==2){
              txtAlarma="Progreso";

            }else{
              if(estadoAlarma==3){
                txtAlarma="Finalizado";

              }
            }
          }
          
          this.historialAlarmas.push({
            id:json[index]["idAlarmas"],
            NameDevice: json[index]["NameDevice"],
            typeAlarm: json[index]["nameTypeAlarm"],
            tempAmb:json[index]["tempAmb"],
            fechaAlarma:local,
            statusAlarma:txtAlarma
          });
        }

        //this.initChart();
        //this.getEventosDevice(idDevice);
      }
    },
    getHistorialTickets(idDevice){
  
      var data={
        typeFunction: "obtenerNotas_alarmas",
        idAlarma: idDevice,
        idUser: 1,
      };

      const xhr = new XMLHttpRequest();
       xhr.open(
        "POST",
        "https://xm704xl9zk.execute-api.us-east-1.amazonaws.com/dev/alarmas"
      );
      // set headers (arreglalo porque lo envia too weird el form sjaskj)
      xhr.setRequestHeader("Content-Type", "multipart/form-data");
      //xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
      xhr.send(JSON.stringify(data));
      xhr.onload = () => {
         let resp = JSON.parse(xhr.responseText)
        console.log("respuesta getHistorialNotas",resp);
        var json=resp;  

        this.af = resp
        // this.itemsAlarmasDevice.length = 0;

        for(var index in json){
          var date= json[index]["date_note"];
          var stillUtc = moment.utc(date).toDate();
          var local = moment(stillUtc).local().format('DD/MM/YYYY HH:mm:ss');
          var estadoAlarma=json[index]["estado_alarma"];
          var txtAlarma="";
      
          
          this.historialNotas.push({
            idnotas_alarma:json[index]["idnotas_alarma"],
            nota_id_alarma: json[index]["nota_id_alarma"],
            nota_alarma: json[index]["nota_alarma"],
            tempAmb:json[index]["tempAmb"],
            date_note:local,
          });
        }

      }
    },
    // enviarNota(){
    //   alert("Texto: " + this.textoBuscar + ' '+
    //          "ID_Alarma: " + this.alarmaID + ' ' +
    //          "ID_Usuario: " + 1)
    // },
buscar(event){

this.textoBuscar = event.target.value
  console.log("Texto filtrado: " + this.textoBuscar);


}



    }

}
</script>

<style scoped>
.card{
  /* background: #27293d; */
}
label{
    color: #ffffff;
}
.list-group-item{
    /* background-color: #27293d !important; */
    /* color: #ffffff; */
    /* border-color: #ffffff1a; */
}
hr{
    color: #ffffff;
}
.tab-pane{
    /* color: #ffffff; */
}
.scrollable{
  height:320px;
  overflow: scroll;
}
.table-tamaño{
  font-size:9.9pt; 
  width:96.5%; 
  margin-left:0.3%;
}
.table-tamaño2{
  font-size:11pt; 
  width:96.5%; 
  margin-left:0.3%;
}
.nav-link{
  color: #495057;
  background-color: #d0d5db61;
  /* background-color: #dee2e6; */
}
.nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus {
    border-color: #dee2e6 #dee2e6 #dee2e6;
    isolation: isolate;
}
.nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link {
    color: #fff;
    /* background-color: #0a9b84; */
    /* background-color: #0a9b55; */
    background-color: #0a689b;
    border-color: #dee2e6 #dee2e6 #fff;
}
li{
  color: #08677a;
  font-weight: bold;
}
li span{
  color: #08677a;
  font-weight: 600;
}
.list-group-item {

    border-bottom: 1px solid #1ca7d152;
}
.btn-atencion{
  background-color: #dc3545;
  /* text-decoration: none; */
  color: #fff;
  margin-bottom: 1px;
}
.modal-header {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: space-between;
    padding: 2px 1rem;
    border-bottom: 1px solid #dee2e6;
    border-top-left-radius: calc(0.3rem - 1px);
    border-top-right-radius: calc(0.3rem - 1px);
    background: #111315;
}
.modal-header .btn-close {
    padding: 0.3rem 0.3rem;
    margin: -0.5rem -0.5rem -0.5rem auto;
    background-color: #fff;
}
.modal-header h5{
color: #fff;
}

@media only screen and (min-width: 400px) {

    .scrollable {
        height: 420px;
        overflow: scroll;
    }

 
}


</style>