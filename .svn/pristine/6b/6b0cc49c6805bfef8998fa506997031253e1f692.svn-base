<template>
  <div class="holidaygdp">
    <div class="holidaygdp-szpowertrend">
      <div class="holidaygdp-szpowertrend-inner">
        <div class="holidaygdp-szpowertrend-inner-title">
          {{ powereco.title }}
        </div>
        <div class="holidaygdp-szpowertrend-inner-content">
          <div class="holidaygdp-szpowertrend-inner-content-hold">
            {{ powereco.content }}
          </div>
        </div>
        <timegene-onuichartstitle
          leftTitle="趋势性"
          leftRight="随温度升高而升高"
        ></timegene-onuichartstitle>
        <timegene-clearcharts></timegene-clearcharts>
        <timegene-onuichartstitle
          leftTitle="周期性"
          leftRight="以周为循环波动"
        ></timegene-onuichartstitle>
        <timegene-clearchartstwo></timegene-clearchartstwo>
        <timegene-onuichartstitle
          leftTitle="节假日特征"
          leftRight="受节假日影响特征明显"
        ></timegene-onuichartstitle>

        <timegene-clearchartsthree></timegene-clearchartsthree>
      </div>
    </div>

    <div class="holidaygdp-weekendeco">
      <timegene-model
        bigtitle="周末经济"
        weekTitle="2021年均一周用电趋势"
        sprTitle="年均周末用电量增幅趋势"
        holTitle="2021年周末商圈用电增幅排行"
        :content="weekContent"
        :listData="listData.listDataWeek"
        :chartsData="listData"
      ></timegene-model>
    </div>
    <div class="holidaygdp-newyeareco">
      <timegene-model
        bigtitle="春节经济"
        weekTitle="历史春节前后用电量变化情况"
        sprTitle="历年春节期间平均日用电量"
        holTitle="2021年春节居民用电降幅排行"
        :content="sprContent"
        :listData="listData.listDataSpr"
        :chartsData="listData"
      ></timegene-model>
    </div>
    <div class="holidaygdp-littleholidayeco">
      <timegene-model
        bigtitle="小长假经济"
        weekTitle="近一年小长假平均日商业用电增幅"
        sprTitle="年均节假日用电量增幅趋势"
        holTitle="2021年小长假商业用电增幅排行"
        :content="holContent"
        :listData="listData.listDataHol"
        :chartsData="listData"
      ></timegene-model>
    </div>
  </div>
</template>
<script>
import * as api from "@/api/time";
export default {
  name: "holiday-gdp",
  data() {
    return {
      year: 2021,
      orgCode: "04",
      recordType: 1,
      valueType: 1,
      powereco: {
        title: "深圳日用电趋势",
        content:
          "深圳用电量随时间的变化具有明显的趋势性、周期性，主要表现在用电量以年为循环随着温度变化呈现增长趋势，和以周为单位形成周末用电量下降的规律循环。在整个周期节点中，节假日用电特征明显。以用电量分析节假日经济特征，监测深圳消费经济发展趋势。",
      },
      weekContent:
        "周用电趋势中，周末商业用电和居民用电上升，消费较工作日更为活跃，可通过历年用电增幅趋势查看实体经济活跃情况。受疫情影响，2020年周末商业用电量明显下降，疫情对实体消费业造成巨大打击，居民用电增幅明显上升，显示疫情状态下人们更多的选择减少活动。",
      sprContent:
        "深圳作为人口输入型城市，受到春节返乡潮的影响用电量在节前开始下降与元月初一左右达到低估后逐渐恢复。总影响时段约1月左右。2020年受疫情影响用电量恢复周期明显延长。2021年受政策影响多数人选择就地过年，居民用电降幅明显低于往年。",
      holContent:
        "通过对小长假期间，商业用电和居民用电数据的分析可以得出人们的活动趋势与实体经济运行情况。较春节期间相比，小长假期间居民用电没有明显下降趋势，大多数人选择留深过节。商业用电增幅较周末期间更大，娱乐业相比2020有较大增长。",

      listData: {
        //2021年周末商圈用电增幅排行
        listDataWeek: [
          {
            sq: "一城中心",
            zf: 25,
            upordown: "增长",
            unit: "%",
            tb: 6.51,
            cnunit: "个百分点",
          },
          {
            sq: "一城中心",
            zf: 25,
            upordown: "增长",
            unit: "%",
            tb: 6.51,
            cnunit: "个百分点",
          },
          {
            sq: "一城中心",
            zf: 25,
            upordown: "增长",
            unit: "%",
            tb: 6.51,
            cnunit: "个百分点",
          },
          {
            sq: "一城中心",
            zf: 25,
            upordown: "增长",
            unit: "%",
            tb: 6.51,
            cnunit: "个百分点",
          },
          {
            sq: "一城中心",
            zf: 25,
            upordown: "增长",
            unit: "%",
            tb: 6.51,
            cnunit: "个百分点",
          },
        ],
        //2021年春节居民用电降幅排行
        listDataSpr: [
          {
            sq: "宝安区",
            zf: 25,
            upordown: "下降",
            unit: "%",
            tb: -6.51,
            cnunit: "个百分点",
          },
          {
            sq: "龙岗区",
            zf: 25,
            upordown: "下降",
            unit: "%",
            tb: -6.51,
            cnunit: "个百分点",
          },
          {
            sq: "大鹏新区",
            zf: 25,
            upordown: "下降",
            unit: "%",
            tb: -6.51,
            cnunit: "个百分点",
          },
          {
            sq: "坪山区",
            zf: 25,
            upordown: "下降",
            unit: "%",
            tb: -6.51,
            cnunit: "个百分点",
          },
          {
            sq: "龙华区",
            zf: 25,
            upordown: "下降",
            unit: "%",
            tb: -6.51,
            cnunit: "个百分点",
          },
        ],
        //2021年小长假商业用电增幅排行
        listDataHol: [
          {
            sq: "餐饮业",
            zf: 25,
            upordown: "增长",
            unit: "%",
            tb: 6.51,
            cnunit: "个百分点",
          },
          {
            sq: "娱乐业",
            zf: 25,
            upordown: "增长",
            unit: "%",
            tb: 6.51,
            cnunit: "个百分点",
          },
          {
            sq: "住宿业",
            zf: 25,
            upordown: "增长",
            unit: "%",
            tb: 6.51,
            cnunit: "个百分点",
          },
          {
            sq: "服务业",
            zf: 25,
            upordown: "增长",
            unit: "%",
            tb: 6.51,
            cnunit: "个百分点",
          },
          {
            sq: "零售业",
            zf: 25,
            upordown: "增长",
            unit: "%",
            tb: 6.51,
            cnunit: "个百分点",
          },
        ],
        //2021年均一周用电趋势
        weekChartsData: {
          name: "周末经济",
          unit: "万千瓦时",
          industryYearData: [],
          businessYearData: [],
          residentYearData: [],
          nameData1: "工业用电",
          nameData2: "商业用电",
          nameData3: "居民用电",
          Xdata: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        },
        //历史春节前后用电量变化情况
        sprChartsData: {
          name: "春节经济",
          unit: "万千瓦时",
          YearData1: [],
          YearData2: [],
          YearData3: [],
          YearData4: [],
          nameData1: "2018",
          nameData2: "2019",
          nameData3: "2020",
          nameData4: "2021",
          Xdata: [],
        },
        //近一年小长假平均日商业用电增幅
        holChartsData: {
          name: "小长假经济",
          unit: "%",
          YearData: [45, 24, 10, 14, 14, 42],
          Xdata: ["元旦", "清明", "五一", "端午", "中秋", "国庆"],
        },

        powerChartsData: [
          //年均周末用电量增幅趋势
          {
            name: "周末经济",
            unit: "%",
            businessYearData: [0.48, 0.5, 0.55, 0.71, 0.45, 0.63],
            residentYearData: [0.36, 0.4, 0.43, 0.48, 0.65, 0.59],
            nameData1: "商业用电",
            nameData2: "居民用电",
            Xdata: ["2016", "2017", "2018", "2019", "2020", "2021"],
          },
          //历年春节期间平均日用电量
          {
            name: "春节经济",
            unit: "万千瓦时",
            businessYearData: [0.61, 0.65, 0.67, 0.71, 0.54, 0.72],
            residentYearData: [0.36, 0.4, 0.4, 0.4, 0.42, 0.49],
            nameData1: "商业用电",
            nameData2: "居民用电",
            Xdata: ["2016", "2017", "2018", "2019", "2020", "2021"],
          },
          //年均节假日用电量增幅趋势
          {
            name: "小长假经济",
            unit: "万千瓦时",
            businessYearData: [0.48, 0.5, 0.55, 0.71, 0.45, 0.63],
            residentYearData: [0.36, 0.4, 0.43, 0.48, 0.65, 0.59],
            nameData1: "商业用电",
            nameData2: "居民用电",
            max: 0.5,
            min: 0,
            Xdata: ["2016", "2017", "2018", "2019", "2020", "2021"],
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
      this.getElectricityTrend();
      this.getWeekTrend();
      this.getWeekBusinessPowerRow();
      this.getNewYearPowerChange();
      this.getNewYearAvgPower();
      this.getYearVctionAvePowerAdd();
      this.getVacationAvePowerAdd();
      this.getNewYearDecreasingRank();
      this.getVctionPowerRow();
    },
    //年均一周用电趋势接口
    getElectricityTrend() {
      this.listData.weekChartsData.Xdata = [];
      api
        .fetchElectricityTrend({
          year: this.year,
          orgCode: this.orgCode,
          recordType: this.recordType,
          valueType: this.valueType,
        })
        .then((res) => {
          res.forEach((item, index) => {
            this.listData.weekChartsData.industryYearData.push(
              item.induStrialPower
            );
            this.listData.weekChartsData.businessYearData.push(
              item.commerCialPower
            );
            this.listData.weekChartsData.residentYearData.push(
              item.residentPower
            );
            this.listData.weekChartsData.unit = item.electricityConsumptionUnit;
            this.listData.weekChartsData.Xdata.push(item.week);
          });
        });
    },
    //年均周末用电量增幅趋势接口
    getWeekTrend() {
      this.listData.powerChartsData[0].residentYearData = [];
      this.listData.powerChartsData[0].businessYearData = [];
      this.listData.powerChartsData[0].Xdata = [];
      api
        .getWeekTrend({
          year: this.year,
          orgCode: this.orgCode,
          recordType: this.recordType,
        })
        .then((res) => {
          res.forEach((item, index) => {
            this.listData.powerChartsData[0].businessYearData.push(
              item.residentPower
            );
            this.listData.powerChartsData[0].residentYearData.push(
              item.commerCialPower
            );
            this.listData.powerChartsData[0].Xdata.push(item.year);
            this.listData.powerChartsData[0].unit =
              item.electricityConsumptionUnit;
          });
        });
    },
    //年周末商圈用电增幅排行
    getWeekBusinessPowerRow() {
      api
        .getWeekBusinessPowerRow({
          year: this.year,
          recordType: this.recordType,
        })
        .then((res) => {
          console.log(res, 321);
          res.forEach((item, index) => {
            this.listData.listDataWeek[index].sq = item.orgName;
            this.listData.listDataWeek[index].tb = item.tb;
            this.listData.listDataWeek[index].zf = item.electricityAdd;
            this.listData.listDataWeek[index].unit = item.valuesOne;
            this.listData.listDataWeek[index].cnunit = item.valuesTwo;
          });
        });
    },
    //历史春节前后用电量变化情况接口
    getNewYearPowerChange() {
      this.listData.sprChartsData.YearData1 = [];
      this.listData.sprChartsData.YearData2 = [];
      this.listData.sprChartsData.YearData3 = [];
      this.listData.sprChartsData.YearData4 = [];
      api
        .getNewYearPowerChange({
          orgCode: this.orgCode,
          recordType: this.recordType,
        })
        .then((res) => {
          res.forEach((item, index) => {
            this.listData.sprChartsData.YearData1.push(item.valuesRecentFour);
            this.listData.sprChartsData.YearData2.push(item.valuesRecentThree);
            this.listData.sprChartsData.YearData3.push(item.valuesRecentTwo);
            this.listData.sprChartsData.YearData4.push(item.valuesRecentOne);
            this.listData.sprChartsData.Xdata.push(item.dates);
          });
        });
    },
    //历年春节期间平均日用电量接口
    getNewYearAvgPower() {
      this.listData.powerChartsData[1].residentYearData = [];
      this.listData.powerChartsData[1].businessYearData = [];
      this.listData.powerChartsData[1].Xdata = [];
      api
        .getNewYearAvgPower({
          year: this.year,
          orgCode: this.orgCode,
          recordType: this.recordType,
        })
        .then((res) => {
          console.log(res, 86);
          res.forEach((item, index) => {
            this.listData.powerChartsData[1].businessYearData.push(
              item.residentPower
            );
            this.listData.powerChartsData[1].residentYearData.push(
              item.commerCialPower
            );
            this.listData.powerChartsData[1].Xdata.push(item.year);
            this.listData.powerChartsData[1].unit =
              item.electricityConsumptionUnit;
          });
        });
    },
    //年均节假日用电量增幅趋势接口
    getYearVctionAvePowerAdd() {
      this.listData.powerChartsData[2].residentYearData = [];
      this.listData.powerChartsData[2].businessYearData = [];
      this.listData.powerChartsData[2].Xdata = [];
      api
        .getYearVctionAvePowerAdd({
          valueType: this.valueType,
          recordType: this.recordType,
        })
        .then((res) => {
          res.forEach((item, index) => {
            this.listData.powerChartsData[2].businessYearData.push(
              item.commerCialPower
            );
            this.listData.powerChartsData[2].residentYearData.push(
              item.residentPower
            );
            this.listData.powerChartsData[2].Xdata.push(item.year);
            this.listData.powerChartsData[2].unit = item.dw;
          });
        });
    },
    //近一年小长假平均日商业用电增幅接口
    getVacationAvePowerAdd() {
      this.listData.holChartsData.YearData = [];
      this.listData.holChartsData.Xdata = [];

      api
        .getVacationAvePowerAdd({
          year: this.year,
          recordType: this.recordType,
          valueType: this.valueType,
        })
        .then((res) => {
          res.forEach((item, index) => {
            this.listData.holChartsData.YearData.push(item.electricityAdd);
            this.listData.holChartsData.Xdata.push(item.holidayName);
            this.listData.holChartsData.unit = item.valuesOne;
          });
        });
    },
    //春节居民用电降幅排行接口
    getNewYearDecreasingRank() {
      api
        .getNewYearDecreasingRank({
          year: this.year,
          recordType: this.recordType,
        })
        .then((res) => {
          res.forEach((item, index) => {
            this.listData.listDataSpr[index].sq = item.orgName;
            this.listData.listDataSpr[index].tb = item.tb;
            this.listData.listDataSpr[index].zf = item.electricityAdd;
          });
        });
    },
    //小长假日商业用电增幅接口
    getVctionPowerRow() {
      api
        .getVctionPowerRow({
          year: this.year,
          recordType: this.recordType,
          valueType: this.valueType,
        })
        .then((res) => {
          res.forEach((item, index) => {
            this.listData.listDataHol[index].sq = item.industryName;
            this.listData.listDataHol[index].tb = item.tb;
            this.listData.listDataHol[index].zf = item.electricityAdd;
            this.listData.listDataHol[index].unit = item.valuesOne;
            this.listData.listDataHol[index].cnunit = item.valuesTwo;
          });
        });
    },
  },
};
</script>
<style lang="less" scoped>
@import "../../style/var.less";

.holidaygdp {
  display: flex;

  padding: 20px 20px 0 0;
  &-szpowertrend {
    min-height: 200px;
    display: flex;
    flex: 1;

    &-inner {
      width: 100%;
      &-title {
        width: 100%;

        font-family: "Microsoft YaHei";
        background: url("@{imgUrl}/timegenetitle/holidaygdp-title.png") center
          center no-repeat;
        height: 30px;
        color: #00ffea;
        font-size: 20px;
        font-weight: bold;
        padding: 10px 0 0 60px;
      }
      &-content {
        padding: 30px 60px 10px 60px;
        font-family: "Microsoft YaHei";
        line-height: 32px;
        font-size: 14px;
        color: rgba(255, 255, 255, 0.9);
        
        &-hold{
          overflow: auto;
          height: 160px;
        }
       
      }
    }
  }
  &-weekendeco {
    padding: 0 10px 0 10px;
    min-height: 200px;
    display: flex;
    flex: 1;
  }
  &-newyeareco {
    padding: 0 10px 0 10px;
    min-height: 200px;
    display: flex;
    flex: 1;
  }
  &-littleholidayeco {
    padding: 0 10px 0 10px;
    min-height: 200px;
    display: flex;
    flex: 1;
  }
}
</style>