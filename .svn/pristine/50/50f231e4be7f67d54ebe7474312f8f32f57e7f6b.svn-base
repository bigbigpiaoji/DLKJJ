<template>
  <div class="equ">
    <div class="equ-list1 l-mt-12 l-mb-12">
      <div
        id="title"
        :class="[showCity === true && tooltipType === 'szqshfsydjhd' ? 'changeColorTrue' : 'changeColorFalse']"
        class="equ-list1-title"
        @click="onChange"
      >
        {{ title }}
      </div>

      <div class="equ-list1-degree">{{ degree }}</div>

      <div class="equ-list1-layout">
        <div class="equ-list1-font">同比</div>
        <div class=" l-m-5" :class="[percentage >=0 ? 'content-uparrow':'content-downarrow']"></div>
        <div class="equ-list1-percentage">{{ Math.abs(percentage) }}</div>
        <div class="equ-list1-font">%</div>
      </div>
    </div>

    <div class="equ-list2">
      <div>均衡度排名前三区 :</div>
      <div class="equ-list2-num loadimg" v-for="item in data" :key="item.value">
        <div class="equ-list2-loadimg">
          <div class="equ-list2-img l-mt-3"></div>
        </div>

        <div>{{ item.area }}</div>
        <div class="equ-list2-layout">
          <div>{{ item.areadegree.toFixed(1) }}</div>
          <div class="equ-list1-font"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "equilibrium",
  props: {
    degree: {
      type: Number,
      default: 0,
    },
    percentage: {
      type: Number,
      default: 0,
    },
    data: {
      type: Array,
      default: () => [],
    },
    title: {
      type: String,
      default: "",
    },
    showCity: {
      type: Boolean,
      default: true,
    },
    tooltipType: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      val: true,
      TipType: "",
    };
  },
  watch: {},
  methods: {
    onChange() {
      this.$emit("onclick", this.showCity);
    },
  },
};
</script>
<style lang="less" scoped>
@import "../../style/var.less";
.content-uparrow {
  width: 10px;
  height: 8px;
  background-image: url("@{imgUrl}/list/uparrow.png");
  background-size: 100% 100%;
}
.content-downarrow{
    width: 10px;
  height: 8px;
  background-image: url("@{imgUrl}/trend/green-down.png");
  background-size: 100% 100%;
}
.changeColorTrue{
color: rgb(1, 241, 224);
}
.changeColorFalse{
color:rgb(199, 229, 255) ;
}
.equ-list1 {
  color: #fff;
  display: flex;
  align-items: center;
  &-title {
    font-size: 16px;
    font-family: "ysbth";
    flex: 0.7;
    cursor: pointer;
  }
  &-degree {
    font-size: 11px;
    flex: 0.3;
    font-weight: bold;
  }
  &-img {
    width: 9px;
    height: 7px;
    background: url("@{imgUrl}/list/downarrow.png");
    background-size: 100% 100%;
  }
  &-percentage,
  &-font {
    font-size: 11px;
  }
  &-layout {
    display: flex;
    flex: 0.3;
    align-items: center;
  }
}
.equ-list2 {
  display: flex;
  font-size:11px;
  font-weight: bold;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.1);
  line-height: 25px;
  justify-content:space-around;
  align-items: center;
  &-num {
    font-weight: normal;
    display: flex;
  }

  &-layout {
    display: flex;
    font-size: 11px;
  }
  .loadimg {
    &:nth-child(2) .equ-list2-loadimg .equ-list2-img {
      width: 17px;
      height: 17px;
      background-image: url("@{imgUrl}/ranking/no1.png");
      background-size: 110%;
      background-repeat: no-repeat;
    }
    &:nth-child(3) .equ-list2-loadimg .equ-list2-img {
      width: 17px;
      height: 17px;
      background-image: url("@{imgUrl}/ranking/no2.png");
      background-size: 110%;
      background-repeat: no-repeat;
    }
    &:nth-child(4) .equ-list2-loadimg .equ-list2-img {
      width: 17px;
      height: 17px;
      background-image: url("@{imgUrl}/ranking/no3.png");
      background-size: 110%;
      background-repeat: no-repeat;
    }
  }
}
</style>