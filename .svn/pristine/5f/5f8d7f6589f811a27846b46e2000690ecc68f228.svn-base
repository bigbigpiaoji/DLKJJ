<template>
  <div class="active">
    <div class="active-enterprises">
      <div class="active-enterprises-content">
        <div
          class="active-enterprises-content-name c-ellipsis"
          :title="data.name"
        >
          {{ data.name }}
        </div>
        <div class="active-enterprises-content-value">{{ data.value }}</div>
        <div class="active-enterprises-content-unit">{{ data.unit }}</div>
      </div>
      <div class="active-enterprises-line"></div>
      <div class="active-enterprises-tb">
        <div class="active-enterprises-tb-name">同比</div>
        <div
          class="active-enterprises-tb-img"
          :class="[data.compare >= 0 ? 'uparrow' : 'downarrow']"
        ></div>
        <div class="active-enterprises-tb-compare">
          {{ Math.abs(data.compare) }}
        </div>
        <div class="active-enterprises-tb-unit">%</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "active-enterprises",
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
<style lang="less" scoped>
@import "../../style/var.less";
.active {
  padding: 10px 10px;
  &-enterprises {
    display: flex;
    height: 30px;
    background: #12264a;
    border: 1px solid rgba(255, 255, 255, 0.1);
    justify-content: space-around;
    align-items: center;
    &-line {
      width: 1px;
      height: 21px;
      background: #ffffff;
      opacity: 0.2;
    }
    &-content {
      display: flex;
      align-items: flex-end;
      &-name {
        font-size: 12px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #cfd4e8;
      }
      &-value {
        margin: 0 5px 0 20px;
        font-size: 16px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: #01f1e0;
      }
      &-unit {
        font-size: 12px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #cfd4e8;
      }
    }
    &-tb {
      display: flex;
      font-size: 12px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #cfd4e8;
      &-name {
        min-width: 30px;
      }
      &-img {
      }
    }
  }

  .uparrow {
    background: url("@{imgUrl}/list/uparrowbig.png") no-repeat center center;
    background-size: 100% 100%;
    width: 14px;
    height: 10px;
    margin: 3px 5px 0 5px;
  }
  .downarrow {
    background: url("@{imgUrl}/list/reddownarrow.png") no-repeat center center;
    background-size: 100% 100%;
    width: 14px;
    height: 10px;
    margin: 3px 5px 0 5px;
  }
}
</style>