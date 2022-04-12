<template>
  <base-layout :show-aside-left="false"
               :show-aside-right="false"
               :backgroundImage="backgroundImage"
               :backgroundColor="backgroundColor"
               :left="20"
               :right="20"
               class="l-full">
    <base-nav>
      <nav-tab slot="left"
               :data="menu.data"
               v-model="menu.value"
               :auto-route="true">
      </nav-tab>

    </base-nav>
    <router-view></router-view>
  </base-layout>
</template>

<script>
export default {
  data() {
    return {
      menu: {
        value: 'hot-trade-disputes',
        data: [
          {
            name: '贸易争端',
            value: 'hot-trade-disputes',
            disabled: false,
          },
          {
            name: '工商业电价改革',
            value: 'hot-electricity-reform',
            disabled: true,
          },
          {
            name: '房地产调控',
            value: 'hot-estate-control',
            disabled: true,
          },
        ],
      },
    }
  },
  computed: {
    backgroundImage() {
      let map = {
        // electricity: 'bg-electricity',
        // analysis: 'bg-analysis',
        'hot-trade-disputes': 'hot-bg',
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
        'hot-trade-disputes': '#040916',
        // emphasis: '#040916',
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
      handler(route) {},
    },
  },
}
</script>

<style lang="less" scoped>

</style>