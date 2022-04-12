<template>
  <div class="number-count-to"
       :style="{ fontSize: fontSize + 'px' }">
    <count-to v-if="this.$attrs.endVal !== null"
              v-bind="$attrs"
              :separator="separator"
              @change="onChange">
      <span v-html="displayValue"></span>
    </count-to>
    <template v-else>
      <div class="number-count-to-item"
           style="margin-left:36px">
        <div class="center-line">-</div>
      </div>
      <div class="number-count-to-item">
        <div class="center-line">-</div>
      </div>
    </template>
    <div class="number-count-to-unit">{{ unit }}</div>
  </div>
</template>

<script>
export default {
  name: 'number-count-to',
  props: {
    // unit: {
    //   type: String,
    //   default: '元',
    // },
    separator: {
      type: String,
      required: false,
      default: ',',
    },
    fontSize: {
      type: [String, Number],
      default: 130,
    },
    transform: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      displayValue: '',
      unit: '元',
    }
  },
  methods: {
    onChange(val) {
      let number = Number(val.replace(/,/g, ''))
      if (this.transform) {
        if (number > 100000000) {
          number = (number / 100000000).toFixed(this.$attrs.decimals)
          this.unit = '亿'
        } else if (number > 10000) {
          number = (number / 10000).toFixed(this.$attrs.decimals)
          this.unit = '万'
        } else {
          number = number.toFixed(this.$attrs.decimals)
          this.unit = '元'
        }
      }
      let ret = Number(number).toLocaleString()
      this.displayValue = this.formatValue(ret)
      // this.displayValue = this.formatValue(val)
    },
    formatValue(val) {
      return val
        .split('')
        .map((item) => {
          if (isNaN(item)) {
            return `<span class="number-count-to-split">${item}</span>`
          } else {
            return `<span class="number-count-to-item">${item}</span>`
          }
        })
        .join('')
    },
  },
}
</script>

<style lang="less">
@import "../../style/var.less";
.center-line{
    position: relative;
    top: -13px;
}
.number-count-to {
  display: inline-flex;
  align-items: flex-end;
  font-weight: bold;
  color: #00f0ff;
  &-unit {
    margin-left: 4px;
    font-size: 26px;
    color: #fff;
  }
  &-item {
    display: inline-block;
    margin-right: 12px;
    background: url("@{imgUrl}/count-to/bg.png") center center no-repeat;
    background-size: 100% 100%;
    min-width: 33px;
    text-align: center;
    padding: 0px 10px;
    // padding-bottom: 10px;
  }
}
</style>