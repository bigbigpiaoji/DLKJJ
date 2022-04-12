<template>
  <div class="power-consumption-all">
    <div class="line-block">
      <white-title title="各产业用电量" class="l-flex"></white-title>
      <button-tab
        class="l-ml-108"
        v-model="consumptionData.value"
        :data="consumptionData.data"
        @change="consumptionChange"
        size="small"
      ></button-tab>
    </div>
    <power-consumption
      :xAxisData="consXAxisData"
      :firstData="consFirstData"
      :secondData="consSecondData"
      :thirdData="consThirdData"
      :dateUnit="dateUnit"
    ></power-consumption>
  </div>
</template>
<script>
import powerConsumption from "@/components/power-consumption";
import * as api from "@/api/area";
export default {
  components: {
    powerConsumption,
  },
  name: "power-consumption-all",
  data() {
    return {
      perData: 3,
      consXAxisData: [],
      consFirstData: [],
      consSecondData: [],
      consThirdData: [],
      dateUnit: "",

      //各参数
      monthXAxisData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      yearXAxisData: [
        2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
      ],
      monthFirstData: [
        0.003810372, 0.002769894, 0.004087915, 0.004472536, 0.006400016,
        0.006269839, 0.006101053, 0.005886266, 0.00611706, 0.004488679,
        0.002952494, 0.002080852,
      ],
      monthSecondData: [
        3.047461291, 2.02244918, 4.526616868, 1.444258683, 1.774790213,
        1.786050198, 2.344337754, 2.753591674, 1.982970888, 1.527801523,
        1.343690706, 1.249882018,
      ],
      monthThirdData: [
        3.784905568, 3.063158393, 4.25933807, 4.667354827, 6.164797314,
        6.127229437, 6.575809474, 6.441301294, 6.598588034, 5.269901419,
        4.53944054, 4.340031834,
      ],
      yearFirstData: [, , , , , , , , , 0.038099156, 0.055436975],
      yearSecondData: [, , , , , , , , , 13.5458308, 25.803901],
      yearThirdData: [, , , , , , , , , 36.17247088, 61.8318562],
      monthDateUnit: "month",
      yearDateUnit: "year",
      //点击切换事件参数
      consumptionData: {
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
    perData() {
      this.queryPowerByOrg();
    },
  },
  methods: {
    init() {
      this.initConsumptionChange();
      this.queryPowerByOrg();
    },
    initConsumptionChange() {
      this.consXAxisData = this.monthXAxisData;
      this.consFirstData = this.monthFirstData;
      this.consSecondData = this.monthSecondData;
      this.consThirdData = this.monthThirdData;
      this.dateUnit = this.monthDateUnit;
    },
    consumptionChange(val) {
      if (val === "year") {
        this.perData = 1;
        this.consXAxisData = this.yearXAxisData;
        this.consFirstData = this.yearFirstData;
        this.consSecondData = this.yearSecondData;
        this.consThirdData = this.yearThirdData;
        this.dateUnit = this.yearDateUnit;
      } else {
        this.perData = 3;
        this.consXAxisData = this.monthXAxisData;
        this.consFirstData = this.monthFirstData;
        this.consSecondData = this.monthSecondData;
        this.consThirdData = this.monthThirdData;
        this.dateUnit = this.monthDateUnit;
      }
    },
    //各区域用电量
    queryPowerByOrg() {
      this.consXAxisData = [];
      this.consFirstData = [];
      this.consSecondData = [];
      this.consThirdData = [];
      api
        .queryPowerByOrg({
          orgCode: "0401",
          recordType: 1,
          valueType: 1,
          dataPeriod: this.perData,
          time: "2021-12-12",
        })
        .then((res) => {
          res.forEach((item) => {
            this.consXAxisData.push(item.time);
            this.consFirstData.push(item.valueTwo);
            this.consSecondData.push(item.valueTwo);
            this.consThirdData.push(item.valueTwo);
          });
        });
    },
  },
};
</script>
<style lang="less" scoped>
.power-consumption-all {
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