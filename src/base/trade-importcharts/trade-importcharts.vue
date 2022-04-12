<template>
  <div class="v-chart">
    <v-chart
      ref="line"
      class="l-full"
      :autoresize="true"
      :option="option"
    ></v-chart>
  </div>
</template>

<script>
export default {
  name: "trade-importcharts",
  props: {
    height: {
      type: String,
      default: "120px",
    },
  },
  data() {
    return {
      option: {},
      timer: null,
    };
  },
  mounted() {
    this.init();
  },

  methods: {
    init() {
      this.option = {
        tooltip: {
          axisPointer: {
            lineStyle: {
              opacity: 0,
            },
          },
          trigger: "axis",
          borderRadius: 0,
          padding: 0,
          borderColor: "#707070",
          borderWidth: 1,
          backgroundColor: "#000c28d9",
          formatter: function (params) {
            let legendColor1 = params[0].color;
            let legendColor2 = params[1].color;

            let production1 = params[0].seriesName;
            let production2 = params[1].seriesName;

            return [
              "<div style='overflow:hidden;width:100%'>",
              "<img style='position:absolute;top:0';left:0 src=" +
                `${CONFIG.imgUrl}` +
                "/list/zsjzs.png />",
              "<div style='width:100%;height:100%;padding:10px'>",
              "<div>",
              "<div style='margin-left:0rem;color:#fff'>" +
                (params[0].dataIndex + 1) +
                "月</div>",
              "<div style='display:flex;align-items:center;color:#fff;justify-content: flex-end;'>",
              "<div style='background-color:" +
                legendColor1 +
                ";width:8px;height:3px;color=#fff' class='l-mr-8'></div>",
              "<div class='l-mr-8'> " + production1 + "</div>",
              "<div style='width:30px' class='l-mr-8'>" +
                params[0].value +
                "</div>",
              "<div class='l-ml-3'>%</div>",
              "</div>",

              "<div style='display:flex;align-items:center;color:#fff;justify-content: flex-end;'>",
              "<div style='background-color:" +
                legendColor2 +
                ";width:8px;height:3px;color=#fff' class='l-mr-8'></div>",
              "<div class='l-mr-8'> " + production2 + "</div>",
              "<div style='width:30px'  class='l-mr-8'>" +
                params[1].value +
                "</div>",
              "<div class='l-ml-3'>%</div>",
              "</div>",

              "</div>",
              "</div>",
              "</div>",
            ].join("\n");
          },
        },
        title: [
          {
            text: "单位：%",
            left: 5,
            top: -5,
            textStyle: {
              width: 70,
              height: 11,
              fontSize: 10,
              fontFamily: "Microsoft YaHei",
              fontWeight: 400,
              color: "#CFD4E8",
              lineHeight: 20,
            },
          },
        ],
        legend: {
          data: [
            { name: "商业用电", icon: "rect" },
            { name: "居民用电", icon: "rect" },
          ],
          lineStyle: {
            color: "inherit",
          },
          itemWidth: 10,
          itemHeight: 2,
          padding: [-25, -15, 0, 0],
          textStyle: {
            width: 22,
            height: 11,
            fontSize: 11,
            fontFamily: "Microsoft YaHei",
            fontWeight: 400,
            color: "#D3DAF2",
            lineHeight: 30,
          },
          right: 30,
          itemGap: 22,
          top: 35,
        },
        grid: {
          left: -14,
          right: "1%",
          bottom: "0%",
          top: "25%",
          containLabel: true,
        },
        xAxis: {
          boundaryGap: false,
          axisLine: {
            show: false,
            lineStyle: {
              color: "#CFD4E8",
            },
          },
          axisTick: {
            show: false,
          },
          // name: "月",
          // nameTextStyle: {
          //   verticalAlign: "bottom",
          //   padding: [0, 0, -20, -15],
          // },
          type: "category",
          data: ["2016", "2017", "2018", "2019", "2020", "2021"],
        },
        yAxis: {
          min: 0,
          max: 100,
          type: "value",
          axisLine: {
            show: false,

            lineStyle: {
              color: "#CFD4E8",
              height: 85,
            },
          },
          axisLabel: {
            margin: 25, //y轴坐标轴数值与图表的间距
            textStyle: {
              align: "left", //y轴坐标轴数值左对齐
            },
          },
          splitLine: {
            show: true,
            interval: 0,
            lineStyle: {
              color: "rgb(128 128 128 / 30%)",
            },
          },
        },
        series: [
          {
            color: "#26BFB9",
            name: "商业用电",
            type: "line",
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
                  color: "#CB98FF", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#6766FF", // 100% 处的颜色
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
                    color: "rgba(203, 152, 255, 1)", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "rgba(103, 102, 255, 1)", // 100% 处的颜色
                  },
                ],
                globalCoord: false, // 缺省为 false
              },
            },
            data: [0.05, 0.03, 0.05, 0.05, 0.05, 0.06, 0.07],
          },
          {
            color: "#9460FF",
            name: "居民用电",
            type: "line",
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
                  color: "#34FFBA ", // 0% 处的颜色
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
            emphasis: {
              focus: "series",
            },
            data: [38.99, 23.36, 42.27, 39.04, 44.78, 45.09, 49.64],
          },
          {
            data: [22.45, 17.4, 24.75, 26.88, 35.54, 34.22, 37.23],
          },
        ],
      };
    },
  },
};
</script>
<style lang="less" scoped>
@import "../../style/var.less";
.v-chart {
  height: 270px;
}
</style>
