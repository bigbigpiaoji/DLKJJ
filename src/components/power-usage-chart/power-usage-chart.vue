<template>
  <div class="power-usage-chart">
    <v-chart :autoresize="true" :option="option"> </v-chart>
  </div>
</template>
<script>
export default {
  name: "power-usage-chart",
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
          right: "2%",
          bottom: "12%",
          width: 300,
          // height: 110,
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
              "<div style='margin-left:0rem'>" +
                params[0].value+
                "</div>",

              "</div>",
              "<div style='display:flex;align-items:center;color:#fff'>",
              "<div style='background-color:" +
                params[1].color +
                ";width:5px;height:5px;color=#fff' class='l-mr-8'></div>",
              "<div style='margin-left:0rem'>" +
                params[1].seriesName +
                "：</div>",
              "<div style='margin-left:0rem'>" +
                params[1].value +
                "</div>",

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
          top: 10,
          itemWidth: 6,
          itemHeight: 6,
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
              interval: 0,
            },
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
            min: 0,
            max: 1000,
            nameTextStyle: {
              padding: [0, 6, 0, 0],
              color: "#D3DAF2",
              opacity: 0.8,
              fontSize: 10,
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
            type: "bar",
            // data: [
            //   696.02, 722.1, 729.77, 788.68, 815.54, 851.08, 884.49, 917.23,
            //   983.99, 983.34,
            // ],
            data: this.powerData,
            color: "#4FB0D0",
            itemStyle: {
              normal: {
                //柱形图圆角，初始化效果
                barBorderRadius: [20, 20, 0, 0],
              },
            },
            barWidth: 5,
          },

          {
            name: "GDP",
            type: "bar",
            yAxisIndex: 1,
            // data: [
            //   1.192281, 1.349627, 1.523424, 1.679535, 1.843684, 2.068574,
            //   2.328027, 2.526608, 2.692709, 2.767024,
            // ],
            data: this.gdpData,
            color: "#BEEF86",
            itemStyle: {
              normal: {
                //柱形图圆角，初始化效果
                barBorderRadius: [20, 20, 0, 0],
              },
            },
            // 设置柱形宽度
            barWidth: 5,
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