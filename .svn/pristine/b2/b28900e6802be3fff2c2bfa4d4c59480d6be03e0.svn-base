<template>
  <div class="area-power-growth-rate-all">
    <div class="line-block">
      <white-title :title="name" class="l-flex"></white-title>
      <button-tab
        class="l-ml-92"
        v-model="situationData.value"
        :data="situationData.data"
        @change="situationChange"
        size="small"
      ></button-tab>
    </div>
    <area-proportion-chart :proportionData="proportion"></area-proportion-chart>
  </div>
</template>
<script>
import areaProportionChart from "@/components/area-proportion-chart";
import * as api from "@/api/area";
export default {
  components: {
    areaProportionChart,
  },
  name: "area-power-growth-rate-all",
  props: {
    orgCode: {
      type: String,
      default: "04",
    },
  },
  data() {
    return {
      name: "",
      electricType: 1,
      proportion: {
        proTitle: "",
        proValue: "",
        proTb: "",
        proFault: "",
        proPlane: "",
        proFaultValue: "",
        proPlaneValue: "",
        proFaultTb: "",
        proPlaneTb: "",
      },

      //各参数
      middleProTitle: "中压",
      middleProValue: 0.54,
      middleProTb: 9.4,
      middleProFault: 24.24,
      middleProPlane: 75.76,
      middleProFaultValue: 0.25,
      middleProPlaneValue: 0.08,
      middleProFaultTb: 9.4,
      middleProPlaneTb: 9.4,
      lowProTitle: "低压",
      lowProValue: 1.54,
      lowProTb: 5.4,
      lowProFault: 75.76,
      lowProPlane: 24.24,
      lowProFaultValue: 0.08,
      lowProPlaneValue: 0.25,
      lowProFaultTb: 4.9,
      lowProPlaneTb: 4.9,
      //点击切换事件参数
      situationData: {
        value: "middle",
        data: [
          {
            name: "中压",
            value: "middle",
          },
          {
            name: "低压",
            value: "low",
          },
        ],
      },
    };
  },
  mounted() {
    this.name = this.name + "停电情况";
  },
  watch: {
    proTitle(val) {
      this.name = val + "停电情况";
    },
    electricType() {
      this.queryOutageByElectricType();
    },
    orgCode() {
      this.queryOutageByElectricType();
    },
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.initSituationChange();
      this.queryOutageByElectricType();
    },
    initSituationChange() {
      this.proportion.proTitle = this.middleProTitle;
      this.proportion.proValue = this.middleProValue;
      this.proportion.proTb = this.middleProTb;
      this.proportion.proFault = this.middleProFault;
      this.proportion.proPlane = this.middleProPlane;
      this.proportion.proFaultValue = this.middleProFaultValue;
      this.proportion.proPlaneValue = this.middleProPlaneValue;
      this.proportion.proFaultTb = this.middleProFaultTb;
      this.proportion.proPlaneTb = this.middleProPlaneTb;
    },
    situationChange(val) {
      if (val === "low") {
        this.electricType = 2;
        this.proportion.proTitle = this.lowProTitle;
        this.proportion.proValue = this.lowProValue;
        this.proportion.proTb = this.lowProValue;
        this.proportion.proFault = this.lowProFault;
        this.proportion.proPlane = this.lowProPlane;
        this.proportion.proFaultValue = this.lowProFaultValue;
        this.proportion.proPlaneValue = this.lowProPlaneValue;
        this.proportion.proFaultTb = this.lowProFaultTb;
        this.proportion.proPlaneTb = this.lowProPlaneTb;
      } else {
        this.electricType = 1;
        this.proportion.proTitle = this.middleProTitle;
        this.proportion.proValue = this.middleProValue;
        this.proportion.proTb = this.middleProTb;
        this.proportion.proFault = this.middleProFault;
        this.proportion.proPlane = this.middleProPlane;
        this.proportion.proFaultValue = this.middleProFaultValue;
        this.proportion.proPlaneValue = this.middleProPlaneValue;
        this.proportion.proFaultTb = this.middleProFaultTb;
        this.proportion.proPlaneTb = this.middleProPlaneTb;
      }
    },

    queryOutageByElectricType() {
      api
        .queryOutageByElectricType({
          orgCode: this.orgCode,
          dataPeriod: 3,
          recordType: 1,
          valueType: 2,
          electricType: this.electricType,
          time: "2021-12-18",
        })
        .then((res) => {
          this.proportion.proValue = res[0].outageTime;
          this.proportion.proTb = res[0].outageTimeTb;
          this.proportion.proFault = res[0].faultOutageTb;
          this.proportion.proPlane = res[0].planeOutageTb;
          this.proportion.proFaultValue = res[0].valueOne;
          this.proportion.proPlaneValue = res[0].valueTwo;
          this.proportion.proFaultTb = res[0].valueOneTb;
          this.proportion.proPlaneTb = res[0].valueTwoTb;
        });
    },
  },
};
</script>
<style lang="less" scoped>
.area-power-growth-rate-all {
  width: 520px;
  height: 240px;
  padding-top: 5px;
  // padding: 5px;
  &-con {
    display: flex;
  }
}
.line-block {
  display: flex;
}
</style>