$(function() {

    Morris.Area({
        element: 'grad-student-morris-area-chart',
        data: [{
            period: '2012',
            kfbk: 2666,
            kfzk: null,
            zsb: 2647,
            gz:0
        }, {
            period: '2013',
            kfbk: 2666,
            kfzk: null,
            zsb: 2647,
            gz:0
        }, {
            period: '2014',
            kfbk: 2666,
            kfzk: null,
            zsb: 2647,
            gz:0
        }, {
            period: '2015',
            kfbk: 2666,
            kfzk: null,
            zsb: 2647,
            gz:0
        }, {
            period: '2016',
            kfbk: 2666,
            kfzk: null,
            zsb: 2647,
            gz:0
        }, {
            period: '2017',
            kfbk: 2666,
            kfzk: null,
            zsb: 2647,
            gz:0
        }, {
            period: '2018',
            kfbk: 2666,
            kfzk: null,
            zsb: 2647,
            gz:0
        }],
        xkey: 'period',
        // ykeys: ['iphone', 'ipad', 'itouch'],
        ykeys: ['kfbk', 'kfzk', 'zsb','gz'],
        labels: ['开放本科', '开放专科', '专升本','高职'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Download Sales",
            value: 12
        }, {
            label: "In-Store Sales",
            value: 30
        }, {
            label: "Mail-Order Sales",
            value: 20
        }],
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '2006',
            a: 100,
            b: 90
        }, {
            y: '2007',
            a: 75,
            b: 65
        }, {
            y: '2008',
            a: 50,
            b: 40
        }, {
            y: '2009',
            a: 75,
            b: 65
        }, {
            y: '2010',
            a: 50,
            b: 40
        }, {
            y: '2011',
            a: 75,
            b: 65
        }, {
            y: '2012',
            a: 100,
            b: 90
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true
    });
    
});
