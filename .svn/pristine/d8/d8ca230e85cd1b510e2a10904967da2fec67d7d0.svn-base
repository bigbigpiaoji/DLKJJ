<template>
  <div class="radar-chart">
    <div class="v-chart l-ml-20">
      <v-chart ref="line" class="" :autoresize="true" :option="option">
      </v-chart>
    </div>
  </div>
</template>

<script>
export default {
  name: "radar-chart",
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    height: {
      type: String,
      default: "170px",
    },
  },
  data() {
    return {
      option: {},
      valueType: [
        { name: "总值电力弹性", min: -4, max: 4 },
        { name: "社消电力弹性", min: -4, max: 4 },
        { name: "财政电力弹性", min: -4, max: 4 },
        { name: "外贸电力弹性", min: -4, max: 4 },
        { name: "固投电力弹性", min: -4, max: 4 },
      ],
    };
  },
  computed: {
    getStyle() {
      return {
        width: this.$pxToRem(200) + "rem",
        height: this.$pxToRem(170) + "rem",
      };
    },
  },
  mounted() {
    this.init();
  },
  watch: {
    data(val) {
      this.option.series = [
        {
          name: "radar",
          data: [
            {
              name: "宏观经济电力弹性指标",
              value: val,
              areaStyle: { normal: { color: "#1086FF" } },
            },
          ],
        },
      ];
    },
  },
  methods: {
    init() {
      this.initOption();
    },
    initOption() {
      this.option = {
        tooltip: {
          trigger: "item",
          show: false,
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
              "<div style='display:flex;align-items:center;color:#fff'>",
              "<div style='background-color:" +
                legendColor +
                ";width:5px;height:5px;color=#fff' class='l-mr-8'></div>",
              "<div class='l-mr-8'> " + params.name + "</div>",
              "</div>",
              "</div>",
              "</div>",
            ].join("\n");
          },
        },
        title: {
          text: "",
        },
        legend: {
          data: [],
        },
        radar: [
          {
            center: ["50%", "55%"],
            radius: 50,
            indicator: this.valueType,
            axisLine: {
              lineStyle: {
                color: "rgb(255, 255, 255,0.2)",
              },
            },
            splitLine: {
              lineStyle: {
                color: "rgb(255, 255, 255,0.2)",
              },
            },
            splitArea: {
              //控制内外圈的颜色
              areaStyle: {
                color: [
                  "#000",
                  "rgb(255, 255, 255,0.2)",
                  "rgb(0, 0, 0,0.3)",
                  "rgb(255, 255, 255,0.2)",
                  "rgb(255, 255, 255,0)",
                ], //圆环颜色
                // 圆颜色
                shadowBlur: 10,
              },
            },

            name: {
              // 控制每个角上字的换行
              formatter: (value, indicator) => {
                let currentIndex = this.valueType.findIndex(
                  (item) => item.name === value
                );
                let current = this.data[currentIndex];
                let list = value.split("");
                let result = "";
                for (let i = 1; i <= list.length; i++) {
                  // i%3 = 每三个字换行
                  if (!(i % 3) && list[i] != undefined) {
                    result += list[i - 1] + "\n";
                  } else {
                    result += list[i - 1];
                  }
                }
                return result + "\n" + current;
              },

              textStyle: {
                color: "rgb(255, 255, 255,0.7)",
                width: "50px",
                height: "30px",
                padding: [10, -10, -18, -12], // 控制文字padding
              },
            },
          },
        ],
        grid: {
          left: "-8%",
          right: "0%",
          bottom: "0%",
          containLabel: true,
          //图标整体宽高
        },
        series: [
          {
            itemStyle: {
              //拐点颜色
              color: "#00FFFF",
            },
            name: "radar",
            type: "radar",
            symbol: "rect",
            symbolSize: 4,
            colorBy: "series",
            label: {
              show: false,
            },
            lineStyle: {
              //拐点线颜色
              color: "#00FFFF",
            },
            data: [
              {
                value: this.data,
                areaStyle: {
                  normal: {
                    color: "#1086FF", // 选择区域颜色
                    lineStyle: {
                      color: "#1086FF",
                    },
                  },
                },
                name: "宏观经济电力弹性指标",
              },
            ],
          },
        ],
      };
    },
  },
};
</script>

<style lang="less" scoped>
.v-chart {
  width: 220px;
  height: 180px;
}
.radar-chart {
  margin-top: 10px;
  background: linear-gradient(
    to right,
    rgba(37, 181, 255, 0.06),
    rgba(37, 181, 255, 0)
  );
}
</style>