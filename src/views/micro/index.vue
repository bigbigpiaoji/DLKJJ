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
        value: 'micro-rule-industry',
        data: [
          {
            name: '总部企业',
            value: 'area-electricity',
            disabled: true,
          },
          {
            name: '所有制',
            value: 'area-emphasis',
            disabled: true,
          },
          {
            name: '规上工业',
            value: 'micro-rule-industry',
            disabled: false,
          },
          {
            name: '上市公司',
            value: 'area-business',
            disabled: true,
          },
          {
            name: '小微企业',
            value: 'area-office',
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
        'rule-industry': '#040916',
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