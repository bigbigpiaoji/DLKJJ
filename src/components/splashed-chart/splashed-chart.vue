<template>
  <div class="splashed-chart">
    <white-title
      :title="data.title"
      class="l-mt-10 l-ml-10"
      :icon="true"
      :content="data.content"
    ></white-title>
    <v-chart :autoresize="true" :option="option"> </v-chart>
  </div>
</template>
<script>
import isEmpty from "@/utils/isEmpty";
export default {
  name: "splashed-chart",
  props: {
    splashedData: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      option: {},
      data: {
        title: "各行业电力支撑与发展趋势情况",
        content:
          "每个点为一类行业，横轴为每度电产生增加值，纵轴为用电增速，越靠近右侧则代表该行业为高质量行业，越靠近上方则代表该行业越活越，当靠近右上方的点越多时说明深圳的高质量行业越活跃。",
      },
    };
  },
  mounted() {
    this.init();
    console.log(this.splashedData);
  },
  watch: {
    splashedData() {
      this.option.series[0].data = this.splashedData;
    },
  },
  methods: {
    init() {
      this.initOption();
    },
    initOption() {
      this.option = {
        grid: {
          left: 9,
          right: 16, 
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
            let lengedbar = `charts-tooltip-inner-content-bar`;
            let lengedclass1 = `background-color:${params[0].color};`;
            let legendUnit1 = "%";
            let legendUnit2 = "元度";
            let name = "行业电力支撑与发展趋势:";
            // let lengedclass2 = `background-color:${color2};`;
            //渐变色
            //  let lengedclass2 = `background:linear-gradient(to right, ${legendColor1},${legendColor2});`
            return `
            <div class='charts-tooltip'>
              <img class='charts-tooltip-img' src='${CONFIG.imgUrl}/list/zsjzs.png' />
              <div class='charts-tooltip-inner'>
              <div class='charts-tooltip-inner-heard'> ${params[0].seriesName}</div>

              <div class='charts-tooltip-inner-content'>
                <div style='${lengedclass1}' class='${lengedbar}'></div>
                <div class='charts-tooltip-inner-content-name'>  ${name} </div>
                <div class='charts-tooltip-inner-content-sum'> ${isEmpty(params[0].value[0])} </div>
                <div class='charts-tooltip-inner-content-unit'>${legendUnit1}</div>
              </div>

                <div class='charts-tooltip-inner-content'>
                <div style='${lengedclass1}' class='${lengedbar}'></div>
                <div class='charts-tooltip-inner-content-name'>  ${name} </div>
                <div class='charts-tooltip-inner-content-sum'> ${isEmpty(params[0].value[1])} </div>
                <div class='charts-tooltip-inner-content-unit'>${legendUnit2}</div>
              </div>
            </div>
            `;
          },
        },
        legend: {
          data: [{ name: "2021年", icon: "" }],
          top: 20,
          right: 10,
          itemWidth: 0,
          itemHeight: 0,
          itemGap: 22,
          textStyle: {
            fontFamily: "Microsoft YaHei",
            fontWeight: 400,
            color: "#D3DAF2",
            fontSize: 11,
            opacity: 0.9,
          },
        },
        xAxis: {
          name: "元度",
          axisTick: {
            show: false,
          },

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
              opacity: 0.06,
            },
          },
          nameTextStyle: {
            padding: [0, 0, 0, -27],
            color: "#D3DAF2",
            opacity: 1,
            fontSize: 10,
            fontFamily: "Microsoft YaHei",
            weight: 54,
            opacity: 0.8,
          },
          splitLine: {
            show: false,
          },
        },
        title: [
          {
            text: "单位：%",
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
            min: 0,
            max: 20,
            name: "",
            axisTick: {
              show: false,
            },
            axisLabel: {
              textStyle: {
                color: "#D3DAF2",
                fontFamily: "Microsoft YaHei",
                fontWeight: 400,
                opacity: 0.8,
              },
              fontSize: 12,
            },
            nameTextStyle: {
              padding: [0, 8, 0, 4],
              color: "#D3DAF2",
              opacity: 1,
              fontSize: 12,
              fontFamily: "Microsoft YaHei",
              weight: 54,
              opacity: 0.8,
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#D3DAF2",
                opacity: 0.06,
              },
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: "#D3DAF2",
                opacity: 0.06,
              },
            },
          },
          {
            axisLine: {
              show: true,
              lineStyle: {
                color: "#D3DAF2",
                opacity: 0.06,
              },
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: "#D3DAF2",
                opacity: 0.06,
              },
            },
          },
        ],
        series: [
          {
            name: "2021年",
            symbolSize: 4,
            color: "#186AFF",
            data: this.splashedData,
            type: "scatter",
          },
        ],
      };
    },
  },
};
</script>
<style lang="less">
.splashed-chart {
  width: 346px;
  height: 200px;
}
</style>