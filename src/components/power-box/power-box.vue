<template>
  <div class="power-box">
    <div class="power-box-city">{{ data.city }}</div>
    <div class="power-box-value">{{ data.value }}</div>
  </div>
</template>
<script>
export default {
  name: "power-box",
  props: {
    data: {
      type: Object,
      default: {},
    },
  },
};
</script>
<style lang="less">
@import "../../style/var.less";
.power-box {
  background: url("@{imgUrl}/analysis-img/sz.png") center center no-repeat;
  height: 44px;
  margin: 0px 4px;
  flex: 1;
  text-align: center;
  &-city {
    font-size: 12px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #ffffff;
    line-height: 20px;
    margin-top: -1px;
  }
  &-value {
    font-size: 16px;
    font-family: Impact;
    color: #01f1e0;
    line-height: 24px;
  }
}
</style>