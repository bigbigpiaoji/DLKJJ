<template>
  <div
    class="modeling-line-chart-all"
    style="display: flex; flex-direction: column"
  >
    <div class="boximg-middle">
      <div class="boximg-middle-title">
        <span class="boximg-middle-title-content">模型构建</span>
      </div>
      <div class="boximg-middle-text">
        <span
          >深圳GDP受用电量与时间共同影响，现构造当年用电总量，去年用电总量，去年GDP，前年GDP为特征，运用线性回归对当年GDP进行预测。得出多元线性回归方程。
        </span>
      </div>
      <div class="boximg-middle-text">
        <span>
          y=-691.187053929112-4.20329952212177X₁+7.05608691782334X₂-0.19053034127356X₃+1.17010718676171X₄
        </span>
      </div>
      <div class="boximg-middle-text">
        <span>
          其中X₁--去年用电总量；X₂--当年用电总量；X₃--前年GDP；X₄--去年GDP。</span
        >
      </div>
      <div class="boximg-middle-message">
        <span>模型精确度达到99%</span>
      </div>
    </div>
    <div class="boximg-buttom" style="flex: 1">
      <div class="boximg-buttom-line">
        <div class="boximg-buttom-line-title">
          <span>深圳市真实GDP与预测GDP</span>
        </div>
        <div
          style="
            height: 80%; margin-top: 10px
          "
        >
          <modeling-line-chart
            :dataTrue="modelingSZ.dataTrue"
            :dataForecast="modelingSZ.dataForecast"
            :dataYear="modelingSZ.dataYear"
            :interval="modelingSZ.interval"
            :yAxisMin="modelingSZ.yAxisMin"
            :yAxisMax="modelingSZ.yAxisMax"
          ></modeling-line-chart>
        </div>
      </div>
      <div class="boximg-buttom-line boximg-buttom-position">
        <div class="boximg-buttom-line-title">
          <span>广州市真实GDP与预测GDP</span>
        </div>

        <div style="height: 80%; margin-top: 10px">
          <modeling-line-chart
            :dataTrue="modelingGZ.dataTrue"
            :dataForecast="modelingGZ.dataForecast"
            :dataYear="modelingGZ.dataYear"
            :rotate="modelingGZ.rotate"
            :yAxisMin="modelingGZ.yAxisMin"
            :yAxisMax="modelingGZ.yAxisMax"
            :paddingLeft="modelingGZ.paddingLeft"
            :gridLeft="modelingGZ.gridLeft"
          ></modeling-line-chart>
        </div>
      </div>
      <div class="boximg-buttom-line boximg-buttom-spacing">
        <div class="boximg-buttom-line-title">
          <span>北京市真实GDP与预测GDP</span>
        </div>

        <div style="height: 80%; margin-top: 10px">
          <modeling-line-chart
            :dataTrue="modelingBJ.dataTrue"
            :dataForecast="modelingBJ.dataForecast"
            :dataYear="modelingBJ.dataYear"
            :rotate="modelingBJ.rotate"
            :yAxisMin="modelingBJ.yAxisMin"
            :yAxisMax="modelingBJ.yAxisMax"
            :paddingLeft="modelingBJ.paddingLeft"
          ></modeling-line-chart>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import modelingLineChart from "@/components/modeling-line-chart";
export default {
  components: {
    modelingLineChart,
  },
  name: "modeling-line-chart-all",
  data() {
    return {
      modelingSZ: {
        dataTrue: [
          3017.24, 3640.14, 4350.29, 5035.77, 5920.66, 6925.23, 7941.43,
          8201.32, 10069.06, 11922.81, 13496.27, 15234.24, 16795.35, 18436.84,
          20685.74, 23280.27, 25266.08, 26927.09,
        ],
        dataForecast: [
          2779.791, 3548.252, 4387.856, 5171.143, 5959.761, 7235.873, 8016.342,
          8960.577, 9612.407, 11650.17, 13510.97, 14943.32, 17060.65, 18498.06,
          20259.17, 22664.24, 25362.27, 27524.96,
        ],

        paddingLeft: -80,
        interval: 1,
        dataYear: [
          "2002",
          "2003",
          "2004",
          "2005",
          "2006",
          "2007",
          "2008",
          "2009",
          "2010",
          "2011",
          "2012",
          "2013",
          "2014",
          "2015",
          "2016",
          "2017",
          "2018",
          "2019",
        ],
      },
      modelingGZ: {
        dataTrue: [
          12199.6914, 13194.687, 15050.4031, 16135.9536, 17347.3724, 18559.7316,
          19871.6679, 21002.4435, 23628.5953,
        ],
        dataForecast: [
          12759.18765, 14356.19673, 15211.79853, 17513.21416, 18293.02606,
          19759.28021, 21317.83778, 22533.20332, 23946.2952,
        ],
        paddingLeft: -30,
        dataYear: [
          "2011",
          "2012",
          "2013",
          "2014",
          "2015",
          "2016",
          "2017",
          "2018",
          "2019",
        ],
      },

      modelingBJ: {
        dataTrue: [
          17188.8, 19024.7, 21134.6, 22926.0, 24779.1, 27041.2, 29883.0,
          33106.0, 35371.3,
        ],
        dataForecast: [
          16754.04497, 19285.60136, 21062.88049, 23187.59308, 24891.6655,
          20650.27451, 26552.70196, 36735.24988, 35781.18857,
        ],
        paddingLeft: -30,
        dataYear: [
          "2011",
          "2012",
          "2013",
          "2014",
          "2015",
          "2016",
          "2017",
          "2018",
          "2019",
        ],
      },
    };
  },
};
</script>
<style lang="less" scoped>
@import "../../style/var.less";
.modeling-line-chart-all {
  width: 100%;
  height: 100%;
}
.line-block {
  display: flex;
}
.boximg {
  &-middle {
    margin-left: 29px;

    &-title {
      margin-top: 20px;
      margin-bottom: 12px;
      width: 141px;
      height: 45px;
      font-size: 22px;
      font-family: ysbth;
      font-weight: 400;
      color: #ffffff;
      text-shadow: 0px 2px 27px rgba(0, 65, 87, 0.65);
      background: url("@{imgUrl}/model-img/small-title.png") left center
        no-repeat;

      &-content {
        margin-left: 30px;
        line-height: 45px;
      }
    }
    &-text {
      height: 24px;
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #c0d5fe;
      opacity: 0.8;
    }
    &-message {
      margin-top: 10px;
      margin-bottom: 20px;
      height: 19px;
      font-size: 18px;
      font-family: Microsoft YaHei;
      font-weight: bold;
      color: #7bd5ff;
      opacity: 0.89;
    }
  }

  &-buttom {
    display: flex;
    margin-left: 29px;
    margin-bottom: 21px;
    margin-right: 20px;
    padding-right: 20px;
    // width: 1800px;
    background: rgba(37, 87, 178, 0.12);

    &-line {
      margin-left: 51px;
      margin-top: 20px;
      width: 33%;
      height: 100%;

      &-title {
        height: 15px;
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: #ffffff !important;
        opacity: 0.89;
      }
    }

    &-position {
      margin-left: 40px;
    }
    &-spacing {
      margin-left: 100px;
    }
  }
}
</style>