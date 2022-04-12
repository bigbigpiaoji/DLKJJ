<template>
  <div class="card-wrap">
    <div class="card-wrap-inner">
      <slot></slot>
    </div>
    <div class="card-wrap-top-line"></div>
  </div>
</template>

<script>
export default {
  name: "card-wrap",
};
</script>

<style lang="less" scoped>
@import "../../style/var.less";
.card-wrap {
  position: relative;

  padding: 6px;
  &-top-line {
    position: absolute;
    left: 40px;
    right: 40px;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.2);
    top: 12px;
  }
  &:after,
  &:before {
    content: "";
    position: absolute;
    background-size: contain;
    top: 5px;
    background-repeat: no-repeat;
    width: 40px;
    height: 10px;
    z-index: 10;
  }
  &:before {
    left: 4px;
    background-image: url("@{imgUrl}/card-wrap/top-left.png");
  }
  &:after {
    right: 4px;
    background-image: url("@{imgUrl}/card-wrap/top-right.png");
  }

  &-inner {
    width: 100%;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-top: none;
    background-color: rgba(14, 29, 56, 1);
    // padding-top: 4px;
    padding: 4px;
    &:after,
    &:before {
      content: "";
      position: absolute;
      background-size: contain;
      bottom: 4px;
      background-repeat: no-repeat;
      background-image: url("@{imgUrl}/card-wrap/rect.png");
      width: 9px;
      height: 9px;
    }

    &:before {
      left: 4px;
    }
    &:after {
      right: 4px;
    }
  }
}
</style>