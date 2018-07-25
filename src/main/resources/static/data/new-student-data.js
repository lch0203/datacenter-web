// // 基于准备好的dom，初始化echarts实例

var new_element = document.getElementById('new-student-area-chart');
var myChart_new = echarts.init(new_element);

// 指定图表的配置项和数据
option = {
    title: {
        text: '2012-2018新注册学生数'
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
        data: ['开放本科', '开放专科', '开放专升本', '高职']
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
            data: ['2012', '2013', '2014', '2015', '2016', '2017', '2018']
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
            data: [2, 1, 556, 628, 556, 475, 0]
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
            data: [28286, 20369, 19279, 25085, 39888, 39144, 5642]
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
            data: [0, 0, 158, 57, 47, 374, 70]
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
            data: [2529, 2380, 2402, 2914, 2766, 3977, 0]
        }
    ],
    color:['#337ab7', '#5cb85c','#f0ad4e','#d9534f']
};

// 使用刚指定的配置项和数据显示图表。
myChart_new.setOption(option);

//浏览器大小改变时重置大小
window.addEventListener("resize", function () {
    myChart_new.resize();
});