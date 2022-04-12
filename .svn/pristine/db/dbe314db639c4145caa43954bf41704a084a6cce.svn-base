var elementResizeDetectorMaker = require('element-resize-detector')
// var chart = null
let handler = (chartIns) => {
  let chart = chartIns || {}
  return (element) => {
    var width = element.offsetWidth
    var height = element.offsetHeight
    console.log('Size: ' + width + 'x' + height)
    console.log('getChart', chart)
    if (chart) {
      chart.setSize(width, height, false)
      console.log('setchart')
    }
  }
}
let elementResize = (ele, vm, highchart) => {
  var erd = elementResizeDetectorMaker()
  vm.$on('hook:mounted', () => {
    vm.$nextTick(() => {
      let chart = highchart || {}
      erd.listenTo(ele, handler(chart))
    })
  })
  vm.$on('hook:beforeDestroy', () => {
    console.log('beforeDestroy')
    erd.removeListener(ele, handler())
  })
  // return {
  //   methods: {
  //     $setChart(chart) {
  //       chart = chart;
  //       console.log('chart', chart)
  //     }
  //   },
  //   mounted() {
  //     erd.listenTo(ele, handler);
  //   },
  //   beforeDestroy() {
  //     erd.removeListener(ele, handler);
  //   }
  // }
}
export default elementResize
