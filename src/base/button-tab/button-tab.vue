<template>
  <div class="button-tab-wrap">
    <div class="button-tab"
         v-for="(item, index) in data"
         :key="item.value"
         :class="[selected === item.value ? 'active' : '',size]"
         @click="handleClick(item, index)">
      <span>{{ item.name }}</span>

    </div>

  </div>
</template>

<script>
export default {
  name: 'button-tab',
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    size: {
      type: String,
      default: 'medium',
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
@dark-bg:rgba(0,0,0,.1);
@light-bg : rgba(255,255,255,.2);
.button-tab {
  position: relative;
  position: relative;
  padding: 6px 12px;
  text-align: center;
  cursor: pointer;
  font-size: 14px;
  color: rgba(255,255,255,.6);
  margin-right: 12px;
  
  background: rgba(255, 255, 255, 0.1);
  &.medium{
    padding: 6px 12px;
    
  }
  &.small{
    padding : 4px 7px;
  }
  &:hover,
  &.active {
    color: #00FFEA;
    font-weight: bold;
    // background:linear-gradient(-45deg, @dark-bg 0%, @dark-bg 10%, @light-bg 11%, @light-bg 20%, @dark-bg 21%, @dark-bg 30%, @light-bg 31%,@light-bg 40%, @dark-bg 41%,@dark-bg 50%, @light-bg 51%,@light-bg 60%, @dark-bg 61%,@dark-bg 70%, @light-bg 71%,@light-bg 80%, @dark-bg 81%,@dark-bg 90%, @light-bg 91%,@light-bg 100%);
    background: url('@{imgUrl}/button-tab/grid.png') repeat repeat center;
    &::after{
      content : '';
      z-index: 0;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 4px;
      height: 8px;
      background: #00FFEA;
    }
    
  }
  &-wrap{

    display: inline-flex;
    align-items: center;
    // justify-content: space-around;
  }
}
</style>