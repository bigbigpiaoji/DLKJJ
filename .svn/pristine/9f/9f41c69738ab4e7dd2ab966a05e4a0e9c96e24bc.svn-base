<template>
  <div class="modeling-gdp-time-chart">
    <v-chart :autoresize="true" :option="option"></v-chart>
  </div>
</template>

<script>
export default {
  name: "modeling-gdp-time-chart",
  props: {
    gridWidth: {
      type: Number,
      default: () => 450,
    },
    gridLeft: {
      type: Number,
      default: () => 49,
    },
    gridHeight: {
      type: Number,
      default: () => 155,
    },
    legendPaddingRight: {
      type: Number,
      default: () => 170,
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
  beforeDestroy() {
    clearInterval(this.timer);
  },
  methods: {
    init() {
      this.option = {
        legend: {
          data: [
            { name: "GDP", icon: "rect" },
            { name: "用电量", icon: "rect" },
          ],
          itemWidth: 12,
          itemHeight: 4,

          textStyle: {
            width: 45,
            fontSize: 11,
            opacity: 1,
            fontFamily: "Microsoft YaHei",
            color: "#D3DAF2",
          },
          icon: "roundRect",
          right: 95,
        },
        grid: {
          borderColor: "rgb(0 0 0 / 10%)",
          left: 40,
          right: 40,
          bottom: 40,
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

              "<div style='margin-left:0rem'>" +
                params[0].seriesName +
                "：</div>",
              "<div style='margin-left:0rem'>" + num1 + "</div>",
              "<div class='l-ml-8'> " + "亿元" + "</div>",
              "</div>",
              "<div style='display:flex;align-items:center;color:#fff'>",
              "<div style='background-color:" +
                params[1].color +
                ";width:5px;height:5px;color=#fff' class='l-mr-8'></div>",
              "<div style='margin-left:0rem'>" +
                params[1].seriesName +
                "：</div>",
              "<div style='margin-left:0rem'>" + num2 + "</div>",
              "<div class='l-ml-8'> " + "亿千瓦时" + "</div>",
              "</div>",
              "</div>",
              "</div>",
            ].join("\n");
          },
        },
        xAxis: {
          axisLabel: {
            interval: 1,
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
          data: [
            "2000",
            "2001",
            "2002",
            "2003",
            "2004",
            "2005",
            "2006",
            "2007",
            "2008",
            "2009",
            "2010",
            "2011",
            "2012",
            "2013",
            "2014",
            "2015",
            "2016",
            "2017",
            "2018",
            "2019",
          ],
        },
        yAxis: [
          {
            min: 0.0,
            max: 30000.0,
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
            min: 0.0,
            max: 1200.0,
            name: "单位：亿千瓦时",
            nameTextStyle: {
              color: "#D3DAF2",
              opacity: 1,
              fontSize: 10,
              fontFamily: "Microsoft YaHei",
              weight: 70,
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
            name: "GDP",
            type: "line",
            symbol: "none",
            opacity: 0.8,
            emphasis: {
              focus: "series",
            },
            data: [
              2219.2, 2522.95, 3017.24, 3640.14, 4350.29, 5035.77, 5920.66,
              6925.23, 7941.43, 8201.32, 10069.06, 11922.81, 13496.27, 15234.24,
              16795.35, 18436.84, 20685.74, 23280.27, 25266.08, 26927.09,
            ],
          },
          {
            color: "#00C0FF",
            name: "用电量",
            type: "line",
            symbol: "none",
            emphasis: {
              focus: "series",
            },
            yAxisIndex: 1,
            data: [
              190.35, 212.29, 259.92, 323.43, 390.31, 440.21, 487.2, 567.82,
              583.76, 585.68, 663.55, 696.02, 722.1, 729.77, 788.68, 815.54,
              851.08, 884.09, 917.23, 983.99,
            ],
          },
        ],
      };
    },
  },
};
</script>

<style>
.modeling-gdp-time-chart {
  height: 100%;
  width: 100%;
}
</style>