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
        value: 'holiday-gdp',
        data: [
          {
            name: '节假日经济',
            value: 'holiday-gdp',
           
          },
          {
            name: '夜经济',
            value: 'area-emphasis',
            disabled: true,
          },
          {
            name: '有序用电',
            value: 'area-industrial',
            disabled: true,
          },
          {
            name: '夜景灯光',
            value: 'area-business',
            disabled: true,
          },
          {
            name: '今日停电',
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
        "holiday-gdp": '',
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
       "holiday-gdp": '#06132A'
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