<template>
  <div class="trade-importchartscontent">
    <div class="trade-importchartscontent-inner">
      <div
        class="trade-importchartscontent-inner-timebox"
        v-html="data.time"
      ></div>
      
      <div
        class="trade-importchartscontent-inner-content"
        v-html="data.content"
      ></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "trade-importchartscontent",
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      
    };
  },

};
</script>
<style lang="less" scoped>
@import "../../style/var.less";
.trade-importchartscontent {
  width: 100%;
  margin-top: 25px;
  &-inner {
    display: flex;
    height: 80px;
    background: #152441;

    align-items: center;
    padding: 5px;
    &-timebox {
      width: 60px;
      height: 60px;
      background: url("@{imgUrl}/timegenetitle/timegene-timebox.png") center
        center no-repeat;
      background-size: 100% 100%;
      text-align: center;
      padding: 15px 0 10px 0;
    }
    &-content {
      height: 80px;
      color: #c0d5fe;
      line-height: 24px;
      flex: 1;
      padding: 5px 5px 0px 10px;
      font-size: 14px;
      overflow: auto;
    }
  }
}
</style>