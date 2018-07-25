var dom = document.getElementById("gdzc-final-chart");
var myChart_gdzc_final = echarts.init(dom);
var app = {};
option = null;
app.title = '固定资产分类金额汇总条形图';

option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['期初', '增加', '减少', '结存']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value'
    },
    yAxis: {
        type: 'category',
        data: ['土地、房屋及构筑物', '通用设备','专用设备', '文物和陈列品', '图书、档案', '家具、用具、装具及动植物', '无形资产']
    },
    series: [
        {
            name: '期初',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: false,
                    position: 'insideRight'
                }
            },
            data: [675771311.99, 168339560.26, 41107342.89, 3335842.00, 14981114.50, 26650154.44, 4939300.00]
        },
        {
            name: '增加',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: false,
                    position: 'insideRight'
                }
            },
            data: [0, 8541309.61, 67731.10, 0, 98000.00, 362383.49, 0]
        },
        {
            name: '减少',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: false,
                    position: 'insideRight'
                }
            },
            data: [51848473.14, 6700.00, 290318.51, 0, 0, 0, 0]
        },
        {
            name: '结存',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: false,
                    position: 'insideRight'
                }
            },
            data: [623922838.85, 176874169.87, 40884755.48, 3335842.00, 15079114.50, 27012537.93, 4939300.00]
        }
    ]
};

if (option && typeof option === "object") {
    myChart_gdzc_final.setOption(option, true);
}

//浏览器大小改变时重置大小
window.addEventListener("resize", function () {
    myChart_gdzc_final.resize();
});