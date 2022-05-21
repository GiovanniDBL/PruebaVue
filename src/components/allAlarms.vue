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
                            <a class="navbar-brand"> <i  class="fas fa-bell-on icon"></i> Historial de alarmas </a>
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">

                                <li class="nav-item">
                                    <!-- <div class="btn-group btn-group-sm" style=" margin-right: 1rem;" role="group" aria-label="Basic mixed styles example"> -->
                                    <div class="btn-group " style=" margin-right: 1rem;" role="group" aria-label="Basic mixed styles example">
                                        <button @click="PDF_Actividad" data-bs-toggle="modal" data-bs-target="#exampleModal" type="button" class="btn btn-success btn-successs"> <i type="button" class="fas fa-download"></i> Descargar PDF</button>
                                    </div>
                                    <!-- <a class="nav-link" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fas fa-user-plus"></i> Añadir cuenta</a> -->
                                </li>
                                <li class="nav-item">
                                    <div style=" margin-right: 1rem;">
                                        <select class="form-select" aria-label="Default select example" id="numRowsEvents" @change="getAllAlarms(1)">
                                            <!-- <option  disabled>Registros</option> -->
                                            <option selected value="15">15</option>
                                            <option value="20">20</option>
                                            <option value="30">30</option>
                                            <option value="40">40</option>
                                            <option value="50">50</option>
                                        </select>
                                    </div>
                                </li>

                            </ul>
                            <form class="d-flex">
                                <!-- <input class="form-control me-2" type="text" v-model="search" placeholder="Buscar..." aria-label="Search"> -->
                                <input class="form-control me-2" type="text" v-model="search" placeholder="Buscar..." aria-label="Search">
                                <button class="btn btn-secondary" type="submit" disabled><i class="fas fa-search"></i></button>

                            </form>
                        </div>
                    </div>
                </nav>

            </div>
            <div class="card-body">
                <div class="tab-content" id="pills-tabContent">
                                   <div style="margin-bottom:1rem">
                                       <!-- #313845 -->
  <span class="labels-alarmas-icons" style="margin-right: 1rem;"><i style="background-color: #a41c1ce6;color: #a41c1ce6; font-size: 20px;" class="fas fa-grip-lines-vertical"></i> Alarma </span>
<span class="labels-alarmas-icons" ><i style="background-color: #cac51ce6;color:#cac51ce6; font-size: 20px;" class="fas fa-grip-lines-vertical"></i> Alerta</span>
  </div>
                    <div class="scrollable">
                               <!-- <nav aria-label="Page navigation example">
                        <ul class="pagination justify-content-end">
                            <li class="page-item"><a class="page-link text-primary" v-on:click="changePageEvent(pageEvent-1)" type="button">Previous</a></li>
                            <li class="page-item"><a v-if="pageEvent>1" v-on:click="changePageEvent(1)" class="page-link">1</a></li>
                            <li class="page-item active"><a class="page-link">{{pageEvent}}</a></li>
                            <li class="page-item" v-for="(itemLi, index) in newPagesLiEvents" v-bind:key="index"><a v-if="itemLi.newPage!=pagesEvents" v-on:click="changePageEvent(itemLi.newPage)" class="page-link text-primary">{{itemLi.newPage}} </a></li>
                            <li class="page-item"><a class="page-link text-primary" v-if="pageEvent!=pagesEvents" v-on:click="changePageEvent(pagesEvents)">{{pagesEvents}}</a></li>
                            <li class="page-item"><a class="page-link text-primary" v-on:click="changePageEvent(pageEvent+1)" type="button">Next</a></li>
                        </ul>
                    </nav> -->
     
                    <table id="actividad" cellspacing="1" cellpadding="1" class="table table-tamaño table-hover">
                        <!-- <thead class="" style="background:#232e43; color:#fff"> -->
                        <thead class="" >
                            <tr class="t-head-table">
                                <th scope="col">ID_alarma</th>
                                <th scope="col">Cuenta</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Dispositivo</th>
                                <th scope="col">Evento</th>
                                <th scope="col">Fecha</th>
                                <!-- <th scope="col">Tipo</th> -->
                                <th scope="col">Estado de alarma</th>
                                <!-- <th scope="col">Opciones</th> -->
                            </tr>
                        </thead>
                        <!-- <tbody v-for="item in itemAlarmas" :key="item.idAlarmas"> -->
                        <tbody v-for="item in filterDataAlarms" :key="item.idAlarmas">
                            <!-- <tr class="t-body-table" v-bind:style="{backgroundColor:ChangeColor(item.clasificacion)}" v-bind:class="item.clasificacion==1? 'text-light':'text-dark'"> -->
                            <tr class="t-body-table">
                                <th scope="row">
                                    <i  v-if="item.clasificacion == 1" style="background: #a41c1ce6;color: #a41c1ce6; font-size: 16px;" class="fas fa-grip-lines-vertical"></i>
                                    <i   v-if="item.clasificacion == 2" style="background: #cac51ce6;color:#cac51ce6; font-size: 16px;" class="fas fa-grip-lines-vertical"></i>
                                     {{item.idAlarmas}}</tH>
                                <td>{{item.account}}</td>
                                <td>{{item.nombreAsignado}} </td>
                                <td>{{item.deviceid}}</td>
                                <td>{{item.event}}</td>
                                <td>{{item.fecha}}</td>
                                 <!-- <td>
                                    <span v-if="item.clasificacion == 1" style="background: #a41c1ce6;color: #fff; font-size: 14px;" class="badge text-bg-danger">Alarma</span>
                                    <span v-if="item.clasificacion == 2" style="background: #cac51ce6;color: #000; font-size: 14px;" class="badge text-bg-danger">Alerta</span>
                                    </td> -->
                                <td>
                                    <!-- {{item.estado_alarma}} -->
                                <span style="background: rgba(187, 26, 26, 0.08);color: #d64b4b; font-size: 14px;" v-if="item.estatus == 1" class="badge text-bg-danger">Pendiente</span>
                                <span style="background: rgba(187, 171, 26, 0.08);color: #bbb81a; font-size: 14px;" v-if="item.estatus == 2" class="badge text-bg-danger">Progreso</span>
                                <span style="background: rgba(26, 187, 151, .08);color: #1abb97; font-size: 14px;" v-if="item.estatus == 3" class="badge text-bg-danger">Finalizado</span>
                                </td>
                               
                                <!-- <td style="background-color:#c71527" v-if="item.clasificacion == 1">Alarma</td> -->
                                <!-- <td style="background-color:#ffca2c; color:#000" v-if="item.clasificacion == 2">Alerta</td> -->


                                <!-- <span  v-if="item.clasificacion == 1" class="badge text-bg-danger">Pendiente</span> -->
                                                        <!-- <span style="background: rgba(187, 171, 26, 0.08);color: #bbb81a; font-size: 14px;" v-if="item.estatus == 2" class="badge text-bg-danger">Progreso</span> -->
                                                        <!-- <span style="background: rgba(26, 187, 151, .08);color: #1abb97; font-size: 14px;" v-if="item.estatus == 3" class="badge text-bg-danger">Finalizado</span> -->
                                <!-- <td>
                                        <button class="btn btn-success " v-on:click="detalles(item.idsCuent)">
                                            <i class="fas fa-receipt"></i>
                                        </button>
                                        <button style="margin:0 5px 0 5px" v-on:click="DatosModalEditar(item)" data-bs-toggle="modal" data-bs-target="#exampleModalEditar" class="btn btn-warning ">
                                            <i class="fas fa-edit"></i>
                                        </button>
                                        <button class="btn btn-danger " v-on:click="EliminarCuenta(item.idsCuent)">
                                            <i class="fas fa-trash-alt"></i>
                                        </button>
                                    </td> -->
                            </tr>
                        </tbody>
                    </table>
                    </div>
                        <nav aria-label="Page navigation example">
                        <ul class="pagination justify-content-center">
                            <li class="page-item"><a class="page-link btn-next-back text-primary" v-on:click="changePageEvent(pageEvent-1)" type="button">Atras</a></li>
                            <li class="page-item"><a type="button" v-if="pageEvent>1" v-on:click="changePageEvent(1)" class="page-link">1</a></li>
                            <li class="page-item active"><a type="button" class="page-link">{{pageEvent}}</a></li>
                            <li class="page-item" v-for="(itemLi, index) in newPagesLiEvents" v-bind:key="index"><a type="button" v-if="itemLi.newPage!=pagesEvents" v-on:click="changePageEvent(itemLi.newPage)" class="page-link text-primary">{{itemLi.newPage}} </a></li>
                            <li class="page-item"><a type="button" class="page-link text-primary" v-if="pageEvent!=pagesEvents" v-on:click="changePageEvent(pagesEvents)"><i style="color:#1abb97" class="fas fa-angle-double-right"></i></a></li>
                            <li class="page-item"><a class="page-link btn-next-back text-primary" v-on:click="changePageEvent(pageEvent+1)" type="button">Siguiente</a></li>
                        </ul>
                    </nav>
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
import jsPDF from 'jspdf'
import 'jspdf-autotable'
export default {
    name: 'allAlarms',
    components: {
        sidebar
    },
    data() {
        return {
            fechaConexionStorage: localStorage.getItem('localsocket'),
            id_usuario: localStorage.getItem('id_usuario'),
            id_tipoUsuario: localStorage.getItem('id_tipousuario'),
            id_cPrincipal: localStorage.getItem('id_cPrincipal'),
            itemAlarmas: [],
            GlobalApi: this.globalVar,
            search: '',
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
            // SearchFilter:true,
        }
    },
        computed: {
        filterDataAlarms() {

                 return this.itemAlarmas.filter(blog => {
                return blog.event.toLowerCase().includes(this.search.toLowerCase()) || blog.idAlarmas.toString().toLowerCase().includes(this.search.toLowerCase())
                || blog.deviceid.toLowerCase().includes(this.search.toLowerCase()) || blog.account.toLowerCase().includes(this.search.toLowerCase())
                || blog.estado_alarma.toLowerCase().includes(this.search.toLowerCase()) || blog.nombreAsignado.toLowerCase().includes(this.search.toLowerCase());
            });
        }
    },
    mounted() {
        this.getAllAlarms(1);
    },
    methods: {
        changePageEvent(page) {

            this.pageEvent = (page <= 0 || page > this.pagesEvents) ? this.pageEvent : page;

            console.log("Pagina nueva", this.pageEvent);
            if (page > 0) {
                this.newPagesLiEvents.length = 0;
                let limitLi = this.pageEvent + this.adjacents;

                let pmax = (this.pageEvent < (this.pagesEvents - this.adjacents)) ? (this.pageEvent + this.adjacents) : this.pagesEvents;

                for (var i = this.pageEvent; i <= pmax; i++) {
                    let newLi = page++;
                    if (newLi != this.pageEvent) {
                        console.log(newLi);
                        this.newPagesLiEvents.push({
                            "newPage": newLi
                        })
                    }

                }
                this.getAllAlarms(this.pageEvent);
            }

        },
        getAllAlarms(p) {
            // var page = 1;
            // var perPage = 10;

            var idUser = this.id_usuario;
            var typeUser = this.id_tipoUsuario;

            console.log("idUser es", idUser);
            console.log("idUser es", typeUser);

            this.itemAlarmas.length = 0
            let perPageSelected = document.getElementById("numRowsEvents");
            console.log("el valor es ", perPageSelected.value);
            
            this.perPage = perPageSelected.value;


            var data = {
                "typeFunction": "searchAlarmas",
                "idcPrincipal": this.id_cPrincipal,
                "idcSecundaria": "null",
                "page": p,
                "perPage": this.perPage,
                "idUserLoged": idUser,
                "typeUserLoged": typeUser
            };

            // var data = {
            //     "typeFunction": "searchAlarmas",
            //     "idcPrincipal": this.id_cPrincipal,
            //     "idcSecundaria": "null",
            //     "page": page,
            //     "perPage": perPage,
            //     "idUserLoged": idUser,
            //     "typeUserLoged": typeUser
            // }

            const xhr = new XMLHttpRequest();

            xhr.open('POST', this.GlobalApi + 'alarmas');
            xhr.setRequestHeader("Content-Type", "multipart/form-data");
            xhr.send(JSON.stringify(data));

            xhr.onload = () => {
                let resp = JSON.parse(xhr.responseText)
                console.log("xml request aws allAlarms", resp);
                var json = resp;

                for (var index in json.data) {

                    let locall = moment.utc(json.data[index]["timeAlarm"]).local().format('DD/MM/YYYY HH:mm:ss');

                    this.itemAlarmas.push({
                        idAlarmas: json.data[index]["idAlarmas"],
                        deviceid: json.data[index]["NameDevice"],
                        fecha: locall,
                        account: json.data[index]["NameUbica"],
                        event: json.data[index]["nameTypeAlarm"],
                        zona: "000",
                        cantidad: 1,
                        estado_alarma: json.data[index]["nombreStatus"],
                        clasificacion: json.data[index]["id_clasificacion_alarma"],
                        nombreAsignado: json.data[index]["nombre_asignado"],
                        estatus: json.data[index]["estado_alarma"]

                    });

                    // TODO PAGINATION CODIGO PRUEBA
                    this.pagesEvents = resp.totalPages;
                    console.log(this.pagesEvents);

                    this.newPagesLiEvents.length = 0;
                    let page = this.pageEvent;

                    let limitLi = this.pageEvent + this.adjacents;

                    let pmax = (this.pageEvent < (this.pagesEvents - this.adjacents)) ? (this.pageEvent + this.adjacents) : this.pagesEvents;

                    for (var i = this.pageEvent; i <= pmax; i++) {
                        let newLi = page++;
                        if (newLi != this.pageEvent) {
                            this.newPagesLiEvents.push({
                                "newPage": newLi
                            })
                        }

                    }

                    // TODO **************

                }

            }
        },
        ChangeColor(color) {
            switch (color) {
                case 2:
                    return '#ffca2c';
                    //alerta
                case 1:
                    // return '#e72929';
                    return '#c71527';
                    //alarma
                case 3:
                    this.asd = 3;
                    return '#15aac7';
                    //recien llegados
            }
        },
        PDF_Actividad() {
            var pdf = new jsPDF();
            var width = pdf.internal.pageSize.getWidth()
            // https://dataurl.app/ <--- link para convertir
            //    let imgData = '';

            let imgData = 'data:image/webp;base64,UklGRoYyAABXRUJQVlA4IHoyAADwFQGdASoACt0APoFAnUqlI6MhobSIgKAQCWdu/HyZ5Qv/+72wcd+BPy/+H/JL3n69/lP7l/iP1092PPr1z51HNX6G9q392/YX3Ffqb2AecJ+7PqB/cj1lP+t6sv8L6kH9u6jb0FumB/u3pY/8P1AP//7e/R/9TP8R/dPWf3c/i/7P/euvQ9X+5fKe6880P4v9s/23+C9rX9L3t/Nb/S9QX8l/oH+z/un47cMzcH0Bfen69/2v8J41Pz56mfaH2Af174jf8j/2vYB/oX+I9XX+2/bz0E/U3sJ/r//4fXU/////+B/ozfuqFnIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIACFotd388hjDQQsnLagpSApSApSApSApSApSApSApSApSApSApSApSApSApSApSApSApSApSApSApSApSApSApSApSApSApSApSApSApSApSAltf6Yi+KxBWiV5kr7WF8YdwELIMGsBVsbV20IhACovbxivClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClIClH/3HTSZjFYsnzmaTep6EV10UDdWqguzU/TaXwkDuhVtC00L7+UdHSI+XlTGBDkIPcRJ6rwVMiguyH15snEWbGzKklxEFoPDISEFG+RPoUFTyezxRa6VHB+3BkCf0lN3oTeB76MV4UpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUpAUoSD0/gmeqBGtsbyWrv3xeo578gKNTxzacaJK/vQRSWb4AqJmEqTfK0/KPbATNI3FTBPMrRBvOIGuS+Y2i/rgiaJxAr0ws0CxHF1603MnmCOGvYvDYhv2qe2QPz53hAN1KffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmffmetJIR5YdoNt0uAz0/q6QK9P7n2kew3ltoGkBlynHgPWTgTuo1WvxQMIV1D/3hWxb9y+k24WC7JdqlsgtF+gwKDsoLFF2ZmoBTmkBuPrMFxeYAyHhUzpsCC4q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';
            pdf.setFont("Arial");
            pdf.setFontSize(22);
            pdf.setTextColor('#0a6e0b');
            pdf.addImage(imgData, 'jpeg', 0, 0, 220, 22);
            pdf.text('Historial de alarmas', width / 2, 40, {
                align: 'center'
            });
            pdf.autoTable({
                html: '#actividad',
                margin: {
                    top: 45
                },
                theme: 'striped',
                styles: {
                    halign: 'center'
                },
                headStyles: {
                    fillColor: '#f8d7da',
                    textColor: '#000'
                },
                bodyStyles: {
                    fillColor: '#f2f2f2'
                }
            })

            pdf.save('Historial_De_Alarmas.pdf');
        },
    },

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
    width: 99%;
    margin-left: 0.9%;
    margin-bottom: 0;
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
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
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
    /* color: #ffffffb3; */
    color: #ffffff;
}

.t-body-table {
    font-size: 14px;
    /* text-transform: ; */
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
    /* color: #fff; */
    /* background-color: #222332 !important; */
    /* border: 1px solid #2b3553; */

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

.btn-successs {
    color: #fff;
    /* background-color: #242c3c; */
    /* background-color: #b5395e; */
    background-color: #1d6f7a;
    border-color: #1d6f7a;
    /* border-color: #6cc7eb; */
    /* border-color: #146c43; */
}

.btn-successs:hover {
    color: #fff;
    background-color: #1a2130;
    border-color: #248795;

}

.btn.btn-successs:focus {
    border-color: #248795;
    box-shadow: 0 0 3px 0.1rem #1d6f7ab0;
}
.scrollable::-webkit-scrollbar {
    background-color: #1a2130;
}

.scrollable::-webkit-scrollbar-thumb {
    background-color: #ffffff;

}
.page-link {
    position: relative;
    display: block;
    color: #fff !important;
    text-decoration: none;
    background-color: #232e43;
    border: 1px solid #232e43;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.page-item.active .page-link {
    z-index: 3;
    color: #fff;
    background-color: #4f5761;
    border-color: #4f5761;
}
.btn-next-back{
  background-color: #232e43;
    border: 1px solid #232e43;
    color: #fff !important;
}

.labels-alarmas-icons{
color: #fff;
font-size: 16px;
/* border: 1px solid #313845; */
background-color: #ffffff0d;
padding: 8px 30px;
border-radius: 7px;
}
  
@media only screen and (min-width: 1800px) {
    .scrollable {
        height: 665px;
        overflow: scroll;
    }

    .t-head-table {
        font-size: 16px;

    }

    .t-body-table {
        font-size: 16px;

    }

}
</style>
