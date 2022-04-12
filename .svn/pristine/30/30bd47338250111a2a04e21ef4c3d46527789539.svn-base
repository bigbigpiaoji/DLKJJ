<template>
  <div class="v-chart timegene-clearcharts">
    <v-chart
      ref="line"
      class="l-full"
      :autoresize="true"
      :option="option"
    ></v-chart>
  </div>
</template>
<script>
export default {
  name: "timegene-clearcharts",
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
            let legendColor1 = params[1].color;
            let legendColor2 = params[0].color;
            let unit1 = "℃";
            let unit2 = "万千瓦时";
            let title1 = "平均温度";
            let title2 = "用电量";
            return `
            <div class='charts-tooltip'>
              <img class='charts-tooltip-img' src='${CONFIG.imgUrl}/list/zsjzs.png' />
              <div class='charts-tooltip-inner'>
              <div class='charts-tooltip-inner-heard'> ${params[0].name}</div>

              <div class='charts-tooltip-inner-content'>
                <div style='background:${legendColor1}' class='charts-tooltip-inner-content-lenged'></div>
                <div class='charts-tooltip-inner-content-name'>${title1}</div>
                <div class='charts-tooltip-inner-content-sum'> ${params[1].value} </div>
                <div class='charts-tooltip-inner-content-unit'>${unit1}</div>
              </div>

              <div class='charts-tooltip-inner-content'>
                <div style='background:${legendColor2}' class='charts-tooltip-inner-content-lenged'></div>
                <div class='charts-tooltip-inner-content-name'>${title2}</div>
                <div class='charts-tooltip-inner-content-sum'> ${params[0].value} </div>
                <div class='charts-tooltip-inner-content-unit'>${unit2}</div>
              </div>
              
            </div>

            `;
          },
        },
        grid: {
          left: "0%",
          right: "0",
          bottom: "0",
          top: "15%",
          containLabel: true,
        },
        xAxis: {
          show: false,
          type: "category",
          data: [
            "2021-01",
            "2021-02",
            "2021-03",
            "2021-04",
            "2021-05",
            "2021-06",
            "2021-07",
            "2021-08",
            "2021-09",
            "2021-10",
            "2021-11",
            "2021-12",
          ],
        },
        yAxis: [
          {
            min:40,
            max: 120,
            name: "monuth",
            type: "value",
            axisLabel: {
              show: false,
            },

            splitLine: {
              show: false,
            },
          },
          {
            min: -5,
            max: 40,
            name: "temperature",
            type: "value",
            axisLabel: {
              show: false,
            },

            splitLine: {
              show: false,
            },
          },
        ],
        series: [
          {
            yAxisIndex:0,
            name: "monuth",
            symbol: "none", //拐点样式
            color: "rgba(43, 148, 255, 1)",
            symbolSize: 0, //拐点大小
            itemStyle: {
              normal: {
                lineStyle: {
                  width: 2, //折线宽度
                  color: {
                    type: "linear",
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [
                      {
                        offset: 0,
                        color: "rgba(43, 148, 255, 0)", // 0% 处的颜色
                      },
                      {
                        offset: 0.5,
                        color: "rgba(43, 148, 255, 1)", // 50% 处的颜色
                      },
                      {
                        offset: 1,
                        color: "rgba(43, 148, 255, 0)", // 100% 处的颜色
                      },
                    ],
                    globalCoord: false, // 缺省为 false
                  }, //折线颜色
                },
              },
            },
            data: [
              64.50732, 38.765976, 63.59435, 65.17438, 87.1428, 86.21111,
              96.60464, 93.97708, 84.29814, 71.353, 68.41239, 66.24773,
            ],

            type: "line",
          },
          {
            yAxisIndex:1,
            name: "temperature",
            symbol: "none", //拐点样式
            symbolSize: 0, //拐点大小
            color: "rgba(255, 190, 64, 1)",
            itemStyle: {
              normal: {
                lineStyle: {
                  width: 2, //折线宽度
                  color: {
                    type: "linear",
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,

                    colorStops: [
                      {
                        offset: 0,
                        color: "rgba(255, 190, 64, 0)", // 0% 处的颜色
                      },
                      {
                        offset: 0.5,
                        color: "rgba(255, 190, 64, 1)", // 50% 处的颜色
                      },
                      {
                        offset: 1,
                        color: "rgba(255, 190, 64, 0)", // 100% 处的颜色
                      },
                    ],
                    globalCoord: false, // 缺省为 false
                  }, //折线颜色
                },
              },
            },

            data: [1, 5, 10, 20, 26, 35, 38, 35, 30, 20, 10, 7],
            type: "line",
          },
        ],
      };
    },
  },
};
</script>
<style lang="less" scoped>
@import "../../style/var.less";
.timegene-clearcharts {
  width: 100%;
  height: 150px;
  padding: 10px 49px 20px 49px;
  background: url("@{imgUrl}/timegenetitle/timegene-ecbaseimg.png") center
    center no-repeat;
  background-size: 76.5% 100%;
  margin: 10px 0 10px 0;
}
</style>