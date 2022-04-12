<template>
  <div :class="['nav-button',isActive ? 'active' : '',direction]"
       :style="{backgroundImage:'url('+getIcon+')'}"
       @click="onClick">
    <div class="nav-button-text">

      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nav-button',
  props: {
    direction: {
      type: String,
      default: 'left',
    },
    name: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    getIcon() {
      let activeBg = this.isActive ? '-active' : ''
      return `${CONFIG.imgUrl}/nav-button/${this.direction}${activeBg}.png`
    },
    isActive() {
      return this.$route.matched.some((item) => item.name === this.name)
    },
  },
  methods: {
    onClick() {
      if (this.disabled) {
        return
      }
      this.$emit('on-click')
      if (this.name) {
        this.$router.replace({
          name: this.name,
        })
      }
    },
  },
}
</script>

<style lang="less" scoped>
@import '../../style/var.less';
.nav-button{
  // min-width: 160px;
  min-width: 162px;
  // height: 32px;
  // padding : 4px 0;
  padding-bottom: 8px;

  color: #fff;
  font-size: 22px;
  font-family: ysbth;
  cursor: pointer;
  
  background-repeat: no-repeat;
  // background: url('@{imgUrl}/nav-button/left.png') no-repeat center center;
  text-align: center;
  // opacity: .8;
  &:hover,&.active{
    // opacity: 1;
      .nav-button-text{
      background: linear-gradient(0deg, #00FFEA 0%, #FFFFFF 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    &.left{
      background-size: cover;
      background-image: url('@{imgUrl}/nav-button/left-active.png') !important;
    }
    &.right{
      background-image: url('@{imgUrl}/nav-button/right-active.png') !important;
    }
    
  }
  &.left{
    background-position: -4px center;
    background-size: cover;
  }
  &.right{
    background-position: 4px center;
    background-size: cover;
  }
  &-text{
    background: linear-gradient(0deg, #619BD6 1.3671875%, #FFFFFF 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
  }
}
</style>