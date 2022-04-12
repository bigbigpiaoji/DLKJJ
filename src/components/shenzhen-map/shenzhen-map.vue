<template>
  <div :style="getStyle" class="map-wrap">
    <div class="map-panel">
      <gdp-panel v-bind="gdp"></gdp-panel>
      <indicator-panel
        v-if="action == 'indicator-panel'"
        :isShow="isShow"
        :panel="panel"
      ></indicator-panel>

      <indicator-panel-balance
        v-else-if="action == 'indicator-panel-balance'"
        :name="balancePanelData.name"
        :value="balancePanelData.value"
        :percent="balancePanelData.percent"
        :unit="balancePanelData.unit"
        :balanceData="balancePanelData.balanceData"
      ></indicator-panel-balance>
      <indicator-panel-important
        v-else-if="action == 'indicator-panel-important'"
        :name="importantPanelData.name"
        :value="importantPanelData.value"
        :percent="importantPanelData.percent"
        :unit="importantPanelData.unit"
        :importData="importantPanelData.importData"
      ></indicator-panel-important>
      <indicator-panel-condition
        v-else-if="action == 'indicator-panel-condition'"
        :conditionData="conditionPanelData.conditionData"
        v-bind="$attrs"
        v-on="$listeners"
        :condData="condData.conditionData"
      ></indicator-panel-condition>
    </div>
    <div class="title-text">{{ mapTitle }}</div>
    <template v-if="false">
      <!-- 电力发展指数 -->
      <div class="tooltip">
        <div class="tooltip-head">
          <div class="tooltip-name">深圳经济电力发展指数</div>
          <div class="tooltip-head-content">
            <div class="tooltip-total">96</div>
            <div class="trend l-mw-100">
              <div class="trend-label">同比</div>
              <div class="trend-icon"></div>
              <div class="trend-value">3.12%</div>
            </div>
          </div>
        </div>
        <div class="tooltip-body">
          <div class="overview">
            <div class="overview-item">
              <div class="overview-name">固投电力弹性：</div>
              <div class="overview-value">0.34</div>
              <div class="trend l-mw-100">
                <div class="trend-label">同比</div>
                <div class="trend-icon"></div>
                <div class="trend-value">0.12%</div>
              </div>
            </div>
            <div class="overview-item">
              <div class="overview-name">社消电力弹性：</div>
              <div class="overview-value">0.859</div>
              <div class="trend l-mw-100">
                <div class="trend-label">同比</div>
                <div class="trend-icon"></div>
                <div class="trend-value">0.12%</div>
              </div>
            </div>
            <div class="overview-item">
              <div class="overview-name">外贸电力弹性：</div>
              <div class="overview-value">-1.284</div>
              <div class="trend l-mw-100">
                <div class="trend-label">同比</div>
                <div class="trend-icon"></div>
                <div class="trend-value">0.12%</div>
              </div>
            </div>
            <div class="overview-item">
              <div class="overview-name">财政电力弹性：</div>
              <div class="overview-value">0.949</div>
              <div class="trend l-mw-100">
                <div class="trend-label">同比</div>
                <div class="trend-icon"></div>
                <div class="trend-value">0.12%</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 负载 -->
      <div class="tooltip">
        <div class="tooltip-head">
          <div class="tooltip-name">罗湖区</div>
          <div class="tooltip-button">
            <div class="tooltip-rank">NO.</div>
            <div class="tooltip-sort">2</div>
          </div>
          <div class="tooltip-total">0.98</div>
        </div>
        <div class="tooltip-body">
          <div class="charge">
            <div class="charge-item">
              <div class="charge-name">最高负荷</div>
              <div class="charge-value">1256.5</div>
              <div class="charge-unit">万千瓦</div>
            </div>
            <div class="charge-item">
              <div class="charge-name">最低负荷</div>
              <div class="charge-value">1256.5</div>
              <div class="charge-unit">万千瓦</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 贡献度 -->
      <div class="tooltip">
        <div class="tooltip-head">
          <div class="tooltip-name">罗湖区</div>
          <div class="tooltip-button">
            <div class="tooltip-rank">NO.</div>
            <div class="tooltip-sort">2</div>
          </div>
          <div class="tooltip-total">0.62</div>
          <div class="tooltip-unit">元/度</div>
        </div>
        <div class="tooltip-body">
          <div class="charge">
            <div class="charge-item">
              <div class="charge-name">最高负荷</div>
              <div class="charge-value">1256.5</div>
              <div class="charge-unit">万千瓦</div>
              <div class="trend l-ml-20 l-mw-100">
                <div class="trend-label">同比</div>
                <div class="trend-icon"></div>
                <div class="trend-value">3.12%</div>
              </div>
            </div>
            <div class="charge-item">
              <div class="charge-name">最低负荷</div>
              <div class="charge-value">1256.5</div>
              <div class="charge-unit">万千瓦</div>
              <div class="trend l-ml-20 l-mw-100">
                <div class="trend-label">同比</div>
                <div class="trend-icon"></div>
                <div class="trend-value">3.12%</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 均衡度统计 -->

      <div class="tooltip">
        <div class="tooltip-head">
          <div class="tooltip-name">罗湖区</div>
          <div class="tooltip-button">
            <div class="tooltip-rank">NO.</div>
            <div class="tooltip-sort">2</div>
          </div>
          <div class="tooltip-total">3.62</div>
          <div class="tooltip-unit">%</div>
        </div>
        <div class="tooltip-body">
          <div class="sum">
            <div class="sum-item">
              <div class="sum-name">重点片区</div>
              <div class="sum-content">
                <div class="sum-value">1256</div>
                <div class="sum-unit">个</div>
              </div>
            </div>
            <div class="sum-item">
              <div class="sum-name">工业园区</div>
              <div class="sum-content">
                <div class="sum-value">1256</div>
                <div class="sum-unit">个</div>
              </div>
            </div>
            <div class="sum-item">
              <div class="sum-name">商圈</div>
              <div class="sum-content">
                <div class="sum-value">1256</div>
                <div class="sum-unit">个</div>
              </div>
            </div>
            <div class="sum-item">
              <div class="sum-name">写字楼</div>
              <div class="sum-content">
                <div class="sum-value">1256</div>
                <div class="sum-unit">个</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 产业 -->

      <div class="tooltip">
        <div class="tooltip-head">
          <div class="tooltip-name">罗湖区</div>
          <div class="tooltip-button">
            <div class="tooltip-rank">NO.</div>
            <div class="tooltip-sort">2</div>
          </div>
          <div class="tooltip-total">3.62</div>
          <div class="tooltip-unit">%</div>
        </div>
        <div class="tooltip-body">
          <div class="industry-title">各产业增长速度</div>
          <div class="industry">
            <div class="industry-item">
              <div class="industry-name">一产</div>
              <div class="industry-value">1256亿元</div>
              <div class="industry-unit">占比20.00%</div>

              <div class="trend l-ml-20 l-mw-100">
                <div class="trend-label">同比</div>
                <div class="trend-icon"></div>
                <div class="trend-value">3.12%</div>
              </div>
            </div>

            <div class="industry-item">
              <div class="industry-name">二产</div>
              <div class="industry-value">1256亿元</div>
              <div class="industry-unit">占比20.00%</div>

              <div class="trend l-ml-20 l-mw-100">
                <div class="trend-label">同比</div>
                <div class="trend-icon"></div>
                <div class="trend-value">3.12%</div>
              </div>
            </div>

            <div class="industry-item">
              <div class="industry-name">三产</div>
              <div class="industry-value">1256亿元</div>
              <div class="industry-unit">占比20.00%</div>

              <div class="trend l-ml-20 l-mw-100">
                <div class="trend-label">同比</div>
                <div class="trend-icon"></div>
                <div class="trend-value">3.12%</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 绿色指数 -->

      <div class="tooltip">
        <div class="tooltip-head">
          <div class="tooltip-name">罗湖区</div>
          <div class="tooltip-button">
            <div class="tooltip-rank">NO.</div>
            <div class="tooltip-sort">2</div>
          </div>
          <div class="tooltip-total">0.98</div>
        </div>
        <div class="tooltip-body">
          <div class="positive">
            <div class="positive-aside">
              <div class="positive-line"></div>
              <div class="positive-title">用电增速</div>
              <div class="positive-value">
                1.23
                <span class="positive-unit">%</span>
              </div>
              <div class="positive-title l-mt-20">GDP增速</div>
              <div class="positive-value">
                2.35
                <span class="positive-unit">%</span>
              </div>
            </div>

            <div class="positie-content">
              <div class="industry-title">产业GDP构成</div>
              <div class="industry">
                <div class="industry-item">
                  <div class="industry-name">一产</div>
                  <div class="industry-value">1256亿元</div>
                  <div class="industry-unit">占比20.00%</div>

                  <div class="trend l-ml-20 l-mw-100">
                    <div class="trend-label">同比</div>
                    <div class="trend-icon"></div>
                    <div class="trend-value">3.12%</div>
                  </div>
                </div>

                <div class="industry-item">
                  <div class="industry-name">二产</div>
                  <div class="industry-value">1256亿元</div>
                  <div class="industry-unit">占比20.00%</div>

                  <div class="trend l-ml-20 l-mw-100">
                    <div class="trend-label">同比</div>
                    <div class="trend-icon"></div>
                    <div class="trend-value">3.12%</div>
                  </div>
                </div>

                <div class="industry-item">
                  <div class="industry-name">三产</div>
                  <div class="industry-value">1256亿元</div>
                  <div class="industry-unit">占比20.00%</div>

                  <div class="trend l-ml-20 l-mw-100">
                    <div class="trend-label">同比</div>
                    <div class="trend-icon"></div>
                    <div class="trend-value">3.12%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <!-- 地图 -->
    <v-chart
      ref="map"
      class="l-full"
      :autoresize="true"
      :option="option"
    ></v-chart>
  </div>
</template>

<script>
import request from "@/request";

export default {
  name: "shenzhen-map",
  props: {
    // 根据这个类型确认渲染模板数据
    action: {
      type: String,
      default: "indicator-panel",
    },
    // 提示框
    tooltipType: {
      type: String,
      default: "gqydzzjhd",
      validator(val) {
        // 深圳全社会分时用电均衡度、经济发展电力绿色指数、经济发展电力贡献度、各区用电增长均衡度、区用电增长均衡度区域、产业用电量情况、产业用电量行业情况、企业发展电力活跃度
        return [
          "szqshfsydjhd",
          "jjfzdllszs",
          "jjfzdlgxd",
          "gqydzzjhd",
          "qydzzjhdqy",
          "cyydlqk",
          "cyydlhyqk",
          "qyfzdlhyd",
        ];
      },
    },
    areaType: {
      type: String,
      default: "zdpq",
      validator(val) {
        // 重点片区、工业园区、商圈、写字楼
        return ["zdpq", "gyyq", "sq", "xzl"].includes(val);
      },
    },
    currentTab: {
      type: String,
      default: "qbqy",
      validator(val) {
        // 全部企业、总部经济、上市公司、规上企业
        return ["qbqy", "zbjj", "ssgs", "gsqy"].includes(val);
      },
    },
    industyType: {
      type: String,
      default: "lsjj",
      validator(val) {
        // 绿色经济、民生、双循环、高质量
        return ["", "lsjj", "ms", "sxh", "gzl"].includes(val);
      },
    },
    gdp: {
      type: Object,
      default: () => ({
        name: "预计当年深圳GDP",
        date: "截至2021年 10月22日",
        value: "24865.889",
        unit: "万亿元",
        complete: 92.3,
      }),
    },
    // 面板数据
    mapTitle: {
      type: String,
      default: "各区经济发展与用电增长弹性",
    },
    isShow: {
      type: Boolean,
      default: true,
    },
    panel: {
      type: Object,
      default: () => ({
        name: "深圳经济电力发展指数",
        value: 0.94,
        percent: 95.68,
        unit: "%",
      }),
    },
    balancePanelData: {
      type: Object,
      default: () => ({
        name: "深圳企业活跃以上占比",
        value: "72.9",
        percent: -5.68,
        unit: "%",
        balanceData: [
          {
            name: "注册企业数",
            value: 1256,
            unit: "万家",
          },
          {
            name: "总部企业",
            value: 1256,
            unit: "家",
          },
          {
            name: "规上企业",
            value: 56,
            unit: "家",
          },
          {
            name: "上市公司",
            value: 10258,
            unit: "家",
          },
        ],
      }),
    },
    importantPanelData: {
      type: Object,
      default: () => ({
        name: "深圳重点片区用电增长均衡度",
        value: 0.61,
        percent: 2.23,
        unit: "%",
        importData: {
          name: "重点片区总数",
          value: 1256,
          unit: "个",
          rate: 2,
        },
      }),
    },

    conditionPanelData: {
      type: Object,
      default: () => ({
        conditionData: [
          {
            type: "第一产业",
            number: 0.61,
            zb: "占比",
            unit: "%",
            ratio: 2.23,
            yoy: 2.23,
          },
          {
            type: "第二产业",
            number: 0.61,
            zb: "占比",
            unit: "%",
            ratio: 2.23,
            yoy: 2.23,
          },
          {
            type: "第三产业",
            number: 0.61,
            zb: "占比",
            unit: "%",
            ratio: 2.23,
            yoy: 2.23,
          },
        ],
      }),
    },
    condData: {
      type: Object,
      default: () => ({
        conditionData: [
          {
            type: "日均衡度",
            number: 66.78,
            unit: "",
            ratio: "2021-11-15",
            yoy: -3.51,
          },
          {
            type: "最高负荷",
            number: 2035,
            unit: "万千瓦",
            ratio: 2.23,
            yoy: 2.23,
          },
          {
            type: "最低负荷",
            number: 394,
            unit: "万千瓦",
            ratio: 2.23,
            yoy: 2.23,
          },
        ],
      }),
    },
    data: {
      type: Array,
      default: () => [
        {
          name: "光明区",
          value: 88,
          amount: 3941,
        },

        {
          name: "南山区",
          value: 29,
          amount: 12585,
        },
        {
          name: "坪山区",
          value: 9,
          amount: 4456,
        },
        {
          name: "大鹏新区",
          value: 5,
          amount: 1345,
        },
        {
          name: "宝安区",
          value: 42,
          amount: 13457,
        },
        {
          name: "深汕合作区",
          value: 2,
          amount: 645,
        },
        {
          name: "盐田区",
          value: 5,
          amount: 1745,
        },
        {
          name: "福田区",
          value: 12,
          amount: 8345,
        },
        {
          name: "罗湖区",
          value: 16,
          amount: 5159,
        },
        {
          name: "龙华区",
          value: 36,
          amount: 7340,
        },
        {
          name: "龙岗区",
          value: 49,
          amount: 15345,
        },
      ],
    },

    // 电力贡献度
    dlgxd: {
      type: Array,
      default: () => [
        {
          name: "光明区",

          total: 21.95,

          list: [
            {
              name: "全社会用电量",
              percent: 10.29,
              value: 46.52,
              danwei: "亿千瓦时",
            },
            {
              name: "GDP",
              percent: 11.25,
              value: 1020.92,
              danwei: "亿元",
            },
          ],
        },

        {
          name: "南山区",
          total: 35.38,
          list: [
            {
              name: "全社会用电量",
              percent: 5.27,
              value: 172.51,
              danwei: "亿千瓦时",
            },
            {
              name: "GDP",
              percent: 6.19,
              value: 6103.29,
              danwei: "亿元",
            },
          ],
        },
        {
          name: "坪山区",
          total: 21.95,
          list: [
            {
              name: "全社会用电量",
              percent: 9.75,
              value: 42.23,
              danwei: "亿千瓦时",
            },
            {
              name: "GDP",
              percent: 9,
              value: 760.87,
              danwei: "亿元",
            },
          ],
        },
        {
          name: "大鹏新区",
          total: 17.35,
          list: [
            {
              name: "全社会用电量",
              percent: 2.34,
              value: 20.26,
              danwei: "亿千瓦时",
            },
            {
              name: "GDP",
              percent: 3.18,
              value: 351.44,
              danwei: "亿元",
            },
          ],
        },
        {
          name: "宝安区",
          total: 26.13,
          list: [
            {
              name: "全社会用电量",
              percent: 7.15,
              value: 147.45,
              danwei: "亿千瓦时",
            },
            {
              name: "GDP",
              percent: 6.4,
              value: 3853.58,
              danwei: "亿元",
            },
          ],
        },
        {
          name: "深汕合作区",
          total: 16.6,

          list: [
            {
              name: "全社会用电量",
              percent: 18.74,
              value: 2.82,
              danwei: "亿千瓦时",
            },
            {
              name: "GDP",
              percent: 20.15,
              value: 46.8,
              danwei: "亿元",
            },
          ],
        },
        {
          name: "盐田区",
          total: 20.38,
          list: [
            {
              name: "全社会用电量",
              percent: 7.85,
              value: 32.21,
              danwei: "亿千瓦时",
            },
            {
              name: "GDP",
              percent: 9.22,
              value: 656.48,
              danwei: "亿元",
            },
          ],
        },
        {
          name: "福田区",
          total: 31.17,
          list: [
            {
              name: "全社会用电量",
              percent: 4.18,
              value: 145.87,
              danwei: "亿千瓦时",
            },
            {
              name: "GDP",
              percent: 6.35,
              value: 4546.5,
              danwei: "亿元",
            },
          ],
        },
        {
          name: "罗湖区",
          total: 29.2,
          list: [
            {
              name: "全社会用电量",
              percent: 8.42,
              value: 81.87,
              danwei: "亿千瓦时",
            },
            {
              name: "GDP",
              percent: 6.94,
              value: 2390.26,
              danwei: "亿元",
            },
          ],
        },
        {
          name: "龙华区",
          total: 24.25,
          list: [
            {
              name: "全社会用电量",
              percent: 3.36,
              value: 103.54,
              danwei: "亿千瓦时",
            },
            {
              name: "GDP",
              percent: 4.57,
              value: 2510.77,
              danwei: "亿元",
            },
          ],
        },
        {
          name: "龙岗区",
          total: 24.83,
          list: [
            {
              name: "全社会用电量",
              percent: 7.55,
              value: 188.71,
              danwei: "亿千瓦时",
            },
            {
              name: "GDP",
              percent: 6.76,
              value: 4685.78,
              danwei: "亿元",
            },
          ],
        },
      ],
    },
    // 分时用电均衡度
    fsydjhd: {
      type: Array,
      default: () => [
        {
          name: "光明区",
          value: 88,
          total: 71.52,
          max: 129,
          min: 31,
          sort: 0,
        },

        {
          name: "南山区",
          value: 29,
          total: 58.74,
          max: 312,
          min: 61,
          sort: 0,
        },
        {
          name: "坪山区",
          value: 9,
          total: 74.69,
          max: 83,
          min: 21,
          sort: 0,
        },
        {
          name: "大鹏新区",
          value: 5,
          total: 59.15,
          max: 52,
          min: 16,
          sort: 0,
        },
        {
          name: "宝安区",
          value: 42,
          total: 59.12,
          max: 267,
          min: 48,
          sort: 0,
        },
        {
          name: "深汕合作区",
          value: 2,
          total: 61.25,
          max: 35,
          min: 6,
          sort: 0,
        },
        {
          name: "盐田区",
          value: 5,
          total: 70.71,
          max: 109,
          min: 21,
          sort: 0,
        },
        {
          name: "福田区",
          value: 12,
          total: 61.56,
          max: 289,
          min: 57,
          sort: 0,
        },
        {
          name: "罗湖区",
          value: 16,
          total: 63.54,
          max: 248,
          min: 53,
          sort: 0,
        },
        {
          name: "龙华区",
          value: 36,
          total: 78.61,
          max: 243,
          min: 42,
          sort: 0,
        },
        {
          name: "龙岗区",
          value: 49,
          total: 81.79,
          max: 268,
          min: 38,
          sort: 0,
        },
      ],
    },
    // 电力绿色指标
    dllszb: {
      type: Array,
      default: () => [
        {
          name: "光明区",
          gdpGrowth: 11.25,
          powerGrowth: 10.29,
          sort: 0,
          total: 0.91,
          list: [
            {
              name: "一产",
              total: 1.06,
              percent: 0.2,
              compare: 16.94,
            },
            {
              name: "二产",
              total: 689.09,
              percent: 67.5,
              compare: 17.09,
            },
            {
              name: "三产",
              total: 329.8,
              percent: 32.3,
              compare: -0.16,
            },
          ],
        },

        {
          name: "南山区",
          gdpGrowth: 6.19,
          powerGrowth: 5.27,
          sort: 0,
          total: 0.85,
          list: [
            {
              name: "一产",
              total: 0.73,
              percent: 0.01,
              compare: -3.17,
            },
            {
              name: "二产",
              total: 2049.4,
              percent: 33.58,
              compare: 0.18,
            },
            {
              name: "三产",
              total: 4053.56,
              percent: 66.41,
              compare: 36.41,
            },
          ],
        },
        {
          name: "坪山区",
          gdpGrowth: 9,
          powerGrowth: 9.75,
          sort: 0,
          total: 1.08,
          list: [
            {
              name: "一产",
              total: 0.88,
              percent: 0.12,
              compare: 19.58,
            },
            {
              name: "二产",
              total: 469.64,
              percent: 61.72,
              compare: 4.15,
            },
            {
              name: "三产",
              total: 290.35,
              percent: 38.16,
              compare: 16.15,
            },
          ],
        },
        {
          name: "大鹏新区",
          gdpGrowth: 3.18,
          powerGrowth: 2.34,
          sort: 0,
          total: 0.74,
          list: [
            {
              name: "一产",
              total: 0.92,
              percent: 0.04,
              compare: 17.74,
            },
            {
              name: "二产",
              total: 2077.21,
              percent: 93.53,
              compare: 3.12,
            },
            {
              name: "三产",
              total: 142.79,
              percent: 6.43,
              compare: -6.69,
            },
          ],
        },
        {
          name: "宝安区",
          gdpGrowth: 6.4,
          powerGrowth: 7.15,
          sort: 0,
          total: 1.12,
          list: [
            {
              name: "一产",
              total: 0.58,
              percent: 0.02,
              compare: -57.21,
            },
            {
              name: "二产",
              total: 1858.79,
              percent: 48.24,
              compare: 0.97,
            },
            {
              name: "三产",
              total: 1994.22,
              percent: 51.75,
              compare: 12.67,
            },
          ],
        },
        {
          name: "深汕合作区",
          gdpGrowth: 20.15,
          powerGrowth: 18.74,
          sort: 0,
          total: 0.93,
          list: [
            {
              name: "一产",
              total: 15.05,
              percent: 32.16,
              compare: 20.69,
            },
            {
              name: "二产",
              total: 15.7,
              percent: 33.55,
              compare: -44366,
            },
            {
              name: "三产",
              total: 16.05,
              percent: 34.29,
              compare: 30.59,
            },
          ],
        },
        {
          name: "盐田区",
          gdpGrowth: 9.22,
          powerGrowth: 7.85,
          sort: 0,
          total: 0.85,
          list: [
            {
              name: "一产",
              total: 0.27,
              percent: 0.04,
              compare: 85.35,
            },
            {
              name: "二产",
              total: 83.39,
              percent: 12.7,
              compare: -2.84,
            },
            {
              name: "三产",
              total: 572.82,
              percent: 87.26,
              compare: 8.74,
            },
          ],
        },
        {
          name: "福田区",
          gdpGrowth: 6.35,
          powerGrowth: 4.18,
          sort: 0,
          total: 0.66,
          list: [
            {
              name: "一产",
              total: 2.28,
              percent: 0.05,
              compare: 39.92,
            },
            {
              name: "二产",
              total: 387.68,
              percent: 8.53,
              compare: 62.51,
            },
            {
              name: "三产",
              total: 4156.53,
              percent: 91.42,
              compare: 10.02,
            },
          ],
        },
        {
          name: "罗湖区",
          gdpGrowth: 6.94,
          powerGrowth: 8.42,
          sort: 0,
          total: 1.21,
          list: [
            {
              name: "一产",
              total: 1.26,
              percent: 0.05,
              compare: -3.7,
            },
            {
              name: "二产",
              total: 172.65,
              percent: 7.22,
              compare: 111.46,
            },
            {
              name: "三产",
              total: 2216.34,
              percent: 92.72,
              compare: 2.1,
            },
          ],
        },
        {
          name: "龙华区",
          gdpGrowth: 4.57,
          powerGrowth: 3.36,
          sort: 0,
          total: 0.74,
          list: [
            {
              name: "一产",
              total: 0.35,
              percent: 0.01,
              compare: 16.37,
            },
            {
              name: "二产",
              total: 1200.85,
              percent: 47.83,
              compare: -16.54,
            },
            {
              name: "三产",
              total: 1309.57,
              percent: 52.16,
              compare: 36.02,
            },
          ],
        },
        {
          name: "龙岗区",
          gdpGrowth: 6.76,
          powerGrowth: 7.55,
          sort: 0,
          total: 1.12,
          list: [
            {
              name: "一产",
              total: 0.83,
              percent: 0.02,
              compare: 53.25,
            },
            {
              name: "二产",
              total: 3360.94,
              percent: 71.73,
              compare: 12.98,
            },
            {
              name: "三产",
              total: 1324.02,
              percent: 28.26,
              compare: 0.88,
            },
          ],
        },
      ],
    },

    //aaa
    dlhyd: {
      type: Array,
      default: () => [
        {
          name: "光明区",
          sort: 0,
          total: 0.91,
          qbqy: [
            {
              name: "非常活跃",
              total: 12322,
              percent: 11.56,
              compare: 0.62,
              area: "全部企业",
              sum: 106595,
            },
            {
              name: "活跃",
              total: 19923,
              percent: 18.69,
              compare: 2.03,
            },
            {
              name: "不活跃",
              total: 24005,
              percent: 22.52,
              compare: -0.02,
            },
          ],
          zbjj: [
            {
              name: "非常活跃",
              total: 0,
              percent: 0,
              compare: -100,
              area: "总部企业",
              sum: 4,
            },
            {
              name: "活跃",
              total: 3,
              percent: 75,
              compare: 50,
            },
            {
              name: "不活跃",
              total: 1,
              percent: 25,
              compare: 0,
            },
          ],
          ssgs: [
            {
              name: "非常活跃",
              total: 3,
              percent: 16.67,
              compare: 0,
              area: "上市公司",
              sum: 18,
            },
            {
              name: "活跃",
              total: 4,
              percent: 22.22,
              compare: 0,
            },
            {
              name: "不活跃",
              total: 4,
              percent: 22.22,
              compare: -33.33,
            },
          ],
          gsqy: [
            {
              name: "非常活跃",
              total: 34,
              percent: 14.23,
              compare: 2.96,
              area: "规上企业",
              sum: 239,
            },
            {
              name: "活跃",
              total: 68,
              percent: 28.45,
              compare: 1.84,
            },
            {
              name: "不活跃",
              total: 8,
              percent: 3.35,
              compare: -4.87,
            },
          ],
        },

        {
          name: "南山区",
          sort: 0,
          total: 0.85,
          qbqy: [
            {
              name: "非常活跃",
              total: 62807,
              percent: 13.26,
              compare: 3.44,
              area: "全部企业",
              sum: 473659,
            },
            {
              name: "活跃",
              total: 110931,
              percent: 23.42,
              compare: 3.45,
            },
            {
              name: "不活跃",
              total: 102926,
              percent: 21.73,
              compare: -0.08,
            },
          ],
          zbjj: [
            {
              name: "非常活跃",
              total: 5,
              percent: 10.6,
              compare: 25,
              area: "总部企业",
              sum: 52,
            },
            {
              name: "活跃",
              total: 11,
              percent: 23.4,
              compare: 22.2,
            },
            {
              name: "不活跃",
              total: 17,
              percent: 25.5,
              compare: 9.1,
            },
          ],
          ssgs: [
            {
              name: "非常活跃",
              total: 19,
              percent: 13.77,
              compare: 11.76,
              area: "上市公司",
              sum: 138,
            },
            {
              name: "活跃",
              total: 20,
              percent: 14.49,
              compare: 17.65,
            },
            {
              name: "不活跃",
              total: 14,
              percent: 10.14,
              compare: -12.5,
            },
          ],
          gsqy: [
            {
              name: "非常活跃",
              total: 325,
              percent: 11.08,
              compare: 1.78,
              area: "规上企业",
              sum: 2934,
            },
            {
              name: "活跃",
              total: 611,
              percent: 20.82,
              compare: 1.52,
            },
            {
              name: "不活跃",
              total: 424,
              percent: 14.45,
              compare: -2.24,
            },
          ],
        },
        {
          name: "坪山区",
          sort: 0,
          total: 1.08,
          qbqy: [
            {
              name: "非常活跃",
              total: 5083,
              percent: 8.76,
              compare: 3.05,
              area: "全部企业",
              sum: 58025,
            },
            {
              name: "活跃",
              total: 10630,
              percent: 18.32,
              compare: 1.23,
            },
            {
              name: "不活跃",
              total: 20808,
              percent: 35.86,
              compare: -0.37,
            },
          ],
          zbjj: [
            {
              name: "非常活跃",
              total: 0,
              percent: 0,
              compare: 0,
              area: "总部企业",
              sum: 1,
            },
            {
              name: "活跃",
              total: 1,
              percent: 100,
              compare: 100,
            },
            {
              name: "不活跃",
              total: 0,
              percent: 0,
              compare: -100,
            },
          ],
          ssgs: [
            {
              name: "非常活跃",
              total: 3,
              percent: 16.67,
              compare: 50,
              area: "上市公司",
              sum: 18,
            },
            {
              name: "活跃",
              total: 5,
              percent: 27.78,
              compare: -40,
            },
            {
              name: "不活跃",
              total: 1,
              percent: 5.56,
              compare: 0,
            },
          ],
          gsqy: [
            {
              name: "非常活跃",
              total: 34,
              percent: 11.41,
              compare: 2.69,
              area: "规上企业",
              sum: 298,
            },
            {
              name: "活跃",
              total: 41,
              percent: 13.76,
              compare: 5.15,
            },
            {
              name: "不活跃",
              total: 78,
              percent: 26.17,
              compare: -17.54,
            },
          ],
        },
        {
          name: "大鹏新区",
          sort: 0,
          total: 0.74,
          qbqy: [
            {
              name: "非常活跃",
              total: 1126,
              percent: 10.72,
              compare: 0.93,
              area: "全部企业",
              sum: 10500,
            },
            {
              name: "活跃",
              total: 1752,
              percent: 16.69,
              compare: 1.85,
            },
            {
              name: "不活跃",
              total: 3820,
              percent: 36.38,
              compare: -0.32,
            },
          ],
          zbjj: [
            {
              name: "非常活跃",
              total: 1,
              percent: 50,
              compare: 100,
              area: "总部企业",
              sum: 2,
            },
            {
              name: "活跃",
              total: 0,
              percent: 0,
              compare: 0,
            },
            {
              name: "不活跃",
              total: 0,
              percent: 0,
              compare: 0,
            },
          ],
          ssgs: [
            {
              name: "非常活跃",
              total: 0,
              percent: 0,
              compare: 0,
              area: "上市公司",
              sum: 1,
            },
            {
              name: "活跃",
              total: 0,
              percent: 0,
              compare: 0,
            },
            {
              name: "不活跃",
              total: 0,
              percent: 0,
              compare: 0,
            },
          ],
          gsqy: [
            {
              name: "非常活跃",
              total: 6,
              percent: 26.09,
              compare: 3.85,
              area: "规上企业",
              sum: 23,
            },
            {
              name: "活跃",
              total: 4,
              percent: 17.39,
              compare: 25,
            },
            {
              name: "不活跃",
              total: 6,
              percent: 26.09,
              compare: -14.3,
            },
          ],
        },
        {
          name: "宝安区",
          sort: 0,
          total: 1.12,
          qbqy: [
            {
              name: "非常活跃",
              total: 38914,
              percent: 10.51,
              compare: 0.98,
              area: "全部企业",
              sum: 370257,
            },
            {
              name: "活跃",
              total: 68979,
              percent: 18.63,
              compare: 1.56,
            },
            {
              name: "不活跃",
              total: 122074,
              percent: 32.97,
              compare: -0.36,
            },
          ],
          zbjj: [
            {
              name: "非常活跃",
              total: 2,
              percent: 11.1,
              compare: 0,
              area: "总部企业",
              sum: 18,
            },
            {
              name: "活跃",
              total: 5,
              percent: 27.8,
              compare: 66.7,
            },
            {
              name: "不活跃",
              total: 4,
              percent: 22.2,
              compare: -42.9,
            },
          ],
          ssgs: [
            {
              name: "非常活跃",
              total: 7,
              percent: 16.28,
              compare: 16.67,
              area: "上市公司",
              sum: 43,
            },
            {
              name: "活跃",
              total: 9,
              percent: 20.93,
              compare: 15.5,
            },
            {
              name: "不活跃",
              total: 8,
              percent: 18.6,
              compare: 0,
            },
          ],
          gsqy: [
            {
              name: "非常活跃",
              total: 142,
              percent: 13.91,
              compare: 2.01,
              area: "规上企业",
              sum: 1021,
            },
            {
              name: "活跃",
              total: 214,
              percent: 20.96,
              compare: 1.78,
            },
            {
              name: "不活跃",
              total: 188,
              percent: 18.41,
              compare: -3.58,
            },
          ],
        },
        {
          name: "深汕合作区",
          sort: 0,
          total: 0.93,
          qbqy: [
            {
              name: "非常活跃",
              total: 437,
              percent: 16.54,
              compare: 4.19,
              area: "全部企业",
              sum: 2640,
            },
            {
              name: "活跃",
              total: 586,
              percent: 22.18,
              compare: 5.16,
            },
            {
              name: "不活跃",
              total: 319,
              percent: 12.07,
              compare: -0.49,
            },
          ],
          zbjj: [
            {
              name: "非常活跃",
              total: 0,
              percent: 0,
              compare: 0,
              area: "总部企业",
              sum: 0,
            },
            {
              name: "活跃",
              total: 0,
              percent: 0,
              compare: 0,
            },
            {
              name: "不活跃",
              total: 0,
              percent: 0,
              compare: 0,
            },
          ],
          ssgs: [
            {
              name: "非常活跃",
              total: 0,
              percent: 0,
              compare: 0,
              area: "上市公司",
              sum: 0,
            },
            {
              name: "活跃",
              total: 0,
              percent: 0,
              compare: 0,
            },
            {
              name: "不活跃",
              total: 0,
              percent: 0,
              compare: 0,
            },
          ],
          gsqy: [
            {
              name: "非常活跃",
              total: 1,
              percent: 12.5,
              compare: 0,
              area: "规上企业",
              sum: 8,
            },
            {
              name: "活跃",
              total: 2,
              percent: 25,
              compare: 50,
            },
            {
              name: "不活跃",
              total: 1,
              percent: 12.5,
              compare: -50,
            },
          ],
        },
        {
          name: "盐田区",
          sort: 0,
          total: 0.85,
          qbqy: [
            {
              name: "非常活跃",
              total: 2497,
              percent: 8.25,
              compare: 1.39,
              area: "全部企业",
              sum: 30271,
            },
            {
              name: "活跃",
              total: 5192,
              percent: 17.15,
              compare: 3.12,
            },
            {
              name: "不活跃",
              total: 10304,
              percent: 34.04,
              compare: -0.04,
            },
          ],
          zbjj: [
            {
              name: "非常活跃",
              total: 0,
              percent: 0,
              compare: 0,
              area: "总部企业",
              sum: 1,
            },
            {
              name: "活跃",
              total: 0,
              percent: 0,
              compare: 0,
            },
            {
              name: "不活跃",
              total: 0,
              percent: 0,
              compare: -100,
            },
          ],
          ssgs: [
            {
              name: "非常活跃",
              total: 0,
              percent: 0,
              compare: 0,
              area: "上市公司",
              sum: 3,
            },
            {
              name: "活跃",
              total: 1,
              percent: 33.33,
              compare: 100,
            },
            {
              name: "不活跃",
              total: 0,
              percent: 0,
              compare: 0,
            },
          ],
          gsqy: [
            {
              name: "非常活跃",
              total: 26,
              percent: 14.05,
              compare: 3.48,
              area: "规上企业",
              sum: 185,
            },
            {
              name: "活跃",
              total: 51,
              percent: 27.57,
              compare: 1.44,
            },
            {
              name: "不活跃",
              total: 29,
              percent: 15.68,
              compare: -6.24,
            },
          ],
        },
        {
          name: "福田区",
          sort: 0,
          total: 0.66,
          qbqy: [
            {
              name: "非常活跃",
              total: 33865,
              percent: 11.36,
              compare: 2.13,
              area: "全部企业",
              sum: 298109,
            },
            {
              name: "活跃",
              total: 64570,
              percent: 21.66,
              compare: 2.35,
            },
            {
              name: "不活跃",
              total: 80549,
              percent: 27.02,
              compare: -0.23,
            },
          ],
          zbjj: [
            {
              name: "非常活跃",
              total: 8,
              percent: 11,
              compare: 14.3,
              area: "总部企业",
              sum: 73,
            },
            {
              name: "活跃",
              total: 14,
              percent: 19.2,
              compare: 16.7,
            },
            {
              name: "不活跃",
              total: 10,
              percent: 13.7,
              compare: -44.4,
            },
          ],
          ssgs: [
            {
              name: "非常活跃",
              total: 10,
              percent: 14.93,
              compare: 25,
              area: "上市公司",
              sum: 67,
            },
            {
              name: "活跃",
              total: 15,
              percent: 22.39,
              compare: 25,
            },
            {
              name: "不活跃",
              total: 6,
              percent: 8.96,
              compare: -25,
            },
          ],
          gsqy: [
            {
              name: "非常活跃",
              total: 254,
              percent: 11.79,
              compare: 1.43,
              area: "规上企业",
              sum: 2154,
            },
            {
              name: "活跃",
              total: 498,
              percent: 23.12,
              compare: 3.47,
            },
            {
              name: "不活跃",
              total: 371,
              percent: 17.22,
              compare: -1.25,
            },
          ],
        },
        {
          name: "罗湖区",
          sort: 0,
          total: 1.21,
          qbqy: [
            {
              name: "非常活跃",
              total: 15432,
              percent: 9.25,
              compare: 1.58,
              area: "全部企业",
              sum: 166831,
            },
            {
              name: "活跃",
              total: 32949,
              percent: 19.75,
              compare: 2.12,
            },
            {
              name: "不活跃",
              total: 54153,
              percent: 32.46,
              compare: -0.12,
            },
          ],
          zbjj: [
            {
              name: "非常活跃",
              total: 3,
              percent: 15,
              compare: -25,
              area: "总部企业",
              sum: 20,
            },
            {
              name: "活跃",
              total: 5,
              percent: 25,
              compare: 67,
            },
            {
              name: "不活跃",
              total: 4,
              percent: 20,
              compare: 42.9,
            },
          ],
          ssgs: [
            {
              name: "非常活跃",
              total: 3,
              percent: 17.6,
              compare: 50,
              area: "上市公司",
              sum: 17,
            },
            {
              name: "活跃",
              total: 4,
              percent: 23.53,
              compare: 33.33,
            },
            {
              name: "不活跃",
              total: 2,
              percent: 11.76,
              compare: -33.33,
            },
          ],
          gsqy: [
            {
              name: "非常活跃",
              total: 198,
              percent: 13.88,
              compare: 1.12,
              area: "规上企业",
              sum: 1426,
            },
            {
              name: "活跃",
              total: 345,
              percent: 24.19,
              compare: 1.28,
            },
            {
              name: "不活跃",
              total: 201,
              percent: 14.1,
              compare: -3.12,
            },
          ],
        },
        {
          name: "龙华区",
          sort: 0,
          total: 0.74,
          qbqy: [
            {
              name: "非常活跃",
              total: 14401,
              percent: 8.11,
              compare: 2.26,
              area: "全部企业",
              sum: 177576,
            },
            {
              name: "活跃",
              total: 26903,
              percent: 15.15,
              compare: 1.95,
            },
            {
              name: "不活跃",
              total: 67035,
              percent: 37.75,
              compare: -0.43,
            },
          ],
          zbjj: [
            {
              name: "非常活跃",
              total: 1,
              percent: 25,
              compare: 100,
              area: "总部企业",
              sum: 4,
            },
            {
              name: "活跃",
              total: 0,
              percent: 0,
              compare: -100,
            },
            {
              name: "不活跃",
              total: 0,
              percent: 0,
              compare: -100,
            },
          ],
          ssgs: [
            {
              name: "非常活跃",
              total: 1,
              percent: 7.69,
              compare: 0,
              area: "上市公司",
              sum: 13,
            },
            {
              name: "活跃",
              total: 4,
              percent: 30.77,
              compare: 0,
            },
            {
              name: "不活跃",
              total: 2,
              percent: 15.38,
              compare: -33.33,
            },
          ],
          gsqy: [
            {
              name: "非常活跃",
              total: 138,
              percent: 11.49,
              compare: 0.98,
              area: "规上企业",
              sum: 65,
            },
            {
              name: "活跃",
              total: 287,
              percent: 23.9,
              compare: 2.01,
            },
            {
              name: "不活跃",
              total: 184,
              percent: 15.32,
              compare: -3.14,
            },
          ],
        },
        {
          name: "龙岗区",
          sort: 0,
          total: 1.12,
          qbqy: [
            {
              name: "非常活跃",
              total: 20377,
              percent: 7.89,
              compare: 1.74,
              area: "全部企业",
              sum: 258259,
            },
            {
              name: "活跃",
              total: 38145,
              percent: 14.77,
              compare: 2.29,
            },
            {
              name: "不活跃",
              total: 92508,
              percent: 35.82,
              compare: -0.16,
            },
          ],
          zbjj: [
            {
              name: "非常活跃",
              total: 0,
              percent: 0,
              compare: 0,
              area: "总部企业",
              sum: 4,
            },
            {
              name: "活跃",
              total: 2,
              percent: 50,
              compare: 100,
            },
            {
              name: "不活跃",
              total: 1,
              percent: 25,
              compare: 0,
            },
          ],
          ssgs: [
            {
              name: "非常活跃",
              total: 2,
              percent: 13.33,
              compare: 100,
              area: "上市公司",
              sum: 15,
            },
            {
              name: "活跃",
              total: 3,
              percent: 20,
              compare: 50,
            },
            {
              name: "不活跃",
              total: 3,
              percent: 20,
              compare: 0,
            },
          ],
          gsqy: [
            {
              name: "非常活跃",
              total: 127,
              percent: 14.98,
              compare: 1.28,
              area: "规上企业",
              sum: 848,
            },
            {
              name: "活跃",
              total: 244,
              percent: 28.77,
              compare: 0.84,
            },
            {
              name: "不活跃",
              total: 53,
              percent: 6.25,
              compare: -5.58,
            },
          ],
        },
      ],
    },
    // 产业用电量情况
    cyydlqk: {
      type: Array,
      default: () => [
        {
          name: "光明区",
          sort: 0,
          total: 10.29,
          list: [
            {
              name: "一产",
              total: -6.94,
              percent: 0.2,
              compare: 0.51,
            },
            {
              name: "二产",
              total: 1.09,
              percent: 67.5,
              compare: -2.33,
            },
            {
              name: "三产",
              total: 0.16,
              percent: 32.3,
              compare: 10.44,
            },
          ],
        },

        {
          name: "南山区",

          sort: 0,
          total: 5.27,
          list: [
            {
              name: "一产",
              total: -1.71,
              percent: 0.01,
              compare: -1.04,
            },
            {
              name: "二产",
              total: 0.18,
              percent: 33.58,
              compare: -0.15,
            },
            {
              name: "三产",
              total: 3.14,
              percent: 66.41,
              compare: 3.0,
            },
          ],
        },
        {
          name: "坪山区",
          sort: 0,
          total: 9.75,
          list: [
            {
              name: "一产",
              total: -1.58,
              percent: 0.12,
              compare: -2.93,
            },
            {
              name: "二产",
              total: 4.15,
              percent: 61.72,
              compare: -3.62,
            },
            {
              name: "三产",
              total: 6.15,
              percent: 38.16,
              compare: 3.91,
            },
          ],
        },
        {
          name: "大鹏新区",

          sort: 0,
          total: 2.34,
          list: [
            {
              name: "一产",
              total: -1.74,
              percent: 0.26,
              compare: -2.37,
            },
            {
              name: "二产",
              total: 1.58,
              percent: 59.11,
              compare: -1.29,
            },
            {
              name: "三产",
              total: 0.69,
              percent: 40.63,
              compare: 1.49,
            },
          ],
        },
        {
          name: "宝安区",

          sort: 0,
          total: 7.15,
          list: [
            {
              name: "一产",
              total: -5.21,
              percent: 0.02,
              compare: -2.51,
            },
            {
              name: "二产",
              total: 0.97,
              percent: 48.24,
              compare: -5.12,
            },
            {
              name: "三产",
              total: 2.67,
              percent: 51.75,
              compare: 5.75,
            },
          ],
        },
        {
          name: "深汕合作区",

          sort: 0,
          total: 18.74,
          list: [
            {
              name: "一产",
              total: -2.69,
              percent: 32.17,
              compare: -1.37,
            },
            {
              name: "二产",
              total: 4.66,
              percent: 33.55,
              compare: -1.52,
            },
            {
              name: "三产",
              total: 3.59,
              percent: 34.29,
              compare: 6.29,
            },
          ],
        },
        {
          name: "盐田区",

          sort: 0,
          total: 7.85,
          list: [
            {
              name: "一产",
              total: -5.35,
              percent: 0.04,
              compare: 1.82,
            },
            {
              name: "二产",
              total: -2.84,
              percent: 12.7,
              compare: -1.7,
            },
            {
              name: "三产",
              total: 2.74,
              percent: 87.26,
              compare: 5.0,
            },
          ],
        },
        {
          name: "福田区",

          sort: 0,
          total: 4.18,
          list: [
            {
              name: "一产",
              total: -3.92,
              percent: 0.05,
              compare: -5.78,
            },
            {
              name: "二产",
              total: 2.51,
              percent: 8.53,
              compare: 3.0,
            },
            {
              name: "三产",
              total: 4.02,
              percent: 91.42,
              compare: 4.53,
            },
          ],
        },
        {
          name: "罗湖区",

          sort: 0,
          total: 8.42,
          list: [
            {
              name: "一产",
              total: -3.7,
              percent: 0.05,
              compare: -1.36,
            },
            {
              name: "二产",
              total: 1.46,
              percent: 7.22,
              compare: -3.11,
            },
            {
              name: "三产",
              total: 2.1,
              percent: 92.72,
              compare: 3.01,
            },
          ],
        },
        {
          name: "龙华区",

          sort: 0,
          total: 3.36,
          list: [
            {
              name: "一产",
              total: -1.37,
              percent: 0.01,
              compare: -1.53,
            },
            {
              name: "二产",
              total: -1.54,
              percent: 47.83,
              compare: -1.35,
            },
            {
              name: "三产",
              total: 3.02,
              percent: 52.16,
              compare: 3.93,
            },
          ],
        },
        {
          name: "龙岗区",

          sort: 0,
          total: 7.55,
          list: [
            {
              name: "一产",
              total: -3.25,
              percent: 0.02,
              compare: -2.23,
            },
            {
              name: "二产",
              total: 1.98,
              percent: 71.73,
              compare: -3.82,
            },
            {
              name: "三产",
              total: 0.88,
              percent: 28.26,
              compare: 8.02,
            },
          ],
        },
      ],
    },
    // 区域用电增长均衡度
    qyydzzjhd: {
      type: Array,
      default: () => [
        {
          name: "光明区",
          sort: 0,
          map: {
            // 重点片区
            zdpq: [
              {
                name: "重点片区",
                total: 2,
                unit: "个",
              },
              {
                name: "用电增长",
                total: 2.54,
                unit: "%",
              },
              {
                name: "最高增速",
                total: 3.25,
                unit: "%",
              },
              {
                name: "最低增速",
                total: 1.83,
                unit: "%",
              },
            ],
            // 工业园区
            gyyq: [
              {
                name: "工业园区",
                total: 9,
                unit: "个",
              },
              {
                name: "用电增长",
                total: 1.22,
                unit: "%",
              },
              {
                name: "最高增速",
                total: 3.28,
                unit: "%",
              },
              {
                name: "最低增速",
                total: 0.23,
                unit: "%",
              },
            ],
            // 商圈
            sq: [
              {
                name: "商圈",
                total: 6,
                unit: "个",
              },
              {
                name: "用电增长",
                total: 0.23,
                unit: "%",
              },
              {
                name: "最高增速",
                total: 1.83,
                unit: "%",
              },
              {
                name: "最低增速",
                total: -0.85,
                unit: "%",
              },
            ],
            // 写字楼
            xzl: [
              {
                name: "写字楼",
                total: 29,
                unit: "个",
              },
              {
                name: "用电增长",
                total: 0.04,
                unit: "%",
              },
              {
                name: "最高增速",
                total: 2.89,
                unit: "%",
              },
              {
                name: "最低增速",
                total: -4.12,
                unit: "%",
              },
            ],
          },
        },

        {
          name: "南山区",

          sort: 0,
          map: {
            // 重点片区
            zdpq: [
              {
                name: "重点片区",
                total: 3,
                unit: "个",
              },
              {
                name: "用电增长",
                total: 2.88,
                unit: "%",
              },
              {
                name: "最高增速",
                total: 3.35,
                unit: "%",
              },
              {
                name: "最低增速",
                total: 1.62,
                unit: "%",
              },
            ],
            // 工业园区
            gyyq: [
              {
                name: "工业园区",
                total: 10,
                unit: "个",
              },
              {
                name: "用电增长",
                total: 0.45,
                unit: "%",
              },
              {
                name: "最高增速",
                total: 1.69,
                unit: "%",
              },
              {
                name: "最低增速",
                total: 0.19,
                unit: "%",
              },
            ],
            // 商圈
            sq: [
              {
                name: "商圈",
                total: 29,
                unit: "个",
              },
              {
                name: "用电增长",
                total: 1.04,
                unit: "%",
              },
              {
                name: "最高增速",
                total: 3.69,
                unit: "%",
              },
              {
                name: "最低增速",
                total: 0.41,
                unit: "%",
              },
            ],
            // 写字楼
            xzl: [
              {
                name: "写字楼",
                total: 177,
                unit: "个",
              },
              {
                name: "用电增长",
                total: 0.25,
                unit: "%",
              },
              {
                name: "最高增速",
                total: 3.19,
                unit: "%",
              },
              {
                name: "最低增速",
                total: -1.85,
                unit: "%",
              },
            ],
          },
        },
        {
          name: "坪山区",

          sort: 0,
          map: {
            // 重点片区
            zdpq: [
              {
                name: "重点片区",
                total: 1,
                unit: "个",
              },
              {
                name: "用电增长",
                total: 0.63,
                unit: "%",
              },
              {
                name: "最高增速",
                total: 0.63,
                unit: "%",
              },
              {
                name: "最低增速",
                total: 0.63,
                unit: "%",
              },
            ],
            // 工业园区
            gyyq: [
              {
                name: "工业园区",
                total: 8,
                unit: "个",
              },
              {
                name: "用电增长",
                total: 1.21,
                unit: "%",
              },
              {
                name: "最高增速",
                total: 1.77,
                unit: "%",
              },
              {
                name: "最低增速",
                total: 0.24,
                unit: "%",
              },
            ],
            // 商圈
            sq: [
              {
                name: "商圈",
                total: 2,
                unit: "个",
              },
              {
                name: "用电增长",
                total: 0.34,
                unit: "%",
              },
              {
                name: "最高增速",
                total: 0.58,
                unit: "%",
              },
              {
                name: "最低增速",
                total: 0.3,
                unit: "%",
              },
            ],
            // 写字楼
            xzl: [
              {
                name: "写字楼",
                total: 7,
                unit: "个",
              },
              {
                name: "用电增长",
                total: 0.19,
                unit: "%",
              },
              {
                name: "最高增速",
                total: 3.14,
                unit: "%",
              },
              {
                name: "最低增速",
                total: -0.35,
                unit: "%",
              },
            ],
          },
        },
        {
          name: "大鹏新区",

          sort: 0,
          map: {
            // 重点片区
            zdpq: [
              {
                name: "重点片区",
                total: 1,
                unit: "个",
              },
              {
                name: "用电增长",
                total: -0.24,
                unit: "%",
              },
              {
                name: "最高增速",
                total: -0.24,
                unit: "%",
              },
              {
                name: "最低增速",
                total: -0.24,
                unit: "%",
              },
            ],
            // 工业园区
            gyyq: [
              {
                name: "工业园区",
                total: 1,
                unit: "个",
              },
              {
                name: "用电增长",
                total: 1.25,
                unit: "%",
              },
              {
                name: "最高增速",
                total: 2.64,
                unit: "%",
              },
              {
                name: "最低增速",
                total: 0.37,
                unit: "%",
              },
            ],
            // 商圈
            sq: [
              {
                name: "商圈",
                total: 1,
                unit: "个",
              },
              {
                name: "用电增长",
                total: 0.27,
                unit: "%",
              },
              {
                name: "最高增速",
                total: 0.27,
                unit: "%",
              },
              {
                name: "最低增速",
                total: 0.27,
                unit: "%",
              },
            ],
            // 写字楼
            xzl: [
              {
                name: "写字楼",
                total: 0,
                unit: "个",
              },
              {
                name: "用电增长",
                total: 0,
                unit: "%",
              },
              {
                name: "最高增速",
                total: 0,
                unit: "%",
              },
              {
                name: "最低增速",
                total: 0,
                unit: "%",
              },
            ],
          },
        },
        {
          name: "宝安区",

          sort: 0,
          map: {
            // 重点片区
            zdpq: [
              {
                name: "重点片区",
                total: 3,
                unit: "个",
              },
              {
                name: "用电增长",
                total: 1.34,
                unit: "%",
              },
              {
                name: "最高增速",
                total: 2.01,
                unit: "%",
              },
              {
                name: "最低增速",
                total: 0.58,
                unit: "%",
              },
            ],
            // 工业园区
            gyyq: [
              {
                name: "工业园区",
                total: 53,
                unit: "个",
              },
              {
                name: "用电增长",
                total: 1.54,
                unit: "%",
              },
              {
                name: "最高增速",
                total: 3.42,
                unit: "%",
              },
              {
                name: "最低增速",
                total: 0.68,
                unit: "%",
              },
            ],
            // 商圈
            sq: [
              {
                name: "商圈",
                total: 28,
                unit: "个",
              },
              {
                name: "用电增长",
                total: 0.45,
                unit: "%",
              },
              {
                name: "最高增速",
                total: 1.86,
                unit: "%",
              },
              {
                name: "最低增速",
                total: 0.06,
                unit: "%",
              },
            ],
            // 写字楼
            xzl: [
              {
                name: "写字楼",
                total: 55,
                unit: "个",
              },
              {
                name: "用电增长",
                total: 0.44,
                unit: "%",
              },
              {
                name: "最高增速",
                total: 3.38,
                unit: "%",
              },
              {
                name: "最低增速",
                total: -2.78,
                unit: "%",
              },
            ],
          },
        },
        {
          name: "深汕合作区",

          sort: 0,
          map: {
            // 重点片区
            zdpq: [
              {
                name: "重点片区",
                total: 0,
                unit: "个",
              },
              {
                name: "用电增长",
                total: 0,
                unit: "%",
              },
              {
                name: "最高增速",
                total: 0,
                unit: "%",
              },
              {
                name: "最低增速",
                total: 0,
                unit: "%",
              },
            ],
            // 工业园区
            gyyq: [
              {
                name: "工业园区",
                total: 1,
                unit: "个",
              },
              {
                name: "用电增长",
                total: 1.34,
                unit: "%",
              },
              {
                name: "最高增速",
                total: 1.94,
                unit: "%",
              },
              {
                name: "最低增速",
                total: 0.48,
                unit: "%",
              },
            ],
            // 商圈
            sq: [
              {
                name: "商圈",
                total: 0,
                unit: "个",
              },
              {
                name: "用电增长",
                total: 0,
                unit: "%",
              },
              {
                name: "最高增速",
                total: 0,
                unit: "%",
              },
              {
                name: "最低增速",
                total: 0,
                unit: "%",
              },
            ],
            // 写字楼
            xzl: [
              {
                name: "写字楼",
                total: 0,
                unit: "个",
              },
              {
                name: "用电增长",
                total: 0,
                unit: "%",
              },
              {
                name: "最高增速",
                total: 0,
                unit: "%",
              },
              {
                name: "最低增速",
                total: 0,
                unit: "%",
              },
            ],
          },
        },
        {
          name: "盐田区",

          sort: 0,
          map: {
            // 重点片区
            zdpq: [
              {
                name: "重点片区",
                total: 2,
                unit: "个",
              },
              {
                name: "用电增长",
                total: 3.15,
                unit: "%",
              },
              {
                name: "最高增速",
                total: 4.16,
                unit: "%",
              },
              {
                name: "最低增速",
                total: 2.14,
                unit: "%",
              },
            ],
            // 工业园区
            gyyq: [
              {
                name: "工业园区",
                total: 3,
                unit: "个",
              },
              {
                name: "用电增长",
                total: 1.14,
                unit: "%",
              },
              {
                name: "最高增速",
                total: 2.85,
                unit: "%",
              },
              {
                name: "最低增速",
                total: 0.54,
                unit: "%",
              },
            ],
            // 商圈
            sq: [
              {
                name: "商圈",
                total: 0,
                unit: "个",
              },
              {
                name: "用电增长",
                total: 0.34,
                unit: "%",
              },
              {
                name: "最高增速",
                total: 0,
                unit: "%",
              },
              {
                name: "最低增速",
                total: 0,
                unit: "%",
              },
            ],
            // 写字楼
            xzl: [
              {
                name: "写字楼",
                total: 5,
                unit: "个",
              },
              {
                name: "用电增长",
                total: 0.11,
                unit: "%",
              },
              {
                name: "最高增速",
                total: 6.75,
                unit: "%",
              },
              {
                name: "最低增速",
                total: -3.99,
                unit: "%",
              },
            ],
          },
        },
        {
          name: "福田区",

          sort: 0,
          map: {
            // 重点片区
            zdpq: [
              {
                name: "重点片区",
                total: 3,
                unit: "个",
              },
              {
                name: "用电增长",
                total: 1.46,
                unit: "%",
              },
              {
                name: "最高增速",
                total: 1.93,
                unit: "%",
              },
              {
                name: "最低增速",
                total: 1.05,
                unit: "%",
              },
            ],
            // 工业园区
            gyyq: [
              {
                name: "工业园区",
                total: 13,
                unit: "个",
              },
              {
                name: "用电增长",
                total: 0.53,
                unit: "%",
              },
              {
                name: "最高增速",
                total: 1.25,
                unit: "%",
              },
              {
                name: "最低增速",
                total: 0.08,
                unit: "%",
              },
            ],
            // 商圈
            sq: [
              {
                name: "商圈",
                total: 27,
                unit: "个",
              },
              {
                name: "用电增长",
                total: 0.58,
                unit: "%",
              },
              {
                name: "最高增速",
                total: 2.58,
                unit: "%",
              },
              {
                name: "最低增速",
                total: 0.02,
                unit: "%",
              },
            ],
            // 写字楼
            xzl: [
              {
                name: "写字楼",
                total: 191,
                unit: "个",
              },
              {
                name: "用电增长",
                total: 0.08,
                unit: "%",
              },
              {
                name: "最高增速",
                total: 2.48,
                unit: "%",
              },
              {
                name: "最低增速",
                total: -0.69,
                unit: "%",
              },
            ],
          },
        },
        {
          name: "罗湖区",

          sort: 0,
          map: {
            // 重点片区
            zdpq: [
              {
                name: "重点片区",
                total: 1,
                unit: "个",
              },
              {
                name: "用电增长",
                total: 0.34,
                unit: "%",
              },
              {
                name: "最高增速",
                total: 0.34,
                unit: "%",
              },
              {
                name: "最低增速",
                total: 0.34,
                unit: "%",
              },
            ],
            // 工业园区
            gyyq: [
              {
                name: "工业园区",
                total: 8,
                unit: "个",
              },
              {
                name: "用电增长",
                total: 0.75,
                unit: "%",
              },
              {
                name: "最高增速",
                total: 1.99,
                unit: "%",
              },
              {
                name: "最低增速",
                total: 0.12,
                unit: "%",
              },
            ],
            // 商圈
            sq: [
              {
                name: "商圈",
                total: 26,
                unit: "个",
              },
              {
                name: "用电增长",
                total: 0.77,
                unit: "%",
              },
              {
                name: "最高增速",
                total: 2.96,
                unit: "%",
              },
              {
                name: "最低增速",
                total: 0.23,
                unit: "%",
              },
            ],
            // 写字楼
            xzl: [
              {
                name: "写字楼",
                total: 92,
                unit: "个",
              },
              {
                name: "用电增长",
                total: -0.14,
                unit: "%",
              },
              {
                name: "最高增速",
                total: 1.96,
                unit: "%",
              },
              {
                name: "最低增速",
                total: -1.74,
                unit: "%",
              },
            ],
          },
        },
        {
          name: "龙华区",

          sort: 0,
          map: {
            // 重点片区
            zdpq: [
              {
                name: "重点片区",
                total: 1,
                unit: "个",
              },
              {
                name: "用电增长",
                total: 2.23,
                unit: "%",
              },
              {
                name: "最高增速",
                total: 3.14,
                unit: "%",
              },
              {
                name: "最低增速",
                total: 1.25,
                unit: "%",
              },
            ],
            // 工业园区
            gyyq: [
              {
                name: "工业园区",
                total: 18,
                unit: "个",
              },
              {
                name: "用电增长",
                total: 1.83,
                unit: "%",
              },
              {
                name: "最高增速",
                total: 3.81,
                unit: "%",
              },
              {
                name: "最低增速",
                total: 0.51,
                unit: "%",
              },
            ],
            // 商圈
            sq: [
              {
                name: "商圈",
                total: 20,
                unit: "个",
              },
              {
                name: "用电增长",
                total: 0.22,
                unit: "%",
              },
              {
                name: "最高增速",
                total: 1.49,
                unit: "%",
              },
              {
                name: "最低增速",
                total: -0.36,
                unit: "%",
              },
            ],
            // 写字楼
            xzl: [
              {
                name: "写字楼",
                total: 80,
                unit: "个",
              },
              {
                name: "用电增长",
                total: -0.12,
                unit: "%",
              },
              {
                name: "最高增速",
                total: 2.86,
                unit: "%",
              },
              {
                name: "最低增速",
                total: -3.47,
                unit: "%",
              },
            ],
          },
        },
        {
          name: "龙岗区",

          sort: 0,
          map: {
            // 重点片区
            zdpq: [
              {
                name: "重点片区",
                total: 4,
                unit: "个",
              },
              {
                name: "用电增长",
                total: 3.09,
                unit: "%",
              },
              {
                name: "最高增速",
                total: 2.69,
                unit: "%",
              },
              {
                name: "最低增速",
                total: 1.98,
                unit: "%",
              },
            ],
            // 工业园区
            gyyq: [
              {
                name: "工业园区",
                total: 24,
                unit: "个",
              },
              {
                name: "用电增长",
                total: 2.34,
                unit: "%",
              },
              {
                name: "最高增速",
                total: 3.41,
                unit: "%",
              },
              {
                name: "最低增速",
                total: 0.87,
                unit: "%",
              },
            ],
            // 商圈
            sq: [
              {
                name: "商圈",
                total: 42,
                unit: "个",
              },
              {
                name: "用电增长",
                total: 0.35,
                unit: "%",
              },
              {
                name: "最高增速",
                total: 1.99,
                unit: "%",
              },
              {
                name: "最低增速",
                total: -0.17,
                unit: "%",
              },
            ],
            // 写字楼
            xzl: [
              {
                name: "写字楼",
                total: 56,
                unit: "个",
              },
              {
                name: "用电增长",
                total: 0.15,
                unit: "%",
              },
              {
                name: "最高增速",
                total: 4.25,
                unit: "%",
              },
              {
                name: "最低增速",
                total: -2.56,
                unit: "%",
              },
            ],
          },
        },
      ],
    },
    // 各区用电增长均衡度
    gqydzzjhd: {
      type: Array,
      default: () => [
        {
          name: "光明区",
          total: 0.7,
          list: [
            {
              name: "重点片区",
              total: 2,
              unit: "个",
            },
            {
              name: "工业园区",
              total: 99,
              unit: "个",
            },
            {
              name: "商圈",
              total: 1,
              unit: "个",
            },
            {
              name: "写字楼",
              total: 37,
              unit: "座",
            },
          ],
        },

        {
          name: "南山区",
          total: 0.76,
          list: [
            {
              name: "重点片区",
              total: 2,
              unit: "个",
            },
            {
              name: "工业园区",
              total: 159,
              unit: "个",
            },
            {
              name: "商圈",
              total: 1,
              unit: "个",
            },
            {
              name: "写字楼",
              total: 84,
              unit: "座",
            },
          ],
        },
        {
          name: "坪山区",
          total: -0.77,
          list: [
            {
              name: "重点片区",
              total: 1,
              unit: "个",
            },
            {
              name: "工业园区",
              total: 88,
              unit: "个",
            },
            {
              name: "商圈",
              total: 0,
              unit: "个",
            },
            {
              name: "写字楼",
              total: 35,
              unit: "座",
            },
          ],
        },
        {
          name: "大鹏新区",
          total: 0.75,
          list: [
            {
              name: "重点片区",
              total: 1,
              unit: "个",
            },
            {
              name: "工业园区",
              total: 62,
              unit: "个",
            },
            {
              name: "商圈",
              total: 0,
              unit: "个",
            },
            {
              name: "写字楼",
              total: 13,
              unit: "座",
            },
          ],
        },
        {
          name: "宝安区",
          total: 0.64,
          list: [
            {
              name: "重点片区",
              total: 2,
              unit: "个",
            },
            {
              name: "工业园区",
              total: 93,
              unit: "个",
            },
            {
              name: "商圈",
              total: 1,
              unit: "个",
            },
            {
              name: "写字楼",
              total: 82,
              unit: "座",
            },
          ],
        },
        {
          name: "深汕合作区",
          total: -0.97,
          list: [
            {
              name: "重点片区",
              total: 1,
              unit: "个",
            },
            {
              name: "工业园区",
              total: 44,
              unit: "个",
            },
            {
              name: "商圈",
              total: 0,
              unit: "个",
            },
            {
              name: "写字楼",
              total: 27,
              unit: "座",
            },
          ],
        },
        {
          name: "盐田区",
          total: 0.65,
          list: [
            {
              name: "重点片区",
              total: 1,
              unit: "个",
            },
            {
              name: "工业园区",
              total: 98,
              unit: "个",
            },
            {
              name: "商圈",
              total: 1,
              unit: "个",
            },
            {
              name: "写字楼",
              total: 48,
              unit: "座",
            },
          ],
        },
        {
          name: "福田区",
          total: 0.58,
          list: [
            {
              name: "重点片区",
              total: 3,
              unit: "个",
            },
            {
              name: "工业园区",
              total: 216,
              unit: "个",
            },
            {
              name: "商圈",
              total: 2,
              unit: "个",
            },
            {
              name: "写字楼",
              total: 106,
              unit: "座",
            },
          ],
        },
        {
          name: "罗湖区",
          total: 0.64,
          list: [
            {
              name: "重点片区",
              total: 2,
              unit: "个",
            },
            {
              name: "工业园区",
              total: 75,
              unit: "个",
            },
            {
              name: "商圈",
              total: 1,
              unit: "个",
            },
            {
              name: "写字楼",
              total: 60,
              unit: "座",
            },
          ],
        },
        {
          name: "龙华区",
          total: 0.68,
          list: [
            {
              name: "重点片区",
              total: 2,
              unit: "个",
            },
            {
              name: "工业园区",
              total: 63,
              unit: "个",
            },
            {
              name: "商圈",
              total: 1,
              unit: "个",
            },
            {
              name: "写字楼",
              total: 53,
              unit: "座",
            },
          ],
        },
        {
          name: "龙岗区",
          total: 0.67,
          list: [
            {
              name: "重点片区",
              total: 1,
              unit: "个",
            },
            {
              name: "工业园区",
              total: 75,
              unit: "个",
            },
            {
              name: "商圈",
              total: 1,
              unit: "个",
            },
            {
              name: "写字楼",
              total: 51,
              unit: "座",
            },
          ],
        },
      ],
    },
    // 各产业发展用电情况
    gcyfzydqk: {
      type: Array,
      default: () => [
        {
          name: "光明区",

          // 民生
          ms: {
            name: "民生",
            total: 4,
            percent: 0.5,
            increase: 0.15,
          },
          // 绿色经济
          lsjj: {
            name: "绿色经济",
            total: 6,
            percent: 0.52,
            increase: 0.12,
          },
          // 双循环
          sxh: {
            name: "双循环",
            total: 0,
            percent: 0,
            increase: 0.21,
          },
          // 高质量
          gzl: {
            name: "高质量",
            total: 0,
            percent: 0,
            increase: 0.15,
          },
        },

        {
          name: "南山区",
          // 民生
          ms: {
            name: "民生",
            total: 113,
            percent: 14.04,
            increase: 0.16,
          },
          // 绿色经济
          lsjj: {
            name: "绿色经济",
            total: 193,
            percent: 16.64,
            increase: 0.14,
          },
          // 双循环
          sxh: {
            name: "双循环",
            total: 47,
            percent: 13.58,
            increase: 0.15,
          },
          // 高质量
          gzl: {
            name: "高质量",
            total: 24,
            percent: 14.46,
            increase: 0.08,
          },
        },
        {
          name: "坪山区",
          // 民生
          ms: {
            name: "民生",
            total: 26,
            percent: 3.23,
            increase: 0.17,
          },
          // 绿色经济
          lsjj: {
            name: "绿色经济",
            total: 41,
            percent: 3.53,
            increase: 0.34,
          },
          // 双循环
          sxh: {
            name: "双循环",
            total: 19,
            percent: 5.49,
            increase: 0.34,
          },
          // 高质量
          gzl: {
            name: "高质量",
            total: 3,
            percent: 1.81,
            increase: 0.14,
          },
        },
        {
          name: "大鹏新区",
          // 民生
          ms: {
            name: "民生",
            total: 48,
            percent: 5.96,
            increase: 0.11,
          },
          // 绿色经济
          lsjj: {
            name: "绿色经济",
            total: 67,
            percent: 5.78,
            increase: 0.29,
          },
          // 双循环
          sxh: {
            name: "双循环",
            total: 21,
            percent: 6.07,
            increase: 0.75,
          },
          // 高质量
          gzl: {
            name: "高质量",
            total: 7,
            percent: 4.22,
            increase: 0.11,
          },
        },
        {
          name: "宝安区",
          // 民生
          ms: {
            name: "民生",
            total: 134,
            percent: 16.65,
            increase: 0.32,
          },
          // 绿色经济
          lsjj: {
            name: "绿色经济",
            total: 188,
            percent: 16.21,
            increase: 0.21,
          },
          // 双循环
          sxh: {
            name: "双循环",
            total: 61,
            percent: 17.63,
            increase: 0.24,
          },
          // 高质量
          gzl: {
            name: "高质量",
            total: 31,
            percent: 18.67,
            increase: 0.41,
          },
        },
        {
          name: "深汕合作区",
          // 民生
          ms: {
            name: "民生",
            total: 2,
            percent: 0.25,
            increase: 0.67,
          },
          // 绿色经济
          lsjj: {
            name: "绿色经济",
            total: 3,
            percent: 0.26,
            increase: 0.67,
          },
          // 双循环
          sxh: {
            name: "双循环",
            total: 0,
            percent: 0,
            increase: 0.45,
          },
          // 高质量
          gzl: {
            name: "高质量",
            total: 0,
            percent: 0,
            increase: 0.22,
          },
        },
        {
          name: "盐田区",
          // 民生
          ms: {
            name: "民生",
            total: 33,
            percent: 4.1,
            increase: 0.24,
          },
          // 绿色经济
          lsjj: {
            name: "绿色经济",
            total: 54,
            percent: 4.66,
            increase: 0.35,
          },
          // 双循环
          sxh: {
            name: "双循环",
            total: 17,
            percent: 4.91,
            increase: 0.14,
          },
          // 高质量
          gzl: {
            name: "高质量",
            total: 5,
            percent: 3.01,
            increase: 0.23,
          },
        },
        {
          name: "福田区",
          // 民生
          ms: {
            name: "民生",
            total: 102,
            percent: 12.67,
            increase: 0.25,
          },
          // 绿色经济
          lsjj: {
            name: "绿色经济",
            total: 178,
            percent: 15.34,
            increase: 0.09,
          },
          // 双循环
          sxh: {
            name: "双循环",
            total: 42,
            percent: 12.14,
            increase: 0.37,
          },
          // 高质量
          gzl: {
            name: "高质量",
            total: 29,
            percent: 17.47,
            increase: 0.21,
          },
        },
        {
          name: "罗湖区",
          // 民生
          ms: {
            name: "民生",
            total: 154,
            percent: 19.13,
            increase: 0.12,
          },
          // 绿色经济
          lsjj: {
            name: "绿色经济",
            total: 212,
            percent: 18.28,
            increase: 0.24,
          },
          // 双循环
          sxh: {
            name: "双循环",
            total: 56,
            percent: 16.18,
            increase: 0.44,
          },
          // 高质量
          gzl: {
            name: "高质量",
            total: 38,
            percent: 22.89,
            increase: 0.33,
          },
        },
        {
          name: "龙华区",
          // 民生
          ms: {
            name: "民生",
            total: 98,
            percent: 12.17,
            increase: 0.15,
          },
          // 绿色经济
          lsjj: {
            name: "绿色经济",
            total: 105,
            percent: 9.05,
            increase: 0.08,
          },
          // 双循环
          sxh: {
            name: "双循环",
            total: 43,
            percent: 12.43,
            increase: 0.38,
          },
          // 高质量
          gzl: {
            name: "高质量",
            total: 16,
            percent: 9.64,
            increase: 0.25,
          },
        },
        {
          name: "龙岗区",
          // 民生
          ms: {
            name: "民生",
            total: 91,
            percent: 11.3,
            increase: 0.22,
          },
          // 绿色经济
          lsjj: {
            name: "绿色经济",
            total: 113,
            percent: 9.74,
            increase: 0.17,
          },
          // 双循环
          sxh: {
            name: "双循环",
            total: 40,
            percent: 11.56,
            increase: 0.18,
          },
          // 高质量
          gzl: {
            name: "高质量",
            total: 13,
            percent: 7.83,
            increase: 0.03,
          },
        },
      ],
    },
    actionType: {
      type: String,
      default: "dllszb",
      validator(value) {
        return ["dllszb"].includes(value);
      },
    },
  },
  data() {
    return {
      geoMap: {},
      option: {},
      areaColor: {
        type: "radial",
        x: 0.5,
        y: 0.5,
        r: 0.8,
        colorStops: [
          {
            offset: 0,
            color: "rgba(0, 138, 189, 1)", // 0% 处的颜色
          },

          {
            offset: 1,
            color: "rgba(0, 78, 189, 1)", // 100% 处的颜色
          },
        ],
        globalCoord: false, // 缺省为 false
      },

      borderColor: {
        type: "radial",
        x: 0.5,
        y: 0.5,
        r: 0.8,
        colorStops: [
          {
            offset: 0,
            color: "#005bff", // 0% 处的颜色
          },
          {
            offset: 1,
            color: "#00ffa2", // 100% 处的颜色
          },
        ],
        globalCoord: false, // 缺省为 false
      },
    };
  },
  mounted() {
    this.init();
  },
  computed: {
    getStyle() {
      return {
        ecwidth: this.$pxToRem(355) + "rem",
        height: this.$pxToRem(800) + "rem",
        echeight: this.$pxToRem(80) + "rem",
      };
    },
  },
  methods: {
    async init() {
      try {
        let data = await this.fetchMapJson();
        this.$echarts.registerMap("sz", data);
        this.initGeoMap(data);
        this.initOption();
      } catch (error) {}
    },
    fetchMapJson() {
      return request.get(`${CONFIG.geojsonUrl}/shenzhen.json`);
    },
    initGeoMap(data) {
      data.features.map((item) => {
        let obj = {};
        let { name, center } = item.properties;
        this.geoMap[name] = center;
        obj = {
          name,
          center,
        };
        return obj;
      });
    },
    convertData(data, prop = "value") {
      var res = [];
      for (var i = 0; i < data.length; i++) {
        var geoCoord = this.geoMap[data[i].name];
        if (geoCoord) {
          res.push({
            name: data[i].name,
            value: geoCoord.concat(data[i][prop]),
          });
        }
      }
      return res;
    },
    createActiveTooltip(data) {
      let { name } = data;
      let type = this.currentTab;
      let opt = this.dlhyd.find((item) => item.name === name);
      let raw = opt[type];
      this.dllszb.sort((b, a) => a.total - b.total);
      let rank = this.dlhyd.findIndex((item) => item.name === name) + 1;
      return `
         <div class="tooltip">
          <div class="tooltip-head" style="height:80px">
            <div class="tooltip-name" >${opt.name}</div>
            <div class="tooltip-button l-mb-10">

              <div class="tooltip-rank">NO.</div>
              <div class="tooltip-sort">${rank}</div>
            </div>
            <div class="tooltip-total l-mr-17"></div>
          </div>
          <div class="tooltip-body">
            <div class="positive">
              <div style="display:flex">
                  <div style="flex:1;font-size:20px;font-family: ysbth;" class="l-mb-15">${
                    opt[type][0].area
                  }总数</div>
                  <div style="display:flex;flex:1;justify-content: end;font-family: ysbth;font-size:20px;" class="l-mr-15">${
                    opt[type][0].sum
                  }家</div>
              </div>
            
              <div class="positie-content">
                
                <div class="industry">
                  ${raw
                    .map((item) => {
                      return `
                        <div class="industry-item">
                          <div class="industry-name"style="width:35px" >${
                            item.name
                          }</div>
                          <div class="industry-value" style="text-align:right">${
                            item.total
                          }家</div>
                          <div class="industry-unit" style="text-align:right">占比${
                            item.percent
                          }%</div>

                          <div class="trend l-ml-20 l-mw-100" style="text-align:right !important; margin-left: 60px !important;">
                            <div class="trend-label">同比</div>
                            <div class="trend-icon ${
                              item.compare >= 0 ? "green-up" : "green-down"
                            }"></div>
                            <div class="trend-value" >${Math.abs(
                              item.compare
                            )}%</div>
                          </div>
                        </div>
                      `;
                    })
                    .join("")}
                </div>
              </div>
            </div>

          </div>

        </div>
      `;
    },
    createGDPTooltip(data) {
      let { name } = data;
      let opt = this.dllszb.find((item) => item.name === name);
      this.dllszb.sort((b, a) => a.total - b.total);
      let rank = this.dllszb.findIndex((item) => item.name === name) + 1;
      return `
         <div class="tooltip">
          <div class="tooltip-head" style="height:80px">
            <div class="tooltip-name">${opt.name}</div>
            <div class="tooltip-button l-mb-10">

              <div class="tooltip-rank">NO.</div>
              <div class="tooltip-sort">${rank}</div>
            </div>
            <div class="tooltip-total l-mr-17">${opt.total}</div>
          </div>
          <div class="tooltip-body">

            <div class="positive" style="display:flex">
              <div class="positive-aside">
                <div class="positive-line"></div>
                <div class="positive-title">用电增速</div>
                <div class="positive-value">${opt.powerGrowth}
                  <span class="positive-unit">%</span>
                </div>
                <div class="positive-title l-mt-40">GDP增速</div>
                <div class="positive-value">${opt.gdpGrowth}
                  <span class="positive-unit">%</span>
                </div>
              </div>

              <div class="positie-content">
                <div class="industry-title">产业GDP构成</div>
                <div class="industry">
                  ${opt.list
                    .map((item) => {
                      return `
                        <div class="industry-item">
                          <div class="industry-name" >${item.name}</div>
                          <div class="industry-value"style="text-align:right"">${
                            item.total
                          }亿元</div>
                          <div class="industry-unit" style="text-align:right">占比${
                            item.percent
                          }%</div>

                          <div class="trend l-ml-20 l-mw-100" style="text-align:right !important; margin-left: 60px !important;">
                            <div class="trend-label">同比</div>
                            <div class="trend-icon ${
                              item.compare >= 0 ? "green-up" : "red-down"
                            }"></div>
                            <div class="trend-value" >${Math.abs(
                              item.compare
                            )}%</div>
                          </div>
                        </div>
                      `;
                    })
                    .join("")}
                  

                 

                </div>
              </div>
            </div>

          </div>

        </div>
      `;
    },
    createChargeTooltip(data) {
      let { name } = data;
      let item = this.fsydjhd.find((item) => item.name === name);
      this.fsydjhd.sort((a, b) => a.total - b.total);
      let rank = this.fsydjhd.findIndex((item) => item.name === name) + 1;
      return `
        <div class="tooltip">
          <div class="tooltip-head">
            <div class="tooltip-name">${item.name}</div>
            <div class="tooltip-button l-mb-10">

              <div class="tooltip-rank">NO.</div>
              <div class="tooltip-sort">${rank}</div>
            </div>
            <div class="tooltip-total">${item.total}</div>
          </div>
          <div class="tooltip-body">

            <div class="charge">
              <div class="charge-item">
                <div class="charge-name">最高负荷</div>
                <div class="charge-value">${item.max}</div>
                <div class="charge-unit">万千瓦</div>

              </div>
              <div class="charge-item">
                <div class="charge-name">最低负荷</div>
                <div class="charge-value">${item.min}</div>
                <div class="charge-unit">万千瓦</div>
              </div>
            </div>

          </div>

        </div>
      
      `;
    },

    createIndustryTooltip(data) {
      let { name } = data;
      let ret = this.cyydlqk.find((item) => item.name === name);
      this.cyydlqk.sort((a, b) => a.total - b.total);
      let rank = this.cyydlqk.findIndex((item) => item.name === name) + 1;
      return `
       <div class="tooltip">
        <div class="tooltip-head"  style="height:60px">
          <div class="tooltip-name">${ret.name}</div>
          <div class="tooltip-button">

            <div class="tooltip-rank">NO.</div>
            <div class="tooltip-sort">${rank}</div>
          </div>
          <div class="tooltip-total">${ret.total}</div>
          <div class="tooltip-unit">%</div>
        </div>
        <div class="tooltip-body">
          <div class="industry-title">各产业增长速度</div>
          <div class="industry">
            ${ret.list
              .map((item) => {
                return `
                  <div class="industry-item">
                    <div class="industry-name">${item.name}</div>
                    <div class="industry-value">${item.total}%</div>
                    <div class="industry-unit">占比${item.percent}%</div>

                    <div class="trend l-ml-20 l-mw-100">
                      <div class="trend-label">同比</div>
                      <div class="trend-icon ${
                        item.compare >= 0 ? "green-up" : "red-down"
                      }"></div>
                      <div class="trend-value">${Math.abs(item.compare)}%</div>
                    </div>
                  </div>
                `;
              })
              .join("")}
            

          </div>
        </div>

      </div>
      `;
    },
    createAreaTooltip(data) {
      let { name } = data;
      let ret = this.qyydzzjhd.find((item) => item.name === name);
      let list = ret.map[this.areaType];
      this.qyydzzjhd.sort((a, b) => a.total - b.total);
      let rank = this.qyydzzjhd.findIndex((item) => item.name === name) + 1;
      return `
      <div class="tooltip">
        <div class="tooltip-head" style="height:60px">
          <div class="tooltip-name">${ret.name}</div>
          <div class="tooltip-button l-mb-10">

            <div class="tooltip-rank">NO.</div>
            <div class="tooltip-sort">${rank}</div>
          </div>

        </div>
        <div class="tooltip-body">
          <div class="sum">
            ${list
              .map((item) => {
                return `
                  <div class="sum-item l-mt-25 l-mb-25">
                    <div class="sum-name">${item.name}</div>
                    <div class="sum-content">
                      <div class="sum-value">${item.total}</div>
                      <div class="sum-unit">${item.unit}</div>
                    </div>
                  </div>
                `;
              })
              .join("")}
            

          </div>
        </div>

      </div>
      `;
    },
    createAreaTotalTooltip(data) {
      // gqydzzjhd
      let { name } = data;
      let ret = this.gqydzzjhd.find((item) => item.name === name);
      let sortList = this.gqydzzjhd.sort((a, b) => {
        let sum1 = 0;
        let sum2 = 0;
        a.list.forEach((item) => {
          sum1 += item.total;
        });
        b.list.forEach((item) => {
          sum2 += item.total;
        });
        return sum2 - sum1;
      });
      let rank = sortList.findIndex((item) => item.name === name) + 1;
      return `
        <div class="tooltip">
          <div class="tooltip-head" style:"height:50px">
            <div class="tooltip-name">${ret.name}</div>
            <div class="tooltip-button l-mb-10">

              <div class="tooltip-rank">NO.</div>
              <div class="tooltip-sort">${rank}</div>
            </div>
            <div class="tooltip-total">${ret.total}</div>
            <div class="tooltip-unit">%</div>
          </div>
          <div class="tooltip-body">
            <div class="sum">
              ${ret.list
                .map((item) => {
                  return `
                    <div class="sum-item l-mt-25 l-mb-25">
                      <div class="sum-name">${item.name}</div>
                      <div class="sum-content">
                        <div class="sum-value">${item.total}</div>
                        <div class="sum-unit">${item.unit}</div>
                      </div>
                    </div>
                  `;
                })
                .join("")}
              

            </div>
          </div>

        </div>
      `;
    },
    createContributionTooltip(data) {
      let { name } = data;
      let ret = this.dlgxd.find((item) => item.name === name);
      this.dlgxd.sort((a, b) => a.total - b.total);
      let rank = this.dlgxd.findIndex((item) => item.name === name) + 1;
      return `
        <div class="tooltip" style="width:500px">
        <div class="tooltip-head" style="height:70px">
          <div class="tooltip-name">${ret.name}</div>
          <div class="tooltip-button l-mb-10">

            <div class="tooltip-rank">NO.</div>
            <div class="tooltip-sort">${rank}</div>
          </div>
          <div class="tooltip-total">${ret.total}</div>
          <div class="tooltip-unit">元/度</div>
        </div>
        <div class="tooltip-body">

          <div class="charge">
            ${ret.list
              .map((item) => {
                return `
                  <div class="charge-item">
                    <div class="charge-name">${item.name}</div>
                    <div class="charge-value l-mw-100">${item.value}</div>
                    <div class="charge-unit">${item.danwei}</div>
                    <div class="trend l-ml-20 l-mw-80">
                      <div class="trend-label">同比</div>
                      <div class="trend-icon ${
                        item.percent >= 0 ? "green-up" : "red-down"
                      }"></div>
                      <div class="trend-value">${Math.abs(item.percent)}%</div>
                    </div>
                  </div>
                `;
              })
              .join("")}
            
          </div>

        </div>

      </div>
      `;
    },

    createCompanyTooltip(data) {
      let { name } = data;
      let ret = this.gcyfzydqk.find((item) => item.name === name);
      let raw = ret[this.industyType];
      this.gcyfzydqk.sort((a, b) => {
        return a[this.industyType].increase - b[this.industyType].increase > 0;
      });
      let rank = this.gcyfzydqk.findIndex((item) => item.name === name) + 1;
      return `
        <div class="tooltip">
        <div class="tooltip-head " style="height:75px">
          <div class="tooltip-name">${ret.name}产业用电量增长速度</div>
          <div class="tooltip-button l-mb-10">

            <div class="tooltip-rank">NO.</div>
            <div class="tooltip-sort">${rank}</div>
          </div>
          <div class="tooltip-total">${raw.increase}</div>
          <div class="tooltip-unit">%</div>
        </div>
        <div class="tooltip-body">

          <div class="charge l-mt-25 l-mb-25">
            <div class="charge-item">
              <div class="charge-name">${raw.name}产业拥有数</div>
              <div class="charge-value l-mw-100" style="text-align:right;">${
                raw.total
              }</div>
              <span class="charge-unit">家</span>
              <div class="trend l-ml-20 >
                <div class="trend-label">占比</div>
                <div class="trend-icon ${
                  raw.percent >= 0 ? "green-up" : "green-down"
                }" ></div>
                <div class="trend-value">${raw.percent}%</div>
              </div>
            </div>
            
          </div>

        </div>

      </div>
      `;
    },

    initOption() {
      this.option = {
        backgroundColor: "transparent",

        tooltip: {
          trigger: "item",
          backgroundColor: "transparent",
          borderColor: "transparent",
          padding: 0,
          formatter: (params) => {
            let { name, data, seriesType } = params;
            let tooltipMap = {
              szqshfsydjhd: this.createChargeTooltip, //深圳全社会分时用电均衡度
              jjfzdllszs: this.createGDPTooltip, //经济发展电力绿色指数
              jjfzdlgxd: this.createContributionTooltip, //经济发展电力贡献度
              gqydzzjhd: this.createAreaTotalTooltip, //各区用电增长均衡度
              qydzzjhdqy: this.createAreaTooltip, //区用电增长均衡度区域
              cyydlqk: this.createIndustryTooltip, //产业用电量情况
              cyydlhyqk: this.createCompanyTooltip, //产业用电量行业情况
              qyfzdlhyd: this.createActiveTooltip, //企业发展电力活跃度
            };

            return tooltipMap[this.tooltipType](data);
          },
        },
        geo: [
          { 
            map: "sz",
            zoom: 1,
            top:190,
            aspectScale: 1,
            roam: false,
            itemStyle: {
              normal: {
                borderColor: this.borderColor,
                borderWidth: 2,
                shadowColor: "rgba(0, 78, 189, 1)",
                shadowOffsetX: 0,
                shadowOffsetY: 5,
                shadowBlur: 10,
              },
            },
            silent: true,
          },
        ],
        series: [
          {
            top:190,
            type: "map",
            name: "深圳",
            mapType: "sz", // 自定义扩展图表类型
            aspectScale: 1,
            zoom: 1,
            label: {
              show: false,
              color: "#fff",
              fontSize: 14,
            },
            itemStyle: {
              areaColor: this.areaColor,
              borderColor: this.borderColor,
              borderWidth: 1,
            },
            emphasis: {
              itemStyle: {
                areaColor: "rgba(0, 78, 189, 1)",
              },
              label: {
                show: false,
                color: "#fff",
                fontSize: 14,
              },
            },

            selectedMode: false,
            data: this.data,
          },

          {
            type: "scatter",
            coordinateSystem: "geo",
            symbol: "pin",
            symbolSize: [0, 0],
            label: {
              normal: {
                show: true,
                textStyle: {
                  color: "#fff",
                  verticalAlign: "middle",
                  align: "center",
                  fontFamily: "ysbth",
                },
                formatter(value) {
                  return `${value.data.name}`;
                },
              },
            },
            data: this.convertData(this.data),
          },
        ],
      };
    },
  },
};
</script>

<style lang="less" >
@import "../../style/var.less";
.map-wrap {
  position: relative;
}
.map-panel {
  max-width: 600px;
  position: absolute;
  left: 80px;
  top: 15px;
  z-index: 10;
}

.title-text {
  font-size: 20px;
  font-family: ysbth;
  color: #ffffff;
  opacity: 0.89;
  text-shadow: 0px 2px 6px #053173;

  background: linear-gradient(
    0deg,
    rgba(119, 216, 255, 0.45) 0%,
    rgba(233, 248, 255, 0.45) 73.3154296875%,
    rgba(255, 255, 255, 0.45) 100%
  );
  -webkit-background-clip: text;
  position: absolute;
  top: 330px;
  left: 364px;
}
.tooltip {
  display: inline-block;
  color: #fff;
  &-head {
    display: flex;
    align-items: center;
    height: 50px;
    background-color: blue;
    padding: 0 20px;
    background: url("@{imgUrl}/map/city-head.png") no-repeat center center;
    box-shadow: 0px 2px 12px 1px rgba(5, 13, 44, 0.47);
    background-size: cover;
    &.large {
      height: 70px;
    }
    &-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }
  }
  &-name {
    font-size: 18px;
    font-weight: bold;
    margin-right: 10px;
  }
  &-button {
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    background: url("@{imgUrl}/map/btn.png") no-repeat center 6px;
    background-size: contain;
    min-width: 64px;
    min-height: 28px;
  }
  &-rank {
    font-size: 12px;
    font-style: italic;
  }
  &-sort {
    font-size: 24px;
    font-style: italic;
  }
  &-total {
    font-size: 30px;
    font-weight: bold;
    flex: 1;
    text-align: right;
  }
  &-unit {
    font-size: 14px;
    margin-top: 8px;
    margin-left: 4px;
  }
  &-body {
    padding: 10px 20px;
    background: linear-gradient(90deg, #183c72, #3e6ec2, #0e4fa6);
    box-shadow: 0px 5px 10px 0px rgba(10, 43, 88, 0.88);
  }
  .charge {
    &-item {
      display: flex;
      justify-content: flex-end;

      align-items: center;
      margin-bottom: 20px;
      &:last-child {
        margin-bottom: 0;
      }
    }
    &-name {
      font-size: 20px;
      min-width: 200px;
      font-family: ysbth;
    }
    &-value {
      font-size: 20px;
      color: #00fff8;
      text-align: right;
      font-weight: bold;
    }
    &-unit {
      width: 100px;
      font-size: 12px;
      text-align: left;
      margin-left: 10px;
    }
  }

  .trend {
    color: #fff;
    display: flex;
    align-self: flex-end;
    align-items: center;
    &-label {
      font-size: 12px;
    }
    &-icon {
      margin: 0 2px;
      width: 10px;
      height: 6px;
      background: url("@{imgUrl}/trend/red-down.png") no-repeat center center;
      &.green-up {
        width: 10px;
        height: 6px;
        background: url("@{imgUrl}/trend/green-up.png") no-repeat center center;
      }
      &.red-down {
        width: 10px;
        height: 6px;
        background: url("@{imgUrl}/trend/red-down.png") no-repeat center center;
      }
      &.green-down {
        width: 10px;
        height: 6px;
        background: url("@{imgUrl}/trend/green-down.png") no-repeat center
          center;
      }
    }
    &-value {
      font-size: 12px !important;
    }
  }

  .sum {
    display: flex;
    align-items: center;
    color: #fff;
    &-item {
      margin-right: 40px;
      &:last-child {
        margin-right: 0;
      }
    }
    &-name {
      font-size: 20px;
      font-family: ysbth;
    }
    &-content {
      margin-top: 18px;
      display: flex;
      align-items: flex-end;
    }
    &-value {
      font-size: 24px;
      color: #00fff8;
      font-weight: bold;
      margin-right: 4px;
    }
    &-unit {
      font-size: 12px;
    }
  }

  .industry {
    font-size: 12px;
    color: #fff;
    &-title {
      font-family: ysbth;
      font-size: 20px;
      margin-bottom: 15px;
    }
    &-item {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      &:last-child {
        margin-bottom: 0;
      }
    }
    &-name {
      min-width: 30px;
      font-weight: bold;
      color: #00fdf7;
    }
    &-value {
      min-width: 130px;
      text-align: center;
    }
    &-unit {
      min-width: 130px;
      text-align: center;
    }
  }

  .overview {
    color: #fff;
    font-size: 12px;
    &-item {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      &:last-child {
        margin-bottom: 0;
      }
    }
    &-value {
      flex: 1;
    }
  }

  .positive {
    // display: flex;
    margin-top: 0px;

    &-title {
      font-family: ysbth;
      font-size: 20px;
    }
    &-aside {
      position: relative;
      width: 150px;
    }
    &-value {
      font-size: 20px;
      color: #00fff8;
      font-weight: bold;
      margin-top: 4px;
    }
    &-unit {
      font-size: 12px;
      color: #fff;
    }
    &-content {
      flex: 1;
    }
    &-line {
      position: absolute;
      right: 30px;
      top: 50%;
      transform: translateY(-50%);
      width: 1px;
      height: 100px;
      background-color: #f1f1f1;
      opacity: 0.2;
    }
  }
}
</style>