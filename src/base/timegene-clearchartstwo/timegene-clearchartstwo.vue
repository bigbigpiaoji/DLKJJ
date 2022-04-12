<template>
  <div class="v-chart timegene-clearchartstwo">
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
  name: "timegene-clearchartstwo",
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
            let legendColor1 = params[0].color;
            let unit = "千瓦时";
            let title = "用电量";
            return `
            <div class='charts-tooltip'>
              <img class='charts-tooltip-img' src='${CONFIG.imgUrl}/list/zsjzs.png' />
              <div class='charts-tooltip-inner'>
              <div class='charts-tooltip-inner-heard'> ${params[0].name}</div>

              <div class='charts-tooltip-inner-content'>
                <div style='background:${legendColor1}' class='charts-tooltip-inner-content-lenged'></div>
                <div class='charts-tooltip-inner-content-name'>${title}</div>
                <div class='charts-tooltip-inner-content-sum'> ${params[0].value} </div>
                <div class='charts-tooltip-inner-content-unit'>${unit}</div>
              </div>            
            </div>

            `;
          },
        },
        grid: {
          left: "8%",
          right: "8%",
          bottom: "0",
          top: "30%",
          containLabel: true,
        },
        xAxis: {
          show: false,
          type: "category",
          data: [
            "2021-11-8 周一",
            "2021-11-9 周二",
            "2021-11-10 周三",
            "2021-11-11 周四",
            "2021-11-12 周五",
            "2021-11-13 周六",
            "2021-11-14 周日",
            "2021-11-15 周一",
            "2021-11-16 周二",
            "2021-11-17 周三",
            "2021-11-18 周四",
            "2021-11-19 周五",
            "2021-11-20 周六",
            "2021-11-21 周日",
            "2021-11-22 周一",
            "2021-11-23 周二",
            "2021-11-24 周三",
            "2021-11-25 周四",
            "2021-11-26 周五",
            "2021-11-27 周六",
            "2021-11-28 周日",
            "2021-11-29 周一",
            "2021-11-30 周二",
            "2021-12-1 周三",
            "2021-12-2 周四",
            "2021-12-3 周五",
            "2021-12-4 周六",
            "2021-12-5 周日",
            "2021-12-6 周一",
            "2021-12-7 周二",
            "2021-12-8 周三",
            "2021-12-9 周四",
            "2021-12-10 周五",
            "2021-12-11 周六",
            "2021-12-12 周日",
            "2021-12-13 周一",
            "2021-12-14 周二",
            "2021-12-15 周三",
            "2021-12-16 周四",
            "2021-12-19 周五",
            "2021-12-17 周六",
            "2021-12-18 周日",
            "2021-12-19 周一",
            "2021-12-20 周二",
            "2021-12-21 周三",
            "2021-12-22 周四",
            "2021-12-23 周五",
            "2021-12-24 周六",
            "2021-12-25 周日",
            "2021-12-26 周一",
            "2021-12-27 周二",
            "2021-12-28 周三",
            "2021-12-29 周四",
            "2021-12-30 周五",
            "2021-12-31 周六",
          ],
        },
        yAxis: {
          min: 2,
          max: 3,
          type: "value",
          axisLabel: {
            show: false,
          },

          splitLine: {
            show: false,
          },
        },
        series: [
          {
            name: "a",
            symbol: "none", //拐点样式
            symbolSize: 0, //拐点大小
            smooth: true,
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
                        color: "RGBA(43, 148, 255, 0)", // 0% 处的颜色
                      },
                      {
                        offset: 0.5,
                        color: "RGBA(43, 148, 255, 1)", // 50% 处的颜色
                      },
                      {
                        offset: 1,
                        color: "RGBA(43, 148, 255, 0)", // 100% 处的颜色
                      },
                    ],
                    globalCoord: false, // 缺省为 false
                  }, //折线颜色
                },
              },
            },
            data: [
              2.57314, 2.5619, 2.56699, 2.58067, 2.60873, 2.47932, 2.20088,
              2.50976, 2.63364, 2.66101, 2.64756, 2.67677, 2.60757, 2.35064,
              2.53782, 2.56023, 2.55803, 2.57571, 2.57985, 2.46206, 2.18011,
              2.5032, 2.56614, 2.51771, 2.54659, 2.5585, 2.45303, 2.19708,
              2.47887, 2.57158, 2.59204, 2.6054, 2.60233, 2.50963, 2.24357,
              2.49259, 2.58229, 2.61538, 2.67294, 2.62915, 2.47809, 2.23261,
              2.50001, 2.59249, 2.59172, 2.60172, 2.60041, 2.4996, 2.3124,
              2.6024, 2.639023, 2.59308, 2.53666, 2.36621,
            ],
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
.timegene-clearchartstwo {
  width: 100%;
  height: 150px;
  padding: 10px 30px 20px 30px;
  background: url("@{imgUrl}/timegenetitle/timegene-ecbaseimg2.png") center
    center no-repeat;
  background-size: 76.5% 100%;
  margin: 10px 0 0 0;
}
</style>