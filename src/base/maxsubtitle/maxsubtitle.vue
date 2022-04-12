<template>
  <div>
    <div class="maxsubtitle">
      <div class="maxsubtitle-title">{{ title }}</div>
      <div v-if="showIcon" class="maxsubtitle-icon" :title="msg"></div>
      <div class="maxsubtitle-more">{{ more }}</div>
      <slot> </slot>
    </div>
    <div class="maxsubtitle-line"></div>
  </div>
</template>

<script>
export default {
  name: "maxsubtitle",
  props: {
    title: {
      type: String,
      default: "",
    },
    more: {
      type: String,
      default: "截止2021-12",
    },
    msg: {
      type: String,
      default: "",
    },
    showIcon: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="less">
@import "../../style/var.less";

.maxsubtitle {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("@{imgUrl}/eleimg/maxsubtitle.png") no-repeat center center;
  background-size: contain;
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
  &-more {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(0, -50%);
    font-size: 12px;
    color: #99b3d7;
  }
  &-title {
    display: inline-block;
    font-size: 18px;
    color: rgba(255, 255, 255, 0.86);
    text-shadow: 0px 2px 27px rgba(0, 65, 87, 0.65);
    font-family: ysbth;
    // flex: 1;
    white-space: nowrap;
  }
}
.maxsubtitle-line {
  height: 1px;
  background: url("@{imgUrl}/eleimg/maxsubtitle-line.png") center center
    no-repeat;
}
</style>
