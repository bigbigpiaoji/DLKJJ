<template>
  <div class="power-support-gdp-chart">
    <v-chart :autoresize="true" :option="option"></v-chart>
  </div>
</template>
<script>
export default {
  name: "power-support-gdp-chart",
  props: {
    predict: {
      type: Array,
      default: () => [],
    },
    realData: {
      type: Array,
      default: () => [],
    },
    Xdata: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      option: {},
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.initOption();
    },
    initOption() {
      this.option = {
        grid: {
          show: true,
          borderColor: "rgb(0 0 0 / 10%)",
          top: "20%",
          left: "9%",
          right: "0%",
          bottom: "0%",
          width: 340,
          height: 100,
        },
        legend: {
          data: [
            { name: "历史电力支撑", icon: "rect" },
            { name: "预测电力支撑" },
          ],
          left: 178,
          top: 6,
          itemWidth: 15,
          itemHeight: 4,
          itemGap: 22,
          textStyle: {
            color: "#D3DAF2",
            opacity: 0.8,
            fontSize: 11,
            fontFamily: "Microsoft YaHei",
          },
        },
        tooltip: {
          confine: true,
          trigger: "axis",
          axisPointer: {
            lineStyle: {
              opacity: 0,
            },
          },
          borderRadius: 0,
          padding: 0,
          borderColor: "#707070",
          borderWidth: 1,
          backgroundColor: "#000c28d9",
          formatter: function (params) {
            let name = "";
            let value = "";
            if (typeof params[0].value === "undefined") {
              name = params[1].seriesName;
              value = params[1].value;
            } else {
              name = params[0].seriesName;
              value = params[0].value;
            }
            return [
              "<div style='overflow:hidden;width:100%'>",
              "<img style='position:absolute;top:0';left:0 src=" +
                `${CONFIG.imgUrl}` +
                "/list/zsjzs.png />",
              "<div style='width:100%;padding:10px 0 0 10px;color:#fff'>" +
                params[0].axisValue +
                "年" +
                "</div>",
              "<div style='width:100%;height:100%;padding:5px 10px 10px'>",
              "<div style='display:flex;align-items:center;color:#fff'>",
              "<div style='background-color: #34FFBA" +
                ";width:5px;height:5px;color=#fff' class='l-mr-8'></div>",

              "<div style='margin-left:0rem'>" + name + "：</div>",
              "<div style='margin-left:0rem'>" + value + "</div>",
              "</div>",
              "</div>",
              "</div>",
            ].join("\n");
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          // data: [
          //   "2012",
          //   "2013",
          //   "2014",
          //   "2015",
          //   "2016",
          //   "2017",
          //   "2018",
          //   "2019",
          //   "2020",
          //   "2021",
          // ],
          data: this.Xdata,
          axisLine: {
            show: true,
            lineStyle: {
              height: 100,
              color: "#CFD4E8",
              opacity: 0.06,
            },
          },
          axisTick: { show: false },
          splitLine: {
            show: false,
          },
        },
        yAxis: {
          name: "单位：元/度",
          type: "value",
          boundaryGap: [0, "30%"],
          splitLine: {
            show: true,
            lineStyle: {
              color: "#CFD4E8",
              opacity: 0.06,
            },
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#CFD4E8",
              opacity: 0.06,
            },
          },
          nameTextStyle: {
            padding: [0, 0, 0, 9],
            color: "#D3DAF2",
            opacity: 0.8,
            fontSize: 10,
            fontFamily: "Microsoft YaHei",
          },
        },
        visualMap: {
          type: "piecewise",
          show: false,
          dimension: 0,
          seriesIndex: 0,
          pieces: [
            {
              gt: 2,
              lt: 3,
              color: "rgba(0, 255, 170, 0.2)",
            },
            {
              gt: 6,
              lt: 7,
              color: "rgba(0, 255, 170, 0.2)",
            },
          ],
        },
        series: [
          {
            type: "line",
            name: "历史电力支撑",
            symbol: "none",
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [
                {
                  offset: 0,
                  color: "#34FFBA", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#00DEFF", // 100% 处的颜色
                },
              ],
              globalCoord: false, // 缺省为 false
            },
            lineStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(52, 255, 186, 1)", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "rgba(0, 222, 255, 1)", // 100% 处的颜色
                  },
                ],
                globalCoord: false, // 缺省为 false
              },
            },

            areaStyle: {},
            // data: [
            //   ["2011", 17.1299819],
            //   ["2012", 18.69030605],
            //   ["2013", 20.8753991],
            //   ["2014", 21.2955191],
            //   ["2015", 22.60691076],
            //   ["2016", 24.3052827],
            //   ["2017", 26.32055761],
            //   ["2018", 27.54606805],
            //   ["2019", 27.36520696],
            //   ["2020", 28.1390363455163],
            // ],
            data: this.realData,
          },
          {
            type: "line",
            name: "预测电力支撑",
            symbol: "none",
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [
                {
                  offset: 0,
                  color: "#34FFBA", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#00DEFF", // 100% 处的颜色
                },
              ],
              globalCoord: false, // 缺省为 false
            },
            emphasis: {
              focus: "series",
            },
            itemStyle: {
              normal: {
                lineStyle: {
                  width: 2,
                  type: "dotted",
                  color: {
                    type: "linear",
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [
                      {
                        offset: 0,
                        color: "rgba(52, 255, 186, 1)", // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: "rgba(0, 222, 255, 1)", // 100% 处的颜色
                      },
                    ],
                    globalCoord: false, // 缺省为 false
                  },
                },
              },
            },
            smooth: 0.6,
            // data: [
            //   ["2020", 28.1390363455163],
            //   ["2021", 28.1390363455163],
            // ],
            data: this.predict,
          },
        ],
      };
    },
  },
};
</script>
<style lang="less">
.power-support-gdp-chart {
  height: 180px;
}
</style>