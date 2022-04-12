<template>
  <div class="power-content">
    <div class="power-content-name" v-for="item in data" :key="item.index">
      <div class="power-content-name-value">{{ item.content }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "power-content",
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
<style lang="less">
.power-content {
  overflow: auto;
  height: 80px;
  background: rgba(37, 181, 255, 0.05);
  border-top: 1px solid rgba(37, 181, 255, 0.12);
  &-name {
    display: flex;
    &-value {
      font-size: 12px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(192, 213, 254, 0.7);
      line-height: 20px;
      text-align: inherit;
      margin-left: 15px;
    }
  }
}
</style>