export const ChartHoras = {
    type: "line",
    data: {
        labels: ["9-1", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
        datasets: [{
                label: "Horas",
                data: [100, 300, 100, 300, 100, 300, 100, 300, 100, 300, 100, 300],
                // backgroundColor: 'rgba(75, 192, 192, 0.2)',
                // borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: '#293341',
                borderColor: '#42b883',
                borderWidth: 2,

                pointBorderColor: '#42b883',
                pointBackgroundColor: '#42b883',
                pointHoverBackgroundColor: '#42b883',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointHitRadius: 10,
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



export default ChartHoras;