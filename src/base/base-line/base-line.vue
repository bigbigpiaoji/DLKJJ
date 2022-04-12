<template>
  <div class="base-line">
    <div class="base-line-img"></div>
  </div>
</template>
<script>
export default {
  name: "base-line",
  data(){
      return{}
  },
};
</script>
<style lang="less" scoped>
@import "../../style/var.less";
.base-line {
  width: 100%;
  height: 1px;
  padding: 0 0 5px 20px;
  &-img {
    width: 100%;
    height: 1px;
    background: url("@{imgUrl}/report/fenge.png") center center no-repeat;
    background-size: 100% 100%;
  }
}
</style>