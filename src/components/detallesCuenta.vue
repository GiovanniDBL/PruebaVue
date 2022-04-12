<template>
    <div>
    <sidebar></sidebar>
    <section class="home animated fadeIn">
        <h1>{{txtIDcuenta}}</h1>
        <h1>{{txtNombre}}</h1>
        <h1>{{txtCuenta}}</h1>
        <h1>{{txtStatus}}</h1>
        <h1>{{txtDireccion}}</h1>
        <h1>{{txtCorreo}}</h1>
        <h1>{{txtTel1}}</h1>
        <h1>{{txtTel2}}</h1>

   
    </section>
    </div>
</template>

<script>
import sidebar from './Sidebar';
export default {
    name: "detallesCuentaComponent",
     components: {
    sidebar
  },
  data(){
      return{
          cuentaID:null,
          GlobalApi:this.globalVar,
          txtIDcuenta:'',
          txtNombre:'',
          txtCuenta:'',
          txtStatus:'',
          txtDireccion:'',
          txtCorreo:'',
          txtTel1:'',
          txtTel2:'',
   
      }
  },
  mounted(){
      this.cuentaID = this.$route.params.id;
      this.getInfoCuenta();
  },
  methods:{
       getInfoCuenta(){
    
  var data = {
  "typeFunction": "getDatasCuenta",
  "idsCuenta": this.cuentaID,
  "idUser": 1,
  }

  const xhr = new XMLHttpRequest();
       xhr.open(
        "POST",
        this.GlobalApi+'cuentas',
      );
      xhr.setRequestHeader("Content-Type", "multipart/form-data");
      xhr.send(JSON.stringify(data));

       xhr.onload = () => {
        let resp = JSON.parse(xhr.responseText)
        console.log("respuesta info cuentas",resp);
        var json=resp; 



          for (var index in json){
              //   var date=json[index]["timeAlarm"];
        //   var stillUtc = moment.utc(date).toDate();
        //   var local = moment(stillUtc).local().format('DD/MM/YYYY HH:mm:ss');
          var idsCuent=json[index]["idsCuent"];
          var nombreContacto=json[index]["nombreContacto"];
          var sCuentName=json[index]["sCuentName"];
          var sCuentStatus=json[index]["sCuentStatus"];
          var sCuentaDir=json[index]["sCuentaDir"];
          var suCuentaCorreo=json[index]["suCuentaCorreo"];
          var subCuentaTelefono=json[index]["subCuentaTelefono"];
          var subCuentaTelefono2=json[index]["subCuentaTelefono2"];
        }
          this.txtIDcuenta=idsCuent;
          this.txtNombre=nombreContacto;
          this.txtCuenta=sCuentName;
          this.txtStatus=sCuentStatus;
          this.txtDireccion=sCuentaDir;
          this.txtCorreo=suCuentaCorreo;
          this.txtTel1=subCuentaTelefono;
          this.txtTel2=subCuentaTelefono2;

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
</style>