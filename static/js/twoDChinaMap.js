import echarts from 'echarts';
import 'echarts/map/js/china'
import 'echarts/dist/extension/dataTool.min.js';
import 'echarts/lib/component/geo'
import 'echarts/lib/chart/scatter'
import 'echarts/lib/chart/effectScatter'
import 'echarts/lib/chart/lines'
import 'echarts/lib/chart/lines/LinesSeries'
import 'echarts-gl';
import chilunIndex from '../wheelChart/index.vue'
import luomuIndex from './luomuindex.vue'

import {
  getProvinceURL,
  cityCenter
} from './provincesURL'

import axios from 'axios';
const normalDoughnut = () => import('../normalDoughnut/index')

export default {
  components: {
    chilunIndex,
    luomuIndex,
    'normalDoughnut': normalDoughnut
  },
  data() {
    return {
      mapZoomValue: 1,
      myChart: {},
      timer: null,
      countryOption: {},
      provinceOption: {},
      geoCoordMapData: {},
      heatmapData: [],
      scatterData: [],
      countryJGInfo: [],
      clicked: null,
      dw: 0,
      jgzc: 0,
      jgwz: 0,
      jgptjr: 0,
      smry: 0,
      dwXZ: null,
      jgzcXZ: null,
      jgwzXZ: null,
      smryXZ: null,
      iconWrap: true,
      nutName: null,
      tudingInfoName: '',
      tudingAllData: [],
      cityData: {},
      allDanWei: null,
      haveInfo: false,
      positionArr: [],
      nutChartData: {},
      allCityArr: [],
      checkName: '',
      areaCenter: [{
          name: '房山',
          center: ['554px', '773px']
        },
        {
          name: '门头沟',
          center: ['449px', '730px']
        },
        {
          name: '大兴',
          center: ['517px', '991px']
        },
        {
          name: '丰台',
          center: ['475px', '904px']
        },
        {
          name: '石景山',
          center: ['449px', '864px']
        },
        {
          name: '通州',
          center: ['448px', '1088px']
        },
        {
          name: '海淀',
          center: ['423px', '882px']
        },
        {
          name: '西城',
          center: ['438px', '931px']
        },
        {
          name: '东城',
          center: ['443px', '952px']
        },
        {
          name: '朝阳',
          center: ['412px', '988px']
        },
        {
          name: '昌平',
          center: ['362px', '832px']
        },
        {
          name: '顺义',
          center: ['344px', '992px']
        },
        {
          name: '平谷',
          center: ['303px', '1101px']
        },
        {
          name: '怀柔',
          center: ['255px', '909px']
        },
        {
          name: '延庆',
          center: ['288px', '778px']
        },
        {
          name: '密云',
          center: ['249px', '1018px']
        },
      ],
      wheelChartData: [
        {
          name: "网站",
          value: 100
        },
        {
          name: "设备",
          value: 200
        },
        {
          name: "单位",
          value: 200
        },
        {
          name: "人员",
          value: 100
        }
      ],
      wheelChartProvince: [],
      countWheel: 0,
      showWheelChartDetail: false,
      checkItem: '',
      normalChartData: [],
      sbData:[],
      ryData:[],
      dwData:[],
      wzData:[],
      detailBoxColor: ['#0ed1fa', '#ffdd23', '#f17417'],
      detailShow: false,
      isSuiJi: null,
      cityName: '',
      bjquyuName: ''
    }
  },
  computed: {
    supervision: function () {
      return this.$store.state.supervision
    },
    industry: function () {
      return this.$store.state.industry
    },
    nowCity: function () {
      return this.$store.state.nowCity
    }
  },
  methods: {
    //开始计时器
    startNut() {
      var self = this
      this.nutTime = setInterval(() => {
        let number = Math.floor(Math.random() * this.areaCenter.length);
        $('.nutChartContainer').css({
          'top': this.areaCenter[number].center[0],
          'left': this.areaCenter[number].center[1]
        })
        self.bjquyuName = this.areaCenter[number].name
        let suijiQuyu = this.areaCenter[number].name;
        let api = '';
        switch (suijiQuyu) {
          case '房山':
            api = '/api/baseDataFangshan';
            break;
          case '石景山':
            api = '/api/baseDataShijingshan';
            break;
          case '海淀':
            api = '/api/baseDataHaidian';
            break;
          case '西城':
            api = '/api/baseDataXicheng';
            break;
          case '东城':
            api = '/api/baseDataDongcheng';
            break;
          case '丰台':
            api = '/api/baseDataFengtai';
            break;
          case '朝阳':
            api = '/api/baseDataChaoyang';
            break;
          case '密云':
            api = '/api/baseDataMiyun';
            break;
          case '延庆':
            api = '/api/baseDataYanqing';
            break;
          case '大兴':
            api = '/api/baseDataDaxing';
            break;
          case '门头沟':
            api = '/api/baseDataMentougou';
            break;
          case '顺义':
            api = '/api/baseDataShunyi';
            break;
          case '怀柔':
            api = '/api/baseDataHuairou';
            break;
          case '昌平':
            api = '/api/baseDataChangping';
            break;
          case '通州':
            api = '/api/baseDataTongzhou';
            break;
          case '平谷':
            api = '/api/baseDataPinggu';
            break;
        }
        // 支持联动，临时调用
        this.$http({
          method: 'get',
          url: api,
          params: {}
        }).then((res) => {
          this.nutChartData = res.data;
        })
      }, 4000)
    },
    //螺母随机显示
    nutRotation() {
      this.isSuiJi = true;
    },
    init() {

      axios.all([
          this.getData('/static/json/countryheatmapdata.json'),
          this.getData('/static/json/countryMapdata.json')
        ])
        .then(axios.spread((heatRes, countryRes) => {

          if (heatRes.status == 200) {
            this.heatmapData = heatRes.data;

            for (let i = 0; i < this.heatmapData.length; i++) {
              this.dw += this.heatmapData[i].info.danwei;
              this.jgzc += this.heatmapData[i].info.zichan;
              this.jgwz += this.heatmapData[i].info.wangzhan;
              this.jgptjr += this.heatmapData[i].info.pingtai;
              this.smry += this.heatmapData[i].info.renyuan;
            }
          } else {
            console.log("getHeatMapData数据获取失败");
            return;
          }

          if (countryRes.status == 200) {
            this.countryJGInfo = countryRes.data;

          } else {
            console.log("getScatterData数据获取失败");
          }

          //获取数据成功后，初始化chart
          let elem = document.getElementById('mapBox');
          this.myChart = echarts.init(elem);
          var mapName = 'china'
          this.myChart.showLoading();
          this.myChart.hideLoading();

          this.countryOption = {

            geo: [{
                map: 'china',
                aspectScale: 0.8,
                roam: false,
                layoutCenter: ["50%", "55%"],
                layoutSize: "115.0%",
                itemStyle: {
                  opacity: 1,
                  shadowColor: 'rgba(22,131,168,0.8)',
                  shadowBlur: 10,
                  borderColor: "rgba(22,131,168,0.8)",
                  borderWidth: 1,
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
                    show: true
                  }
                },
                zlevel: 11,
              },
              {
                map: 'china',
                aspectScale: 0.8,
                roam: false,
                layoutCenter: ["50%", "55%"],
                layoutSize: "115.5%",
                itemStyle: {
                  normal: {
                    areaColor: 'rgba(0,255,255,.0)',
                    borderColor: '#31c3e8',
                    borderWidth: 4,
                    shadowColor: 'rgba(49, 192, 230, 0.4)',

                    shadowBlur: 15,
                  }
                },
                zlevel: 10,
              },
            ]
          };
          //加入分层区
          for (let i = 0; i <= 6; i++) {
            let gap = 55.5 + (0.5 * i)
            this.countryOption.geo.push({
              map: 'china',
              silent: true,
              roam: false,
              layoutCenter: ["50%", gap + "%"],
              layoutSize: "115%",
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
          this.myChart.setOption(this.countryOption);
          this.supportProvinces();
          this.calPeiPosition();
        }))
       
    },
    getData(url) {
      return axios.get(url)
    },
    supportProvinces() {
      let _this = this;
      this.myChart.on('click', (params) => {
        //只有选择北京时才下钻
        if (params.componentType == 'geo' && params.name == '北京') {

          if(this.timer) {
            clearInterval(this.timer)
          }
          if(this.showWheelChartDetail){
            this.showWheelChartDetail = false
          }
          let pei = document.getElementsByClassName('wheelChartClass');
          for(var i = 0;i < pei.length; i++){
            pei[i].style.display = 'none';
          }
          
          //地图下钻，不与BW、HY等筛选项交叉，所以将筛选项置为默认
          if (this.supervision != '0' || this.industry != '0')
            this.setSelection('0', '0')

          var name = params.name; //地区name

          var pURL = getProvinceURL(name); //地区的json数据
          if (!pURL) {
            return;
          }
          this.loadProvinceMap(pURL, name);
        }


      })
    },
    loadProvinceMap(pURL, name) {

      var heatData;
      var mapData;
      var scatterD;
      var Maodian;
      var api;
      var jia = [{
          "name": "德州市",
          "value": [
            116.307428,
            37.453968,
            0
          ]
        },
        {
          "name": "日照市",
          "value": [
            119.461208,
            35.42858,
            10
          ]
        },
      ];
      if (name == '北京') {
        heatData = '/static/json/beijingheatmap.json';
        mapData = '/static/json/beijingJGData.json';
        scatterD = '/static/json/beijingScatter.json';
        Maodian = '/static/json/beijingMaodian.json';

      }

      var heatResHeight = function (data) {
        var res = [];
        for (let i = 0; i < data.length; i++) {
          var geoCoord = data[i].value
          res.push({
            name: geoCoord[2],
            value: [geoCoord[0], geoCoord[1], 3, geoCoord[3]]
          });
        }
        return res;

      };
      axios.all([
          this.getData(heatData),
          this.getData(pURL),
          this.getData(mapData),
          this.getData(scatterD),
          // this.getData(Maodian),
        ])
        .then(axios.spread((heatRes, mapRes, jgRes, scatterRes) => {

          this.iconWrap = false;
          for (let i = 0; i < heatRes.data.length; i++) {
            this.dwXZ += heatRes.data[i].info.danwei;
            this.jgzcXZ += heatRes.data[i].info.zichan;
            this.jgwzXZ += heatRes.data[i].info.wangzhan;
            this.smryXZ += heatRes.data[i].info.renyuan;
          }
          if (mapRes.status === 200) {
            echarts.registerMap(name, mapRes.data);

            this.myChart.off('click')
            this.myChart.clear()

            this.provinceOption = {
              visualMap: [{
                  show: false,
                  min: 0,
                  max: 500,
                  seriesIndex: 0,
                  inRange: {
                    color: ['rgb(4,92,189)', 'rgb(42,113,189)', 'rgb(2,29,51)']
                  }
                },
                {
                  show: false,
                  seriesIndex: 2,
                  type: 'piecewise',
                  categories: ['一级', '二级', '无'],
                  inRange: {
                    color: {
                      '一级': 'red',
                      '二级': 'orange',
                      '': 'yellow'
                    }
                  }
                },
              ],
              geo3D: {
                map: name,
                show: false,
                zlevel: 10,
                viewControl: {
                  alpha: 40,
                  minAlpha: 40,
                  maxAlpha: 40,
                  beta: -20,
                  minBeta: -20,
                  maxBeta: -20,
                  distance: 130,
                  panSensitivity: 1,
                  panMouseButton: 'left',
                  rotateMouseButton: 'middle'
                },
              },
              series: [{
                  map: name,
                  type: 'map3D',
                  roam: true,
                  show: true,
                  geo3DIndex: 0,
                  zlevel: -10,
                  viewControl: {
                    alpha: 40,
                    minAlpha: 40,
                    maxAlpha: 40,
                    beta: -20,
                    minBeta: -20,
                    maxBeta: -20,
                    distance: 130,
                    panSensitivity: 1,
                    panMouseButton: 'left',
                    rotateMouseButton: 'middle'
                  },
                  itemStyle: {
                    borderWidth: 2, //分界线宽度
                    borderColor: "#207fce", //分界线颜色
                  },
                  label: {
                    show: false,
                    textStyle: {
                      color: '#fff', //地图初始化区域字体颜色
                      fontSize: 16,
                      opacity: 1,
                      backgroundColor: 'rgba(0,0,0,0)'
                    },
                  },
                  data: heatRes.data
                },
                {
                  type: 'scatter3D',
                  coordinateSystem: 'geo3D',
                  data: jia,
                  symbol: 'pin',
                  geo3DIndex: 0,
                  symbolSize: 0,
                  itemStyle: {
                    color: 'purple',
                    borderColor: '#fff',
                    borderWidth: 1
                  },
                  viewControl: {
                    alpha: 40,
                    minAlpha: 40,
                    maxAlpha: 40,
                    beta: -20,
                    minBeta: -20,
                    maxBeta: -20,
                    distance: 130,
                    panSensitivity: 1,
                    panMouseButton: 'left',
                    rotateMouseButton: 'middle'
                  },
                  label: {
                    show: false,
                    formatter: '{b}: {c}'
                  }

                },
                {
                  type: 'scatter3D',
                  coordinateSystem: 'geo3D',
                  data: heatResHeight(scatterRes.data),
                  symbol: 'path://M52.118,44.842 C52.615,43.982 52.756,42.001 47.078,41.962 C41.133,41.860 41.498,44.169 42.039,44.842 C42.515,44.934 44.919,44.842 44.919,44.842 L45.639,47.721 L49.238,44.842 C49.238,44.842 49.899,44.821 52.118,44.842 Z,M44.919,48.945 L49.238,46.031 L48.518,48.441 L45.639,51.321 L44.919,48.945 Z,M45.639,51.321 L48.518,49.881 L47.078,54.920 L45.639,51.321 Z',
                  symbolSize: 20,
                  zlevel: 100,
                  geo3DIndex: 0,
                  name: 'zhen',
                  viewControl: {
                    alpha: 40,
                    minAlpha: 40,
                    maxAlpha: 40,
                    beta: -20,
                    minBeta: -20,
                    maxBeta: -20,
                    distance: 130,
                    panSensitivity: 1,
                    panMouseButton: 'left',
                    rotateMouseButton: 'middle'
                  },
                  label: {
                    show: false,
                    formatter: '',
                  },
                  itemStyle: {
                    color: 'purple',
                    borderColor: '#fff',
                    borderWidth: 1
                  },
                  emphasis: { //当鼠标放上去  地区区域是否显示名称
                    itemStyle: {
                      areaColor: 'red'
                    }
                  },
                },
              ]
            }
            this.myChart.setOption(this.provinceOption);
            this.nutRotation();
            let nut = document.getElementsByClassName('nutChartContainer')[0]
            nut.style.display = 'block';
            this.myChart.getZr().on('mousedown', function (params) {
              let yellowArea = document.getElementsByClassName('toolwrap')[0]
              yellowArea.style.display = 'none';
              let nut = document.getElementsByClassName('nutChartContainer')[0]
              nut.style.display = 'none';
            })
            //监听滚动事件
            let that = this;
            var scrollFunc = function (e) {
              that.isSuiJi = false;
              clearInterval(that.nutTime)
              e = e || window.event;
              if (e.wheelDelta) { //第一步：先判断浏览器IE，谷歌滑轮事件    
                if (e.wheelDelta > 0) { //当滑轮向上滚动时 
                  let yellowArea = document.getElementsByClassName('toolwrap')[0]
                  yellowArea.style.display = 'none';
                  let nut = document.getElementsByClassName('nutChartContainer')[0]
                  nut.style.display = 'none';

                }
                if (e.wheelDelta < 0) { //当滑轮向下滚动时 
                  let yellowArea = document.getElementsByClassName('toolwrap')[0]
                  yellowArea.style.display = 'none';
                  let nut = document.getElementsByClassName('nutChartContainer')[0]
                  nut.style.display = 'none';

                }
              } else if (e.detail) { //Firefox滑轮事件 
                if (e.detail > 0) { //当滑轮向上滚动时 
                  let yellowArea = document.getElementsByClassName('toolwrap')[0]
                  yellowArea.style.display = 'none';
                  let nut = document.getElementsByClassName('nutChartContainer')[0]
                  nut.style.display = 'none';

                }
                if (e.detail < 0) { //当滑轮向下滚动时 
                  let yellowArea = document.getElementsByClassName('toolwrap')[0]
                  yellowArea.style.display = 'none';
                  let nut = document.getElementsByClassName('nutChartContainer')[0]
                  nut.style.display = 'none';

                }
              }
            }
            //给页面绑定滑轮滚动事件 
            if (document.addEventListener) { //firefox 
              document.addEventListener('DOMMouseScroll', scrollFunc, false);
            }
            //滚动滑轮触发scrollFunc方法 //ie 谷歌 
            window.onmousewheel = document.onmousewheel = scrollFunc;
           
            this.myChart.on('click', {
              seriesName: 'zhen'
            }, (params) => {
              this.tudingInfoName = params.name;
              this.selectTuding = params;
              this.haveInfo = this.cityData.lists.danwei.length > this.selectTuding.dataIndex;
              console.log("tudingInfoName: ", this.tudingInfoName)
              this.$http({
                method: 'get',
                url: '/api/baseDataBeijing',
                params: {}
              }).then((res) => {
                // this.$store.dispatch('updateBaseDataInfo', res.data);
                this.$store.commit('changeBaseInfoList', this.tudingInfoName)
              }).catch((res) => {
                console.log("获取地区数据失败");
              })
              
              let yellowArea = document.getElementsByClassName('toolwrap')[0]
              yellowArea.style.display = 'block';
              yellowArea.style.top = `${params.event.offsetY-1795}px`;
              yellowArea.style.left = `${params.event.offsetX + 283}px`;
            });

            var that = this
            //城市数据联动
            this.myChart.on('click', (params) => {
              //暂时暴力取消高亮，之后需要修改逻辑
              this.$store.commit('changeBaseInfoList', '')
              //判断点击到了哪个元素
              if (params.componentType == 'series') {
                clearInterval(this.nutTime)
                if (params.seriesIndex == 0) { //点击地图
                  var quyu = params.data.name
                  that.bjquyuName = quyu 

                  var api = ''
                  switch (quyu) {
                    case '房山区':
                      api = '/api/baseDataFangshan';
                      break;
                    case '石景山区':
                      api = '/api/baseDataShijingshan';
                      break;
                    case '海淀区':
                      api = '/api/baseDataHaidian';
                      break;
                    case '西城区':
                      api = '/api/baseDataXicheng';
                      break;
                    case '东城区':
                      api = '/api/baseDataDongcheng';
                      break;
                    case '丰台区':
                      api = '/api/baseDataFengtai';
                      break;
                    case '朝阳区':
                      api = '/api/baseDataChaoyang';
                      break;
                    case '密云区':
                      api = '/api/baseDataMiyun';
                      break;
                    case '延庆区':
                      api = '/api/baseDataYanqing';
                      break;
                    case '大兴区':
                      api = '/api/baseDataDaxing';
                      break;
                    case '门头沟区':
                      api = '/api/baseDataMentougou';
                      break;
                    case '顺义区':
                      api = '/api/baseDataShunyi';
                      break;
                    case '怀柔区':
                      api = '/api/baseDataHuairou';
                      break;
                    case '昌平区':
                      api = '/api/baseDataChangping';
                      break;
                    case '通州区':
                      api = '/api/baseDataTongzhou';
                      break;
                    case '平谷区':
                      api = '/api/baseDataPinggu';
                      break;
                  }
                  // 支持联动，临时调用
                  this.$http({
                    method: 'get',
                    url: api,
                    params: {}
                  }).then((res) => {
                    this.$store.dispatch('updateBaseDataInfo', res.data);
                    let nut = document.getElementsByClassName('nutChartContainer')[0]
                    nut.style.display = 'block';
                    nut.style.top = `${params.event.offsetY -50}px`;
                    nut.style.left = `${params.event.offsetX +335}px`;
                    this.nutChartData = res.data;
                  }).catch((res) => {
                    console.log("获取地区数据失败");
                  })
                }
              }
            })

            switch (name) {
              case '北京':
                api = '/api/baseDataBeijing';
                break;
              case '四川':
                api = '/api/baseDataSichuan';
                break;
              case '河北':
                api = '/api/baseDataHebei';
                break;
              default:
                api = '/api/baseData';
                break;
            };

            // 支持联动，临时调用
            this.$http({
              method: 'get',
              url: api,
              params: {}
            }).then((res) => {
              this.cityData = res.data;
              this.allDanWei = this.cityData.lists.danwei;

              this.dwXZ += res.data.jcxx[0].value;
              this.jgzcXZ += res.data.jcxx[2].value;
              this.jgwzXZ += res.data.jcxx[3].value;
              this.smryXZ += res.data.jcxx[1].value;
              this.$store.dispatch('updateBaseDataInfo', res.data);
            })
          } else {
            console.log("获取" + name + "数据失败");
            return;
          }
        }));

    },

    setSelection(industryVal, supervisionVal) {

      var supervisionObj = {
        '0': [{
          "value": '0',
          "label": '不限'
        }],
        '01': [{
          "value": '01',
          "label": '农业部'
        }],
        '02': [{
          "value": '02',
          "label": '科学技术部'
        }],
        '03': [{
          "value": '03',
          "label": '教育部'
        }]
      }

      this.$store.dispatch('updateIndustry', industryVal);
      this.$store.dispatch('updateSupervision', supervisionObj[supervisionVal])
    },
    updateData(industryVal, supervisionVal) {

      var api = '/api/baseData';

      if (industryVal == "0" && supervisionVal == "0") {
        api = '/api/baseData';
      } else if (industryVal == "01") {
        api = '/api/baseDataFinancial';
      } else if (industryVal == "02") {
        api = '/api/baseDataComputer';
      } else if (supervisionVal == "01") {
        api = '/api/baseDataNongye';
      } else if (supervisionVal == "02") {
        api = '/api/baseDataKexue';
      } else if (supervisionVal == "03") {
        api = '/api/baseDataJiaoyu'
      }
      this.$http({
        method: 'get',
        url: api,
        params: {}
      }).then((res) => {
        this.$store.dispatch('updateBaseDataInfo', res.data);
      })
    },
    transCountryMap() {
      //清除下钻螺母图轮播
      console.log("stop luomu")
      //暴力清除表格首行的样式，之后需要修改这个部分
      this.$store.commit('changeBaseInfoList', '')
      let nut = document.getElementsByClassName('nutChartContainer')[0]
      nut.style.display = 'none';
      // clearInterval(this.nutTime)
      this.myChart.off('click')
      this.myChart.clear();
      this.iconWrap = true;

      this.myChart.setOption(this.countryOption);

      this.supportProvinces();

      let yellowArea = document.getElementsByClassName('toolwrap')[0]
      yellowArea.style.display = 'none';
      
      this.peiPosition()

      //将筛选项置为空
      this.setSelection(this.industry, this.supervision)
      this.updateData(this.industry, this.supervision)
    },
    calPeiPosition(){
      let data = [];
      let pixel = null;
      for(let i=0;i<cityCenter.city.length;i++){
        pixel = this.myChart.convertToPixel('geo', [cityCenter.city[i].g[0],cityCenter.city[i].g[1]])
        data.push(pixel)
        // console.log(" city lot lat: ", cityCenter.city[i].n, pixel);
      }
      
      this.positionArr = data;
    },
    //定时切换饼图位置
    peiPosition() {
      if(this.timer){
        clearInterval(this.timer)
      }
      let _this = this
      // console.log("cityCenter: ", cityCenter);
      var center = cityCenter
      this.timer = setInterval(function () {
        
        let peiComp = document.getElementsByClassName('wheelChartClass');
        _this.wheelChartProvince = []

        for(var i = 0;i < peiComp.length;i ++){
          peiComp[i].style.display = 'block'
          if(i + _this.countWheel * 5 <= 33){ //34个省份
            peiComp[i].style.top = `${_this.positionArr[i + _this.countWheel * 5][1]-875}px`;
            peiComp[i].style.left = `${_this.positionArr[i + _this.countWheel * 5][0]-578}px`;

            _this.wheelChartProvince[i] = center.city[i + _this.countWheel * 5].n
            // console.log("wheelChartProvince center: ",  _this.wheelChartProvince[i], _this.positionArr[i + _this.countWheel * 5]);
          } else {
            _this.countWheel = 0
            return;
          }
        }
       
        _this.countWheel ++
        
      }, 4000)

    },
    stopWheelChartOnMap(clickType , doughnutData, province){
      if(this.timer){
        clearInterval(this.timer)
      }
      
      this.checkItem = clickType
      if(clickType == 'danwei'){
        this.normalChartData = doughnutData
        this.dwData = doughnutData
        
        $("#checkIcon")[0].src =
        "../../../../static/img/global/单位统计icon.png";

      } else if(clickType == 'renyuan'){
        this.normalChartData = doughnutData.data
        this.ryData = doughnutData

        $("#checkIcon")[0].src =
            "../../../../static/img/global/人员统计icon.png";
      } else if(clickType == 'shebei'){
        this.normalChartData = doughnutData.data
        this.sbData = doughnutData

        $("#checkIcon")[0].src =
            "../../../../static/img/global/监管资产icon.png";

      } else if(clickType == 'wangzhan'){
        this.normalChartData = doughnutData
        this.wzData = doughnutData

        $("#checkIcon")[0].src =
            "../../../../static/img/global/监管网站icon.png";
          
      } 

      this.cityName = province
      
      let obj = this
      setTimeout(()=> {
        obj.showWheelChartDetail = true
      }, 500)
    },
    closeDetailPie(){
        this.showWheelChartDetail = false
        this.peiPosition()
    }
  },
  watch: {
    supervision: function (val) { //选择了任何筛选项都需要回到中国地图界面
      this.transCountryMap();

    },
    industry: function (val) {
      this.transCountryMap();
    },
    nowCity: function (val) {},
    isSuiJi: function (val, oldval) {
      if (val == true) {
        $('.nutChartContainer').css('display', 'block');
        this.startNut()
        $('.wheelDetailPieImg').on('click', () => {
          this.startNut()
        })
        $('.box').on('click', () => {
          clearInterval(this.nutTime)
        })
      } else {
        $('.wheelDetailPieImg').on('click', () => {
          clearInterval(this.nutTime)
        })
      }
    }
  },
  mounted() {
    this.init();
    this.peiPosition()
  },
  beforeDestroy() {
    clearInterval(this.timer)
    clearInterval(this.nutTime)
    this.myChart.clear()
  }
}
