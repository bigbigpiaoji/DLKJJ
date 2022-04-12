<template>
  <div class="area-power-growth-rate">
    <v-chart :autoresize="true" :option="option"></v-chart>
  </div>
</template>

<script>
export default {
  name: "area-power-growth-rate",
  props: {
    legendNow: {
      type: String,
      default: () => "今年12月",
    },
    legendLast: {
      type: String,
      default: () => "去年同期",
    },
    nowData: {
      type: Array,
      default: () => [],
    },
    lastData: {
      type: Array,
      default: () => [],
    },
    xData: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      option: {},
    };
  },
  mounted() {
    this.init();
  },
  watch: {
    legendNow() {
      this.option.legend.data = [
        { name: this.legendNow, icon: "rect" },
        { name: this.legendLast, icon: "rect" },
      ];
      this.option.series = [
        { name: this.legendNow, data: this.nowData },
        { name: this.legendLast, data: this.lastData },
      ];
    },
    xData() {
      this.option.xAxis.data = this.xData;
    },
  },
  methods: {
    init() {
      this.option = {
        legend: {
          data: [
            { name: this.legendNow, icon: "rect" },
            { name: this.legendLast, icon: "rect" },
          ],
          itemWidth: 6,
          itemHeight: 6,
          padding: [-15, -25, 0, 0], //170
          textStyle: {
            width: 43,
            height: 12,
            fontSize: 11,
            fontFamily: "Microsoft YaHei",
            fontWeight: 400,
            color: "#D3DAF2",
            lineHeight: 60,
          },
          icon: "roundRect",
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
            return [
              "<div style='overflow:hidden;width:100%'>",
              "<img style='position:absolute;top:0';left:0 src=" +
                `${CONFIG.imgUrl}` +
                "/list/zsjzs.png />",
              "<div style='width:100%;padding:10px 0 0 10px;color:#fff'>" +
                params[0].axisValue +
                "区" +
                "</div>",
              "<div style='width:100%;height:100%;padding:5px 10px 10px'>",
              "<div style='display:flex;align-items:center;color:#fff'>",
              "<div style='background-color:" +
                params[0].color +
                ";width:5px;height:5px;color=#fff' class='l-mr-8'></div>",
              "<div style='margin-left:0rem'>" +
                params[0].seriesName +
                "用电增长率为：" +
                "</div>",
              "<div style='margin-left:0rem'>" + params[0].value + "</div>",
              "<div class='l-ml-8'> " + "%" + "</div>",
              "</div>",
              "<div style='display:flex;align-items:center;color:#fff'>",
              "<div style='background-color:" +
                params[1].color +
                ";width:5px;height:5px;color=#fff' class='l-mr-8'></div>",
              "<div style='margin-left:0rem'>" +
                params[1].seriesName +
                "用电增长率为：" +
                "</div>",
              "<div style='margin-left:0rem'>" + params[1].value + "</div>",
              "<div class='l-ml-8'> " + "%" + "</div>",
              "</div>",
              "</div>",
              "</div>",
            ].join("\n");
          },
        },
        xAxis: {
          type: "category",
          // data: [
          //   "龙岗",
          //   "盐田",
          //   "坪山",
          //   "大鹏",
          //   "深汕",
          //   "宝安",
          //   "光明",
          //   "南山",
          //   "龙华",
          //   "福田",
          //   "罗湖",
          // ],
          data: this.xData,
          axisTick: {
            show: false,
          },
          // boundaryGap: ["1%", "1%"],
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
            name: "单位：%",
            nameTextStyle: {
              padding: [0, 0, 0, 2],
              color: "#ffffff",
              fontSize: 12,
              fontFamily: "Microsoft YaHei",
              fontWeight: 400,

              weight: 47,
              //   lineHeight: 60,
            },
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
                color: "rgb(128 128 128 / 30%)",
                // height: 85,
              },
            },
          },
        ],
        series: [
          {
            name: this.legendNow,
            data: this.nowData,
            type: "bar",
            color: "#1FFAFD",
          },
          {
            name: this.legendLast,
            data: this.lastData,
            type: "bar",
            color: "#8598AB",
          },
        ],
        grid: {
          borderColor: "rgb(0 0 0 / 10%)",
          left: 0,
          top: 50,
          right: 12,
          bottom: 16,

          containLabel: true,
        },
      };
    },
  },
};
</script>

<style>
.area-power-growth-rate {
  height: 100%;
  width: 100%;
  /* margin-right: 72px;
     margin-bottom: 29px;
  margin-top: 20px; */
}
</style>