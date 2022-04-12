<template>
  <base-layout class="test">
    <trade-bar-chart></trade-bar-chart>
    <!-- <div>
      <indicator-panel-balance></indicator-panel-balance>

    </div>

    <div>
      <indicator-panel-important></indicator-panel-important>
    </div>

    <div>
      <div>
        <indicator-panel-condition></indicator-panel-condition>
      </div>
    </div> -->
  </base-layout>
</template>

<script>
import tradeBarChart from '@/components/trade-bar-chart'
// import indicatorPanelBalence from "@/base/indicator-panel/indicator-panel-balance.vue";
export default {
  name: 'test',
  components: {
    tradeBarChart,
    // indicatorPanelBalence,
  },
  data() {
    return {}
  },
}
</script>

<style scoped>
.test {
  background: #333;
}
</style>