<template>
  <div class="panel"
       :style="getStyle">
    <slot></slot>

  </div>
</template>

<script>
export default {
  name: 'panel',
  props: {
    padding: {
      type: String,
      default: '12px',
    },
    margin: {
      type: String,
      default: '0px',
    },
    background: {
      type: String,
      default: 'rgba(30, 55, 81, 0.16)',
    },
  },
  computed: {
    getStyle() {
      return {
        padding: this.padding,
        margin: this.margin,
        background: this.background,
      }
    },
  },
}
</script>

<style lang="less">
.panel {
  position: relative;
  padding: 0 12px 12px 12px !important;
}
</style>