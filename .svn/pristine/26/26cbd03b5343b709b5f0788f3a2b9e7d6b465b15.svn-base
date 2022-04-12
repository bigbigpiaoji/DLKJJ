<template>
  <div class="out l-mt-10">
    <div
      class="table l-mt-13"
      v-for="item in data"
      :key="item.value"
      @click="handclick(item)"
    >
      <div
        class="table-img"
        :class="[selected === item.value ? 'changeImg' : '']"
      ></div>
      <div
        class="table-word"
        :class="[selected === item.value && !showCity ? 'changeWord' : '']"
      >
        {{ item.city }}
      </div>
      <div
        class="table-sum"
        :class="[selected === item.value && !showCity ? 'changeSum' : '']"
      >
        {{ item.sum }}
      </div>
      <div class="arrow " v-if="selected === item.value"></div>
      <div class="arrowshow " v-else></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "radar-table",
  props: {
    value: {
      type: String,
      default: "",
    },
    data: {
      type: Array,
      default: () => [],
    },
    arrow: {
      type: String,
      default: "",
    },
    showCity: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      selected: "",
      top: -127,
      show: "",
      val: "",
    };
  },
  watch: {
    value: {
      immediate: true,
      handler(val) {
        this.selected = val;
      },
    },
    showCity: {
      handler(val) {
        this.val = val;
      },
    },
    selected(val) {
      this.$emit("input", val);
      this.$emit("change", val);
    },
  },

  methods: {
    handclick(item) {
      this.selected = item.value;
    },

   
  },
};
</script>
<style lang="less" scoped>
@import "../../style/var.less";
.out {
  border-right: 1px solid rgba(37, 181, 255, 0.3);
}
.arrow {
  margin-top: 7px;
  margin-left: 18px;
  width: 6px;
  height: 10px;
  position: relative;
  left: 1px;
  background-image: url("@{imgUrl}/list/arrow.png");
}

.arrowshow {
  margin-top: 7px;
  margin-left: 18px;
  width: 6px;
  height: 10px;

}
.table {
  width: 140px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  &-img {
    width: 10px;
    height: 10px;
    background: linear-gradient(0deg, #5c5f62, #858585);
    opacity: 0.6;
    margin: 11px 15px 0 20px;
  }
  &-word {
    width: 34px;
    height: 12px;
    font-size: 12px;
    font-family: "Microsoft YaHei";
    font-weight: 400;
    color: #ffffff;
    line-height: 30px;
  }
  &-sum {
    width: 15px;
    font-size: 16px;
    font-family: Impact;
    color: #ffffff;
    margin: 6px 0 0 10px;
    letter-spacing: 1px;
  }
  &:hover &-sum,
  .changeSum {
    color: #00ffea;
  }
  &:hover &-img,
  .changeImg {
    background: linear-gradient(0deg, #2c7f9b, #63c9eb);
    opacity: 0.6;
  }

  &:hover &-word,
  .changeWord {
    color: #00ffea;
  }
}
</style>