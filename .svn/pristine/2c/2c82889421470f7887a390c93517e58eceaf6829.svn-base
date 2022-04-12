<template>
  <base-layout :show-aside-left="false"
               :show-aside-right="false"
               :backgroundImage="backgroundImage"
               :backgroundColor="backgroundColor"
               :left="20"
               :right="20">
    <base-nav>
      <nav-tab slot="left"
               :data="menu.data"
               v-model="menu.value">
      </nav-tab>
      <button-tab slot="right"
                  :data="tab.data"
                  v-model="tab.value"
                  :auto-route="true"></button-tab>
    </base-nav>
    <router-view></router-view>
  </base-layout>
</template>

<script>
export default {
  data() {
    return {
      menu: {
        value: 'gdp',
        data: [
          {
            name: '经济电力发展指数',
            value: 'jjdlfzzs',
            disabled: true,
          },
          {
            name: 'GDP',
            value: 'gdp',
          },
          {
            name: '进出口',
            value: 'jck',
            disabled: true,
          },
        ],
      },
      tab: {
        value: 'macro-gdp-analysis',
        data: [
          {
            name: '分析',
            value: 'macro-gdp-analysis',
          },
          {
            name: '建模',
            value: 'macro-gdp-model',
          },
          {
            name: '预测',
            value: 'macro-gdp-forecast',
          },
        ],
      },
    }
  },
  computed: {
    backgroundImage() {
      let map = {
        forecast: 'bg-forecast',
        analysis: 'bg-analysis',
      }

      let result = ''
      Object.keys(map).forEach((key) => {
        if (this.$route.name.includes(key)) {
          result = map[key]
        }
      })
      return result
    },
    backgroundColor() {
      let map = {
        model: '#040916',
        // analysis: '#040916',
      }
      let result = ''
      Object.keys(map).forEach((key) => {
        if (this.$route.name.includes(key)) {
          result = map[key]
        }
      })
      return result
    },
  },
  watch: {
    $route: {
      immediate: true,
      handler(route) {
        this.tab.value = route.name
      },
    },
  },
}
</script>

<style lang="less" scoped>

</style>