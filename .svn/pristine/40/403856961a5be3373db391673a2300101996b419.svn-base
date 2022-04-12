<template>
  <div class="count-info">
    <div class="count-info-icon"
         :style="getIcon"></div>
    <div class="count-info-content">
      <div class="count-info-name">{{name}}</div>
      <div class="count-info-label">
        <span class="count-info-value">{{value}}</span>
        <span class="count-info-unit">{{unit}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'count-info',
  props: {
    name: {
      type: String,
      default: '',
    },
    unit: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: `${CONFIG.imgUrl}/count-info/icon.png`,
    },
  },
  computed: {
    getIcon() {
      return {
        backgroundImage: `url(${this.icon})`,
      }
    },
  },
}
</script>

<style lang="less" scoped>
@import '../../style/var.less';
.count-info{
  display: flex;
  align-items: center;
  width: 252px;
  height: 120px;
  background: url('@{imgUrl}/count-info/bg.png') center center no-repeat;
  background-size: 100% 100%;
  &-icon{
    margin : 26px;
    width: 70px;
    height: 70px;
    // background: url('@{imgUrl}/count-info/icon.png') center center no-repeat;
    background-size: contain;
  }
  &-content{
    flex : 1;
     padding: 20px 0px;
  }
  &-name{
    font-size: 16px;
    color: #a6c4dd;
    
    margin-bottom: 14px;
  }
  &-unit{
    font-size: 14px;
    color: rgba(255,255,255,.5);
  }
  &-value{
    font-size: 36px;
    color: #00fff7;
    font-family: Impact;
    margin-right: 4px;
  }
}
</style>