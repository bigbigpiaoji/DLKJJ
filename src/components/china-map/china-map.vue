<template>
  <div class="map-wrap">
    <div class="map-panel">
      <gdp-panel v-bind="gdp"></gdp-panel>
      <indicator-panel></indicator-panel>
    </div>
    <template v-if="false">
      <!-- 电力发展指数 -->
      <div class="tooltip">
        <div class="tooltip-head large">
          <div class="tooltip-name">中国经济电力发展指数</div>
          <div class="tooltip-head-content">
            <div class="tooltip-total">96</div>
            <div class="trend l-mw-100">
              <div class="trend-label">同比</div>
              <div class="trend-icon"></div>
              <div class="trend-value">3.12%</div>
            </div>
          </div>
        </div>
        <div class="tooltip-body">
          <div class="overview">
            <div class="overview-item">
              <div class="overview-name">固投电力弹性：：</div>
              <div class="overview-value">0.34</div>
              <div class="trend l-mw-100">
                <div class="trend-label">同比</div>
                <div class="trend-icon"></div>
                <div class="trend-value">0.12%</div>
              </div>
            </div>
            <div class="overview-item">
              <div class="overview-name">社消电力弹性：：</div>
              <div class="overview-value">0.859</div>
              <div class="trend l-mw-100">
                <div class="trend-label">同比</div>
                <div class="trend-icon"></div>
                <div class="trend-value">0.12%</div>
              </div>
            </div>
            <div class="overview-item">
              <div class="overview-name">外贸电力弹性：：</div>
              <div class="overview-value">-1.284</div>
              <div class="trend l-mw-100">
                <div class="trend-label">同比</div>
                <div class="trend-icon"></div>
                <div class="trend-value">0.12%</div>
              </div>
            </div>
            <div class="overview-item">
              <div class="overview-name">财政电力弹性：：</div>
              <div class="overview-value">0.949</div>
              <div class="trend l-mw-100">
                <div class="trend-label">同比</div>
                <div class="trend-icon"></div>
                <div class="trend-value">0.12%</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 负载 -->
      <div class="tooltip">
        <div class="tooltip-head">
          <div class="tooltip-name">罗湖区</div>
          <div class="tooltip-button">
            <div class="tooltip-rank">NO.</div>
            <div class="tooltip-sort">2</div>
          </div>
          <div class="tooltip-total">0.98</div>
        </div>
        <div class="tooltip-body">
          <div class="charge">
            <div class="charge-item">
              <div class="charge-name">最高负荷</div>
              <div class="charge-value">1256.5</div>
              <div class="charge-unit">万千瓦</div>
            </div>
            <div class="charge-item">
              <div class="charge-name">最低负荷</div>
              <div class="charge-value">1256.5</div>
              <div class="charge-unit">万千瓦</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 贡献度 -->
      <div class="tooltip">
        <div class="tooltip-head">
          <div class="tooltip-name">罗湖区</div>
          <div class="tooltip-button">
            <div class="tooltip-rank">NO.</div>
            <div class="tooltip-sort">2</div>
          </div>
          <div class="tooltip-total">0.62</div>
          <div class="tooltip-unit">元/度</div>
        </div>
        <div class="tooltip-body">
          <div class="charge">
            <div class="charge-item">
              <div class="charge-name">最高负荷</div>
              <div class="charge-value">1256.5</div>
              <div class="charge-unit">万千瓦</div>
              <div class="trend l-ml-20 l-mw-100">
                <div class="trend-label">同比</div>
                <div class="trend-icon"></div>
                <div class="trend-value">3.12%</div>
              </div>
            </div>
            <div class="charge-item">
              <div class="charge-name">最低负荷</div>
              <div class="charge-value">1256.5</div>
              <div class="charge-unit">万千瓦</div>
              <div class="trend l-ml-20 l-mw-100">
                <div class="trend-label">同比</div>
                <div class="trend-icon"></div>
                <div class="trend-value">3.12%</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 均衡度统计 -->

      <div class="tooltip">
        <div class="tooltip-head">
          <div class="tooltip-name">罗湖区</div>
          <div class="tooltip-button">
            <div class="tooltip-rank">NO.</div>
            <div class="tooltip-sort">2</div>
          </div>
          <div class="tooltip-total">3.62</div>
          <div class="tooltip-unit">%</div>
        </div>
        <div class="tooltip-body">
          <div class="sum">
            <div class="sum-item">
              <div class="sum-name">重点片区</div>
              <div class="sum-content">
                <div class="sum-value">1256</div>
                <div class="sum-unit">个</div>
              </div>
            </div>
            <div class="sum-item">
              <div class="sum-name">工业园区</div>
              <div class="sum-content">
                <div class="sum-value">1256</div>
                <div class="sum-unit">个</div>
              </div>
            </div>
            <div class="sum-item">
              <div class="sum-name">商圈</div>
              <div class="sum-content">
                <div class="sum-value">1256</div>
                <div class="sum-unit">个</div>
              </div>
            </div>
            <div class="sum-item">
              <div class="sum-name">写字楼</div>
              <div class="sum-content">
                <div class="sum-value">1256</div>
                <div class="sum-unit">个</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 产业 -->

      <div class="tooltip">
        <div class="tooltip-head">
          <div class="tooltip-name">罗湖区</div>
          <div class="tooltip-button">
            <div class="tooltip-rank">NO.</div>
            <div class="tooltip-sort">2</div>
          </div>
          <div class="tooltip-total">3.62</div>
          <div class="tooltip-unit">%</div>
        </div>
        <div class="tooltip-body">
          <div class="industry-title">各产业增长速度</div>
          <div class="industry">
            <div class="industry-item">
              <div class="industry-name">一产</div>
              <div class="industry-value">1256亿元</div>
              <div class="industry-unit">占比20.00%</div>

              <div class="trend l-ml-20 l-mw-100">
                <div class="trend-label">同比</div>
                <div class="trend-icon"></div>
                <div class="trend-value">3.12%</div>
              </div>
            </div>

            <div class="industry-item">
              <div class="industry-name">二产</div>
              <div class="industry-value">1256亿元</div>
              <div class="industry-unit">占比20.00%</div>

              <div class="trend l-ml-20 l-mw-100">
                <div class="trend-label">同比</div>
                <div class="trend-icon"></div>
                <div class="trend-value">3.12%</div>
              </div>
            </div>

            <div class="industry-item">
              <div class="industry-name">三产</div>
              <div class="industry-value">1256亿元</div>
              <div class="industry-unit">占比20.00%</div>

              <div class="trend l-ml-20 l-mw-100">
                <div class="trend-label">同比</div>
                <div class="trend-icon"></div>
                <div class="trend-value">3.12%</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 绿色指数 -->

      <div class="tooltip">
        <div class="tooltip-head">
          <div class="tooltip-name">罗湖区</div>
          <div class="tooltip-button">
            <div class="tooltip-rank">NO.</div>
            <div class="tooltip-sort">2</div>
          </div>
          <div class="tooltip-total">0.98</div>
        </div>
        <div class="tooltip-body">
          <div class="positive">
            <div class="positive-aside">
              <div class="positive-line"></div>
              <div class="positive-title">用电增速</div>
              <div class="positive-value">
                1.23
                <span class="positive-unit">%</span>
              </div>
              <div class="positive-title l-mt-20">GDP增速</div>
              <div class="positive-value">
                2.35
                <span class="positive-unit">%</span>
              </div>
            </div>

            <div class="positie-content">
              <div class="industry-title">产业GDP构成</div>
              <div class="industry">
                <div class="industry-item">
                  <div class="industry-name">一产</div>
                  <div class="industry-value">1256亿元</div>
                  <div class="industry-unit">占比20.00%</div>

                  <div class="trend l-ml-20 l-mw-100">
                    <div class="trend-label">同比</div>
                    <div class="trend-icon"></div>
                    <div class="trend-value">3.12%</div>
                  </div>
                </div>

                <div class="industry-item">
                  <div class="industry-name">二产</div>
                  <div class="industry-value">1256亿元</div>
                  <div class="industry-unit">占比20.00%</div>

                  <div class="trend l-ml-20 l-mw-100">
                    <div class="trend-label">同比</div>
                    <div class="trend-icon"></div>
                    <div class="trend-value">3.12%</div>
                  </div>
                </div>

                <div class="industry-item">
                  <div class="industry-name">三产</div>
                  <div class="industry-value">1256亿元</div>
                  <div class="industry-unit">占比20.00%</div>

                  <div class="trend l-ml-20 l-mw-100">
                    <div class="trend-label">同比</div>
                    <div class="trend-icon"></div>
                    <div class="trend-value">3.12%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <!-- 地图 -->
    <v-chart ref="map"
             class="l-full"
             :autoresize="true"
             :option="option"></v-chart>
  </div>
</template>

<script>
import request from '@/request'

export default {
  name: 'china-map',
  props: {
    gdp: {
      type: Object,
      default: () => ({
        name: '预计当年深圳GDP',
        date: '截至2021年 10月22日',
        value: '2465.89',
        unit: '万亿元',
        complete: 92.3,
      }),
    },
    currentCity: {
      type: String,
      default: 'shenzhen',
    },
    data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      citys: [
        {
          adcode: 440300,
          lng: 114.085947,
          lat: 22.547,
          name: '深圳市',
          alias: 'shenzhen',
          level: 'city',
          parent: 440000,
          sort: 1,
        },
        {
          adcode: 440100,
          lng: 113.280637,
          lat: 23.125178,
          name: '广州市',
          alias: 'guangzhou',
          level: 'city',
          parent: 440000,
          sort: 4,
        },
        {
          adcode: 110000,
          lng: 116.405285,
          lat: 39.904989,
          name: '北京市',
          alias: 'beijing',
          level: 'province',
          parent: 100000,
          sort: 3,
        },
        {
          adcode: 310000,
          lng: 121.472644,
          lat: 31.231706,
          name: '上海市',
          alias: 'shanghai',
          level: 'province',
          parent: 100000,
          sort: 2,
        },
      ],
      cityDataMap: {
        shenzhen: {
          title: '深圳经济电力发展指数',
          total: 105,
          percent: 3.96,

          list: [
            {
              name: '总值电力弹性：',
              total: 0.94,
              percent: 0.46,
            },
            {
              name: '固投电力弹性：',
              total: 0.34,
              percent: 0.16,
            },
            {
              name: '社消电力弹性：',
              total: 0.86,
              percent: 0.46,
            },
            {
              name: '外贸电力弹性：',
              total: -1.28,
              percent: -1.66,
            },
            {
              name: '财政电力弹性：',
              total: 0.95,
              percent: 0.35,
            },
          ],
        },
        guangzhou: {
          title: '广州经济电力发展指数',
          total: 78,
          percent: 5.41,

          list: [
            {
              name: '总值电力弹性：',
              total: 1.06,
              percent: 0.42,
            },
            {
              name: '固投电力弹性：',
              total: 0.44,
              percent: -0.02,
            },
            {
              name: '社消电力弹性：',
              total: 0.87,
              percent: 1.47,
            },
            {
              name: '外贸电力弹性：',
              total: -3.1,
              percent: -4.15,
            },
            {
              name: '财政电力弹性：',
              total: 1.19,
              percent: 0.86,
            },
          ],
        },
        beijing: {
          title: '北京经济电力发展指数',
          total: 77,
          percent: 1.32,

          list: [
            {
              name: '总值电力弹性：',
              total: 0.35,
              percent: -0.71,
            },
            {
              name: '固投电力弹性：',
              total: -0.88,
              percent: -0.16,
            },
            {
              name: '社消电力弹性：',
              total: 0.47,
              percent: -1.55,
            },
            {
              name: '外贸电力弹性：',
              total: 2.25,
              percent: 1.99,
            },
            {
              name: '财政电力弹性：',
              total: 3.9,
              percent: 2.81,
            },
          ],
        },
        shanghai: {
          title: '上海经济电力发展指数',
          total: 65,
          percent: -1.52,

          list: [
            {
              name: '总值电力弹性：',
              total: 0.02,
              percent: -0.36,
            },
            {
              name: '固投电力弹性：',
              total: 0.02,
              percent: -0.48,
            },
            {
              name: '社消电力弹性：',
              total: 0.02,
              percent: 0.29,
            },
            {
              name: '外贸电力弹性：',
              total: -0.02,
              percent: -0.34,
            },
            {
              name: '财政电力弹性：',
              total: 0.13,
              percent: -0.25,
            },
          ],
        },
      },
      geoMap: {},
      option: {},
      areaColor: {
        type: 'radial',
        x: 0.5,
        y: 0.5,
        r: 0.8,
        colorStops: [
          {
            offset: 0,
            color: 'rgba(0, 138, 189, 1)', // 0% 处的颜色
          },

          {
            offset: 1,
            color: 'rgba(0, 78, 189, 1)', // 100% 处的颜色
          },
        ],
        globalCoord: false, // 缺省为 false
      },

      borderColor: {
        type: 'radial',
        x: 0.5,
        y: 0.5,
        r: 0.8,
        colorStops: [
          {
            offset: 0,
            color: 'rgba(255,255,255,.5)', // 0% 处的颜色
          },
          {
            offset: 1,
            color: 'rgba(255,255,255,.4)', // 100% 处的颜色
          },
        ],
        globalCoord: false, // 缺省为 false
      },
    }
  },
  mounted() {
    this.init()
  },
  watch: {
    currentCity: {
      immediate: true,
      handler(val) {
        setTimeout(() => {
          let dataIndex =
            this.citys.findIndex((item) => item.alias === val) || 0
          this.$refs.map &&
            this.$refs.map.chart.dispatchAction({
              type: 'showTip',
              seriesIndex: 1,
              dataIndex,
            })
        }, 200)
      },
    },
  },
  methods: {
    async init() {
      try {
        let data = await this.fetchMapJson()
        this.$echarts.registerMap('china', data)
        this.initGeoMap(data)
        this.initOption()
      } catch (error) {}
    },
    fetchMapJson() {
      return request.get(`${CONFIG.geojsonUrl}/china.json`)
    },
    initGeoMap(data) {
      data.features.map((item) => {
        let obj = {}
        let { name, center } = item.properties
        this.geoMap[name] = center
        obj = {
          name,
          center,
        }
        return obj
      })
    },
    convertData(data, prop = 'value') {
      var res = []
      for (var i = 0; i < data.length; i++) {
        var geoCoord = this.geoMap[data[i].name]
        if (geoCoord) {
          res.push({
            name: data[i].name,
            value: geoCoord.concat(data[i][prop]),
          })
        }
      }
      return res
    },
    convertCityData(data, prop = 'name') {
      var res = []
      for (var i = 0; i < data.length; i++) {
        let item = data[i]
        res.push({
          name: item.name,
          ...item,
          value: [item.lng, item.lat].concat(item[prop]),
        })
      }
      return res
    },
    createCity(data) {
      if (!data) {
        return ''
      }
      let html = `
        <div class="tooltip" style="width:350px">
          <div class="tooltip-head large">
            <div class="tooltip-name">${data.title}</div>
            <div class="tooltip-head-content l-mt-10">
              <div class="tooltip-total">${data.total}</div>
              <div class="trend  l-mt-5">
                <div class="trend-label" style="width:30px">同比</div>
                <div class="trend-icon ${
                  data.percent >= 0 ? 'green-up' : 'red-down'
                }" style="width:10px"></div>
                <div class="trend-value" style="width:45px;text-align:right;">${
                 Math.abs( data.percent)
                }%</div>
              </div>
            </div>
          </div>
          <div class="tooltip-body">
            <div class="overview">
            ${data.list
              .map((item) => {
                return `
                  <div class="overview-item">
                    <div class="overview-name">${item.name}</div>
                    <div class="overview-value">${item.total}</div>
                    <div class="trend ">
                      <div class="trend-label" style="width:30px">同比</div>
                      <div class="trend-icon ${
                        item.percent >= 0 ? 'red-up' : 'green-down'
                      }" style="width:10px"></div>
                      <div class="trend-value" style="width:45px;text-align:right;">${Math.abs(
                        item.percent
                      )}%</div>
                    </div>
                  </div>
                `
              })
              .join('')}
            </div>
          </div>
        </div>
      `

      return html
    },
    initOption() {
      this.option = {
        tooltip: {
          trigger: 'item',
          confine: true,
          triggerOn: 'mousemove|click',
          alwaysShowContent: false, //中国地图浮窗是否一直展示
          backgroundColor: 'transparent',
          borderColor: 'transparent',
          padding: 0,
          enterable: true,
          formatter: (params) => {
            let alias = params.data.alias
            let cityData = this.cityDataMap[alias]
            return this.createCity(cityData)
          },
        },
        backgroundColor: 'transparent',
        legend: {
          right: 30,
          top: 260,
          icon: 'rect',
          textStyle: {
            color: '#fff',
            fontSize: 14,
          },
          itemWidth: 12,
          itemHeight: 12,
          data: [
            {
              name: '充电设施数',

              itemStyle: {
                color: '#1a4499',
              },
            },
            {
              name: '装机总功率',

              itemStyle: {
                color: '#ad7803',
              },
            },
          ],
        },

        geo: [
          {
            map: 'china',
            zoom: 0.9,
            geoIndex: 0,
            aspectScale: 1,
            roam: false,
            top: 190,

            itemStyle: {
              normal: {
                borderColor: this.borderColor,
                borderWidth: 2,
                shadowColor: 'rgba(0, 78, 189, 1)',
                shadowOffsetX: 0,
                shadowOffsetY: 5,
                shadowBlur: 10,
              },
            },
            silent: true,
          },
        ],
        series: [
          {
            type: 'map',
            name: '中国',
            mapType: 'china', // 自定义扩展图表类型
            aspectScale: 1,
            zoom: 0.9,
            top: 190,

            label: {
              show: false,
              color: '#fff',
              fontSize: 14,
            },
            itemStyle: {
              areaColor: this.areaColor,
              borderColor: this.borderColor,
              borderWidth: 1,
            },
            emphasis: {
              itemStyle: {
                areaColor: 'rgba(0, 78, 189, 1)',
              },
              label: {
                show: false,
                color: '#fff',
                fontSize: 14,
              },
            },

            selectedMode: false,
            data: this.data,
            tooltip: {
              show: false,
            },
          },

          {
            type: 'scatter',
            coordinateSystem: 'geo',
            name: '城市',
            symbol: `image://${CONFIG.imgUrl}/map/triangle.png`,
            symbolSize: [46, 29],
            opacity: 1,
            label: {
              normal: {
                position: 'top',
                distance: -6,
                show: true,
                textStyle: {
                  color: '#fff',
                  align: 'center',
                },
                formatter(parmas) {
                  return `{success|${parmas.data.sort}}`
                },
                rich: {
                  success: {
                    backgroundColor: {
                      image: `${CONFIG.imgUrl}/map/label.png`,
                    },
                    borderColor: '#fff',
                    fontSize: 14,
                    height: 25,
                    padding: [5, 0, 0, 0],
                    opacity: 1,
                  },
                },
              },
            },

            emphasis: {
              label: {
                position: 'top',
                distance: -6,
                show: true,
                textStyle: {
                  color: '#fff',
                  align: 'center',
                },
                formatter(parmas) {
                  return `{success|${parmas.data.sort}}`
                },
                rich: {
                  success: {
                    backgroundColor: {
                      image: `${CONFIG.imgUrl}/map/lightlabel.png`,
                    },

                    borderColor: '#fff',
                    fontSize: 14,
                    height: 25,
                    padding: [5, 0, 0, 0],
                    opacity: 1,
                  },
                },
              },
            },
            data: this.convertCityData(this.citys),
          },
        ],
      }
    },
  },
}
</script>

<style lang="less" scoped>
@import "../../style/var.less";
.map-wrap{
  height: 967px;
}
</style>