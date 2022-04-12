<template>
  <header class="main-layout-header">
    <slot name="header">
      <div class="main-layout-title">{{title}}</div>
    </slot>
  </header>
</template>

<script>
export default {
  name: 'main-header',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="less" scoped>
@import '../../style/var.less';

@main-layout: main-layout;
.@{main-layout} {
  &-header {
    width: 100%;
    height: 75px;
    background: url('@{imgUrl}/header/main-bg.png') center center no-repeat;
    background-size: 100% 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &-title {
    // margin-top: -20px;
    font-size: 52px;
    // font-weight: bold;
    font-family: ysbth;
    color: #b6eafe;
    background: linear-gradient(to top, #aedeff 0%, #fff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>