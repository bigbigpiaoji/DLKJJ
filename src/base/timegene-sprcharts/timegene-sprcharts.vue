<template>
  <div :style="{ height: height }" class="v-chart">
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
  name: "timegene-sprcharts",
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
  mounted() {
    this.init();
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
          formatter: function (params) {
            let unit = "万千瓦时";
            let timeUnit = "年";
            return `
            <div class='charts-tooltip'>
              <img class='charts-tooltip-img' src='${
                CONFIG.imgUrl
              }/list/zsjzs.png' />
              <div class='charts-tooltip-inner'>
              <div class='charts-tooltip-inner-heard'> ${params[0].name.replace('.','-')}</div>

              <div class='charts-tooltip-inner-content'>
                <div style='background-color:${params[0].color};' class='charts-tooltip-inner-content-lenged'></div>
                <div class='charts-tooltip-inner-content-name'>  ${params[0].seriesName} ${timeUnit}</div>
                <div class='charts-tooltip-inner-content-sum'> ${isEmpty(
                  params[0].value
                )} </div>
                <div class='charts-tooltip-inner-content-unit'>${unit}</div>
              </div>

              <div class='charts-tooltip-inner-content'>
                <div style='background-color:${params[1].color};' class='charts-tooltip-inner-content-lenged'></div>
                <div class='charts-tooltip-inner-content-name'>  ${params[1].seriesName} ${timeUnit}</div>
                <div class='charts-tooltip-inner-content-sum'> ${isEmpty(
                  params[1].value
                )}  </div>
                <div class='charts-tooltip-inner-content-unit'>${unit}</div>
              </div>
                            <div class='charts-tooltip-inner-content'>
                <div style='background-color:${params[2].color};' class='charts-tooltip-inner-content-lenged'></div>
                <div class='charts-tooltip-inner-content-name'>  ${params[2].seriesName} ${timeUnit}</div>
                <div class='charts-tooltip-inner-content-sum'> ${isEmpty(
                  params[2].value
                )}  </div>
                <div class='charts-tooltip-inner-content-unit'>${unit}</div>
              </div>

                            <div class='charts-tooltip-inner-content'>
                <div style='background-color:${params[3].color};' class='charts-tooltip-inner-content-lenged'></div>
                <div class='charts-tooltip-inner-content-name'>  ${params[3].seriesName} ${timeUnit}</div>
                <div class='charts-tooltip-inner-content-sum'> ${isEmpty(
                  params[3].value
                )}  </div>
                <div class='charts-tooltip-inner-content-unit'>${unit}</div>
              </div>
              
            </div>

            `;
          },
        },
        title: [
          {
            text: "单位：" + this.data.unit,
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
        legend: {
          data: [
            { name: this.data.nameData1, icon: "rect" },
            { name: this.data.nameData2, icon: "rect" },
            { name: this.data.nameData3, icon: "rect" },
            { name: this.data.nameData4, icon: "rect" },
          ],
          lineStyle: {
            color: "inherit",
          },
          itemWidth: 10,
          itemHeight: 3,
          padding: [-40, -25, 0, 0],
          formatter(params) {
            return `{a| ${params} }`;
          },
          textStyle: {
            fontSize: 11,
            fontFamily: "Microsoft YaHei",
            fontWeight: 400,
            color: "#D3DAF2",
            lineHeight: 30,
            rich: {
              a: {
                verticalAlign: "middle",
                padding: [2, 0, 0, 0],
              },
            },
          },
          right: 30,
          itemGap: 22,
          top: 35,
        },
        grid: {
          left: 10,
          right: 10,
          bottom: "0%",
          top: "25%",
          containLabel: true,
        },
        xAxis: {
          boundaryGap: true,
          axisLine: {
            show: false,
            lineStyle: {
              color: "#CFD4E8",
            },
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            interval: 13,
            margin: 20,
            align: "left",
            formatter(params) {
              return `{a|${params.replace('0','')}}`;
            },
            rich: {
              a: {
                color: "#CFD4E8",
              },
            },
          },
          type: "category",
          data: this.data.Xdata,
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
              margin: 5, //y轴坐标轴数值与图表的间距
              textStyle: {
                align: "right", //y轴坐标轴数值左对齐
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
            emphasis: {
              focus: "series",
            },
            color: "#26BFB9",
            name: this.data.nameData1,
            type: "line",
            symbol: "none",
            color: "#D7893E",
            lineStyle: {
              color: "#D7893E",
            },
            data: this.data.YearData1,
          },
          {
            emphasis: {
              focus: "series",
            },
            color: "#9460FF",
            name: this.data.nameData2,
            type: "line",
            symbol: "none",
            color: "#2B94FF",
            lineStyle: {
              color: "#2B94FF",
            },
            emphasis: {
              focus: "series",
            },
            data: this.data.YearData2,
          },
          {
            emphasis: {
              focus: "series",
            },
            color: "#26BFB9",
            name: this.data.nameData3,
            type: "line",
            symbol: "none",
            color: "#26BFB9",
            lineStyle: {
              color: "#26BFB9",
            },
            data: this.data.YearData3,
          },
          {
            emphasis: {
              focus: "series",
            },
            color: "#26BFB9",
            name: this.data.nameData4,
            type: "line",
            symbol: "none",
            color: "#9460FF",
            lineStyle: {
              color: "#9460FF",
            },
            data: this.data.YearData4,
          },
          {
            data: [22.45, 17.4, 24.75, 26.88, 35.54, 34.22, 37.23],
          },
        ],
      };
    },
  },
};
</script>
<style lang="less" scoped>
@import "../../style/var.less";
</style>
