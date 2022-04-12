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
  name: "areaBarChart",
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
    this.changeChartsBarStyle();
  },
  computed: {
    getStyle() {
      return {
        height: this.$pxToRem(120) + "rem",
      };
    },
  },
  methods: {
    init() {
      this.initOption();
    },
    changeChartsBarStyle() {
      let array = [];
      this.option.series[0].data.forEach((item) => {
        array.push(item.value);
        array.sort();
      });
      let max = array[array.length - 1];
      let toMax = array[array.length - 2];
      let maxStyle = {
        type: "linear",
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
          {
            offset: 0,
            color: "#FFCEC2", // 0% 处的颜色
          },
          {
            offset: 0.5,
            color: "#B23E22", // 50% 处的颜色
          },
          {
            offset: 1,
            color: "#952B10", // 100% 处的颜色
          },
        ],
        global: false, // 缺省为 false
      };
      let toMaxStyle = {
        type: "linear",
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
          {
            offset: 0,
            color: "#FFEDC1", // 0% 处的颜色
          },
          {
            offset: 0.5,
            color: "#BD7800", // 0% 处的颜色
          },
          {
            offset: 1,
            color: "#BD7800", // 100% 处的颜色
          },
        ],
        global: false, // 缺省为 false
      };

      this.option.series[0].data.forEach((item) => {
        if (item.value === max) {
          item.itemStyle.color = maxStyle;
        } else if (item.value === toMax) {
          item.itemStyle.color = toMaxStyle;
        } else {
          item.itemStyle.color = "#4FB0D0";
          item.itemStyle.borderColor = "rgba(45, 41, 41, 1)";
        }
      });
    },
    initOption() {
      this.option = {
        title: {
          left: 9,
          textStyle: {
            color: "#C7E5FF",
            fontSize: "16",
            fontFamily: "ysbth",
            fontWeight: 400,
            height: 12,
            weight: 133,
            lineHeight: 10,
          },
        },
        grid: {
          show: false,
          top: "10%",
          left: "0%",
          right: "0%",
          bottom: "0%",

          containLabel: true,
        },
        tooltip: {
          borderRadius: 0,
          padding: 0,
          borderColor: "#707070",
          borderWidth: 1,
          backgroundColor: "#000c28d9",
          formatter: function (params) {
            let legendColor;
            if (params.color.colorStops) {
              legendColor = params.color.colorStops[2].color;
            } else {
              legendColor = params.color;
            }
            return [
              "<div style='overflow:hidden;width:100%'>",
              "<img style='position:absolute;top:0';left:0 src=" +
                `${CONFIG.imgUrl}` +
                "/list/zsjzs.png />",
              "<div style='width:100%;height:100%;padding:10px'>",
              "<div style='margin-left:0rem;color:#fff'>" +
                (params.dataIndex + 1) +
                "月</div>",
              "<div style='display:flex;align-items:center'>",
              "<div style='background-color:" +
                legendColor +
                ";width:5px;height:5px;' class='l-mr-8'></div>",
              "<div style='margin-left:0rem;color:#fff'>深圳区域用电增长均衡度</div>",
              "<div style='margin-left:0.5rem;color:#fff'>" +
                params.value +
                "</div>",
              "</div>",

              "</div>",
              "</div>",
            ].join("\n");
          },
        },
        xAxis: {
          axisLine: {
            show: false,
            lineStyle: {
              color: "#CFD4E8",
            },
          },
          name: "月",
          nameTextStyle: {
            verticalAlign: "bottom",
            padding: [0, 0, -20, -15],
          },
          axisTick: {
            show: false,
          },
          data: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
        },
        yAxis: {
          type: "value",
          min: 0,
          max: 100,
          axisLine: {
            show: true,
            lineStyle: {
              color: "#CFD4E8",
              height: 100,
              opacity: 0.06,
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
            type: "bar",
            barWidth: 5,
            itemStyle: {
              normal: {
                barBorderRadius: [5, 5, 0, 0], //柱状图圆角
              },
            },

            data: [
              {
                value: 59.21,
                itemStyle: {
                  color: "#4FB0D0",
                  borderColor: "rgba(45, 41, 41, 1)",
                },
              },
              {
                value: 58.05,
                itemStyle: {
                  color: "#4FB0D0",
                  borderColor: "rgba(45, 41, 41, 1)",
                },
              },
              {
                value: 50.49,
                itemStyle: {
                  color: "#4FB0D0",
                  borderColor: "rgba(45, 41, 41, 1)",
                },
              },
              {
                value: 63.27,
                itemStyle: {
                  color: "#4FB0D0",
                  borderColor: "rgba(45, 41, 41, 1)",
                },
              },
              {
                value: 69.48,

                itemStyle: {
                  color: {
                    type: "linear",
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                      {
                        offset: 0,
                        color: "#FFEDC1", // 0% 处的颜色
                      },
                      {
                        offset: 0.5,
                        color: "#BD7800", // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: "#BD7800", // 100% 处的颜色
                      },
                    ],
                    global: false, // 缺省为 false
                  },
                },
              },
              {
                value: 50.44,
                itemStyle: {
                  color: "#4FB0D0",
                  borderColor: "rgba(45, 41, 41, 1)",
                },
              },
              {
                value: 48.2,
                itemStyle: {
                  color: "#4FB0D0",
                  borderColor: "rgba(45, 41, 41, 1)",
                },
              },
              {
                value: 59.33,
                itemStyle: {
                  color: "#4FB0D0",
                  borderColor: "rgba(45, 41, 41, 1)",
                },
              },
              {
                value: 66.01,
                itemStyle: {
                  color: "#4FB0D0",
                  borderColor: "rgba(45, 41, 41, 1)",
                },
              },
              {
                value: 71.09,
                itemStyle: {
                  color: {
                    type: "linear",
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                      {
                        offset: 0,
                        color: "#FFCEC2", // 0% 处的颜色
                      },
                      {
                        offset: 0.5,
                        color: "#B23E22", // 50% 处的颜色
                      },
                      {
                        offset: 1,
                        color: " #952B10", // 100% 处的颜色
                      },
                    ],
                    global: false, // 缺省为 false
                  },
                },
              },
              {
                value: 51.27,
                itemStyle: {
                  color: "#4FB0D0",
                  borderColor: "rgba(45, 41, 41, 1)",
                },
              },
              {
                value: 65.39,
                itemStyle: {
                  color: "#4FB0D0",
                  borderColor: "rgba(45, 41, 41, 1)",
                },
              },
            ],
            label: {
              show: true,
              position: "top",
              width: 19,
              height: 9,
              fontSize: 10,
              fontFamily: "Microsoft YaHei",
              fontWeight: 400,
              color: "#CFD4E8",
            },
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
  height: 130px;
}
</style>
