<template>
  <div class="indicator-panel">
    <div class="indicator-panel-head">
      <div class="indicator-panel-name">{{ name }}</div>
    </div>
    <div class="indicator-panel-body">
      <div>
        <div class="indicator-panel-num">
          <div class="indicator-panel-value">{{ value }}</div>
          <div class="cell">{{ unit }}</div>
        </div>

        <trend size="14" :value="percent" class="l-mt-8"></trend>
      </div>

      <div class="container-right">
        <div
          class="box-items"
          v-for="(item, index) in balanceData"
          :key="index"
        >
          <div class="title-label">{{ item.name }}</div>
          <div class="number">
            {{ item.value }}
            <span class="small-cell">{{ item.unit }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "indicator-panel-balance",
  props: {
    name: {
      type: String,
      default: "深圳企业活跃以上占比",
    },
    value: {
      type: Number,
      default: 72.9,
    },
    percent: {
      type: Number,
      default: -5.68,
    },
    unit: {
      type: String,
      default: "%",
    },
    balanceData: {
      type: Array,
      default: [
        {
          name: "注册企业数",
          value: 1256,
          unit: "万家",
        },
        {
          name: "总部企业",
          value: 1256,
          unit: "家",
        },
        {
          name: "规上企业",
          value: 56,
          unit: "家",
        },
        {
          name: "上市公司",
          value: 10258,
          unit: "家",
        },
      ],
    },
  },
};
</script>

<style lang="less" scoped>
@import "../../style/var.less";
.indicator-panel {
  width: 663px;
  height: 150px;
  padding: 20px;
  overflow: hidden;
  background: url("@{imgUrl}/indicator-panel/card-background.png") center center
    no-repeat;
  background-size: 100% 100%;
  &-num {
    position: relative;
    display: flex;
    align-items: flex-end;
    padding-right: 20px;
  }
  & .cell {
    font-size: 14px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #ffffff;
    line-height: 25px;
  }
  & .container-right {
    width: 100%;
  }
  &-body {
    display: flex;
  }
  &-name {
    font-family: ysbth;
    font-size: 40px;
    color: #fff;
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
  &-num::after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    width: 1px;
    height: 65px;
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.3) 51%,
      rgba(255, 255, 255, 0) 100%
    );
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
  & .box-items {
    display: flex;
    flex-direction: column;
    line-height: 25px;
    width: 100%;
    text-align: center;
    & .title-label {
      font-size: 14px;
      padding-bottom: 20px;
      font-weight: bold;
      color: #ffffff;
    }
    & .number {
      font-size: 24px;
      font-family: Impact;
      font-weight: 400;
      color: #ffffff;
      & .small-cell {
        font-size: 12px;
        color: #fff;
      }
    }
  }

  & .container-right {
    display: flex;
  }
}
</style>