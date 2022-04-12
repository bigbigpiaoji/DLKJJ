<template>
  <div class="support-content">
    <div class="support-content-name" v-for="item in data" :key="item.index">
      <div class="support-content-name-point"></div>
      <div class="support-content-name-value">{{ item.content }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "support-content",
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
<style lang="less">
.support-content {
  overflow: auto;
  height: 80px;
  background: rgba(37, 181, 255, 0.05);
  border-top: 1px solid rgba(37, 181, 255, 0.12);
  &-name {
    display: flex;
    position: relative;
    &-value {
      font-size: 12px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(192, 213, 254, 0.7);
      line-height: 20px;
      text-align: inherit;
      margin-left: 15px;
      padding: 5px 0;
    }
    &-point {
      width: 3px;
      height: 3px;
      background: rgba(192, 213, 254, 0.7);
      position: absolute;
      left: 7px;
      top: 15px;
      border-radius: 50%;
    }
  }
}
</style>