<template>
  <div class="analysis-progress">
    <div class="analysis-progress-content">
      <div class="analysis-progress-content-title">已完成去年总GDP：</div>
      <div class="analysis-progress-content-rate">
        <el-progress
          :text-inside="true"
          :stroke-width="16"
          :percentage="percentage"
          status="success"
        ></el-progress>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "analysis-progress",
  props: {
    percentage: {
      type: Number,
      default: 12.8,
    },
  },
};
</script>
<style lang="less">
@import "../../style/var.less";
.analysis-progress {
  &-content {
    display: flex;
    justify-content: center;
    align-items: center;
    &-title {
      font-size: 16px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(255, 255, 255, 0.8);
    }
    &-rate {
      width: 50%;
    }
  }
  .el-progress.is-success .el-progress-bar__inner {
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.4) 0%,
      rgba(0, 255, 228, 0.4) 100%
    );
  }
  .el-progress-bar__outer {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 0px;
    overflow: visible;
  }
  .el-progress-bar__innerText {
    font-size: 18px;
    font-family: Impact;
    font-weight: 400;
    color: #00ffea;
    background: url("@{imgUrl}/analysis-img/xl.png") center center no-repeat;
    position: absolute;
    padding: 2px 13px;
    height: 32px;
    right: -42px;
    top: -32px;
  }
  .el-progress-bar__inner {
    border-radius: 0px;
  }
  .el-progress--text-inside .el-progress-bar {
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: 1px;
  }
}
</style>