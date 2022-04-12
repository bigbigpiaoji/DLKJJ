<template>
  <div class="modeling-gdp-power-chart">
    <v-chart :autoresize="true" :option="option"></v-chart>
  </div>
</template>

<script>
export default {
  name: "modeling-gdp-power-chart",
  props: {
    gridWidth: {
      type: Number,
      default: () => 450,
    },
    gridTop: {
      type: Number,
      default: () => 40,
    },
    gridHeight: {
      type: Number,
      default: () => 155,
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
  beforeDestroy() {},
  methods: {
    init() {
      this.option = {
        dataset: [
          {
            source: [
              [190.35, 2219.2],
              [212.29, 2522.95],
              [259.92, 3017.24],
              [323.43, 3640.14],
              [390.31, 4350.29],
              [440.21, 5035.77],
              [487.2, 5920.66],
              [567.82, 6925.23],
              [583.76, 7941.43],
              [585.68, 8201.32],
              [663.55, 10069.06],
              [696.02, 11922.81],
              [722.1, 13496.27],
              [729.77, 15234.24],
              [788.68, 16795.35],
              [815.54, 18436.84],
              [851.08, 20685.74],
              [884.49, 23280.27],
              [917.23, 25266.08],
              [983.99, 26927.09],
            ],
          },
          {
            transform: {
              type: "ecStat:regression",
              config: {
                method: "exponential",
              },
            },
          },
        ],
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
            var num1 = params[0].value[1].toFixed(2);
            var num2 = params[1].value[1].toFixed(2);

            return [
              "<div style='overflow:hidden;width:100%'>",
              "<img style='position:absolute;top:0';left:0 src=" +
                `${CONFIG.imgUrl}` +
                "/list/zsjzs.png />",
              "<div style='width:100%;padding:10px 0 0 10px;color:#fff'>"+params[0].axisValue + "亿千瓦时电耗"+"</div>",
              "<div style='width:100%;height:100%;padding:5px 10px 10px'>",
              "<div style='display:flex;align-items:center;color:#fff'>",
              
              "<div style='margin-left:0rem'>" +
                "实际GDP" +
                "：</div>",
              "<div style='margin-left:0rem'>" + num1 + "</div>",
              "<div class='l-ml-8'> " + "亿元" + "</div>",
              "</div>",
              "<div style='display:flex;align-items:center;color:#fff'>",
              
              "<div style='margin-left:0rem'>" +
              
                "预测GDP" +
                "：</div>",
              "<div style='margin-left:0rem'>" + num2 + "</div>",
              "<div class='l-ml-8'> " + "亿元" + "</div>",
              "</div>",
              "</div>",
              "</div>",
            ].join("\n");
          },
        },
        xAxis: {
          min: 0,
          max: 1200,
          name: "亿千瓦时",
          nameTextStyle: {
            padding: [0, 0, 0, -45],
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
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: "rgb(128 128 128 / 30%)",
            },
          },
          splitLine: {
            show: false,
            interval: 0,
            lineStyle: {
              color: "#FFFFFF",
              opacity: 0.06,
            },
          },
        },
        yAxis: [
          {
            name: "单位：亿元",
            nameTextStyle: {
              padding: [0, 0, 0, -30],
              color: "#D3DAF2",
              opacity: 1,
              fontSize: 10,
              fontFamily: "Microsoft YaHei",
              weight: 54,
              opacity: 0.8,
            },
            axisTick: {
              show: false,
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
              interval: 0,
              lineStyle: {
                color: "rgba(255,255,255,0.06)",
                // opacity: 0.06,
              },
            },
          },
          {
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
            name: "scatter",
            type: "scatter",
            datasetIndex: 0,
            color: "#6BDEFF",
            symbolSize: 5,
          },
          {
            name: "line",
            type: "line",
            smooth: true,
            datasetIndex: 1,
            symbolSize: 1,
            symbol: "circle",
            lineStyle: {
              color: "#6BDEFF",
              width: 1,
              type: "dashed",
            },
          },
        ],

        grid: {
          borderColor: "rgb(0 0 0 / 10%)",
          left: 40,
          bottom: 40,
          top: 30,
        },
      };
    },
  },
};
</script>

<style>
.modeling-gdp-power-chart {
  height: 100%;
  width: 100%;
}
</style>