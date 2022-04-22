export const planetChartData2 = {
    type: "line",
    data: {
        labels: ["9-1", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
        datasets: [{
                label: "Horas",
                data: [100, 300, 100, 300, 100, 300, 100, 300, 100, 300, 100, 300, 100, 300, ],
                backgroundColor: '#2e3054',
                borderColor: '#1d8cf8',
                // backgroundColor: 'rgba(75, 192, 192, 0.2)',
                // borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                pointBorderColor: '#1d8cf8',
                pointBackgroundColor: '#1d8cf8',
                pointHoverBackgroundColor: '#1d8cf8',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointHitRadius: 10,
                pointRadius: 0,
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
        elements: {
            line: {
                tension: 0

            }
        },
        legend: {
            labels: {
                fontColor: "#ffffffbd",
                fontSize: 15,
            }
        },
        responsive: true,
        lineTension: 1,
        scales: {

            yAxes: [{
                gridLines: {
                    display: true,
                    color: '#1a2130'
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