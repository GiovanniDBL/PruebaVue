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
                            <a class="navbar-brand">Cuentas <span class="span-brand">ATMsense</span></a>
                              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">

                                <li class="nav-item">
                                    <a class="nav-link" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fas fa-user-plus"></i> Añadir cuenta</a>
                                </li>
                            </ul>
                            <form class="d-flex">
                                <!-- <input class="form-control me-2" type="search" placeholder="Buscar Dispositivos" aria-label="Search"> -->
                                <input class="form-control me-2" type="text" v-model="search" placeholder="Buscar Cuenta" aria-label="Search">
                                <button class="btn btn-outline-success" type="submit" disabled><i class="fas fa-search"></i></button>
                            </form>
                        </div>
                    </div>
                </nav>

                <div class="card-body">
                    <div class="tab-content" id="pills-tabContent">
                        <div class="scrollable">
                            <div v-if="filterDataAccounts == 0 " class="alert animated fadeIn fast" role="alert">
                                No existen resultados con el termino: <span style="color:#ffc107">{{search}}</span>
                            </div>
                            <!-- <table cellspacing="1" cellpadding="1" class="table table-success  table-bordered   table-hover  table-striped table-borderless table-tamaño" > -->
                            <table cellspacing="1" cellpadding="1" class="table table-tamaño table-hover">
                                <thead class="">
                                    <tr class="t-head-table">
                                        <th scope="col">ID_cuenta</th>
                                        <th scope="col">Nombre de cuenta</th>
                                        <th scope="col">Contacto</th>
                                         <th scope="col">País</th>
                                        <th scope="col">Estado</th>
                                        <th scope="col">Ciudad</th>
                                        <th scope="col">Opciones</th>
                                        <!-- <th scope="col">Correo</th> -->
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="t-body-table" v-for="item in filterDataAccounts" :key="item.idsCuent">
                                        <th scope="row">{{item.idsCuent}}</tH>
                                        <td>{{item.sCuentName}}</td>
                                        <td>{{item.nombreContacto}} <span v-if="item.nombreContacto == null">Jose Perez</span> </td>
                                        <td>{{item.subCuentaPais}} <span v-if="item.subCuentaPais == null">México</span></td>
                                        <td>{{item.subCuentaEstado}} <span v-if="item.subCuentaEstado == null">Quintana Roo</span></td>
                                        <td>{{item.subCuentaCuidad}} <span v-if="item.subCuentaCuidad == null">Cancún</span></td>
                                        
                                        <!-- <td>{{item.suCuentaCorreo}}</td> -->
                                        <td>

                                            <!-- <button class="btn btn-outline-info" v-on:click="detalles(item.idsCuent)">Detalles</button> -->
                                            <i type="button" v-on:click="detalles(item.idsCuent)" style="font-size:1.2rem;color:#1aba97" class="fas fa-list"></i>

                                            <!-- <button class="btn btn-danger">Baja</button> -->
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
</div>
</template>

<script>
import sidebar from './Sidebar';
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

        }
    },
    computed: {
        filterDataAccounts() {
            return this.itemsAccounts.filter(blog => {

                return blog.sCuentName.toLowerCase().includes(this.search.toLowerCase())
                // return blog.sCuentName.toLowerCase().includes(this.search.toLowerCase()) ||
                //     blog.idsCuent.toString().toLowerCase().includes(this.search.toLowerCase()) || blog.sCuentStatus.toString().toLowerCase().includes(this.search.toLowerCase())
            });
        }
    },
    mounted() {
        this.getAllAccounts();
    },
    methods: {
        getAllAccounts() {

            var data = {
                "typeFunction": "GetAllSubAcc",
                "cPrincipal": 1,
                "idUser": 1,
                "page": 1,
                "perPage": 10,
            };
            const xhr = new XMLHttpRequest();
            xhr.open(
                "POST",
                this.GlobalApi + 'cuentas',
            );

            xhr.setRequestHeader("Content-Type", "multipart/form-data");
            xhr.send(JSON.stringify(data));

            xhr.onload = () => {
                let resp = JSON.parse(xhr.responseText);
                console.log("xml request all devices", resp);
                var json = resp;

                for (var index in json) {
                    // console.log('asdasdasda',json[index]["sCuentName"]);

                    this.itemsAccounts.push({
                        idsCuent: json[index]["idsCuent"],
                        sCuentName: json[index]["sCuentName"],
                        nombreContacto: json[index]["nombreContacto"],
                        subCuentaPais: json[index]["subCuentaPais"],
                        subCuentaEstado: json[index]["subCuentaEstado"],
                        subCuentaCuidad: json[index]["subCuentaCuidad"],
                    });

                }
                console.log("array", this.itemsAccounts);
            }
        },
        detalles(id) {
            console.log(id);
            this.$router.push('/detallesDeCuenta/' + id)
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
    background: #27293d;
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
    letter-spacing:2px;
    font-weight: bold;
    
}
.span-brand{
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
    color: #ffffffbd;
}

.t-body-table {
    font-size: 15px;
    /* color: #ffffffbd; */
}

@media only screen and (min-width: 1800px) {
    .scrollable {
        height: 810px;
        overflow: scroll;
    }
}
</style>
