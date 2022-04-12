<template>
  <div class="outside" >
    <div class="content l-mt-7 l-mb-7 l-ml-5 l-mr-5 "
         v-for="(item) in data"
         :key="item.value"
         :title="item.name">
      <div class="content-headimgstyle">
        <div class="content-highactive"></div>
      </div>

      <span class="content-title">{{item.name}}</span>

      <div class="content-num l-ml-30 content-fontsize">

        <span>{{item.sum}}</span>
        <span>%</span>
      </div>

      <div class="content-num content-fontsize">
        <span>同比</span>
        <div class="content-footimgstyle l-m-5">
          <div :class="[item.yoy >=0 ? 'content-uparrow':'content-downarrow']"></div>
        </div>

        <span>{{Math.abs(item.yoy)}}</span>
       
        <span>%</span>

      </div>
    </div>
  </div>

</template>
<script>

export default {
  name: 'base-power',
  props: {

    data: {
      type: Array,
      default: () => [],
    }
  },
  data () {
    return {

    }
  }
}
</script>
<style lang="less" scoped>
@import "../../style/var.less";

.content-t {
  font-size: 11px;
  font-family: "Microsoft YaHei";
  font-weight: bold;
  color: #c0d5fe;
}
.font-color {
  font-family: "ysbth";
  font-size: 14px;
  color: #01f1e0;
}
.content {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 20px;
  background-color: rgba(36, 182, 255, 0.05);
  cursor:default;
    &:nth-child(1) .content-headimgstyle .content-highactive {
    width: 11px;
    height: 11px;
    background-image: url("@{imgUrl}/list/rectangle.png");
  }
  &:nth-child(2) .content-headimgstyle .content-highactive {
    background-image: url("@{imgUrl}/ranking/no1.png");
  }
  &:nth-child(3) .content-headimgstyle .content-highactive {
    background-image: url("@{imgUrl}/ranking/no2.png");
  }
  &:nth-child(4) .content-headimgstyle .content-highactive {
    background-image: url("@{imgUrl}/ranking/no3.png");
  }
}


.content-title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
  font-size: 11px;
  font-family: "Microsoft YaHei";
  font-weight: bold;
  color: #c0d5fe;
}
.content-num {
  display: flex;
  flex: 1;
  color: #c0d5fe;
}
.content-fontsize {
  font-size: 0.1rem;
}
.content-uparrow {
  width: 10px;
  height: 8px;
  background-image: url("@{imgUrl}/list/uparrow.png");
  background-size: 100% 100%;
}
.content-downarrow{
    width: 9px;
  height: 7px;
  background-image: url("@{imgUrl}/list/downarrow.png");
  background-size: 100% 100%;
}
.content-highactive {
  width: 20px;
  height: 20px;

  background-repeat: no-repeat;
}

.content-headimgstyle {
  width: 25px;
  display: flex;
  justify-content: center;
}
.content-footimgstyle {
  width: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.center {
  margin: 0 auto;
}
</style>