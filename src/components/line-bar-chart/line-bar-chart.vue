<template>
  <div :style="getStyle" class="v-chart">
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
  name: "lineBarChart",
  props: {
    height: {
      type: String,
      default: "190px",
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
  computed: {
    getStyle() {
      return {
        height: this.$pxToRem(this.height) + "rem",
      };
    },
  },
  methods: {
    init() {
      this.option = {
        legend: [
          {
            top: 8,
            right: 120,
            formatter(params) {
              return `{a| ${params} }`;
            },
            textStyle: {
              fontSize: 11,
              fontFamily: "Microsoft YaHei",
              fontWeight: 400,
              color: "#D3DAF2",
              lineHeight: 30,
              rich: {
                a: {
                  verticalAlign: "middle",
                  padding: [2, 0, 0, 0],
                },
              },
            },

            itemWidth: 6,
            itemHeight: 6,
            data: [{ name: "用电增速", icon: "rect" }],
          },
                    {
            top: 8,
            right: 50,
            formatter(params) {
              return `{a| ${params} }`;
            },
            textStyle: {
              fontSize: 11,
              fontFamily: "Microsoft YaHei",
              fontWeight: 400,
              color: "#D3DAF2",
              lineHeight: 30,
              rich: {
                a: {
                  verticalAlign: "middle",
                  padding: [2, 0, 0, 0],
                },
              },
            },

            itemWidth: 6,
            itemHeight: 6,
            data: [{ name: "GDP增速", icon: "rect" }],
          },
                    {
            top: 8,
            right: 0,
            formatter(params) {
              return `{a| ${params} }`;
            },
            textStyle: {
              fontSize: 11,
              fontFamily: "Microsoft YaHei",
              fontWeight: 400,
              color: "#D3DAF2",
              lineHeight: 30,
              rich: {
                a: {
                  verticalAlign: "middle",
                  padding: [2, 0, 0, 0],
                },
              },
            },

            itemWidth: 10,
            itemHeight: 2,
            data: [{ name: "弹性", icon: "rect" }],
          },
          // data: [
          //   { name: "用电增速", icon: "rect" },
          //   { name: "GDP增速", icon: "rect" },
          //   {
          //     name: "弹性",
          //     icon: "rect",
          //   },
          // ],
        ],
        tooltip: {
          show: true,
          trigger: "axis",
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
              "<div style='width:100%;height:100%;padding:10px'>",
              "<div style='display:flex;color:#fff;flex-direction: column;'>",
              "<div>" + params[1].name + "年" + "</div>",
              "<div style='display:flex;'>",
              "<div style='background-color:" +
                params[0].color +
                ";width:5px;height:5px;color=#fff' class='l-mr-8 l-mt-8'></div>",
              "<div class='l-mr-8'> " + params[0].seriesName + "</div>",
              "<div style='margin-left:0rem'>" + params[0].value + "%</div>",
              "</div>",
              "<div style='display:flex;'>",
              "<div style='background-color:" +
                params[1].color +
                ";width:5px;height:5px;color=#fff' class='l-mr-8 l-mt-8'></div>",
              "<div class='l-mr-8'> " + params[1].seriesName + "</div>",
              "<div style='margin-left:0rem'>" + params[1].value + "%</div>",
              "</div>",
              "</div>",
              "</div>",
              "</div>",
            ].join("\n");
          },
        },
        grid: {
          show: true,
          borderColor: "rgb(0 0 0 / 10%)",
          top: "30%",
          left: "10%",
          right: "10%",
          bottom: "13%",
        },
        xAxis: {
          axisPointer: {
            type: "shadow",
            show: true,
            shadowStyle: {
              color: "#00b4ff1a",
            },
            crossStyle: {
              color: "#000",
            },
            label: {
              color: "#fff",
              backgroundColor: "#333",
            },
          },
          splitArea: { show: false },
          axisLable: {
            show: true,
            fontSize: 5,
            rotate: 45,
          },
          axisTick: {
            show: false,
            interval: 0,
            length: 0,
          },
          name: "年",
          nameTextStyle: {
            verticalAlign: "bottom",
            padding: [0, 0, -20, -8],
          },
          type: "category",
          data: [2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
          axisLine: {
            show: true,
            lineStyle: {
              height: 100,
              color: "#CFD4E8",
              opacity: 0.06,
            },
          },
          splitLine: {
            show: false,
          },
        },

        yAxis: [
          {
            type: "value",
            name: "单位：%",
            nameTextStyle: {
              padding: [0, 0, 8, -5],
              width: 39,
              height: 11,
              fontSize: 10,
              fontFamily: "Microsoft YaHei",
              fontWeight: 400,
              color: "#D3DAF2",
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: "#CFD4E8",
                opacity: 0.06,
              },
            },
            min: 0,
            max: 15,
            interval: 3,
            axisLabel: {
              formatter: "{value}",
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#CFD4E8",
                opacity: 0.06,
              },
            },
          },
          {
            type: "value",
            min: 0.2,
            max: 1.2,
            interval: 0.2,
            axisLabel: {
              formatter: "{value}",
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
                opacity: 0.1,
              },
            },
          },
        ],
        series: [
          {
            color: "#4FB0D0",
            name: "用电增速",
            type: "bar",
            barWidth: 5,
            itemStyle: {
              normal: {
                barBorderRadius: [5, 5, 0, 0],
              },
            },
            data: [9.1, 4.5, 2.7, 2.5, 3.3, 5.3, 4.4, 4.2, 3.1, 2.9],
          },
          {
            color: "#BEEF86",
            name: "GDP增速",
            type: "bar",
            barWidth: 5,
            itemStyle: {
              normal: {
                barBorderRadius: [5, 5, 0, 0],
              },
            },
            data: [12.3, 10.1, 10.2, 10.6, 8.9, 9, 9.3, 8.8, 7.7, 6.7],
          },
          {
            name: "弹性",
            type: "line",
            symbol: "none",
            itemStyle: {
              color: "#EAA000",
            },
            yAxisIndex: 1,
            data: [0.74, 0.45, 0.26, 0.24, 0.37, 0.59, 0.47, 0.48, 0.4, 0.43],
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
  // height: 190px;
}
</style>
