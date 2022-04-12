<template>
  <div class="outside">
    <div class="outside-hold">
      <div class="outside-hold-imgandline">
        <div
          class="outside-hold-imgandline-img"
          herf="#top"
          @click="openData"
          :class="[this.showData ? 'openactive' : '']"
        ></div>
        <div class="outside-hold-imgandline-line">
          <div class="outside-hold-imgandline-line-cirone"></div>
          <div class="outside-hold-imgandline-line-solid"></div>
          <div class="outside-hold-imgandline-line-cirtwo"></div>
        </div>
      </div>

      <div
        id="assembly"
        class="outside-hold-assembly"
        :class="[this.showData ? 'active' : '']"
      >
        <!-- 折叠面板组件区域（上） -->
        <div class="outside-hold-assembly-top">
          <!-- 标题 -->
          <maxsubtitle title="区域用电发展情况"></maxsubtitle>
          <!-- 组件 -->
          <div class="outside-hold-assembly-top-contentop">
            <electric-card
              :data="data.area === 'area' ? qyinnerData : innerData"
              :orgcode="data.areaname"
            ></electric-card>
            <vertical-line class="l-ml-2 l-mr-2"></vertical-line>

            <area-power-growth-rate-all
              v-show="data.area === 'area' ? false : true"
            ></area-power-growth-rate-all>

            <power-consumption-all
              v-show="data.area === 'area' ? true : false"
            ></power-consumption-all>

            <vertical-line class="l-ml-2 l-mr-2"></vertical-line>
            <situation
              :data="
                data.area === 'area' ? qyinnerSituationData : innerSituationData
              "
            ></situation>
          </div>
        </div>

        <!-- 折叠面板组件区域（中） -->
        <div class="outside-hold-assembly-middle">
          <area-swiper-card
            :data="data.area === 'area' ? streetData.data : areaData.data"
          ></area-swiper-card>
        </div>
        <!-- 折叠面板组件区域（下） -->
        <div
          class="outside-hold-assembly-down"
          :class="[this.showData ? '' : 'show']"
        >
          <!-- 标题 -->
          <maxsubtitle
            style="margin-top: 6px"
            title="营商环境-电力可靠性"
          ></maxsubtitle>
          <!-- 组件 -->
          <div class="outside-hold-assembly-down-assemblydown">
            <electric-powercard
              :data="data.area === 'area' ? qypowercardData : powercardData"
              :orgcode="data.areaname"
            ></electric-powercard>
            <vertical-line class="l-ml-2 l-mr-2"></vertical-line>
            <area-proportion-chart-all
              :orgCode="data.areaname"
            ></area-proportion-chart-all>
            <vertical-line class="l-ml-2 l-mr-2"></vertical-line>
            <situation
              :data="
                data.area === 'area'
                  ? qyareaInnerSituationData
                  : areaInnerSituationData
              "
            ></situation>
          </div>
        </div>
      </div>
      <div class="outside-hold-imgandline-line-rectone"></div>
      <div class="outside-hold-imgandline-line-recttwo"></div>
    </div>
  </div>
</template>

<script>
import * as api from "@/api/area";
import areaSwiperCard from "@/components/area-swiper-card";
import areaPowerGrowthRateAll from "@/components/area-power-growth-rate-all";
import areaProportionChartAll from "@/components/area-proportion-chart-all";
import powerConsumptionAll from "@/components/power-consumption-all";
export default {
  props: {
    data: {
      type: Object,
      default: () => {},
    },
    height: {
      type: String,
      default: "",
    },
  },
  components: {
    areaSwiperCard,
    areaPowerGrowthRateAll,
    areaProportionChartAll,
    powerConsumptionAll,
  },
  data() {
    return {
      code: this.data.areaname,
      valueType: 2,
      recordType: 1,
      orgCode: "04",
      dataPeriod: 3,
      time: "2021-12-12",
      showData: false,
      innerData: {
        innercardData: {
          title: "深圳区域用电增长均衡度",
          sum: 86.2,
          unit: "",
        },

        contrastData: {
          tb: "同比",
          num: 5.6,
          unit: "%",
        },

        maxandminData: {
          hightname: "最高增速",
          lowname: "最低增速",
          areapowermax: "龙华区",
          areapowermin: "龙岗区",
          maxnum: 12.6,
          minnum: 11.4,
          unit: "%",
        },
      },

      qyinnerData: {
        contrastData: {
          tb: "同比",
          num: 9.4,
          unit: "个百分点",
        },
        innercardData: {
          areatitle: "南山",
          title: "用电增长速度",
          sum: 5.21,
          unit: "%",
        },
        maxandminData: {
          hightname: "最高负荷",
          lowname: "最低负荷",
          areapowermax: "",
          areapowermin: "",
          maxnum: 12.6,
          minnum: 11.4,
          unit: "万千瓦时",
        },
      },
      powercardData: {
        innercardData: {
          title: "2020年深圳获得电力指数",
          sum: 78.9,
          unit: "分",
        },
        contrastData: {
          tb: "同比",
          num: 5.6,
          unit: "%",
        },
        brandData: [
          {
            city: "北京",
            num: 83.43,
          },
          {
            city: "上海",
            num: 80.32,
          },
          {
            city: "广州",
            num: 84.54,
          },

        ],
      },
      qypowercardData: {
        innercardData: {
          title: "供电可靠性",
          areatitle: "南山",
          sum: 99.99,
          unit: "%",
        },
        contrastData: {
          tb: "",
          num: 0,
          unit: "",
        },
        brandData: [
          {
            city: "2018",
            num: 99.87,
            unit: "%",
          },
          {
            city: "2018",
            num: 99.87,
            unit: "%",
          },
          {
            city: "2019",
            num: 83.43,
            unit: "%",
          },
        ],
      },

      innerSituationData: {
        title: "本年区域用电增长情况分析",
        content:
          "深圳本年区域用电增长均衡度为65.40，相较去年地区用电增长差异有所减少，各区发展更为均衡。深圳年均用电增长速度为13.29%，12月用电增长速度为-1.58%。其中增长最快的为深汕区，12月用电增长速度为1.93%，受第一产用电增速影响较大，该区农、林、牧、渔业行业用电增长速度突出，为5.64%。其中增长最慢为福田区。",
      },
      qyinnerSituationData: {
        title: "本年区域用电增长情况分析",
        content:
          "南山区整体用电增长率为67.75，排名第一。第二产业增长率为90.49%，同比下降3.46%。其中工业产业降幅最大，为12.09%。第三产业增长率为70.94%，同比增长4.58%，其中信息传输、软件和信息技术服务业增长最快，为15.91%，同比增长72.33%。",
      },

      areaInnerSituationData: {
        title: "本年电力可靠性情况分析",
        content:
          "深圳供电局2021截止12月数据年全口径客户年平均停电时间为3.536分钟每户，较去年下降16.72%，达到世界领先水平。其中故障停电时间为0.29分钟每户，比去年下降了61.33%，彰显了深圳强大的电力可靠度。平均计划停电时间下降99.98%，体现了深圳供电局调度与协调能力的成熟度。据计算，仅2021年一年，深圳供电局就通过减少停电时间多供电量1.07亿千万时，为深圳增加社会生产总值约26亿元。",
      },
      qyareaInnerSituationData: {
        title: "本年电力可靠性情况分析",
        content:
          "南山供电局2021截止12月数据年全口径客户平均停电时间为1.33分钟每户，平均每户停电时间较去年同期下降0.05分钟。供电可靠率达到99.99%，较去年上升了0.03个百分点，在全市11个区内排名第3，强有力的用电可靠性保障了南山区经济的平稳快速发展。",
      },
      swiperData: [],
      areaData: {
        value: "qy",
        data: [
          {
            name: "南山",
            date: "2021-12月",
            powerGrowth: [
              {
                name: "1、XXXXXXXX",
                value: "3.32",
              },
              {
                name: "1、XXXXXXXX",
                value: "3.32",
              },
              {
                name: "1、XXXXXXXX",
                value: "3.32",
              },
            ],
            powerReduction: [
              {
                name: "1、XXXXXXXX",
                value: "-3.32",
              },
              {
                name: "1、XXXXXXXX",
                value: "-3.32",
              },
            ],
          },
          {
            name: "罗湖",
            date: "2021-12月",
            powerGrowth: [
              {
                name: "1、XXXXXXXX",
                value: "3.32",
              },
              {
                name: "1、XXXXXXXX",
                value: "3.32",
              },
              {
                name: "1、XXXXXXXX",
                value: "3.32",
              },
            ],
            powerReduction: [
              {
                name: "1、XXXXXXXX",
                value: "-3.32",
              },
              {
                name: "1、XXXXXXXX",
                value: "-3.32",
              },
            ],
          },
          {
            name: "福田",
            date: "2021-12月",
            powerGrowth: [
              {
                name: "1、XXXXXXXX",
                value: "3.32",
              },
              {
                name: "1、XXXXXXXX",
                value: "3.32",
              },
              {
                name: "1、XXXXXXXX",
                value: "3.32",
              },
            ],
            powerReduction: [
              {
                name: "1、XXXXXXXX",
                value: "-3.32",
              },
              {
                name: "1、XXXXXXXX",
                value: "-3.32",
              },
            ],
          },
          {
            name: "宝安",
            date: "2021-12月",
            powerGrowth: [
              {
                name: "1、XXXXXXXX",
                value: "3.32",
              },
              {
                name: "1、XXXXXXXX",
                value: "3.32",
              },
              {
                name: "1、XXXXXXXX",
                value: "3.32",
              },
            ],
            powerReduction: [
              {
                name: "1、XXXXXXXX",
                value: "-3.32",
              },
              {
                name: "1、XXXXXXXX",
                value: "-3.32",
              },
            ],
          },
          {
            name: "龙岗",
            date: "2021-12月",
            powerGrowth: [
              {
                name: "1、XXXXXXXX",
                value: "3.32",
              },
              {
                name: "1、XXXXXXXX",
                value: "3.32",
              },
              {
                name: "1、XXXXXXXX",
                value: "3.32",
              },
            ],
            powerReduction: [
              {
                name: "1、XXXXXXXX",
                value: "-3.32",
              },
              {
                name: "1、XXXXXXXX",
                value: "-3.32",
              },
            ],
          },
          {
            name: "龙华",
            date: "2021-12月",
            powerGrowth: [
              {
                name: "1、XXXXXXXX",
                value: "3.32",
              },
              {
                name: "1、XXXXXXXX",
                value: "3.32",
              },
              {
                name: "1、XXXXXXXX",
                value: "3.32",
              },
            ],
            powerReduction: [
              {
                name: "1、XXXXXXXX",
                value: "-3.32",
              },
              {
                name: "1、XXXXXXXX",
                value: "-3.32",
              },
            ],
          },
          {
            name: "大鹏",
            date: "2021-12月",
            powerGrowth: [
              {
                name: "1、XXXXXXXX",
                value: "3.32",
              },
              {
                name: "1、XXXXXXXX",
                value: "3.32",
              },
              {
                name: "1、XXXXXXXX",
                value: "3.32",
              },
            ],
            powerReduction: [
              {
                name: "1、XXXXXXXX",
                value: "-3.32",
              },
              {
                name: "1、XXXXXXXX",
                value: "-3.32",
              },
            ],
          },
          {
            name: "坪山",
            date: "2021-12月",
            powerGrowth: [
              {
                name: "1、XXXXXXXX",
                value: "3.32",
              },
              {
                name: "1、XXXXXXXX",
                value: "3.32",
              },
              {
                name: "1、XXXXXXXX",
                value: "3.32",
              },
            ],
            powerReduction: [
              {
                name: "1、XXXXXXXX",
                value: "-3.32",
              },
              {
                name: "1、XXXXXXXX",
                value: "-3.32",
              },
            ],
          },
          {
            name: "深汕",
            date: "2021-12月",
            powerGrowth: [
              {
                name: "1、XXXXXXXX",
                value: "3.32",
              },
              {
                name: "1、XXXXXXXX",
                value: "3.32",
              },
              {
                name: "1、XXXXXXXX",
                value: "3.32",
              },
            ],
            powerReduction: [
              {
                name: "1、XXXXXXXX",
                value: "-3.32",
              },
              {
                name: "1、XXXXXXXX",
                value: "-3.32",
              },
            ],
          },
          {
            name: "盐田",
            date: "2021-12月",
            powerGrowth: [
              {
                name: "1、XXXXXXXX",
                value: "3.32",
              },
              {
                name: "1、XXXXXXXX",
                value: "3.32",
              },
              {
                name: "1、XXXXXXXX",
                value: "3.32",
              },
            ],
            powerReduction: [
              {
                name: "1、XXXXXXXX",
                value: "-3.32",
              },
              {
                name: "1、XXXXXXXX",
                value: "-3.32",
              },
            ],
          },
          {
            name: "光明",
            date: "2021-12月",
            powerGrowth: [
              {
                name: "1、XXXXXXXX",
                value: "3.32",
              },
              {
                name: "1、XXXXXXXX",
                value: "3.32",
              },
              {
                name: "1、XXXXXXXX",
                value: "3.32",
              },
            ],
            powerReduction: [
              {
                name: "1、XXXXXXXX",
                value: "-3.32",
              },
              {
                name: "1、XXXXXXXX",
                value: "-3.32",
              },
            ],
          },
        ],
      },
      streetData: {
        value: "nsq",
        data: [
          {
            name: "南山街道",
            date: "2021-12月",
            powerGrowth: [
              {
                name: "1、XXXXXXXX",
                value: "3.32",
              },
              {
                name: "1、XXXXXXXX",
                value: "3.32",
              },
              {
                name: "1、XXXXXXXX",
                value: "3.32",
              },
            ],
            powerReduction: [
              {
                name: "1、XXXXXXXX",
                value: "-3.32",
              },
              {
                name: "1、XXXXXXXX",
                value: "-3.32",
              },
            ],
          },
          {
            name: "南头街道",
            date: "2021-12月",
            powerGrowth: [
              {
                name: "1、XXXXXXXX",
                value: "3.32",
              },
              {
                name: "1、XXXXXXXX",
                value: "3.32",
              },
              {
                name: "1、XXXXXXXX",
                value: "3.32",
              },
            ],
            powerReduction: [
              {
                name: "1、XXXXXXXX",
                value: "-3.32",
              },
              {
                name: "1、XXXXXXXX",
                value: "-3.32",
              },
            ],
          },
          {
            name: "西丽街道",
            date: "2021-12月",
            powerGrowth: [
              {
                name: "1、XXXXXXXX",
                value: "3.32",
              },
              {
                name: "1、XXXXXXXX",
                value: "3.32",
              },
              {
                name: "1、XXXXXXXX",
                value: "3.32",
              },
            ],
            powerReduction: [
              {
                name: "1、XXXXXXXX",
                value: "-3.32",
              },
              {
                name: "1、XXXXXXXX",
                value: "-3.32",
              },
            ],
          },
          {
            name: "沙河街道",
            date: "2021-12月",
            powerGrowth: [
              {
                name: "1、XXXXXXXX",
                value: "3.32",
              },
              {
                name: "1、XXXXXXXX",
                value: "3.32",
              },
              {
                name: "1、XXXXXXXX",
                value: "3.32",
              },
            ],
            powerReduction: [
              {
                name: "1、XXXXXXXX",
                value: "-3.32",
              },
              {
                name: "1、XXXXXXXX",
                value: "-3.32",
              },
            ],
          },
          {
            name: "蛇口街道",
            date: "2021-12月",
            powerGrowth: [
              {
                name: "1、XXXXXXXX",
                value: "3.32",
              },
              {
                name: "1、XXXXXXXX",
                value: "3.32",
              },
              {
                name: "1、XXXXXXXX",
                value: "3.32",
              },
            ],
            powerReduction: [
              {
                name: "1、XXXXXXXX",
                value: "-3.32",
              },
              {
                name: "1、XXXXXXXX",
                value: "-3.32",
              },
            ],
          },
          {
            name: "招商街道",
            date: "2021-12月",
            powerGrowth: [
              {
                name: "1、XXXXXXXX",
                value: "3.32",
              },
              {
                name: "1、XXXXXXXX",
                value: "3.32",
              },
              {
                name: "1、XXXXXXXX",
                value: "3.32",
              },
            ],
            powerReduction: [
              {
                name: "1、XXXXXXXX",
                value: "-3.32",
              },
              {
                name: "1、XXXXXXXX",
                value: "-3.32",
              },
            ],
          },
          {
            name: "粤海街道",
            date: "2021-12月",
            powerGrowth: [
              {
                name: "1、XXXXXXXX",
                value: "3.32",
              },
              {
                name: "1、XXXXXXXX",
                value: "3.32",
              },
              {
                name: "1、XXXXXXXX",
                value: "3.32",
              },
            ],
            powerReduction: [
              {
                name: "1、XXXXXXXX",
                value: "-3.32",
              },
              {
                name: "1、XXXXXXXX",
                value: "-3.32",
              },
            ],
          },
          {
            name: "桃园街道",
            date: "2021-12月",
            powerGrowth: [
              {
                name: "1、XXXXXXXX",
                value: "3.32",
              },
              {
                name: "1、XXXXXXXX",
                value: "3.32",
              },
              {
                name: "1、XXXXXXXX",
                value: "3.32",
              },
            ],
            powerReduction: [
              {
                name: "1、XXXXXXXX",
                value: "-3.32",
              },
              {
                name: "1、XXXXXXXX",
                value: "-3.32",
              },
            ],
          },
        ],
      },
    };
  },
  watch: {
    code() {
      this.orgCode = this.data.areaname;
    },
  },
  mounted() {
    this.init();
  },

  methods: {
    init() {
      this.initSwiperData();
      this.queryPowerRiseBalance();
      this.queryEventByModuleAndEvent();
      this.queryGainPowereIndex();
    },
    openData() {
      this.showData = !this.showData;
    },
    initSwiperData() {
      this.swiperData = this.areaData.data;
    },
    areaSwiperData() {
      if (data.area === "area") {
        this.swiperData = this.streetData.data;
      } else {
        this.swiperData = this.areaData.data;
      }
    },
    //深圳用电增长均衡度
    queryPowerRiseBalance() {
      api
        .queryPowerRiseBalance({
          valueType: this.valueType, //2
          recordType: this.recordType, //1
          orgCode: "04", //04
          dataPeriod: this.dataPeriod, //3
          time: this.time, //2021-12
          type: 1,
        })
        .then((res) => {
          res.forEach((item) => {
            this.innerData.innercardData.sum = item.electricityEquiliDegree;
            this.innerData.contrastData.num = item.electricityEquiliDegreeTb;
            this.innerData.maxandminData.areapowermax = item.maxName;
            this.innerData.maxandminData.maxnum = item.maxelectricityAdd;
            this.innerData.maxandminData.areapowermin = item.minName;
            this.innerData.maxandminData.minnum = item.minelectricityAdd;
          });
        });
    },

    //用电增长情况分析 可靠性情况分析
    queryEventByModuleAndEvent() {
      //本年区域用电增长情况分析
      api
        .queryEventByModuleAndEvent({ moduleTag: "qyjy-qyyd-bnqyydzz-sz" })
        .then((res) => {
          this.innerSituationData.content = res[0].content;
        });
      //本年区域用电增长情况分析(区)
      api
        .queryEventByModuleAndEvent({ moduleTag: "qyjy-qyyd-bnqyydzz-sz" })
        .then((res) => {
          this.qyinnerSituationData.content = res[0].content;
        });
      //本年电力可靠性情况分析
      api
        .queryEventByModuleAndEvent({ moduleTag: "qyjy-qyyd-bndlkkx-ns" })
        .then((res) => {
          this.areaInnerSituationData.content = res[0].content;
        });
      //本年电力可靠性情况分析(区)
      api
        .queryEventByModuleAndEvent({ moduleTag: "qyjy-qyyd-bndlkkx-ns" })
        .then((res) => {
          this.qyareaInnerSituationData.content = res[0].content;
        });
    },

    //2020年深圳获得电力指数
    queryGainPowereIndex() {
      api
        .queryGainPowereIndex({
          valueType: 1,
          recordType: 1,
          dataPeriod: 1,
          time: this.time,
          type: 1,
        })
        .then((res) => {
          res.forEach((item, index) => {
            this.powercardData.innercardData.sum = item.getPowereIndex;
            this.powercardData.contrastData.num = item.getPowereIndexTb;
            this.powercardData.brandData[index].city = item.orgName;
            this.powercardData.brandData[index].num = item.getPowereIndex;
          });
        });
    },
  },
};
</script>

<style lang="less" scoped>
@import "../../style/var.less";
.outside {
  width: 97%;
  z-index: 9999;
  margin-left: 30px;
  height: 100%;
  flex-direction: column-reverse;
  &-hold {
    &-imgandline {
      &-img {
        width: 112px;
        height: 27px;
        background: url("@{imgUrl}/eleimg/openimg.png") center 5px no-repeat;
        margin: 0 auto;
        cursor: pointer;
      }
      &-line {
        display: flex;
        align-items: center;
        justify-content: space-around;
        position: relative;
        &-solid {
          width: 94%;
          height: 1px;
          background: #163962;
        }
        &-cirone {
          position: absolute;
          left: -5px;
          width: 39px;
          height: 9px;
          background: url("@{imgUrl}/eleimg/ele-leftmark.png") center center
            no-repeat;
          background-size: contain;
        }
        &-cirtwo {
          position: absolute;
          right: -5px;
          width: 39px;
          height: 9px;
          background: url("@{imgUrl}/eleimg/ele-rightmark.png") center center
            no-repeat;
          background-size: contain;
        }
        &-rectone {
          position: absolute;
          right: 0px;
          bottom: -4px;
          width: 39px;
          height: 10px;
          background: url("@{imgUrl}/eleimg/ele-bottommark.png") center center
            no-repeat;
        }
        &-recttwo {
          position: absolute;
          left: 10px;
          bottom: -4px;
          width: 39px;
          height: 10px;
          background: url("@{imgUrl}/eleimg/ele-bottommark.png") center center
            no-repeat;
        }
      }
    }

    &-assembly {
      width: 100%;
      border-left: 1px solid rgba(255, 255, 255, 0.2);
      border-right: 1px solid rgba(255, 255, 255, 0.2);
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      background: rgb(14, 29, 56);
      transition: height 0.5s;
      overflow: hidden;
      height: 290px;
      display: flex;
      flex-direction: column;
      padding: 0px 15px 0 15px;
      &-top {
        &-contentop {
          display: flex;
          justify-content: space-evenly;
          padding: 5px;
        }
      }
      &-middle {
        padding: 5px 0px 5px 0px;
      }
      &-down {
        &-assemblydown {
          display: flex;
          justify-content: space-evenly;
          padding: 5px;
        }
      }
    }
  }
}
.active {
  height: calc(100vh - 200px);
  overflow: hidden;
}
.show {
  display: none;
}
.openactive {
  background: url("@{imgUrl}/eleimg/closeimg.png") center 5px no-repeat;
}
</style>