// // 基于准备好的dom，初始化echarts实例
var element_zc = document.getElementById('zc-student-area-chart');

var myChart_zc = echarts.init(element_zc);

// 指定图表的配置项和数据
option = {
    title: {
        text: '2012-2017在册学生数'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data: ['开放本科', '开放专科', '开放专升本','国开', '高职']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: ['2012', '2013', '2014', '2015', '2016', '2017']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '开放本科',
            type: 'line',
            stack: '总量',
            label: {
                normal: {
                    show: true
                }
            },
            areaStyle: {normal: {}},
            data: [2, 3, 559, 1187, 1743, 2218]
        },
        {
            name: '开放专科',
            type: 'line',
            stack: '总量',
            label: {
                normal: {
                    show: true
                }
            },
            areaStyle: {normal: {}},
            data: [28286, 48655, 67934, 90281, 123587, 148756]
        },
        {
            name: '开放专升本',
            type: 'line',
            stack: '总量',
            label: {
                normal: {
                    show: true
                }
            },
            areaStyle: {normal: {}},
            data: [0, 0, 158, 215, 262, 558]
        },
        {
            name: '国开',
            type: 'line',
            stack: '总量',
            label: {
                normal: {
                    show: true
                }
            },
            areaStyle: {normal: {}},
            data: [47804,49135,46876,43888,39494,35943]
        },
        {
            name: '高职',
            type: 'line',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            areaStyle: {normal: {}},
            data: [7801, 7631, 7311, 7696, 8082, 9657]
        }
    ],
    color:['#337ab7', '#5cb85c','#f0ad4e','#d9534f']
};

// 使用刚指定的配置项和数据显示图表。
myChart_zc.setOption(option);

//浏览器大小改变时重置大小
window.addEventListener("resize", function () {
    myChart_zc.resize();
});