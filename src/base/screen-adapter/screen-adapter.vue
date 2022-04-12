<template>
  <div class="l-container"
       :ref="refName"
       :style="getStyle">
    <slot v-if="visible"></slot>
  </div>
</template>
<script>
export default {
  name: 'screen-adapter',
  props: {
    width: {
      type: Number,
      default: 1920,
    },
    height: {
      type: Number,
      default: 1080,
    },
    isScale: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      refName: 'l-container',
      realWidth: 0,
      realHeight: 0,
      screenWidth: 0,
      screenHeight: 0,
      visible: false,
    }
  },
  computed: {
    getStyle() {
      if (this.isScale) {
        return {
          position: 'fixed',
          top: 0,
          left: 0,
          transformOrigin: 'left top',
          overflow: 'hidden',
        }
      } else {
        return {
          overflow: 'hidden',
        }
      }
    },
  },
  mounted() {
    this.init()
    window.addEventListener('resize', this.init, false)
  },
  beforeDestroy() {
    window.addEventListener('resize', this.init, false)
  },
  methods: {
    init() {
      this.$nextTick(() => {
        this.initLayout()
        this.updateLayout()

        if (this.isScale) {
          this.updateScale()
        }
        this.visible = false
        this.$nextTick(() => {
          this.visible = true
        })
        // bus.$emit('layout-updated')
      })
    },
    // 初始化布局
    initLayout() {
      // 获取容器
      this.container = this.$refs[this.refName]
      if (!this.container) {
        return
      }
      // 设置设计稿实际尺寸
      const { width, height } = this
      if (width && height) {
        this.realWidth = width
        this.realHeight = height
      } else {
        // 没有设计稿尺寸则采用容器本身
        this.realWidth = this.container.clientWidth
        this.realHeight = this.container.clientHeight
      }
      // 设置屏幕宽高
      if (!this.screenWidth || !this.screenHeight) {
        this.screenWidth = screen.width
        this.screenHeight = screen.height
      }
    },
    // 更新布局
    updateLayout() {
      if (!this.container) {
        return
      }
      // 设置容器宽高
      if (this.realWidth && this.realHeight) {
        this.container.style.width = `${this.realWidth}px`
        this.container.style.height = `${this.realHeight}px`
      } else {
        // 没有则按照屏幕宽高计算
        this.container.style.width = `${this.screenWidth}px`
        this.container.style.height = `${this.screenHeight}px`
      }
    },
    // 更新缩放
    updateScale() {
      // 获取视口宽高
      const { clientWidth, clientHeight } = document.documentElement
      const calcWidth = this.realWidth || this.screenWidth
      const calcHeight = this.realHeight || this.screenHeight
      const widthScale = clientWidth / calcWidth
      const heightScale = clientHeight / calcHeight
      this.container.style.transform = `scale(${widthScale},${heightScale})`
    },
  },
}
</script>
<style lang="less">
.l-container {
  width: 100%;
  height: 100%;
  // position: fixed;
  // top: 0;
  // left: 0;
  // transform-origin: left top;
  // overflow: hidden;
}
</style>
