<template>
  <div class="breadcrumb"
       :style="getStyle">
    <div class="breadcrumb-rect"
         v-if="showBg"></div>
    <div class="breadcrumb-item"
         v-for="(item,index) in data"
         :key="item.name"
         @click="handleClick(item,index)">
      <div class="breadcrumb-name">{{item.name}}</div>
      <div class="breadcrumb-separator">/</div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'breadcrumb',
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    showBg: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    getStyle() {
      return {
        backgroundImage: this.showBg
          ? `url('${CONFIG.imgUrl}/breadcrumb/bg.png')`
          : '',
      }
    },
  },
  methods: {
    handleClick(item, index) {
      this.$emit('update:data', this.data.slice(0, index + 1))
      this.$emit('change', item)
    },
  },
}
</script>

<style lang="less" scoped>
@import '../../style/var.less';
.breadcrumb{
  display: flex;
  align-items: center;
  padding: 15px 10px 15px 10px !important;
  background: center center no-repeat;
  background-size: 100% 100%;
  flex-wrap: wrap;
  &-item{
    display: flex;
    align-items: center;
    
    &:last-child{
      .breadcrumb-separator{
        display: none;
      }
      .breadcrumb-name{
      font-size: 20px;
      font-weight: bold;
      color: #00FFEA;
    }
    }
  }
  &-name{
    font-size: 14px;
    color: #fff;
    cursor: pointer;
  }
   &-separator{
    font-size: 14px;
    color: #fff;
    margin : 0 10px;
  }
  &-rect{
    width: 20px;
    height: 20px;
    background: url('@{imgUrl}/breadcrumb/rect.png') no-repeat center center;
    background-size: contain;
    margin-right: 10px;
  }
}
</style>