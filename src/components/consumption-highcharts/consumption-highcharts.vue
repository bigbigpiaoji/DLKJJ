<template>
  <div class="electricity-highcharts">
    <div
      class="electricity-highcharts-consecutive"
      style="top: 77px; left: 72px"
    >
      {{ content }}
    </div>
    <div class="electricity-highcharts-chart">
      <highcharts :options="chartOptions"></highcharts>
    </div>
    <grow-card :growData="calcData" class="l-ml-10"></grow-card>
  </div>
</template>
<script>
import growCard from "@/components/grow-card";
export default {
  name: "electricity-highcharts",
  components: {
    growCard,
  },
  props: {
    consumption: {
      type: Array,
      default: () => [],
    },
    highchartsData: {
      type: Array,
      default: () => [],
    },
    content: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      growData: {
        data: [
          {
            background: "#23DF99",
            backgrounds: "#23DF99",
            name: "正增长",
            percentage: 79.3,
            value: 176,
          },
          {
            background: "#FF3A31",
            backgrounds: "#FF3A31",
            name: "负增长",
            percentage: 20.7,
            value: 126,
          },
        ],
      },
      chartOptions: {
        credits: {
          //是否显示水印
          enabled: false,
        },

        chart: {
          width: 190, //饼图宽度
          height: 200, //饼图高度
          backgroundColor: "rgba(0,0,0,0)", //背景颜色
          type: "pie",
          spacingTop: -40,
          spacingBottom: 10,
          options3d: {
            enabled: true,
            alpha: 45, //饼图倾斜度
          },
        },

        title: {
          //大标题
          text: "",
        },
        subtitle: {
          //小标题
          text: "",
        },
        plotOptions: {
          pie: {
            innerSize: 100, //饼图中间空洞大小
            depth: 30, //饼图高度
            dataLabels: {
              enabled: false, //去除饼图线性指示
            },
            colors: ["#00CC80", "#FF473B"],
          },
        },
        tooltip: {
          useHTML:true,
          backgroundColor:'rgba(0, 12, 40, 0.85)',
          borderColor:"rgb(112, 112, 112)",
          borderRadius:0,
          padding:1,
          formatter:(params)=>{

            let lengedbar = `charts-tooltip-inner-content-bar`;
            let lengedClassRed = `background:${this.consumption[1].background};`;
            let lengedClassGreen = `background:${this.consumption[0].background};`;
            return `
            <div class='charts-tooltip'>
              <img class='charts-tooltip-img' src='${CONFIG.imgUrl}/list/zsjzs.png' />
              <div class='charts-tooltip-inner'>
              <div class='charts-tooltip-inner-heard'></div>

              <div class='charts-tooltip-inner-content'>
                <div style='${lengedClassGreen}' class='${lengedbar}'></div>
                <div class='charts-tooltip-inner-content-name'>${this.consumption[0].name}</div>
                <div class='charts-tooltip-inner-content-sum'>${this.consumption[0].percentage}</div>
                <div class='charts-tooltip-inner-content-unit'>%</div>
              </div>

               <div class='charts-tooltip-inner-content'>
                <div style='${lengedClassRed}' class='${lengedbar}'></div>
                <div class='charts-tooltip-inner-content-name'>${this.consumption[1].name}</div>
                <div class='charts-tooltip-inner-content-sum'>${this.consumption[1].percentage}</div>
                <div class='charts-tooltip-inner-content-unit'>%</div>
              </div>

            </div>
            `;
          }
        },
        series: [
          {
            name: "",
            // data: [
            //   ["正增长", 79.3],
            //   ["负增长", 20.7],
            // ],
            data: this.highchartsData,
          },
        ],
      },
    };
  },
  computed: {
    calcData() {
      return (this.consumption || []).map((item, idnex) => {
        item.background = this.growData.data[idnex].background;
        item.backgrounds = this.growData.data[idnex].backgrounds;
        item.name = this.growData.data[idnex].name;
        item.percentage = parseFloat(item.valueOneZb);
        item.value = item.valueOne;
        return item;
      });
    },
  },
  watch: {
    highchartsData() {
      this.chartOptions.series[0].data = this.highchartsData;
    },
  },
};
</script>
<style lang="less" scoped>
.electricity-highcharts {
  position: relative;
  &-consecutive {
    position: absolute;
    z-index: 0;
    font-family: MicrosoftYaHei-Bold;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #ffffff;
  }
  &-chart {
    height: 230px;
  }
}
</style>