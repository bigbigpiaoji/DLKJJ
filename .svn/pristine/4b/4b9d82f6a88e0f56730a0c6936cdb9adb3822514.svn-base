<template>
  <div class="trend" :style="getStyle">
    <div class="trend-label">同比</div>
    <div class="trend-icon" :class="value >= 0 ? 'red-up' : 'green-down'"></div>
    <div class="trend-value">{{ Math.abs(value) }}{{ unit }}</div>
  </div>
</template>

<script>
export default {
  name: "trend",
  props: {
    size: {
      type: [Number, String],
      default: 12,
    },
    value: {
      type: [Number, String],
      default: 0.12,
    },
    unit: {
      type: String,
      default: "%",
    },
    icon: {
      type: String,
      default: "green-up",
    },
  },
  computed: {
    getStyle() {
      return {
        fontSize: this.size + "px",
      };
    },
  },
};
</script>

<style lang="less" scoped>
@import "../../style/var.less";
.trend {
  color: #fff;
  display: flex;
  align-self: flex-end;
  align-items: center;
  white-space: nowrap;
  &-label {
  }
  &-icon {
    margin: 0 4px;
    width: 10px;
    height: 6px;
    &.green-down {
      background: url("@{imgUrl}/trend/green-down.png") no-repeat center center;
    }
    &.green-up {
      background: url("@{imgUrl}/trend/green-up.png") no-repeat center center;
    }
    &.red-down {
      background: url("@{imgUrl}/trend/red-down.png") no-repeat center center;
    }
    &.red-up {
      background: url("@{imgUrl}/trend/red-up.png") no-repeat center center;
    }
  }
  &-value {
  }
}
</style>