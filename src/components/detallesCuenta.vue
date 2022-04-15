<template>
<div>
    <sidebar></sidebar>
    <section class="home animated fadeIn">
        <!-- <h1>{{txtIDcuenta}}</h1>
        <h1>{{txtNombre}}</h1> /* //*listo*/
        <h1>{{txtCuenta}}</h1> /* //*listo*/
        <h1>{{txtDireccion}}</h1>/* //*listo*/
        <h1>{{txtCorreo}}</h1>/* //*listo*/
        <h1>{{txtTel1}}</h1>/* //*listo*/
        <h1>{{txtTel2}}</h1>/* //*listo*/
        <h1>{{txtFechaAlta}}</h1> /* //*listo*/
        <h1>{{txtCodigoP}} <span v-if="txtCodigoP == null">77510</span></h1>
        <h1>{{txtCiudad}} <span v-if="txtCiudad == null">Cancún</span></h1> /* //*listo*/
        <h1>{{txtEstado}} <span v-if="txtEstado == null">Quintana Roo</span></h1> /* //*listo*/
        <h1>{{txtPais}} <span v-if="txtPais == null">México</span></h1> /* //*listo*/ -->

        <div class="card" style="width:45rem;">
            <div class="card-header text-center">
                <!-- <img class="card-img-top img-fluid" style="width:30%;border-radius:50%;" src="../assets/logo.webp" alt="imagen"> -->
                <img class="card-img-top img-fluid" src="https://demos.creative-tim.com/vue-black-dashboard/img/anime6.png" alt="imagen">
                <h4 class="card-title">{{txtNombre}} <br> <span style="">{{txtCuenta}}</span></h4>
            </div>
            <div class="card-body ">

                <!-- <p class="card-text">Dirección <br> <span>{{txtDireccion}}</span></p>
                                                  <p class="card-text">E-mail <br> <span>{{txtCorreo}}</span></p>
                                                  <p class="card-text">Teléfono(opción1) <br> <span>{{txtTel1}}</span></p>
                                                  <p class="card-text">Teléfono(opción2) <br> <span>{{txtTel2}}</span></p>
                                                  <p class="card-text">Fecha de alta <br> <span>{{txtFechaAlta}} <span v-if="txtFechaAlta == null">14/04/2022</span></span></p>
                                                  <p class="card-text">Código postal <br> <span>{{txtCodigoP}} <span v-if="txtCodigoP == null">77510</span></span></p> -->
                <form class="row g-3 needs-validation" novalidate>
                    <div class="col-md-4">
                        <label for="validationCustom01" class="form-label">Dirección</label>
                        <input type="text" class="form-control" id="validationCustom01" v-model="txtDireccion" disabled>
                    </div>
                    <div class="col-md-4">
                        <label for="validationCustom02" class="form-label">Correo electrónico</label>
                        <input type="text" class="form-control" id="validationCustom02" v-model="txtCorreo" disabled>
                    </div>
                  <div class="col-md-4">
                        <label for="validationCustom02" class="form-label">Fecha de alta</label>
                        <input type="text" class="form-control" id="validationCustom02" v-model="txtFechaAlta" disabled>
                    </div>
                    <div class="col-md-4">
                        <label for="validationCustom02" class="form-label">País</label>
                        <input type="text" class="form-control" id="validationCustom02" v-model="txtPais" disabled>
                    </div>
                  <div class="col-md-4">
                        <label for="validationCustom02" class="form-label">Estado</label>
                        <input type="text" class="form-control" id="validationCustom02" v-model="txtEstado" disabled>
                    </div>
                  <div class="col-md-4">
                        <label for="validationCustom02" class="form-label">Ciudad</label>
                        <input type="text" class="form-control" id="validationCustom02" v-model="txtCiudad" disabled>
                    </div>
                  <div class="col-md-4">
                        <label for="validationCustom02" class="form-label">Teléfono(opción1)</label>
                        <input type="text" class="form-control" id="validationCustom02" v-model="txtTel1" disabled>
                    </div>
                  <div class="col-md-4">
                        <label for="validationCustom02" class="form-label">Teléfono(opción2)</label>
                        <input type="text" class="form-control" id="validationCustom02" v-model="txtTel2" disabled>
                    </div>
                  <div class="col-md-4">
                        <label for="validationCustom02" class="form-label">Código postal</label>
                        <input type="text" class="form-control" id="validationCustom02" v-model="txtCodigoP" disabled>
                    </div>
                  
                </form>

                <!-- <p class="card-text">
                    <small>
                        {{txtPais}} <span v-if="txtPais == null">México,
                            {{txtCiudad}} <span v-if="txtCiudad == null">Cancún</span>
                            {{txtEstado}} <span v-if="txtEstado == null">Quintana Roo</span>
                        </span>
                    </small>

                </p> -->
            </div>
        </div>
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
    data() {
        return {
            cuentaID: null,
            GlobalApi: this.globalVar,
            txtIDcuenta: '',
            txtNombre: '',
            txtCuenta: '',
            txtDireccion: '',
            txtCorreo: '',
            txtTel1: '',
            txtTel2: '',
            txtFechaAlta: '',
            txtCodigoP: '',
            txtCiudad: '',
            txtEstado: '',
            txtPais: '',
        }
    },
    mounted() {
        this.cuentaID = this.$route.params.id;
        this.getInfoCuenta();
    },
    methods: {
        getInfoCuenta() {

            var data = {
                "typeFunction": "getDatasCuenta",
                "idsCuenta": this.cuentaID,
                "idUser": 1,
            }

            const xhr = new XMLHttpRequest();
            xhr.open(
                "POST",
                this.GlobalApi + 'cuentas',
            );
            xhr.setRequestHeader("Content-Type", "multipart/form-data");
            xhr.send(JSON.stringify(data));

            xhr.onload = () => {
                let resp = JSON.parse(xhr.responseText)
                console.log("respuesta info cuentas", resp);
                var json = resp;

                for (var index in json) {
                    //   var date=json[index]["timeAlarm"];
                    //   var stillUtc = moment.utc(date).toDate();
                    //   var local = moment(stillUtc).local().format('DD/MM/YYYY HH:mm:ss');
                    var idsCuent = json[index]["idsCuent"];
                    var nombreContacto = json[index]["nombreContacto"];
                    var sCuentName = json[index]["sCuentName"];
                    var suCuentaCorreo = json[index]["suCuentaCorreo"];
                    var subCuentaTelefono = json[index]["subCuentaTelefono"];
                    var subCuentaTelefono2 = json[index]["subCuentaTelefono2"];
                    var sCuentaDir = json[index]["sCuentaDir"];
                    // var sCuentaAltaDate = json[index]["sCuentaAltaDate"];
                    var sCuentaUserAlta = json[index]["sCuentaUserAlta"];
                    var subCuentaCodPos = json[index]["subCuentaCodPos"];
                    var subCuentaCuidad = json[index]["subCuentaCuidad"];
                    var subCuentaEstado = json[index]["subCuentaEstado"];
                    var subCuentaPais = json[index]["subCuentaPais"];

                }
                this.txtIDcuenta = idsCuent;
                this.txtNombre = nombreContacto;
                this.txtCuenta = sCuentName;
                this.txtDireccion = sCuentaDir;
                this.txtCorreo = suCuentaCorreo;
                this.txtTel1 = subCuentaTelefono;
                this.txtTel2 = subCuentaTelefono2;
                this.txtFechaAlta = sCuentaUserAlta;
                this.txtCodigoP = subCuentaCodPos;
                this.txtCiudad = subCuentaCuidad;
                this.txtEstado = subCuentaEstado;
                this.txtPais = subCuentaPais;

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

.home .text {
    font-size: 30px;
    font-weight: 500;
}

.card {
    background: #27293d;
    color: #fff;
    display: block;
    margin: 0 auto;
}

.card-header {
    color: #fff;
    border-bottom: 0;
    
}

img {
    width: 124px;
    height: 124px;
    border: 5px solid #2b3553;
    border-bottom-color: transparent;
    background-color: transparent;
    position: relative;
    border-radius: 50%;
    max-width: 100%;
}

h4 {
    font-size: 1.2rem;
}

h4 span {
    font-size: 1.5rem;
}

.list-group-item {
    background-color: #27293d;
    color: #fff;
    border: 0;
}
input {
    background-color: #222434 !important;
    border: 1px solid #2b534d !important;
   color: #ffffff99;
}
label{
  color: #ffffff99;
}
/* input:focus {

    color: #fff;
} */
</style>
