<template>
  <div class="timegene-onuichartstitle">
    <div class="timegene-onuichartstitle-title">
      <div class="timegene-onuichartstitle-title-left">{{leftTitle}}</div>
      <div class="timegene-onuichartstitle-title-right">{{leftRight}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "timegene-onuichartstitle",
  props: {
    leftTitle: {
      type: String,
      default: "趋势性",
    },
    leftRight: {
      type: String,
      default: "随温度升高而升高",
    },
  },
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
.timegene-onuichartstitle {
  padding: 0 10px;
  &-title {
    display: flex;
    padding: 10px 50px;
    font-size: 12px;
    justify-content: space-between;
    &-left {
      padding:0 12px;
      height: 25px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgba(33, 70, 117, 1);
      border-radius: 4px;
    }
    &-right {
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgba(192, 213, 254, 1);
      font-size: 12px;
    }
  }
}
</style>