<template>
  <div :style="getStyle" class="v-chart">
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
  name: "baseLineChart",
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
        
        height: this.$pxToRem(190) + 'rem',  
        
      }
      
    },
  },
  methods: {
    init() {
      this.initOption();
    },
    initOption() {
      this.option = {
        tooltip: {
          axisPointer: {
            lineStyle: {
              opacity: 0,
            },
          },
          confine: true,
          trigger: "axis",
          borderRadius: 0,
          padding: 0,
          borderColor: "#707070",
          borderWidth: 1,
          backgroundColor: "#000c28d9",
          formatter: function (params) {
            let legendColor = params[0].color;
            return [
              "<div style='overflow:hidden;width:100%'>",
              "<img style='position:absolute;top:0';left:0 src=" +
                `${CONFIG.imgUrl}` +
                "/list/zsjzs.png />",
              "<div style='width:100%;height:100%;padding:10px'>",
              "<div style='color:#fff'>" + params[0].name + "年" + "</div>",
              "<div style='display:flex;align-items:center;color:#fff'>",

              "<div style='background-color:" +
                legendColor +
                ";width:5px;height:5px;' class='l-mr-8'></div>",
              "<div  class='l-mr-10 l-ml-8'>每度电支撑GDP</div>",
              "<div style='color:#fff'>" + params[0].value + "</div>",
              "<div class='l-ml-8'>元/度</div>",
              "</div>",
              "</div>",
              "</div>",
            ].join("\n");
          },
        },
        grid: {
          left: "4%",
          right: "6%",
          bottom: "3%",
          containLabel: true,
          //图标整体宽高

        },
        xAxis: {
          axisLine: {
            show: false,
            lineStyle: {
              color: "#CFD4E8",
            },
            // color:'#CFD4E8'
          },
          axisTick: {
            show: false,
          },
          name: "",
          nameTextStyle: {
            verticalAlign: "bottom",
            padding: [0, 0, -20, -15],
          },
          type: "category",
          boundaryGap: false,
          data: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
        },
        yAxis: {
          type: "value",
          name: "单位：元/度",
          nameTextStyle: {
            padding: [15, 0, 10, 5], //图例宽度调整
            width: 39,
            height: 11,
            fontSize: 10,
            fontFamily: "Microsoft YaHei",
            fontWeight: 400,
            color: "#D3DAF2",
          },
          min: 0,
          max: 40,
          interval: 8,
          axisLine: {
            show: true,
            lineStyle: {
              color: "#CFD4E8",
              opacity: 0.06,
              height: 52,
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

        legend: {
          show: true,
          name: "每度电支撑GDP", //与series.name相同，否则失效
          icon: "rect",
          itemWidth: 11,
          itemHeight: 2,
          color: "#4FB0D0",
          data: ["每度电支撑GDP"],
          textStyle: {
            color: "#D3DAF2",
          },
          x: "right",
          padding: [25, 15, 0, 0],
        },

        series: [
          {
            itemStyle: {
              normal: {
                color: "#4FB0D0", //折点颜色
                lineStyle: {
                  color: "#4FB0D0", //折线颜色
                },
              },
            },
            name: "每度电支撑GDP", //与legend.name相同
            type: "line",
            symbol: "none", //取消折点
            stack: "Total",
            areaStyle: {
              // "rgb(79 176 208 / 40%)"
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
              17.13, 18.69, 20.88, 21.3, 22.61, 24.31, 26.32, 27.55, 27.37,
              28.14,
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

}
</style>
