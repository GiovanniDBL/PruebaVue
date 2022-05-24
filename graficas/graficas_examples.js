// TODO GRAFICA DE TEMPERATURA
var ctx = document.getElementById('GraficaTemp').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: this.timedevice,
        datasets: [{
            label: 'Temperatura',
            data: this.tempdevice,
            backgroundColor: '#fd202033',
            borderColor: 'rgb(203 53 87)',
            borderWidth: 2,
            pointBorderColor: 'rgb(203 53 87)',
            pointBackgroundColor: '#FFF',
            pointHoverBackgroundColor: 'rgb(203 53 87)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointHitRadius: 10,
            pointRadius: 0,
            // pointRadius: 3,
            pointBorderWidth: 1,
            lineTension: 0.1,

        }, ]
    },
    options: {
        legend: {
            labels: {
                fontColor: "#ffffff",
                fontSize: 15,
            }
        },
        scales: {
            yAxes: [{
                gridLines: {
                    display: true,
                    color: '#1a2130',
                },
                ticks: {
                    padding: 25,
                    fontColor: '#ffffffb3',
                    beginAtZero: true
                }
            }],
            xAxes: [{
                gridLines: {
                    display: true,
                    color: '#3a2d4c',
                    drawBorder: true
                },
                ticks: {
                    beginAtZero: true,
                    padding: 5,
                    fontColor: '#ffffffb3'

                },
            }]
        }
    }
});

// TODO GRAFICA DE VIBRACIÓN
var ctx = document.getElementById('GraficaVib').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: this.timedevice,
        datasets: [{
            label: 'Detección de choque',
            data: this.vibraciondevice,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderWidth: 2,
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#FFF',
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointHitRadius: 10,
            pointRadius: 0,
            pointBorderWidth: 1,
            lineTension: 0,

        }]
    },
    options: {
        legend: {
            labels: {
                fontColor: "#ffffff",
                fontSize: 15,
            }
        },
        scales: {
            yAxes: [{
                gridLines: {
                    display: true,
                    color: '#1a2130',
                },
                ticks: {
                    padding: 25,
                    fontColor: '#ffffffb3',
                    beginAtZero: true
                }
            }],
            xAxes: [{
                gridLines: {
                    display: true,
                    color: '#3a2d4c',
                    drawBorder: true
                },
                ticks: {
                    beginAtZero: true,
                    padding: 5,
                    fontColor: '#ffffffb3'

                },
            }]
        }
    }
});
// TODO GRAFICA DE GAS
var ctx = document.getElementById('GraficaGas').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: this.timedevice,
        datasets: [{
            label: 'Gas',
            data: this.gasdevice,
            backgroundColor: '#3a3c3c66',
            borderColor: 'rgb(86 86 86)',
            borderWidth: 2,
            pointBorderColor: 'rgb(86 86 86)',
            pointBackgroundColor: '#FFF',
            pointHoverBackgroundColor: 'rgb(86 86 86)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointHitRadius: 10,
            pointRadius: 0,
            // pointRadius: 3,
            pointBorderWidth: 1,
            lineTension: 0.1,
        }]
    },
    options: {
        elements: {
            line: {
                tension: 0

            }
        },
        legend: {
            labels: {
                fontColor: "#ffffff",
                fontSize: 15,
            }
        },
        scales: {
            yAxes: [{
                gridLines: {
                    display: true,
                    color: '#1a2130',
                },
                ticks: {
                    padding: 25,
                    fontColor: '#ffffffb3',
                    beginAtZero: true
                }
            }],
            xAxes: [{
                gridLines: {
                    display: true,
                    color: '#3a2d4c',
                    drawBorder: true
                },
                ticks: {
                    beginAtZero: true,
                    padding: 5,
                    fontColor: '#ffffffb3'

                },
            }]
        }
    }
});

// TODO GRAFICA DE X y X
var ctx = document.getElementById('GraficaVolt').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: this.timedevice,
        datasets: [{
                // label: 'Variación Z',
                label: 'Ataque lateral',
                data: this.variacionZ,
                backgroundColor: 'rgba(255, 206, 86, 0.2)',
                borderColor: 'rgba(255, 206, 86, 1)',
                borderWidth: 2,
                pointBorderColor: 'rgba(255, 206, 86, 1)',
                pointBackgroundColor: 'rgba(255, 206, 86, 1)',
                pointHoverBackgroundColor: 'rgba(255, 206, 86, 1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointHitRadius: 10,
                pointRadius: 0,
                pointBorderWidth: 1,
                lineTension: 0.1,
            },
            {
                label: 'Ataque frontal',
                data: this.variacionX,
                backgroundColor: '#2a3945',
                borderColor: '#42b883',
                borderWidth: 2,
                pointBorderColor: '#42b883',
                pointBackgroundColor: '#42b883',
                pointHoverBackgroundColor: '#42b883',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointHitRadius: 10,
                pointRadius: 0,
                pointBorderWidth: 1,
                lineTension: 0.1,
            }
        ]
    },
    options: {
        elements: {
            line: {
                tension: 0

            }
        },
        legend: {
            labels: {
                fontColor: "#ffffff",
                fontSize: 15,
            }
        },

        scales: {
            yAxes: [{
                gridLines: {
                    display: true,
                    color: '#1a2130',
                },
                ticks: {
                    padding: 25,
                    fontColor: '#ffffffb3',
                    beginAtZero: true
                }
            }],
            xAxes: [{
                gridLines: {
                    display: true,
                    color: '#3a2d4c',
                    drawBorder: true
                },
                ticks: {
                    beginAtZero: true,
                    padding: 5,
                    fontColor: '#ffffffb3'

                },
            }]
        }
    }
});