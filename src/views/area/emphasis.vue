<template>
  <base-container :show-aside-right="false"
                  :aside-left-width="300">
    <div slot="left">left</div>
    <div>emph</div>
  </base-container>
</template>

<script>
export default {
  props: {
    nav: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="less" scoped>

</style>