<template>
  <base-container
    :show-aside-left="false"
    :show-aside-right="false"
    class="secondary-detail"
  >
    <div class="l-box">
      <div class="l-flex"></div>
      <dark-button
        class="l-mr-10"
        icon="back"
        v-if="showBack"
        @on-click="onBack"
        >返回</dark-button
      >
    </div>
    <card-wrap>
      <div class="l-box">
        <subtitle
          title="2021年第二产业用电量变化趋势"
          class="l-flex"
        ></subtitle>
        <button-tab
          v-model="date.value"
          :data="date.data"
          @change="trendChange"
          size="small"
          class="l-mr-26"
        ></button-tab>
      </div>
      <div class="industry-img l-ml-20 l-mr-40"></div>
      <electricity-trend-chart
        :Ydata="aa"
        :Xdata="bb"
        class="l-flex"
        @monthChange="monthClik"
      >
      </electricity-trend-chart>
    </card-wrap>
    <div class="industry l-mt-20">
      <div class="l-box">
        <div class="industry-time l-box l-flex">
          <white-title title="第二产业行业用电量情况-"></white-title>
          <div class="industry-time-title">{{ this.month }}</div>
          <div class="industry-time-uparrow"></div>
        </div>
        <div class="industry-unit">单位：万千瓦时</div>
      </div>
      <div class="industry-img l-mt-20"></div>
      <table-pagination
        :columns="table.columns"
        :data="table.data"
        size="medium"
        border
        :row-class-name="rowClass"
        :total.sync="table.total"
        :page.sync="table.page"
        class="dark-table"
        :height="table.height"
        @sort-change="onSortChange"
        @pagination-change="pageClik"
      >
      </table-pagination>
    </div>
  </base-container>
</template>
<script>
import electricityTrendChart from "@/components/electricity-trend-chart";
import * as api from "@/api/secondary-detail";
import isEmpty from "@/utils/isEmpty";
export default {
  components: {
    electricityTrendChart,
  },
  props: {
    showBack: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      valuePer: 3,
      powerData: 3,
      pageNum: 1,
      sortName: "",
      sortType: null,
      time: "2021-12",
      table: {
        total: 60,
        page: 1,
        height: 440,

        columns: [
          {
            label: "排序",
            prop: "sort",
            fixed: true,
            width: 74,
            headerAlign: "center",
            align: "center",
            showOverflowTooltip: true,
          },
          {
            label: "一级分类",
            prop: "first",
            fixed: true,
            width: 118,
            headerAlign: "center",
            align: "center",
            showOverflowTooltip: true,
          },
          {
            label: "二级分类",
            prop: "second",
            fixed: true,
            width: 270,
            headerAlign: "center",
            align: "center",
            showOverflowTooltip: true,
          },
          {
            label: "用电增速",
            prop: "ydzs",
            fixed: true,
            sortable: "custom",
            width: 110,
            headerAlign: "center",
            align: "center",
            showOverflowTooltip: true,
          },
          {
            label: "同比",
            prop: "ydzsTb",
            fixed: true,
            width: 120,
            headerAlign: "center",
            align: "center",
            showOverflowTooltip: true,
          },
          {
            label: "总用电量",
            prop: "zydl",
            sortable: "custom",
            width: 110,
            headerAlign: "center",
            align: "center",
            showOverflowTooltip: true,
          },
          {
            label: "占比",
            prop: "electricityConsumptionZb",
            sortable: "custom",
            width: 110,
            headerAlign: "center",
            align: "center",
            showOverflowTooltip: true,
          },
          {
            label: "同比",
            prop: "electricityConsumptionTb",
            width: 110,
            headerAlign: "center",
            align: "center",
            showOverflowTooltip: true,
          },
          {
            label: "环比",
            prop: "electricityConsumptionHb",
            width: 110,
            headerAlign: "center",
            align: "center",
            showOverflowTooltip: true,
          },
          {
            label: "南山",
            prop: "nsValue",
            sortable: "custom",
            width: 110,
            headerAlign: "center",
            align: "center",
          },
          {
            label: "罗湖",
            prop: "lhuValue",
            sortable: "custom",
            width: 110,
            headerAlign: "center",
            align: "center",
          },
          {
            label: "福田",
            prop: "ftValue",
            sortable: "custom",
            width: 110,
            headerAlign: "center",
            align: "center",
          },
          {
            label: "龙华",
            prop: "lhValue",
            sortable: "custom",
            width: 110,
            headerAlign: "center",
            align: "center",
          },
          {
            label: "光明",
            prop: "gmValue",
            sortable: "custom",
            width: 110,
            headerAlign: "center",
            align: "center",
          },
          {
            label: "宝安",
            prop: "baValue",
            sortable: "custom",
            width: 110,
            headerAlign: "center",
            align: "center",
          },
          {
            label: "龙岗",
            prop: "lgValue",
            sortable: "custom",
            width: 110,
            headerAlign: "center",
            align: "center",
          },
          {
            label: "坪山",
            prop: "psValue",
            sortable: "custom",
            width: 110,
            headerAlign: "center",
            align: "center",
          },
          {
            label: "深汕合作",
            prop: "ssValue",
            sortable: "custom",
            width: 110,
            headerAlign: "center",
            align: "center",
          },
          {
            label: "大鹏",
            prop: "dpValue",
            sortable: "custom",
            width: 110,
            headerAlign: "center",
            align: "center",
          },
          {
            label: "盐田",
            prop: "ytValue",
            sortable: "custom",
            width: 110,
            headerAlign: "center",
            align: "center",
          },
        ],
        data: [
          {
            sort: 1,
            first: "工业",
            second: "医药制造业",
            ydzs: "-0.34%",
            ydzs_tb: "3.21个百分点",
            electricity_consumption: 869.09,
            electricity_consumption_zb: "0.339%",
            electricity_consumption_tb: "-0.34%",
            electricity_consumption_hb: "8.93%",
            ns_value: 74.08,
            lhu_value: 89.03,
            ft_value: 34.81,
            lh_value: 17.92,
            gm_value: 29.23,
            ba_value: 87.11,
            lg_value: 17.9,
            pingshan: 10.22,
            shenshan: 6.66,
            dapeng: 10.32,
            yantian: 8.99,
          },
          {
            sort: 2,
            first: "工业",
            second: "生物药品制造业制造",
            powerSpeed: "-0.34%",
            compare: "3.21个百分点",
            powerTotal: 869.09,
            ratio: "0.339%",
            areaCompare: "-0.34%",
            ratioCompare: "8.93%",
            nanshan: 74.08,
            luohu: 89.03,
            futian: 34.81,
            longhua: 17.92,
            guangming: 29.23,
            baoan: 87.11,
            longgang: 17.9,
            pingshan: 10.22,
            shenshan: 6.66,
            dapeng: 10.32,
            yantian: 8.99,
          },
          {
            sort: 3,
            first: "工业",
            second: "非金属矿物制品业",
            powerSpeed: "-0.34%",
            compare: "3.21个百分点",
            powerTotal: 869.09,
            ratio: "0.339%",
            areaCompare: "-0.34%",
            ratioCompare: "8.93%",
            nanshan: 74.08,
            luohu: 89.03,
            futian: 34.81,
            longhua: 17.92,
            guangming: 29.23,
            baoan: 87.11,
            longgang: 17.9,
            pingshan: 10.22,
            shenshan: 6.66,
            dapeng: 10.32,
            yantian: 8.99,
          },
          {
            sort: 4,
            first: "工业",
            second: "有色金属冶炼及压延加工业",
            powerSpeed: "-0.34%",
            compare: "3.21个百分点",
            powerTotal: 869.09,
            ratio: "0.339%",
            areaCompare: "-0.34%",
            ratioCompare: "8.93%",
            nanshan: 74.08,
            luohu: 89.03,
            futian: 34.81,
            longhua: 17.92,
            guangming: 29.23,
            baoan: 87.11,
            longgang: 17.9,
            pingshan: 10.22,
            shenshan: 6.66,
            dapeng: 10.32,
            yantian: 8.99,
          },
          {
            sort: 5,
            first: "工业",
            second: "交通运输、电器、电子设备制造业",
            powerSpeed: "-0.34%",
            compare: "3.21个百分点",
            powerTotal: 869.09,
            ratio: "0.339%",
            areaCompare: "-0.34%",
            ratioCompare: "8.93%",
            nanshan: 74.08,
            luohu: 89.03,
            futian: 34.81,
            longhua: 17.92,
            guangming: 29.23,
            baoan: 87.11,
            longgang: 17.9,
            pingshan: 10.22,
            shenshan: 6.66,
            dapeng: 10.32,
            yantian: 8.99,
          },
          {
            sort: 6,
            first: "建筑业",
            second: "房屋和土木工程建筑业",
            powerSpeed: "-0.34%",
            compare: "3.21个百分点",
            powerTotal: 869.09,
            ratio: "0.339%",
            areaCompare: "-0.34%",
            ratioCompare: "8.93%",
            nanshan: 74.08,
            luohu: 89.03,
            futian: 34.81,
            longhua: 17.92,
            guangming: 29.23,
            baoan: 87.11,
            longgang: 17.9,
            pingshan: 10.22,
            shenshan: 6.66,
            dapeng: 10.32,
            yantian: 8.99,
          },
          {
            sort: 7,
            first: "工业",
            second: "通信设备、计算机及其他电子设备制造业",
            powerSpeed: "-0.34%",
            compare: "3.21个百分点",
            powerTotal: 869.09,
            ratio: "0.339%",
            areaCompare: "-0.34%",
            ratioCompare: "8.93%",
            nanshan: 74.08,
            luohu: 89.03,
            futian: 34.81,
            longhua: 17.92,
            guangming: 29.23,
            baoan: 87.11,
            longgang: 17.9,
            pingshan: 10.22,
            shenshan: 6.66,
            dapeng: 10.32,
            yantian: 8.99,
          },
          {
            sort: 8,
            first: "工业",
            second: "文体用品制造业",
            powerSpeed: "-0.34%",
            compare: "3.21个百分点",
            powerTotal: 869.09,
            ratio: "0.339%",
            areaCompare: "-0.34%",
            ratioCompare: "8.93%",
            nanshan: 74.08,
            luohu: 89.03,
            futian: 34.81,
            longhua: 17.92,
            guangming: 29.23,
            baoan: 87.11,
            longgang: 17.9,
            pingshan: 10.22,
            shenshan: 6.66,
            dapeng: 10.32,
            yantian: 8.99,
          },
          {
            sort: 9,
            first: "工业",
            second: "化学原料及化学制品制造业",
            powerSpeed: "-0.34%",
            compare: "3.21个百分点",
            powerTotal: 869.09,
            ratio: "0.339%",
            areaCompare: "-0.34%",
            ratioCompare: "8.93%",
            nanshan: 74.08,
            luohu: 89.03,
            futian: 34.81,
            longhua: 17.92,
            guangming: 29.23,
            baoan: 87.11,
            longgang: 17.9,
            pingshan: 10.22,
            shenshan: 6.66,
            dapeng: 10.32,
            yantian: 8.99,
          },
          {
            sort: 10,
            first: "工业",
            second: "装订及其他印刷服务活动",
            powerSpeed: "-0.34%",
            compare: "3.21个百分点",
            powerTotal: 869.09,
            ratio: "0.339%",
            areaCompare: "-0.34%",
            ratioCompare: "8.93%",
            nanshan: 74.08,
            luohu: 89.03,
            futian: 34.81,
            longhua: 17.92,
            guangming: 29.23,
            baoan: 87.11,
            longgang: 17.9,
            pingshan: 10.22,
            shenshan: 6.66,
            dapeng: 10.32,
            yantian: 8.99,
          },
        ],
      },
      date: {
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
      month: "2021年4月",
      aa: {},
      bb: [],
    };
  },
  created() {
    this.init();
  },
  watch: {
    valuePer() {
      this.queryPowerOfTwoByIndustry();
      this.queryCountOfTwoByIndustry();
    },
    pageNum() {
      this.queryPowerOfTwoByIndustry();
    },
    sortType() {
      this.queryPowerOfTwoByIndustry();
    },
    sortName() {
      this.queryPowerOfTwoByIndustry();
    },
    time() {
      this.queryPowerOfTwoByIndustry();
      this.queryCountOfTwoByIndustry();
    },
    powerData() {
      this.queryPowerTrendChange();
    },
  },
  methods: {
    init() {
      this.trendInit();
      this.queryPowerOfTwoByIndustry();
      this.queryPowerTrendChange();
      this.queryCountOfTwoByIndustry();
    },
    rowClass({ rowIndex }) {
      return rowIndex % 2 === 0 ? "dark" : "light";
    },
    onBack() {
      this.$router.back();
    },
    trendInit() {
      this.aa = {
        industryData: [1, 2, 5, 8, 7, 1, 3, 3, 4],
        employmentData: [2, 2, 1, 6, 8, 3, 4, 4, 5],
        manufactureData: [3, 4, 3, 5, 6, 5, 5, 5, 6],
      };
      this.bb = [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月",
      ];
    },
    trendChange(val) {
      if ("month" == val) {
        this.valuePer = 3;
        this.month = "2021年04月";
        (this.powerData = 3),
          (this.aa = {
            industryData: [1, 2, 5, 8, 7, 1, 3, 3, 4],
            employmentData: [2, 2, 1, 6, 8, 3, 4, 4, 5],
            manufactureData: [3, 4, 3, 5, 6, 5, 5, 5, 6],
          });
        this.bb = [
          "1月",
          "2月",
          "3月",
          "4月",
          "5月",
          "6月",
          "7月",
          "8月",
          "9月",
          "10月",
          "11月",
          "12月",
        ];
      } else {
        this.valuePer = 1;
        this.powerData = 1;
        this.month = "2021年";
        this.aa = {
          industryData: [1, 2, 5, 8, 7, 1],
          employmentData: [2, 2, 1, 6, 8, 3],
          manufactureData: [3, 4, 3, 5, 6, 5],
        };
        this.bb = ["2016", "2017", "2018", "2019", "2020", "2021"];
      }
    },

    monthClik(e) {
      if (e.name.length >= 4) {
        this.month = e.name + "年";
        this.time = e.name;
      } else {
        this.month = "2021年" + e.name + "月";
        if (e.name.length == 1) {
          this.time = "2021-0" + e.name;
        } else {
          this.time = "2021-" + e.name;
        }
      }
    },
    onSortChange({ column, prop, order }) {
      this.sortName = prop;
      if (order === "ascending") {
        this.sortType = 1;
      } else {
        this.sortType = 2;
      }
    },
    pageClik(val1, val2) {
      this.pageNum = val1;
    },
    // 产业基因下钻页面第二产业行业用电量情况
    queryPowerOfTwoByIndustry() {
      api
        .queryPowerOfTwoByIndustry({
          valueType: 1,
          recordType: 1,
          dataPeriod: this.valuePer,
          time: this.time,
          pageNum: this.pageNum,
          pageSize: 10,
          sortName: this.sortName,
          sortStyle: this.sortType,
        })
        .then((res) => {
          this.table.data = (res || []).map((item, index) => {
            item.sort = this.table.data[index].sort;
            item.first = item.oneLevelName;
            item.second = item.industryName;
            item.ydzs =
              isEmpty(item.ydzs) == "- -"
                ? isEmpty(item.ydzs)
                : isEmpty(item.ydzs) + "%";
            item.ydzsTb =
              isEmpty(item.ydzsTb) == "- -"
                ? isEmpty(item.ydzsTb)
                : isEmpty(item.ydzsTb) + "%";
            item.electricityConsumptionZb =
              isEmpty(item.electricityConsumptionZb) == "- -"
                ? isEmpty(item.electricityConsumptionZb)
                : isEmpty(item.electricityConsumptionZb) + "%";
            item.electricityConsumptionTb =
              isEmpty(item.electricityConsumptionTb) == "- -"
                ? isEmpty(item.electricityConsumptionTb)
                : isEmpty(item.electricityConsumptionTb) + "%";
            item.electricityConsumptionHb =
              isEmpty(item.electricityConsumptionHb) == "- -"
                ? isEmpty(item.electricityConsumptionHb)
                : isEmpty(item.electricityConsumptionHb) + "%";
            item.zydl = isEmpty(item.zydl);
            item.nsValue = isEmpty(item.nsValue);
            item.lhuValue = isEmpty(item.lhuValue);
            item.ftValue = isEmpty(item.ftValue);
            item.lhValue = isEmpty(item.lhValue);
            item.gmValue = isEmpty(item.gmValue);
            item.baValue = isEmpty(item.baValue);
            item.lgValue = isEmpty(item.lgValue);
            item.psValue = isEmpty(item.psValue);
            item.ssValue = isEmpty(item.ssValue);
            item.dpValue = isEmpty(item.dpValue);
            item.ytValue = isEmpty(item.ytValue);
            return item;
          });
        });
    },
    //产业基因下钻页面第二产业用电量趋势变化.
    queryPowerTrendChange() {
      this.aa.industryData = [];
      this.aa.employmentData = [];
      this.aa.manufactureData = [];
      this.bb = [];
      api
        .queryPowerTrendChange({
          valueType: 1,
          dataPeriod: this.powerData,
          recordType: 1,
          time: "2021-12-01",
        })
        .then((res) => {
          res.forEach((item, index) => {
            this.aa.industryData.push(item.valueIndustryTwo);
            this.aa.employmentData.push(item.valueIndustrial);
            this.aa.manufactureData.push(item.valueMake);
            this.bb.push(item.time);
          });
        });
    },
    // 统计条数
    queryCountOfTwoByIndustry() {
      api
        .queryCountOfTwoByIndustry({
          valueType: 1,
          dataPeriod: this.valuePer,
          recordType: 1,
          time: this.time,
        })
        .then((res) => {
          this.table.total = parseInt(res[0].valueOne);
        });
    },
  },
};
</script>
<style lang="less" scoped>
@import "../../style/var.less";
.secondary-detail {
  .industry {
    width: 99%;
    height: 575px;
    background: #0e1d38;
    padding: 15px 40px;
    margin-left: 10px;
    border-top: 1px solid #163962;
    &-unit {
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #d3daf2;
    }
    &-time {
      position: relative;
      &-title {
        position: absolute;
        left: 225px;
        font-size: 22px;
        font-family: ysbth;
        font-weight: 400;
        color: rgba(1, 233, 215, 0.86);
      }
      &-uparrow {
        position: absolute;
        left: 0;
        top: -24px;
        background: url("@{imgUrl}/list/upline.png") no-repeat center center;
        width: 100%;
        height: 9px;
      }
    }
    &-img {
      background: url("@{imgUrl}/industrial/zs.png") no-repeat center center;
      background-size: 100% 100%;
      height: 1px;
      margin-bottom: 20px;
    }
  }
}
</style>