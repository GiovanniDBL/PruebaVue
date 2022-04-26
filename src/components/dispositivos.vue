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
                            <a class="navbar-brand"><i class="fas fa-signal-stream icon"></i> Dispositivos <span class="span-brand">ATMSense</span></a>
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 nav nav-pills">

                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active position-relative" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Dispositivos Online
                                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{{totalOnline}}</span>
                                    </button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link position-relative" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" style="margin-left:1.5rem;" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Dispositivos Offline
                                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{{totalOffline}}</span>
                                    </button>
                                </li>

                            </ul>
                            <form class="d-flex" style="margin-left:1rem">
                                <!-- <input class="form-control me-2" type="search" placeholder="Buscar Dispositivos" aria-label="Search"> -->
                                <input class="form-control me-2" type="text" v-model="search" placeholder="Buscar Dispositivos" aria-label="Search">
                                <button class="btn btn-outline-success" type="submit" disabled><i class="fas fa-search"></i></button>
                            </form>
                        </div>
                    </div>
                </nav>
                <div class="card-body">
                    <!-- <div v-if="filteredBlogs == 0 " class="alert alert-danger" role="alert">
  No existen resultados con el termino: {{search}}
</div> -->
                    <div class="tab-content" id="pills-tabContent">

                        <!-- //? ******************** DISPOSITIVOS ONLINE *********************-->
                        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">

                            <div class="scrollable">
                                <div v-if="filterDataOnline == 0 " class="alert animated fadeIn fast" role="alert">
                                    No existen resultados con el termino: <span style="color:#ffc107">{{search}}</span>
                                </div>
                                <table cellspacing="1" cellpadding="1" class="table table-tamaño table-hover">

                                    <thead class=" text-light ">
                                        <tr class="t-head-table">
                                            <th>Id Device</th>
                                            <th>Name Device</th>

                                            <th>Nivel de señal</th>
                                            <th>Estado Comunicación</th>
                                            <th>Temp</th>
                                            <th>Voltaje</th>
                                            <th>Cuenta</th>
                                            <th>Detalles</th>
                                        </tr>

                                    </thead>
                                    <!-- <tbody   v-for="item in DispositivosOnline" :key="item.idDevice"> -->
                                    <tbody v-for="item in filterDataOnline" :key="item.idDevice">
                                        <tr class="t-body-table" :id="'device-'+item.idDevice">
                                            <th>{{item.idDevice}}</th>
                                            <td>{{item.deviceName}}</td>

                                            <td class="text-center">

                                                <i v-bind:style="{color: getColorSenal(item.linkQuality)}" v-bind:class="ChangeIcon(item.linkQuality)" style="font-size: 1.5rem"></i>

                                            </td>
                                            <td class="text-center">

                                                <span v-if="item.com_status==1" class="badge badge-pill badge-success"><i style="color:#2dd36f" class="fas fa-circle"></i> Online</span>
                                                <span v-if="item.com_status==2" class="badge badge-pill badge-danger"><i style="color: gray" class="fas fa-circle"></i> Offline</span>
                                                <span v-if="item.com_status==3" class="badge badge-pill badge-danger"><i style="color: gray" class="fas fa-circle"></i> Offline</span>

                                            </td>

                                            <td><i style="color: #1abb97;" class="fal fa-thermometer-three-quarters"></i> {{item.tempAmb}}°</td>
                                            <td><i style="color: #1abb97;" class="fad fa-battery-bolt"></i> {{item.voltDevice}}</td>
                                            <td>{{item.nameCuenta}}</td>

                                            <td><i class="fas fa-file-alt" type="button" v-on:click="detalles(item.idDevice)"></i></td>

                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- //? ******************** DISPOSITIVOS OFFLINE *********************-->
                        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                            <div class="scrollable">
                                <div v-if="filterDataOffline == 0 " class="alert animated fadeIn fast" role="alert">
                                    No existen resultados con el termino: <span style="color:#ffc107">{{search}}</span>
                                </div>
                                <table cellspacing="1" cellpadding="1" class="table table-tamaño table-hover">
                                    <thead class=" text-light ">
                                        <tr class="t-head-table">
                                            <th>Id Device</th>
                                            <th>Name Device</th>

                                            <th>Nivel de señal</th>
                                            <th>Estado Comunicación</th>
                                            <th>Temp</th>
                                            <th>Voltaje</th>
                                            <th>Cuenta</th>
                                            <th>Detalles</th>
                                        </tr>
                                    </thead>

                                    <tbody v-for="item in filterDataOffline" :key="item.idDevice">
                                        <tr class="t-body-table" :id="'device-'+item.idDevice">
                                            <th>{{item.idDevice}}</th>
                                            <td>{{item.deviceName}}</td>

                                            <td class="text-center">

                                                <i v-if="item.idcomunicacion_status == 1 " v-bind:style="{color: getColorSenal(item.linkQuality)}" v-bind:class="ChangeIcon(item.linkQuality)" style="font-size: 1.5rem"></i>
                                                <i v-if="item.idcomunicacion_status != 1 " style="display: block; font-size: 26px;margin-bottom: 5px;color: gray;" class="fad fa-signal-alt-slash"></i>
                                            </td>
                                            <td class="text-center">

                                                <span v-if="item.com_status==1" class="badge badge-pill badge-success"><i style="color:#2dd36f" class="fas fa-circle"></i> Online</span>
                                                <span v-if="item.com_status==2" class="badge badge-pill badge-danger"><i style="color: gray" class="fas fa-circle"></i> Offline</span>
                                                <span v-if="item.com_status==3" class="badge badge-pill badge-danger"><i style="color: gray" class="fas fa-circle"></i> Offline</span>

                                            </td>

                                            <td><i style="color: #1abb97;" class="fal fa-thermometer-three-quarters"></i> {{item.tempAmb}}°</td>
                                            <td><i style="color: #1abb97;" class="fad fa-battery-bolt"></i> {{item.voltDevice}}</td>
                                            <td>{{item.nameCuenta}}</td>
                                            <td><i class="fas fa-file-alt" type="button" v-on:click="detalles(item.idDevice)"></i></td>

                                        </tr>
                                    </tbody>
                                </table>
                            </div>
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
    name: "dispositivosComponent",
    components: {
        sidebar
    },
    data: function () {
        return {
            hours: 8,
            arrayLabels: [],
            itemsDevices: [],
            itemsUbicacionesInternas: [],
            idUbicIntSelecionada: {},
            deviceSeleccionado: {}, //<-- el seleccionado estará aquí
            DispositivosOnline: [],
            DispositivosOffline: [],
            totalOnline: '',
            totalOffline: '',
            search: '',
            GlobalApi: this.globalVar,
        };
    },
    computed: {
        filterDataOnline() {
            return this.DispositivosOnline.filter(blog => {

                return blog.deviceName.toLowerCase().includes(this.search.toLowerCase()) || blog.nameCuenta.toLowerCase().includes(this.search.toLowerCase()) ||
                    blog.idDevice.toString().toLowerCase().includes(this.search.toLowerCase());
            });
        },
        filterDataOffline() {
            return this.DispositivosOffline.filter(blog => {

                return blog.deviceName.toLowerCase().includes(this.search.toLowerCase()) || blog.nameCuenta.toLowerCase().includes(this.search.toLowerCase()) ||
                    blog.idDevice.toString().toLowerCase().includes(this.search.toLowerCase());
            });
        }
    },
    mounted() {
        this.getAllDevices();
        console.log('variable globar', this.myvar);
    },
    methods: {
        detalles(id) {
            console.log(id);
            this.$router.push('/detalles-devices/' + id)
        },
        getAllDevices() {

            //var idUbicacion =this.$route.params.idSubAccount;
            //console.log("Obteniendo devices", idUbicInt);
            var data = {
                typeFunction: "getAllDevices",
                //idUbic: idUbicInt,
                "page": 1,
                "perPage": 10,
                "idUserLoged": 1,
                "typeUserLoged": 1
            };
            const xhr = new XMLHttpRequest();
            xhr.open(
                "POST",
                this.GlobalApi + 'managerDevices',
                // "https://xm704xl9zk.execute-api.us-east-1.amazonaws.com/dev/managerDevices"
            );

            // set headers (arreglalo porque lo envia too weird el form sjaskj)
            xhr.setRequestHeader("Content-Type", "multipart/form-data");
            //xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
            xhr.send(JSON.stringify(data));

            // listen for `load` event
            xhr.onload = () => {
                let resp = JSON.parse(xhr.responseText);
                console.log("xml request all devices", resp);
                var json = resp;
                for (var index in json.data) {
                    console.log(json.data[index]["NameDevice"]);

                    this.itemsDevices.push({
                        deviceName: json.data[index]["NameDevice"],
                        idDevice: json.data[index]["idDeviceZona"],
                        nameCuenta: json.data[index]["NameUbica"],
                        linkQuality: json.data[index]["linkQuality"],
                        com_status: json.data[index]["comun_status"],
                        tempAmb: json.data[index]["tempAmb"],
                        voltDevice: json.data[index]["voltDevice"]
                    });

                }
                console.log("array", this.itemsDevices);
                //* FILTRAR DISPOSITIVOS ONLINE
                var DevicesOnline = this.itemsDevices.filter(estado => estado.com_status == 1);
                this.DispositivosOnline = DevicesOnline
                console.log('Dispositivos Online', this.DispositivosOnline);

                this.totalOnline = DevicesOnline.length;
                //* FILTRAR DISPOSITIVOS OFFLINE
                var DevicesOffline = this.itemsDevices.filter(estado => estado.com_status !== 1);
                this.DispositivosOffline = DevicesOffline
                console.log('Dispositivos Offline', this.DispositivosOnline);

                this.totalOffline = DevicesOffline.length;
            }
        },
        getColorSenal(linkQuality) {
            switch (linkQuality) {
                case 0:
                    return '#eb445a';
                case 1:
                    return '#ffc409';
                case 2:
                    return '#2dd36f';
                case 3:
                    return '#2dd36f';
                case 4:
                    return 'gray';
                case null:
                    return 'gray';

            }
        },
        ChangeIcon(icon) {
            switch (icon) {
                case 0:
                    // simbolo rojo 1 rayita  "LIMIT" 
                    return 'fad fa-signal-alt-1';
                case 1:
                    // simbolo amarillo 2 rayitas "AVERAGE"
                    return 'fad fa-signal-alt-2';
                case 2:
                    // simbolo verde 3 rayitas "GOOD"s
                    return 'fad fa-signal-alt-3';

                case 3:
                    // simbolo verde 4 rayitas "EXCELLENT" 
                    return 'fad fa-signal-alt';
                case 4:
                    // simbolo gris con rayita tachada "NA"
                    // return 'fad fa-signal-alt';

                    return 'fad fa-signal-alt-slash';

                case null:
                    // simbolo gris con rayita tachada "NULL"
                    return 'fad fa-signal-alt-slash';

            }
        }
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
    /* margin-top: 2rem; */
}

.home .text {
    font-size: 30px;
    font-weight: 500;
}

.scrollable {
    height: 400px;
    overflow: scroll;

}

/* .scrollable::-webkit-scrollbar{
   background-color: #27293d;  
}
.scrollable::-webkit-scrollbar-thumb{
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

.nav-pills .nav-link.active,
.nav-pills .show>.nav-link {

    /* color: #1abb97;
    background-color: rgba(26, 187, 151, .08); */
    background-color: #198754;
    border: #198754;

}

.nav-link {
    display: block;
    padding: 0.5rem 1rem;
    color: #949ca9fa;
    margin-right: 1rem;
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
        height: 550px;
        overflow: scroll;
    }
}
</style>
