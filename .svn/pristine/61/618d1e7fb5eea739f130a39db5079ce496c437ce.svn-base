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
  name: "timegene-line-powerchart",
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
          formatter: (params) => {
            let colorOneGreen = params[0].color.colorStops[0].color;
            let colorTwoGreen = params[0].color.colorStops[1].color;
            let colorThreepurple = params[1].color.colorStops[0].color;
            let colorFourpurple = params[1].color.colorStops[1].color;
            let unit = this.data.unit;
            let timeUnit = ''
            return `
            <div class='charts-tooltip'>
              <img class='charts-tooltip-img' src='${CONFIG.imgUrl}/list/zsjzs.png' />
              <div class='charts-tooltip-inner'>
              <div class='charts-tooltip-inner-heard'> ${params[0].name} ${timeUnit}</div>

              <div class='charts-tooltip-inner-content'>
                <div style='background:linear-gradient(to right, ${colorOneGreen},${colorTwoGreen});' class='charts-tooltip-inner-content-lenged'></div>
                <div class='charts-tooltip-inner-content-name'>  ${params[0].seriesName} </div>
                <div class='charts-tooltip-inner-content-sum'> ${params[0].value} </div>
                <div class='charts-tooltip-inner-content-unit'>${unit}</div>
              </div>

              <div class='charts-tooltip-inner-content'>
                <div style='background:linear-gradient(to right, ${colorThreepurple},${colorFourpurple});' class='charts-tooltip-inner-content-lenged'></div>
                <div class='charts-tooltip-inner-content-name'>  ${params[1].seriesName} </div>
                <div class='charts-tooltip-inner-content-sum'> ${params[1].value} </div>
                <div class='charts-tooltip-inner-content-unit'>${unit}</div>
              </div>
              
            </div>

            `;
          },
        },
        title: [
          {
            text: "单位：" + this.data.unit,
            left: 3,
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
          ],
          lineStyle: {
            color: "inherit",
          },
          itemWidth: 10,
          itemHeight: 3,
          padding: [-40, -20, 0, 0],
          formatter(params){              
              return `{a| ${params} }`
          },
          textStyle: {
            fontSize: 11,
            fontFamily: "Microsoft YaHei",
            fontWeight: 400,
            color: "#D3DAF2",
            lineHeight: 30,
            rich: {
              a: {
                verticalAlign:'middle',
                padding:[2,0,0,0]
              },
            },
          },
          right: 30,
          itemGap: 22,
          top: 35,
        },
        grid: {
          left: -7,
          right: 15,
          bottom: "0%",
          top: "25%",

          containLabel: true,
        },
        xAxis: {
          boundaryGap: true,
          axisLabel: {
            align: "center",
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
          data: this.data.Xdata,
        },
        yAxis: [
          {
            min: this.data.min,
            max: this.data.max,
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
            axisLabel: {
              interval: 0,
              margin: 25, //y轴坐标轴数值与图表的间距
              textStyle: {
                align: "left", //y轴坐标轴数值左对齐
                color: "#CFD4E8",
              },
            },
          },
        ],
        series: [
          {
            color: "#26BFB9",
            name: this.data.nameData1,
            type: "line",
            symbol: "none",
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [
                {
                  offset: 0,
                  color: "#CB98FF", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#6766FF", // 100% 处的颜色
                },
              ],
              globalCoord: false, // 缺省为 false
            },
            lineStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(203, 152, 255, 1)", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "rgba(103, 102, 255, 1)", // 100% 处的颜色
                  },
                ],
                globalCoord: false, // 缺省为 false
              },
            },
            emphasis: {
              focus: "series",
            },
            data: this.data.businessYearData,
          },
          {

            color: "#9460FF",
            name: this.data.nameData2,
            type: "line",
            symbol: "none",
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [
                {
                  offset: 0,
                  color: "#34FFBA ", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#00DEFF", // 100% 处的颜色
                },
              ],
              globalCoord: false, // 缺省为 false
            },
            lineStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
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
            emphasis: {
              focus: "series",
            },
            data: this.data.residentYearData,
          },
        ],
      };
    },
  },
};
</script>
<style lang="less" >
@import "../../style/var.less";
</style>
