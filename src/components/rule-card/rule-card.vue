<template>
  <div class="rule">
    <div class="rule-card" v-for="item in data" :key="item.id">
      <div class="rule-card-title">
        <div class="rule-card-title-name c-ellipsis" :title="item.name">
          {{ item.name }}
        </div>
        <div class="rule-card-title-time">{{ item.time }}</div>
        <div class="rule-card-title-degree">{{ item.degree }}</div>
      </div>
      <div class="rule-card-content">
        <div class="rule-card-content-value">{{ item.value }}</div>
        <div class="rule-card-content-unit">{{ item.unit }}</div>
        <div class="rule-card-content-tb">
          同比
          <div
            class="rule-card-content-tb-img"
            :class="[item.compare >= 0 ? 'uparrow' : 'downarrow']"
          ></div>
        </div>
        <div class="rule-card-content-compare">
          {{ Math.abs(item.compare) }}%
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "rule-card",
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
.rule {
  display: flex;
  justify-content: space-between;
  &-card {
    background: url("@{imgUrl}/industrial/gszbk.png") no-repeat center center;
    background-size: 100% 100%;
    margin: 10px;
    height: 122px;
    flex: 1;
    &-title {
      display: flex;
      padding: 25px 20px 29px 20px;
      &-name {
        flex: 1;
        font-size: 16px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: #ffffff;
        width: 100px;
      }
      &-time {
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #ffffff;
        margin-right: 10px;
      }
      &-degree {
        text-align: center;
        font-size: 12px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #ffffff;
        width: 33px;
        height: 17px;
        background: #3473e5;
        border-radius: 2px;
        padding: 1px 0;
      }
    }
    &-content {
      display: flex;
      padding: 0 20px 0 20px;
      align-items: baseline;
      &-value {
        font-size: 24px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: #01f1e0;
      }
      &-unit {
        flex: 1;
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #ffffff;
        margin-left: 5px;
      }
      &-tb {
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #ffffff;
        display: flex;
        &-img {
        }
      }
    }
  }
  .uparrow {
    background: url("@{imgUrl}/list/uparrowbig.png") no-repeat center center;
    background-size: 100% 100%;
    width: 14px;
    height: 10px;
    margin: 3px 5px 0 5px;
  }
  .downarrow {
    background: url("@{imgUrl}/list/reddownarrow.png") no-repeat center center;
    background-size: 100% 100%;
    width: 14px;
    height: 10px;
    margin: 3px 5px 0 5px;
  }
}
</style>