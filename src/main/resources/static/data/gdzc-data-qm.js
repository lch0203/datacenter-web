var dom = document.getElementById("gdzc_data_qm");
var myChart_gdzc_qc = echarts.init(dom);
var app = {};
var option = null;
app.title = '固定资产分类结存(2018年7月1日)';

option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'horizontal',
        x: 'right',
        data: ['土地、房屋及构筑物', '通用设备','专用设备', '文物和陈列品', '图书、档案', '家具、用具、装具及动植物', '无形资产']
    },
    grid: {
        left: '1%',
        right: '4%',
        bottom: '1%',
        containLabel: true
    },
    series: [
        {
            name:'结存值',
            type:'pie',
            radius: ['40%', '55%'],
            label: {
                normal: {
                    formatter: '{b}：{d}% ',
                    // formatter: '{{a}\n{b}：{c}  {d}%}  ',
                    backgroundColor: '#eee',
                    borderColor: '#aaa',
                    borderWidth: 1,
                    borderRadius: 4,
                    // shadowBlur:3,
                    // shadowOffsetX: 2,
                    // shadowOffsetY: 2,
                    // shadowColor: '#999',
                    // padding: [0, 7],
                    rich: {
                        a: {
                            color: '#999',
                            lineHeight: 22,
                            align: 'center'
                        },
                        // abg: {
                        //     backgroundColor: '#333',
                        //     width: '100%',
                        //     align: 'right',
                        //     height: 22,
                        //     borderRadius: [4, 4, 0, 0]
                        // },
                        hr: {
                            borderColor: '#aaa',
                            width: '100%',
                            borderWidth: 0.5,
                            height: 0
                        },
                        b: {
                            fontSize: 16,
                            lineHeight: 33
                        },
                        per: {
                            color: '#eee',
                            backgroundColor: '#334455',
                            padding: [2, 4],
                            borderRadius: 2
                        }
                    }
                }
            },
            data:[
                {value:623922838.85, name:'土地、房屋及构筑物'},
                {value:176874169.87, name:'通用设备'},
                {value:40884755.48, name:'专用设备'},
                {value:3335842.00, name:'文物和陈列品'},
                {value:15079114.50, name:'图书、档案'},
                {value:27012537.93, name:'家具、用具、装具及动植物'},
                {value:4939300.00, name:'无形资产'}
            ]
        }
    ]
};
if (option && typeof option === "object") {
    myChart_gdzc_qc.setOption(option, true);
}

//浏览器大小改变时重置大小
window.addEventListener("resize", function () {
    myChart_gdzc_qc.resize();
});