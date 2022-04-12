<template>
  <div>
    <div class="hotevent l-mt-15 l-ml-10 l-mr-10 l-mb-10 l-box" v-for="item in data" :key="item.value">
      <div class="hotevent-title l-box">
        <div class="hotevent-blueborder"></div>
        <div>{{ item.title }}</div>
      </div>

      <div class="hotevent-speed l-box">
        <div class="l-mr-5">{{item.title2}}</div>
        <div class="hotevent-speed-num l-mr-5">{{item.num}}</div>
        <div>%</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "hot-event",
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
.hotevent {

  color: #fff;
  font-family: "MicrosoftYaHei";
  font-size: 14px;
  align-items: center;
  background: rgba(30, 55, 82, 0.26);
  &:nth-child(2n){
      background:unset;
  }
  padding: 7px;
  &-title{
      flex: 0.7;
      align-items: center
  }
  &-speed{
      flex: 1;
  }
  
  &-blueborder {
    margin: 0 6px 0 20px;
    width: 2px;
    height: 13px;
    background: #69daff;
  }
  &-speed-num {
    font-family: "Impact";
  }
}
</style>