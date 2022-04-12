<template>
  <div class="v-chart timegene-clearchartsthree">
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
  name: "timegene-clearchartsthree",
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
            let title ="用电量"
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
          left: "5%",
          right: "5%",
          bottom: "0",
          top: "15%",
          containLabel: true,
        },
        xAxis: {
          show: false,
          type: "category",
          data: ["元旦", "清明", "五一", "端午","七夕","中元","中秋", "国庆", "春节","元旦", "清明", "五一", "端午","七夕","中元","中秋", "国庆", "春节"],
        },
        yAxis: {
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
            // smooth: true,
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
            data: [123,20,60, 80, 41, 120, 140,120,75,82,95,82,97,75,80,58,64,55],

            //水滴打点
            markPoint: {
              data: [
                { type: "max", name: "Max" },
                { type: "min", name: "Min" },
              ],
              //水滴大小
              symbolSize: 15,
              //水滴内部标签
              label: {
                show: false,
              },
              itemStyle: {
                color: "RGBA(43, 148, 255, 1)",
              },
            },
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
.timegene-clearchartsthree {
  width: 100%;
  height: 150px;
  padding: 10px 30px 20px 30px;
  background: url("@{imgUrl}/timegenetitle/timegene-ecbaseimg3.png") center
    center no-repeat;
  background-size: 76.5% 100%;
  margin: 10px 0 0 0;
}
</style>