<template>
  <div class="line-img"></div>
</template>
<script>
export default {
  name: "line-img",
};
</script>
<style lang="less">
@import "../../style/var.less";
.line-img {
  height: 1px;
  background: url("@{imgUrl}/eleimg/maxsubtitle-line.png") center center
    no-repeat;
  background-size: 100%;
}
</style>