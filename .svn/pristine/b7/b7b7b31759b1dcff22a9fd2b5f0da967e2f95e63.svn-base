<template>
  <div class="gdp-panel">
    <div class="gdp-panel-head">
      <div class="gdp-panel-name">{{name}}</div>
      <div class="gdp-panel-date">截至&nbsp;&nbsp;{{date}}</div>
    </div>
    <div class="gdp-panel-body">
      <div class="gdp-panel-value">{{value}}</div>
      <div class="gdp-panel-unit l-h-35">{{unit}}</div>
      <div class="gdp-panel-label l-h-35">已完成去年总GDP<span class="bold">{{complete}}%</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'gdp-panel',
  props: {
    name: {
      type: String,
      default: '预计当年深圳GDP',
    },
    date: {
      type: String,
      default: '截至2022年 02月16日',
    },
    value: {
      type: [String, Number],
      default: '3650.82',
    },
    unit: {
      type: String,
      default: '万亿元',
    },
    complete: {
      type: [String,Number],
      default: 12.82,
    },
  },
}
</script>

<style lang="less" scoped>
@import "../../style/var.less";
.gdp-panel {
  display: flex;
  flex-direction: column;
  &-head {
    padding: 4px 30px;
    display: flex;
    align-items: center;
    background: linear-gradient(
      90deg,
      rgba(31, 153, 249, 0.1) 0%,
      rgba(31, 153, 249, 0.1) 100%
    );
  }
  &-name {
    font-family: ysbth;
    font-size: 24px;
    color: #fff;
    flex: 1;
  }
  &-date {
    font-size: 12px;
    color: #99b3d7;
    margin-left: 40px;
  }
  &-body {
    display: flex;
    align-items: flex-end;
    // background:url('@{imgUrl}/gdp-panel/panel.png') center center no-repeat;
    background-size: 100% 100%;
    padding: 10px 20px 20px 20px;
  }
  &-value {
    font-size: 60px;
    font-weight: normal;
    color: #fff;
    font-family: 'Impact';
    background: linear-gradient(0deg, #7fbaf4 0%, #ffffff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  &-unit {
    font-size: 14px;
    color: #fff;
    margin-left: 10px;
  }
  &-label {
    font-size: 14px;
    color: #fff;
    margin-left: 10px;
  }
  & .bold {
    font-weight: bold;
  }
  & .l-h-35 {
    line-height: 35px;
  }
}
</style>