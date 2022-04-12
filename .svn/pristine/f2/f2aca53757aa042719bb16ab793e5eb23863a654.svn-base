<template>
  <div class="tab-menu-group">
    <div
      class="tab-menu l-mb-3"
      :style="getStyle"
      v-for="(item, index) in data"
      :key="item.value"
      :class="[selected === item.value ? 'active' : '']"
      @click="handleClick(item, index)"
    >
      <span>{{ item.name }}</span>
      <div class="tab-menu-icon" v-if="item.showIcon" :title="item.msg"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tab-menu",
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    value: {
      type: String,
      default: "",
    },
    padding: {
      type: String,
      default: "4px 10px",
    },
  },
  data() {
    return {
      selected: "",
      checked: true,
      tootipTipValue: "",
    };
  },
  watch: {
    value: {
      immediate: true,
      handler(val) {
        this.selected = val;
      },
    },
    selected(val) {
      this.$emit("input", val);
      this.$emit("change", val);
    },
    checked(val) {
      this.$emit("change", val);
    },
    tootipTipValue(val) {
      this.$emit("change", val);
    },
  },
  methods: {
    handleClick(item, index) {
      this.selected = item.value;
      this.$emit("selectedTab", this.selected);
      this.$emit("change", this.selected);
    },
  },
  computed: {
    getStyle() {
      return {
        padding: this.padding,
      };
    },
  },
};
</script>

<style lang="less" scoped>
@import "../../style/var.less";

.tab-menu {
  position: relative;
  padding: 4px 0px !important;
  text-align: center;
  cursor: pointer;
  font-family: "ysbth";
  font-size: 16px;
  font-weight: 400;
  color: #c7e5ff;
  border-bottom: 2px solid transparent;
  // margin: 0 4px;

  // &:last-child {
  //   margin-right: 0;
  // }
  // &:first-child {
  //   margin-left: 0;
  // }
  &:hover,
  &.active {
    // background: url('@{imgUrl}/tab-menu/bg.png') center center no-repeat;
    border-bottom: 2px solid #80c4ff;
    background-size: 100% 100%;
  }
  &-group {
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }
  &-icon {
    display: inline-block;
    width: 14px;
    height: 14px;
    background-image: url("@{imgUrl}/help/icon.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    margin-left: 4px;
    // opacity: .4;
  }
}
</style>