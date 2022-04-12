<template>
  <div class="electric-powercard">
    <white-title
      :title="data.innercardData.title"
      :areatitle="data.innercardData.areatitle"
    ></white-title>
    <div class="electric-powercard-con">
      <electric-card-innercard
        :data="data.innercardData"
      ></electric-card-innercard>
      <electric-card-contrast
        :data="data.contrastData"
      ></electric-card-contrast>
    </div>
    <electric-card-brand :data="data.brandData"></electric-card-brand>
  </div>
</template>
<script>
import * as api from "@/api/area";
export default {
  name: "electric-powercard",
  props: {
    data: {
      type: Object,
      default: () => {},
    },
    orgcode: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
  watch: {
    orgcode() {
      if (this.orgcode === "") {
      } else {
        this.queryGainPowereIndexsum();
      }
    },
  },
  methods: {
    queryGainPowereIndexsum() {
      api
        .queryGainPowereIndex({
          valueType: 1,
          recordType: 1,
          dataPeriod: 1,
          orgCode: this.orgcode,
          type: 2,
        })
        .then((res) => {
          console.log(res, 123);

          this.data.innercardData.areatitle =
            res[0].time + "年" + res[0].orgName;
          this.data.innercardData.sum = res[0].powerReliable;
          this.data.brandData[2].city = res[1].time;
          this.data.brandData[1].city = res[2].time;
          this.data.brandData[0].city = res[3].time;
          this.data.brandData[2].num = res[1].powerReliable;
          this.data.brandData[1].num = res[2].powerReliable;
          this.data.brandData[0].num = res[3].powerReliable;
        });
    },
  },
};
</script>
<style lang="less" scoped>
.electric-powercard {
  height: 250px;
  padding: 5px;
  &-con {
    display: flex;
  }
}
</style>