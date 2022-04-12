<template>
  <div class="v-chart">
    <v-chart
      ref="line"
      class="l-full"
      :autoresize="true"
      :option="option"
    ></v-chart>
  </div>
</template>

<script>

import isEmpty from "@/utils/isEmpty";
export default {
  name: "trade-cargocharts",
  props: {
    height: {
      type: String,
      default: "220px",
    },
    data:{
      type:Object,
      default:()=>{}
    }
  },
  data() {
    return {
      option: {},
      timer: null,
    };
  },
  created(){
    
  },
  mounted() {
    this.init();
    
  },

  methods: {
    //修改数据去月份
    init() {

      this.option = {
        tooltip: {
          axisPointer: {
            lineStyle: {
              opacity: 0,
            },
          },
          trigger: "axis",
          borderRadius: 0,
          padding: 0,
          borderColor: "#707070",
          borderWidth: 1,
          backgroundColor: "#000c28d9",
          formatter: function (params) {
            let legendColor1 = params[0].color.colorStops[0].color;
            let legendColor2 = params[0].color.colorStops[1].color;
            let legendColor3 = params[1].color.colorStops[0].color;
            let legendColor4 = params[1].color.colorStops[1].color;
            let production1 = params[0].seriesName;
            let production2 = params[1].seriesName;
            let unit1 = "千瓦时";
            let unit2 = "万吨";
            
            //单色图例
            // let lengedclass1 = `background-color:${legendColor1};`
            // 渐变色图例
            let lengedclass1 = `background:linear-gradient(to right, ${legendColor1},${legendColor2});`;
            let lengedclass2 = `background:linear-gradient(to right, ${legendColor3},${legendColor4});`;
            //折线图
            let lengedline = `charts-tooltip-inner-content-line`;
            // 柱状图
            let lengedbar = `charts-tooltip-inner-content-bar`;
            return `
            <div class='charts-tooltip'>
              <img class='charts-tooltip-img' src='${CONFIG.imgUrl}/list/zsjzs.png' />
              <div class='charts-tooltip-inner'>
              <div class='charts-tooltip-inner-heard'> ${params[0].axisValue}</div>

              <div class='charts-tooltip-inner-content'>
                <div style='${lengedclass1}' class='${lengedline}'></div>
                <div class='charts-tooltip-inner-content-name'>  ${production1}</div>
                <div class='charts-tooltip-inner-content-sum'> ${isEmpty(params[0].value)} </div>
                <div class='charts-tooltip-inner-content-unit'>${unit2}</div>
              </div>

              <div class='charts-tooltip-inner-content'>
                <div style='${lengedclass2}' class='${lengedline}'></div>
                <div class='charts-tooltip-inner-content-name'>  ${production2}</div>
                <div class='charts-tooltip-inner-content-sum'> ${isEmpty(params[1].value)} </div>
                <div class='charts-tooltip-inner-content-unit'>${unit1}</div>
              </div>
            </div>
            `;
           
          },
        },
        title: [
          {
            name: "进出口货物量",
            text: `单位：${this.data.inputOutUnit}`,
            left: -5,
            top: 15,
            textStyle: {
              width: 70,
              height: 11,
              fontSize: 10,
              fontFamily: "Microsoft YaHei",
              fontWeight: 400,
              color: "#CFD4E8",
              lineHeight: 20,
            },
          },
          {
            name: "口岸用电量",
            text: `单位：${this.data.electricityUnit}`,
            right: -5,
            top: 15,
            textStyle: {
              width: 70,
              height: 11,
              fontSize: 10,
              fontFamily: "Microsoft YaHei",
              fontWeight: 400,
              color: "#CFD4E8",
              lineHeight: 20,
            },
          },
        ],
        legend: {
          data: [
            { name: "进出口货物量", icon: "rect" },
            { name: "口岸用电量", icon: "rect" },
          ],
          lineStyle: {
            color: "inherit",
          },
          itemWidth: 12,
          itemHeight: 4,
          padding: [-21, 83, 0, 0],

          formatter(params){
              
              return `{a| ${params} }`
          },
          textStyle: {
            fontSize: 12,
            fontFamily: "Microsoft YaHei",
            fontWeight: 400,
            color: "#D3DAF2",
            lineHeight: 30,
            rich: {
              a: {
                fontSize:"12px",
                verticalAlign:'middle',
                padding:[2,0,0,0]
              },
            },
          },
          right: 30,
          itemGap: 22,
          top: 36,
        },
        grid: {
          left: -31,
          right: -10,
          bottom: "0%",
          top: "25%",
          containLabel: true,
        },
        xAxis: {
          boundaryGap: true,
          axisLabel: {
            interval:13,
            margin: 20,
            align: "left",
            formatter (params){
              return `{a|${params.slice(0,4)}}`
            },
            rich:{
              a:{
                color: "#CFD4E8",
              }
            }
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: "#CFD4E8",
            },
          },
          axisTick: {
            show: false,
          },
          type: "category",
          data: this.data.monthData
        },
        yAxis: [
          {
            name: "进出口货物量",
            nameTextStyle: {
              color: "rgba(0,0,0,0)",
            },

            type: "value",
            axisLine: {
              show: true,
              lineStyle: {
                color: "rgb(128 128 128 / 10%)",
                height: 85,
              },
            },
            axisLabel: {
              margin: 40, //y轴坐标轴数值与图表的间距
              textStyle: {
                align: "left", //y轴坐标轴数值左对齐
                color: "#CFD4E8",
              },
            },
            splitLine: {
              show: true,
              interval: 0,
              lineStyle: {
                color: "rgb(128 128 128 / 10%)",
              },
            },
          },
          {

            name: "口岸用电量",
            nameTextStyle: {
              color: "rgba(0,0,0,0)",
            },
            type: "value",
            axisLine: {
              show: true,
              lineStyle: {
                color: "rgb(128 128 128 / 10%)",
                height: 85,
              },
            },
            axisLabel: {
              show: true,
              margin: 25, //y轴坐标轴数值与图表的间距
              textStyle: {
                align: "right", //y轴坐标轴数值左对齐
                color: "#CFD4E8",
              },
            },
            splitLine: {
              show: true,
              interval: 0,
              lineStyle: {
                color: "rgb(128 128 128 / 10%)",
              },
            },
          },
        ],
        series: [
          { 
            color: "#26BFB9",
            name: "进出口货物量",
            type: "line",
            symbol: "none",

            color: {
              type: "line",
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [
                {
                  offset: 0,
                  color: "#CB98FF", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#6766FF", // 100% 处的颜色
                },
              ],
              globalCoord: false, // 缺省为 false
            },
            lineStyle: {
              color: {
                type: "line",
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(203, 152, 255, 1)", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "rgba(103, 102, 255, 1)", // 100% 处的颜色
                  },
                ],
                globalCoord: false, // 缺省为 false
              },
            },
            emphasis: {
              focus: "series",
            },
            data: this.data.inputOutputGoodsAmount,
          },
          {

            color: "#9460FF",
            name: "口岸用电量",
            type: "line",
            symbol: "none",
            yAxisIndex: 1,
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [
                {
                  offset: 0,
                  color: "#34FFBA ", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#00DEFF", // 100% 处的颜色
                },
              ],
              globalCoord: false, // 缺省为 false
            },
            lineStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  {
                    offset: 0,

                    color: "rgba(52, 255, 186, 1)", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "rgba(0, 222, 255, 1)", // 100% 处的颜色
                  },
                ],
                globalCoord: false, // 缺省为 false
              },
            },
            emphasis: {
              focus: "series",
            },
            data: this.data.electricityConsumption,
          },
        ],
      };
    },
  },
};
</script>
<style lang="less" scoped>
@import "../../style/var.less";
.v-chart {
  height: 270px;
}
</style>
