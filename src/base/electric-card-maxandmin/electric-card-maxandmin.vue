<template>
  <div class="maxandmin">
    <div class="maxandmin-max">
      <div class="maxandmin-max-img"></div>
      <div class="maxandmin-max-all">
        <div class="maxandmin-max-all-content">{{data.hightname}}</div>
        <div class="maxandmin-max-all-area">{{data.areapowermax}}</div>
        <div class="maxandmin-max-all-inner">
          <div class="maxandmin-max-all-inner-num">{{data.maxnum}}</div>
          <div class="maxandmin-max-all-inner-unit">{{data.unit}}</div>
        </div>
      </div>
    </div>
    <div class="maxandmin-min">
      <div class="maxandmin-min-img"></div>
      <div class="maxandmin-min-all">
        <div class="maxandmin-min-all-content">{{data.lowname}}</div>
        <div class="maxandmin-min-all-area">{{data.areapowermin}}</div>
        <div class="maxandmin-min-all-inner">
          <div class="maxandmin-min-all-inner-num">{{data.minnum}}</div>
          <div class="maxandmin-min-all-inner-unit">{{data.unit}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "electric-card-maxandmin",
  props: {
    data:{
      type:Object,
      default:()=>{}
    },
  },
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
@import "../../style/var.less";
.maxandmin {
  font-size: 14px;
  width: 272px;
  margin-top: 10px;
  &-max {
    display: flex;
    background-color: rgba(30, 55, 81, 0.26);
    align-items: center;
    padding: 2px 8px 2px 8px;
    margin-bottom: 6px;

    &-img {
      width: 42px;
      height: 26px;
      background: url("@{imgUrl}/eleimg/ele-max.png") center center no-repeat;
      background-size: 100% 100%;
    }
    &-all {
      width: 100%;
      margin-left: 10px;
      display: flex;
      justify-content: space-between;
      &-inner {
        display: flex;
        justify-content: space-between;
        &-num{
            font-weight: bold;
        }
        &-unit{
            margin-left: 5px;
        }
      }
    }
  }
  &-min {
    display: flex;
    background-color: rgba(30, 55, 81, 0.26);
    align-items: center;
    padding: 2px 8px 2px 8px;
    margin-top: 6px;

    &-img {
      width: 42px;
      height: 26px;
      background: url("@{imgUrl}/eleimg/ele-min.png") center center no-repeat;
      background-size: 100% 100%;
    }
        &-all {
      width: 100%;
      margin-left: 10px;
      display: flex;
      justify-content: space-between;
      &-inner {
        display: flex;
        justify-content: space-between;
        &-num{
            font-weight: bold;
        }
        &-unit{
            margin-left: 5px;
        }
      }
    }
  }
}
</style>