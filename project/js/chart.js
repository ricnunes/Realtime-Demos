$(function () {
        $('#chart_box').highcharts({
            chart: {
                type: 'column',
                backgroundColor: null
            },
            title: {
                text: 'Lorem ipsum dolor.'
            },
            subtitle: {
                text: 'Lorem ipsum dolor sit amet.'
            },
            xAxis: {
                categories: [
                    ''
                ]
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Number of Lorems'
                }
            },
            tooltip: {
                headerFormat: '<span>{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [
                        {
                            name: 'Alpha',
                            data: [49]
                        },
                        {
                            name: 'Beta',
                            data: [42]
                        },
                        {
                            name: 'Charlie',
                            data: [48]
                        },
                        {
                            name: 'Delta',
                            data: [83]
                        }
                    ]
        });
    });


