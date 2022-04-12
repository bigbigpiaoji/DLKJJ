<template>
  <div class="situation">
    <white-title :title="data.title"></white-title>
    <div class="situation-content">
      <div class="situation-content-color">
        <div class="situation-content-color-word">{{ data.content }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "situation",
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {};
  },
  mounted() {},
};
</script>
<style lang="less" scoped>
@import "../../style/var.less";
.situation {
  padding: 5px 10px 5px 10px;

  &-content {
    margin-top: 10px;

    height: 185px;
    background: url("@{imgUrl}/eleimg/contentmax.png") center center no-repeat;
    background-size: 100% 100%;
    &-color {
      margin-top: 15px;
      padding: 8px 12px 8px 12px;
      max-width: 440px;
      height: 100%;
      background: linear-gradient(
        90deg,
        rgba(4, 29, 53, 0) 0%,
        rgba(32, 105, 156, 0.2) 50%,
        rgba(4, 29, 53, 0) 100%
      );
      overflow: auto;
      &-word {
        font-size: 14px;
        color: #c0d5fe;
        line-height: 24px;
      }
    }
  }
}
</style>