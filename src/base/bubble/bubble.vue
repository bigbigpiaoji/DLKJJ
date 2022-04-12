<template>
  <div :class="['bubble',type]"
       v-html="name"
       :style="getStyle"
       @click="onClick">

  </div>
</template>

<script>
export default {
  name: 'bubble',
  props: {
    name: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'primary',
    },
    delay: {
      type: [String, Number],
      default: 0,
    },
    duration: {
      type: [String, Number],
      default: 4,
    },
  },
  computed: {
    getStyle() {
      const { duration, delay } = this
      return {
        animation: `bubble ${duration}s linear ${delay}s infinite`,
      }
    },
  },
  methods: {
    onClick() {
      this.$emit('click', this.name)
    },
  },
}
</script>

<style lang="less" scoped>
@import '../../style/var.less';

.bubble{
  // animation: bubble 2s linear infinite;
  cursor: pointer;
  font-family: ysbth;
  font-weight: normal;
  width: 144px;
  height: 138px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  // box-shadow: 0px 4px 13px 0px #10385e;
  background-position: center center;
  
  background-size: contain;
  text-align: center;
  &.primary{
    background-image: url('@{imgUrl}/bubble/bubble-primary.png');
  }
  &.success{
    background-image: url('@{imgUrl}/bubble/bubble-success.png');
  }
  &.info{
    background-image: url('@{imgUrl}/bubble/bubble-info.png');
  }
}
</style>