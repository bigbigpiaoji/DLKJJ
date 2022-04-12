<template>
  <div class="grow-card">
    <div class="grow-card-positive" v-for="item in growData" :key="item.index">
      <div
        class="grow-card-positive-title"
        :style="'background:' + item.background"
      ></div>
      <div class="grow-card-positive-name">{{ item.name }}：</div>
      <div class="grow-card-positive-percentage">{{ item.percentage }}</div>
      <div class="grow-card-positive-unit">%</div>
      <div class="grow-card-widths l-box">
        <div
          class="grow-card-positive-value"
          :style="'color:' + item.backgrounds"
        >
          {{ item.value }}
        </div>
        <div class="grow-card-positive-kind">类</div>
      </div>

      <div></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "grow-card",
  props: {
    growData: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
<style lang="less">
.grow-card {
  &-positive {
    display: flex;
    font-size: 14px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #ffffff;
    justify-content: space-between;
    padding: 10px;
    &-title {
      width: 11px;
      height: 11px;
      margin-top: 2px;
    }
    &-name {
      margin-left: 5px;
    }
    &-percentage {
    }
    &-unit {
      flex: 1;
    }
    &-value {
      margin-right: 5px;
      font-weight: bold;
    }
    &-kind {
    }
  }
  &-widths {
    width: 40px;
    display: flex;
    justify-content: flex-end;
  }
}
</style>