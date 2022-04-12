<template>
  <div class="support-title">
    <div class="support-title-content">
      预计2021年每度电支撑GDP趋势：
      <div class="support-title-content-value">
        <span class="support-title-content-value-scale">28.93</span> 元/度
      </div>
    </div>
    <div class="support-title-model" @click="visibleClick()">查看分析模型</div> 
  </div>
</template>
<script>
export default {
  name: "support-title",
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    visibleClick() {
      this.$emit("onClick");
      
    },
  },
};
</script>
<style lang="less">
.support-title {
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(37, 181, 255, 0.1);
  padding: 5px;
  &-content {
    font-size: 12px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #ffffff;
    line-height: 24px;
    opacity: 0.8;
    display: flex;
    flex: 1;
    margin-left: 6px;
    &-value {
      font-size: 12px;
      &-scale {
        color: #01f1e0;
        font-size: 14px;
        font-weight: bold;
      }
    }
  }
  &-model {
    font-size: 12px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #ffffff;
    line-height: 20px;
    background: #017df1;
    padding: 2px;
    cursor: pointer;
    border-radius: 2px;
    width: 90px;
    text-align: center;
  }
}
</style>