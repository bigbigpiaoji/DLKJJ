<template>
  <div class="indicator-panel">
    <div class="indicator-panel-head">
      <div class="indicator-panel-name">
        {{ $attrs.componentsTypeType === 1 ? name2 : name }}
      </div>
    </div>
    <div class="indicator-panel-body">
      <div
        class="indicator-panel-items"
        :style="{ minWidth: minWidth + 'px' }"
        v-for="(item, index) in $attrs.componentsTypeType === 1
          ? condData
          : conditionData"
        :key="index"
      >
        <div>
          <div class="title-type" :class="$attrs.componentsTypeType === 0 ? 'titltype' : ''">{{ item.type }}</div>
          <div class="indicator-panel-num">
            <div
              class="indicator-panel-value"
              :class="$attrs.componentsTypeType === 0 ? 'fontsizechange' : ''"
            >
              {{ item.number }}
            </div>
            <div class="cell">{{ item.unit }}</div>
          </div>
        </div>

        <div
          class="indicator-rate"
          v-show="$attrs.componentsTypeType === 1 ? index === 0 : 1"
        >
          <div class="rate-number">
            {{ item.zb }}<span class="rate-value">{{ item.ratio }}</span>
            {{ item.unit }}
          </div>
          <trend size="14" :value="item.yoy" class="l-mt-8 l-h-15"></trend>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "indicator-panel-condition",
  props: {
    name: {
      type: String,
      default: "深圳产业用电量情况",
    },
    name2: {
      type: String,
      default: "深圳全社会分时用电均衡度",
    },
    value: {
      type: Number,
      default: 0.61,
    },
    percent: {
      type: Number,
      default: 2.32,
    },
    conditionData: {
      type: Array,
      default: [
        {
          type: "第一产业",
          number: 0.61,
          unit: "%",
          ratio: 2.23,
          yoy: 2.23,
        },
        {
          type: "第二产业",
          number: 0.61,
          unit: "%",
          ratio: 2.23,
          yoy: 2.23,
        },
        {
          type: "第三产业",
          number: 0.61,
          unit: "%",
          ratio: 2.23,
          yoy: 2.23,
        },
      ],
    },
    condData: {
      type: Array,
      default: [],
    },

    // 默认为0的时候代表产业用电量情况，联动8请传参数为1传值过来
    compomentsType: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    minWidth() {
      if (this.$attrs.componentsTypeType == 1) {
        return 122;
      } else {
        return 222;
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "../../style/var.less";
.indicator-panel {
  width: auto;
  height: 150px;
  display: inline-block;

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
    font-size: 12px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #ffffff;
    line-height: 25px;
  }
  & .container-right {
    width: 100%;
  }
  &-items {
    min-width: 222px;
    padding-left: 10px;
    display: flex;
    position: relative;
  }
  &-items:first-child {
    padding-left: 0;
    min-width: 222px !important;
  }
  &-body {
    display: flex;
    height: 65px;

    & .indicator-rate {
      display: flex;
      flex-direction: column;
      // justify-content: flex-start;
      & .rate-number {
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #ffffff;
        margin-bottom: 25px;
        line-height: 15px;
      }
      & .l-h-15 {
        line-height: 15px;
      }
    }

    & .title-type {
      font-size: 16px;
      font-family: Microsoft YaHei;
      font-weight: bold;
      color: #ffffff;
      margin-bottom: 4px;
    }
  }
  &-name {
    font-family: ysbth;
    font-size: 36px;
    color: #fff;
    margin-bottom: 5px;
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
  &-items::after {
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
  &-items:last-child:after {
    display: none;
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
        font-size: 12px;
        color: #fff;
      }
      & .rate {
        font-weight: 400;
        color: #fff;
        font-family: Microsoft YaHei;
      }
    }
  }

  & .container-right {
    display: flex;
  }
  & .indicator-panel-num {
    padding-right: 10px;
  }
}
.indicator-panel-items:nth-child(2)
  div
  .indicator-panel-num
  .indicator-panel-value,
.indicator-panel-items:nth-child(3)
  div
  .indicator-panel-num
  .indicator-panel-value {
  font-size: 24px;
  font-weight: normal;
  color: #fff;
  font-family: Impact;
  background: linear-gradient(0deg, #ffffff 0%, #ffffff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: 15px;
}
.fontsizechange {
  font-size: 40px !important;
  font-weight: normal !important;
  color: #fff !important;
  font-family: Impact !important;
  background: linear-gradient(0deg, #7fbaf4 0%, #ffffff 100%) !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
   margin-top: 0 !important ;
}

.indicator-panel-items:nth-child(2)
  div
.title-type
,
.indicator-panel-items:nth-child(3)
  div
.title-type
{
      font-size: 14px;
      font-family: Microsoft YaHei;     
      color: #ffffff;
      font-weight: 400;
      margin-bottom: 4px;
    }
.titltype{
        font-size: 16px !important;
      font-family: Microsoft YaHei !important;     
      color: #ffffff !important;
      font-weight: bold !important;
      margin-bottom: 4px !important;
}

</style>