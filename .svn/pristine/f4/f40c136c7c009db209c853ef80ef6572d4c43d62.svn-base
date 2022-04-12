<template>
  <div class="ele-outside">
    <div class="brand" v-for="item in data" :key="item.index">
      <div class="brand-city">{{ item.city }}</div>
      <div class="brand-num">
        {{ item.num === 0 ? "- -" : item.num }}
        <div class="brand-num-unit">
          {{ item.unit }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "electric-card-brand",
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
@import "../../style/var.less";
.ele-outside {
  display: flex;
  .brand {
    width: 86px;
    height: 64px;
    background: url("@{imgUrl}/eleimg/citybg.png");
    background-size: 100% 100%;
    margin: 12px 5px 5px ;
    padding: 5px;
    &-city {
      font-size: 14px;
      display: flex;
      justify-content: center;
    }
    &-num {
      margin-top: 10px;
      font-size: 20px;
      display: flex;
      font-family: impact;
      justify-content: center;
      background: linear-gradient(0deg, #7fbaf4 0%, #ffffff 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      &-unit{
        font-size: 14px;
        color: #ffffff;
        display: flex;
        align-items: flex-end;
      }
    }
  }
}
</style>