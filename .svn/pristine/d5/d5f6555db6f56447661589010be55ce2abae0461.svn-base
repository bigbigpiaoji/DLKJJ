<template>
  <div class="power-coefficient-chart">
    <v-chart :autoresize="true" :option="option"></v-chart>
  </div>
</template>
<script>
export default {
  name: "power-coefficient-chart",
  props: {
    coefficientData: {
      type: Array,
      default: () => [],
    },
    xAxisData: {
      type: Array,
      default: () => [],
    },
    interval: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      option: {},
    };
  },
  mounted() {
    this.init();
  },
  watch: {
    coefficientData() {
      this.option.series = [{ data: this.coefficientData }];
    },
    xAxisData() {
      this.option.xAxis.data = this.xAxisData;
    },
    interval() {
      this.option.xAxis.axisLabel.interval = this.interval;
    },
  },
  methods: {
    init() {
      this.initOption();
    },
    initOption() {
      this.option = {
        grid: {
          show: true,
          borderColor: "rgb(0 0 0 / 10%)",
          top: "10%",
          left: "9%",
          right: "0%",
          bottom: "0%",
          width: 340,
          height: 80,
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            lineStyle: {
              opacity: 0,
            },
          },
          borderRadius: 0,
          padding: 0,
          borderColor: "#707070",
          borderWidth: 1,
          backgroundColor: "#000c28d9",
          formatter: function (params) {
            let value1
            let sessonUnit = "全年";
            if (params[0].axisValue.substr(5) == "01"){
              sessonUnit = "第一季度"
            }else if(params[0].axisValue.substr(5) == "04"){
              sessonUnit = "第二季度"
            }else if(params[0].axisValue.substr(5) == "07"){
              sessonUnit = "第三季度"
            }else if(params[0].axisValue.substr(5) == "10"){
              sessonUnit = "第四季度"
            }
            
            if(typeof(params[0].value)=="undefined"){
                    value1='--'
            }else{
              value1=params[0].value
            }
            return [
              "<div style='overflow:hidden;width:100%'>",
              "<img style='position:absolute;top:0';left:0 src=" +
                `${CONFIG.imgUrl}` +
                "/list/zsjzs.png />",
                "<div style='width:100%;padding:10px 0 0 10px;color:#fff'>"+params[0].axisValue.substr(0,4) + "年"+"</div>",
              "<div style='width:100%;height:100%;padding:5px 10px 10px'>",
              "<div style='display:flex;align-items:center;color:#fff'>",
              "<div style='background-color:#34FFBA"+ 
                ";width:5px;height:5px;color=#fff' class='l-mr-8'></div>",

              "<div style='margin-left:0rem'>" +
              
                "电力消费弹性系数" +
                "：</div>",
              "<div style='margin-left:0rem'>" + value1 + "</div>",
              "</div>",
              "</div>",
              "</div>",
            ].join("\n");
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: this.xAxisData,
          axisLine: {
            show: true,
            lineStyle: {
              height: 120,
              color: "#CFD4E8",
              opacity: 0.06,
            },
          },
          axisTick: { show: false },
          splitLine: {
            show: false,
          },
          axisLabel: {
            formatter:function (value, index) {
                  return value.substr(0,4) ;
              },
            interval: this.interval,
          },
        },
        yAxis: {
          type: "value",
          min: 0,
          splitLine: {
            show: true,
            lineStyle: {
              color: "#CFD4E8",
              opacity: 0.06,
            },
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#CFD4E8",
              opacity: 0.06,
            },
          },
          nameTextStyle: {
            padding: [0, 0, 0, 9],
            color: "#D3DAF2",
            opacity: 0.6,
            fontSize: 10,
            fontFamily: "Microsoft YaHei",
          },
        },
        series: [
          {
            data: this.coefficientData,
            type: "line",
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(52, 255, 186, 1)", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "rgba(0, 222, 255, 0)", // 100% 处的颜色
                  },
                ],
                globalCoord: false, // 缺省为 false
              },
            },
            smooth: true,
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
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
            symbolSize: 0,
          },
        ],
      };
    },
  },
};
</script>
<style lang="less">
.power-coefficient-chart {
  height: 130px;
  
}
</style>