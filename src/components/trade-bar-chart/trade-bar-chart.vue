<template>
  <div class="trade-bar-chart">
    <v-chart ref="chart" :autoresize="true" :option="option"> </v-chart>
    <div class="radio-group" @mouseleave="mouseLeave">
      <div
        class="radio-item"
        v-show="item.show"
        v-for="(item, index) in xArray"
        :key="index"
        @click="onItemClick(item, index)"
        :class="[current === index ? 'active' : '']"
        :style="{
          left: item.x + 'px',
          bottom: 0,
          width: item.r + 1 + 'px',
          height: item.r + 1 + 'px',
        }"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>
<script>

import isEmpty from "@/utils/isEmpty";
export default {
  name: "trade-bar-chart",
  props: {
    chartData: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      option: {},
      data: { title: "每度电产生增加值" },
      xArray: [],
      current: -1,
      outdata: {
        year: "",
      },
    };
  },
  mounted() {
    this.init();
  },
  watch: {
    chartData(val) {
      this.option.dataset.source = this.chartData;
    },
  },
  methods: {
    init() {
      this.initOption();
      this.$refs.chart.chart.on("click", (e) => {});
    },
    mouseLeave() {
      this.current = -1;
    },
    onItemClick(item, index) {
      this.current = index;
      this.$emit("changeContent", item, index);
      this.$refs.chart.chart.dispatchAction({
        type: "showTip",
        dataIndex: index,
        seriesIndex: 0,
      });
    },
    initOption() {
      var source = this.chartData;

      this.option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
            axis: "x",
          },
          borderRadius: 0,
          padding: 0,
          borderColor: "#707070",
          borderWidth: 1,
          backgroundColor: "#000c28d9",
          formatter: function (params) {
            let legendColor1 = params[0].color;
            let legendColor2 = params[1].color;
            let legendColor3 = params[2].color;
            let legendtxt1 = params[0].seriesName;
            let legendtxt2 = params[1].seriesName;
            let legendtxt3 = params[2].seriesName;
            //出口
            let out = params[0].value[0];
            //进口
            let inner = Math.abs(params[1].value[1]);
            //顺差
            let surplus = Math.abs(params[0].value[0] - inner);
            let unit = "亿元";

            //单色图例
            let lengedclass1 = `background-color:${legendColor1};`;
            let lengedclass2 = `background-color:${legendColor2};`;
            let lengedclass3 = `background-color:${legendColor3};`;
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
              <div class='charts-tooltip-inner-heard'> ${
                params[0].axisValue
              }</div>

              <div class='charts-tooltip-inner-content'>
                <div style='${lengedclass1}' class='${lengedbar}'></div>
                <div class='charts-tooltip-inner-content-name'>  ${legendtxt1}</div>
                <div class='charts-tooltip-inner-content-sum'> ${isEmpty(
                  out
                )} </div>
                <div class='charts-tooltip-inner-content-unit'>${unit}</div>
              </div>

              <div class='charts-tooltip-inner-content'>
                <div style='${lengedclass2}' class='${lengedbar}'></div>
                <div class='charts-tooltip-inner-content-name'>  ${legendtxt2}</div>
                <div class='charts-tooltip-inner-content-sum'> ${isEmpty(
                  inner
                )} </div>
                <div class='charts-tooltip-inner-content-unit'>${unit}</div>
              </div>

              <div class='charts-tooltip-inner-content'>
                <div style='${lengedclass3}' class='${lengedline}'></div>
                <div class='charts-tooltip-inner-content-name'>  ${legendtxt3}</div>
                <div class='charts-tooltip-inner-content-sum'> ${isEmpty(
                  surplus.toFixed(2)
                )} </div>
                <div class='charts-tooltip-inner-content-unit'>${unit}</div>
              </div>

            </div>
            `;
          },
        },
        dataset: {
          source: this.chartData,
        },
        xAxis: {
          type: "category",
          axisTick: {
            show: false,
          },
          show: false,
        },
        yAxis: [
          {
            min: -2000,
            max: 2000,
            show: true,
            name: "进口",
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
              show: true,
              margin: 5, //y轴坐标轴数值与图表的间距
              textStyle: {
                align: "right", //y轴坐标轴数值左对齐
                color: "#CFD4E8",
              },
            },
            splitLine: {
              show: false,
              interval: 0,
              lineStyle: {
                color: "rgb(128 128 128 / 10%)",
              },
            },
          },
          {
            min: -2000,
            max: 2000,
            name: "出口",
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
              margin: 10, //y轴坐标轴数值与图表的间距
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
            min: -90,
            max: 90,
            show: false,
            name: "顺差",
            nameTextStyle: {
              color: "rgba(0,0,0,0)",
            },
            type: "value",
            axisLine: {
              show: false,

              lineStyle: {
                color: "rgb(128 128 128 / 10%)",
                height: 85,
              },
            },
            axisLabel: {
              show: false,
              margin: 10, //y轴坐标轴数值与图表的间距
              textStyle: {
                align: "left", //y轴坐标轴数值左对齐
                color: "#CFD4E8",
              },
            },
            splitLine: {
              show: false,
              interval: 0,
              lineStyle: {
                color: "rgb(128 128 128 / 10%)",
              },
            },
          },
        ],

        legend: [
          {
            top: 8,
            right: 115,
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

            itemWidth: 8,
            itemHeight: 8,
            data: [{ name: "出口", icon: "rect" }],
          },
          {
            top: 8,
            right: 60,
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

            itemWidth: 8,
            itemHeight: 8,
            data: [{ name: "进口", icon: "rect" }],
          },
          {
            top: 8,
            right: 5,
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
            itemWidth: 12,
            itemHeight: 4,
            data: [{ name: "顺差", icon: "rect" }],
          },
        ],

        grid: {
          left: -5,
          right: 10,
          bottom: "0%",
          top: "25%",
          containLabel: true,
        },
        title: [
          {
            text: "单位：亿元",
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
        series: [
          {
            name: "出口",
            color: "#1FFAFD",
            encode: {
              x: "year",
              y: "exit",
            },
            type: "bar",
            barWidth: 5,
            stack: true,
          },
          {
            name: "进口",
            color: "#0080FF",
            barWidth: 5,
            encode: {
              x: "year",
              y: "entrance",
            },
            type: "bar",
            stack: true,
          },
          {
            name: "顺差",
            color: "#FF9409",
            symbolSize: 0,
            encode: {
              x: "year",
              y: "diff",
            },
            Symbol: "none",
            type: "line",
            yAxisIndex: 1,
          },
          {
            type: "custom",
            name: "",
            encode: {
              x: "year",
              y: "exit",
            },
            renderItem: (params, api) => {
              var highPoint = api.coord([params.dataIndex, api.value(0)]);

              let r = api.getWidth() / (this.chartData.length - 1) / 2;
              this.$set(this.xArray, params.dataIndex, {
                x: highPoint[0],
                value: api.value(0),
                r,
                show: api.value(4),
                data: source[params.dataIndex + 1],
              });
              return {
                type: "group",
                children: [],
              };
            },
          },
        ],
      };
    },
  },
};
</script>
<style lang="less" scope>
@import "../../style/var.less";
.trade-bar-chart {
  position: relative;
  height: 270px;
}
.radio {
  &-item {
    position: absolute;
    background-color: #45a8d1;
    transform: translate(-50%, -50%);
    top: 50%;
    cursor: pointer;
    border-radius: 50%;
    &.active {
      width: 0;
      height: 0;
      background: #152441;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-bottom: 10px solid #45a8d1;
      border-radius: 0%;
    }
  }
  &-group {
    position: absolute;
    left: 0;
    bottom: -15px;
    right: 0;
    background-color: #152441;
    height: 20px;
    display: flex;
    align-items: center;
  }
}
</style>