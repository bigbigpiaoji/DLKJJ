<template>
  <div class="epidemic-tb">
    <div class="epidemic-tb-img">{{ sumData.title }}</div>

    <div class="epidemic-tb-dex">
      <div
        class="epidemic-tb-dex-sum"
        v-for="(item, index) in sumData.valData"
        :key="index"
      >
        {{ item.val }}%
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "epidemic-tb",
  props:{
      sumData:{
          type:Object,
          default:()=>{}
      }
  },
  data() {
    return {

    };
  },
};
</script>
<style lang="less" scoped>
@import "../../style/var.less";
.epidemic-tb {
  width:93%;
  margin-left: 7%;
  display: flex;
  flex-direction: column;
  // align-items: center;
  &-img {
    width:100%;
    font-weight: 600;
    text-align: center;
    font-size: 12px;
    font-family: "MicrosoftYaHei";
    background: url("@{imgUrl}/report/little-title-img.png") center center
      no-repeat;
    background-size: 100% 100%;
  }
  &-dex {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    &-sum {
      width: 80px;
      height: 40px;
      background: url("@{imgUrl}/report/dex-base-img.png") center center
        no-repeat;
      background-size: 100% 100%;
      color: #e52e4c;
      font-size: 12px;
      font-weight: 600;
      padding: 14px 0;
      text-align: center;
    }
  }
}
</style>