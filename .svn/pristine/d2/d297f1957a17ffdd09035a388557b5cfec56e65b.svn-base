<template>
  <div class="inner">
    <div class="inner-analysis" v-for="(item, i) in data" :key="i">
      <div class="inner-analysis-name">{{ item.area }}</div>
      <div class="inner-analysis-progress">
        <div
          class="inner-analysis-progress-color"
          :style="{
            width: item.lengths + '%',
          }"
          :class="[lineColor === 'blue' ? 'bluelinecolor' : 'yellowlinecolor']"
        ></div>
        <div class="inner-analysis-progress-val">{{ item.areadegree }}</div>
        <div class="inner-analysis-progress-line"></div>
      </div>
      <div class="inner-analysis-tb">
        <div
          class="inner-analysis-tb-img"
          :class="[item.percentage > 0 ? 'uparrow' : 'downarrow']"
        ></div>
        <div class="inner-analysis-tb-sum">{{ item.percentage }}%</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "inner-analysis",
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    lineColor: {
      type: String,
      default: "blue",
    },
  },
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
@import "../../style/var.less";
.inner {
  height: 351px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
overflow: auto;
  .inner-analysis {
   
    display: flex;
    align-items: center;
    justify-content: space-between;
    &-name {
      font-size: 14px;
      color: #d3daf2;
      font-family: "MicrosoftYaHei";
      width: 84px;
    }
    &-progress {
      position: relative;
      display: flex;
      flex: 1;
      align-items: center;
      padding: 5px;
      &-color {
        width: 6%;
        height: 6px;
        background-image: linear-gradient(
          90deg,
          rgba(74, 69, 48, 1) 0%,
          rgba(255, 204, 0, 1) 100%
        );
        margin-right: 5px;
      }
      &-val{
        font-size:12px;
      }
      &-line {
        position: absolute;
        width: 92%;
        height: 2px;
        background-color: #1c2e4e;
        z-index: -1;
      }
    }
    &-tb {
      display: flex;
      align-items: center;
      
      width: 80px;
      background-color: rgba(29, 86, 140, 0.2);
      border-radius: 2px;
      height: 18px;
      &-img {
        width: 12px;
        height: 8px;
        margin-left: 7px;
        margin-right: 7px;
      }
      &-sum{
        font-size: 12px;
      }
    }
  }
}
.uparrow {
  background: url("@{imgUrl}/industry/up.png") center center no-repeat;
  background-size: 100% 100%;
}
.downarrow {
  background: url("@{imgUrl}/industry/down.png") center center no-repeat;
  background-size: 100% 100%;
}
.bluelinecolor {
  width: 6%;
  height: 6px;
  background-image: linear-gradient(
    90deg,
    rgba(46, 102, 138, 1) 0%,
    rgba(31, 252, 255, 1) 100%
  );
  margin-right: 5px;
}
.yellowlinecolor {
  width: 6%;
  height: 6px;
  background-image: linear-gradient(
    90deg,
    rgba(74, 69, 48, 1) 0%,
    rgba(255, 204, 0, 1) 100%
  );
  margin-right: 5px;
}
</style>