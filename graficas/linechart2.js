export const planetChartData2 = {
    type: "line",
    data: {
        labels: ["9-1", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
        datasets: [{
                label: "Horas",
                data: [600, 100, 600, 400, 500, 100, 200, 300, 100, 500, 600, 700],
                backgroundColor: '#2e3054',
                borderColor: '#1d8cf8',
                // backgroundColor: 'rgba(75, 192, 192, 0.2)',
                // borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
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



export default planetChartData2;