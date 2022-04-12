<template>
  <div class="urban-degree-gdp-chart">
    <v-chart :autoresize="true" :option="option"></v-chart>
  </div>
</template>
<script>
export default {
  name: "urban-degree-gdp-chart",
  props: {
    shData: {
      type: Array,
      default: () => [],
    },
    szData: {
      type: Array,
      default: () => [],
    },
    bjData: {
      type: Array,
      default: () => [],
    },
    gzData: {
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
            let legendColor1 = "#34FFBA";
            let legendColor2 = "#FDCB42";
            let legendColor3 = "#CB98FF ";
            let legendColor4 = "#3AA0FF";
            let production1 = params[0].seriesName;
            let production2 = params[1].seriesName;
            let production3 = params[2].seriesName;
            let production4 = params[3].seriesName;
            let value = "";
            if (typeof params[1].value === "undefined") {
              value = "- -";
            } else {
              value = params[1].value;
            }
            return [
              "<div style='overflow:hidden;width:100%;'>",
              "<img style='position:absolute;top:0';left:0 src=" +
                `${CONFIG.imgUrl}` +
                "/list/zsjzs.png />",
              "<div style='width:100%;height:100%;padding:10px'>",
              "<div>",
              "<div style='color:#fff'>" + params[0].axisValue + "年</div>",
              "<div style='display:flex;align-items:center;color:#fff'>",
              "<div style='background-color:" +
                legendColor1 +
                ";width:5px;height:5px;color:#fff' class='l-mr-8'></div>",
              "<div class='l-mr-8'> " + production1 + "</div>",
              "<div class='l-mr-8'>" + params[0].value + "</div>",
              "<div class='l-ml-3'>元/度</div>",
              "</div>",

              "<div style='display:flex;align-items:center;color:#fff'>",
              "<div style='background-color:" +
                legendColor2 +
                ";width:5px;height:5px;color:#fff' class='l-mr-8'></div>",
              "<div class='l-mr-8'> " + production2 + "</div>",
              "<div class='l-mr-8'>" + value + "</div>",
              "<div class='l-ml-3'>元/度</div>",
              "</div>",

              "<div style='display:flex;align-items:center;color:#fff'>",
              "<div style='background-color:" +
                legendColor3 +
                ";width:5px;height:5px;color:#fff' class='l-mr-8'></div>",
              "<div class='l-mr-8'> " + production3 + "</div>",
              "<div class='l-mr-8'>" + params[2].value + "</div>",
              "<div class='l-ml-3'>元/度</div>",
              "</div>",

              "<div style='display:flex;align-items:center;color:#fff'>",
              "<div style='background-color:" +
                legendColor4 +
                ";width:5px;height:5px;color:#fff' class='l-mr-8'></div>",
              "<div class='l-mr-8'> " + production4 + "</div>",
              "<div class='l-mr-8'>" + params[3].value + "</div>",
              "<div class='l-ml-3'>元/度</div>",
              "</div>",

              "</div>",
              "</div>",
              "</div>",
            ].join("\n");
          },
        },
        legend: {
          data: [
            { name: "深圳", icon: "rect" },
            { name: "北京", icon: "rect" },
            { name: "上海", icon: "rect" },
            { name: "广州", icon: "rect" },
          ],
          top: 10,
          left: 130,
          itemWidth: 15,
          itemHeight: 4,
          itemGap: 22,
          textStyle: {
            fontFamily: "Microsoft YaHei",
            fontWeight: 400,
            color: "#D3DAF2",
            opacity: 0.8,
            fontSize: 10,
          },
        },
        grid: {
          show: true,
          borderColor: "rgb(0 0 0 / 10%)",
          top: 40,
          left: "7%",
          right: 25,
          bottom: 30,
          // width: 340,
          // height: 120,
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          // data: [
          //   "2011",
          //   "2012",
          //   "2013",
          //   "2014",
          //   "2015",
          //   "2016",
          //   "2017",
          //   "2018",
          //   "2019",
          //   "2020",
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
          type: "value",
          name: "单位：元/度",
          nameTextStyle: {
            padding: [0, 0, 0, 15],
            color: "#D3DAF2",
            opacity: 0.8,
            fontSize: 10,
            fontFamily: "Microsoft YaHei",
          },
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
        },
        series: [
          {
            name: "深圳",
            type: "line",
            smooth: true,
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
                  color: "rgba(132, 255, 175, 1)", // 100% 处的颜色
                },
              ],
              globalCoord: false, // 缺省为 false
            },
            symbolSize: 6,
            symbol: "circle",
            // data: [
            //   17.1299819, 18.69030605, 20.8753991, 21.2955191, 22.60691076,
            //   24.3052827, 26.32055761, 27.54606805, 27.36520696,
            //   28.1390363455163,
            // ],
            data: this.szData,
          },
          {
            name: "北京",
            type: "line",
            smooth: true,
            color: "rgba(253, 203, 66, 1)",
            symbolSize: 0,
            symbol: "circle",
            // data: [
            //   20.91844341, 21.76033289, 23.14569976, 24.46618291, 26.0088805,
            //   26.50395425, 28.00943752, 28.97982626, 30.32528221,
            //   31.6697807837048,
            // ],
            data: this.bjData,
          },
          {
            name: "上海",
            type: "line",
            smooth: true,
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [
                {
                  offset: 0,
                  color: "rgba(103, 102, 255, 1)", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "rgba(203, 152, 255, 1)", // 100% 处的颜色
                },
              ],
              globalCoord: false, // 缺省为 false
            },
            symbolSize: 0,
            symbol: "circle",
            // data: [
            //   14.93683283, 15.74168976, 16.44970616, 18.45827672, 19.12904465,
            //   20.11212501, 21.56514079, 22.9863659, 24.32475232,
            // ],
            data: this.shData,
          },
          {
            name: "广州",
            type: "line",
            smooth: true,
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [
                {
                  offset: 0,
                  color: "rgba(58, 160, 255, 1)", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "rgba(152, 244, 255, 1)", // 100% 处的颜色
                },
              ],
              globalCoord: false, // 缺省为 false
            },
            symbolSize: 0,
            symbol: "circle",
            // data: [
            //   18.38536735, 19.00908525, 21.17714042, 21.06922388, 22.2595326,
            //   22.53570352, 22.01907121, 22.41692215, 23.49739057, 25.1,
            // ],
            data: this.gzData,
          },
        ],
      };
    },
  },
};
</script>
<style lang="less">
.urban-degree-gdp-chart {
  height: 190px;
}
</style>