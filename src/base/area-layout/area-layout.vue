<template>
  <div class="area-layout">
    <div
      class="area-layout-item"
      v-for="item in leftData.data"
      :key="item.index"
      @click="onArea(item)"
      :class="[leftData.disabled ? 'active' : 'disabled']"
    >
      <div class="area-layout-content">
        <div class="area-layout-content-rank">{{ item.sort }}</div>
        <div class="area-layout-content-name">{{ item.name }}</div>
        <div class="area-layout-content-value">{{ item.value }}</div>
        <div class="area-layout-content-unit">{{ item.unit }}</div>
      </div>
      <div class="area-layout-progress">
        <el-progress
          :text-inside="true"
          :stroke-width="6"
          :percentage="item.percentage"
          :show-text="false"
          status="success"
        ></el-progress>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "area-layout",
  props: {
    leftData: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    onArea(item) {
      this.$emit("change", item);
    },
  },
};
</script>
<style lang="less">
.area-layout {
  flex: 1;
  align-content: center;
  overflow: auto;
  &-item {
    padding: 19px 0;
    cursor: pointer;
  }
  &-content {
    display: flex;
    justify-content: space-evenly;
    &-rank {
      font-size: 14px;
      font-family: ysbth;
      font-weight: 400;
      color: rgba(66, 102, 122, 0.5);
      width: 40px;
      margin-left: 20px;
    }
    &-name {
      font-size: 16px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(255, 255, 255);
      flex: 1;
      margin-left: 5px;
    }
    &-value {
      font-size: 16px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(255, 255, 255);
      margin-right: 2px;
    }
    &-unit {
      font-size: 16px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(255, 255, 255);
      margin-right: 20px;
    }
  }
  &-progress {
    margin-top: 10px;
    width: 251px;
    margin-left: 20px;
    .el-progress.is-success .el-progress-bar__inner {
      background: linear-gradient(
        90deg,
        rgba(47, 102, 138, 0.5),
        rgba(31, 252, 255, 0.8)
      );
    }
    .el-progress-bar__outer {
      background-color: rgba(28, 46, 78, 0.7);
      border-radius: 0px;
      overflow: visible;
    }
    // .el-progress-bar__innerText {
    //   font-size: 18px;
    //   font-family: Impact;
    //   font-weight: 400;
    //   color: #00ffea;
    //   position: absolute;
    //   padding: 2px 13px;
    // }
    .el-progress-bar__inner {
      border-radius: 0px;
    }
    // .el-progress--text-inside .el-progress-bar {
    //   border: 1px solid rgba(255, 255, 255, 0.2);
    //   padding: 1px;
    // }
  }
  //   .disabled {
  //     opacity: 0.2;
  //     cursor: not-allowed;
  //   }
  .active {
  }
}
</style>