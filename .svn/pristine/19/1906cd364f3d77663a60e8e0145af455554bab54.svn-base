<template>
  <div class="electricity-trend-chart">
    <v-chart :autoresize="true" :option="option" ref="chart"> </v-chart>
  </div>
</template>
<script>
export default {
  name: "electricity-trend-chart",
  props: {
    Xdata: {
      type: Array,
      default: () => [],
    },
    Ydata: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      option: {},
      month: "1",
    };
  },
  mounted() {
    this.init();
  },
  watch: {
    Xdata() {
      this.option.xAxis.data = this.Xdata;
    },
    Ydata() {
      this.option.series[
        ({
          name: "第二产业",
          data: this.Ydata.industryData,
        },
        {
          name: "工业",
          data: this.Ydata.employmentData,
        },
        {
          name: "制造业",
          data: this.Ydata.manufactureData,
        })
      ];
    },
  },
  methods: {
    init() {
      this.initOption();
      this.initEvent();
    },
    initEvent() {
      this.$refs.chart.chart.on("click", (e) => {
        this.$emit("monthChange", e);
      });
    },
    initOption() {
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
            let legendColor2 = params[1].color;
            let legendColor3 = params[2].color;

            let legendUnit = "万千瓦时";
            let unit = "月";
            if (params[0].axisValue.length > 3) {
              unit = "年";
            } else {
              unit = "月";
            }
            let lengedbar = `charts-tooltip-inner-content-bar`;
            let lengedclass1 = `background-color:${legendColor1};`;
            let lengedclass2 = `background-color:${legendColor2};`;
            let lengedclass3 = `background-color:${legendColor3};`;
            return `
            <div class='charts-tooltip'>
              <img class='charts-tooltip-img' src='${
                CONFIG.imgUrl
              }/list/zsjzs.png' />
              <div class='charts-tooltip-inner'>
              <div class='charts-tooltip-inner-heard'> ${
                params[0].axisValue + unit
              }</div>

              <div class='charts-tooltip-inner-content'>
                <div style='${lengedclass1}' class='${lengedbar}'></div>
                <div class='charts-tooltip-inner-content-name'>  ${
                  params[0].seriesName
                } </div>
                <div class='charts-tooltip-inner-content-sum'> ${
                  params[0].value
                } </div>
                <div class='charts-tooltip-inner-content-unit'>${legendUnit}</div>
              </div>

               <div class='charts-tooltip-inner-content'>
                <div style='${lengedclass2}' class='${lengedbar}'></div>
                <div class='charts-tooltip-inner-content-name'>  ${
                  params[1].seriesName
                } </div>
                <div class='charts-tooltip-inner-content-sum'> ${
                  params[1].value
                } </div>
                <div class='charts-tooltip-inner-content-unit'>${legendUnit}</div>
              </div>
               <div class='charts-tooltip-inner-content'>
                <div style='${lengedclass3}' class='${lengedbar}'></div>
                <div class='charts-tooltip-inner-content-name'>  ${
                  params[2].seriesName
                } </div>
                <div class='charts-tooltip-inner-content-sum'> ${
                  params[2].value
                } </div>
                <div class='charts-tooltip-inner-content-unit'>${legendUnit}</div>
              </div>


            </div>
            `;
          },
        },
        xAxis: {
          axisPointer: {
            type: "shadow",
            show: true,
            shadowStyle: {
              color: "rgba(36, 61, 105, 0.4)",
            },
            crossStyle: {
              color: "#000",
            },
            label: {
              color: "#fff",
              backgroundColor: "#333",
            },
          },
          type: "category",
          data: this.Xdata,
          axisTick: { show: false },
          axisLine: {
            show: true,
            lineStyle: {
              //   height: 100,
              color: "#CFD4E8",
              opacity: 0.06,
            },
          },
        },
        title: {
          text: "单位：万千瓦时",
          left: 32,
          top: 6,
          textStyle: {
            width: 70,
            height: 11,
            fontSize: 12,
            fontFamily: "Microsoft YaHei",
            fontWeight: 400,
            color: "#D3DAF2",
            opacity: 0.8,

            lineHeight: 20,
          },
        },
        yAxis: [
          {
            type: "value",

            axisLine: {
              show: true,
              lineStyle: {
                color: "#CFD4E8",
                opacity: 0.06,
              },
            },
            barWidth: 16,
            splitLine: {
              show: true,
              lineStyle: {
                color: "#CFD4E8",
                opacity: 0.06,
              },
            },
          },
          {
            axisLine: {
              show: true,
              lineStyle: {
                color: "#CFD4E8",
                opacity: 0.06,
              },
            },
          },
        ],
        legend: {
          data: [
            { name: "第二产业", icon: "rect" },
            { name: "工业", icon: "rect" },
            { name: "制造业", icon: "rect" },
          ],
          right: 30,
          top: 0,
          itemWidth: 6,
          itemHeight: 6,
          itemGap: 22,
          formatter(params) {
            return `{a| ${params} }`;
          },
          textStyle: {
            fontFamily: "Microsoft YaHei",
            fontWeight: 400,
            color: "#D3DAF2",
            lineHeight: 30,
            opacity: 0.8,
            rich: {
              a: {
                verticalAlign: "middle",
                padding: [2, -5, 0, 0],
                fontSize: 11,
              },
            },
          },
          // textStyle: {
          //   fontFamily: "Microsoft YaHei",
          //   fontWeight: 400,
          //   color: "#D3DAF2",
          //   fontSize: 11,
          //   opacity: 0.8,
          // },
        },
        grid: {
          left: "2%",
          right: "2%",
          bottom: "4%",
          top: "20%",
          containLabel: true,
        },
        series: [
          {
            name: "第二产业",

            data: this.Ydata.industryData,
            type: "bar",
            color: "#4FB0D0",
            barWidth: 16,
          },
          {
            name: "工业",

            data: this.Ydata.employmentData,
            type: "bar",
            color: "#BEEF86",
            barWidth: 16,
          },
          {
            name: "制造业",

            data: this.Ydata.manufactureData,
            type: "bar",
            color: "#FF9409",
            barWidth: 16,
          },
        ],
      };
    },
  },
};
</script>
<style lang="less">
.electricity-trend-chart {
  height: 250px;
  width: 100%;
}
</style>