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

import isEmpty from "@/utils/isEmpty";
export default {
  name: "trade-eleccharts",
  props: {
    height: {
      type: String,
      default: "120px",
    },
    data: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      option: {},
      timer: null,
    };
  },
  created() {
    this.init();
  },
  watch: {
    data(item) {
      this.option.series = [
        {
          name: this.data.areaNameData,
          data: this.data.data,
        },
      ];
      this.option.xAxis = {
        data: this.data.month,
      };
    },
  },
  methods: {
    init() {
      this.option = {
        tooltip: {
          axisPointer: {
            lineStyle: {
              opacity: 0,
            },
          },
          trigger: "axis",
          borderRadius: 0,
          padding: 0,
          borderColor: "#707070",
          borderWidth: 1,
          backgroundColor: "#000c28d9",
          formatter: (params) => {
            let unit = "千瓦时";
            
            let areaName = params[0].seriesName;
            let legendColor1 = params[0].color;
            //处理时间字符串
            let time = params[0].axisValue


            //单色图例
            let lengedclass1 = `background-color:${legendColor1};`;
            // 渐变色图例
            // let lengedclass2 = `background:linear-gradient(to right, ${legendColor1},${legendColor2});`
            //折线图
            let lengedline = `charts-tooltip-inner-content-line`;
            // 柱状图
            let lengedbar = `charts-tooltip-inner-content-bar`;
            return `
            <div class='charts-tooltip'>
              <img class='charts-tooltip-img' src='${
                CONFIG.imgUrl
              }/list/zsjzs.png' />
              <div class='charts-tooltip-inner'>
              <div class='charts-tooltip-inner-heard'> ${time}</div>

              <div class='charts-tooltip-inner-content'>
                <div style='${lengedclass1}' class='${lengedline}'></div>
                <div class='charts-tooltip-inner-content-name'>  ${areaName}用电量情况</div>
                <div class='charts-tooltip-inner-content-sum'> ${isEmpty(
                  params[0].value
                )} </div>
                <div class='charts-tooltip-inner-content-unit'>${unit}</div>
              </div>

            </div>
            `;
          },
        },
        title: [
          {
            text: "单位：千瓦时",
            left: -5,
            top: 15,
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
        grid: {
          left: -20,
          right: "1%",
          bottom: "0%",
          top: "25%",
          containLabel: true,
        },
        xAxis: {
          boundaryGap: true,
          axisLabel: {
            interval: 13,
            margin: 20,
            align: "left",
            formatter(params) {
              return `{a|${params.slice(0, 4)}}`;
            },
            rich: {
              a: {
                color: "#CFD4E8",
              },
            },
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
          type: "category",
          data: this.data.month,
        },
        yAxis: [
          {
            name: "a",
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
            axisLabel: {
              margin: 25, //y轴坐标轴数值与图表的间距
              textStyle: {
                align: "left", //y轴坐标轴数值左对齐
                color: "#CFD4E8",
              },
            },
            splitLine: {
              show: true,
              interval: 0,
              lineStyle: {
                color: "rgb(128 128 128 / 10%)",
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
            color: "#9460FF",
            name: "",
            type: "line",
            symbol: "none",
            color: "#00E4FF",
            lineStyle: {
              color: "#00E4FF",
            },
            emphasis: {
              focus: "self",
            },
            data: this.data.data,
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
  height: 270px;
}
</style>
