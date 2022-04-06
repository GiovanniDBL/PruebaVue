<template>



<div class="card" style="width: 30rem;">
  <!-- <div class="card-header ">
  <a href="#" class="btn btn-danger" role="button" data-bs-toggle="button"> <i class="fas fa-play"></i> Iniciar atención</a>
  </div> -->
  <div class="card-body">
<ul class="list-group list-group-flush">
      <li class="list-group-item d-flex justify-content-between align-items-center">
    ID_Alarma:
    <span class="">{{alarmaID}}</span>
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
    Estado:
    <span class="">{{txtStatus}}</span>
  </li>
 <li type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="list-group-item d-flex justify-content-between align-items-center" style="color:#fff;background:#dc3545;border-radius:20px;">
   Iniciar atención
    <span class="" style="color:#fff"><i class="fas fa-play"></i></span>
  </li>
</ul>
<!-- <form>
  <div class="form-group">
    <label for="exampleInputEmail1">ID: </label>
    <label for="exampleInputEmail1">8319</label>

  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form> -->
<!-- <button class="btn btn-danger"  type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i class="fas fa-play"></i> Iniciar atención</button> -->
<hr>
<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Contactos</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Historial</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Notas</button>
  </li>
  <!-- <li class="nav-item" role="presentation">
    <button class="nav-link btn-atencion" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
     <i class="fas fa-play"></i> Iniciar atención</button>
  </li> -->
</ul>
<div class="tab-content" id="myTabContent">

  <!-- *CONTACTOS -->
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
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
  <tbody  v-for="item in historialAlarmas" :key="item.nombreContacto">
    <tr>
      <th scope="row">{{item.id}}</th>
      <td>{{item.NameDevice}}</td>
      <td>{{item.typeAlarm}}</td>
      <td>{{item.fechaAlarma}}</td>
    </tr>

  </tbody>
</table>
    </div>
  </div>
  <!-- *NOTAS -->
  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
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
  <tbody  v-for="item in historialAlarmas" :key="item.nombreContacto">
    <tr>
      <th scope="row">{{item.id}}</th>
      <td>{{item.NameDevice}}</td>
      <td>{{item.typeAlarm}}</td>
      <td>{{item.fechaAlarma}}</td>
    </tr>

  </tbody>
</table>
    </div>
  </div>
</div>


<!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Nota</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
     
    <form v-on:submit.prevent="PostEnviarTicket">
    <div class="mb-3">

  <!-- <span style="color: #6c757d"><i class="fad fa-info-circle" style="color:#0d6efd"></i> Importante incluir las siguientes palabras: Hasta, que, <br>como.</span> -->
  <!-- <textarea class="form-control" v-on:change="buscar($event)" style="width:95%" placeholder="Escribir nota..." id="exampleFormControlTextarea1" rows="5" minlength="100"  required></textarea> -->
  <!-- <textarea class="form-control" v-on:input="buscar($event)" style="width:95%" placeholder="Escribir nota..." id="exampleFormControlTextarea1" rows="5" minlength="100"  required></textarea> -->
  <textarea name="textoForm" class="form-control" v-on:change="buscar($event)" style="width:95%" placeholder="Escribir nota..." id="exampleFormControlTextarea1" rows="5" v-model="textoForm"></textarea>
</div>
    <div class="mb-3">
  <button class="btn btn-primary" data-bs-dismiss="modal"  id="btn1" >Envíar</button>
</div>
</form>
      </div>
      <!-- <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" @click="enviarNota()" class="btn btn-primary">Enviar</button>
      </div> -->
    </div>
  </div>
</div>
  </div>
</div>



</template>

<script>
import moment from 'moment'
export default {
    name: "detallesComponent",

        mounted(){
          this.alarmaID = this.$route.params.id;
            this.getInfoAlarma();

            
    },

    data(){
        return{
            alarmaID:null,
            itemsAlerts:[],
            txtCuenta:'',
            txtDireccion:'',
            txtCiudad:'',
            txtTypoAlarma:'',
            txtTimeAlarma:'',
            txtStatus:'',
            contactosAlarma:[],
            historialAlarmas:[],
            textoBuscar:'',
            textoForm:'',
        }
    },
    methods:{
      texto(){
        console.log("TxtArea",this.textoForm);
      },
         
    getInfoAlarma(){
    
  var data = {
  "typeFunction": "getInfoAlarma",
  "idAlarma": this.alarmaID,
  }

  const xhr = new XMLHttpRequest();
       xhr.open(
        "POST",
        "https://xm704xl9zk.execute-api.us-east-1.amazonaws.com/dev/alarmas"
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


        }
        console.log(nameCuenta);

        this.txtTypoAlarma=nameTypeAlarm;
        this.txtCuenta=nameCuenta;
        this.txtDireccion=direccion;
       this.txtTimeAlarma=local;
       this.txtIdAlarma=idAlarma;
       this.txtDatoAlarma=datoAlarma;
       this.txtCiudad=ciudad;
       this.idDeviceSelected=idDevice;
       this.txtStatus=nombreStatus;
      //  var statusAlarma=document.getElementById("select-statusA");

      //  var opt = document.createElement('option');
      //  opt.value = idstatusAlarmas;
      //  opt.text = nombreStatus;
      //  statusAlarma.add(opt);

       this.getContactosAlarma(idUbic);
       this.getHistorialAlarmas(idDevice);

      }
},
    PostEnviarTicket(){
    
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

       xhr.onload = () => {
        let resp = JSON.parse(xhr.responseText)
        console.log("respuesta info alarma",resp);
        console.log(data);

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
  background-color: #d0d5db;
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
</style>