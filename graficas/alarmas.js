export const ChartAlarmas = {
    type: "line",
    data: {
        labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
        datasets: [{
                label: "Alarmas",
                data: [100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 2,

                pointBorderColor: 'rgba(255,99,132,1)',
                pointBackgroundColor: 'rgba(255,99,132,1)',
                pointHoverBackgroundColor: 'rgba(255,99,132,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointHitRadius: 10,
                // pointBorderWidth: 1,
                // pointHoverRadius: 5,
                pointRadius: 2,
            },
            {
                label: "Alertas",
                data: [300, 100, 300, 100, 300, 100, 300, 100, 300, 100, 300, 100],
                backgroundColor: 'rgba(255, 206, 86, 0.2)',
                borderColor: 'rgba(255, 206, 86, 1)',
                borderWidth: 2,

                pointBorderColor: 'rgba(255, 206, 86, 1)',
                pointBackgroundColor: 'rgba(255, 206, 86, 1)',
                pointHoverBackgroundColor: 'rgba(255, 206, 86, 1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointHitRadius: 10,
                // pointBorderWidth: 1,
                // pointHoverRadius: 5,
                // pointRadius: 2,
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
                // tension: 0

            }
        },

        legend: {
            labels: {
                fontColor: "#ffffffbd",
                fontSize: 15,
            }
        },
        responsive: true,
        // showLines: false,
        scales: {

            yAxes: [{
                // scaleLabel: {
                //     display: true,
                //     labelString: "Time in Seconds",
                //     fontColor: "red"
                // },
                gridLines: {
                    display: true,
                    color: '#1a2130',

                    // color: '#27293d'
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
                    color: '#3a2d4c',
                    drawBorder: true
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