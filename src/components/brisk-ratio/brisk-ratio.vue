<template>
  <div>
    <div class="brisk-ratio" v-for="item in data" :key="item.index">
      <div class="brisk-ratio-content">
        <div
          class="brisk-ratio-content-title"
          :style="'background:' + item.background"
        ></div>
        <div class="brisk-ratio-content-name">{{ item.name }}</div>
        <div class="brisk-ratio-content-value">{{ item.value }}</div>
        <div class="brisk-ratio-content-unit">家</div>
      </div>
      <div class="brisk-ratio-percentage">
        <div class="brisk-ratio-percentage-value">{{ item.percentage }}</div>
        <div class="brisk-ratio-percentage-unit">%</div>
      </div>
      <div class="brisk-ratio-compare">
        <div class="brisk-ratio-compare-tb">同比</div>
        <div
          class="brisk-ratio-compare-img"
          :class="[item.compare >= 0 ? 'uparrow' : 'downarrow']"
        ></div>
        <div class="brisk-ratio-compare-value">
          {{ Math.abs(item.compare) }}
        </div>
        <div class="brisk-ratio-compare-unit">%</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "brisk-ratio",
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
<style lang="less">
@import "../../style/var.less";
.brisk-ratio {
  display: flex;
  justify-content: space-around;
  padding: 10px 10px 0 10px;
  &-content {
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: center;
    &-title {
      width: 10px;
      height: 10px;
    }
    &-name {
      font-size: 12px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #ffffff;
      flex: 0.7;
      justify-content: center;
      margin-left: 8px;
      min-width: 70px;
    }
    &-value {
      font-size: 12px;
      font-family: Microsoft YaHei;
      font-weight: bold;
      color: #ffffff;
    }
    &-unit {
      font-size: 12px;
      font-family: Microsoft YaHei;
      color: #ffffff;
      font-weight: 400;
      margin-left: 5px;
    }
  }
  &-percentage {
    display: flex;
    flex: 1;
    justify-content: center;
    &-unit {
      margin-left: 5px;
    }
  }
  &-compare {
    display: flex;
    flex: 1;
    // justify-content: center;
    margin-left: 50px;
    &-tb {
      min-width: 30px;
    }
    &-img {
    }
  }
}
.uparrow {
  background: url("@{imgUrl}/list/uparrow.png") no-repeat center center;
  background-size: 100% 100%;
  width: 9px;
  height: 7px;
  margin: 4px 6px 0 6px;
}
.downarrow {
  background: url("@{imgUrl}/list/reddownarrow.png") no-repeat center center;
  background-size: 100% 100%;
  width: 9px;
  height: 7px;
  margin: 4px 6px 0 6px;
}
</style>