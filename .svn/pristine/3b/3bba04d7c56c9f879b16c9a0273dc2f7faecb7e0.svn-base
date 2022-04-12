<template>
  <div class="power-gdp-trend-chart">
    <v-chart :autoresize="true" :option="option"></v-chart>
  </div>
</template>
<script>
export default {
  name: "power-gdp-trend-chart",
  props: {
    trendGDPData: {
      type: Array,
      default: () => [],
    },
    trendPowerData: {
      type: Array,
      default: () => [],
    },
    powerXData: {
      type: Array,
      default: () => [],
    },
    gdpName: {
      type: String,
      default: "",
    },
    powerName: {
      type: String,
      default: "",
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
  watch: {},
  methods: {
    init() {
      this.initOption();
    },
    initOption() {
      this.option = {
        legend: {
          data: [
            { name: this.powerName, icon: "rect" },
            { name: this.gdpName, icon: "rect" },
          ],
          top: 0,
          left: 130,
          itemWidth: 15,
          itemHeight: 4,
          itemGap: 22,
          textStyle: {
            fontFamily: "Microsoft YaHei",
            fontWeight: 400,
            color: "#D3DAF2",
            fontSize: 10,
            opacity: 0.8,
          },
        },
        tooltip: {
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
              "<div style='background-color:" +
                params[0].color +
                ";width:5px;height:5px;color=#fff' class='l-mr-8'></div>",

              "<div style='margin-left:0rem'>" +
                params[0].seriesName +
                "：</div>",
              "<div style='margin-left:0rem'>" + params[0].value + "</div>",

              "</div>",
              "<div style='display:flex;align-items:center;color:#fff'>",
              "<div style='background-color:" +
                params[1].color +
                ";width:5px;height:5px;color=#fff' class='l-mr-8'></div>",
              "<div style='margin-left:0rem'>" +
                params[1].seriesName +
                "：</div>",
              "<div style='margin-left:0rem'>" + params[1].value + "</div>",

              "</div>",
              "</div>",
              "</div>",
            ].join("\n");
          },
        },
        grid: {
          show: true,
          borderColor: "rgb(0 0 0 / 10%)",
          top: "20%",
          left: "10%",
          right: "30%",
          bottom: "12%",
          width: 340,
          // height: 100,
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
          data: this.powerXData,
          axisLine: {
            show: true,
            lineStyle: {
              // height: 100,
              color: "#CFD4E8",
              opacity: 0.06,
            },
          },
          axisTick: { show: false },
          splitLine: {
            show: false,
          },
          axisLabel: {
            interval: 0,
          },
        },
        yAxis: {
          type: "value",
          name: "单位：%",
          axisLabel: {
            margin: 32, //y轴坐标轴数值与图表的间距
            textStyle: {
              align: "left", //y轴坐标轴数值左对齐
            },
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
          nameTextStyle: {
            padding: [0, 25, 0, 0],
            color: "#D3DAF2",
            opacity: 0.8,
            fontSize: 10,
            fontFamily: "Microsoft YaHei",
          },
        },
        series: [
          {
            name: this.powerName,
            type: "line",
            smooth: true,
            color: "rgba(105, 218, 255, 1)",
            symbolSize: 6,
            symbol: "circle",
            // data: [
            //   0.048933765, 0.037470188, 0.010621798, 0.080724064, 0.034056905,
            //   0.043578488, 0.039256004, 0.037015681, 0.072784362, -0.000660576,
            // ],
            data: this.trendPowerData,
          },

          {
            name: this.gdpName,
            type: "line",
            smooth: true,
            color: "rgba(182, 231, 137, 1)",
            symbolSize: 6,
            symbol: "circle",
            // data: [
            //   0.184103581, 0.131970567, 0.128774098, 0.10247377, 0.09773479,
            //   0.121978604, 0.125426018, 0.085300128, 0.065740708, 0.027598601,
            // ],
            data: this.trendGDPData,
          },
        ],
      };
    },
  },
};
</script>
<style lang="less">
.power-gdp-trend-chart {
  height: 190px;
}
</style>