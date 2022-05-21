<template>
<div>
    <sidebar></sidebar>
    <section class="home animated fadeIn">
        <div class="card text-center">
            <div class="card-header">
                <nav class="navbar navbar-expand-lg ">
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                            <!-- <a class="navbar-brand"><i class="fas fa-users-class icon"></i> SubCuentas <span class="span-brand">ATMSense</span></a> -->
                            <a class="navbar-brand"><i class="fas fa-users-class icon"></i> SubCuentas</a>
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">

                                <li class="nav-item">
                                    <div class="btn-group " style=" margin-right: 1rem;" role="group" aria-label="Basic mixed styles example">
                                        <button data-bs-toggle="modal" data-bs-target="#exampleModalSensor" type="button" class="btn btn-success" disabled><i class="fas fa-plus-circle"></i> Añadir nuevo sensor</button>
                                    </div>
                                </li>

                                <li class="nav-item">
                                    <!-- <a class="nav-link position-relative" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        <i class="fas fa-user-plus"></i>
                                    Añadir subcuenta
                                     </a> -->

                                    <div class="btn-group " style=" margin-right: 1rem;" role="group" aria-label="Basic mixed styles example">
                                        <button data-bs-toggle="modal" data-bs-target="#exampleModal" type="button" class="btn btn-success"> <i class="fas fa-user-plus"></i> Agregar nueva subcuenta</button>
                                    </div>
                                </li>
                            </ul>
                            <form class="d-flex">

                                <input class="form-control me-2" type="text" v-model="search" placeholder="Buscar..." aria-label="Search">
                                <button class="btn btn-secondary" type="submit" disabled><i class="fas fa-search"></i></button>
                            </form>
                        </div>
                    </div>
                </nav>

            </div>

            <div class="card-body">
                <div class="tab-content" id="pills-tabContent">
                    <div class="scrollable">
                        <!-- <div v-if="SearchFilter == false " style="color:#ffffffcc" class="alert animated fadeIn fast" role="alert">
                            No existen resultados con el termino: <span style="color:#ffc107">{{search}}</span>
                        </div>
                         <div v-if="totalSubcuentas == 0" style="color:#ffffffcc" class="alert animated fadeIn fast" role="alert">
                                    No existen subcuentas en estos momentos <i class="fas fa-exclamation-circle"></i>
                                </div> -->

                        <!-- <div v-if="filterDataSubAccounts == 0 " class="alert animated fadeIn fast" role="alert">
                            No existen resultados con el termino: <span style="color:#ffc107">{{search}}</span>
                        </div> -->

                        <table cellspacing="1" cellpadding="1" class="table table-tamaño table-hover">
                            <thead class="">
                                <tr class="t-head-table">
                                    <th scope="col">ID_Subcuenta</th>
                                    <th scope="col">Subcuenta</th>
                                    <th scope="col">País</th>
                                    <th scope="col">Estado</th>
                                    <th scope="col">Ciudad</th>
                                    <th scope="col">Cuenta_principal</th>
                                    <th scope="col">Detalles</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="t-body-table" v-for="item in filterDataSubAccounts" :key="item.idsCuent">
                                    <th scope="row">{{item.idsCuent}}</th>
                                    <td>{{item.NameUbica}}</td>
                                    <td>{{item.pais}}</td>
                                    <td>{{item.estado}}</td>
                                    <td>{{item.ciudad}}</td>
                                    <!-- <td>{{item.ciudad}} <span v-if="item.ciudad == null">Cancún</span></td> -->
                                    <td>{{item.sCuentName}}</td>
                                    <td>
                                        <!-- <button class="btn btn-outline-info" v-on:click="detalles(item.idsCuent)"> Detalles</button> -->
                                        <!-- <i type="button" v-on:click="detalles(item.idsCuent)" class="fas fa-file-user fa-bounce"></i> -->
                                        <button disabled class="btn btn-success " v-on:click="detalles(item.idsCuent)">
                                            <i class="fas fa-receipt"></i>
                                        </button>
                                        <button disabled style="margin:0 5px 0 5px" class="btn btn-warning ">
                                            <i class="fas fa-edit"></i>
                                        </button>
                                        <button disabled class="btn btn-danger ">
                                            <i class="fas fa-trash-alt"></i>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                          <!-- <div v-if="SearchFilter == false " style="color:#ffffffcc" class="alert animated fadeIn fast" role="alert">
                            No existen resultados con el termino: <span style="color:#ffc107">{{search}}</span>
                        </div> -->
                         <div v-if="totalSubcuentas == 0" style="color:#ffffffcc" class="alert animated fadeIn fast" role="alert">
                                    No existen subcuentas en estos momentos <i class="fas fa-exclamation-circle"></i>
                                </div>
                    </div>
                </div>
            </div>

        </div>
    </section>

</div>

<!--//? ************* Modal ********************** -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Nueva Subcuenta</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form class="row g-3" v-on:submit.prevent="NuevaSubcuenta">
                    <div class="col-md-6">
                        <label for="validationCustom04" class="form-label">Cuenta de vinculación</label>
                        <select class="form-select" id="validationCustom04" required v-model="FormCuenta">
                            <option selected disabled value="">Seleccione una cuenta</option>
                            <option value="1">Sisec</option>
                            <option value="19">Grupo Zigbmax</option>
                            <option value="4">Grupo Oxxo</option>
                            <option value="7">Grupo Cumbres</option>

                        </select>
                    </div>
                    <div class="col-md-6">
                        <label for="validationCustom01" class="form-label">Nombre de la Subcuenta</label>
                        <input type="text" class="form-control" placeholder="Nombre de la subcuenta" id="validationCustom01" v-model="FormNombreSub" required>
                    </div>
                    <div class="col-md-4">
                        <label for="validationCustom02" class="form-label">Dirección</label>
                        <input type="text" class="form-control" placeholder="Dirección" id="validationCustom02" v-model="FormDireccion" required>
                    </div>
                     <div class="col-md-4">
                        <label for="validationCustom04" class="form-label">País</label>
                        <select class="form-select" id="validationCustom04" v-on:change="Onchange($event)" v-model="FormPais" required>
                            <option selected disabled value="">Seleccione un país</option>
                            <option v-for="item in itemPaises" :key="item.idPais" v-bind:value="item.idPais">{{item.paisNombre}}</option>
                            <!-- <option value="42">México</option> -->

                        </select>
                    </div>
                    <div class="col-md-4">
                        <label for="validationCustom04" class="form-label">Estado</label>
                        <select class="form-select" id="validationCustom04"  v-model="FormEstado" required>
                            <option selected disabled value="">Seleccione un estado</option>
                            <option v-for="item in itemEstados" :key="item.idEstado" v-bind:value="item.idEstado">{{item.estadoNombre}}</option>
                            <!-- <option value="1589">Quintana Roo</option> -->
                        </select>
                    </div>
                    <div class="col-md-6">
                        <label for="validationCustom03" class="form-label">Ciudad</label>
                        <input type="text" class="form-control" placeholder="Nombre de la ciudad" id="validationCustom03" v-model="FormCiudad" required>
                    </div>

                    <div class="col-md-3">
                        <label for="validationCustom05" class="form-label">Código postal</label>
                        <input type="text" class="form-control" placeholder="Código postal" id="validationCustom05" v-model="FormCodigoPostal" required>
                    </div>

                    <div class="col-12 text-end">
                        <button class="btn btn-success" style="text-transform:uppercase"><i class="fas fa-paper-plane"></i> Envíar</button>
                    </div>
                </form>

            </div>
            <!-- <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div> -->
        </div>
    </div>
</div>
<!--//? ************* Modal Sensor ********************** -->
<div class="modal fade" id="exampleModalSensor" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Nuevo Sensor</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form class="row g-3" v-on:submit.prevent="NuevaCuenta">
                    <div class="col-md-6">
                        <label for="validationCustom04" class="form-label">Cuenta de vinculación</label>
                        <select class="form-select" id="validationCustom04" required v-model="FormCuenta">
                            <option selected disabled value="">Seleccione una cuenta</option>
                            <option value="1">Sisec</option>
                            <option value="19">Grupo Zigbmax</option>
                            <option value="4">Grupo Oxxo</option>
                            <option value="7">Grupo Cumbres</option>

                        </select>
                    </div>
                    <div class="col-md-6">
                        <label for="validationCustom01" class="form-label">Nombre de la Subcuenta</label>
                        <input type="text" class="form-control" placeholder="Nombre de la subcuenta" id="validationCustom01" v-model="FormNombreSub" required>
                    </div>
                    <div class="col-md-4">
                        <label for="validationCustom02" class="form-label">Dirección</label>
                        <input type="text" class="form-control" placeholder="Dirección" id="validationCustom02" v-model="FormDireccion" required>
                    </div>
                    <div class="col-md-4">
                        <label for="validationCustom04" class="form-label">Estado</label>
                        <select class="form-select" id="validationCustom04" v-model="FormEstado" required>
                            <option selected disabled value="">Seleccione un estado</option>
                            <option value="1589">Quintana Roo</option>
                        </select>
                    </div>
                    <!-- itemPaises -->
                    <div class="col-md-4">
                        <label for="validationCustom04" class="form-label">País</label>
                        <select class="form-select" id="validationCustom04" v-model="FormPais" required>
                            <option selected disabled value="">Seleccione un país</option>
                            
                            <option value="42">México</option>

                        </select>
                    </div>
                    <div class="col-md-6">
                        <label for="validationCustom03" class="form-label">Ciudad</label>
                        <input type="text" class="form-control" placeholder="Nombre de la ciudad" id="validationCustom03" v-model="FormCiudad" required>
                    </div>

                    <div class="col-md-3">
                        <label for="validationCustom05" class="form-label">Código postal</label>
                        <input type="text" class="form-control" placeholder="Código postal" id="validationCustom05" v-model="FormCodigoPostal" required>
                    </div>

                    <div class="col-12 text-end">
                        <button class="btn btn-success" style="text-transform:uppercase"><i class="fas fa-paper-plane"></i> Envíar</button>
                    </div>
                </form>

            </div>
            <!-- <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div> -->
        </div>
    </div>
</div>
</template>

<script>
import sidebar from './Sidebar'
import Swal from 'sweetalert2';
export default {
    name: "subcuentaComponent",
    components: {
        sidebar
    },
    data() {
        return {
            itemsSubAccounts: [],
            itemPaises:[],
            itemEstados:[],
            search: '',
            GlobalApi: this.globalVar,
            FormCuenta: '',
            FormNombreSub: '',
            FormDireccion: '',
            FormEstado: '',
            FormPais: '',
            FormCiudad: '',
            FormCodigoPostal: '',
            id_cPrincipal: localStorage.getItem('id_cPrincipal'),
            id_usuario: localStorage.getItem('id_usuario'),
            SearchFilter:true,
            totalSubcuentas:''

        }
    },
    computed: {
        filterDataSubAccounts() {
            // blog.ciudad.toLowerCase().includes(this.search.toLowerCase()) ||
            return this.itemsSubAccounts.filter(blog => {
                this.SearchFilter =  blog.sCuentName.toLowerCase().includes(this.search.toLowerCase()) || blog.NameUbica.toLowerCase().includes(this.search.toLowerCase()) ||
                    blog.estado.toLowerCase().includes(this.search.toLowerCase()) ||
                    blog.pais.toLowerCase().includes(this.search.toLowerCase()) || blog.idsCuent.toString().toLowerCase().includes(this.search.toLowerCase());
                return this.SearchFilter;
            });

            //     return this.itemsSubAccounts.filter(blog => {
            //     return blog.sCuentName.toLowerCase().includes(this.search.toLowerCase()) || blog.NameUbica.toLowerCase().includes(this.search.toLowerCase()) ||
            //         blog.estado.toLowerCase().includes(this.search.toLowerCase()) ||
            //         blog.pais.toLowerCase().includes(this.search.toLowerCase()) || blog.idsCuent.toString().toLowerCase().includes(this.search.toLowerCase());
            // });
        }
    },
    mounted() {
        this.getAllSubAccounts();
        this.getPaises();
        this.getEstado();
    },
    methods: {
        getAllSubAccounts() {

            var data = {
                "typeFunction": "getUbicationByIDpCuenta",
                "cPrincipal": this.id_cPrincipal,
                "idUser": this.id_usuario,
                "page": 1,
                "perPage": 10,
            };
            const xhr = new XMLHttpRequest();
            xhr.open(
                "POST",
                this.GlobalApi + 'subcuentas',
            );

            xhr.setRequestHeader("Content-Type", "multipart/form-data");
            xhr.send(JSON.stringify(data));

            xhr.onload = () => {
                let resp = JSON.parse(xhr.responseText);
                console.log("xml request all SubAccounts", resp);
                var json = resp.data;

                this.totalSubcuentas =json.length;
                console.log(this.totalSubcuentas);
                for (var index in json) {

                    this.itemsSubAccounts.push({
                        idsCuent: json[index]["idUbic"],
                        sCuentName: json[index]["sCuentName"],
                        NameUbica: json[index]["NameUbica"],
                        estado: json[index]["estadoNombre"],
                        ciudad: json[index]["nombCuidadUbic"],
                        pais: json[index]["paisNombre"],
                    });

                }
                console.log("array", this.itemsSubAccounts);
            }
        },

        NuevaSubcuenta() {

            var data = {
                "typeFunction": "crearUbication",
                "cPrincipal": 1,
                "idUser": 1,
                "IdSecCuent": this.FormCuenta,
                "NombreUbica": this.FormNombreSub,
                "dirUbic": this.FormDireccion,
                "idPais": this.FormPais,
                "idEstado": this.FormEstado,
                "nombCiudad": this.FormCiudad,
                "codPost": this.FormCodigoPostal,
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
                console.log("respuesta CuentaNueva", resp);
                if (resp["message"] == 'Internal Server Error') {
                    Swal.fire({
                        icon: 'error',
                        title: 'Hay un problema con el servidor',
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        }
                    });
                } else {

                    Swal.fire({
                        icon: 'success',
                        title: 'Cuenta creada correctamente',
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        }
                    }).then(() => {
                        this.FormCuenta = '';
                        this.FormNombreSub = '';
                        this.FormDireccion = '';
                        this.FormPais = '';
                        this.FormCiudad = '';
                        this.FormCodigoPostal = '';
                    });

                    var json = resp;
                    var id = json["insertId"] /* valor agarrado de la respuesta del servidor */

                    let jSON = {
                        idsCuent: id,
                        sCuentName: this.FormCuenta,
                        NameUbica: this.FormNombreSub,
                        estado: this.FormEstado,
                        ciudad: this.FormCiudad,
                        pais: this.FormPais,
                    };
                    this.itemsSubAccounts.splice(0, 0, jSON);
                }

            }
        },
        getPaises(){
            
            var data = {
                "typeFunction": "getPaises",
                "idUser": this.id_usuario,
            };
            const xhr = new XMLHttpRequest();
            xhr.open(
                "POST",
                this.GlobalApi + 'datasystem',
            );

            xhr.setRequestHeader("Content-Type", "multipart/form-data");
            xhr.send(JSON.stringify(data));

            xhr.onload = () => {
                let resp = JSON.parse(xhr.responseText);
                console.log("xml request all Paises", resp);
                this.itemPaises = resp;
                console.log('ArrayPaises', this.itemPaises);
            }
        },
        Onchange(event){
            this.FormPais = event.target.value;
            console.log('EVENTO SELECT', this.FormPais);
            var data = {
                "typeFunction": "getEstadosByID",
                "idUser": this.id_usuario,
                "idPais": this.FormPais,
            };
            this.getEstado(data);
        },
        getEstado(data){
            
            // var data = {
            //     "typeFunction": "getEstadosByID",
            //     "idUser": this.id_usuario,
            //     "idPais": 7,
            // };
            const xhr = new XMLHttpRequest();
            xhr.open(
                "POST",
                this.GlobalApi + 'datasystem',
            );

            xhr.setRequestHeader("Content-Type", "multipart/form-data");
            xhr.send(JSON.stringify(data));

            xhr.onload = () => {
                let resp = JSON.parse(xhr.responseText);
                console.log("xml request all Estados", resp);
                this.itemEstados = resp;
                console.log('ArrayEstados', this.itemEstados);
            }
        },
    }
}
</script>

<style scoped>
.home {
    position: relative;
    /* height: 100vh; */
    left: 88px;
    width: calc(100% - 88px);
    transition: all 0.5s ease;
    padding: 8px 40px;
    margin-top: 1rem;
}

.home .text {
    font-size: 30px;
    font-weight: 500;
}

.scrollable {
    height: 400px;
    overflow: scroll;
}

/* .scrollable::-webkit-scrollbar {
    background-color: #27293d;
}

.scrollable::-webkit-scrollbar-thumb {
    background-color: #e6e6e805;

} */

.table-tamaño {
    font-size: 12pt;
    width: 95%;
    margin-left: 2.5%;
}

.card {
    /* background: #27293d; */
    background: #1a2130;
}

.card-header {
    color: #fff;
    /* border-bottom: 0; */
}

Table {
    border-color: #ffffff1a;
}

tr {
    color: #fff;
}

.table> :not(:first-child) {
    border-top: 0px solid #ffffff1a;
    /* padding: 12px 7px; */
}

.table-hover>tbody>tr:hover>* {
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

.navbar-brand {
    color: #fff !important;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: bold;
}

.span-brand {
    color: #1abb97;
}

/* .nav-pills .nav-link.active, .nav-pills .show > .nav-link {
    color: #1abb97;
    background-color: rgba(26, 187, 151, .08);

}*/
.nav-link {
    display: block;
    padding: 0.5rem 1rem;
    color: #1abb97;
    /* color: #1de7ba; */
    background-color: rgba(26, 187, 151, .08);
    border-radius: 0.25rem;
    margin-right: 1rem;
}

.nav-link:hover {

    background-color: #00ffc833;

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

.modal-content {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    pointer-events: auto;
    background-color: #1a2130;
    /* background-color: #26283b; */
    /* background-color: #27293d; */
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 0.3rem;
    outline: 0;
}

.modal-header {
    border-bottom: 0;
    color: #ffffff;
    text-transform: uppercase;
}

.modal-header .btn-close {
    padding: 0.5rem 0.5rem;
    margin: -0.5rem -0.5rem -0.5rem auto;
    background-color: #ffffff;
}

.form-select {
    display: block;
    width: 100%;
    padding: 0.375rem 2.25rem 0.375rem 0.75rem;
    -moz-padding-start: calc(0.75rem - 3px);
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #fff;
    /* background-color: #222332 !important; */
    background-color: #212b3d !important;
    border: 1px solid #2b3553;
    /* background-image: url('../assets/flecha_select.webp') */

}

/* .form-select:focus {

  border-color: #28a745;
        box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
} */
.modal input {
    background-color: #212b3d !important;
    /* background-color: #222332 !important; */
    border: 1px solid #2b3553 !important;
    color: #fff;
}

.modal input:focus {

    color: #fff;
}

.modal-body {
    /* color: #fff; */
    color: #ffffff99;
}

/* .form-control:focus {
        border-color: #28a745;
        box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
    }  */
option {
    background-color: #fff;
    color: #000;
}

option:hover {
    background-color: #fff;
    color: #000;
}

.t-head-table {
    font-size: 13px;
    text-transform: uppercase;
    /* color: #ffffff99; */
    /* color: #ffffff; */
    /* font-weight: bold; */
     color: #ffffffb3;
}

.t-body-table {
    font-size: 15px;
    /* color: #ffffffbd; */
}

@media only screen and (min-width: 1800px) {
    .scrollable {
        height: 765px;
        overflow: scroll;
    }

    .t-head-table {
        font-size: 16px;

    }

    .t-body-table {
        font-size: 17px;

    }
}
</style>
