<template>
  <div class="industry-electricity">
    <div class="industry-electricity-title">
      {{ title }}
    </div>
    <div
      class="industry-electricity-content"
      v-for="item in data"
      :key="item.index"
    >
      <div class="industry-electricity-content-name">{{ item.name }}</div>
      <div class="industry-electricity-content-proportion">
        {{ item.value }}
        <span class="industry-electricity-content-proportion-unit">%</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "industry-electricity",
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    title: {
      type: String,
      default: "",
    },
  },
};
</script>
<style lang="less">
.industry-electricity {
  &-title {
    font-size: 13px;
    font-family: Microsoft YaHei;
    font-weight: bold;
    color: #4fb7ff;
    line-height: 26px;
    margin-left: 15px;
  }
  &-content {
    display: flex;
    &-name {
      flex: 1;
      font-size: 12px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(255, 255, 255,0.8);
      line-height: 22px;
      margin-left: 15px;
    }
    &-proportion {
      font-size: 12px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #ffffff;
      line-height: 22px;
      margin-right: 15px;
      &-unit {
        font-size: 12px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #ffffff;
        line-height: 22px;
      }
    }
  }
}
</style>