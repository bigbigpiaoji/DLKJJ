<template>
  <header class="base-layout-header">
    <nav-button class="l-mt-30"
                name="macro">宏观基因</nav-button>
    <nav-button name="micro"
                class="l-mt-30">微观基因</nav-button>
    <nav-button class="l-mt-30"
                name="hot">热点事件</nav-button>
    <slot name="header">
      <div class="base-layout-title"
           @click="handleTitleClick">{{ title }}</div>
    </slot>
    <nav-button class="l-mt-30"
                direction="right"
                name="area">区域基因</nav-button>
    <nav-button class="l-mt-30"
                direction="right"
                name="industrial">产业基因</nav-button>
    <nav-button class="l-mt-30"
                name="time"
                direction="right">时间基因</nav-button>
    <local-date class="base-layout-date"></local-date>
  </header>
</template>

<script>
export default {
  name: 'base-header',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  methods: {
    handleTitleClick() {
      this.$router.replace({
        path: '/',
      })
    },
  },
}
</script>

<style lang="less">
@import "../../style/var.less";

@base-layout: base-layout;
.@{base-layout} {
  &-header {
    // min-width: 1366px;
    width: 100%;
    // height: 100px;
    height: 95px;
    padding: 0 120px;
    // padding-left: 120px;
    background: url("@{imgUrl}/header/bg.png") center center no-repeat;
    background-size: contain;
    // background-size: cover;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    flex-shrink: 0;
  }
  &-title {
    cursor: pointer;
    margin-top: 14px;
    align-self: flex-start;
    white-space: nowrap;
    flex: 1;
    // margin-top: -20px;
    font-size: 42px;
    // font-weight: bold;
    font-family: ysbth;
    color: #eff8fc;
    background: linear-gradient(
      0deg,
      rgba(119, 216, 255, 0.85) 0%,
      rgba(233, 248, 255, 0.85) 73.3154296875%,
      rgba(255, 255, 255, 0.85) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  &-date {
    max-width: 100px;
    position: absolute;
    right: 40px;
    top: 20px;
  }
}
</style>