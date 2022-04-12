<template>
  <div class="white-title">
    <div class="white-title-img">
      {{ areatitle }}{{ title }}

      <el-tooltip
        popper-class="dark-tooltip"
        effect="dark"
        :content="content"
        placement="left"
      >
        <div class="white-title-img-icon" v-show="icon"></div>
      </el-tooltip>
    </div>
  </div>
</template>
<script>
export default {
  name: "white-title",
  props: {
    title: {
      type: String,
      default: "",
    },
    areatitle: {
      type: String,
      default: "",
    },
    icon: {
      type: Boolean,
      default: false,
    },
    content: {
      type: String,
      default: "- -",
    },
  },
  data() {
    return {
      visible: false,
    };
  },
};
</script>
<style lang="less">
@import "../../style/var.less";
.white-title {
  &-img {
    width: 100%;
    height: 26px;
    border-left: 5px solid #fff;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0)
    );
    display: flex;
    align-items: center;
    font-size: 20px;
    font-family: ysbth;
    padding: 3px 0 3px 8px;
    &-icon {
      width: 14px;
      height: 14px;
      background: url("@{imgUrl}/help/icon.png") center center no-repeat;
      background-size: 100% 100%;
      margin-left: 5px;
      margin-bottom: 2px;
    }
  }
}
</style>