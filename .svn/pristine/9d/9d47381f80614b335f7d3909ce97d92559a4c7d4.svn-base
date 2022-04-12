<template>
  <div class="timegene-list">
    <div class="timegene-list-inner" v-for="(item, index) in data" :key="index">
      <div class="timegene-list-inner-business">
        <div class="timegene-list-inner-business-img">{{ index + 1 }}</div>
        <div class="timegene-list-inner-business-area">{{ item.sq }}</div>
      </div>
      <div class="timegene-list-inner-percentage">
        <div class="timegene-list-inner-percentage-name">
          {{ item.upordown }}
        </div>
        <div class="timegene-list-inner-percentage-sum">{{ item.zf }}</div>
        <div class="timegene-list-inner-percentage-unit">{{ item.unit }}</div>
      </div>
      <div class="timegene-list-inner-tb">
        <div class="timegene-list-inner-tb-name">同比</div>
        <div
          class="timegene-list-inner-tb-img"
          :class="[item.tb >= 0 ? 'up' : 'down']"
        ></div>
        <div class="timegene-list-inner-tb-sum">{{Math.abs(item.tb) }}</div>
        <div class="timegene-list-inner-tb-unit">{{ item.cnunit }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "timegene-list",
  props:{
    data:{
      type:Array,
      default:()=>[
        {
          sq: "一城中心",
          zf: 25,
          upordown: "增长",
          unit: "%",
          tb: 6.51,
          cnunit: "个百分点",
        },
        {
          sq: "一城中心",
          zf: 25,
          upordown: "增长",
          unit: "%",
          tb: 6.51,
          cnunit: "个百分点",
        },
        {
          sq: "一城中心",
          zf: 25,
          upordown: "增长",
          unit: "%",
          tb: 6.51,
          cnunit: "个百分点",
        },
        {
          sq: "一城中心",
          zf: 25,
          upordown: "增长",
          unit: "%",
          tb: 6.51,
          cnunit: "个百分点",
        },
        {
          sq: "一城中心",
          zf: 25,
          upordown: "增长",
          unit: "%",
          tb: 6.51,
          cnunit: "个百分点",
        },
      ]
    }
  },
  data() {
    return {
     
    };
  },
  mounted() {},
  methods: {},
};
</script>
<style lang="less" scoped>
@import "../../style/var.less";
.timegene-list {
  font-size: 14px;
  width: 100%;
  padding: 0 10px 10px 10px;
  max-height: 200px;
  overflow: auto;
  &-inner {
    margin: 10px 0 0 0;
    padding: 7px 10px 7px 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 28px;
    background: rgba(37, 181, 255, 0.05);
    &-business,
    &-tb,
    &-percentage {
      display: flex;
      align-items: center;
      flex:1
    }
        &-tb {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      flex:1.1
    }
    &-percentage{
       flex:0.8;
      justify-content: center;
    }
    &-business {
      &-area {
        margin-left: 5px;
      }
      &-img {
        width: 24px;
        height: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 10px;
        background: url("@{imgUrl}/timegenetitle/timegene-rank.png") center
          center no-repeat;
      }
    }
    &-percentage {
      &-name{
        flex: 0.8;
        text-align: right;
        
      }
      &-sum {
        flex: 0.8;

        margin: 0 5px 0 0px;
        text-align: right
      }
      &-unit{
        flex: 1;
      }
    }
    &-tb {
      &-img {
        width: 13px;
        height: 9px;
        margin: 0 5px 0 5px;        
      }
      &-sum{
        text-align: right;
        width: 35px;
        margin-right: 3px;
      }
      .down {
        background: url("@{imgUrl}/list/reddownarrow.png") center center no-repeat;
        background-size: 100% 100%;
      }
      .up {
        background: url("@{imgUrl}/list/uparrowbig.png") center center no-repeat;
        background-size: 100% 100%;
      }
    }
  }
}
</style>