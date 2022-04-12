<template>
  <base-layout>
    <panel slot="left"
           class="l-ml-15">
      <subtitle title="深圳经济电力发展指数"
                more="2019"
                msg=""
                :show-icon="true"></subtitle>

      <radar-title content1="经济电力发展指数对标"
                   content2="宏观经济电力弹性指标"
                   :showCity="showCity"
                   @selectedLeft="selectedLeft"
                   @onvalchange="onvalchange"></radar-title> 

      <div style="display: flex">
        <radar-table :data="radarMenu.data"
                     :showCity="showCity"
                     v-model="radarMenu.value"
                     @change="onradarChange"></radar-table>
        <radar-chart :data="radarData.data"></radar-chart>
      </div>
      <solid-line class="l-mr-10 l-ml-10"></solid-line>
      <tab-menu :data="indicatorMenu.data"
                v-model="indicatorMenu.value"
                @selectedTab="changeGreenTab"
                class="l-mt-20 l-mr-10 l-ml-10"></tab-menu>
      <line-bar-chart height="190"
                      v-if="indicatorMenu.value == 'jjfzdllszs'"></line-bar-chart>
      <base-line-chart height="190"
                       v-else></base-line-chart>

      <subtitle title="深圳企业发展电力活跃度"
                more="2020"
                msg=""
                :show-icon="true"
                class="l-mt-20"></subtitle>
      <tab-menu :data="activeMenu.data"
                v-model="activeMenu.value"
                @selectedTab="onActiveChange"
                class="l-mt-15 l-mb-10 l-mr-10 l-ml-10"></tab-menu>

      <base-list :data="activeData.data"
                 :name="activeData.name"
                 :sum="activeData.sum"></base-list>

      <subtitle title="经济热点事件"
                more="2021-10"
                msg=""
                :show-icon="false"
                class="l-mb-10 l-mt-12"></subtitle>
      <hot-event :data="hotEventData.data"></hot-event>
    </panel>
    <div>
      <china-map v-if="!showCity"
                 :gdp="gdpData"
                 :currentCity="radarMenu.value"></china-map>
      <shen-zhen-map v-if="showCity"
                     :industyType="industyType"
                     :gdp="gdpData"
                     :mapTitle="mapTitle"
                     :isShow="status.isShow"
                     :tooltipType="tooltipType"
                     :panel="panelData"
                     :balancePanelData="balancePanelData"
                     :importantPanelData="importantPanelData"
                     :conditionPanelData="conditionPanelData"
                     :action="componentsType"
                     :areaType="areaType"
                     :currentTab="currentTab"
                     :componentsTypeType="componentsTypeType"></shen-zhen-map>
    </div>
    <panel slot="right"
           class="l-mr-15">
      <subtitle title="深圳区域用电增长均衡度"
                more="2020-12"
                msg=""
                :show-icon="true"></subtitle>
      <div class="sub-title l-mt-10 l-mb-8"
           :class="[
          showCity === true && tooltipType === 'gqydzzjhd'
            ? 'sub-title'
            : 'sub-title-no',
        ]"
           @click="eachAreaImport">
        各区用电增长均衡度
      </div>
      <area-bar-chart height="100px"></area-bar-chart>

      <tab-menu :data="powerMenu.data"
                v-model="powerMenu.value"
                @selectedTab="onPowerChange"
                class="l-mt-10 l-mb-10"></tab-menu>
      <base-power :data="powerData.data"></base-power>

      <subtitle title="深圳产业发展用电情况"
                more="2020-12"
                msg=""
                :show-icon="false"
                class="l-mt-10 l-mb-10"></subtitle>
      <div>
        <div class="sub-title-el"
             :class="[
            showCity == true && tooltipType === 'cyydlqk'
              ? 'sub-title-ok'
              : 'sub-title-el',
          ]"
             @click="onIndustryChange">
          产业用电量情况
        </div>
        <industry-line-chart height="110px"></industry-line-chart>
      </div>

      <tab-menu :data="situationMenu.data"
                v-model="situationMenu.value"
                @selectedTab="onSituationChange"
                class="l-mt-10 l-mb-10"></tab-menu>
      <base-power :data="situationData.data"></base-power>
      <subtitle title="深圳全社会分时用电均衡度"
                more="2020-12-30"
                msg=""
                :show-icon="true"></subtitle>
      <equilibrium title="深圳全社会分时用电均衡度"
                   :showCity="showCity"
                   :tooltipType="tooltipType"
                   :data="equilibriumDataNew"
                   :degree="equilibriumData.degree"
                   :percentage="equilibriumData.percentage"
                   @onclick="onEquilibriumChange"></equilibrium>
      <time-line-chart></time-line-chart>
    </panel>
  </base-layout>
</template>

<script>
import lineChart from '@/components/line-chart'
import shenZhenMap from '@/components/shenzhen-map'
import HotEvent from '@/components/hot-event'
import radarChart from '@/components/radar-chart/radar-chart.vue'
import radarTable from '@/components/radar-table/radar-table.vue'
import radarTitle from '@/components/radar-title/radar-title.vue'
import chinaMap from '@/components/china-map'
import solidLine from '@/components/solid-line/solid-line.vue'
import areaBarChart from '@/components//area-bar-chart'
import industryLineChart from '@/components/industry-line-chart'
import timeLineChart from '@/components/time-line-chart'
import LineBarChart from '@/components/line-bar-chart/line-bar-chart.vue'
import equilibrium from '@/components/equilibrium/equilibrium.vue'
import baseLineChart from '@/components/base-line-chart'

export default {
  components: {
    lineChart,
    shenZhenMap,
    areaBarChart,
    industryLineChart,
    HotEvent,
    radarChart,
    radarTable,
    radarTitle,
    chinaMap,
    solidLine,
    timeLineChart,
    LineBarChart,
    equilibrium,
    baseLineChart,
  },

  data() {
    return {
      areaType: '',
      inactivation: '',
      industyType: '',
      currentTab: '',
      tooltipType: '',
      //雷达图箭头位置判定条件
      arrowValue: '',
      componentsTypeType: 0,
      //以下深圳全社会分时用电均衡度数据
      equilibriumDataNew: [],
      equilibriumData: {
        degree: 66.78,
        percentage: -3.51,
        data: [
          {
            area: '坪山区',
            areadegree: 74.69,
          },
          {
            area: '龙华区',
            areadegree: 78.61,
          },
          {
            area: '龙岗区',
            areadegree: 81.79,
          },
          {
            area: '罗湖区',
            areadegree: 63.54,
          },
          {
            area: '福田区',
            areadegree: 61.56,
          },
          {
            area: '南山区',
            areadegree: 58.74,
          },
          {
            area: '宝安区',
            areadegree: 59.12,
          },
          {
            area: '光明区',
            areadegree: 71.52,
          },
          {
            area: '盐田区',
            areadegree: 70.71,
          },
          {
            area: '大鹏新区',
            areadegree: 59.15,
          },
          {
            area: '深汕区',
            areadegree: 61.25,
          },
        ],
      },

      //以下雷达图数据

      radarMenu: {
        value: 'shenzhen',
        data: [
          {
            city: '深圳',
            sum: 105,
            value: 'shenzhen',
          },
          {
            city: '北京',
            sum: 78,
            value: 'beijing',
          },
          {
            city: '上海',
            sum: 65,
            value: 'shanghai',
          },
          {
            city: '广州',
            sum: 78,
            value: 'guangzhou',
          },
        ],
      },
      getRadarData: {
        shenzhen: {
          // 总   社   财   外     固
          data: [0.94, 0.86, 0.95, -1.28, 0.34],
        },
        beijing: {
          data: [0.35, 0.47, 3.9, 2.25, -0.88],
        },
        shanghai: {
          data: [0.02, 0.02, 0.13, -0.02, 0.02],
        },
        guangzhou: {
          data: [1.06, 0.87, 1.19, -3.1, 0.4],
        },
      },
      radarData: {
        data: [0.94, 0.86, 0.95, -1.28, 0.34],
      },
      // gdp数据
      gdpData: {
        name: '预计当年深圳GDP',
        date: '截至2021年 10月22日',
        value: 2.41,
        unit: '万亿元',
        complete: 12.82,
      },
      // 地图标题
      mapTitle: '各区经济发展与用电增长弹性',
      // gpd数据库
      gdpStore: {
        // 绿色指标
        lszbData: {
          name: '预计当年深圳GDP',
          date: '截至2021年 10月22日',
          value: 2.41,
          unit: '万亿元',
          complete: 12.82,
        },
        dlgxdData: {
          name: '预计当年深圳GDP',
          date: '截至2021年 10月22日',
          value: 2.41,
          unit: '万亿元',
          complete: 12.82,
        },
      },
      // gdp下面面板是否只展示标题判断
      status: {
        isShow: false,
      },
      // 面板的标题数据
      panelData: {
        name: '深圳经济电力发展指数',
        value: 0.94,
        percent: 95.68,
        unit: '%',
      },
      balancePanelData: {
        name: '深圳企业活跃以上占比',
        value: 72.9,
        percent: -5.68,
        unit: '%',
        balanceData: [
          {
            name: '注册企业数',
            value: 12.56,
            unit: '万家',
          },
          {
            name: '总部企业',
            value: 1256,
            unit: '家',
          },
          {
            name: '规上企业',
            value: 56,
            unit: '家',
          },
          {
            name: '上市公司',
            value: 10258,
            unit: '家',
          },
        ],
      },
      importantPanelData: {
        name: '深圳重点片区用电增长均衡度',
        value: 0.61,
        percent: 2.23,
        unit: '%',
        importData: {
          name: '重点片区总数',
          value: 1256,
          unit: '个',
          rate: 2,
        },
      },
      conditionPanelData: {
        conditionData: [
          {
            type: '第一产业',
            number: -4.32,
            zb: '占比',
            unit: '%',
            ratio: 0.04,
            yoy: -3.42,
          },
          {
            type: '第二产业',
            number: 0.85,
            zb: '占比',
            unit: '%',
            ratio: 52.76,
            yoy: -2.61,
          },
          {
            type: '第三产业',
            number: 1.05,
            zb: '占比',
            unit: '%',
            ratio: 47.2,
            yoy: 5.98,
          },
        ],
      },
      // 组件类型
      componentsType: 'indicator-panel',
      radarOption: {},
      // 是否展示城市
      showCity: false,

      situationMenu: {
        value: '',
        data: [
          {
            name: '绿色经济',
            value: 'lsjj',
          },
          {
            name: '民生',
            value: 'ms',
          },
          {
            name: '双循环',
            value: 'sxh',
          },
          {
            name: '高质量',
            value: 'gzl',
          },
        ],
      },
      getSituationData: {
        lsjj: {
          data: [
            {
              name: '整体用电增长速度',
              sum: 4.21,
              yoy: 6.08,
            },
            {
              name: '华为技术有限公司',
              sum: 6.54,
              yoy: 8.32,
            },
            {
              name: '深圳迈瑞生物医疗电子股份有限公司',
              sum: 6.22,
              yoy: 8.17,
            },
            {
              name: '深圳市比亚迪锂电池有限公司',
              sum: 5.81,
              yoy: 8.03,
            },
          ],
        },
        ms: {
          data: [
            {
              name: '整体用电增长速度',
              sum: 1.38,
              yoy: 3.68,
            },
            {
              name: '深圳华侨城文化集团有限公司',
              sum: 5.16,
              yoy: 5.54,
            },
            {
              name: '中节能铁汉生态环境股份有限公司',
              sum: 4.88,
              yoy: 5.33,
            },
            {
              name: '深圳市幸福生活健康养老有限公司',
              sum: 4.72,
              yoy: 5.18,
            },
          ],
        },
        sxh: {
          data: [
            {
              name: '整体用电增长速度',
              sum: 0.87,
              yoy: 2.29,
            },
            {
              name: '比亚迪汽车工业有限公司',
              sum: 3.28,
              yoy: 4.89,
            },
            {
              name: '深圳市华星光电半导体显示技术有限公司',
              sum: 3.11,
              yoy: 4.85,
            },
            {
              name: '立讯精密工业股份有限公司',
              sum: 3.02,
              yoy: 4.73,
            },
          ],
        },
        gzl: {
          data: [
            {
              name: '整体用电增长速度',
              sum: 1.66,
              yoy: 3.11,
            },
            {
              name: '深圳腾势新能源汽车有限公司',
              sum: 4.54,
              yoy: 5.77,
            },
            {
              name: '深圳鸿鹏新能源科技有限公司',
              sum: 4.49,
              yoy: 5.62,
            },
            {
              name: '欣旺达电动汽车电池有限公司',
              sum: 4.33,
              yoy: 5.48,
            },
          ],
        },
      },
      situationData: {
        data: [
          {
            name: '整体用电增长速度',
            sum: 4.21,
            yoy: 6.08,
          },
          {
            name: '华为技术有限公司',
            sum: 6.54,
            yoy: 8.32,
          },
          {
            name: '深圳迈瑞生物医疗电子股份有限公司',
            sum: 6.22,
            yoy: 8.17,
          },
          {
            name: '深圳市比亚迪锂电池有限公司',
            sum: 5.81,
            yoy: 8.03,
          },
        ],
      },

      powerMenu: {
        value: '',
        data: [
          {
            name: '重点片区',
            value: 'zdpq',
          },
          {
            name: '工业园区',
            value: 'gyyq',
          },
          {
            name: '商圈',
            value: 'sq',
          },
          {
            name: '写字楼',
            value: 'xzl',
          },
        ],
      },
      getPowerData: {
        zdpq: {
          data: [
            {
              name: '整体用电增长速度',
              sum: 6.7,
              yoy: 9.4,
            },
            {
              name: '深圳湾超级总部基地用电量增速',
              sum: 9.2,
              yoy: 12.6,
            },
            {
              name: '香蜜湖新金融中心用电量增速',
              sum: 8.7,
              yoy: 12.1,
            },
            {
              name: '西丽高铁新城片区用电量增速',
              sum: 8.5,
              yoy: 11.7,
            },
          ],
        },
        gyyq: {
          data: [
            {
              name: '整体用电增长速度',
              sum: 1.2,
              yoy: 0.3,
            },
            {
              name: '坪山高新区智能制造产业园用电量增速',
              sum: 4.7,
              yoy: 6.3,
            },
            {
              name: '深粮观澜汽车电子特色工业园用电量增速',
              sum: 3.8,
              yoy: 5.2,
            },
            {
              name: '深圳新一代信息技术产业园用电量增速',
              sum: 3.5,
              yoy: 5.5,
            },
          ],
        },
        sq: {
          data: [
            {
              name: '整体用电增长速度',
              sum: 0.9,
              yoy: 1.3,
            },
            {
              name: '龙岗万科广场用电增速',
              sum: 4.7,
              yoy: 6.7,
            },
            {
              name: '九方购物中心用电增速',
              sum: 4.4,
              yoy: 6.0,
            },
            {
              name: '万象城用电量增速',
              sum: 3.9,
              yoy: 5.9,
            },
          ],
        },
        xzl: {
          data: [
            {
              name: '整体用电增长速度',
              sum: 0.6,
              yoy: 2.0,
            },
            {
              name: '深圳软件园用电增速',
              sum: 3.4,
              yoy: 5.7,
            },
            {
              name: '万科前海企业公馆用电增速',
              sum: 3.3,
              yoy: 5.2,
            },
            {
              name: '前海人寿金融中心用电增速',
              sum: 3.3,
              yoy: 5.9,
            },
          ],
        },
      },
      powerData: {
        data: [
          {
            name: '整体用电增长速度',
            sum: 6.7,
            yoy: 9.4,
          },
          {
            name: '深圳湾超级总部基地用电量增速',
            sum: 9.2,
            yoy: 12.6,
          },
          {
            name: '香蜜湖新金融中心用电量增速',
            sum: 8.7,
            yoy: 12.1,
          },
          {
            name: '西丽高铁新城片区用电量增速',
            sum: 8.5,
            yoy: 11.7,
          },
        ],
      },

      hotEventData: {
        data: [
          {
            title: '工商业电价改革',
            title2: '当前进度',
            num: 82.45,
          },
          {
            title: '贸易争端',
            title2: '出口企业用电增速',
            num: -0.58,
          },
          {
            title: '房地产调控',
            title2: '房地产行业用电增速',
            num: 14.94,
          },
        ],
      },

      activeMenu: {
        value: '',
        data: [
          {
            name: '全部企业',
            value: 'qbqy',
          },
          {
            name: '总部经济',
            value: 'zbjj',
          },
          {
            name: '上市公司',
            value: 'ssgs',
          },
          {
            name: '规上企业',
            value: 'gsqy',
          },
        ],
      },
      companyData: {
        qbqy: {
          name: '企业总数',
          sum: 1952723,
          data: [
            {
              name: '非常活跃',
              sum: 207261,
              proportion: 10.61,
              yoy: 1.96,
            },
            {
              name: '活跃',
              sum: 380559,
              proportion: 19.49,
              yoy: 2.06,
            },

            {
              name: '不活跃',
              sum: 578502,
              proportion: 30.48,
              yoy: -0.25,
            },
          ],
        },
        zbjj: {
          name: '总部经济',
          sum: 179,
          data: [
            {
              name: '非常活跃',
              sum: 20,
              proportion: 11.17,
              yoy: 11.11,
            },
            {
              name: '活跃',
              sum: 41,
              proportion: 22.91,
              yoy: 24.24,
            },
            {
              name: '不活跃',
              sum: 37,
              proportion: 20.67,
              yoy: -21.62,
            },
          ],
        },
        ssgs: {
          name: '上市公司',
          sum: 333,
          data: [
            {
              name: '非常活跃',
              sum: 48,
              proportion: 14.41,
              yoy: 17.07,
            },
            {
              name: '活跃',
              sum: 65,
              proportion: 19.25,
              yoy: 12.07,
            },
            {
              name: '不活跃',
              sum: 40,
              proportion: 12.01,
              yoy: -16.67,
            },
          ],
        },
        gsqy: {
          name: '规上企业',
          sum: 10337,
          data: [
            {
              name: '非常活跃',
              sum: 1285,
              proportion: 12.4,
              yoy: 1.54,
            },
            {
              name: '活跃',
              sum: 2373,
              proportion: 23.0,
              yoy: 1.69,
            },
            {
              name: '不活跃',
              sum: 1535,
              proportion: 14.8,
              yoy: -2.8,
            },
          ],
        },
      },
      activeData: {
        name: '企业总数',
        sum: 1952723,
        data: [
          {
            name: '非常活跃',
            sum: 207261,
            proportion: 10.61,
            yoy: 1.96,
          },
          {
            name: '活跃',
            sum: 380559,
            proportion: 19.49,
            yoy: 2.06,
          },
          {
            name: '不活跃',
            sum: 578502,
            proportion: 30.48,
            yoy: -0.25,
          },
        ],
      },

      indicatorMenu: {
        value: 'jjfzdllszs',
        data: [
          {
            name: '经济发展电力绿色指数',
            value: 'jjfzdllszs',
            showIcon: true,
            msg: '',
          },
          {
            name: '经济发展电力贡献度',
            value: 'jjfzdlgxd',
          },
        ],
      },
      gdpData: {
        name: '预计当年深圳GDP',
        date: '2021年 02月16日',
        value: 3650.82,
        unit: '亿元',
        percent: 12.82,
      },
    }
  },
  mounted() {
    this.sortsum()
  },
  methods: {
    onvalchange(val) {
      this.showCity = val
    },
    // 电力活跃度
    onActiveChange(value) {
      this.showCity = true
      this.currentTab = value
      this.activeData = this.companyData[value]
      this.tooltipType = 'qyfzdlhyd'
      if (value === 'qbqy') {
        this.mapTitle = '各区企业发展电力活跃度'
        this.componentsType = 'indicator-panel-balance'
        this.balancePanelData = {
          name: '深圳企业活跃以上占比',
          value: 30.1,
          percent: 2.03,
          unit: '%',
          balanceData: [
            {
              name: '注册企业数',
              value: 195.2,
              unit: '万家',
            },
            {
              name: '总部企业',
              value: 179,
              unit: '家',
            },
            {
              name: '规上企业',
              value: 10337,
              unit: '家',
            },
            {
              name: '上市公司',
              value: 333,
              unit: '家',
            },
          ],
        }
      } else if (value == 'zbjj') {
        this.mapTitle = '各区总部企业发展电力活跃度'
        this.componentsType = 'indicator-panel-important'
        this.importantPanelData = {
          name: '深圳总部企业活跃以上占比',
          value: 34.08,
          percent: 18.64,
          unit: '%',
          importData: {
            name: '总部企业数量',
            value: 61,
            unit: '个',
            rate: 35.35,
            cell: '个',
          },
        }
      } else if (value == 'ssgs') {
        this.mapTitle = '各区上市公司发展电力活跃度'
        this.componentsType = 'indicator-panel-important'
        this.importantPanelData = {
          name: '深圳上市公司活跃以上占比',
          value: 33.93,
          percent: 14.53,
          unit: '%',
          importData: {
            name: '上市公司数量',
            value: 113,
            unit: '个',
            rate: 29.14,
            cell: '个',
          },
        }
      } else {
        this.mapTitle = '各区规上企业发展电力活跃度'
        this.componentsType = 'indicator-panel-important'
        this.importantPanelData = {
          name: '深圳规上企业活跃以上占比',
          value: 35.4,
          percent: 0.78,
          unit: '%',
          importData: {
            name: '规上企业数量',
            value: 3658,
            unit: '个',
            rate: 3.23,
            cell: '个',
          },
        }
      }
    },

    // 各区域用电增长均衡度
    eachAreaImport() {
      this.mapTitle = '各区用电增长速度'
      this.showCity = true
      this.tooltipType = 'gqydzzjhd'
      this.componentsType = 'indicator-panel-balance'
      this.balancePanelData = {
        name: '深圳区域用电增长均衡度',
        value: 72.9,
        percent: -5.68,
        unit: '',
        balanceData: [
          {
            name: '重点片区',
            value: 21,
            unit: '个',
          },
          {
            name: '工业园区',
            value: 148,
            unit: '个',
          },
          {
            name: '商圈',
            value: 181,
            unit: '个',
          },
          {
            name: '写字楼',
            value: 692,
            unit: '座',
          },
        ],
      }
    },

    // 区域用电增长均衡度分类
    onPowerChange(value) {
      console.log(value, 99999)
      this.areaType = value
      this.tooltipType = 'qydzzjhdqy'
      this.showCity = true
      if (value === 'zdpq') {
        this.mapTitle = '各区重点片区用电增长速度'
        this.componentsType = 'indicator-panel-important'
        this.importantPanelData = {
          name: '深圳重点片区用电增长均衡度',
          value: 63.58,
          percent: -4.25,
          unit: '',
          importData: {
            name: '重点片区总数',
            value: 21,
            unit: '个',
            rate: 0,
            cell: '个',
          },
        }
      } else if (value == 'gyyq') {
        this.mapTitle = '各区工业园区用电增长速度'
        this.componentsType = 'indicator-panel-important'
        this.importantPanelData = {
          name: '深圳工业园区用电增长均衡度',
          value: 98.54,
          percent: -3.25,
          unit: '',
          importData: {
            name: '工业园区总数',
            value: 148,
            unit: '个',
            rate: 7,
            cell: '个',
          },
        }
      } else if (value == 'sq') {
        this.mapTitle = '各区商圈用电增长速度'
        this.componentsType = 'indicator-panel-important'
        this.importantPanelData = {
          name: '深圳商圈用电增长均衡度',
          value: 85.41,
          percent: -3.77,
          unit: '',
          importData: {
            name: '商圈总数',
            value: 181,
            unit: '个',
            rate: 11,
            cell: '个',
          },
        }
      } else {
        this.mapTitle = '各区写字楼用电增长速度'
        this.componentsType = 'indicator-panel-important'
        this.importantPanelData = {
          name: '深圳写字楼用电增长均衡度',
          value: 78.51,
          percent: -4.41,
          unit: '',
          importData: {
            name: '写字楼总数',
            value: 692,
            unit: '个',
            rate: 34,
            cell: '栋',
          },
        }
      }
      this.powerData = this.getPowerData[value]
    },
    // 产业发展情况
    onSituationChange(value) {
      // other code

      this.industyType = value
      this.currentTab = value
      this.showCity = true
      this.tooltipType = 'cyydlhyqk'
      this.situationData = this.getSituationData[value]
      // myself code
      this.showCity = true
      if (value == 'lsjj') {
        this.mapTitle = '各区绿色经济产业用电增长速度'
        this.componentsType = 'indicator-panel-balance'
        this.balancePanelData = {
          name: '深圳绿色产业用电增长速度',
          value: 0.22,
          percent: 3.36,
          unit: '%',
          balanceData: [
            {
              name: '风能',
              value: 3.15,
              unit: '%',
            },
            {
              name: '光伏',
              value: 2.08,
              unit: '%',
            },
            {
              name: '储能',
              value: 1.49,
              unit: '%',
            },
            {
              name: '环保',
              value: 4.17,
              unit: '%',
            },
          ],
        }
      } else if (value == 'ms') {
        this.mapTitle = '各区民生产业用电增长速度'
        this.componentsType = 'indicator-panel-balance'
        this.balancePanelData = {
          name: '深圳民生产业用电增长速度',
          value: 0.31,
          percent: 2.78,
          unit: '%',
          balanceData: [
            {
              name: '教育',
              value: 1.76,
              unit: '%',
            },
            {
              name: '医疗',
              value: 2.13,
              unit: '%',
            },
            {
              name: '卫生',
              value: 1.91,
              unit: '%',
            },
            {
              name: '体育',
              value: 3.11,
              unit: '%',
            },
            {
              name: '交通',
              value: 4.86,
              unit: '%',
            },
          ],
        }
      } else if (value == 'sxh') {
        this.mapTitle = '各区双循环产业用电增长速度'
        this.componentsType = 'indicator-panel-balance'
        this.balancePanelData = {
          name: '深圳双循环产业用电增长速度',
          value: 0.19,
          percent: 3.47,
          unit: '%',
          balanceData: [
            {
              name: '对内制造业',
              value: 3.47,
              unit: '%',
            },
            {
              name: '对外制造业',
              value: 2.78,
              unit: '%',
            },
            {
              name: '港口',
              value: 1.84,
              unit: '%',
            },
          ],
        }
      } else {
        this.mapTitle = '各区高质量产业用电增长速度'
        this.componentsType = 'indicator-panel-balance'
        this.balancePanelData = {
          name: '深圳高质量产业用电增长速度',
          value: 0.2,
          percent: 2.85,
          unit: '%',
          balanceData: [
            {
              name: '高端制造业',
              value: 4.89,
              unit: '%',
            },
            {
              name: '高端服务业',
              value: 5.13,
              unit: '%',
            },
            {
              name: '数字经济',
              value: 3.85,
              unit: '%',
            },
          ],
        }
      }
    },
    onradarChange(value) {
      this.showCity = false
      this.radarData = this.getRadarData[value]
    },
    //电力发展指数
    selectedLeft() {
      this.panelData.name = '深圳经济电力发展指数'
      this.componentsType = 'indicator-panel'
      this.status.isShow = false
      this.showCity = false
    },
    //绿色指数
    changeGreenTab(val) {
      this.tooltipType = val
      this.componentsType = 'indicator-panel'
      this.status.isShow = true
      this.showCity = true
      if (val == 'jjfzdllszs') {
        this.mapTitle = '各区经济发展与用电增长弹性'
        this.panelData = {
          name: '深圳经济发展电力绿色指数',
          value: 0.94,
          percent: 95.68,
          unit: '%',
        }
      } else {
        this.mapTitle = '各区每度电支撑GDP情况'
        this.panelData = {
          name: '深圳经济发展电力贡献度',
          value: 27.37,
          percent: -0.66,
          unit: '元/度',
        }
      }
    },
    sortsum() {
      this.equilibriumDataNew = this.equilibriumData.data
        .sort(function (a, b) {
          if (a.areadegree === b.areadegree) {
            //如果id相同，按照age的降序
            return b.areadegree - a.areadegree
          } else {
            return a.areadegree - b.areadegree
          }
        })
        .slice(0, 3)
    },
    onIndustryChange() {
      this.showCity = true
      this.tooltipType = 'cyydlqk'
      this.mapTitle = '各区产业用电增长速度'
      this.componentsType = 'indicator-panel-condition'
      this.componentsTypeType = 0
    },
    onEquilibriumChange(val) {
      this.tooltipType = 'szqshfsydjhd'
      this.showCity = true
      this.componentsType = 'indicator-panel-condition'
      this.componentsTypeType = 1
    },
  },
}
</script>

<style lang="less" scoped>
@import "../../style/var.less";
.sub-title {
  font-size: 16px;
  font-family: ysbth;
  font-weight: 400;
  color: #01f1e0;
  line-height: 20px;
  padding-left: 10px;
  cursor: pointer;
}
.sub-title-no {
  font-size: 16px;
  font-family: ysbth;
  font-weight: 400;
  color: #c7e5ff;
  line-height: 20px;
  padding-left: 10px;
  cursor: pointer;
}

.sub-title-el {
  font-size: 16px;
  font-family: "ysbth";
  font-weight: 400;
  color: #c7e5ff;
  cursor: pointer;
  position: relative;
  top: 10px;
  z-index: 9999;
}
.sub-title-ok {
  font-size: 16px;
  font-family: "ysbth";
  font-weight: 400;
  color: #01f1e0;
  cursor: pointer;
  position: relative;
  top: 10px;
  z-index: 9999;
}

</style>