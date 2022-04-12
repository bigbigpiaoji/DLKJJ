<template>
  <div class="power-usage-chart">
    <v-chart :autoresize="true" :option="option"> </v-chart>
  </div>
</template>
<script>
export default {
  name: "power-usage-season-chart",
  props: {
    gdpData: {
      type: Array,
      default: () => [],
    },
    powerData: {
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
  watch: {},
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
          left: "12%",
          right: "0%",
          bottom: "12%",
          width: 300,
          // height: 115,
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
            console.log(params);
            let value1 = "";
            let value2 = "";
            let sessonUnit = "";
            if (params[0].axisValue.substr(5) == "01") {
              sessonUnit = "第一季度";
            } else if (params[0].axisValue.substr(5) == "04") {
              sessonUnit = "第二季度";
            } else if (params[0].axisValue.substr(5) == "07") {
              sessonUnit = "第三季度";
            } else {
              sessonUnit = "第四季度";
            }

            if (typeof params[0].value == "undefined") {
              value1 = "--";
            } else {
              value1 = params[0].value;
            }
            if (typeof params[1].value == "undefined") {
              value2 = "--";
            } else {
              value2 = params[1].value;
            }
            return [
              "<div style='overflow:hidden;width:100%'>",
              "<img style='position:absolute;top:0';left:0 src=" +
                `${CONFIG.imgUrl}` +
                "/list/zsjzs.png />",
              "<div style='width:100%;padding:10px 0 0 10px;color:#fff'>" +
                params[0].axisValue.substr(0, 4) +
                "年" +
                sessonUnit +
                "</div>",
              "<div style='width:100%;height:100%;padding:5px 10px 10px'>",
              "<div style='display:flex;align-items:center;color:#fff'>",
              "<div style='background-color:" +
                params[0].color +
                ";width:5px;height:5px;color=#fff' class='l-mr-8'></div>",

              "<div style='margin-left:0rem'>" +
                params[0].seriesName +
                "：</div>",
              "<div style='margin-left:0rem'>" + value1 + "</div>",
              "</div>",
              "<div style='display:flex;align-items:center;color:#fff'>",
              "<div style='background-color:" +
                params[1].color +
                ";width:5px;height:5px;color=#fff' class='l-mr-8'></div>",
              "<div style='margin-left:0rem'>" +
                params[1].seriesName +
                "：</div>",
              "<div style='margin-left:0rem'>" + value2 + "</div>",
              "</div>",
              "</div>",
              "</div>",
            ].join("\n");
          },
        },
        legend: {
          data: [
            { name: "全社会用电量", icon: "rect" },
            { name: "GDP", icon: "rect" },
          ],
          left: 130,
          top: 0,
          itemWidth: 15,
          itemHeight: 4,
          itemGap: 22,
          textStyle: {
            fontFamily: "Microsoft YaHei",
            fontWeight: 400,
            color: "#D3DAF2",
            fontSize: 11,
            opacity: 0.8,
          },
        },
        xAxis: [
          {
            type: "category",
            axisLabel: {
              formatter: function (value, index) {
                return value.substr(0, 4);
              },
              interval: 4,
            },
            data: this.Xdata,
            // data: [
            //   "2011.1",
            //   "2011.2",
            //   "2011.3",
            //   "2011.4",
            //   "2012.1",
            //   "2012.2",
            //   "2012.3",
            //   "2012.4",
            //   "2013.1",
            //   "2013.2",
            //   "2013.3",
            //   "2013.4",
            //   "2014.1",
            //   "2014.2",
            //   "2014.3",
            //   "2014.4",
            //   "2015.1",
            //   "2015.2",
            //   "2015.3",
            //   "2015.4",
            //   "2016.1",
            //   "2016.2",
            //   "2016.3",
            //   "2016.4",
            //   "2017.1",
            //   "2017.2",
            //   "2017.3",
            //   "2017.4",
            //   "2018.1",
            //   "2018.2",
            //   "2018.3",
            //   "2018.4",
            //   "2019.1",
            //   "2019.2",
            //   "2019.3",
            //   "2019.4",
            //   "2020.1",
            //   "2020.2",
            //   "2020.3",
            //   "2020.4",
            //   "2021.1",
            //   "2021.2",
            //   "2021.3",
            // ],
            axisPointer: {
              type: "shadow",
            },
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
        ],
        yAxis: [
          {
            type: "value",
            name: "单位：万千瓦时",
            // min: 0,
            // max: 1000,
            nameTextStyle: {
              padding: [0, 6, 0, 0],
              color: "#D3DAF2",
              opacity: 0.8,
              fontSize: 10,
              fontWeight: 400,
              fontFamily: "Microsoft YaHei",
            },
            splitLine: {
              show: false,
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
            nameLocation: "end",
          },
          {
            type: "value",
            name: "单位：万亿元",
            // min: 0,
            // max: 10000,
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
              padding: [0, 0, 0, 40],
              color: "#D3DAF2",
              opacity: 0.8,
              fontSize: 10,
              fontFamily: "Microsoft YaHei",
            },
          },
        ],
        series: [
          {
            name: "全社会用电量",
            type: "line",
            symbol: "rect",
            symbolSize: 0,
            // data: [
            //   ,
            //   ,
            //   ,
            //   ,
            //   ,
            //   ,
            //   ,
            //   ,
            //   ,
            //   ,
            //   ,
            //   ,
            //   ,
            //   ,
            //   ,
            //   ,
            //   ,
            //   ,
            //   ,
            //   ,
            //   ,
            //   ,
            //   ,
            //   ,
            //   ,
            //   ,
            //   ,
            //   ,
            //   173.6654592,
            //   366.4096793,
            //   654.4036883,
            //   862.3814769,
            //   168.58,
            //   408.14,
            //   695.76,
            //   913.77,
            //   147.48,
            //   392.38,
            //   698.48,
            //   923.39,
            //   195.86,
            //   479.41,
            //   806.6744709,
            // ],
            data: this.powerData,
            color: "#4FB0D0",
          },

          {
            name: "GDP",
            type: "line",
            symbol: "rect",
            symbolSize: 0,
            yAxisIndex: 1,
            // data: [
            //   ,
            //   ,
            //   ,
            //   ,
            //   ,
            //   ,
            //   ,
            //   ,
            //   ,
            //   ,
            //   ,
            //   ,
            //   ,
            //   ,
            //   ,
            //   ,
            //   3494.42,
            //   4055.69,
            //   4826.55,
            //   5126.33,
            //   3887.9,
            //   4720.98,
            //   5159.48,
            //   5724.24,
            //   4584.27,
            //   5124.75,
            //   5678.34,
            //   6577.75,
            //   5209.81,
            //   5799.57,
            //   6492.44,
            //   6691.28,
            //   5209.81,
            //   5799.57,
            //   6492.44,
            //   6691.28,
            //   5785.6,
            //   6848.7,
            //   7152.68,
            //   7883.26,
            //   6867.54,
            //   7456.93,
            //   7466.71,
            // ],
            data: this.gdpData,
            color: "#BEEF86",
          },
        ],
      };
    },
  },
};
</script>
<style>
.power-usage-chart {
  height: 190px;
}
</style>