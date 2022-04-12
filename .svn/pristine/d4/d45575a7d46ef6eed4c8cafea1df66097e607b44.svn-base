<template>
  <div class="epidemic-impact">
    <div class="epidemic-impact-chart">
      <v-chart
        ref="chart"
        class=""
        style=""
        :autoresize="true"
        :option="option"
      >
      </v-chart>
     
    </div>
  </div>
</template>
<script>
export default {
  name: "epidemic-impact",
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    dataTwo: {
      type: Array,
      default: () => [],
    },
    maxData: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      option: {},
      timer: null,
      
    };
  },
  watch: {
    dataTwo() {
      this.option.series[0] = {
        data: this.dataTwo,
      };
    },
    data() {
      this.option.xAxis.data = this.data;
    },
    maxData() {
      this.option.series[1] = {
        data: this.maxData,
      };
    },
  },
  computed: {
    getStyle() {
      return {
        XfontsizetoRem: this.$pxToRem(12) + "rem",
         YfontsizetoRem: this.$pxToRem(10) + "rem",
          BarfontsizetoRem: this.$pxToRem(12) + "rem",
      };     
    },
  },
  mounted() {
    
    this.init();
    this.initEvent();
   
  },
  methods: {
    init() {
      this.initOption();
    },
    initEvent() {
      this.$refs.chart.chart.on("click", (e) => {
        this.$emit("chartDataChange", e);
      });
    },
    initOption() {
      this.option = {
        grid: {
          top: "13%",
          left: "7%",
          right: "-4%",
          bottom: "20%",
        },
        xAxis: {
          boundaryGap: true,
          type: "category",
          data: this.data,

          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisLabel: {
            interval: 0,
            padding: [3, 10, 0, 0],
            fontSize: this.getStyle.XfontsizetoRem,
            color: "#CFD4E8",
          },
        },

        yAxis: [
          {
            // max: 50,
            // min: 0,
            type: "value",
            axisLabel: {
              margin: 0, //y轴坐标轴数值与图表的间距
              formatter: "-{value}%",
              verticalAlign: "top",
              lineHeight: 14,
              textStyle: {
                align: "right", //y轴坐标轴数值左对齐
                color: "rgba(192, 213, 254,0.6)",
                fontSize: this.getStyle.YfontsizetoRem,
              },
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "rgba(255, 255, 255,0.1)",
                height: 100,
                opacity: 0.18,
              },
            },
            splitLine: {
              show: true,
              interval: 0,
              lineStyle: {
                color: "rgba(255, 255, 255,0.1)",
              },
            },
          },
        ],
        series: [
          {
            data: this.dataTwo,
            type: "bar",
            barWidth: "50%",
            barGap: "-120%",

            label: {
              show: true,
              position: "top",
              valueAnimation: true,
              formatter: "-" + "{c}" + "%",
              textStyle: {
                color: "#d3daf2",
                fontSize: this.getStyle.BarfontsizetoRem,
                opacity: 0.06,
                fontWeight: "bold",
              },
            },
            itemStyle: {
              normal: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "#e52e4c", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "rgba(229,46,76,0.2)", // 100% 处的颜色
                    },
                  ],
                  global: false, // 缺省为 false
                },
              },
            },
          },
          {
            name: "",

            type: "bar",

            data: this.maxData,
            barWidth: "70%",

            itemStyle: {
              normal: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "rgba(66,116,185,0.1)", // 0% 处的颜色
                    },
                    {
                      offset: 0.5,
                      color: "rgba(66,116,185,0)", // 100% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "rgba(66,116,185,0.1)", // 100% 处的颜色
                    },
                  ],
                  global: false, // 缺省为 false
                },
              },
            },
          },
        ],
      };
    },
  },
};
</script>

<style lang="less">
@import "../../style/var.less";
.epidemic-impact {
  display: flex;
  justify-content: center;
  &-chart {
    width: 100%;
    height: 122px;
  }
}
</style>
