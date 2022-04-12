<template>
  <div class="statistics-gdp">
    <div class="statistics-gdp-content">
      <div class="statistics-gdp-content-year">{{ data.year }}</div>
      <div class="statistics-gdp-content-line"></div>
      <div class="statistics-gdp-content-title">{{ data.name }}</div>
      <div class="statistics-gdp-content-scale">
        <span class="statistics-gdp-content-scale-value">{{ data.value }}</span
        >{{ data.unit }}
      </div>
      <div class="statistics-gdp-content-tb">
        同比
        <div
          class="statistics-gdp-content-tb-img"
          :class="[data.name === '单位GDP电耗' ? 'downarrow' : '']"
        ></div>
        {{ Math.abs(data.tb) }}%
      </div>
      <div
        class="statistics-gdp-content-change"
        @click="onChange(data.name)"
      ></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "statistics-gdp",
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      qwe: true,
    };
  },
  methods: {
    onChange(val) {
      this.$emit("onChangeData", val);
    },
  },
};
</script>
<style lang="less">
@import "../../style/var.less";
.statistics-gdp {
  background: rgba(37, 181, 255, 0.1);
  &-content {
    display: flex;
    justify-content: space-around;
    padding-top: 3px;
    font-size: 12px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #ffffff;
    line-height: 24px;
    opacity: 0.8;
    &-year {
    }
    &-line {
      width: 1px;
      height: 28px;
      background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.2) 49%,
        rgba(255, 255, 255, 0) 100%
      );
      margin-left: 1px;
    }
    &-title {
    }
    &-scale {
      &-value {
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: #01f1e0;
      }
    }
    &-tb {
      display: flex;
      &-img {
        width: 9px;
        height: 7px;
        background: url("@{imgUrl}/list/uparrow.png") center center no-repeat;
        padding: 27px 12px 0 4px;
      }
    }
    &-change {
      background: url("@{imgUrl}/analysis-img/qh.png") center center no-repeat;
      width: 14px;
      height: 14px;
      margin-top: 5px;
      cursor: pointer;
    }
  }
  .downarrow {
    width: 9px;
    height: 7px;
    background: url("@{imgUrl}/list/greendownarrow.png") center center no-repeat;
    padding: 27px 12px 0 4px;
  }
}
</style>