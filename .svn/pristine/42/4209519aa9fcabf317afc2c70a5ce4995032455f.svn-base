<template>
  <div class="timegene-model">
    <div class="timegene-model-headerimg"></div>
    <div class="timegene-model-bigtitle">{{ bigtitle }}</div>
    <div class="timegene-model-title">
      <div class="timegene-model-title-out">
        <white-title :title="weekTitle"></white-title>
      </div>
      <timegene-line-chart
        class="timegene-line-chart-height"
        v-if="bigtitle === '周末经济'"
        :data="chartsData.weekChartsData"
      ></timegene-line-chart>
      <timegene-sprcharts
        v-else-if="bigtitle === '春节经济'"
        class="timegene-line-chart-height"
        :data="chartsData.sprChartsData"
      ></timegene-sprcharts>
      <timegene-holcharts
        v-else-if="bigtitle === '小长假经济'"
        class="timegene-line-chart-height"
        :data="chartsData.holChartsData"
      ></timegene-holcharts>
      <timegene-content :content="content"></timegene-content>
    </div>
    <div class="timegene-model-titletwo">
      <div class="timegene-model-titletwo-out">
        <white-title :title="sprTitle"></white-title>
      </div>
      <timegene-line-powerchart
        class="timegene-line-chart-height"
        :data="chartsData.powerChartsData[0]"
        v-if="bigtitle === '周末经济'"
      ></timegene-line-powerchart>
      <timegene-line-powerchart
        class="timegene-line-chart-height"
        :data="chartsData.powerChartsData[1]"
        v-else-if="bigtitle === '春节经济'"
      ></timegene-line-powerchart>
      <timegene-line-powerchart
        class="timegene-line-chart-height"
        :data="chartsData.powerChartsData[2]"
        v-else-if="bigtitle === '小长假经济'"
      ></timegene-line-powerchart>
    </div>
    <div class="timegene-model-titlethree">
      <div class="timegene-model-titlethree-out">
        <white-title :title="holTitle"></white-title>
      </div>
      <timegene-list :data="listData"></timegene-list>
    </div>
  </div>
</template>
<script>
export default {
  name: "timegene-model",
  props: {
    bigtitle: {
      type: String,
      default: "",
    },
    content: {
      type: String,
      default:
        "周用电趋势中，周末商业用电和居民用电上升，消费较工作日更为活跃，可通过历年用电增幅趋势查看实体经济活跃情况。受疫情影响，2020年周末商业用电量明显下降，疫情对实体消费业造成巨大打击，居民用电增幅明显上升，显示疫情状态下人们更多的选择减少活动。",
    },
    weekTitle: {
      type: String,
      default: "2021年均一周用电趋势",
    },
    sprTitle: {
      type: String,
      default: "年均周末用电量增幅趋势",
    },
    holTitle: {
      type: String,
      default: "2021年周末商圈用电增幅排行",
    },
    listData: {
      type: Array,
      default: () => [],
    },
    chartsData: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {};
  },

  mounted() {},
};
</script>
<style lang="less" scoped>
@import "../../style/var.less";
.timegene-line-chart-height {
  height: 145px !important;
}
.timegene-model {
  width: 100%;
  height: 100%;
  background: #15294d;
  opacity: 0.8;
  &-bigtitle {
    text-align: center;
    width: 100%;
    color: #00ffea;
    font-family: "ysbth";
    font-weight: 400;
    font-size: 30px;
  }
  &-headerimg {
    width: 100%;
    background: url(/static/img/timegenetitle/holidaygdp-header.png) center 1px
      no-repeat;
    height: 31px;
    background-size: contain;
  }
  &-title {
    padding: 10px  10px 10px 10px;
    &-out {
      padding: 10px;
    }
  }
  &-titletwo {
    padding: 5px  10px 10px 10px;
    &-out {
      padding: 10px;
    }
  }
  &-titlethree {
    padding: 10px 10px 10px 10px;
    &-out {
      padding: 10px;
    }
  }
}
</style>