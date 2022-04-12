<template>
  <div class="rank-head">

    <div class="rank-head-icon"></div>
    <div class="rank-head-name">{{name}}</div>
    <div class="rank-head-label">{{label}}</div>
  </div>
</template>

<script>
export default {
  name: 'rank-head',
  props: {
    name: {
      type: String,
      default: 'xx',
    },
    label: {
      type: String,
      default: 'xx',
    },
  },
}
</script>

<style lang="less" scoped>
@import '../../style/var.less';
.rank-head{
  display: flex;
  align-items: center;
  padding: 12px 12px 0 12px;
  background: url('@{imgUrl}/rank-head/bg.png') no-repeat center center;
  background-size: 100% 100%;
  &-icon{
    width: 20px;
    height: 20px;
    background: url('@{imgUrl}/rank-head/rect.png') no-repeat center center;
    background-size: contain;
  }
  &-name{
    flex : 1;
    font-size: 22px;
    font-family: ysbth;
    color: rgba(255,255,255,0.8);

  }
  &-label{
    font-size: 12px;
    color : rgba(153, 179, 215, 0.86);
    text-shadow: 0px 2px 27px rgba(0, 65, 87, 0.65);
  }
}
</style>