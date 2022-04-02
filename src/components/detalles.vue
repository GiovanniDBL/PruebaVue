<template>



<div class="card" style="width: 30rem;">
  <div class="card-body">
<ul class="list-group list-group-flush">
      <li class="list-group-item d-flex justify-content-between align-items-center">
    ID
    <span class="">{{alarmaID}}</span>
  </li>
 <li class="list-group-item d-flex justify-content-between align-items-center">
    Cuenta
    <span class="">{{txtCuenta}}</span>
  </li>
 <li class="list-group-item d-flex justify-content-between align-items-center">
    Dirección
    <span class="">{{txtDireccion}}</span>
  </li>
 <li class="list-group-item d-flex justify-content-between align-items-center">
    Ciudad
    <span class="">{{txtCiudad}}</span>
  </li>
 <li class="list-group-item d-flex justify-content-between align-items-center">
    Código postal
    <span class="">77510</span>
  </li>
 <li class="list-group-item d-flex justify-content-between align-items-center">
    Tipo de alarma
    <span class="">{{txtTypoAlarma}}</span>
  </li>
 <li class="list-group-item d-flex justify-content-between align-items-center">
    Fecha
    <span class="">{{txtTimeAlarma}}</span>
  </li>
 <li class="list-group-item d-flex justify-content-between align-items-center">
    Estado
    <span class="">Pendiente</span>
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
</ul>
<div class="tab-content" id="myTabContent">

  <!-- *CONTACTOS -->
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
<table cellspacing="1" cellpadding="1" class="table table-info  table-sm   table-hover  table-striped  table-tamaño">
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
    <table cellspacing="1" cellpadding="1" class="table table-info  table-sm   table-hover  table-striped  table-tamaño">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
  </div>
  <!-- *NOTAS -->
  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">lorem</div>
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
            contactosAlarma:[],
            historialAlarmas:[],
        }
    },
    methods:{
        
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
      //  var statusAlarma=document.getElementById("select-statusA");

      //  var opt = document.createElement('option');
      //  opt.value = idstatusAlarmas;
      //  opt.text = nombreStatus;
      //  statusAlarma.add(opt);

       this.getContactosAlarma(idUbic);
       this.getHistorialAlarmas(idDevice);

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
</style>