<template>
  <base-container :show-aside-left="false" :aside-left-width="300">
    <div class="rule-industry">
      <rule-card :data="indicatorData.data" class="l-mt-9"></rule-card>
      <div class="rule-industry-wrap">
        <card-wrap>
          <subtitle
            title="企业生产运行情况"
            size="medium"
            more="截止2021-1-25"
          ></subtitle>
          <line-img class="l-mr-15 l-ml-15"></line-img>
          <statistical-strip :data="statisticalData"></statistical-strip>
          <div class="rule-industry-wrap-title">
            <white-title
              title="规上工业企业生产运行情况"
              class="l-ml-20 l-flex"
            ></white-title>
            <button-tab
              v-model="stripData.value"
              :data="stripData.data"
              @change="stripChange"
              size="small"
              class="l-mr-8"
            ></button-tab>
          </div>
          <statistical-strip-chart
            :Ydata="aa"
            :Xdata="bb"
            :interval="stripInt"
            :data="tb"
          ></statistical-strip-chart>
        </card-wrap>
        <card-wrap class="l-flex">
          <subtitle
            title="企业活跃度情况"
            more="截止2021-12"
            size="medium"
          ></subtitle>
          <line-img class="l-mr-15 l-ml-15"></line-img>
          <div class="rule-industry-wrap-enterprises">
            <div class="l-flex">
              <active-enterprises
                :data="rateData"
                class="l-ml-7"
              ></active-enterprises>
              <div class="rule-industry-wrap-title">
                <white-title
                  title="规上工业整体用电增速"
                  class="l-ml-20 l-flex"
                ></white-title>
                <button-tab
                  v-model="industrialData.value"
                  :data="industrialData.data"
                  @change="rateChange"
                  size="small"
                  class="l-mr-7"
                ></button-tab>
              </div>
              <industrial-rate-chart
                :Ydata="cc"
                :Xdata="dd"
              ></industrial-rate-chart>
            </div>
            <div class="l-flex">
              <active-enterprises :data="proportionData"></active-enterprises>
              <div class="rule-industry-wrap-title">
                <white-title
                  title="企业活跃度占比情况-12月"
                  class="l-ml-10"
                ></white-title>
              </div>
              <div class="rule-industry-wrap-img">
                <proportion-situation
                  :data="situationData"
                ></proportion-situation>
                <brisk-ratio :data="briskData.data"></brisk-ratio>
              </div>
            </div>
          </div>
        </card-wrap>
      </div>
      <card-wrap class="card-wrap-white">
        <subtitle
          title="规上工业行业发展情况"
          more="截止2021-12"
          size="medium"
        ></subtitle>
        <line-img class="l-mr-15 l-ml-15"></line-img>
        <div class="card-wrap-subtitle l-flex">
          <div class="">
            <white-title
              :title="titleData.title"
              class="l-mt-20 l-ml-10"
            ></white-title>
            <div class="l-box">
              <consumption-highcharts
                :consumption="yearData"
                :highchartsData="highchartsData"
                content="本年数据"
              ></consumption-highcharts>
              <consumption-highcharts
                :consumption="averageData"
                :highchartsData="consumptionData"
                content="2年平均"
              ></consumption-highcharts>
            </div>
          </div>
          <vertical-line class="l-ml-20 l-mt-60 l-mr-10"></vertical-line>
          <div class="l-box" style="width: 340px">
            <div class="" style="width: 95%">
              <white-title
                title="用电量构成与增长情况"
                class="l-ml-20 l-mt-20"
              ></white-title>
              <power-treemap-chart
                class="power-treemap"
                :height="326"
                :data="treemapData"
              ></power-treemap-chart>
            </div>
          </div>
          <vertical-line class="l-ml-20 l-mr-20 l-mt-60"></vertical-line>
          <div class="white-pagination l-mr-20 l-flex">
            <white-title
              title="39大类行业用电增速与增加值情况"
              class="l-mt-20 l-mb-18"
            ></white-title>
            <table-pagination
              class="dark-table l-full"
              :has-pagination="false"
              :height="286"
              size="mini"
              border
              :row-class-name="rowClass"
              :columns="table.columns"
              :data="table.data"
            ></table-pagination>
          </div>
        </div>
      </card-wrap>
    </div>
    <div slot="right">
      <rank-head
        name="规上企业生产排名"
        label="2021-12月当期"
        class="l-mt-17"
      ></rank-head>
      <div class="dark-panel-bg">
        <tab-menu
          :data="rankMenu.data"
          v-model="rankMenu.value"
          @selectedTab="onRankChange"
          class="l-pt-30"
        ></tab-menu>
        <rank-list :data="rankList"></rank-list>
      </div>
    </div>
  </base-container>
</template>

<script>
import powerTreemapChart from "@/components/power-treemap-chart";
import indicatorCard from "@/components/indicator-card";
import statisticalStrip from "@/components/statistical-strip";
import statisticalStripChart from "@/components/statistical-strip-chart";
import activeEnterprises from "@/components/active-enterprises";
import industrialRateChart from "@/components/industrial-rate-chart";
import proportionSituation from "@/components/proportion-situation";
import briskRatio from "@/components/brisk-ratio";
import consumptionHighcharts from "@/components/consumption-highcharts";
import ruleCard from "@/components/rule-card";
import * as api from "@/api/rule-industry";
export default {
  components: {
    powerTreemapChart,
    indicatorCard,
    statisticalStrip,
    statisticalStripChart,
    activeEnterprises,
    industrialRateChart,
    proportionSituation,
    briskRatio,
    consumptionHighcharts,
    ruleCard,
  },
  data() {
    return {
      style: 1,
      byTime: 4,
      stripInt: 5,
      typeVal: 1,
      periodData: 3,
      yearData: [],
      averageData: [],
      highchartsData: [],
      consumptionData: [],
      tb: [],
      statisticalData: {},
      treemapData: [
        {
          value: 230.7984481,
          unit: "亿千瓦时",
          name: "宝安区",
          percentage: 8,
          increment: 30,
        },
        {
          value: 230.7984481,
          unit: "亿千瓦时",
          name: "宝安区",
          percentage: 8,
          increment: 30,
        },
        {
          value: 150.6233246,
          unit: "亿千瓦时",
          name: "龙岗区",
          percentage: 7,
          increment: 20,
        },
        {
          value: 104.7074945,
          unit: "亿千瓦时",
          name: "龙华区",
          percentage: 6,
          increment: 10,
        },
        {
          value: 99.93171106,
          unit: "亿千瓦时",
          name: "光明区",
          percentage: 5,
          increment: 14,
        },
        {
          value: 87.69119417,
          unit: "亿千瓦时",
          name: "南山区",
          percentage: 1,
          increment: 11,
        },
        {
          value: 69.21200851,
          unit: "亿千瓦时",
          name: "福田区",
          percentage: 1,
          increment: 12,
        },
        {
          value: 45.45652079,
          unit: "亿千瓦时",
          name: "坪山区",
          percentage: 6,
          increment: -5,
        },
        {
          value: 35.08643781,
          unit: "亿千瓦时",
          name: "罗湖区",
          percentage: 5,
          increment: 13,
        },
        {
          value: 11.58208233,
          unit: "亿千瓦时",
          name: "大鹏区",
          percentage: 3,
          increment: 7,
        },
        {
          value: 10.24781122,
          unit: "亿千瓦时",
          percentage: 2,
          name: "盐田区",
          increment: 5,
        },
        {
          value: 6.168330984,
          unit: "亿千瓦时",
          percentage: 3,
          name: "深汕区",
          increment: -9,
        },
        {
          value: 230.7984481,
          unit: "亿千瓦时",
          name: "宝安区",
          percentage: 1,
          increment: 30,
        },
        {
          value: 150.6233246,
          unit: "亿千瓦时",
          name: "龙岗区",
          percentage: 50.0,
          increment: 20,
        },
        {
          value: 104.7074945,
          unit: "亿千瓦时",
          name: "龙华区",
          percentage: 4,
          increment: 10,
        },
        {
          value: 99.93171106,
          unit: "亿千瓦时",
          name: "光明区",
          percentage: 9,
          increment: 14,
        },
        {
          value: 87.69119417,
          unit: "亿千瓦时",
          name: "南山区",
          percentage: 8,
          increment: 11,
        },
        {
          value: 69.21200851,
          unit: "亿千瓦时",
          name: "福田区",
          percentage: 8,
          increment: 12,
        },
        {
          value: 45.45652079,
          unit: "亿千瓦时",
          name: "坪山区",
          percentage: 8,
          increment: -5,
        },
        {
          value: 35.08643781,
          unit: "亿千瓦时",
          name: "罗湖区",
          percentage: 8,
          increment: 13,
        },
        {
          value: 11.58208233,
          unit: "亿千瓦时",
          name: "大鹏区",
          percentage: 2,
          increment: 7,
        },
        {
          value: 10.24781122,
          unit: "亿千瓦时",
          percentage: 7,
          name: "盐田区",
          increment: 5,
        },
        {
          value: 6.168330984,
          unit: "亿千瓦时",
          percentage: 3,
          name: "深汕区",
          increment: -9,
        },
        {
          value: 6.168330984,
          unit: "亿千瓦时",
          percentage: 4,
          name: "深汕区",
          increment: -9,
        },
        {
          value: 6.168330984,
          unit: "亿千瓦时",
          percentage: 6,
          name: "深汕区",
          increment: -9,
        },
        {
          value: 6.168330984,
          unit: "亿千瓦时",
          percentage: 6,
          name: "深汕区",
          increment: -9,
        },
        {
          value: 6.168330984,
          unit: "亿千瓦时",
          percentage: 6,
          name: "深汕区",
          increment: -9,
        },
        {
          value: 6.168330984,
          unit: "亿千瓦时",
          percentage: 6,
          name: "深汕区",
          increment: -9,
        },
        {
          value: 6.168330984,
          unit: "亿千瓦时",
          percentage: 6,
          name: "深汕区",
          increment: -9,
        },
        {
          value: 6.168330984,
          unit: "亿千瓦时",
          percentage: 6,
          name: "深汕区",
          increment: -9,
        },
      ],
      table: {
        columns: [
          {
            label: "排名",
            prop: "sort",
            width: 50,
            headerAlign: "center",
            align: "center",
            showOverflowTooltip: true,
            // fixed: true,
          },
          {
            label: "行业",
            prop: "industry",
            // width: 160,
            headerAlign: "center",
            align: "center",
            showOverflowTooltip: true,
          },
          {
            label: "用电增速",
            prop: "powerSpeed",

            // width: 110,
            headerAlign: "center",
            align: "center",
            showOverflowTooltip: true,
          },
          {
            label: "同比",
            prop: "compare",
            width: 100,
            headerAlign: "center",
            align: "center",
            showOverflowTooltip: true,
          },
          {
            label: "单位增加值电耗",
            prop: "spend",
            width: 110,
            headerAlign: "center",
            align: "center",
            showOverflowTooltip: true,
          },
          {
            label: "同比",
            prop: "areaCompare",
            width: 70,
            headerAlign: "center",
            align: "center",
            showOverflowTooltip: true,
          },
        ],
        data: [
          {
            sort: 1,
            industry: "医药制造业",
            powerSpeed: "-0.34%",
            compare: "3.21个百分点",
            spend: "0.339%",
            areaCompare: "-0.34%",
          },
          {
            sort: 2,
            industry: "医药制造业",
            powerSpeed: "-0.34%",
            compare: "3.21个百分点",
            spend: "0.339%",
            areaCompare: "-0.34%",
          },
          {
            sort: 3,
            industry: "医药制造业",
            powerSpeed: "-0.34%",
            compare: "3.21个百分点",
            spend: "0.339%",
            areaCompare: "-0.34%",
          },
          {
            sort: 4,
            industry: "医药制造业",
            powerSpeed: "-0.34%",
            compare: "3.21个百分点",
            spend: "0.339%",
            areaCompare: "-0.34%",
          },
          {
            sort: 5,
            industry: "医药制造业",
            powerSpeed: "-0.34%",
            compare: "3.21个百分点",
            spend: "0.339%",
            areaCompare: "-0.34%",
          },
          {
            sort: 6,
            industry: "医药制造业",
            powerSpeed: "-0.34%",
            compare: "3.21个百分点",
            spend: "0.339%",
            areaCompare: "-0.34%",
          },
          {
            sort: 7,
            industry: "医药制造业",
            powerSpeed: "-0.34%",
            compare: "3.21个百分点",
            spend: "0.339%",
            areaCompare: "-0.34%",
          },
          {
            sort: 8,
            industry: "医药制造业",
            powerSpeed: "-0.34%",
            compare: "3.21个百分点",
            spend: "0.339%",
            areaCompare: "-0.34%",
          },
          {
            sort: 9,
            industry: "医药制造业",
            powerSpeed: "-0.34%",
            compare: "3.21个百分点",
            spend: "0.339%",
            areaCompare: "-0.34%",
          },
          {
            sort: 10,
            industry: "医药制造业",
            powerSpeed: "-0.34%",
            compare: "3.21个百分点",
            spend: "0.339%",
            areaCompare: "-0.34%",
          },
          {
            sort: 11,
            industry: "医药制造业",
            powerSpeed: "-0.34%",
            compare: "3.21个百分点",
            spend: "0.339%",
            areaCompare: "-0.34%",
          },
          {
            sort: 12,
            industry: "医药制造业",
            powerSpeed: "-0.34%",
            compare: "3.21个百分点",
            spend: "0.339%",
            areaCompare: "-0.34%",
          },
          {
            sort: 13,
            industry: "医药制造业",
            powerSpeed: "-0.34%",
            compare: "3.21个百分点",
            spend: "0.339%",
            areaCompare: "-0.34%",
          },
          {
            sort: 14,
            industry: "医药制造业",
            powerSpeed: "-0.34%",
            compare: "3.21个百分点",
            spend: "0.339%",
            areaCompare: "-0.34%",
          },
          {
            sort: 15,
            industry: "医药制造业",
            powerSpeed: "-0.34%",
            compare: "3.21个百分点",
            spend: "0.339%",
            areaCompare: "-0.34%",
          },
          {
            sort: 16,
            industry: "医药制造业",
            powerSpeed: "-0.34%",
            compare: "3.21个百分点",
            spend: "0.339%",
            areaCompare: "-0.34%",
          },
          {
            sort: 17,
            industry: "医药制造业",
            powerSpeed: "-0.34%",
            compare: "3.21个百分点",
            spend: "0.339%",
            areaCompare: "-0.34%",
          },
          {
            sort: 18,
            industry: "医药制造业",
            powerSpeed: "-0.34%",
            compare: "3.21个百分点",
            spend: "0.339%",
            areaCompare: "-0.34%",
          },
          {
            sort: 19,
            industry: "医药制造业",
            powerSpeed: "-0.34%",
            compare: "3.21个百分点",
            spend: "0.339%",
            areaCompare: "-0.34%",
          },
          {
            sort: 20,
            industry: "医药制造业",
            powerSpeed: "-0.34%",
            compare: "3.21个百分点",
            spend: "0.339%",
            areaCompare: "-0.34%",
          },
          {
            sort: 21,
            industry: "医药制造业",
            powerSpeed: "-0.34%",
            compare: "3.21个百分点",
            spend: "0.339%",
            areaCompare: "-0.34%",
          },
          {
            sort: 22,
            industry: "医药制造业",
            powerSpeed: "-0.34%",
            compare: "3.21个百分点",
            spend: "0.339%",
            areaCompare: "-0.34%",
          },
          {
            sort: 23,
            industry: "医药制造业",
            powerSpeed: "-0.34%",
            compare: "3.21个百分点",
            spend: "0.339%",
            areaCompare: "-0.34%",
          },
          {
            sort: 24,
            industry: "医药制造业",
            powerSpeed: "-0.34%",
            compare: "3.21个百分点",
            spend: "0.339%",
            areaCompare: "-0.34%",
          },
          {
            sort: 25,
            industry: "医药制造业",
            powerSpeed: "-0.34%",
            compare: "3.21个百分点",
            spend: "0.339%",
            areaCompare: "-0.34%",
          },
          {
            sort: 26,
            industry: "医药制造业",
            powerSpeed: "-0.34%",
            compare: "3.21个百分点",
            spend: "0.339%",
            areaCompare: "-0.34%",
          },
          {
            sort: 27,
            industry: "医药制造业",
            powerSpeed: "-0.34%",
            compare: "3.21个百分点",
            spend: "0.339%",
            areaCompare: "-0.34%",
          },
          {
            sort: 28,
            industry: "医药制造业",
            powerSpeed: "-0.34%",
            compare: "3.21个百分点",
            spend: "0.339%",
            areaCompare: "-0.34%",
          },
          {
            sort: 29,
            industry: "医药制造业",
            powerSpeed: "-0.34%",
            compare: "3.21个百分点",
            spend: "0.339%",
            areaCompare: "-0.34%",
          },
          {
            sort: 30,
            industry: "医药制造业",
            powerSpeed: "-0.34%",
            compare: "3.21个百分点",
            spend: "0.339%",
            areaCompare: "-0.34%",
          },
        ],
      },
      rankMenu: {
        value: "electricity-consumption",
        data: [
          {
            name: "按用电量",
            value: "electricity-consumption",
          },
          {
            name: "按用电增长",
            value: "electricity-growth",
          },
        ],
      },
      rankList: [
        {
          sort: 1,
          name: "富士康工业互联网股份有限公司",
          label: "XX.XX万千瓦时",
        },
        {
          sort: 2,
          name: "立讯精密工业股份有限公司",
          label: "XX.XX万千瓦时",
        },
        {
          sort: 3,
          name: "欣旺达电子股份有限公司",
          label: "XX.XX万千瓦时",
        },
        {
          sort: 4,
          name: "深圳迈瑞生物以来电子股份有限公司",
          label: "XX.XX万千瓦时",
        },
        {
          sort: 5,
          name: "深圳德赛电子池科技股份有限公司",
          label: "XX.XX万千瓦时",
        },
        {
          sort: 6,
          name: "广深铁路股份有限公司",
          label: "XX.XX万千瓦时",
        },
        {
          sort: 7,
          name: "深圳市燃气集团股份有限公司",
          label: "XX.XX万千瓦时",
        },
        {
          sort: 8,
          name: "华润三九医药股份有限公司",
          label: "XX.XX万千瓦时",
        },
        {
          sort: 9,
          name: "深圳市长盛精密技术股份有限公司",
          label: "XX.XX万千瓦时",
        },
        {
          sort: 10,
          name: "深圳市得润电子股份有限公司",
          label: "XX.XX万千瓦时",
        },
        {
          sort: 11,
          name: "深圳市景旺电子股份有限公司",
          label: "XX.XX万千瓦时",
        },
        {
          sort: 12,
          name: "深圳市信维通信股份有限公司",
          label: "XX.XX万千瓦时",
        },
        {
          sort: 13,
          name: "深圳沃尔核材股份有限公司",
          label: "XX.XX万千瓦时",
        },
        {
          sort: 14,
          name: "深圳顺络电子股份有限公司",
          label: "XX.XX万千瓦时",
        },
        {
          sort: 15,
          name: "深圳市机场股份有限公司",
          label: "XX.XX万千瓦时",
        },
        {
          sort: 16,
          name: "电连技术股份有限公司",
          label: "XX.XX万千瓦时",
        },
        {
          sort: 17,
          name: "深圳市聚飞光电股份有限公司",
          label: "XX.XX万千瓦时",
        },

        {
          sort: 18,
          name: "深圳市禾望电气股份有限公司",
          label: "XX.XX万千瓦时",
        },
        {
          sort: 19,
          name: "深圳市麦捷微电子科技股份有限公司",
          label: "XX.XX万千瓦时",
        },
        {
          sort: 20,
          name: "盛新锂能集团股份有限公司",
          label: "XX.XX万千瓦时",
        },
      ],
      titleData: { title: "行业用电增长情况" },
      indicatorData: {
        data: [
          {
            name: "规上工业用电量",
            time: "2021-12",
            value: "XXXXX",
            degree: "年度",
            unit: "万千瓦时",
            compare: 9.4,
          },
          {
            name: "占工业总用电比重",
            time: "2021-12",
            value: 76.2,
            degree: "年度",
            unit: "%",
            compare: 9.4,
          },
          {
            name: "规上工业增加值",
            time: "2021-12",
            value: "XXXX",
            degree: "年度",
            unit: "亿元",
            compare: 9.4,
          },
          {
            name: "单位增加值电耗",
            time: "2021-12",
            value: "XXXX",
            degree: "年度",
            unit: "度/元",
            compare: 9.4,
          },
          {
            name: "在库企业数量",
            time: "2021-12",
            value: 11255,
            degree: "年度",
            unit: "家",
            compare: 9.4,
          },
        ],
      },
      stripData: {
        value: "jssr",
        data: [
          {
            name: "近30日",
            value: "jssr",
          },
          {
            name: "本年每月",
            value: "bnmy",
          },
        ],
      },
      industrialData: {
        value: "month",
        data: [
          {
            name: "月",
            value: "month",
          },
          {
            name: "年",
            value: "year",
          },
        ],
      },
      rateData: {
        name: "本年累计用电量增速",
        value: 4.23,
        unit: "%",
        compare: 2.32,
      },
      proportionData: {
        name: "本年累计活跃以上企业占比",
        value: 24.23,
        unit: "%",
        compare: 2.32,
      },
      situationData: {
        inactionn: 20.7,
        routine: 45.3,
        brisk: 23.7,
        very: 10.3,
      },
      briskData: {
        data: [
          {
            background: "linear-gradient(90deg, #0D9738 0%, #00F24A 100%)",
            name: "非常活跃：",
            value: "XXX",
            percentage: 10.3,
            compare: 9.4,
          },
          {
            background: "linear-gradient(90deg, #44B072 0%, #75FBAE 100%)",
            name: "活跃：",
            value: "XXX",
            percentage: 23.7,
            compare: 9.4,
          },
          {
            background: "linear-gradient(90deg, #4F88B3 0%, #78CBFF 100%)",
            name: "常规：",
            value: "XXX",
            percentage: 45.3,
            compare: 9.4,
          },
          {
            background: "linear-gradient(90deg, #836A3E 0%, #FFB83B 100%)",
            name: "不活跃：",
            value: "XXX",
            percentage: 20.7,
            compare: 9.4,
          },
        ],
      },
      aa: [],
      bb: [],
      cc: [],
      dd: [],
    };
  },
  created() {
    this.init();
  },
  watch: {
    style() {
      this.queryEnterpriseByType();
    },
    byTime() {
      this.queryCountByTime();
    },
    typeVal() {
      this.queryGsgyByTime();
    },
    periodData() {
      this.queryEnterpriseOfActive();
    },
  },
  methods: {
    init() {
      this.stripInit();
      this.rateInit();
      this.queryEnterpriseByType();
      this.queryTwoYearPowerIncrease1();
      this.queryTwoYearPowerIncrease2();
      this.queryIndustryOfPower();
      this.queryIndustryByPowerSpeed();
      this.queryTargetOfGs();
      this.queryNowEnterpriseAbout();
      this.queryCountByTime();
      this.queryGsgyByTime();
      this.queryGsgyNow();
      this.queryTitleOfActive();
      this.queryEnterpriseOfActive();
    },
    onRankChange(val) {
      if ("electricity-growth" === val) {
        this.style = 2;
      } else {
        this.style = 1;
      }
    },
    rowClass({ rowIndex }) {
      return rowIndex % 2 === 0 ? "dark" : "light";
    },
    stripInit() {
      this.aa = [
        1.09, 1.02, 0.97, 0.94, 0.91, 0.9, 0.94, 1, 1.22, 1.34, 1.39, 1.42,
        1.34, 1.36, 1.36, 1.38, 1.42, 1.41, 1.39, 1.38, 1.35, 1.32, 1.22, 1.19,
      ];
      this.bb = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24,
      ];
    },
    //切换数据
    stripChange(val) {
      if ("jssr" === val) {
        this.byTime = 4;
        this.stripInt = 5;
        this.aa = [
          1.09, 1.02, 0.97, 0.94, 0.91, 0.9, 0.94, 1, 1.22, 1.34, 1.39, 1.42,
          1.34, 1.36, 1.36, 1.38, 1.42, 1.41, 1.39, 1.38, 1.35, 1.32, 1.22,
          1.19,
        ];
        this.bb = [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22, 23, 24,
        ];
      } else {
        this.byTime = 3;
        this.stripInt = 0;
        this.aa = [
          1.09, 1.02, 0.97, 0.94, 0.91, 0.9, 0.94, 1, 1.22, 1.34, 1.39, 1.42,
        ];
        this.bb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
      }
    },
    rateInit() {
      this.dd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
      this.cc = [
        0.6, 0.7, 0.65, 0.58, 0.59, 0.77, 0.58, 0.59, 0.62, 0.61, 0.61, 0.64,
      ];
    },
    //切换数据
    rateChange(val) {
      if ("month" === val) {
        this.typeVal = 1;
        this.periodData = 3;
        this.dd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        this.cc = [
          0.6, 0.7, 0.65, 0.58, 0.59, 0.77, 0.58, 0.59, 0.62, 0.61, 0.61, 0.64,
        ];
      } else {
        this.typeVal = 2;
        this.periodData = 1;
        this.dd = [2016, 2017, 2018, 2019, 2020, 2021];
        this.cc = [0.6, 0.7, 0.65, 0.58, 0.59, 0.77];
      }
    },
    // 右侧规上企业生产排名，按用电量，按用电增长排名
    queryEnterpriseByType() {
      api
        .queryEnterpriseByType({
          style: this.style,
          orgCode: "04",
          valueType: 1,
          dataPeriod: 3,
          recordType: 1,
          time: "2021-12-18",
        })
        .then((res) => {
          this.rankList = (res || []).map((item, index) => {
            item.sort = this.rankList[index].sort;
            item.name = item.enterpriseName;
            item.label = item.valueOne + item.valueOneUnit;
            return item;
          });
        });
    },
    // 左下角行业用电增长情况(本年)
    queryTwoYearPowerIncrease1() {
      this.yearData = [];
      this.highchartsData = [];
      api
        .queryTwoYearPowerIncrease({
          style: 1,
          orgCode: "04",
          valueType: 2,
          dataPeriod: 3,
          recordType: 1,
          time: "2021-12-01",
        })
        .then((res) => {
          this.yearData = res;
          this.highchartsData = [
            ["正增长", parseFloat(res[0].valueOneZb)],
            ["负增长", parseFloat(res[1].valueOneZb)],
          ];
        });
    },
    // 左下角行业用电增长情况(平均两年)
    queryTwoYearPowerIncrease2() {
      this.averageData = [];
      this.consumptionData = [];
      api
        .queryTwoYearPowerIncrease({
          style: 2,
          orgCode: "04",
          valueType: 2,
          dataPeriod: 3,
          recordType: 1,
          time: "2021-12-01",
        })
        .then((res) => {
          this.consumptionData = [
            ["正增长", parseFloat(res[0].valueOneZb)],
            ["负增长", parseFloat(res[1].valueOneZb)],
          ];
          this.averageData = res;
        });
    },
    // 用电量构成与增长情况
    queryIndustryOfPower() {
      api
        .queryIndustryOfPower({
          orgCode: "04",
          valueType: 2,
          dataPeriod: 3,
          recordType: 1,
          time: "2021-12-01",
        })
        .then((res) => {
          this.treemapData = (res || []).map((item, index) => {
            item.name = item.industryName;
            item.unit = item.electricityConsumptionUnit;
            item.percentage = item.valueOneZb;
            item.value = item.electricityConsumption;
            item.increment = item.electricityAddSpeed;
            return item;
          });
        });
    },
    // 39大类行业用电增速与增加值情况
    queryIndustryByPowerSpeed() {
      api
        .queryIndustryByPowerSpeed({
          orgCode: "04",
          valueType: 2,
          dataPeriod: 3,
          recordType: 1,
          time: "2021-12-01",
        })
        .then((res) => {
          this.table.data = (res || []).map((item, index) => {
            item.sort = this.table.data[index].sort;
            item.industry = item.industryName;
            item.powerSpeed = item.electricityAddSpeed + "%";
            item.compare = item.electricityAddSpeedTb + "个百分点";
            item.spend = item.energyConsumption;
            item.areaCompare = item.energyConsumptionTb + "%";
            return item;
          });
        });
    },
    //  左上5个指标卡片接口获取
    queryTargetOfGs() {
      api
        .queryTargetOfGs({
          orgCode: "04",
          valueType: 2,
          dataPeriod: 3,
          recordType: 1,
          time: "2021-12-18",
        })
        .then((res) => {
          this.indicatorData.data = (res || []).map((item, index) => {
            item.name = this.indicatorData.data[index].name;
            item.value = item.valueOne;
            item.degree = this.indicatorData.data[index].degree;
            item.unit = item.valueOneUnit;
            item.compare = item.valueOneTb;
            return item;
          });
        });
    },
    // 左侧中间企业生产运行情况
    queryNowEnterpriseAbout() {
      api
        .queryNowEnterpriseAbout({
          orgCode: "04",
          valueType: 1,
          dataPeriod: 4,
          recordType: 1,
        })
        .then((res) => {
          this.statisticalData = res[0];
        });
    },
    //查询近30日和本年，正常运行的企业，的企业数、占比以及同比
    queryCountByTime() {
      this.aa = [];
      this.bb = [];
      this.tb = [];
      api
        .queryCountByTime({
          orgCode: "04",
          valueType: 1,
          dataPeriod: this.byTime,
          recordType: 1,
          time: "2022-10-01",
        })
        .then((res) => {
          res.forEach((item, index) => {
            this.aa.push(item.valueOne);
            this.tb.push(item.valueOneTb);
            this.bb.push(item.time);
          });
        });
    },
    //规上工业整体用电增速
    queryGsgyByTime() {
      this.cc = [];
      this.dd = [];
      api
        .queryGsgyByTime({
          orgCode: "04",
          valueType: this.typeVal,
          dataPeriod: 3,
          recordType: 1,
          time: "2021-12-10",
        })
        .then((res) => {
          res.forEach((item, index) => {
            this.cc.push(item.valueOne);
            this.dd.push(item.time);
          });
        });
    },
    // 规上企业-规上工业整体用电增速。上方本年累计内容
    queryGsgyNow() {
      api
        .queryGsgyNow({
          orgCode: "04",
          valueType: 2,
          dataPeriod: 3,
          recordType: 1,
          time: "2021-12-10",
        })
        .then((res) => {
          this.rateData.value = res[0].valueOne;
          this.rateData.compare = res[0].valueOneTb;
        });
    },
    // 企业活跃度占比情况
    queryTitleOfActive() {
      api
        .queryTitleOfActive({
          orgCode: "04",
          valueType: 2,
          dataPeriod: 3,
          recordType: 1,
          time: "2021-10-10",
        })
        .then((res) => {
          this.proportionData.value = res[0].valueOneZb;
          this.proportionData.compare = res[0].valueOneTb;
        });
    },
    // 根据传入时间的时间参数分别查询月、年的企业活跃度占比情
    queryEnterpriseOfActive() {
      api
        .queryEnterpriseOfActive({
          orgCode: "04",
          valueType: 1,
          dataPeriod: this.periodData,
          recordType: 1,
          time: "2021-10-10",
        })
        .then((res) => {
          this.briskData.data = (res || []).map((item, index) => {
            item.background = this.briskData.data[index].background;
            item.name = this.briskData.data[index].name;
            item.percentage = item.valueOneZb;
            item.value = item.valueOne;
            item.compare = item.valueOneTb;
            return item;
          });
          this.situationData.inactionn = res[3].valueOneZb;
          this.situationData.routine = res[2].valueOneZb;
          this.situationData.brisk = res[1].valueOneZb;
          this.situationData.very = res[0].valueOneZb;
        });
    },
  },
};
</script>

<style lang="less" scoped>
@import "../../style/var.less";
.dark-panel-bg {
  background-color: rgba(14, 29, 56, 0.8);
  padding: 0 12px;
}
.rule-industry {
}
.rule-industry-wrap {
  display: flex;
  &-title {
    display: flex;
  }
  &-enterprises {
    display: flex;
  }
  &-img {
    background: url("@{imgUrl}/micro/zbqk.png") no-repeat 5px center;
    // background-size: 100% 100%;
    // width: 276px;
    height: 194px;
    margin: 10px 0 0 0;
  }
}
.card-wrap {
  &-subtitle {
    display: flex;
    justify-content: space-around;
  }
  &-white {
    display: flex;
  }
}
.white-pagination {
  // width: 6rem;;
}
.dark-table {
  height: 300px;
}
</style>