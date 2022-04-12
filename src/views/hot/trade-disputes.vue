<template>
  <div class="trade-disputes">
    <div class="trade-disputes-top">
      <div class="trade-disputes-top-title">{{ hotTitle }}</div>
      <div class="trade-disputes-top-content">
        {{ hotContent }}
        <div class="trade-disputes-top-content-base"></div>
      </div>
      <div class="trade-disputes-top-mask"></div>
    </div>
    <div class="trade-disputes-bottom">
      <div class="trade-disputes-bottom-inner">
        <div class="trade-disputes-bottom-inner-top"></div>
        <div class="trade-disputes-bottom-inner-bottom">
          <div class="trade-disputes-bottom-inner-bottom-left"></div>
          <div class="trade-disputes-bottom-inner-bottom-center">
            <div class="trade-disputes-bottom-inner-bottom-center-importcharts">
              <div
                class="
                  trade-disputes-bottom-inner-bottom-center-importcharts-box
                "
              >
                <white-title title="深圳市进出口统计情况"></white-title>
                <trade-bar-chart
                  @changeContent="changeContent"
                  :chartData="barChartData.source"
                ></trade-bar-chart>
                <trade-importchartscontent
                  :data="importcontent"
                ></trade-importchartscontent>
              </div>
            </div>
            <vertical-line class="l-ml-30 l-mr-30"></vertical-line>
            <div class="trade-disputes-bottom-inner-bottom-center-cargocharts">
              <div
                class="
                  trade-disputes-bottom-inner-bottom-center-cargocharts-box
                "
              >
                <white-title
                  title="深圳口岸进出口货物量与用电量情况"
                ></white-title>
                <trade-cargocharts :data="cargochartsData"></trade-cargocharts>
                <trade-chartscontent
                  :content="cargochartsContent"
                ></trade-chartscontent>
              </div>
            </div>
            <vertical-line class="l-ml-30 l-mr-30"></vertical-line>

            <div class="trade-disputes-bottom-inner-bottom-center-eleccharts">
              <div
                class="trade-disputes-bottom-inner-bottom-center-eleccharts-box"
              >
                <white-title title="深圳市各口岸用电量情况"></white-title>
                <trade-eleccharts :data="newtradeChartsData"></trade-eleccharts>
                <trade-chartslist
                  :data="tradeData"
                  @click="onChangeChartsData"
                  @onclick="onChangeOrgType"
                ></trade-chartslist>
              </div>
            </div>
          </div>
          <div class="trade-disputes-bottom-inner-bottom-right"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as api from "@/api/hot";
import whiteTitle from "../../base/white-title/white-title.vue";
import TradeBarChart from "../../components/trade-bar-chart/trade-bar-chart.vue";
export default {
  components: { whiteTitle, TradeBarChart },
  name: "trade-disputes",
  props: {
    nav: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      
      moduleTag: "rdsj-myzd-zmmyzd",
      dataPeriod: 3,
      valueType: 1,
      recordType: 1,
      orgCode: "04",
      orgType: "040221",
      importcontent: {
        content:
          "美国公布500亿美元关税清单。</br>中国国务院关税税则委员会决定对美国约500亿美元进口商品加征25%的关税",
        time: "2017年</br>1月",
      },
      importchartscontent1: {
        content:
          "麦粒尖公布500亿美元关税清单。</br>中国国务院关税税则委员会决定对美国约500亿美元进口商品加征25%的关税",
        time: "2018年</br>6月",
      },
      importchartscontent2: {
        content:
          "USA公布500亿美元关税清单。</br>中国国务院关税税则委员会决定对美国约500亿美元进口商品加征25%的关税",
        time: "2019年</br>6月",
      },
      importchartscontent3: {
        content:
          "玛丽卡公布500亿美元关税清单。</br>中国国务院关税税则委员会决定对美国约500亿美元进口商品加征25%的关税",
        time: "2020年</br>6月",
      },

      cargochartsContent:
        "根据往年数据分析，其中深圳市进出口货物量约占全部口岸55%左右。用电量与默认显示两行，文字内容超出两行后显示2.5行并出现滚动条，滚动条要框内展示并且滚动条出现在框内并且滚动条出现在框内并且滚动条出现在框内并且滚动条出现在框内并且滚动条出现在框内并且滚动条出现在框内并且滚动条出现在框内并且滚动条出现在框内并且滚动条出现在框内根据往年数据分析，其中深圳市进出口货物量约占全部口岸55%左右。用电量与默认显示两行，文字内容超出两行后显示2.5行并出现滚动条，滚动条要框内展示并且滚动条出现在框内并且滚动条出现在框内并且滚动条出现在框内并且滚动条出现在框内并且滚动条出现在框内并且滚动条出现在框内并且滚动条出现在框内并且滚动条出现在框内并且滚动条出现在框内",
      hotTitle: "中美贸易争端",
      hotContent:
        "中美贸易争端（Trade disputes between China and the United States），是中美经济关系中的重要问题。贸易争端主要发生在两个方面：一是中国比较具有优势的出口领域；二是中国没有优势的进口和技术知识领域。前者基本上是竞争性的，而后者是市场不完全起作用的，它们对两国经济福利和长期发展的影响是不同的。2019年9月11日，国务院关税税则委员会公布第一批对美加征关税商品第一次排除清单  。10月，美国商务部称将自10月31日起对中国3000亿美元加征关税清单产品启动排除程序 。12月13日，中美第一阶段经贸协议文本达成一致，美方将履行分阶段取消对华产品加征关税的相关承诺，加征关税将由升到降 。12月19日，国务院关税税则委员会公布第一批对美加征关税商品第二次排除清单  。当地时间2020年1月15日上午，中美第一阶段经贸协议签署仪式在美国白宫东厅举行。中方代表刘鹤与美国总统唐纳德·特朗普共同签署《中华人民共和国政府和美利坚合众国政府经济贸易协议》的文本并致辞。这是文字超出高度的显示效果，出现滚动条并且有底部灰色遮罩。这是文字超出高度的显示效果，出现滚动条并且有底部灰色遮罩。这是文字超出高度的显示效果，出现滚动条并且有底部灰色遮罩。这是文字超出高度的显示效果，出现滚动条并且有底部灰色遮罩。这是文字超出高度的显示效果，出现滚动条并且有底部灰色遮罩。这是文字超出高度的显示效果，出现滚动条并且有底部灰色遮罩。这是文字超出高度的显示效果，出现滚动条并且有底部灰色遮罩。这是文字超出高度的显示效果，出现滚动条并且有底部灰色遮罩。这是文字超出高度的显示效果，出现滚动条并且有底部灰色遮罩。中美贸易争端（Trade disputes between China and the United States），是中美经济关系中的重要问题。贸易争端主要发生在两个方面：一是中国比较具有优势的出口领域；二是中国没有优势的进口和技术知识领域。前者基本上是竞争性的，而后者是市场不完全起作用的，它们对两国经济福利和长期发展的影响是不同的。2019年9月11日，国务院关税税则委员会公布第一批对美加征关税商品第一次排除清单  。10月，美国商务部称将自10月31日起对中国3000亿美元加征关税清单产品启动排除程序 。12月13日，中美第一阶段经贸协议文本达成一致，美方将履行分阶段取消对华产品加征关税的相关承诺，加征关税将由升到降 。12月19日，国务院关税税则委员会公布第一批对美加征关税商品第二次排除清单  。当地时间2020年1月15日上午，中美第一阶段经贸协议签署仪式在美国白宫东厅举行。中方代表刘鹤与美国总统唐纳德·特朗普共同签署《中华人民共和国政府和美利坚合众国政府经济贸易协议》的文本并致辞。这是文字超出高度的显示效果，出现滚动条并且有底部灰色遮罩。这是文字超出高度的显示效果，出现滚动条并且有底部灰色遮罩。这是文字超出高度的显示效果，出现滚动条并且有底部灰色遮罩。这是文字超出高度的显示效果，出现滚动条并且有底部灰色遮罩。这是文字超出高度的显示效果，出现滚动条并且有底部灰色遮罩。这是文字超出高度的显示效果，出现滚动条并且有底部灰色遮罩。这是文字超出高度的显示效果，出现滚动条并且有底部灰色遮罩。这是文字超出高度的显示效果，出现滚动条并且有底部灰色遮罩。这是文字超出高度的显示效果，出现滚动条并且有底部灰色遮罩。",
      tradeData: [
        {
          areaName: "040221",
          state: true,
          tradeChartsData: {
            data: [],
            areaNameData: "莲塘",
            month: [],
          },
        },
        {
          areaName: "九龙站",
          state: false,
          tradeChartsData: {
            data: [],
            areaNameData: "九龙站",
            month: [],
          },
        },
        {
          areaName: "福田",
          state: false,

          tradeChartsData: {
            data: [],
            areaNameData: "福田",
            month: [],
          },
        },
        {
          areaName: "罗湖",
          state: false,

          tradeChartsData: {
            data: [],
            areaNameData: "罗湖",
            month: [],
          },
        },
        {
          areaName: "皇岗1",
          state: true,

          tradeChartsData: {
            data: [],
            areaNameData: "皇岗",
            month: [],
          },
        },
        {
          areaName: "文锦渡",
          state: true,

          tradeChartsData: {
            data: [],
            areaNameData: "文锦渡",
            month: [],
          },
        },
        {
          areaName: "深圳湾",
          state: true,
          tradeChartsData: {
            data: [],
            areaNameData: "深圳湾",
            month: [],
          },
        },
        {
          areaName: "沙头角",
          state: true,

          tradeChartsData: {
            data: [],
            areaNameData: "沙头角",
            month: [],
          },
        },
        {
          areaName: "盐田港",
          state: true,

          tradeChartsData: {
            data: [],
            areaNameData: "盐田港",
            month: [],
          },
        },
        {
          areaName: "大亚湾",
          state: true,

          tradeChartsData: {
            data: [],
            areaNameData: "大亚湾",
            month: [],
          },
        },
        {
          areaName: "蛇口",
          state: true,

          tradeChartsData: {
            data: [],
            areaNameData: "蛇口",
            month: [],
          },
        },
        {
          areaName: "赤湾",
          state: true,

          tradeChartsData: {
            data: [],
            areaNameData: "赤湾",
            month: [],
          },
        },
        {
          areaName: "妈湾",
          state: true,

          tradeChartsData: {
            data: [],
            areaNameData: "妈湾",
            month: [],
          },
        },
        {
          areaName: "深圳空港(机场)",

          state: true,

          tradeChartsData: {
            data: [],
            areaNameData: "深圳空港(机场)",
            month: [],
          },
        },
        {
          areaName: "大铲湾港",
          state: true,

          tradeChartsData: {
            data: [],
            areaNameData: "大铲湾港",
            month: [],
          },
        },
      ],
      cargochartsData: {
        electricityUnit: "千瓦时",
        inputOutUnit: "万吨",
        electricityConsumption: [38.99, 23.36, 42.27, 39.04, 44.78, 45.09],
        inputOutputGoodsAmount: [42, 55, 11, 45, 100, 55],
        monthData: ["2016", "2017", "2018", "2019", "2020", "2021"],
      },

      newtradeChartsData: {
        areaNameData: "",
        data: [],
        month: [],
      },

      barChartData: {
        source: [
          ["exit", "entrance", "diff", "year", "show"],
          [
            89.3,
            -90,
            9,
            "2017-01",
            true,
            "麦粒尖公布300亿美元关税清单。</br>中国国务院关税税则委员会决定对美国约500亿美元进口商品加征25%的关税",
          ],
          [57.1, -60, 5, "2017-02", false],
          [74.4, -64, 10, "2017-03", false],
          [50.1, -64, 34, "2017-04", false],
          [89.7, -64, -9, "2017-05", false],
          [68.1, -64, -6, "2017-06", false],
          [
            19.6,
            -64,
            24,
            "2017-07",
            true,
            "USA公布800亿美元关税清单。</br>中国国务院关税税则委员会决定对美国约500亿美元进口商品加征25%的关税",
          ],
          [10.6, -64, 34, "2017-08", false],
          [32.7, -64, 66, "2017-09", false],
          [32.7, -64, -90, "2017-10", false],
          [32.7, -24, -12, "2017-11", false],
          [89.7, -64, 32, "2017-12", false],
          [68.1, -64, 42, "2018-01", false],
          [28.1, -64, 32, "2018-02", false],
          [
            68.1,
            -34,
            25,
            "2018-03",
            true,
            "玛丽卡公布700亿美元关税清单。</br>中国国务院关税税则委员会决定对美国约500亿美元进口商品加征25%的关税",
          ],
          [48.1, -64, -6, "2018-04", false],
          [38.1, -64, -7, "2018-05", false],
          [68.1, -64, -8, "2018-06", false],
          [58.1, -54, -9, "2018-07", false],
          [62.1, -64, 10, "2018-08", false],
          [62.1, -64, 10, "2018-08", false],
          [62.1, -64, 10, "2018-08", false],
          [62.1, -64, 10, "2018-08", false],
          [62.1, -64, 10, "2018-08", false],
          [62.1, -64, 10, "2018-08", false],
          [62.1, -64, 10, "2018-08", false],
          [62.1, -64, 10, "2018-08", false],
          [62.1, -64, 10, "2018-08", false],
          [62.1, -64, 10, "2018-08", false],
          [62.1, -64, 10, "2018-08", false],
          [62.1, -64, 10, "2018-08", false],
          [62.1, -64, 10, "2018-08", false],
          [62.1, -64, 10, "2018-08", false],
          [62.1, -64, 10, "2018-08", false],
          [62.1, -64, 10, "2018-08", false],
          [48.1, -64, -6, "2018-04", false],
          [38.1, -64, -7, "2018-05", false],
          [68.1, -64, -8, "2018-06", false],
          [58.1, -54, -9, "2018-07", false],
          [62.1, -64, 10, "2018-08", false],
          [62.1, -64, 10, "2018-08", false],
          [62.1, -64, 10, "2018-08", false],
          [62.1, -64, 10, "2018-08", false],
          [62.1, -64, 10, "2018-08", false],
          [62.1, -64, 10, "2018-08", false],
          [62.1, -64, 10, "2018-08", false],
          [62.1, -64, 10, "2018-08", false],
          [62.1, -64, 10, "2018-08", false],
          [62.1, -64, 10, "2018-08", false],
          [62.1, -64, 10, "2018-08", false],
          [62.1, -64, 10, "2018-08", false],
          [62.1, -64, 10, "2018-08", false],
          [62.1, -64, 10, "2018-08", false],
          [62.1, -64, 10, "2018-08", false],
          [62.1, -64, 10, "2018-08", false],
          [62.1, -64, 10, "2018-08", false],
          [62.1, -64, 10, "2018-08", false],
          [62.1, -64, 10, "2018-08", false],
          [62.1, -64, 10, "2018-08", false],
        ],
      },
    };
  },
  created() {
    this.init();
  },
  mounted() {},
  watch: {
    newtradeChartsData(val) {},

  },
  methods: {
    changeContent(item, index) {
      this.queryInAndOutContent();
      let year = this.barChartData.source[index + 1][3]
        .slice(0, 5)
        .replace("-", "年</br>");
      let mounth = this.barChartData.source[index + 1][3].slice(5).replace("0", "");
      this.importcontent.content = "";
      this.importcontent.time = "";
      this.i = index + 1;
      this.importcontent.content = this.barChartData.source[index + 1][5];
      this.importcontent.time = year + mounth + "月";
      
    },
    init() {
      this.queryEventByModuleAndEvent();
      this.queryEventByModuleAndEventContent();
      this.queryGoodsAndPower();
      this.queryPowerByPort();
      this.queryPort();
      this.queryInAndOut();
      this.queryInAndOutContent();
      this.queryInAndOutContentaa()
    },

    //贸易争端内容接口
    queryEventByModuleAndEvent() {
      api
        .queryEventByModuleAndEvent({ moduleTag: this.moduleTag })
        .then((res) => {
          this.hotContent = res[0].content;
        });
    },
    //深圳口岸进出口货物量与用电量情况下方内容框
    queryEventByModuleAndEventContent() {
      api
        .queryEventByModuleAndEvent({ moduleTag: "rdsj-myzd-jckhwlyydl" })
        .then((res) => {
          this.cargochartsContent = res[0].content;
        });
    },

    //深圳口岸进出口货物量与用电量情况接口
    queryGoodsAndPower() {
      this.cargochartsData.monthData = [];
      this.cargochartsData.electricityConsumption = [];
      this.cargochartsData.inputOutputGoodsAmount = [];
      api
        .queryGoodsAndPower({
          orgCode: this.orgCode,
          recordType: this.recordType,
          valueType: this.valueType,
          dataPeriod: this.dataPeriod,
        })
        .then((res) => {
          res.forEach((item, index) => {
            this.cargochartsData.electricityUnit =
              item.electricityConsumptionUnit;
            this.cargochartsData.inputOutUnit = item.inputOutputGoodsAmountUnit;
            
            this.cargochartsData.monthData.push(item.month);//截取日期年份

            this.cargochartsData.electricityConsumption.push(
              item.electricityConsumption
            );
            this.cargochartsData.inputOutputGoodsAmount.push(
              item.inputOutputGoodsAmount
            );
          });
       
          
        });
    },

    onChangeOrgType(item) {
      this.orgType = item.areaName;
    },

    //深圳市各口岸用电量情况
    queryPort() {
      api.queryPort({ orgType: 5 }).then((res) => {
        res.forEach((item, index) => {
          this.tradeData[index].areaName = item.orgCode;
          this.tradeData[index].tradeChartsData.areaNameData = item.orgName;
          this.tradeData[index].state = item.state;
        });
      });
    },

    queryPowerByPort() {
      this.newtradeChartsData.data = [];
      this.newtradeChartsData.month = [];

      api
        .queryPowerByPort({
          orgCode: this.orgType,
          recordType: this.recordType,
          valueType: this.valueType,
          dataPeriod: this.dataPeriod,
        })
        .then((res) => {
          res.forEach((item, index) => {
            this.newtradeChartsData.data.push(item.electricityConsumption);
            this.newtradeChartsData.month.push(item.month);
          });
        });
    },

    // 动态修改深圳市各口岸用电量情况图表数据
    onChangeChartsData(item) {
      item.data = [];
      item.month = [];

      api
        .queryPowerByPort({
          orgCode: this.orgType,
          recordType: this.recordType,
          valueType: this.valueType,
          dataPeriod: this.dataPeriod,
        })
        .then((res) => {
          res.forEach((i, j) => {
            item.data.push(i.electricityConsumption);
            item.month.push(i.month);
          });
        });
      this.newtradeChartsData = item;
    },

    //深圳市进出口统计情况
    queryInAndOut() {
      this.barChartData.source = [];
      let arrayData = [["exit", "entrance", "diff", "year", "show"]];
      api
        .queryInAndOut({
          orgCode: this.orgCode,
          valueType: 1,
          dataPeriod: 3,
          recordType: 1,
          time: "2021-10-10",
        })
        .then((res) => {
          res.forEach((item, index) => {
            arrayData[index + 1] = [
              item.input,
              ~item.output,
              item.shunCha,
              item.month,
              item.flag,
            ];
          });
          this.barChartData.source = arrayData;
        });
    },
    queryInAndOutContent() {
      api
        .queryEventByModuleAndEvent({ moduleTag: "rdsj-myzd-jcktj" })
        .then((res) => {

          res.forEach((item, index) => {
            let xArray = item;
            this.barChartData.source.forEach((item, index) => {
              if (item[4] && item[3] === xArray.time) {
                item.push(xArray.content);
              }
            });
          });
        });
    },
        queryInAndOutContentaa() {
      api
        .queryEventByModuleAndEvent({ moduleTag: "rdsj-myzd-jcktj" })
        .then((res) => {

          res.forEach((item, index) => {
            this.importcontent.content = item.content;
            let year = item.time.slice(0, 5).replace("-", "年</br>");
              let mounth = item.time.slice(5).replace("0", "")
            this.importcontent.time = year + mounth +"月"

          });
        });
    },
  },
};
</script>

<style lang="less" scoped>
@import "../../style/var.less";
.trade-disputes {
  padding: 10px;
  position: relative;
  &-top {
    padding: 20px 20px 20px 45px;
    &-title {
      width: 281px;
      height: 57px;
      font-size: 40px;
      font-family: YouSheBiaoTiHei;
      font-weight: 400;
      color: #ffffff;
      text-shadow: 0px 2px 27px rgba(0, 65, 87, 0.65);
      background: url("@{imgUrl}/timegenetitle/timegene-hottitle.png") center
        center no-repeat;
      background-size: 100% 100%;
      margin: 20px 0 10px 0;
      padding-left: 7px;
    }
    &-content {
      padding: 15px 15px 15px 0;
      font-size: 16px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #ffffff;
      line-height: 28px;
      overflow: auto;
      height: 256px;
      &-base {
        width: 100%;
        height: 30px;
      }
    }
    &-mask {
      pointer-events: none;
      position: absolute;
      top: 252px;
      width: 95%;
      height: 150px;
      background: linear-gradient(
        rgba(0, 0, 0, 0),
        rgba(5, 11, 24, 0.6) 55px,
        rgba(5, 11, 24, 1) 120px
      );
    }
  }
  &-bottom {
    width: 100%;
    padding: 10px;
    &-inner {
      height: 480px;
      background: linear-gradient(0deg, #0e1a30, #1b2b48);
      &-top {
        width: 100%;
        height: 8px;
        background: url("@{imgUrl}/timegenetitle/timegene-boxtopimg.png") center
          center no-repeat;
      }
      &-bottom {
        display: flex;
        justify-content: space-between;
        &-left {
          width: 40px;
          height: 472px;
          background: url("@{imgUrl}/timegenetitle/timegene-boxleftimg.png")
            center center no-repeat;
          background-size: 100% 100%;
        }
        &-center {
          padding: 30px 0px 30px 0px;
          display: flex;

          flex: 1;
          justify-content: space-around;
          align-items: center;
          &-importcharts,
          &-cargocharts,
          &-eleccharts {
            width: 560px;
            height: 400px;
          }
        }
        &-right {
          width: 40px;
          height: 472px;
          background: url("@{imgUrl}/timegenetitle/timegene-boxrightimg.png")
            center center no-repeat;
          background-size: 100% 100%;
        }
      }
    }
  }
}
</style>