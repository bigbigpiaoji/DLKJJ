<template>
  <div class="statistical-strip">
    <div class="statistical-strip-content">
      <div class="statistical-strip-name">
        <div class="statistical-strip-content-title">正常运行企业数量</div>
        <div class="statistical-strip-content-value">{{ data.valueOne }}</div>
        <div class="statistical-strip-content-unit">家</div>
      </div>
      <div class="statistical-strip-content-line"></div>
      <div class="statistical-strip-name">
        <div class="statistical-strip-content-zb">占比</div>
        <div class="statistical-strip-content-proportion">
          {{ data.valueOneZb }} %
        </div>
      </div>
      <div class="statistical-strip-content-line"></div>
      <div class="statistical-strip-name">
        <div class="statistical-strip-content-tb">同比</div>
        <div
          class="statistical-strip-content-img"
          :class="[data.valueOneTb >= 0 ? 'uparrow' : 'downarrow']"
        ></div>
        <div class="statistical-strip-content-compare">
          {{ data.valueOneTb }} %
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "statistical-strip",
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
<style lang="less">
@import "../../style/var.less";
.statistical-strip {
  padding: 10px 20px;
  &-name {
    display: flex;
    align-items: flex-end;
  }
  &-content {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 508px;
    height: 30px;
    background: #12264a;
    border: 1px solid rgba(255, 255, 255, 0.1);
    font-size: 12px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #cfd4e8;

    &-value {
      font-size: 16px;
      font-family: Microsoft YaHei;
      font-weight: bold;
      color: #01f1e0;
      margin: 0 3px 0 5px;
    }
    &-line {
      width: 1px;
      height: 21px;
      background: #ffffff;
      opacity: 0.2;
    }
    &-img {
    }
  }

  .uparrow {
    background: url("@{imgUrl}/list/uparrowbig.png") no-repeat center center;
    background-size: 100% 100%;
    width: 14px;
    height: 10px;
    margin: 5px 5px 3px 5px;
  }
  .downarrow {
    background: url("@{imgUrl}/list/reddownarrow.png") no-repeat center center;
    background-size: 100% 100%;
    width: 14px;
    height: 10px;
    margin: 5px 5px 3px 5px;
  }
}
</style>