<template>
  <base-container :left="20" :right="20">
    <div slot="left" class="analysis-left">
      <subtitle title="城市经济发展电力支撑情况" class="l-mt-12"></subtitle>
      <div class="analysis-left-title">
        <analysis-radar-title
          class="l-flex l-mr-7"
          content1="用电量与GDP变化趋势"
          :showCity="true"
        ></analysis-radar-title>
        <button-tab
          class="l-ml-108"
          v-model="tabData.value"
          :data="tabData.data"
          @change="usageChange"
          size="small"
        ></button-tab>
      </div>
      <power-usage-season-chart
        v-if="usage === 'season'"
        :Xdata="Xdata"
        :powerData="powerData"
        :gdpData="gdpData"
      ></power-usage-season-chart>
      <power-usage-chart
        v-else
        :Xdata="Xdata"
        :powerData="powerData"
        :gdpData="gdpData"
      ></power-usage-chart>
      <statistics-gdp
        :data="statisticsData"
        @onChangeData="onStatistics"
      ></statistics-gdp>
      <analysis-line class="l-mt-25"></analysis-line>
      <analysis-radar-title
        content1="每度电支撑GDP趋势"
        :showCity="true"
        class="l-mt-20 l-flex"
      ></analysis-radar-title>
      <power-support-gdp-chart
        :predict="predictData"
        :realData="realData"
        :Xdata="supportData"
      ></power-support-gdp-chart>
      <support-title @onClick="onVisibleClick"></support-title>
      <support-content :data="supportContentData.data"></support-content>
      <analysis-line class="l-mt-30 l-mb-20"></analysis-line>
      <analysis-radar-title
        content1="主要城市每度电支撑GDP对标"
        :showCity="true"
        class="l-flex"
      ></analysis-radar-title>
      <urban-degree-gdp-chart
        :shData="shData"
        :szData="szData"
        :bjData="bjData"
        :gzData="gzData"
        :Xdata="urban"
      ></urban-degree-gdp-chart>
    </div>
    <div>
      <analysis-titel class="l-mt-20"></analysis-titel>
      <analysis-content :data="analysisVal" class="l-mt-20"></analysis-content>
      <analysis-progress
        :percentage="percentage"
        class="l-mt-55"
      ></analysis-progress>
    </div>
    <div slot="right" class="analysis-right">
      <subtitle title="城市经济电力绿色指数" class="l-mt-12"></subtitle>
      <div class="analysis-right-title">
        <analysis-radar-title
          content1="用电量增速与GDP增速变化趋势"
          :showCity="true"
          class="l-flex"
        ></analysis-radar-title>
        <button-tab
          class="l-ml-40"
          v-model="trendData.value"
          :data="trendData.data"
          @change="powerChange"
          size="small"
        ></button-tab>
      </div>
      <power-gdp-trend-season-chart
        :trendGDPData="gdpDataYear"
        :trendPowerData="powerDataYear"
        :powerXData="powerXData"
        gdpName="GDP增速"
        powerName="全社会用电量增速"
        v-if="year === 'season'"
      ></power-gdp-trend-season-chart>
      <power-gdp-trend-chart
        :trendGDPData="gdpDataYear"
        :trendPowerData="powerDataYear"
        :powerXData="powerXData"
        gdpName="GDP增速"
        powerName="全社会用电量增速"
        v-else
      ></power-gdp-trend-chart>
      <analysis-line class="l-pt-20 l-pb-20"></analysis-line>
      <div class="analysis-right-title">
        <analysis-radar-title
          content1="电力消费弹性系数"
          :showCity="true"
          class="l-flex"
        ></analysis-radar-title>
        <button-tab
          class="l-ml-140"
          v-model="coeffentData.value"
          :data="coeffentData.data"
          @change="coefficientChange"
          size="small"
        ></button-tab>
      </div>
      <power-coefficient-chart
        :coefficientData="coefficient"
        :xAxisData="coefficientDate"
        :interval="coefficientInterval"
      ></power-coefficient-chart>
      <power-content :data="coefficientData.data"> </power-content>
      <analysis-line class="l-pt-30 l-pb-20"></analysis-line>
      <analysis-radar-title
        content1="主要城市电力消费弹性系数对标"
        content2="2020年"
        :showCity="true"
        class="l-flex"
      ></analysis-radar-title>
      <div class="power-boxData">
        <power-box
          v-for="item in boxData.data"
          :key="item.index"
          :data="item"
        ></power-box>
      </div>
      <analysis-line class="l-pt-20 l-pb-22"></analysis-line>
      <div class="analysis-right-title">
        <analysis-radar-title
          content1="用电量增速加速与GDP增速加速变化趋势"
          class="l-flex"
          :showCity="true"
        ></analysis-radar-title>
        <button-tab
          v-model="poweData.value"
          :data="poweData.data"
          @change="trendChange"
          size="small"
        ></button-tab>
      </div>
      <power-gdp-trend-season-chart
        :trendGDPData="trendGdpDataYear"
        :trendPowerData="trendPowerDataYear"
        :powerXData="trendXData"
        gdpName="GDP增速加速度"
        powerName="全社会用电量增速加速度"
        v-if="trend === 'season'"
      ></power-gdp-trend-season-chart>
      <power-gdp-trend-chart
        :trendGDPData="trendGdpDataYear"
        :trendPowerData="trendPowerDataYear"
        :powerXData="trendXData"
        gdpName="GDP增速加速度"
        powerName="全社会用电量增速加速度"
        v-else
      ></power-gdp-trend-chart>
      <modeling-popup :visible.sync="visible"></modeling-popup>
    </div>
  </base-container>
</template>
<script>
import powerGdpTrendChart from "@/components/power-gdp-trend-chart";
import analysisRadarTitle from "@/components/analysis-radar-title/analysis-radar-title.vue";
import urbanDegreeGdpChart from "@/components/urban-degree-gdp-chart";
import powerSupportGdpChart from "@/components/power-support-gdp-chart";
import powerUsageChart from "@/components/power-usage-chart";
import statisticsGdp from "@/components/statistics-gdp";
import solidLine from "@/components/solid-line";
import analysisLine from "@/components/analysis-line";
import supportTitle from "@/components/support-title";
import supportContent from "@/components/support-content";
import powerCoefficientChart from "@/components/power-coefficient-chart";
import powerBox from "@/components/power-box";
import analysisTitel from "@/components/analysis-titel";
import analysisContent from "@/components/analysis-content";
import analysisProgress from "@/components/analysis-progress";
import modelingPopup from "@/components/modeling-popup";
import powerContent from "@/components/power-content";
import powerUsageSeasonChart from "@/components/power-usage-season-chart";
import powerGdpTrendSeasonChart from "@/components/power-gdp-trend-season-chart";

import * as api from "@/api/analysis";
export default {
  components: {
    powerGdpTrendChart,
    urbanDegreeGdpChart,
    powerSupportGdpChart,
    powerCoefficientChart,
    powerUsageChart,
    statisticsGdp,
    analysisTitel,
    powerUsageSeasonChart,
    powerGdpTrendSeasonChart,
    analysisLine,
    analysisProgress,
    solidLine,
    powerContent,
    powerBox,
    analysisRadarTitle,
    supportTitle,
    supportContent,
    analysisContent,
    modelingPopup,
  },
  data() {
    return {
      visible: false,
      power: 1,
      coeffent: 1,
      trendVal: 1,
      usage: "",
      trend: "",
      year: "",
      interval: 0,
      intervalPower: 0,
      coefficientInterval: 0,
      usageInterval: 0,
      yAxisMax: 0.2,
      yAxisMin: -0.1,
      max: 7,
      min: -2,
      max2: 30000,
      max1: 1000,
      dataPeriod: 1,
      analysisVal: {
        value: 3650.82,
        unit: "亿元",
      },
      percentage: 12.8,
      tabData: {
        value: "year",
        data: [
          {
            name: "年",
            value: "year",
          },
          {
            name: "季",
            value: "season",
          },
        ],
      },
      trendData: {
        value: "year",
        data: [
          {
            name: "年",
            value: "year",
          },
          {
            name: "季",
            value: "season",
          },
        ],
      },
      coeffentData: {
        value: "year",
        data: [
          {
            name: "年",
            value: "year",
          },
          {
            name: "季",
            value: "season",
          },
        ],
      },
      poweData: {
        value: "year",
        data: [
          {
            name: "年",
            value: "year",
          },
          {
            name: "季",
            value: "season",
          },
        ],
      },
      supportContentData: {
        value: "",
        data: [
          {
            content:
              "2009年-2014年，由于GDP受国家大力发展新兴高科技产业影响，大幅增加，健康的产业结构使得用电量保持平稳水稳定增长，所以每度电支撑GDP增速较快。",
          },
          {
            content:
              "2018年后，由于国家经济发展由粗狂是增长型逐渐转变为追求质量，并且受到碳中和影响，GDP速度放缓，所以每度电支撑GDP增速放缓。",
          },
        ],
      },
      coefficientData: {
        value: "",
        data: [
          {
            content:
              "当电力消费弹性系数小于1，经济往绿色低耗能方向转型。系数越小，代表往绿色经济转型的程度越深。",
          },
          {
            content:
              "深圳电力消费弹性系数长期呈现震荡下行趋势。近十年呈现“N”型。",
          },
          {
            content:
              "为消除个别年份波动性影响，分别考虑2、3、4年均值弹性系数，可以看出，近十年深圳电力弹性系数整体介于0.4-0.6之间，密集区在0.45-0.50左右。",
          },
        ],
      },
      boxData: {
        value: "",
        data: [
          {
            city: "深圳",
            value: 0.35,
          },
          {
            city: "北京",
            value: 0.0,
          },
          {
            city: "上海",
            value: 0.08,
          },
          {
            city: "广州",
            value: 0.28,
          },
          {
            city: "洛杉矶",
            value: 0.49,
          },
        ],
      },
      Xdata: [],
      urban: [],
      shData: [],
      szData: [],
      bjData: [],
      gzData: [],
      trendXData: [],
      supportData: [],
      predictData: [],
      realData: [],
      trendGdpData: [],
      trendPowerData: [],
      gdpData: [],
      powerData: [],
      coefficient: [],
      coefficientDate: [],
      usagePower: {},
      usageXAxisData: [],
      xAxisTrendData: [],
      xAxisPowerData: [],
      statisticsData: {},
      statisticsData1: {
        year: "2020年",
        name: "每度电支撑GDP",
        value: 3.12,
        unit: "元/度",
        tb: "2.32",
      },
      statisticsData2: {
        year: "2020年",
        name: "单位GDP电耗",
        value: 0.32,
        unit: "度/元",
        tb: "2.32",
      },
      trendGdpDataYear: [
        -0.191593916, -0.283172189, -0.024221075, -0.204236166, -0.046245786,
        0.248057155, 0.028262448, -0.319916797, -0.22930118, -0.580190093,
      ],
      yearData: [
        "2011",
        "2012",
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
        "2019",
        "2020",
      ],
      seasonData: [
        "2011.1",
        "2011.2",
        "2011.3",
        "2011.4",
        "2012.1",
        "2012.2",
        "2012.3",
        "2012.4",
        "2013.1",
        "2013.2",
        "2013.3",
        "2013.4",
        "2014.1",
        "2014.2",
        "2014.3",
        "2014.4",
        "2015.1",
        "2015.2",
        "2015.3",
        "2015.4",
        "2016.1",
        "2016.2",
        "2016.3",
        "2016.4",
        "2017.1",
        "2017.2",
        "2017.3",
        "2017.4",
        "2018.1",
        "2018.2",
        "2018.3",
        "2018.4",
        "2019.1",
        "2019.2",
        "2019.3",
        "2019.4",
        "2020.1",
        "2020.2",
        "2020.3",
        "2020.4",
        "2021.1",
        "2021.2",
        "2021.3",
      ],
      trendPowerDataYear: [
        -0.631956754, -0.234267218, -0.716526696, 6.599849291, -0.578107155,
        0.279578635, -0.09918848, -0.057069563, 0.966311575, -1.009075793,
      ],
      powerDataYear: [
        0.048933765, 0.037470188, 0.010621798, 0.080724064, 0.034056905,
        0.043578488, 0.039256004, 0.037015681, 0.072784362, -0.000660576,
      ],
      gdpDataYear: [
        0.184103581, 0.131970567, 0.128774098, 0.10247377, 0.09773479,
        0.121978604, 0.125426018, 0.085300128, 0.065740708, 0.027598601,
      ],
      trendGdpDataSeason: [
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        -0.910618946,
        -0.322509831,
        8.427256214,
        -1.19,
        19.79302148,
        0.266396434,
        -0.518304212,
      ],
      trendPowerDataSeason: [
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        3.27312114,
        -1.339160991,
        -0.938022245,
        -0.82330941,
        -3.62103771,
        -6.742123909,
        38.54976385,
      ],
      powerDataSeason: [
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        -0.029287863,
        0.11389917,
        0.063192137,
        0.05958663,
        -0.125150587,
        -0.038630155,
        0.003916507,
        0.010528397,
        0.328024409,
        0.221819139,
        0.15489692,
      ],
      gdpDataSeason: [
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        0.100621712,
        0.103511122,
        0.009668168,
        0.231148599,
        0.008993675,
        0.070127768,
        0.091144296,
        -0.04,
        0.187005669,
        0.088809555,
        0.043903823,
      ],
      coefficientDataYear: [
        0.49, 0.37, 0.1, 0.91, 0.26, 0.47, 0.4, 0.48, 0.94, 0.35,
      ],
      coefficientDataSeason: [
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        -0.291,
        2.347,
        -0.254,
        0.209,
        -13.917,
        0.318,
        0.705,
        -0.735,
        1.754,
        1.777,
        1.575,
      ],
      usagePowerDataYear: [
        696.02, 722.1, 729.77, 788.68, 815.54, 851.08, 884.49, 917.23, 983.99,
        983.34,
      ],
      usageGdpDataYear: [
        11922.81, 13496.27, 15234.24, 16795.35, 18436.84, 20685.74, 23280.27,
        5266.08, 26927.09, 27670.24,
      ],
      usagePowerYearData: {
        usagePowerData: [
          [
            696.02, 722.1, 729.77, 788.68, 815.54, 851.08, 884.49, 917.23,
            983.99, 983.34,
          ],
        ],
        usageGdpData: [
          11922.81, 13496.27, 15234.24, 16795.35, 18436.84, 20685.74, 23280.27,
          5266.08, 26927.09, 27670.24,
        ],
        type: "bar",
        itemStyle: {
          normal: {
            //柱形图圆角，初始化效果
            barBorderRadius: [20, 20, 0, 0],
          },
        },
        barWidth: 5,
        colorPower: "#4FB0D0",
        colorGdp: "#BEEF86",
      },
      usagePowerSeasonData: {
        usagePowerData: [
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          173.6654592,
          366.4096793,
          654.4036883,
          862.3814769,
          168.58,
          408.14,
          695.76,
          913.77,
          147.48,
          392.38,
          698.48,
          923.39,
          195.86,
          479.41,
          806.6744709,
        ],
        usageGdpData: [
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          ,
          3494.42,
          4055.69,
          4826.55,
          5126.33,
          3887.9,
          4720.98,
          5159.48,
          5724.24,
          4584.27,
          5124.75,
          5678.34,
          6577.75,
          5209.81,
          5799.57,
          6492.44,
          6691.28,
          5209.81,
          5799.57,
          6492.44,
          6691.28,
          5785.6,
          6848.7,
          7152.68,
          7883.26,
          6867.54,
          7456.93,
          7466.71,
        ],
        type: "line",
        colorPower: "#4FB0D0",
        colorGdp: "#BEEF86",
      },
    };
  },
  created() {
    this.init();
  },
  watch: {
    dataPeriod() {
      this.queryElectricityAndGgp();
    },
    power() {
      this.queryElectricityAndGdpSpeed();
    },
    coeffent() {
      this.electricityConsumption();
    },
    trendVal() {
      this.queryElectricityAndGdpAcc();
    },
  },
  methods: {
    init() {
      this.initCoefficientData();
      this.initStatistics();
      this.queryElectricityAndGgp();
      this.queryEachElectricitySupportGdp();
      this.queryEachElectricitySupport();
      this.queryCitySupportGdp();
      this.queryElectricityAndGdpSpeed();
      this.electricityConsumption();
      this.cityElectricityConsumption();
      this.queryElectricityAndGdpAcc();
      this.centerNowGdp();
    },
    initCoefficientData() {
      this.coefficient = this.coefficientDataYear;
      this.coefficientDate = this.yearData;
    },
    usageChange(val) {
      this.usage = val;
      if ("season" === val) {
        this.dataPeriod = 2;
      } else {
        this.dataPeriod = 1;
      }
    },
    powerChange(val) {
      this.year = val;
      if ("season" === val) {
        this.power = 2;
      } else {
        this.power = 1;
      }
    },
    coefficientChange(val) {
      if (val === "season") {
        this.coeffent = 2;
        this.coefficient = this.coefficientDataSeason;
        this.coefficientDate = this.seasonData;
        this.coefficientInterval = 4;
      } else {
        this.coefficient = this.coefficientDataYear;
        this.coefficientDate = this.yearData;
        this.coefficientInterval = 0;
        this.coeffent = 2;
      }
    },
    trendChange(val) {
      this.trend = val;
      if (val === "season") {
        this.trendVal = 2;
      } else {
        this.trendVal = 1;
      }
    },
    onVisibleClick() {
      this.visible = true;
    },
    initStatistics() {
      this.statisticsData = this.statisticsData1;
    },
    onStatistics(val) {
      if (val === "每度电支撑GDP") {
        this.statisticsData = this.statisticsData2;
      } else {
        this.statisticsData = this.statisticsData1;
      }
    },
    //用电量与GDP变化趋势
    queryElectricityAndGgp() {
      this.powerData = [];
      this.gdpData = [];
      this.Xdata = [];
      api
        .queryElectricityAndGgp({
          time: "2022-02-16",
          orgCode: "04",
          valueType: 1,
          dataPeriod: this.dataPeriod,
          recordType: 1,
        })
        .then((res) => {
          console.log(res, "13131313131");
          res.forEach((item, index) => {
            this.powerData.push(item.valueOne);
            this.gdpData.push(item.valueTwo);
            this.Xdata.push(item.abscissa);
          });
        });
    },
    //查询去年每度电支撑GDP、同比和单位GDP电耗、同比
    queryEachElectricitySupport() {
      api
        .queryEachElectricitySupport({
          time: "2022-02-16",
          orgCode: "04",
          valueType: 1,
          dataPeriod: 1,
          recordType: 1,
        })
        .then((res) => {
          this.statisticsData1.year = res[0].time;
          this.statisticsData1.value = res[0].eachPowerSupportGdp;
          this.statisticsData1.unit = res[0].eachPowerSupportGdpUnit;
          this.statisticsData1.tb = res[0].eachPowerSupportGdpTb;
          this.statisticsData2.year = res[0].time;
          this.statisticsData2.value = res[0].eachGdpPower;
          this.statisticsData2.unit = res[0].eachGdpPowerUnit;
          this.statisticsData2.tb = res[0].eachGdpPowerTb;
        });
    },
    //2，每度电支撑GDP趋势
    queryEachElectricitySupportGdp() {
      this.supportData = [];
      this.predictData = [];
      this.realData = [];
      api
        .queryEachElectricitySupportGdp({
          time: "2022-02-16",
          orgCode: "04",
          valueType: 1,
          dataPeriod: 1,
          recordType: 1,
        })
        .then((res) => {
          res.forEach((item, index) => {
            this.realData.push(item.valueOne);
            this.predictData.push(item.valueTwo);
            this.supportData.push(item.abscissa);
          });
        });
    },
    //主要城市每度电支撑GDP对标
    queryCitySupportGdp() {
      this.urban = [];
      this.shData = [];
      this.szData = [];
      this.bjData = [];
      this.gzData = [];
      api
        .queryCitySupportGdp({
          time: "2022-02-16",
          orgCode: "04",
          valueType: 1,
          dataPeriod: 1,
          recordType: 1,
        })
        .then((res) => {
          res.forEach((item, index) => {
            this.urban.push(item.abscissa);
            this.shData.push(item.valueOne);
            this.szData.push(item.valueTwo);
            this.bjData.push(item.valueThree);
            this.gzData.push(item.valueFour);
          });
        });
    },
    //用电量增速与GDP增速变化趋势
    queryElectricityAndGdpSpeed() {
      this.powerDataYear = [];
      this.gdpDataYear = [];
      this.powerXData = [];
      api
        .queryElectricityAndGdpSpeed({
          time: "2022-02-16",
          orgCode: "04",
          valueType: 1,
          dataPeriod: this.power,
          recordType: 1,
        })
        .then((res) => {
          res.forEach((item, index) => {
            this.powerDataYear.push(item.valueOne);
            this.gdpDataYear.push(item.valueTwo);
            this.powerXData.push(item.abscissa);
          });
        });
    },
    //电力消费弹性系数
    electricityConsumption() {
      this.coefficient = [];
      this.coefficientDate = [];
      api
        .electricityConsumption({
          time: "2022-02-16",
          orgCode: "04",
          valueType: 1,
          dataPeriod: this.coeffent,
          recordType: 1,
        })
        .then((res) => {
          res.forEach((item, index) => {
            this.coefficient.push(item.valueOne);
            this.coefficientDate.push(item.abscissa);
          });
        });
    },
    // 主要城市电力消费弹性系数对标
    cityElectricityConsumption() {
      api
        .cityElectricityConsumption({
          time: "2020-02-16",
          orgCode: "04",
          valueType: 1,
          dataPeriod: 1,
          recordType: 1,
        })
        .then((res) => {
          this.boxData.data[0].value = res[0].valueOne;
          this.boxData.data[1].value = res[0].valueTwo;
          this.boxData.data[2].value = res[0].valueThree;
          this.boxData.data[3].value = res[0].valueFour;
          this.boxData.data[4].value = res[0].valueFive;
        });
    },
    // 用电量增速加速与GDP增速加速变化趋势
    queryElectricityAndGdpAcc() {
      this.trendXData = [];
      this.trendPowerDataYear = [];
      this.trendGdpDataYear = [];
      api
        .queryElectricityAndGdpAcc({
          time: "2022-02-16",
          orgCode: "04",
          valueType: 1,
          dataPeriod: this.trendVal,
          recordType: 1,
        })
        .then((res) => {
          res.forEach((item, index) => {
            this.trendPowerDataYear.push(item.valueOne);
            this.trendGdpDataYear.push(item.valueTwo);
            this.trendXData.push(item.abscissa);
          });
        });
    },
    centerNowGdp() {
      api
        .centerNowGdp({
          time: "2021-12-16",
          orgCode: "04",
          valueType: 1,
          dataPeriod: 1,
          recordType: 1,
        })
        .then((res) => {
          this.percentage = parseFloat(res[0].valueThree);
          this.analysisVal.value = res[0].valueOne;
        });
    },
  },
};
</script>
<style lang="less" scoped>
.analysis {
  &-left {
    background-color: rgba(30, 55, 81, 0.16);
    height: 97%;
  }
  &-right {
    background-color: rgba(30, 55, 81, 0.16);
    height: 97%;
  }
  &-left-title {
    display: flex;
  }
  &-right-title {
    display: flex;
  }
}
.power-boxData {
  display: flex;
  padding: 10px 0px;
}
</style>