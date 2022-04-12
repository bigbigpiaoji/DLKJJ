<template>
  <div class="industrial-rate-chart">
    <v-chart :autoresize="true" :option="option"></v-chart>
  </div>
</template>

<script>
export default {
  name: "industrial-rate-chart",
  props: {
    Xdata: {
      type: Array,
      default: () => [],
    },
    Ydata: {
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
  watch: {
    Ydata() {
      this.option.series.data = this.Ydata;
    },
    Xdata() {
      this.option.xAxis.data = this.Xdata;
    },
  },
  computed: {
    getStyle() {
      return {
        ecwidth: this.$pxToRem(800),
        width: this.$pxToRem(475) + "rem",
        height: this.$pxToRem(186) + "rem",
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
          formatter: function (params) {
            let lengedbar = `charts-tooltip-inner-content-bar`;
            let lengedclass1 = `background-color:${params[0].color};`;
            let legendUnit1 = "%";
            let name = "规上工业整体用电增速：";
            let value = "";
            if (params[0].axisValue.length < 4) {
              value = "2021-" + params[0].axisValue;
            } else {
              value = params[0].axisValue;
            }

            return `
            <div class='charts-tooltip'>
              <img class='charts-tooltip-img' src='${CONFIG.imgUrl}/list/zsjzs.png' />
              <div class='charts-tooltip-inner'>
              <div class='charts-tooltip-inner-heard'> ${value}</div>

              <div class='charts-tooltip-inner-content'>
                <div style='${lengedclass1}' class='${lengedbar}'></div>
                <div class='charts-tooltip-inner-content-name'>  ${name} </div>
                <div class='charts-tooltip-inner-content-sum'> ${params[0].value} </div>
                <div class='charts-tooltip-inner-content-unit'>${legendUnit1}</div>
              </div>

            </div>
            `;
          },
        },
        xAxis: {
          type: "category",
          // data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          data: this.Xdata,
          axisTick: {
            show: false,
          },
          // boundaryGap: ["1%", "1%"],
          axisLabel: {
            interval: 0,
            inside: false,
            textStyle: {
              color: "#CFD4E8",
              fontFamily: "Microsoft YaHei",
              fontWeight: 400,
              opacity: 0.8,
            },
            fontSize: 12,
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#FFFFFF",
              opacity: 0.06,
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
            type: "value",
            name: "单位：%",
            nameTextStyle: {
              padding: [0, 0, 6, 2],
              color: "#D3DAF2",
              fontSize: 12,
              fontFamily: "Microsoft YaHei",
              fontWeight: 400,

              weight: 47,
              //   lineHeight: 60,
            },
            axisLabel: {
              textStyle: {
                color: "#CFD4E8",
                fontFamily: "Microsoft YaHei",
                fontWeight: 400,
                opacity: 0.8,
              },
              fontSize: 12,
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
          {
            axisLine: {
              show: true,
              lineStyle: {
                color: "rgb(128 128 128 / 30%)",
                // height: 85,
              },
            },
          },
        ],
        series: {
          // data: [
          //   0.6, 0.7, 0.65, 0.58, 0.59, 0.77, 0.58, 0.59, 0.62, 0.61, 0.61,
          //   0.64,
          // ],
          data: this.Ydata,
          type: "bar",
          color: "#1FFAFD",
          barWidth: 10,
        },

        grid: {
          borderColor: "rgb(0 0 0 / 10%)",
          left: " 5%",
          top: "30%",
          right: "4%",
          bottom: "0%",

          containLabel: true,
        },
      };
    },
  },
};
</script>

<style>
.industrial-rate-chart {
  height: 200px;
}
</style>