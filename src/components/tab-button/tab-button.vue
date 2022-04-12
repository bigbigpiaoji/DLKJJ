<template>
  <div class="tab-button-group">
    <div class="tab-button"
         v-for="(item,index) in data"
         :key="item.value"
         :class="[selected === item.value ? 'active' : '']"
         @click="handleClick(item,index)">
      {{item.name}}
    </div>

  </div>
</template>

<script>
export default {
  name: 'tab-button',
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    value: {
      type: String,
      default: '',
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
      this.selected = item.value
    },
  },
}
</script>

<style lang="less" scoped>
@import '../../style/var.less';

.tab-button {
  position: relative;
  padding: 4px 50px;
  text-align: center;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  color: #9fd1ff;
  margin: 0 40px;

  // transition: all 0.2s;

  // &:last-child {
  //   margin-right: 0;
  // }
  &:hover,
  &.active {
    background-color: #1a66b7;
    color: #fff;
  }
  &-group {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    min-height: 42px;
    background: url('@{imgUrl}/tab-button/bg.png') center center no-repeat;
    background-size: contain;
  }
}
</style>