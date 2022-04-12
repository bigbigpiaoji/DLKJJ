<template>
  <div class="forecast-card"
       @click="onClick">
    <div class="forecast-card-name">年用电量增速</div>
    <input v-if="!value"
           class="forecast-card-input"
           placeholder="请输入年用电量增速"
           readonly></input>
    <div v-if="value"
         class="forecast-card-bottom">
      <div class="forecast-card-value">{{value}}</div>
      <div class="forecast-card-unit">%</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'forecast-card',
  props: {
    value: {
      type: [Number, String],
      default: 0,
    },
  },
  methods: {
    onClick() {
      this.$emit('on-click')
    },
  },
}
</script>

<style lang="less" scoped>
@import '../../style/var.less';
.forecast-card{
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-direction: column;
  min-width: 294px;
  height: 116px;
  background: url('@{imgUrl}/forecast-card/bg.png') center center no-repeat;
  background-size: 100% 100%;
  
  &-name{
    font-size: 24px;
    color: rgba(255, 255, 255);
    padding: 14px 0;
    
  }
  &-input{
    line-height: 58px;
    cursor: pointer;
    font-size: 20px;
    color: #54C9FF;
    background-color: transparent;
    border:none;
    outline: none;
    text-align: center;
    &::placeholder{
      color : #54C9FF;
    }
  }
  &-bottom{
    display: flex;
    margin-top: 8px;
  }
  &-value{
    font-size: 38px;
    color : #00F0FF;
    font-weight: bold;
  }
  &-unit{
    font-size: 24px;
    color : #00F0FF;
    margin-left: 4px;
    margin-top: 12px;
  }
}
 .dark-dialog-input .el-input__inner{
   opacity: 0.2;
 }
</style>