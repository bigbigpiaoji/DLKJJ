<template>
  <div class="proportion-situation">
    <div
      class="proportion-situation-inaction c-ellipsis"
      :style="'width:' + data.inactionn + '%'"
      :title="data.inactionn + '%'"
    >
      {{ data.inactionn }}%
    </div>
    <div
      class="proportion-situation-routine c-ellipsis"
      :style="'width:' + data.routine + '%'"
      :title="data.routine + '%'"
    >
      {{ data.routine }}%
    </div>
    <div
      class="proportion-situation-brisk c-ellipsis"
      :style="'width:' + data.brisk + '%'"
      :title="data.brisk + '%'"
    >
      {{ data.brisk }}%
    </div>
    <div
      class="proportion-situation-very c-ellipsis"
      :style="'width:' + data.very + '%'"
      :title="data.very + '%'"
    >
      {{ data.very }}%
    </div>
  </div>
</template>
<script>
export default {
  name: "proportion-situation",
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
<style lang="less">
.proportion-situation {
  height: 24px;
  display: flex;
  font-size: 12px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: #333333;
  align-items: center;
  line-height: 26px;
  text-align: center;
  margin-left: 28px;
  margin-right: 10px;
  padding: 32px 0px;
  &-inaction {
    background: linear-gradient(90deg, #836a3e 0%, #ffb83b 100%);
  }
  &-routine {
    background: linear-gradient(90deg, #4f88b3 0%, #78cbff 100%);
  }
  &-brisk {
    background: linear-gradient(90deg, #44b072 0%, #75fbae 100%);
  }
  &-very {
    background: linear-gradient(90deg, #0d9738 0%, #00f24a 100%);
  }
}
</style>