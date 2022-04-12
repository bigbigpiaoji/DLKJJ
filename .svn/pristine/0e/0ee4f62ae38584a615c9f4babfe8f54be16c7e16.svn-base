<template>
  <div class="base-frame">
    <div class="base-frame-top">
      <div class="base-frame-top-left"></div>
      <div class="base-frame-top-right"></div>
    </div>
    <div>
      <analyse-title title="深圳第二产业用电量与增加值分析"></analyse-title>
    </div>
    <div class="base-frame-center">
      <analyse-content :data="data"></analyse-content>
      <vertical-line class="l-ml-20 l-mr-20"></vertical-line>
      <analyse-chart></analyse-chart>
      <vertical-line class="l-ml-20 l-mr-20"></vertical-line>
      <contribution-chart></contribution-chart>
    </div>
    <div class="base-frame-bottom">
      <div class="base-frame-bottom-left"></div>
      <div class="base-frame-bottom-right"></div>
    </div>
  </div>
</template>

<script>
import analyseTitle from "@/components/analyse-title";
import analyseContent from "@/components/analyse-content";
import analyseChart from "@/components/analyse-chart";
import contributionChart from "@/components/contribution-chart";
export default {
  name: "base-frame",
  components: {
    analyseTitle,
    analyseContent,
    analyseChart,
    contributionChart,
  },
  data() {
    return {
      data: {
        title: "发展电力支撑情况",
        content:
          "每度电产生增加值主要分析深圳第二产业、工业、制造业高质量发展情况，根据实际数据情况进行用电发展趋势总结，体现深圳产业升级价值数据。各行业电力支撑与发展趋势情况主要以各细分行业每度电产生增加值与各行业用电增长率分布情况为依据。观察深圳高价值行业发展趋势，当行业往高价值方向转型，且成功则越靠近左上角的点越多。",
      },
    };
  },
};
</script>
<style lang="less">
@import "../../style/var.less";
.base-frame {
  width: 99%;
  height: 316px;
  background: #0e1d38;
  margin-left: 10px;
  margin-top: 20px;
  &-center {
    display: flex;
    padding: 10px 20px;
  }
  &-top {
    display: flex;
    position: relative;
    &-left {
      flex: 1;
      background: url("@{imgUrl}/eleimg/ele-leftmark.png") center center
        no-repeat;
      height: 9px;
      width: 40px;
      position: absolute;
      top: -3px;
      left: -3px;
    }
    &-right {
      background: url("@{imgUrl}/eleimg/ele-rightmark.png") center center
        no-repeat;
      width: 36px;
      height: 9px;
      position: absolute;
      top: -3px;
      right: -3px;
    }
  }
  &-bottom {
    display: flex;
    position: relative;

    &-left {
      flex: 1;
      background: url("@{imgUrl}/eleimg/ele-bottommark.png") center center
        no-repeat;
      height: 9px;
      width: 9px;
      position: absolute;
      top: 15px;
      left: -3px;
    }
    &-right {
      background: url("@{imgUrl}/eleimg/ele-bottommark.png") center center
        no-repeat;
      height: 9px;
      width: 9px;
      position: absolute;
      top: 15px;
      right: -3px;
    }
  }
}
</style>