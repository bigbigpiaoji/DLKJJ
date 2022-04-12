<template>
  <div class="electric-inner">
    <div class="electric-inner-contrast">
      <div class="electric-inner-contrast-cont">{{ data.tb }}</div>
      <div :class="[ data.num === 0 ? 'displayn' : [data.num > 0 ? 'uparrow' : 'downarrow']]"></div>
      <div class="electric-inner-contrast-all">
        <div class="electric-inner-contrast-all-num">
          {{ data.num === 0 ? "" : data.num }}
        </div>
        <div class="electric-inner-contrast-all-unit">{{ data.unit }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "electric-card-contrast",
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {};
  },
  mounted(){

   
   
  }
};
</script>
<style lang="less" scoped>
@import "../../style/var.less";
.electric-inner {
  display: flex;
  width: 100%;
  align-items: flex-end;
  font-size: 14px;
  &-contrast {
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    &-cont {
      margin-left: 10px;
    }
    &-all {
      display: flex;
      align-items: center;
      &-num {
        margin-left: 15px;
      }
      &-unit {
        margin-left: 8px;
      }
    }
  }
}

.uparrow {
  width: 15px;
  height: 12px;
  background: url("@{imgUrl}/eleimg/uparrow.png") center center no-repeat;
  background-size: contain;
  margin-left: 10px;
}
.downarrow {
  width: 15px;
  height: 12px;
  background: url("@{imgUrl}/eleimg/downarrow.png") center center no-repeat;
  background-size: contain;
  margin-left: 10px;
}
.displayn{
  display: none;
}
</style>