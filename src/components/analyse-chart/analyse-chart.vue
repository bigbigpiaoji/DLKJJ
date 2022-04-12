<template>
  <div class="analyse-chart">
    <white-title :title="data.title" class="l-ml-10 l-mt-10"></white-title>
    <v-chart :autoresize="true" :option="option"> </v-chart>
  </div>
</template>
<script>
import isEmpty from "@/utils/isEmpty";
export default {
  name: "analyse-chart",
  props: {
    appreciateData: {
      type: Array,
      default: () => [],
    },
    powerData: {
      type: Array,
      default: () => [],
    },
    Xdata: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      option: {},
      data: { title: "用电量与增加值变化趋势" },
    };
  },
  mounted() {
    this.init();
  },
  watch: {},
  methods: {
    init() {
      this.initOption();
    },
    initOption() {
      this.option = {
        legend: {
          data: [
            { name: "二产用电量", icon: "rect" },
            { name: "二产增加值", icon: "rect" },
          ],
          selectedMode: false,
          top: 8,
          left: 98,
          itemWidth: 6,
          itemHeight: 6,
          itemGap: 6,

          formatter(params) {
            return `{a| ${params} }`;
          },
          textStyle: {
            fontFamily: "Microsoft YaHei",
            fontWeight: 400,
            color: "#D3DAF2",
            lineHeight: 30,
            opacity: 0.8,
            rich: {
              a: {
                verticalAlign: "middle",
                padding: [2, -5, 0, 0],
                fontSize: 11,
              },
            },
          },
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
            let color1 = params[0].color;
            let color2 = params[1].color;
            let legendUnit1 = "万千瓦时";
            let legendUnit2 = "万亿元";

            let lengedbar = `charts-tooltip-inner-content-bar`;
            let lengedclass1 = `background-color:${color1};`;
            let lengedclass2 = `background-color:${color2};`;
            //渐变色
            //  let lengedclass2 = `background:linear-gradient(to right, ${legendColor1},${legendColor2});`
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
                <div style='${lengedclass1}' class='${lengedbar}'></div>
                <div class='charts-tooltip-inner-content-name'>  ${isEmpty(
                  params[0].seriesName
                )} </div>
                <div class='charts-tooltip-inner-content-sum'> ${isEmpty(
                  num1
                )} </div>
                <div class='charts-tooltip-inner-content-unit'>${legendUnit1}</div>
              </div>

               <div class='charts-tooltip-inner-content'>
                <div style='${lengedclass2}' class='${lengedbar}'></div>
                <div class='charts-tooltip-inner-content-name'>  ${isEmpty(
                  params[1].seriesName
                )} </div>
                <div class='charts-tooltip-inner-content-sum'> ${isEmpty(
                  num2
                )} </div>
                <div class='charts-tooltip-inner-content-unit'>${legendUnit2}</div>
              </div>

            </div>
            `;
          },
        },
        xAxis: [
          {
            type: "category",
            data: this.Xdata,
            axisLine: {
              show: true,
              lineStyle: {
                color: "#CFD4E8",
                opacity: 0.06,
              },
            },
            axisTick: { show: false },
            splitLine: {
              show: false,
            },
            axisLabel: {
              interval: 0,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "",
            nameTextStyle: {
              padding: [0, 0, 0, 20],
              color: "#D3DAF2",
              opacity: 0.8,
              fontSize: 12,
              fontFamily: "Microsoft YaHei",
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: "#CFD4E8",
                opacity: 0.06,
              },
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#CFD4E8",
                opacity: 0.06,
              },
            },
            nameLocation: "end",
          },
          {
            type: "value",
            name: "",
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
                opacity: 0.06,
              },
            },
            nameTextStyle: {
              padding: [0, 0, 0, -5],
              color: "#D3DAF2",
              opacity: 0.8,
              fontSize: 12,
              fontFamily: "Microsoft YaHei",
            },
          },
        ],
        grid: {
          left: 9,
          right: 15,
          bottom: 10,
          top: 60,
          containLabel: true,
        },
        title: [
          {
            text: "单位：万千瓦时",
            left: 3,
            top: 15,
            textStyle: {
              width: 70,
              height: 11,
              fontSize: 12,
              fontFamily: "Microsoft YaHei",
              fontWeight: 400,
              color: "#D3DAF2",
              opacity: 0.8,

              lineHeight: 20,
            },
          },
          {
            text: "单位：万亿元",
            right: 0,
            top: 15,
            textStyle: {
              width: 70,
              height: 11,
              fontSize: 12,
              fontFamily: "Microsoft YaHei",
              fontWeight: 400,
              color: "#D3DAF2",
              opacity: 0.8,
              lineHeight: 20,
            },
          },
        ],
        series: [
          {
            name: "二产用电量",
            data: this.powerData,
            type: "bar",
            color: "#1FFAFD",
            barWidth: 10,
          },
          {
            name: "二产增加值",
            data: this.appreciateData,
            type: "bar",
            color: "#0080FF",
            yAxisIndex: 1,
            barWidth: 10,
          },
        ],
      };
    },
  },
};
</script>
<style lang="less">
.analyse-chart {
  height: 200px;
}
</style>