<template>
  <div class="electricity-chart">
    <white-title :title="data.title" class="l-mt-10 l-ml-10"></white-title>
    <v-chart :autoresize="true" :option="option"> </v-chart>
  </div>
</template>
<script>
import isEmpty from "@/utils/isEmpty";
export default {
  name: "electricity-chart",
  props: {
    secundiparityData: {
      type: Array,
      default: () => [],
    },
    industryData: {
      type: Array,
      default: () => [],
    },
    ManufacturData: {
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
      data: { title: "每度电产生增加值" },
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.initOption();
    },
    initOption() {
      this.option = {
        legend: {
          data: [
            { name: "第二产业", icon: "rect" },
            { name: "工业", icon: "rect" },
            { name: "制造业", icon: "rect" },
          ],
          itemWidth: 12,
          itemHeight: 4,
          padding: [-6, -13, 0, 0],
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
                padding: [2, 0, 0, 0],
                fontSize: 11,
              },
            },
          },
          right: 25,
          top: 20,
        },
        grid: {
          left: 9,
          right: 15,
          bottom: 10,
          top: 60,
          containLabel: true,
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
            var num1 = params[0].value;
            var num2 = params[1].value;
            var num3 = params[2].value;
            let legendUnit = "元/度";
            let lengedline = `charts-tooltip-inner-content-line`;
            let lengedclass1 = `background-color:${params[0].color};`;
            let lengedclass2 = `background-color:${params[1].color};`;
            let lengedclass3 = `background-color:${params[2].color};`;
            return `
            <div class='charts-tooltip'>
              <img class='charts-tooltip-img' src='${CONFIG.imgUrl}/list/zsjzs.png' />
              <div class='charts-tooltip-inner'>
              <div class='charts-tooltip-inner-heard'> ${params[0].axisValue}</div>

              <div class='charts-tooltip-inner-content'>
                <div style='${lengedclass1}' class='${lengedline}'></div>
                <div class='charts-tooltip-inner-content-name'>  ${isEmpty(params[0].seriesName)} </div>
                <div class='charts-tooltip-inner-content-sum'> ${num1} </div>
                <div class='charts-tooltip-inner-content-unit'>${legendUnit}</div>
              </div>

               <div class='charts-tooltip-inner-content'>
                <div style='${lengedclass2}' class='${lengedline}'></div>
                <div class='charts-tooltip-inner-content-name'>  ${isEmpty(params[1].seriesName)} </div>
                <div class='charts-tooltip-inner-content-sum'> ${num2} </div>
                <div class='charts-tooltip-inner-content-unit'>${legendUnit}</div>
              </div>

               <div class='charts-tooltip-inner-content'>
                <div style='${lengedclass3}' class='${lengedline}'></div>
                <div class='charts-tooltip-inner-content-name'>  ${isEmpty(params[2].seriesName)} </div>
                <div class='charts-tooltip-inner-content-sum'> ${num3} </div>
                <div class='charts-tooltip-inner-content-unit'>${legendUnit}</div>
              </div>

            </div>
            `;
          },
        },
        xAxis: {
          boundaryGap: ["1%", "1%"],
          axisLabel: {
            textStyle: {
              color: "#D3DAF2",
              fontFamily: "Microsoft YaHei",
              fontWeight: 400,
              opacity: 0.8,
            },
            fontSize: 12,
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
          data: this.Xdata,
        },
        title: [
          {
            text: "单位：元/度",
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
        ],
        yAxis: [
          {
            name: "",
            nameTextStyle: {
              padding: [0, 0, 0, 25],
              color: "#D3DAF2",
              opacity: 1,
              fontSize: 12,
              fontFamily: "Microsoft YaHei",
              weight: 54,
              opacity: 0.8,
            },
            type: "value",
            axisLabel: {
              textStyle: {
                color: "#D3DAF2",
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
              interval: 1,
              lineStyle: {
                color: "rgba(255,255,255,0.06)",
              },
            },
          },
          {
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
          {
            type: "value",
            axisLabel: {
              textStyle: {
                color: "#D3DAF2",
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
        ],
        series: [
          {
            color: "#00E4FF",
            name: "第二产业",
            type: "line",
            symbol: "none",
            emphasis: {
              focus: "series",
            },
            data: this.secundiparityData,
          },
          {
            color: "#186AFF",
            name: "工业",
            type: "line",
            symbol: "none",
            emphasis: {
              focus: "series",
            },
            data: this.industryData,
          },
          {
            color: "#FF9409",
            name: "制造业",
            type: "line",
            symbol: "none",
            emphasis: {
              focus: "series",
            },
            data: this.ManufacturData,
          },
        ],
      };
    },
  },
};
</script>
<style lang="less">
.electricity-chart {
  width: 346px;
  height: 200px;
}
</style>