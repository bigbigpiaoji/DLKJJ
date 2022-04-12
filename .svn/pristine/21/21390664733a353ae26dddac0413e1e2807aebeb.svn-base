<template>
  <div
    class="area-power-growth-rate-all"
    style="display: flex; flex-direction: column"
  >
    <div class="line-block">
      <white-title title="各区域用电增长率" class="l-flex"></white-title>
      <button-tab
        class="l-ml-110"
        v-model="growthData.value"
        :data="growthData.data"
        @change="growthChange"
        size="small"
      ></button-tab>
    </div>
    <div style="flex: 1">
      <area-power-growth-rate
        :legendNow="useLegendNow"
        :legendLast="useLegendLast"
        :nowData="useNowData"
        :lastData="useLastData"
        :xData="xData"
      ></area-power-growth-rate>
    </div>
  </div>
</template>
<script>
import areaPowerGrowthRate from "@/components/area-power-growth-rate";
import * as api from "@/api/area";
export default {
  components: {
    areaPowerGrowthRate,
  },
  name: "area-power-growth-rate-all",
  data() {
    return {
      perData: 3,
      useLegendNow: "",
      useLegendLast: "",
      useNowData: [],
      useLastData: [],
      xData: [],

      //各参数
      monthNowData: [
        11.42683683, 0.750930693, 3.851451061, 0.904395959, 0.476400964,
        17.72859788, 8.410306901, 5.591994704, 8.461322745, 4.611896916,
        2.343246731,
      ],
      monthLastData: [
        11.52424427, 0.783918163, 3.84323178, 0.913944939, 0.467371168,
        17.95800219, 8.31740886, 5.88608374, 8.540680789, 4.884252506,
        2.473427631,
      ],
      yearNowData: [
        150.6233246, 10.24781122, 45.45652079, 11.58208233, 6.168330984,
        230.7984481, 99.93171106, 87.69119417, 104.7074945, 69.21200851,
        35.08643781,
      ],
      yearLastData: [
        90.23325859, 6.219461519, 25.66543945, 6.627558038, 3.13793105,
        140.9572496, 58.6399201, 49.75640084, 62.41727892, 43.74917592,
        21.37491718,
      ],
      //点击切换事件参数
      growthData: {
        value: "month",
        data: [
          {
            name: "月",
            value: "month",
          },
          {
            name: "年",
            value: "year",
          },
        ],
      },
    };
  },
  created() {
    this.init();
  },
  watch: {
    perData(val) {
      this.queryEveryAreaOfPowerAdd();
    },
  },
  methods: {
    init() {
      this.initGrowthData();
      this.queryEveryAreaOfPowerAdd();
    },
    initGrowthData() {
      this.useLegendNow = "今年12月";
      this.useLegendLast = "去年同期";
      this.useNowData = this.monthNowData;
      this.useLastData = this.monthLastData;
    },
    growthChange(val) {
      if (val === "year") {
        this.useLegendNow = "今年累计";
        this.useLegendLast = "去年同期";
        this.useNowData = this.yearNowData;
        this.useLastData = this.yearLastData;
        this.perData = 1;
      } else {
        this.useLegendNow = "今年12月";
        this.useLegendLast = "去年同期";
        this.useNowData = this.monthNowData;
        this.useLastData = this.monthLastData;
        this.perData = 3;
      }
    },
    // 各区域用电增长率
    queryEveryAreaOfPowerAdd() {
      this.useNowData = [];
      this.useLastData = [];
      this.xData = [];
      api
        .queryEveryAreaOfPowerAdd({
          dataPeriod: this.perData,
          recordType: 1,
          valueType: 1,
          time: "2021-10-12",
        })
        .then((res) => {
          res.forEach((item, index) => {
            this.useNowData.push(item.valueOne);
            this.useLastData.push(item.valueTwo);
            this.xData.push(item.orgName);
          });
        });
    },
  },
};
</script>
<style lang="less" scoped>
.area-power-growth-rate-all {
  width: 520px;
  height: 250px;
  padding: 5px;
  &-con {
    display: flex;
  }
}
.line-block {
  display: flex;
}
</style>