<template>
  <div class="analysis-line">
    <div class="analysis-line-point"></div>
    <div class="analysis-line-thread"></div>
  </div>
</template>
<script>
export default {
  name: "analysis-line",
};
</script>
<style lang="less">
.analysis-line {
    display: flex;

  &-thread {
    height: 1px;
    background: rgba(255, 255, 255,0.08);
   width: 94.5%;
  }
  &-point {
    width: 8px;
    height: 1px;
    background: rgba(255, 255, 255,0.8);
  }
}
</style>