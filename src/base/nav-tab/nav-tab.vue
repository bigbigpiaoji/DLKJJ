<template>
  <div class="nav-tab-wrap">
    <div class="nav-tab"
         v-for="(item, index) in data"
         :key="item.value"
         :class="[
        selected === item.value ? 'active' : '',
        item.disabled ? 'disabled' : '',
      ]"
         @click="handleClick(item, index)">
      <div class="lin"></div>
      <span>{{ item.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nav-tab',
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    value: {
      type: String,
      default: '',
    },
    autoRoute: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      selected: '',
    }
  },
  watch: {
    value: {
      immediate: true,
      handler(val) {
        this.selected = val
      },
    },
    selected(val) {
      this.$emit('input', val)
      this.$emit('change', val)
    },
  },
  methods: {
    handleClick(item, index) {
      if (item.disabled) {
        return
      }
      this.selected = item.value
      if (this.autoRoute) {
        this.$router.replace({
          name: item.value,
        })
      }
    },
  },
  computed: {},
}
</script>

<style lang="less" scoped>
@import "../../style/var.less";
.lin {
  position: absolute;
  top: 43px;
  left: calc(49%);
  width: 5px;
  height: 5px;
  background: #9ad5fa;
  opacity: 0.3;
  transform: rotate(-44deg);
}

.nav-tab {
  position: relative;
  padding: 12px 34px;
  text-align: center;
  cursor: pointer;
  font-family: "ysbth";
  font-size: 18px;

  background: linear-gradient(
    0deg,
    #effbff 0%,
    #98d4fa 11.9140625%,
    #fffefe 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  &:hover,
  &.active {
    background: linear-gradient(
      0deg,
      #ffffff 0%,
      #abfcff 23.193359375%,
      #ffffff 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    &::after {
      content: "";
      z-index: -1;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: url("@{imgUrl}/nav-tab/active.png") center center no-repeat;
      background-size: 100% 100%;
    }
  }
  &.disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  &-wrap {
    display: inline-flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: 1px solid rgba(154, 213, 250, 0.26);
    padding-left: 40px;
  }
}
</style>