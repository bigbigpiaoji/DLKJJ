<template>
  <div  class="v-chart">
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
  name: "timeLineChart",
  props: {
    height: {
      type: String,
      default: "120px",
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
  computed: {
    getStyle() {
      return {
        ecwidth: this.$pxToRem(355) + "rem",
        height: this.$pxToRem(120) + "rem",
        echeight: this.$pxToRem(80) + "rem",
      };
    },
  },
  methods: {
    init() {
      this.option = {
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
            let legendColor = params[0].color;
            let legendUnit = "万千瓦";
            let legendtxt = "年均日负荷趋势";
            console.log(params, 351321654654);
            return [
              "<div style='overflow:hidden;width:100%'>",
              "<img style='position:absolute;top:0';left:0 src=" +
                `${CONFIG.imgUrl}` +
                "/list/zsjzs.png />",
              "<div style='width:100%;height:100%;padding:10px'>",
              "<div style='margin-left:0rem;color:#fff'>" +
                params[0].axisValue +
                "时</div>",
              "<div style='display:flex;align-items:center;color:#fff'>",
              "<div style='background-color:" +
                legendColor +
                ";width:5px;height:5px;color=#fff' class='l-mr-8'></div>",
              "<div style='margin-left:0rem'>" + legendtxt + "</div>",
              "<div style='margin-left:0.3rem'>" + params[0].value + "</div>",
              "<div class='l-ml-8'> " + legendUnit + "</div>",
              "</div>",
              "</div>",
              "</div>",
            ].join("\n");
          },
        },
        title: [
          {
            text: "年均日负荷趋势",
            left: -1,
            textStyle: {
              width: 80,
              height: 12,
              fontSize: 11,
              fontFamily: "Microsoft YaHei",
              color: "#FFFFFF",
              lineHeight: 20,
            },
          },
          {
            text: "单位：万千瓦",
            right: 18,
            textStyle: {
              width: 60,
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
          left: "-4%",
          right: "6%",
          bottom: "0%",
          top:"28%",
          containLabel: true,

        },
        xAxis: {
          
          axisLabel: {
            boundaryGap: ["1%", "1%"],
            interval: 0,
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
          name: "时",
          nameTextStyle: {
            verticalAlign: "bottom",
            padding: [0, 0, -20, -5],
          },

          type: "category",
          boundaryGap: false,
          data: [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20, 21, 22, 23, 24,
          ],
        },
        yAxis: [
          {
            type: "value",
            axisLabel: {
              margin: 25, //y轴坐标轴数值与图表的间距
              textStyle: {
                align: "left", //y轴坐标轴数值左对齐
              },
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#CFD4E8",
                height: 52,
                opacity: 0.18,
              },
            },
            splitLine: {
              show: true,
              interval: 0,
              lineStyle: {
                color: "rgb(128 128 128 / 30%)",
              },
            },
          },
          {
            axisLine: {
              show: true,
              lineStyle: {
                color: "#CFD4E8",
                height: 52,
                opacity: 0.18,
              },
            },
          },
        ],
        series: [
          {
            color: "#4FB0D0", //线条颜色
            type: "line",
            symbol: "none",
            stack: "Total",
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgb(79 176 208 / 40%)", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "rgb(79 176 208 / 0%)", // 100% 处的颜色
                  },
                ],
                globalCoord: false, // 缺省为 false
              },
            },
            data: [
              1.09, 1.02, 0.97, 0.94, 0.91, 0.9, 0.94, 1, 1.22, 1.34, 1.39,
              1.42, 1.34, 1.36, 1.36, 1.38, 1.42, 1.41, 1.39, 1.38, 1.35, 1.32,
              1.22, 1.19,
            ],
          },
        ],
      };
    },
  },
};
</script>
<style lang="less" scoped>
@import "../../style/var.less";
.v-chart{
  height: 120px;
}
</style>
