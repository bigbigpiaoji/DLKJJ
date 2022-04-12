<template>
  <div class="timegene-holcharts">
    <v-chart :autoresize="true" :option="option"></v-chart>
  </div>
</template>

<script>
import isEmpty from "@/utils/isEmpty";
export default {
  name: "timegene-holcharts",
  props: {
    data: {
      type: Object,
      default: () => {},
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
            let legendColor1 = params[0].color.colorStops[0].color;
            let legendColor2 = params[0].color.colorStops[1].color;
            let tooltipname = "平均日商业用电增幅："
            let unit = "%";
            let dayUnit =  `节`
            //单色图例
            let lengedclass1 = `background-color:${legendColor2};`
            // 渐变色图例
            let lengedclass2 = `background:linear-gradient(to right, ${legendColor1},${legendColor2});`
            //折线图
            let lengedline = `charts-tooltip-inner-content-line`
            // 柱状图
            let lengedbar = `charts-tooltip-inner-content-bar`
            return `
            <div class='charts-tooltip'>
              <img class='charts-tooltip-img' src='${CONFIG.imgUrl}/list/zsjzs.png' />
              <div class='charts-tooltip-inner'>
              <div class='charts-tooltip-inner-heard'> ${params[0].axisValue}${dayUnit}</div>

              <div class='charts-tooltip-inner-content'>
                <div style='${lengedclass2}' class='${lengedbar}'></div>
                <div class='charts-tooltip-inner-content-name'>  ${tooltipname} </div>
                <div class='charts-tooltip-inner-content-sum'> ${isEmpty(params[0].value)} </div>
                <div class='charts-tooltip-inner-content-unit'>${unit}</div>
              </div>

            </div>
            `;
          },
        },
        xAxis: {
          type: "category",
          data: this.data.Xdata,
          axisTick: {
            show: false,
          },

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
        title: [
          {
            text: "单位："+ this.data.unit,
            left: 5,
            top: -5,
            textStyle: {
              width: 70,
              height: 11,
              fontSize: 10,
              fontFamily: "Microsoft YaHei",
              fontWeight: 400,
              color: "#CFD4E8",
              lineHeight: 20,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "a",
            nameTextStyle: {
              show: false,
            },
            axisLabel: {
              margin: 5, //y轴坐标轴数值与图表的间距
              textStyle: {
                align: "right", //y轴坐标轴数值左对齐
                color: "#CFD4E8",
              },
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "rgb(128 128 128 / 10%)",
                height: 85,
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
            name: "b",
            nameTextStyle: {
              color: "rgba(0,0,0,0)",
            },
            type: "value",
            axisLine: {
              show: true,
              lineStyle: {
                color: "rgb(128 128 128 / 10%)",
                height: 85,
              },
            },
          },
        ],
        series: [
          {
            name: this.data.name ,
            data: this.data.YearData,
            type: "bar",
            barWidth: 14,
            // color: "#1FFAFD",
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "rgba(52, 255, 186, 1)", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "rgba(0, 222, 255, 1)", // 100% 处的颜色
                },
              ],
              globalCoord: false, // 缺省为 false
            },
          },
        ],
        grid: {
          left: 10,
          right: "2%",
          bottom: "0%",
          top: "25%",

          containLabel: true,
        },
      };
    },
  },
};
</script>

<style>
.timegene-holcharts {
  height: 100%;
  width: 100%;
  color: rgba(207, 212, 232);
}
</style>