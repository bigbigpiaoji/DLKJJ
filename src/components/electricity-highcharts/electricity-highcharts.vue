<template>
  <div class="electricity-highcharts">
    <white-title :title="titleData.title"></white-title>
    <div class="electricity-highcharts-chart">
      <highcharts
        :options="chartOptions"
        class="electricity-highcharts-chart-name"
      ></highcharts>
    </div>
    <grow-card
      :growData="calcData"
      class="electricity-highcharts-card l-mt-20 l-ml-10 l-mr-20"
    ></grow-card>
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
    electriHightchartsData: {
      type: Array,
      default: () => [],
    },
    growCardData: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      titleData: { title: "行业用电增长情况" },
      growData: {
        data: [
          {
            background: "#00CC80",
            backgrounds: "#00CC80",
            name: "正增长",
            percentage: 79.3,
            value: 176,
          },
          {
            background: "",
            name: "增速超去年",
            backgrounds: "#00CC80",
            percentage: 19.7,
            value: 93,
          },
          {
            background: "#FF312B",
            backgrounds: "#FF312B",
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
          width: 220, //饼图宽度
          height: 220, //饼图高度
          backgroundColor: "rgba(0,0,0,0)", //背景颜色
          type: "pie",
          spacingTop: -40,
          spacingBottom: 10,
          // spacingRight: 0,
          spacingLeft: 20,
          options3d: {
            enabled: true,
            alpha: 50, //饼图倾斜度
          },
        },

        title: {
          //大标题
          floating: true,
          text: "111",
        },
        subtitle: {
          //小标题
          text: "",
        },
        tooltip: {
          useHTML:true,
          backgroundColor:'rgba(0, 12, 40, 0.85)',
          borderColor:"rgb(112, 112, 112)",
          borderRadius:0,
          padding:1,
          formatter:(params)=>{
            let lengedbar = `charts-tooltip-inner-content-bar`;
            let lengedClassRed = `background-color:rgb(255, 49, 43);`;
            let lengedClassGreen = `background-color:rgb(0, 204, 128);`;
            return `
            <div class='charts-tooltip'>
              <img class='charts-tooltip-img' src='${CONFIG.imgUrl}/list/zsjzs.png' />
              <div class='charts-tooltip-inner'>
              <div class='charts-tooltip-inner-heard'></div>

              <div class='charts-tooltip-inner-content'>
                <div style='${lengedClassGreen}' class='${lengedbar}'></div>
                <div class='charts-tooltip-inner-content-name'>${this.electriHightchartsData[0][0]}</div>
                <div class='charts-tooltip-inner-content-sum'>${this.electriHightchartsData[0][1]}</div>
                <div class='charts-tooltip-inner-content-unit'>%</div>
              </div>

               <div class='charts-tooltip-inner-content'>
                <div style='${lengedClassRed}' class='${lengedbar}'></div>
                <div class='charts-tooltip-inner-content-name'>${this.electriHightchartsData[1][0]}</div>
                <div class='charts-tooltip-inner-content-sum'>${this.electriHightchartsData[1][1]}</div>
                <div class='charts-tooltip-inner-content-unit'>%</div>
              </div>

            </div>
            `;
          }
        },
        plotOptions: {
          pie: {
            innerSize: 100, //饼图中间空洞大小
            depth: 28, //饼图高度
            dataLabels: {
              enabled: false, //去除饼图线性指示
            },
            colors: ["#00CC80", "#FF312B"],
          },
        },

        series: [
          {
            name: "",
            data: this.electriHightchartsData,
          },
        ],
      },
    };
  },
  computed: {
    calcData() {
      return (this.growCardData || []).map((item, idnex) => {
        item.background = this.growData.data[idnex].background;
        item.backgrounds = this.growData.data[idnex].backgrounds;
        item.name = this.growData.data[idnex].name;
        item.percentage = parseFloat(item.valueOne);
        item.value = item.valueTwo;
        return item;
      });
    },
  },
  watch: {
    electriHightchartsData() {
      this.chartOptions.series[0].data = this.electriHightchartsData;
    },
  },
  methods: {
    init() {

    },
  },
};
</script>
<style lang="less" scoped>
.electricity-highcharts {
  &-chart {
    height: 200px;
    &-name {
      display: flex;
      justify-content: center;
    }
  }
  &-card {

  }
}
</style>