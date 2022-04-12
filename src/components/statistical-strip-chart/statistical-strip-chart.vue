<template>
  <div class="statistical-strip-chart">
    <v-chart
      ref="line"
      class="l-full l-flex"
      :autoresize="true"
      :option="option"
    ></v-chart>
  </div>
</template>

<script>
import isEmpty from "@/utils/isEmpty";
export default {
  name: "statistical-strip-chart",
  props: {
    height: {
      type: String,
      default: "",
    },
    Xdata: {
      type: Array,
      default: () => [],
    },
    data: {
      type: Array,
      default: () => [],
    },
    Ydata: {
      type: Array,
      default: () => [],
    },
    interval: {
      type: Number,
      default: 0,
    },
  },

  data() {
    return {
      option: {},
      timer: null,
    };
  },
  watch: {
    Ydata() {
      this.option.series.data = this.Ydata;
    },
    Xdata() {
      this.option.xAxis.data = this.Xdata;
    },
    interval() {
      this.option.xAxis.axisLabel.interval = this.interval;
    },
  },
  mounted() {
    this.init();
  },
  computed: {
    getStyle() {
      return {
        ecwidth: this.$pxToRem(800),
        width: this.$pxToRem(475) + "rem",
        height: this.$pxToRem(205) + "rem",
        echeight: this.$pxToRem(120) + "rem",
      };
    },
  },
  methods: {
    init() {
      this.option = {
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
          formatter: (params) => {
            let legendUnit = "家";
            let legendUnit1 = "%";
            let legendtxt = "正常运行企业：";
            let legendtxt1 = "占比：";
            let lengedclass1 = `background-color:${params[0].color};`;
            let lengedline = `charts-tooltip-inner-content-line`;
            return `
            <div class='charts-tooltip'>
              <img class='charts-tooltip-img' src='${
                CONFIG.imgUrl
              }/list/zsjzs.png' />
              <div class='charts-tooltip-inner'>
              <div class='charts-tooltip-inner-heard'> ${
                params[0].axisValue
              }</div>

              <div class='charts-tooltip-inner-content'>
                <div style='${lengedclass1}' class='${lengedline}'></div>
                <div class='charts-tooltip-inner-content-name'>  ${legendtxt} </div>
                <div class='charts-tooltip-inner-content-sum'> ${
                  params[0].value
                } </div>
                <div class='charts-tooltip-inner-content-unit'>${legendUnit}</div>
              </div>

              <div class='charts-tooltip-inner-content'>
                <div style='' class='${lengedline}'></div>
                <div class='charts-tooltip-inner-content-name'>  ${legendtxt1} </div>
                <div class='charts-tooltip-inner-content-sum'> ${isEmpty(
                  this.data[params[0].dataIndex]
                )} </div>
                <div class='charts-tooltip-inner-content-unit'>${legendUnit1}</div>
              </div>

            

            </div>
            `;
          },
        },
        title: [
          {
            text: "单位：家",
            left: 12,
            top: 15,
            textStyle: {
              width: 43,
              height: 12,
              fontSize: 12,
              fontWeight: 400,
              fontFamily: "Microsoft YaHei",
              color: "#D3DAF2",
            },
          },
        ],
        legend: {
          data: [{ name: "正常运行企业", icon: "rect" }],
          right: 12,
          top: 15,
          itemWidth: 15,
          itemHeight: 4,
          itemGap: 22,
          textStyle: {
            fontFamily: "Microsoft YaHei",
            fontWeight: 400,
            color: "#D3DAF2",
            opacity: 0.8,
            fontSize: 10,
          },
        },
        grid: {
          left: 0,
          top: 52,
          right: "2%",
          bottom: 1,
          containLabel: true,
        },
        xAxis: {
          axisLabel: {
            boundaryGap: ["1%", "1%"],
            interval: this.interval,
            align: "left",
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: "#CFD4E8",
            },
          },
          axisTick: {
            show: false,
          },
          nameTextStyle: {
            verticalAlign: "bottom",
            padding: [0, 0, -20, -5],
          },

          type: "category",
          boundaryGap: false,
          data: this.Xdata,
        },
        yAxis: [
          {
            type: "value",
            axisLabel: {
              margin: 25, //y轴坐标轴数值与图表的间距
              textStyle: {
                align: "left", //y轴坐标轴数值左对齐
              },
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#CFD4E8",
                height: 52,
                opacity: 0.18,
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
          {
            axisLine: {
              show: true,
              lineStyle: {
                color: "#FF9409",
                height: 52,
                opacity: 0.2,
              },
            },
          },
        ],
        series: [
          {
            name: "正常运行企业",
            color: "#FF9409", //线条颜色
            type: "line",
            symbol: "none",
            stack: "Total",
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgb(255 148 9 / 40%)", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "rgb(255 148 9 / 0%)", // 100% 处的颜色
                  },
                ],
                globalCoord: false, // 缺省为 false
              },
            },

            data: this.Ydata,
          },
        ],
      };
    },
  },
};
</script>
<style lang="less" scoped>
.statistical-strip-chart {
  height: 205px;
  width: 535px;
}
</style>
