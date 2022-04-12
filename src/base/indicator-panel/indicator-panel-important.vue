<template>
  <div class="indicator-panel">
    <div class="indicator-panel-head">
      <div class="indicator-panel-name">{{name}}</div>
    </div>
    <div class="indicator-panel-body">
      <div>
        <div class="indicator-panel-num">
          <div class="indicator-panel-value">{{value}}</div>
          <div class="cell">{{unit}}</div>
        </div>

        <trend size="14"
               :value="percent"
               class="l-mt-8"></trend>
      </div>

      <div class="container-right">
        <div class="box-items l-pl-33">
          <div class="title-label">{{importData.name}}</div>
          <div class="number">{{importData.value}}
            <span class="small-cell">{{importData.cell}}</span>
            <trend size="14"
                   :value="importData.rate"
                   :unit="importData.unit"
                   class="l-ml-30 rate"></trend>
          </div>
          <!-- <trend size="14"
                 :value="percent"></trend> -->
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'indicator-panel-important',
  props: {
    name: {
      type: String,
      default: '深圳重点片区用电增长均衡度',
    },
    value: {
      type: Number,
      default: 0.61,
    },
    percent: {
      type: Number,
      default: 2.32,
    },
    unit: {
      type: String,
      default: '%'
    },
    importData: {
      type: Object,
      default: {
        name: '重点片区总数',
        value: 1256,
        unit: '个',
        rate: 2,
      },
    },
  },
}
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
    // width: 114px;
    padding-right: 20px;
  }
  & .cell {
    font-size: 14px;
    font-family: "Microsoft YaHei";
    font-weight: 400;
    color: #ffffff;
    line-height: 25px;
    padding-left: 5px;
  }
  & .container-right {
    width: 100%;
  }
  &-body {
    display: flex;
  }
  &-name {
    font-family: 'ysbth';
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
    & .title-label {
      font-size: 14px;
      padding-bottom: 20px;
      font-weight: bold;
      color: #ffffff;
    }
    & .number {
      display: flex;
      font-size: 24px;
      font-family: Impact;
      font-weight: 400;
      color: #ffffff;
      & .small-cell {
        display: inline-block;
        padding-left: 5px;
        padding-top: 4px;
        font-size: 12px;
        color: #fff;
      }
      & .rate {
        font-weight: 400;
        color: #fff;
        font-family: 'Microsoft YaHei';
      }
    }
  }

  & .container-right {
    display: flex;
  }
}
</style>