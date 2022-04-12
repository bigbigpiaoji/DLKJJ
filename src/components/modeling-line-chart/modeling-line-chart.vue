<template>
  <div class="modeling-line-chart">
    <v-chart :autoresize="true" :option="option"></v-chart>
  </div>
</template>

<script>
export default {
  name: "modeling-line-chart",
  props: {
    dataTrue: {
      type: Array,
      default: () => [],
    },
    dataForecast: {
      type: Array,
      default: () => [],
    },
    dataYear: {
      type: Array,
      default: () => [],
    },
    rotate: {
      type: Number,
      default: () => 0,
    },
    paddingLeft: {
      type: Number,
      default: () => -80,
    },
    gridLeft: {
      type: Number,
      default: () => 40,
    },
    yAxisName: {
      type: String,
      default: () => "单位：亿元",
    },
    yAxisNamePaddingLeft: {
      type: Number,
      default: () => -30,
    },
    legendTrue: {
      type: String,
      default: () => "真实GDP",
    },
    legendForecast: {
      type: String,
      default: () => "预测GDP",
    },
    interval: {
      type: Number,
      default: () => 0,
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
        legend: {
          data: [
            { name: this.legendTrue, icon: "rect" },
            { name: this.legendForecast, icon: "rect" },
          ],
          itemWidth: 12,
          itemHeight: 4,
          textStyle: {
            width: 45,
            fontSize: 11,
            opacity: 1,
            fontFamily: "Microsoft YaHei",
            color: "#D3DAF2",
            opacity: 0.8,
          },
          right: 25,
        },
        grid: {
          borderColor: "rgb(0 0 0 / 10%)",
          left: this.gridLeft, //40
          right: 30,
          bottom: 30,
          top: 30,
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
            var num1 = params[0].value.toFixed(2);
            var num2 = params[1].value.toFixed(2);
            let legendUnit = "亿元";
            if(params[0].seriesName == '实际电耗'){
                 legendUnit = "元/度";
            }else{
                 legendUnit = "亿元";
            }
            return [
              "<div style='overflow:hidden;width:100%'>",
              "<img style='position:absolute;top:0';left:0 src=" +
                `${CONFIG.imgUrl}` +
                "/list/zsjzs.png />",
              "<div style='width:100%;padding:10px 0 0 10px;color:#fff'>"+params[0].axisValue + "年"+"</div>",
              "<div style='width:100%;height:100%;padding:5px 10px 10px'>",
              "<div style='display:flex;align-items:center;color:#fff'>",
              "<div style='background-color:" +
                params[0].color +
                ";width:5px;height:5px;color=#fff' class='l-mr-8'></div>",

              "<div style='margin-left:0rem'>" + params[0].seriesName+"：</div>",
              "<div style='margin-left:0rem'>" + num1 + "</div>",
              "<div class='l-ml-8'> " + legendUnit + "</div>",
              "</div>",
              "<div style='display:flex;align-items:center;color:#fff'>",
              "<div style='background-color:" +
                params[1].color +
                ";width:5px;height:5px;color=#fff' class='l-mr-8'></div>",
              "<div style='margin-left:0rem'>" +params[1].seriesName+"：</div>",
              "<div style='margin-left:0rem'>" + num2 + "</div>",
              "<div class='l-ml-8'> " + legendUnit + "</div>",
              "</div>",
              "</div>",
              "</div>",
            ].join("\n");
          },
        },
        xAxis: {
          boundaryGap: ["1%", "1%"],
          axisLabel: {
            interval: this.interval,
            rotate: this.rotate, //横坐标竖直展示
            inside: false,
            textStyle: {
              color: "#D3DAF2",
              fontFamily: "Microsoft YaHei",
              fontWeight: 400,
              opacity: 0.8,
            },
            fontSize: 9.89,
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: "#D3DAF2",
            },
          },
          axisTick: {
            show: false,
          },
          type: "category",
          data: this.dataYear,
        },
        yAxis: [
          {
            name: this.yAxisName,
            nameTextStyle: {
              padding: [0, 0, 0, this.yAxisNamePaddingLeft],
              color: "#D3DAF2",
              opacity: 1,
              fontSize: 10,
              fontFamily: "Microsoft YaHei",
              weight: 54,
              opacity: 0.8,
            },
            type: "value",
            axisLabel: {
              textStyle: {
                color: "#D3DAF2",
              },
              fontSize: 10,
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#FFFFFF",
                opacity: 0.06,
              },
            },
            splitLine: {
              show: true,
              interval: 1,
              lineStyle: {
                color: "rgba(255,255,255,0.06)",
                // opacity: 0.06,
              },
            },
          },
          {
            type: "value",
            axisLabel: {
              textStyle: {
                color: "#D3DAF2",
              },
              fontSize: 10,
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#FFFFFF",
                opacity: 0.06,
              },
            },
            splitLine: {
              show: true,
              interval: 0,
              lineStyle: {
                color: "#FFFFFF",
                opacity: 0.06,
              },
            },
          },
        ],
        series: [
          {
            color: "#FF9409",
            name: this.legendTrue,
            type: "line",
            symbol: "none",
            emphasis: {
              focus: "series",
            },

            data: this.dataTrue,
          },
          {
            color: "#186AFF",
            name: this.legendForecast,
            type: "line",
            symbol: "none",
            emphasis: {
              focus: "series",
            },

            data: this.dataForecast,
          },
        ],
      };
    },
  },
};
</script>

<style lang="less" scoped>
@import "../../style/var.less";
.modeling-line-chart {
  height: 100%;
  width: 100%;
}
</style>