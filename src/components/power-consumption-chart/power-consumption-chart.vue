<template>
  <div class="power-consumption-chart">
    <div :style="getStyle" class="v-chart l-ml-20">
      <v-chart
        ref="line"
        class=""
        :data="data"
        :autoresize="true"
        :option="option"
      >
      </v-chart>
    </div>
  </div>
</template>

<script>
import isEmpty from "@/utils/isEmpty";
export default {
  name: "power-consumption-chart",
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
          color: item.increment >= 0 ? "#3F5DB9" : "#365BCB",
        };
        return item;
      });
    },
  },
  mounted() {
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
            let { value, name, unit, percentage } = params.data;
            return `
            <div class='charts-tooltip'>
              <img class='charts-tooltip-img' src='${
                CONFIG.imgUrl
              }/list/zsjzs.png' />
              <div class='charts-tooltip-inner'>
              <div class='charts-tooltip-inner-heard'>${isEmpty(name)}类</div>

              <div class='charts-tooltip-inner-content'>
                <div class='charts-tooltip-inner-content-name'>${isEmpty(
                  value.length > 10 ? "- -" : value
                )}</div>
                
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

            </div>
            `;
          },
        },
        series: [
          {
            type: "treemap",
            left: -8,
            right: -2,
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
                let { value, name, unit, percentage } = params.data;
                let isShowLabel = copyData
                  .slice(0, 3)
                  .some((item) => item.name === name);
                if (isShowLabel) {
                  return `${name}\n\n${isEmpty(value)} ${unit}\n\n${isEmpty(
                    percentage
                  )}% `;
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
.power-consumption-chart {
}
</style>