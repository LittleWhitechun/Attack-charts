function randomValue() {
    return Math.round(Math.random()*1000);
}
$(document).ready(function(){
    let chinacanvas = document.getElementById('china-canvas')
    // height = chinacanvas.offsetHeight
    // width = chinacanvas.offsetWidth
    // chinacanvas.width = width
    // chinacanvas.height = height

    document.getElementById('webgl-canvas').width = 300
    document.getElementById('webgl-canvas').height = 300

    provinceData = [
        {name: '北京', value: randomValue()},
        {name: '天津', value: randomValue()},
        {name: '上海', value: randomValue()},
        {name: '重庆', value: randomValue()},
        {name: '河北', value: randomValue()},
        {name: '河南', value: randomValue()},
        {name: '云南', value: randomValue()},
        {name: '辽宁', value: randomValue()},
        {name: '黑龙江', value: randomValue()},
        {name: '湖南', value: randomValue()},
        {name: '安徽', value: randomValue()},
        {name: '山东', value: randomValue()},
        {name: '新疆', value: randomValue()},
        {name: '江苏', value: randomValue()},
        {name: '浙江', value: randomValue()},
        {name: '江西', value: randomValue()},
        {name: '湖北', value: randomValue()},
        {name: '广西', value: randomValue()},
        {name: '甘肃', value: randomValue()},
        {name: '山西', value: randomValue()},
        {name: '内蒙古', value: randomValue()},
        {name: '陕西', value: randomValue()},
        {name: '吉林', value: randomValue()},
        {name: '福建', value: randomValue()},
        {name: '贵州', value: randomValue()},
        {name: '广东', value: randomValue()},
        {name: '青海', value: randomValue()},
        {name: '西藏', value: randomValue()},
        {name: '四川', value: randomValue()},
        {name: '宁夏', value: randomValue()},
        {name: '海南', value: randomValue()},
        {name: '台湾', value: randomValue()},
        {name: '香港', value: randomValue()},
        {name: '澳门', value: randomValue()}
    ]

    let maskcanvas = document.getElementById('mask-canvas')
    height = maskcanvas.offsetHeight
    width = maskcanvas.offsetWidth
    maskcanvas.width = width
    maskcanvas.height = height

    chinacanvasLeft = chinacanvas.getBoundingClientRect().left
    chinacanvasTop = chinacanvas.getBoundingClientRect().top
    webglcanvasLeft = document.getElementById('webgl-canvas').getBoundingClientRect().left
    webglcanvasTop = document.getElementById('webgl-canvas').getBoundingClientRect().top

    var myChart = echarts.init(document.getElementById('china-canvas'),null,{devicePixelRatio:3});
    option = {
        visualMap: {
            min: 0,
            max: 2000,
            text:['High','Low'],
            realtime: false,
            calculable: true,
            inRange: {
                color: ['#87CEFA', '#4169E1']
            },
            show:false
        },

        geo:{
            map:'china',
            aspectScale: 0.75,
            layoutCenter: ["50%", "51.5%"],
            layoutSize: '100%',
            groundPlane: {
                show: true
            },
            itemStyle: {
                normal:{
                    borderWidth: 1.5,
                    borderColor:'rgba(72,61,139,1)',
                    areaColor:'#4169E1'
                },
                emphasis:{
                    areaColor:'rgba(25,25,112,1)',
                }
            },
            label:{
                emphasis:{
                    show:false,
                }
            },
            data:provinceData,
        },

        rotateSensitivity: 0,
        series: [{
            type: 'map',
            map: 'china',
            shading: 'lambert',
            roam:false,
            groundPlane: {
                show: true
            },
            layoutCenter: ["50%", "50%"],
            aspectScale: 0.75,
            layoutSize: '100%',
            itemStyle: {
                normal:{
                    borderWidth: 1.5,
                    borderColor:'rgba(72,61,139,0.6)',
                },
                emphasis:{
                    areaColor:'rgba(25,25,112,0)',
                }
            },
            label:{
                emphasis:{
                    show:false,
                }
            },
            data:provinceData
        }]
    };
    myChart.setOption(option)
    
    var seriesModel = myChart.getModel().getSeriesByIndex(0)
    var coordSys = seriesModel.coordinateSystem;
    //传入经纬度 获取offsetX,offsetY
    var point = coordSys.dataToPoint([116, 39]);
    // console.log(point)

    var context = document.getElementById('mask-canvas').getContext("2d")

    myChart.on('click',function(params){
        console.log(params)
        // maskcanavs上画的时候需要给出的是offsetX,offsetY，webglcanvas上获取的是clinetX，clientY，X基本一致，clinetY-top即获得offsetY
        // 而chinacanvas通过经纬度转换的XY都为offset,Y一致，X需要加上左侧距离
        // webglcanvas :[clientX,clientY-Top]
        // chinacanvas :[offsetX+Left,offsetY]
        // var chart = echarts.getInstanceById(document.getElementById('china-canvas').getAttribute('_echarts_instance_'))
        // let seriesModel = chart.getModel().getSeriesByIndex(0)
        // let coordSys = seriesModel.coordinateSystem;
        // let point = coordSys.dataToPoint([116, 39]);
        // console.log(point)
    })

    // 缩放时等比例
    window.addEventListener('resize',function(){
        // chinacanvas.width = $("#app").innerWidth()
        // chinacanvas.height = $("#app").innerHeight()
        // console.log(`resize:${$("#app").innerWidth()},${$("#app").innerHeight()}`)
        myChart.resize()
    })
    function dosth(sth){
        console.log(sth)
    }
})
