<template>
  <div :style="{height: height}"
       class="v-chart">
    <v-chart ref="line"
             class="l-full"
             :autoresize="true"
             :option="option"></v-chart>
  </div>
</template>

<script>
export default {
  name: 'line-chart',
  props: {
    height: {
      type: String,
      default: '150px',
    },
  },
  data() {
    return {
      option: {},
      timer: null,
    }
  },
  mounted() {
    this.init()
  },
  beforeDestroy() {
    clearInterval(this.timer)
  },
  methods: {
    init() {
      this.initOption()
    },
    initOption() {
      this.option = {

        grid: {
          show: true,
          top: '15%',
          left: '0%',
          right: '0%',
          bottom: '10%',
          containLabel: true,
        },
        xAxis: {
          type: 'category',
          data: ['1', '2', '3', '4', '5', '6', '7','8','9','10','11','12'],
        },
        yAxis: {
          type: 'value',
          splitLine:{
            show:true,
            lineStyle:{
              
            }
          }
        },
        series: [
          {
            label: { //柱体上显示数值
                    show: true,//开启显示
                    position: 'top',//在上方显示
                    textStyle: {//数值样式
                        fontSize: '10px',
                        color: '#666',
                        opacity:0.7
                    },
            },

            data: [0.18, 0.22, 0.21, 0.59, 0.38, 0.20, 0.28,0.37,0.20,0.84,0.22,0.33],
            type: 'bar',
            barWidth:'20%',
            color:'#4FB0D0',
            itemStyle:{             
              normal: {
                     //柱形图圆角，初始化效果
                  barBorderRadius:[20,20, 0, 0]
                      }
            }
          },
        ],
      }
    },
  },
}
</script>

<style lang="less" scoped>
</style>