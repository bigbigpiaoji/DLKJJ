<template>
  <div class="electric-card" >
    <white-title :title="data.innercardData.title" :areatitle="data.innercardData.areatitle"></white-title>
    <div class="electric-card-con">
      <electric-card-innercard :data="data.innercardData"></electric-card-innercard>
      <electric-card-contrast :data="data.contrastData"></electric-card-contrast>
    </div>
    <electric-card-maxandmin :data="data.maxandminData"></electric-card-maxandmin>
  </div>
</template>
<script>
import * as api from "@/api/area";
export default {
  name: "electric-card",
  props: {
    data: {
      type: Object,
      default: () => {},
    },
    orgcode:{
      type:String,
      default:""
    }
  },
  data() {
    return {
    };
  }, 
  watch:{
        orgcode() {
      if(this.orgcode === ''){

      }else{
        this.areaqueryPowerRiseBalance();
      }
      
    },
  },
  
  methods:{
        areaqueryPowerRiseBalance() {
      api
        .queryPowerRiseBalance({
          valueType: 2, //2
          recordType: 1, //1
          orgCode: this.orgcode, //0403
          dataPeriod: 3, //3
          time: "2021-12-12", //2021-12
          type: 2,
        })
        .then((res) => {
          res.forEach((item) => {
            this.data.innercardData.sum = item.valueRiseAdd;
            this.data.contrastData.num = item.valueRiseAddTb;
            this.data.innercardData.areatitle = item.orgName;
            this.data.maxandminData.maxnum = item.maxLoad;
            this.data.maxandminData.minnum = item.minLoad;
          });
        });
    },
  }
};
</script>
<style lang="less" scoped>
.electric-card {

  padding: 5px;
  &-con {
    display: flex;
  }
}
</style>