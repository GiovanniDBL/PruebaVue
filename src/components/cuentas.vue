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
                            <!-- <a class="navbar-brand"> <i class="fad fa-users icon"></i> Cuentas <span class="span-brand">ATMsense</span></a> -->
                            <a class="navbar-brand"> <i class="fad fa-users icon"></i> Cuentas </a>
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">

                                <li class="nav-item">
                                    <!-- <div class="btn-group btn-group-sm" style=" margin-right: 1rem;" role="group" aria-label="Basic mixed styles example"> -->
                                    <div class="btn-group " style=" margin-right: 1rem;" role="group" aria-label="Basic mixed styles example">
                                        <button data-bs-toggle="modal" data-bs-target="#exampleModal" type="button" class="btn btn-success"> <i class="fas fa-user-plus"></i> Agregar nueva cuenta</button>
                                    </div>
                                    <!-- <a class="nav-link" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fas fa-user-plus"></i> Añadir cuenta</a> -->
                                </li>
                            </ul>
                            <form class="d-flex">
                                <!-- <input class="form-control me-2" type="search" placeholder="Buscar Dispositivos" aria-label="Search"> -->
                                <input class="form-control me-2" type="text" v-model="search" placeholder="Buscar..." aria-label="Search">
                                <button class="btn btn-secondary" type="submit" disabled><i class="fas fa-search"></i></button>

                            </form>
                        </div>
                    </div>
                </nav>

            </div>
            <div class="card-body">

                <!-- //TODO SELECT PRUEBA -->
                <!-- <div class="col-lg-4 offset-2">
                                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="registros">Registros</span>
                  </div>
                  <div class="col-sm-6">
                  <select class="form-control" id="numRowsEvents" @change="getAllAccounts(1)">
                    <option value="1" selected>15</option>

                      <option value="20">20</option>
                      <option value="30">30</option>
                      <option value="40">40</option>
                      <option value="50">50</option>
                    </select>
                  </div>
                </div>
             </div> -->
                <!-- //TODO SELECT PRUEBA -->

                <div class="tab-content" id="pills-tabContent">
                    <div class="scrollable">
                        <!-- <div v-if="filterDataAccounts == 0 " class="alert animated fadeIn fast" role="alert">
                                No existen resultados con el termino: <span style="color:#ffc107">{{search}}</span>
                            </div> -->
                        <!-- <table cellspacing="1" cellpadding="1" class="table table-success  table-bordered   table-hover  table-striped table-borderless table-tamaño" > -->
                              <div v-if="totalCuentas == 0" style="color:#ffffffcc" class="alert animated fadeIn fast" role="alert">
                                    No existen cuentas en estos momentos <i class="fas fa-exclamation-circle"></i>
                                </div>
                        <table cellspacing="1" cellpadding="1" class="table table-tamaño table-hover">
                            <thead class="">
                                <tr class="t-head-table">
                                    <th scope="col">ID_cuenta</th>
                                    <th scope="col">Nombre de cuenta</th>
                                    <th scope="col">Correo</th>
                                    <!-- <th scope="col">Dirección</th> -->
                                    <th scope="col">Teléfono</th>
                                    <th scope="col">Acciones</th>
                                    <!-- <th scope="col">Correo</th> -->
                                </tr>
                            </thead>

                            <tbody>
                                <tr class="t-body-table" v-for="item in itemsAccounts" :key="item.idsCuent">
                                    <th scope="row">{{item.idsCuent}}</tH>
                                    <td>{{item.sCuentName}}</td>
                                    <td>{{item.suCuentaCorreo}} </td>
                                    <!-- <td>{{item.sCuentaDir}}</td> -->
                                    <td>{{item.subCuentaTelefono}}</td>
                                    <td>
                                        <button class="btn btn-success " v-on:click="detalles(item.idsCuent)">
                                            <i class="fas fa-receipt"></i>
                                        </button>
                                        <button style="margin:0 5px 0 5px" v-on:click="DatosModalEditar(item)" data-bs-toggle="modal" data-bs-target="#exampleModalEditar" class="btn btn-warning ">
                                            <i class="fas fa-edit"></i>
                                        </button>
                                        <button class="btn btn-danger " v-on:click="EliminarCuenta(item.idsCuent)">
                                            <i class="fas fa-trash-alt"></i>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>

                            <!-- <nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item"><a class="page-link text-primary"  v-on:click="changePageEvent(pageEvent-1)">Previous</a></li>
    <li class="page-item"><a v-if="pageEvent>1" v-on:click="changePageEvent(1)" class="page-link">1</a></li>
    <li class="page-item active"><a class="page-link">{{pageEvent}}</a></li>
    <li class="page-item" v-for="(itemLi, index) in newPagesLiEvents" v-bind:key="index"><a v-if="itemLi.newPage!=pagesEvents" v-on:click="changePageEvent(itemLi.newPage)" class="page-link text-primary">{{itemLi.newPage}} </a></li>
     <li class="page-item"><a class="page-link text-primary" v-if="pageEvent!=pagesEvents"  v-on:click="changePageEvent(pagesEvents)">{{pagesEvents}}</a></li>
    <li class="page-item"><a class="page-link text-primary"  v-on:click="changePageEvent(pageEvent+1)">Next</a></li>
  </ul>
</nav> -->
                        </table>

                    </div>
                </div>
            </div>
        </div>
    </section>

    <!--//? ************* Modal Nueva Cuenta********************** -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Nueva Cuenta</h5>
                    <button type="button"  class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form class="row" v-on:submit.prevent="NuevaCuenta">

                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Nombre de la cuenta</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1"  v-model="FormNombre" placeholder="Nombre de cuenta" required>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput2" class="form-label">Correo electrónico</label>
                            <input type="email" class="form-control" id="exampleFormControlInput2" v-model="FormCorreo" placeholder="Correo electrónico" required>
                        </div>
                        <!-- <div class="mb-3">
  <label for="exampleFormControlInput3" class="form-label">Dirección</label>
  <input type="text" class="form-control" id="exampleFormControlInput3"  v-model="FormDireccion" placeholder="Dirección" required>
</div> -->
                        <div class="mb-3">
                            <label for="exampleFormControlInput4" class="form-label">Teléfono</label>
                            <input type="text" class="form-control" id="exampleFormControlInput4" v-model="FormTelefono" placeholder="Teléfono" required>
                        </div>
                        <div class="mb-3">
                            <button style="width:100%" data-bs-dismiss="modal" class="btn btn-success">Enviar</button>
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
    <!--//? ************* Modal Editar cuenta********************** -->
    <div class="modal fade" id="exampleModalEditar" data-bs-backdrop="static" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Editar Cuenta</h5>
                    <button type="button"  v-on:click="CerrarModal()" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form class="row" v-on:submit.prevent="EditarCuenta">

                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Nombre de la cuenta</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" v-model="FormNombre" placeholder="Nombre de cuenta" required>
                        </div>
                     
                        <div class="mb-3">
                            <label for="exampleFormControlInput2" class="form-label">Correo electrónico</label>
                            <input type="email" class="form-control" id="exampleFormControlInput2" v-model="FormCorreo" placeholder="Correo electrónico" required>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput4" class="form-label">Teléfono</label>
                            <input type="text" class="form-control" id="exampleFormControlInput4" v-model="FormTelefono" placeholder="Teléfono" required>
                        </div>
                               <div class="mb-3">
                        <label for="validationCustom04" class="form-label">Estado de cuenta</label>
                        <select class="form-select" id="validationCustom04" v-model="FormEstadoCuenta" required>
                            <option selected disabled value="">Seleccionar estado de cuenta</option>
                            <option value="1">Activo</option>
                            <option value="0">Inactivo</option>
                        </select>
                    </div>
                        <div class="mb-3">
                            <button style="width:100%" data-bs-dismiss="modal" class="btn btn-success">Enviar</button>
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
</div>
</template>

<script>
import sidebar from './Sidebar';
import Swal from 'sweetalert2';
export default {
    name: "cuentaComponent",
    components: {
        sidebar
    },
    data() {
        return {
            itemsAccounts: [],
            search: '',
            GlobalApi: this.globalVar,
            id_usuario: localStorage.getItem('id_usuario'),
            id_cPrincipal: localStorage.getItem('id_cPrincipal'),
            id_tipoUsuario: localStorage.getItem('id_tipousuario'),
            FormNombre: '',
            FormCorreo: '',
            FormDireccion: '',
            FormTelefono: '',
            FormEstadoCuenta:'',
            perPage: '',
            newPagesLiEvents: [], //array que forma la paginacion
            page: 1, //determinar cual es la siguiente página o movimiento
            pageEvent: 1, //página actual
            pages: 0,
            pagesEvents: 0,
            adjacents: 2, //determinar cuantos cuadritos en la paginacion
            newPagesLi: [],
            newPagesLiEvents: [],
            totalPages: 0,
            totalPagesEvent: 0,
            perPage: 0,
            idEditt: '',
            totalCuentas:''

        }
    },
    computed: {
        filterDataAccounts() {
            return this.itemsAccounts.filter(blog => {

                // return blog.sCuentName.toLowerCase().includes(this.search.toLowerCase())
                // return blog.sCuentName.toLowerCase().includes(this.search.toLowerCase()) ||
                //     blog.idsCuent.toString().toLowerCase().includes(this.search.toLowerCase()) || blog.sCuentStatus.toString().toLowerCase().includes(this.search.toLowerCase())
            });
        }

    },
    mounted() {
        this.getAllAccounts(1);

    },
    methods: {
        //       changePageEvent(page){    

        // this.pageEvent = (page <=0 || page >this.pagesEvents) ? this.pageEvent : page;

        // console.log("Pagina nueva",this.pageEvent);
        // if(page>0){
        // this.newPagesLiEvents.length =0;
        // let limitLi=this.pageEvent+this.adjacents;

        // let pmax = (this.pageEvent<(this.pagesEvents-this.adjacents)) ? (this.pageEvent+this.adjacents) : this.pagesEvents;

        // for (var i = this.pageEvent; i <= pmax; i++) {
        //   let newLi= page++;
        //   if(newLi != this.pageEvent){
        //     console.log(newLi);
        //  this.newPagesLiEvents.push({
        //      "newPage":newLi
        //    })
        //   }

        // }
        // this.getAllAccounts(this.pageEvent);
        // }

        // },
        getAllAccounts(p) {
            // this.itemsAccounts.length = 0
            // let perPageSelected=document.getElementById("numRowsEvents");
            //     console.log("el valor es ", perPageSelected.value);
            //     this.perPage=perPageSelected.value;

            // var data = {
            //     "typeFunction": "GetAllSubAcc",
            //     "cPrincipal": this.id_cPrincipal,
            //     "idUser": this.id_usuario,
            //     "page": p,
            //     "perPage": this.perPage,
            // };
            var data = {
                "typeFunction": "GetAllSubAcc",
                "cPrincipal": this.id_cPrincipal,
                "idUser": this.id_usuario,
                "page": 1,
                "perPage": 20,
            };
            const xhr = new XMLHttpRequest();
            xhr.open(
                "POST",
                this.GlobalApi + 'cuentas',
            );

            xhr.setRequestHeader("Content-Type", "multipart/form-data");
            xhr.send(JSON.stringify(data));
            console.log(data);
            xhr.onload = () => {
                let resp = JSON.parse(xhr.responseText);
                console.log("xml request all acounts", resp);
                var json = resp.data;
                this.totalCuentas = json.length;

                for (var index in json) {
                    // console.log('asdasdasda',json[index]["sCuentName"]);

                    this.itemsAccounts.push({
                        idsCuent: json[index]["idsCuent"],
                        sCuentName: json[index]["sCuentName"],
                        suCuentaCorreo: json[index]["suCuentaCorreo"],
                        sCuentaDir: json[index]["sCuentaDir"],
                        subCuentaTelefono: json[index]["subCuentaTelefono"],
                        subCuentaCuidad: json[index]["subCuentaCuidad"],
                    });

                }
                console.log("array", this.itemsAccounts);

                // TODO PAGINATION CODIGO PRUEBA
                //                            this.pagesEvents=resp.totalPages;
                //                            console.log(this.pagesEvents);

                //      this.newPagesLiEvents.length =0;
                // let page=this.pageEvent;

                // let limitLi=this.pageEvent+this.adjacents;

                // let pmax = (this.pageEvent<(this.pagesEvents-this.adjacents)) ? (this.pageEvent+this.adjacents) : this.pagesEvents;

                // for (var i = this.pageEvent; i <= pmax; i++) {
                //   let newLi= page++;
                //   if(newLi != this.pageEvent){
                //  this.newPagesLiEvents.push({
                //      "newPage":newLi
                //    })
                //   }

                // }

                // TODO **************
            }

        },
        detalles(id) {
            console.log(id);
            this.$router.push('/detallesDeCuenta/' + id)
        },
        NuevaCuenta() {
            var data = {
                "typeFunction": "createCuenta",
                "cPrincipal": this.id_cPrincipal,
                "idUser": this.id_usuario,
                "nombreCuenta": this.FormNombre,
                "correo": this.FormCorreo,
                // "direccion": this.FormDireccion,
                "tel": this.FormTelefono,
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
                console.log(data);
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
                        this.FormNombre = '';
                        this.FormCorreo = '';
                        this.FormDireccion = '';
                        this.FormTelefono = '';
                       

                    });

                    var json = resp;
                    var id = json["insertId"] /* valor agarrado de la respuesta del servidor */

                    let jSON = {
                        idsCuent: id,
                        sCuentName: this.FormNombre,
                        suCuentaCorreo: this.FormCorreo,
                        sCuentaDir: this.FormDireccion,
                        subCuentaTelefono: this.FormTelefono,
                    };
                    this.itemsAccounts.splice(0, 0, jSON);
                }

            }
        },
        DatosModalEditar(item){

this.idEditt = item.idsCuent;
this.FormNombre = item.sCuentName;
this.FormCorreo = item.suCuentaCorreo;
this.FormTelefono = item.subCuentaTelefono;
        },
        CerrarModal(){
             this.FormNombre = '';
                        this.FormCorreo = '';
                        this.FormTelefono = '';
        },
        EditarCuenta(id){
             var data = {
                "typeFunction": "editarCuenta",
                "idUser": this.id_usuario,
                "nombreCuenta": this.FormNombre,
                "cuentaStatus": this.FormEstadoCuenta,
                "correo": this.FormCorreo,
                "tel": this.FormTelefono,
                "idCuenta": this.idEditt
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
                console.log("respuesta EditarCuenta", resp);
                console.log(data);

                
                    Swal.fire({
                        icon: 'success',
                        title: 'Cuenta editada correctamente',
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        }
                    }).then((result) => {
                        this.FormNombre = '';
                        this.FormCorreo = '';
                        this.FormTelefono = '';

    if (result.isConfirmed) {
                        this.itemsAccounts.length = 0;
                        this.getAllAccounts();
                        // console.log('asd');
                    }
                    });


            }
        },
        EliminarCuenta(id) {

            Swal.fire({
                icon: 'warning',
                title: '¿Eliminar Cuenta?',
                text: 'El usuario se eliminará de tu lista de cuentas y no podrás recuperarlo.',
                allowOutsideClick: false,
                showCancelButton: true,
                confirmButtonColor: '#157347',
                confirmButtonText: 'Confirmar',
                cancelButtonColor: '#dc3545',
                cancelButtonText: 'Cancelar',
            }).then((result) => {
                if (result.isConfirmed) {
                    var data = {
                        "typeFunction": "deleteCuenta",
                        "idUser": this.id_usuario,
                        "typeUserLoged": this.id_tipoUsuario,
                        "idCuenta": id
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
                        console.log("respuesta EliminarCuenta", resp);
                        //    console.log(id);

                    }

                         Swal.fire('Cuenta eliminada correctamente', '', 'success').then((result) => {
                    if (result.isConfirmed) {
                        this.itemsAccounts.length = 0;
                        this.getAllAccounts();
                        // console.log('asd');
                    }
                })
                }
           
            })

        }
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
    background: #1a2130;
    /* background: #27293d; */
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
    /* color: #ffffffb3; */
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

.t-head-table {
    font-size: 13px;
    text-transform: uppercase;
    /* color: #ffffff99; */
    /* color: #ffffffbd; */
    color: #ffffffb3;
}

.t-body-table {
    font-size: 15px;
    /* color: #ffffffbd; */
}

.modal-content {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    pointer-events: auto;
    background-color: #26283b;
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
    background-color: #222332 !important;
    border: 1px solid #2b3553;

}

/* .form-select:focus {

  border-color: #28a745;
        box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
} */
.modal input {
    background-color: #222332 !important;
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

option {
    background-color: #fff;
    color: #000;
}

option:hover {
    background-color: #fff;
    color: #000;
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
