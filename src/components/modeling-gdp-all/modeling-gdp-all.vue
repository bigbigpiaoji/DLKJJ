<template>
  <div class="modeling-gdp-all" style="display: flex; flex-direction: column">
    <div class="boximg-small-title">
      <span class="boximg-small-center">用电量与GDP的关系</span>
    </div>
    <div class="boximg-big" style="flex: 1">
      <div class="boximg-big-line">
        <div class="boximg-big-line-chart">
          <div class="boximg-big-line-chart-title-left">
            <span>GDP、电耗与时间相关性</span>
          </div>
          <div
            style="
              height: 80%;
              margin-left: 50px;
              margin-top: 10px;
              margin-right: 100px;
            "
          >
            <modeling-gdp-time-chart></modeling-gdp-time-chart>
          </div>
        </div>
        <div class="boximg-big-line-chart">
          <div class="boximg-big-line-chart-title">
            <span>GDP与电耗相关性</span>
          </div>
          <div
            style="
              height: 80%;
              margin-left: 20px;
              margin-top: 10px;
              margin-right: 10px;
            "
          >
            <modeling-gdp-power-chart></modeling-gdp-power-chart>
          </div>
        </div>
      </div>
      <div class="boximg-text">
        <div class="boximg-text-small">
          <div class="boximg-text-small-title">分析结论</div>
        </div>
        <div class="boximg-text-content">
          <span
            >根据深圳市2000-2019年，用电总量与GDP数据，拟合上图，模型为指数模型，在可观测时间尺度内，拟合度很高，R²为0.994（准确度直接换成R²），
            可见深圳市用电总量与GDP有强相关性，从图中可见，
            GDP变化量与深圳市用电总量的变化量之比（拟合公式的一阶导数）为指数，
            意味着其斜率与随着时间与用电量的变化而变化，可以推测出，GDP的变化受用电总量影响，
            且影响程度较大，但GDP并不只受用电量影响，单一的从用电量这一指标，无法准确的预测GDP的值。</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import modelingGdpPowerChart from "@/components/modeling-gdp-power-chart";
import modelingGdpTimeChart from "@/components/modeling-gdp-time-chart";
export default {
  components: {
    modelingGdpPowerChart,
    modelingGdpTimeChart,
  },
  name: "modeling-gdp-all",
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
@import "../../style/var.less";
.modeling-gdp-all {
  width: 100%;
  height: 100%;
  padding-top: 20px;
}
.line-block {
  display: flex;
}
.boximg {
  &-small-title {
    margin-left: 19px;
    font-size: 22px;
    font-family: ysbth;
    font-weight: 400;
    color: #ffffff;
    text-shadow: 0px 2px 27px rgba(0, 65, 87, 0.65);
    background: url("@{imgUrl}/model-img/big-title.png") left center no-repeat;
  }

  &-small-center {
    margin-left: 40px;
    line-height: 45px;
  }

  &-big {
    display: flex;
    margin-top: 15px;
    margin-left: 31px;

    &-line {
      width: 66%;
      display: flex;
      background: url("@{imgUrl}/model-img/line-back.png") left center no-repeat;
      background-size: 100% 100%;

      &-chart {
        width: 50%;
        height: 100%;

        &-title {
          margin-top: 20px;
          margin-left: 20px;
          width: 157px;
          height: 15px;
          font-size: 14px;
          font-family: Microsoft YaHei;
          font-weight: bold;
          color: #ffffff 100%;
          opacity: 0.8;
          line-height: 15px;
        }
        &-title-left {
          margin-top: 20px;
          margin-left: 49px;
          width: 157px;
          height: 15px;
          font-size: 14px;
          font-family: Microsoft YaHei;
          opacity: 0.8;
          font-weight: bold;
          color: #ffffff 100%;
          line-height: 15px;
        }
      }
    }
  }

  &-text {
    margin-top: 20px;
    margin-left: 15px;
    width: 34%;

    &-small {
      width: 187px;
      height: 52px;
      background: url("@{imgUrl}/model-img/box.png") center center no-repeat;

      &-title {
        margin-left: 13px;
        text-align: center;
        width: 72px;
        height: 44px;
        font-size: 18px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        opacity: 0.9;
        color: #ffffff;
        line-height: 44px;
      }
    }
    &-content {
      margin-left: 7px;
      margin-right: 90px;
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #c0d5fe;
      opacity: 0.8;
      line-height: 26px;
    }
  }
}
</style>