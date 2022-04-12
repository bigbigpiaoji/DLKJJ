<template>
  <div class="power-consumption">
    <v-chart :autoresize="true" :option="option"></v-chart>
  </div>
</template>

<script>
import isEmpty from "@/utils/isEmpty";
export default {
  name: "power-consumption",
  props: {
    xAxisData: {
      type: Array,
      default: () => [],
    },
    firstData: {
      type: Array,
      default: () => [],
    },
    secondData: {
      type: Array,
      default: () => [],
    },
    thirdData: {
      type: Array,
      default: () => [],
    },
    dateUnit: {
      type: String,
      default: () => "",
    },
  },
  data() {
    return {
      option: {},
      mark: "month",
    };
  },
  mounted() {
    this.init();
  },
  watch: {
    dateUnit() {
      this.mark = this.dateUnit;
      this.init();
    },
  },
  methods: {
    init() {
      var dateText;
      var dataText;
      if (this.mark === "month") {
        dateText = "month";
      } else {
        dateText = "year";
      }
      this.option = {
        legend: {
          data: [
            { name: "一产", icon: "rect" },
            { name: "二产", icon: "rect" },
            { name: "三产", icon: "rect" },
          ],
          itemWidth: 6,
          itemHeight: 6,
          padding: [-30, -27, 0, 0], //170
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
          right: 35,
          itemGap: 22,
          top: 35,
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
            let unit = "亿千瓦时";
            if (dateText === "month") {
              dataText = "今年" + params[0].axisValue + "月";
            } else {
              dataText = params[0].axisValue + "年";
            }
            return [
              "<div style='overflow:hidden;width:100%'>",
              "<img style='position:absolute;top:0';left:0 src=" +
                `${CONFIG.imgUrl}` +
                "/list/zsjzs.png />",
              "<div style='width:100%;padding:10px 0 0 10px;color:#fff'>" +
                dataText +
                "</div>",
              "<div style='width:100%;height:100%;padding:5px 10px 10px'>",
              "<div style='display:flex;align-items:center;color:#fff'>",
              "<div style='background-color:" +
                params[0].color +
                ";width:5px;height:5px;color=#fff' class='l-mr-8'></div>",
              "<div style='margin-left:0rem'>" +
                params[0].seriesName +
                "用电量占：" +
                "</div>",
              "<div style='margin-left:0rem'>" +
                isEmpty(params[0].value) +
                "</div>",
              "<div class='l-ml-8'> " + unit + "</div>",
              "</div>",
              "<div style='display:flex;align-items:center;color:#fff'>",
              "<div style='background-color:" +
                params[1].color +
                ";width:5px;height:5px;color=#fff' class='l-mr-8'></div>",
              "<div style='margin-left:0rem'>" +
                params[1].seriesName +
                "用电量占：" +
                "</div>",
              "<div style='margin-left:0rem'>" +
                isEmpty(params[1].value) +
                "</div>",
              "<div class='l-ml-8'> " + unit + "</div>",
              "</div>",
              "<div style='display:flex;align-items:center;color:#fff'>",
              "<div style='background-color:" +
                params[2].color +
                ";width:5px;height:5px;color=#fff' class='l-mr-8'></div>",
              "<div style='margin-left:0rem'>" +
                params[2].seriesName +
                "用电量占：" +
                "</div>",
              "<div style='margin-left:0rem'>" +
                isEmpty(params[2].value) +
                "</div>",
              "<div class='l-ml-8'> " + unit + "</div>",
              "</div>",
              "</div>",
              "</div>",
            ].join("\n");
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false, //横坐标初始位置定位
          data: this.xAxisData,
          axisTick: {
            show: false,
          },
          axisLabel: {
            interval: 0,
            inside: false,
            textStyle: {
              color: "#CFD4E8",
              fontFamily: "Microsoft YaHei",
              fontWeight: 400,
              opacity: 0.8,
            },
            fontSize: 12,
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#FFFFFF",
              opacity: 0.06,
            },
          },
          splitLine: {
            show: false,
            interval: 0,
            lineStyle: {
              color: "#FFFFFF",
              opacity: 0.06,
            },
          },
        },
        yAxis: [
          {
            type: "value",
            axisLabel: {
              textStyle: {
                color: "#CFD4E8",
                fontFamily: "Microsoft YaHei",
                fontWeight: 400,
                opacity: 0.8,
              },
              fontSize: 12,
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#FFFFFF",
                opacity: 0.06,
              },
            },
            splitLine: {
              show: true,
              interval: 0,
              lineStyle: {
                color: "#FFFFFF",
                opacity: 0.06,
              },
            },
          },
          {
            axisLine: {
              show: true,
              lineStyle: {
                color: "#FFFFFF",
                opacity: 0.06,
              },
            },
            splitLine: {
              show: true,
              interval: 0,
              lineStyle: {
                color: "#FFFFFF",
                opacity: 0.06,
              },
            },
          },
        ],
        series: [
          {
            name: "一产",
            data: this.firstData,
            type: "line",
            color: "#69DAFF",
            smooth: true,
            symbol: "none",
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
          },
          {
            name: "二产",
            data: this.secondData,
            type: "line",
            color: "#B6E888",
            smooth: true,
            symbol: "none",
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

                    color: "rgb(190 230 146 / 40%)", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "rgb(190 230 146 / 0%)", // 100% 处的颜色
                  },
                ],
                globalCoord: false, // 缺省为 false
              },
            },
          },
          {
            name: "三产",
            data: this.thirdData,
            type: "line",
            color: "#D49304",
            smooth: true,
            symbol: "none",
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

                    color: "rgb(217 157 4 / 40%)", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "rgb(217 157 4 / 0%)", // 100% 处的颜色
                  },
                ],
                globalCoord: false, // 缺省为 false
              },
            },
          },
        ],
        grid: {
          borderColor: "rgb(0 0 0 / 10%)",
          left: 0,
          top: 40,
          right: 10,
          bottom: 5,
          containLabel: true,
        },
      };
    },
  },
};
</script>

<style>
.power-consumption {
  height: 200px;
  width: 510px;
}
</style>