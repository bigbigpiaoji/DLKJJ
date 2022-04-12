<template>
  <div class="innercard">
    <div class="innercard-img">
      <div class="innercard-img-word">{{ data.sum.length > 5 ? parseInt(data.sum).toFixed(1) : data.sum}}</div>
    </div>   
    <div class="innercard-unit">{{ data.unit }}</div>
  </div>
</template>
<script>
export default {
  name: "electric-card-innercard",
  props: {
    data:{
      type:Object,
      default:()=>{}
    },
  },
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
@import "../../style/var.less";
.innercard {
  display: flex;

  &-img {
    width: 144px;
    height: 120px;
    padding-top: 15px;
    background: url("@{imgUrl}/eleimg/elecard-base.png") center 35px no-repeat;
    background-size: contain;
    &-word {
      text-align: center;
      color: #01f1e0;
      background: linear-gradient(0deg, #7fbaf4 0%, #ffffff 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 60px;
      font-family: Impact;
    }
  }
  &-unit{
      height: 75px;
      display: flex;
      align-items: flex-end;
  }
}
</style>