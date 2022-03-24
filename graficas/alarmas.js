export const ChartAlarmas = {
    type: "line",
    data: {
        labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
        datasets: [{
                label: "Alarmas",
                data: [100, 200, 300, 400, 500, 100, 200, 300, 400, 500, 600, 700],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 2
            },
            {
                label: "Alertas",
                data: [500, 250, 300, 250, 400, 450, 500, 100, 150, 200, 300, 800],
                backgroundColor: 'rgba(255, 206, 86, 0.2)',
                borderColor: 'rgba(255, 206, 86, 1)',
                borderWidth: 2
            },
        ]

    },

    options: {

        // title: {
        //     display: true,
        //     text: 'Alarmas de la semana',
        //     fontSize: 20,
        //     fontColor: "#ffffff",
        //     position: 'left',
        // },

        legend: {
            labels: {
                fontColor: "#858689",
                fontSize: 15,
            }
        },
        responsive: true,
        lineTension: 1,
        scales: {

            yAxes: [{
                gridLines: {
                    display: true,
                    color: '#27293d'
                },
                // stacked: true,
                ticks: {
                    beginAtZero: true,
                    padding: 25,
                    fontColor: '#858689'
                },


            }],
            xAxes: [{
                gridLines: {
                    display: true,
                    color: '#3a2d4c'
                },
                ticks: {
                    beginAtZero: true,
                    padding: 5,
                    fontColor: '#858689'

                },
            }]
        }
    },
};





export default ChartAlarmas;