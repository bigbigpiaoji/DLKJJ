<template>
  <div class="power-treemap-chart">
    <div :style="getStyle" class="v-chart l-ml-20">
      <v-chart ref="line" class="" :autoresize="true" :option="option">
      </v-chart>
    </div>
  </div>
</template>

<script>
import isEmpty from "@/utils/isEmpty";
export default {
  name: "power-treemap-chart",
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    height: {
      type: [String, Number],
      default: "250",
    },
  },
  data() {
    return {
      newdata: [],
      option: {},
    };
  },
  computed: {
    getStyle() {
      return {
        height: this.$pxToRem(this.height) + "rem",
      };
    },
    calcData() {
      return this.data.map((item) => {
        item.itemStyle = {
          color: item.increment >= 0 ? "#18A066" : "#D28E18",
        };
        return item;
      });
    },
  },
  created() {
    this.init();
  },
  watch: {
    calcData(val) {
      this.option.series[0].data = val;
    },
  },
  methods: {
    init() {
      this.initOption();
    },
    initOption() {
      this.option = {
        tooltip: {
          backgroundColor: "rgba(0, 12, 40, 0.85)",
          borderColor: "rgb(112, 112, 112)",
          borderRadius: 0,
          padding: 1,
          formatter: (params) => {
            let { value, name, unit, percentage, increment } = params.data;
            return `
            <div class='charts-tooltip'>
              <img class='charts-tooltip-img' src='${
                CONFIG.imgUrl
              }/list/zsjzs.png' />
              <div class='charts-tooltip-inner'>
              <div class='charts-tooltip-inner-heard'>${isEmpty(name)}类</div>

              <div class='charts-tooltip-inner-content'>
                <div class='charts-tooltip-inner-content-name'>${
                  value.toString().length > 10 ? "- -" : isEmpty(value)
                }</div>
                
                <div class='charts-tooltip-inner-content-unit'>${isEmpty(
                  unit
                )}</div>
              </div>

               <div class='charts-tooltip-inner-content'>
                <div class='charts-tooltip-inner-content-name'>占比</div>
                <div class='charts-tooltip-inner-content-sum'>${isEmpty(
                  percentage
                )}</div>
                <div class='charts-tooltip-inner-content-unit'>%</div>
              </div>

               <div class='charts-tooltip-inner-content'>
                <div class='charts-tooltip-inner-content-name'>增速</div>
                <div class='charts-tooltip-inner-content-sum'>${isEmpty(
                  increment
                )}</div>
                <div class='charts-tooltip-inner-content-unit'>%</div>
              </div>
            </div>
            `;
          },
        },

        series: [
          {
            type: "treemap",
            left: 10,
            right: 0,
            nodeClick: false,
            roam: false,
            itemStyle: {
              gapWidth: 4,
              borderColor: "#06132A",
            },
            label: {
              offset: [0, 10],
              formatter: (params) => {
                let copyData = this.data
                  .slice()
                  .sort((a, b) => b.value - a.value);
                let { value, name, unit, percentage, increment } = params.data;
                let isShowLabel = copyData
                  .slice(0, 3)
                  .some((item) => item.name === name);
                if (isShowLabel) {
                  return `${name}类\n${value}&nbsp${unit}\n占比 ${percentage}%\n增速 ${increment}`;
                } else {
                  return "";
                }
              },
            },
            breadcrumb: {
              show: false,
            },
            data: this.calcData,
          },
        ],
      };
    },
  },
};
</script>
<style lang="less" scoped>
.power-treemap-chart {
}
</style>