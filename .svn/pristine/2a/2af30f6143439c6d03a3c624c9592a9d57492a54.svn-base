<template>
  <div class="analyse-title">
    <div class="analyse-title-content">{{ title }}</div>
    <div class="analyse-title-line"></div>
  </div>
</template>
<script>
export default {
  name: "analyse-title",
  props: {
    title: {
      type: String,
      default: "",
    },
  },
};
</script>
<style lang="less">
@import "../../style/var.less";
.analyse-title {
  &-content {
    display: flex;
    align-items: center;
    justify-content: center;
    background: url("@{imgUrl}/eleimg/maxsubtitle.png") no-repeat center center;
    background-size: contain;
    padding: 10px 0px;
    font-size: 22px;
    font-family: ysbth;
  }
  &-line {
    background: url("@{imgUrl}/industrial/zs.png") no-repeat center center;
    height: 1px;
    background-size: 98%;
  }
}
</style>