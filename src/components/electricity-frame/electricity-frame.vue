<template>
  <div class="electricity-frame">
    <div class="electricity-frame-top">
      <div class="electricity-frame-top-left"></div>
      <div class="electricity-frame-top-right"></div>
    </div>
    <div>
      <analyse-title title="第二产业各行业用电情况"></analyse-title>
    </div>
    <div class="electricity-frame-center">
      <power-treemap-chart
        class="electricity-frame-center-treemap"
      ></power-treemap-chart>
      <vertical-line class="l-ml-20 l-mr-20"></vertical-line>
      <electricity-highcharts></electricity-highcharts>
      <vertical-line class="l-ml-20 l-mr-20"></vertical-line>
      <div class="electricity-frame-center-rank">
        <white-title :title="straight.title"></white-title>
        <rank-list :data="straightData.data"></rank-list>
        <white-title :title="minus.title"></white-title>
        <rank-list :data="minusData.data"></rank-list>
      </div>
      <vertical-line class="l-ml-20 l-mr-20"></vertical-line>
      <div class="">
        <white-title :title="manufacturin.title"></white-title>
        <rank-list :data="manufacturingData.data"></rank-list>
      </div>
    </div>
    <div class="electricity-frame-bottom">
      <div class="electricity-frame-bottom-left"></div>
      <div class="electricity-frame-bottom-right"></div>
    </div>
  </div>
</template>

<script>
import analyseTitle from "@/components/analyse-title";
import analyseContent from "@/components/analyse-content";
import analyseChart from "@/components/analyse-chart";
import contributionChart from "@/components/contribution-chart";
import electricityChart from "@/components/electricity-chart";
import splashedChart from "@/components/splashed-chart";
import electricityHighcharts from "@/components/electricity-highcharts";
import powerTreemapChart from "@/components/power-treemap-chart";
export default {
  name: "electricity-frame",
  components: {
    analyseTitle,
    analyseContent,
    analyseChart,
    contributionChart,
    electricityChart,
    splashedChart,
    electricityHighcharts,
    powerTreemapChart,
  },
  data() {
    return {
      data: {
        title: "发展电力支撑情况",
        content:
          "每度电产生增加值主要分析深圳第二产业、工业、制造业高质量发展情况，根据实际数据情况进行用电发展趋势总结，体现深圳产业升级价值数据。各行业电力支撑与发展趋势情况主要以各细分行业每度电产生增加值与各行业用电增长率分布情况为依据。观察深圳高价值行业发展趋势，当行业往高价值方向转型，且成功则越靠近左上角的点越多。",
      },
      straight: { title: "正增长最快行业" },
      minus: { title: "负增长最快行业" },
      manufacturin: { title: "制造业用电量排名" },
      straightData: {
        data: [
          {
            sort: 1,
            name: "医药制造业",
            label: "增长0.2481%",
          },
          {
            sort: 2,
            name: "光伏设备及元器件制造",
            label: "增长0.2373%",
          },
          {
            sort: 3,
            name: "系能源车整车制造",
            label: "增长0.1311%",
          },
          {
            sort: 4,
            name: "铁路.船舶.航空业和其他制造业",
            label: "增长0.1197%",
          },
        ],
      },
      minusData: {
        data: [
          {
            sort: 1,
            name: "化学原料及化学制品制造业",
            label: "增长0.2003%",
          },
          {
            sort: 2,
            name: "文本用品制造业",
            label: "增长0.1782%",
          },
          {
            sort: 3,
            name: "装订及其他印刷服务活动",
            label: "增长0.1295%",
          },
        ],
      },
      manufacturingData: {
        data: [
          {
            sort: 1,
            name: "医药制造业",
            label: "9.37wkW.h",
          },
          {
            sort: 2,
            name: "光伏设备及元器件制造",
            label: "9.01wkW.h",
          },
          {
            sort: 3,
            name: "新能源车整车制造",
            label: "8.75wkW.h",
          },
          {
            sort: 4,
            name: "汽车制造业",
            label: "7.61wkW.h",
          },
          {
            sort: 5,
            name: "通用及专用设备制造业",
            label: "6.92wkW.h",
          },
          {
            sort: 6,
            name: "电器机械及器材制造业",
            label: "5.92wkW.h",
          },
          {
            sort: 7,
            name: "通信设备、计算机及其他制造业",
            label: "4.01wkW.h",
          },
          {
            sort: 8,
            name: "工艺品及其他制造业",
            label: "3.85wkW.h",
          },
          {
            sort: 9,
            name: "应刷和记录媒介的复制",
            label: "3.46wkW.h",
          },
          {
            sort: 10,
            name: "通用及专用设备制造业",
            label: "3.19wkW.h",
          },
          {
            sort: 11,
            name: "电子和电工机械专用设备制造业",
            label: "2.94wkW.h",
          },
          {
            sort: 12,
            name: "电池制造",
            label: "2.74wkW.h",
          },
          {
            sort: 13,
            name: "医疗仪器设备及器械制造",
            label: "2.30wkW.h",
          },
          {
            sort: 14,
            name: "合成纤维制造",
            label: "1.39wkW.h",
          },
          {
            sort: 15,
            name: "中成药制造",
            label: "1.16wkW.h",
          },
          {
            sort: 16,
            name: "纤维素纤维原料及纤维制造",
            label: "0.72wkW.h",
          },
        ],
      },
    };
  },
};
</script>
<style lang="less">
@import "../../style/var.less";
.electricity-frame {
  width: 99%;
  height: 100%;
  background: #0e1d38;
  margin-left: 10px;
  margin-top: 20px;
  &-center {
    display: flex;
    padding: 10px 20px;
    &-treemap {
      width: 392px;
    }
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
      top: -12px;
      left: -3px;
    }
    &-right {
      background: url("@{imgUrl}/eleimg/ele-bottommark.png") center center
        no-repeat;
      height: 9px;
      width: 9px;
      position: absolute;
      top: -12px;
      right: -3px;
    }
  }
}
</style>