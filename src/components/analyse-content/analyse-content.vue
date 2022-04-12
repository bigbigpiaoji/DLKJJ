<template>
  <div class="situation">
    <white-title :title="data.title" class="l-mt-6"></white-title>
    <div class="situation-content">
      <div class="situation-content-color">
        <div class="situation-content-color-word">{{ data.content }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "analyse-content",
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
  padding: 5px;
  &-content {
    margin-top: 10px;
    width: 346px;
    height: 180px;
    background: url("@{imgUrl}/eleimg/contentmax.png") center center no-repeat;
    &-color {
      margin-top: 15px;
      padding: 8px 12px 22px 12px;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        rgba(4, 29, 53, 0) 0%,
        rgba(32, 105, 156, 0.2) 50%,
        rgba(4, 29, 53, 0) 100%
      );

      &-word {
        font-size: 14px;
        color: #c0d5fe;
        line-height: 24px;
      }
    }
  }
}
</style>