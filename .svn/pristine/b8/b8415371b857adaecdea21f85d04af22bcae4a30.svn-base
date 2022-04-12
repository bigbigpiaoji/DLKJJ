<template>
  <div class="trade-chartslist">
    <div class="trade-chartslist-inner">
      <div
        class="trade-chartslist-inner-buttom"
        :class="[
          [item.state === 1 ? '' : 'invalid'],
          [selected === item.tradeChartsData.areaNameData ? 'activation' : ''],
        ]"
        v-for="item in data"
        :key="item.index"
        @click="activeList(item)"
      >
        {{ item.tradeChartsData.areaNameData }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "trade-chartslist",
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      selected: "",
      value: "莲塘",
      newData: [42, 56, 32, 15, 41, 63, 21],
    };
  },
  created() {
    
  },
  watch: {
    value: {
      immediate: true,
      handler(val) {

        this.selected = val;
      },
    },
    newData(item) {
      this.$emit("click", item);
    },
  },
  methods: {
    activeList(item) {
     
      this.value = item.tradeChartsData.areaNameData;
      if (item.state === 1) {
        this.newData = item.tradeChartsData;
        this.$emit("onclick", item);
      }
    },
  },
};
</script>
<style lang="less" scoped>
.trade-chartslist {
  padding: 20px 0px 20px 0px;
  &-inner {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    &-buttom {
      cursor: pointer;
      min-width: 54px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #132445;
      border: 2px solid #26498b;
      border-radius: 2px;
      padding: 5px;
      margin: 6px;
      color: #a7ccff;
    }
    &-buttom:hover {
      background: #0066ff;
      border: 2px solid #0066ff;
      color: #ffffff;
    }
  }
}
.activation {
  background: #0066ff;
  border: 2px solid #0066ff;
  color: #ffffff;
}
.invalid {
  border: 2px solid #26498b;
  background: #132445;
  color: #a7ccff;
  opacity: 0.3;
  cursor: not-allowed;
}
.invalid:hover {
  border: 2px solid #26498b;
  background: #132445;
  color: #a7ccff;
  opacity: 0.3;
  cursor: not-allowed;
}
</style>