<template>
  <div class="dark-button" @click="onClick">
    <div
      v-if="icon"
      class="dark-button-icon"
      :style="{ backgroundImage: 'url(' + getIcon + ')' }"
    ></div>

    <div class="dark-button-name">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "dark-button",
  props: {
    icon: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
  computed: {
    getIcon() {
      return `${CONFIG.imgUrl}/icon/${this.icon}.png`;
    },
  },
  methods: {
    onClick() {
      this.$emit("on-click");
    },
  },
};
</script>

<style lang="less" scoped>
@import "../../style/var.less";
.dark-button {
  display: flex;
  align-items: center;
  border: 1px solid #19426c;
  background-color: rgba(25, 66, 108, 0.5);
  padding: 0px 6px;
  height: 24px;
  line-height: 24px;
  border-radius: 2px;
  cursor: pointer;
  &-name {
    font-size: 12px;
    color: #fff;
  }
  &-icon {
    width: 14px;
    height: 14px;
    background-position: center center;
    background-repeat: no-repeat;
    margin-right: 6px;
  }
}
</style>