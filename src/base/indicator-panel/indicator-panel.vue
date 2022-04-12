<template>
  <div class="indicator-panel">
    <div class="indicator-panel-head">
      <div class="indicator-panel-name">{{panel.name}}</div>
    </div>
    <div class="indicator-panel-body"
         v-show="isShow">
      <div class="indicator-panel-value">{{panel.value}}</div>
      <div class="indicator-panel-unit l-flex">{{panel.unit}}</div>
      <!-- <div class="indicator-panel-label">同比92.3%</div> -->
      <trend size="14"
             :value="panel.percent"></trend>
    </div>
  </div>
</template>

<script>
export default {
  name: 'indicator-panel',
  props: {
    panel: {
      type: Object,
      default: () => ({
        name: '深圳经济电力发展指数',
        value: -1.32,
        percent: 2.32,
        unit: '%'
      })
    },
    isShow: {
      type: Boolean,
      default: false,
    }
  },
}
</script>

<style lang="less" scoped>
@import "../../style/var.less";
.indicator-panel {
  display: flex;
  flex-direction: column;
  background: url("@{imgUrl}/indicator-panel/panel.png") center center no-repeat;
  background-size: 100% 100%;
  padding: 20px;
  &-head {
    display: flex;
    align-items: center;
  }
  &-name {
    font-family: ysbth;
    font-size: 40px;
    color: #fff;
    flex: 1;
  }

  &-body {
    display: flex;
    align-items: flex-end;
  }
  &-value {
    font-size: 40px;
    font-weight: normal;
    color: #fff;
    font-family: Impact;
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
    flex: 1;
    text-align: right;
  }
}
</style>