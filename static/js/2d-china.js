function randomValue() {
    return Math.round(Math.random() * 1000);
}
$(document).ready(function () {
    let chinacanvas = document.getElementById('china-canvas')
    // height = chinacanvas.offsetHeight
    // width = chinacanvas.offsetWidth
    // chinacanvas.width = width
    // chinacanvas.height = height

    document.getElementById('webgl-canvas').width = 300
    document.getElementById('webgl-canvas').height = 300

    provinceData = [
        { name: '北京', value: randomValue() },
        { name: '天津', value: randomValue() },
        { name: '上海', value: randomValue() },
        { name: '重庆', value: randomValue() },
        { name: '河北', value: randomValue() },
        { name: '河南', value: randomValue() },
        { name: '云南', value: randomValue() },
        { name: '辽宁', value: randomValue() },
        { name: '黑龙江', value: randomValue() },
        { name: '湖南', value: randomValue() },
        { name: '安徽', value: randomValue() },
        { name: '山东', value: randomValue() },
        { name: '新疆', value: randomValue() },
        { name: '江苏', value: randomValue() },
        { name: '浙江', value: randomValue() },
        { name: '江西', value: randomValue() },
        { name: '湖北', value: randomValue() },
        { name: '广西', value: randomValue() },
        { name: '甘肃', value: randomValue() },
        { name: '山西', value: randomValue() },
        { name: '内蒙古', value: randomValue() },
        { name: '陕西', value: randomValue() },
        { name: '吉林', value: randomValue() },
        { name: '福建', value: randomValue() },
        { name: '贵州', value: randomValue() },
        { name: '广东', value: randomValue() },
        { name: '青海', value: randomValue() },
        { name: '西藏', value: randomValue() },
        { name: '四川', value: randomValue() },
        { name: '宁夏', value: randomValue() },
        { name: '海南', value: randomValue() },
        { name: '台湾', value: randomValue() },
        { name: '香港', value: randomValue() },
        { name: '澳门', value: randomValue() }
    ]

    let maskcanvas = document.getElementById('mask-canvas')
    height = maskcanvas.offsetHeight
    width = maskcanvas.offsetWidth
    maskcanvas.width = width
    maskcanvas.height = height
    let hidemaskcanvas = document.getElementById('hide-mask-canvas')
    height = hidemaskcanvas.offsetHeight
    width = hidemaskcanvas.offsetWidth
    hidemaskcanvas.width = width
    hidemaskcanvas.height = height

    chinacanvasLeft = chinacanvas.getBoundingClientRect().left
    chinacanvasTop = chinacanvas.getBoundingClientRect().top
    webglcanvasLeft = document.getElementById('webgl-canvas').getBoundingClientRect().left
    webglcanvasTop = document.getElementById('webgl-canvas').getBoundingClientRect().top
    // console.log(123)
    var myChart = echarts.init(document.getElementById('china-canvas'), null, { devicePixelRatio: 3 });
    // option = {
    //     backgroundColor: '#000',
    //     visualMap: {
    //         min: 0,
    //         max: 2000,
    //         text: ['High', 'Low'],
    //         realtime: false,
    //         calculable: true,
    //         inRange: {
    //             color: ['#87CEFA', '#4169E1']
    //         },
    //         show: false
    //     },

    //     geo: {
    //         map: 'china',
    //         aspectScale: 0.75,
    //         layoutCenter: ["50%", "51.5%"],
    //         layoutSize: '100%',
    //         groundPlane: {
    //             show: true
    //         },
    //         itemStyle: {
    //             normal: {
    //                 borderWidth: 1.5,
    //                 borderColor: 'rgba(72,61,139,1)',
    //                 areaColor: '#4169E1'
    //             },
    //             emphasis: {
    //                 areaColor: 'rgba(25,25,112,1)',
    //             }
    //         },
    //         label: {
    //             emphasis: {
    //                 show: false,
    //             }
    //         },
    //         data: provinceData,
    //     },

    //     rotateSensitivity: 0,
    //     series: [{
    //         type: 'map',
    //         map: 'china',
    //         shading: 'lambert',
    //         roam: false,
    //         groundPlane: {
    //             show: true
    //         },
    //         layoutCenter: ["50%", "50%"],
    //         aspectScale: 0.75,
    //         layoutSize: '100%',
    //         itemStyle: {
    //             normal: {
    //                 borderWidth: 1.5,
    //                 borderColor: 'rgba(72,61,139,0.6)',
    //             },
    //             emphasis: {
    //                 areaColor: 'rgba(25,25,112,0)',
    //             }
    //         },
    //         label: {
    //             emphasis: {
    //                 show: false,
    //             }
    //         },
    //         data: provinceData
    //     }]
    // };
    option = {
        geo: [{
            map: 'china',
            aspectScale: 0.8,
            roam: false,
            layoutCenter: ["50%", "55%"],
            layoutSize: "90.0%",
            itemStyle: {
              opacity: 1,
              shadowColor: 'rgba(22,131,168,0.8)',
              shadowBlur: 10,
              borderColor: "rgba(22,131,168,0.8)",
              borderWidth: 1,
              emphasis:{
                  color:'rgba(22,131,168,0.8)'
              },
              areaColor: {
                type: 'radial',
                x: 600,
                y: 500,
                r: 300,
                colorStops: [{
                  offset: 0,
                  color: 'rgba(26,67,115,0.9)' // 0% 处的颜色
                }, {
                  offset: 1,
                  color: '#051127' // 50% 处的颜色
                }],
                global: true // 缺省为 false
              },
            },
            emphasis: {
              label: {
                show: true,
                color:'black'
              }
            },
            zlevel: 11,
          },
          {
            map: 'china',
            aspectScale: 0.8,
            roam: false,
            layoutCenter: ["50%", "55%"],
            layoutSize: "90.5%",
            itemStyle: {
              normal: {
                areaColor: 'rgba(0,255,255,.0)',
                borderColor: '#31c3e8',
                borderWidth: 4,
                shadowColor: 'rgba(49, 192, 230, 0.4)',

                shadowBlur: 15,
              },
            },
            zlevel: 10,
          },
        ],
        series:[{
            type: 'map',
            map: 'china',
            shading: 'lambert',
            roam: false,
            groundPlane: {
                show: true
            },
            layoutCenter: ["50%", "55%"],
            aspectScale: 0.8,
            layoutSize: '90.5%',
            itemStyle: {
                normal: {
                    borderWidth: 1.5,
                    borderColor: 'rgba(72,61,139,0.6)',
                },
            },
            label: {
                emphasis: {
                    show: false,
                }
            },
            data: provinceData
        }]
    };
    for (let i = 0; i <= 6; i++) {
        let gap = 55.5 + (0.5 * i)
        option.geo.push({
            map: 'china',
            silent: true,
            roam: false,
            layoutCenter: ["50%", gap + "%"],
            layoutSize: "90%",
            aspectScale: 0.8,
            itemStyle: {
                opacity: 0.9,
                shadowColor: 'rgba(49, 192, 230, 0.2)',
                shadowBlur: 20,
                borderColor: "rgba(11,85,850,0.1)",
                borderWidth: 3,
                shadowOffsetX: 3,
                shadowOffsetY: 3,
                areaColor: {
                    type: 'radial',
                    x: 600,
                    y: 400,
                    r: 250,
                    colorStops: [{
                        offset: 0,
                        color: '#051127' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#051127' // 50% 处的颜色
                    }],
                    global: true // 缺省为 false
                },
            },
            zlevel: 9 - i,
            regions: [{
                name: "南海诸岛",
                value: 0,
                itemStyle: {
                    normal: {
                        opacity: 0,
                        label: {
                            show: false
                        }
                    }
                }
            }]
        })
    };
    myChart.setOption(option)

    var seriesModel = myChart.getModel().getSeriesByIndex(0)
    var coordSys = seriesModel.coordinateSystem;
    //传入经纬度 获取offsetX,offsetY
    var point = coordSys.dataToPoint([116, 39]);
    // console.log(point)

    var context = document.getElementById('mask-canvas').getContext("2d")

    myChart.on('click', function (params) {
        // console.log('click:',params)
        // console.log('pageX:',params['event']['event']['clientX'])
        // maskcanavs上画的时候需要给出的是offsetX,offsetY，webglcanvas上获取的是clinetX，clientY，X基本一致，clinetY-top即获得offsetY
        // 而chinacanvas通过经纬度转换的XY都为offset,Y一致，X需要加上左侧距离
        // webglcanvas :[clientX,clientY-Top]
        // chinacanvas :[offsetX+Left,offsetY]
        // var chart = echarts.getInstanceById(document.getElementById('china-canvas').getAttribute('_echarts_instance_'))
        // let seriesModel = chart.getModel().getSeriesByIndex(0)
        // let coordSys = seriesModel.coordinateSystem;
        // let point = coordSys.dataToPoint([116, 39]);
        // console.log(point)
        /*
         *  mask-canvas  - click事件
         */
        //测试全局变量是否共享
        // console.log('in 2d-china.js:',clickPointList)
        //点击事件，切换eventpop
        // let e = params.event.event
        // tmp_vec = vec2.create()
        // let pickMaskX = e.clientX - maskcanvasLeft
        // let pickMaskY = e.clientY - maskcanvasTop

        // tmp_vec[0] = pickMaskX 
        // tmp_vec[1] = pickMaskY
        // //在hidemaskcanvas上绘制鼠标点击点<红色>
        // clickPointList.push(tmp_vec)
        // // 取鼠标点击颜色值
        // let maskPixel = hidemaskContext.getImageData(pickMaskX, pickMaskY, 1, 1);
        // let maskData = maskPixel.data

        // console.log('maskData:',maskData )

        // //方案1 - α值通道取 255个
        // //pick_alpha = maskData[3]
        // //方案2 - b通道
        // pick_alpha = maskData[2]
        // $('#eventpop').css("display", "none");

        // //借助eventpop显示信息
        // if(marker_mis_dict[pick_alpha]&&maskData[3] == 255){


        //     $('#eventpop').css("display", "block");
        //     for(let i=1;i<9;i++){
        //     $(".eventpop_subsystem[data-detectiontype='" + i + "'] .eventpop_subsystem_stats").html('');
        //     $(".eventpop_subsystem[data-detectiontype='" + i + "']").css('display','none');
        //     }
        //     $("#eventpop_title").html('marker num :'+marker_mis_dict[pick_alpha].index);


        // }
    })
    myChart.on('mousemove', function (params) {
        // let e = params.event.event
        // for(var i = 0 ;i<move_marker_mis.length;i++){
        //     // console.log(key,marker_screen_list[key])
        //     let value = move_marker_mis[i]
        //     marker_screen_list[value].isHighLight = false
        //     // console.log(marker_screen_list.length)
        //     // console.log('value',value)
        //   }

        // move_marker_mis = []
        // tmp_vec = vec2.create()
        // let pickMaskX = e.clientX - maskcanvasLeft
        // let pickMaskY = e.clientY - maskcanvasTop

        // tmp_vec[0] = pickMaskX 
        // tmp_vec[1] = pickMaskY

        // // 取鼠标点击颜色值
        // let maskPixel = hidemaskContext.getImageData(pickMaskX, pickMaskY, 1, 1);
        // let maskData = maskPixel.data

        // //  console.log('maskData:',maskData )

        // //方案1 - α值通道取 255个
        // //  pick_alpha = maskData[3]
        // //方案2 - b通道
        // pick_alpha = maskData[2]
        // $('#eventpop').css("display", "none");

        // //点击高亮逻辑
        // if(marker_mis_dict[pick_alpha]&& maskData[3] == 255 ){
        // last_marker_hover = true;
        // let tmp_num = marker_mis_dict[pick_alpha].index
        // marker_screen_list[tmp_num].isHighLight = true
        // move_marker_mis .push(tmp_num) 
        //     //console.log(tmp_num)
        // }

    })
    // 缩放时等比例
    window.addEventListener('resize', function () {
        // chinacanvas.width = $("#app").innerWidth()
        // chinacanvas.height = $("#app").innerHeight()
        // console.log(`resize:${$("#app").innerWidth()},${$("#app").innerHeight()}`)
        myChart.resize()
    })
    function dosth(sth) {
        console.log(sth)
    }
})
