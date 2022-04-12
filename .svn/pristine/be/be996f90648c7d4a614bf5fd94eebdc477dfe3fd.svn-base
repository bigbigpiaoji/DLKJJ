<template>
  <base-container
    :show-aside-left="false"
    :show-aside-right="false"
    class="secondary"
  >
    <div class="secondary-top">
      <card-wrap class="l-mt-4">
        <subtitle
          title="深圳第二产业用电量与增加值分析"
          size="medium"
        ></subtitle>
        <line-img class="l-mb-10 l-ml-15 l-mr-15"></line-img>
        <div class="l-box">
          <situation :data="analyseData" class="l-flex"></situation>
          <vertical-line class="l-mr-20"></vertical-line>
          <analyse-chart
            :appreciateData="appreciateData"
            :powerData="powerData"
            :Xdata="analyseYearData"
            class="l-flex"
          ></analyse-chart>
          <vertical-line class="l-ml-20 l-mr-20"></vertical-line>
          <contribution-chart
            :Xdata="contributionYearData"
            :appreciateData="contributionAddData"
            :powerData="contributionPowerData"
            class="l-flex"
          ></contribution-chart>
          <vertical-line class="l-ml-20 l-mr-20"></vertical-line>
          <electricity-chart
            :secundiparityData="secundiparityData"
            :industryData="industryData"
            :ManufacturData="ManufacturData"
            :Xdata="electricityData"
            class="l-flex"
          ></electricity-chart>
          <vertical-line class="l-ml-20 l-mr-21"></vertical-line>
          <splashed-chart
            :splashedData="splashedData"
            class="l-flex"
          ></splashed-chart>
        </div>
      </card-wrap>
    </div>
    <div class="secondary-center">
      <indicator-card :data="data.indicatorData"></indicator-card>
    </div>
    <div class="secondary-bottom">
      <card-wrap>
        <subtitle
          title="第二产业各行业用电情况"
          size="medium"
          more="2021-12月当期"
          link="更多详细数据 >"
          @on-link="onLink"
        ></subtitle>
        <line-img class="l-mb-10 l-ml-15 l-mr-15"></line-img>
        <div class="electricity-frame-center">
          <div style="flex: 0.7">
            <white-title title="各区二产用电量情况"></white-title>
            <power-consumption-chart
              :data="consumptionData"
              :height="345"
              class="electricity-frame-center-treemap"
            ></power-consumption-chart>
          </div>
          <vertical-line class="l-ml-20 l-mr-20 l-mt-60"></vertical-line>
          <electricity-highcharts
            :electriHightchartsData="electriHightcharts"
            :growCardData="growCardData"
            style="flex: 0.72"
          ></electricity-highcharts>
          <vertical-line class="l-mr-20 l-mt-60"></vertical-line>
          <div class="electricity-frame-center-rank" style="flex: 0.73">
            <white-title :title="straight.title"></white-title>
            <rank-list :data="straightData.data"></rank-list>
            <white-title :title="minus.title" class="l-mt-20"></white-title>
            <rank-list :data="minusData.data"></rank-list>
          </div>
          <vertical-line class="l-ml-20 l-mr-20 l-mt-60"></vertical-line>
          <div class="" style="flex: 1.5">
            <white-title :title="manufacturin.title"></white-title>
            <rank-list
              :data="manufacturingData.data"
              column-count="2"
            ></rank-list>
          </div>
        </div>
      </card-wrap>
    </div>
  </base-container>
</template>
<script>
import baseFrame from "@/components/base-frame";
import indicatorCard from "@/components/indicator-card";
import electricityFrame from "@/components/electricity-frame";
import analyseContent from "@/components/analyse-content";
import analyseChart from "@/components/analyse-chart";
import contributionChart from "@/components/contribution-chart";
import electricityChart from "@/components/electricity-chart";
import splashedChart from "@/components/splashed-chart";
import analyseTitle from "@/components/analyse-title";
import electricityHighcharts from "@/components/electricity-highcharts";
import powerConsumptionChart from "@/components/power-consumption-chart";
import * as api from "@/api/secondary";
import convertArray from "@/utils/convertArray";
export default {
  components: {
    baseFrame,
    indicatorCard,
    electricityFrame,
    analyseContent,
    analyseChart,
    contributionChart,
    electricityChart,
    splashedChart,
    analyseTitle,
    electricityHighcharts,
    powerConsumptionChart,
  },
  data() {
    return {
      analyseYearData: [],
      appreciateData: [],
      powerData: [],
      splashedData: [],
      contributionAddData: [],
      contributionYearData: [],
      contributionPowerData: [],
      secundiparityData: [],
      industryData: [],
      ManufacturData: [],
      electricityData: [],
      electriHightcharts: [],
      growCardData: [],
      analyseData: {
        title: "发展电力支撑情况",
        content:
          "每度电产生增加值主要分析深圳第二产业、工业、制造业高质量发展情况，根据实际数据情况进行用电发展趋势总结，体现深圳产业升级价值数据。各行业电力支撑与发展趋势情况主要以各细分行业每度电产生增加值与各行业用电增长率分布情况为依据。观察深圳高价值行业发展趋势，当行业往高价值方向转型，且成功则越靠近左上角的点越多。",
      },
      consumptionData: [
        {
          sort: "NO.1",
          value: 230.7984481,
          unit: "亿千瓦时",
          name: "宝安区",
          percentage: 100,
          increment: 30,
        },
        {
          sort: "NO.2",
          value: 150.6233246,
          unit: "亿千瓦时",
          name: "龙岗区",
          percentage: 24,
          increment: 20,
        },
        {
          sort: "NO.3",
          value: 104.7074945,
          unit: "亿千瓦时",
          name: "龙华区",
          percentage: 94,
          increment: 10,
        },
        {
          sort: "NO.4",
          value: 99.93171106,
          unit: "亿千瓦时",
          name: "光明区",
          percentage: 60,
          increment: 14,
        },
        {
          sort: "NO.5",
          value: 87.69119417,
          unit: "亿千瓦时",
          name: "南山区",
          percentage: 17,
          increment: 11,
        },
        {
          sort: "NO.6",
          value: 69.21200851,
          unit: "亿千瓦时",
          name: "福田区",
          percentage: 51,
          increment: 12,
        },
        {
          sort: "NO.7",
          value: 45.45652079,
          unit: "亿千瓦时",
          name: "坪山区",
          percentage: 79,
          increment: -5,
        },
        {
          sort: "NO.8",
          value: 35.08643781,
          unit: "亿千瓦时",
          name: "罗湖区",
          percentage: 78,
          increment: 13,
        },
        {
          sort: "NO.9",
          value: 11.582,
          unit: "亿千瓦时",
          name: "大鹏区",
          percentage: 33,
          increment: 7,
        },
        {
          sort: "NO.10",
          value: 10.24,
          unit: "亿千瓦时",
          percentage: 98,
          name: "盐田区",
          increment: 5,
        },
        {
          sort: "NO.11",
          value: 6.168330984,
          unit: "亿千瓦时",
          percentage: 84,
          name: "深汕区",
          increment: -9,
        },
      ],
      data: {
        indicatorData: [
          {
            name: "用电量",
            time: "2021-12-13",
            value: 984.56,
            degree: "年度",
            unit: "wkW.h",
            compare: 9.4,
          },
          {
            name: "用电增速",
            time: "2021-12-13",
            value: 0.0326,
            degree: "年度",
            unit: "万千瓦时",
            compare: 9.4,
          },
          {
            name: "在营客户数",
            time: "2021-12",
            value: 300.17,
            degree: "当月",
            unit: "万个",
            compare: 9.4,
          },
          {
            name: "增加值",
            time: "2021-09",
            value: 70.32,
            degree: "年度",
            unit: "万亿元",
            compare: 9.4,
          },
          {
            name: "每度电生产增加值",
            time: "2021-09",
            value: 35.32,
            degree: "年度",
            unit: "元/度",
            compare: 9.4,
          },
        ],
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
  created() {
    this.init();
  },
  methods: {
    init() {
      this.queryEventByModuleAndEvent();
      this.queryPowerAndIncrease();
      this.queryContributionRatio();
      this.queryPowerProduceAdd();
      this.queryTradeDevelopTrend();
      this.queryFiveIndex();
      this.queryDistrictPower();
      this.queryIndustryPowerIncrease();
      this.queryMakePowerRanking();
      this.queryIncreaseFast();
    },
    onLink() {
      this.$router.push({
        name: "industrial-secondary-detail",
      });
    },
    // 第二产业发展电力支撑情况
    queryEventByModuleAndEvent() {
      api
        .queryEventByModuleAndEvent({
          moduleTag: "rdsj-myzd-dlfzqk",
        })
        .then((res) => {
          this.analyseData.content = res[0].content;
        });
    },
    // 用电量与增加值变化趋势
    queryPowerAndIncrease() {
      this.analyseYearData = [];
      this.appreciateData = [];
      this.powerData = [];
      api
        .queryPowerAndIncrease({
          valueType: 1,
          recordType: 1,
          dataPeriod: 1,
        })
        .then((res) => {
          res.forEach((item, index) => {
            this.analyseYearData.push(item.valueThree);
            this.appreciateData.push(item.addedValue);
            this.powerData.push(item.electricityConsumption);
          });
        });
    },
    // 贡献比例
    queryContributionRatio() {
      this.contributionAddData = [];
      this.contributionYearData = [];
      this.contributionPowerData = [];
      api
        .queryContributionRatio({
          valueType: 1,
          recordType: 1,
        })
        .then((res) => {
          res.forEach((item, index) => {
            this.contributionAddData.push(item.addedValuePer);
            this.contributionYearData.push(item.valueTwo);
            this.contributionPowerData.push(item.electricityPer);
          });
        });
    },
    // 每度电产生增加值
    queryPowerProduceAdd() {
      this.secundiparityData = [];
      this.industryData = [];
      this.ManufacturData = [];
      this.electricityData = [];
      api
        .queryPowerProduceAdd({
          valueType: 1,
          recordType: 1,
          dataPeriod: 1,
        })
        .then((res) => {
          console.log(res, 321);
          res.forEach((item, index) => {
            this.secundiparityData.push(item.valueMake);
            this.industryData.push(item.valueIndustrial);
            this.ManufacturData.push(item.valueIndustryTwo);
            this.electricityData.push(item.time);
          });
        });
    },
    //   各行业电力支撑与发展趋势情况
    queryTradeDevelopTrend() {
      this.splashedData = [];
      api
        .queryTradeDevelopTrend({
          valueType: 1,
          recordType: 1,
          dataPeriod: 1,
        })
        .then((res) => {
          this.splashedData = convertArray(res, [
            "addValue",
            "electricityConsumption",
          ]);
        });
    },
    // 中间5个卡片指标
    queryFiveIndex() {
      api
        .queryFiveIndex({
          timeOne: "2021-12-01",
          timeTwo: "2021-12-01",
          timeThree: "2021-12-01",
          timeFour: "2021-12-01",
          timeFive: "2021-12-01",
        })
        .then((res) => {
          this.data.indicatorData = (res || []).map((item, idnex) => {
            item.value = item.valueOne;
            item.compare = item.valuesTb;
            item.degree = this.data.indicatorData[idnex].degree;
            item.unit = this.data.indicatorData[idnex].unit;
            item.name = this.data.indicatorData[idnex].name;
            return item;
          });
        });
    },
    // 各区二产用电量情况
    queryDistrictPower() {
      this.consumptionData = [];
      api
        .queryDistrictPower({
          dataPeriod: 3,
          recordType: 1,
          valueType: 2,
          time: "2021-12-12",
        })
        .then((res) => {
          this.consumptionData = (res || []).map((item, index) => {
            item.name = item.valueFive;
            item.value = item.valueOne;
            item.unit = item.valueFour;
            item.percentage = item.valueTwo;
            return item;
          });
        });
    },
    // 行业用电增长情况
    queryIndustryPowerIncrease() {
      this.electriHightcharts = [];
      this.growCardData = [];
      api
        .queryIndustryPowerIncrease({
          dataPeriod: 3,
          recordType: 1,
          valueType: 2,
          time: "2022-02-12",
        })
        .then((res) => {
          this.electriHightcharts = [
            ["正增长", parseFloat(res[0].valueOne)],
            ["负增长", parseFloat(res[2].valueOne)],
          ];
          this.growCardData = res;
        });
    },
    //制造业用电量排名
    queryMakePowerRanking() {
      api
        .queryMakePowerRanking({
          dataPeriod: 3,
          recordType: 1,
          valueType: 2,
          time: "2021-12-12",
        })
        .then((res) => {
          this.manufacturingData.data = (res || []).map((item, idnex) => {
            item.sort = this.manufacturingData.data[idnex].sort;
            item.name = item.valueTwo;
            item.label = item.valueOne + item.dw;
            return item;
          });
        });
    },
    // 正增长最快/负增长最快行业二合一接口
    queryIncreaseFast() {
      api
        .queryIncreaseFast({
          dataPeriod: 3,
          valueType: 2,
          recordType: 1,
          time: "2021-12-12",
          type: 1,
        })
        .then((res) => {
          this.straightData.data = (res || []).map((item, idnex) => {
            item.sort = this.straightData.data[idnex].sort;
            item.name = item.valueOne;
            item.label = "增长 " + item.valueTwo + item.dw;
            return item;
          });
        });

      api
        .queryIncreaseFast({
          dataPeriod: 3,
          valueType: 2,
          recordType: 1,
          time: "2021-12-12",
          type: 2,
        })
        .then((res) => {
          this.minusData.data = (res || []).map((item, idnex) => {
            item.sort = this.straightData.data[idnex].sort;
            item.name = item.valueOne;
            item.label = "增长 " + item.valueTwo + item.dw;
            return item;
          });
        });
    },
  },
};
</script>
<style lang="less">
.secondary {
  .electricity-frame-center-treemap {
    width: 320px;
  }
}
.electricity-frame-center {
  max-height: 385px;
}
</style>