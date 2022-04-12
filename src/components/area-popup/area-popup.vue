<template>
  <div class="area-popup">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "area-popup",
  data() {
    return {
      visible: true,
    };
  },
};
</script>

<style lang="less" scoped>
.area-popup {
  position: absolute;
  bottom: 40px;
  width: 100%;

}
</style>