<template>
  <base-layout :show-aside-left="false"
               :show-aside-right="false"
               :backgroundImage="backgroundImage"
               :backgroundColor="backgroundColor"
               :left="20"
               :right="20"
               class="l-full">
    <base-nav v-if="$route.name !== 'industrial-secondary-detail'">
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
        value: 'industrial-secondary',
        data: [
          {
            name: '第二产业',
            value: 'industrial-secondary',
          },
          {
            name: '第三产业',
            value: 'service-sector',
            disabled: true,
          },
          {
            name: '居民',
            value: 'resident',
            disabled: true,
          },
          {
            name: '高质量',
            value: 'high-quality',
            disabled: true,
          },
          {
            name: '绿色',
            value: 'green',
            disabled: true,
          },
          {
            name: '民生',
            value: 'people-livelihood',
            disabled: true,
          },
          {
            name: '双循环',
            value: 'double-circulation',
            disabled: true,
          },
        ],
      },
    }
  },
  computed: {
    backgroundImage() {
      let map = {
        // electricity: "bg-electricity",
        // analysis: 'bg-analysis',
        model: '#040916',
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
        // electricity: '#040916',
        secondary: '#040916',
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