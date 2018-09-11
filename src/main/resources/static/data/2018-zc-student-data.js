var dom = document.getElementById("zc_2018_data");
var myChart_zc_2018 = echarts.init(dom);
var app = {};
app.title = '2018年各类在册学生占比';

var option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'horizontal',
        x: 'center',
        data: ['开放本科', '开放专升本', '开放专科', '高职']
    },
    grid: {
        left: '1%',
        right: '4%',
        bottom: '2%',
        containLabel: true
    },
    series: [
        {
            name: '',
            type: 'pie',
            radius: ['40%', '55%'],
            label: {
                normal: {
                    formatter: '{b}：{c}   ({d}%) ',
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
            data: [
                {value: 2081, name: '开放本科'}, //'开放本科', '开放专科', '开放专升本', '高职'
                {value: 2532, name: '开放专升本'},
                {value: 147872, name: '开放专科'},
                {value: 6743, name: '高职'}
            ]
        }
    ]
};

if (option && typeof option === "object") {
    myChart_zc_2018.setOption(option, true);
}

//浏览器大小改变时重置大小
window.addEventListener("resize", function () {
    myChart_zc_2018.resize();
});