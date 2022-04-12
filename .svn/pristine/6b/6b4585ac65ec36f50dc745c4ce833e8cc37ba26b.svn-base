<template>
  <div class="subtitle">
    <div class="subtitle-title" :class="size">{{ title }}</div>
    <div v-if="showIcon" class="subtitle-icon" :title="msg"></div>
    <div class="subtitle-right">
      <div class="subtitle-more">{{ more }}</div>
      <div class="subtitle-link" @click="onLink" v-if="link">{{ link }}</div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "subtitle",
  props: {
    title: {
      type: String,
      default: "",
    },
    more: {
      type: String,
      default: "",
    },
    msg: {
      type: String,
      default: "",
    },
    showIcon: {
      type: Boolean,
      default: false,
    },
    link: {
      type: String,
      default: "",
    },
    size: {
      type: String,
      default: "small",
      validator(value){
        return ['medium','small'].includes(value)
      }
    },
  },
  methods: {
    onLink() {
      this.$emit("on-link");
    },
  },
};
</script>

<style lang="less">
@import "../../style/var.less";

.subtitle {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("@{imgUrl}/subtitle/bg.png") no-repeat center center;
  background-size: 100% 100%;
  padding: 10px 0px;
  &-icon {
    width: 14px;
    height: 14px;
    background-image: url("@{imgUrl}/help/icon.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    margin-left: 4px;
  }
  .subtitle-right {
    display: flex;
    align-items: center;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translate(0, -50%);
  }
  &-more {
    font-size: 12px;
    color: #99b3d7;
  }
  &-title {
    display: inline-block;
    font-size: 19px;
    color: rgba(255, 255, 255, 0.86);
    text-shadow: 0px 2px 27px rgba(0, 65, 87, 0.65);
    font-family: ysbth;
    // flex: 1;
    white-space: nowrap;
    &.small{
      font-size: 19px;
    }
    &.medium{
      font-size: 22px;
    }
  }
  &-link {
    margin-left: 20px;
    font-size: 12px;
    color: #54c9ff;
    cursor: pointer;
  }
}
</style>
