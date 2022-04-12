<template>
  <div class="analysis-content">
    <div class="analysis-content-value">{{ data.value }}</div>
    <div class="analysis-content-unit">{{ data.unit }}</div>
  </div>
</template>
<script>
export default {
  name: "analysis-content",
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
<style lang="less">
@import "../../style/var.less";
.analysis-content {
  display: flex;
  background: url("@{imgUrl}/analysis-img/bg.png") center center no-repeat;
  justify-content: center;
  align-items: center;
  height: 149px;
  &-value {
    font-size: 120px;
    font-family: Impact;
    font-weight: 400;
    color: #cee9ff;
    background: linear-gradient(0deg, #7fbaf4 0%, #ffffff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  &-unit {
    font-size: 16px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.8);
    margin-top: 75px;
  }
}
</style>