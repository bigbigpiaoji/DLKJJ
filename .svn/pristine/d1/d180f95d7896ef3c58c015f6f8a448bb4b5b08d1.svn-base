<template>
  <div class="local-date">
    <div class="local-date-name">{{displayNameTime}}</div>
    <div class="local-date-label">{{displayTime}}</div>

  </div>
</template>
<script>
const dayjs = require('dayjs')

export default {
  name: 'local-date',
  props: {
    format: {
      type: String,
      default: 'YYYY-MM-DD',
    },
    formatLabel: {
      type: String,
      default: 'HH:mm',
    },
  },
  data() {
    return {
      timer: null,
      displayNameTime: '',
      displayTime: '',
      date: Date.now(),
    }
  },
  computed: {},
  mounted() {
    this.init()
  },
  beforeDestroy() {
    clearInterval(this.timer)
    this.timer = null
  },
  methods: {
    init() {
      this.updateTime()
      this.timer = setInterval(this.updateTime, 1000)
    },
    updateTime() {
      this.date = dayjs(this.date).add(1, 'second')
      this.displayNameTime = dayjs(this.date).format(this.formatLabel)
      this.displayTime = dayjs(this.date).format(this.format)
    },
  },
}
</script>
<style lang="less">
  .local-date{
     color: #fff;
     white-space: nowrap;
    //  text-align: left;
     &-name{
      font-size: 18px;
      font-weight: bold;
      margin-top: 12px;
     }
     &-label{
       color: #EFF8FC;
       margin-top: 4px;
       font-size: 12px;
     }
     
  }
</style>
