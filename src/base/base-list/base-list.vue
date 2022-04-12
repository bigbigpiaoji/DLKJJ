<template>
  <div class="outside">
    <div class="content l-ml-10 l-mr-25">
      <div class="content-headimgstyle">
        <div class="content-jx981"></div>
      </div>
      <span class="content-t">{{ name }}</span>
      <span class="font-color l-ml-25">{{ sum }}家</span>
    </div>
    <div class="xz">
      <div
        class="content loadimg l-mr-25 l-ml-10 l-mt-10 l-mb-10"
        v-for="item in data"
        :key="item.value"
      >
        <div class="content-headimgstyle">
          <div class="content-highactive"></div>
        </div>

        <span class="content-title">{{ item.name }}</span>
        <div class="content-num content-fontsize">
          <span>{{ item.sum }}</span>
          <span>家</span>
        </div>
        <div class="content-num-c content-fontsize">
          <span>占比</span>
          <span>{{ item.proportion }}</span>
          <span>%</span>
        </div>

        <div class="content-num-d content-fontsize">
          <span>同比</span>
          <div class="content-footimgstyle l-m-5">
            <div
              :class="[item.yoy >= 0 ? 'content-uparrow' : 'content-downarrow']"
            ></div>
          </div>

          <span>{{ Math.abs(item.yoy) }}</span>
          <span>%</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "base-list",
  props: {
    name: {
      type: String,
      default: "",
    },
    sum: {
      type: Number,
      default: 0,
    },
    data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
};
</script>


<style lang="less" scoped>
@import "../../style/var.less";
.content-num-c {
  flex: 0.8;
  color: #c0d5fe;
  align-items: center;
}
.content-num-d {
  display: flex;
  flex: 1.2;
  color: #c0d5fe;
  align-items: center;
}
.content-t {
  font-size: 11px;
  font-family: "Microsoft YaHei";
  font-weight: bold;
  color: #c0d5fe;
}
.font-color {
  font-family: "ysbth";
  font-size: 14px;
  color: #01f1e0;
}
.content {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 20px;
  background-color: rgba(36, 182, 255, 0.05);
}

.loadimg {
  &:nth-child(1) .content-headimgstyle .content-highactive {
    
    width: 15px;
    height: 12px;
    background: url("@{imgUrl}/list/high-active.png") no-repeat;
    background-size: contain;
  }
  &:nth-child(2) .content-headimgstyle .content-highactive {
    
    width: 9px;
    height: 12px;
    background: url("@{imgUrl}/list/active.png") no-repeat;
    background-size: contain;
  }
  &:nth-child(3) .content-headimgstyle .content-highactive {
    
    width: 9px;
    height: 12px;
    background: url("@{imgUrl}/list/low-active.png") no-repeat;
    background-size: contain;
  }
}
.content-title {
  flex: 0.8;
  font-size: 11px;
  font-family: "Microsoft YaHei";
  font-weight: bold;
  color: #c0d5fe;
}
.content-num {
  display: flex;
  flex: 0.7;
  color: #c0d5fe;
}
.content-fontsize {
  font-size: 0.1rem;
}
.content-jx981 {
  width: 6px;
  height: 6px;
  background: url("@{imgUrl}/list/jx981.png") no-repeat;
  background-size: contain;
}
.content-highactive {
  width: 15px;
  height: 12px;
}
.content-active {
  width: 9px;
  height: 12px;
}
.content-uparrow {
  width: 9px;
  height: 7px;
  background: url("@{imgUrl}/list/uparrow.png" ) no-repeat;
  background-size: contain;
}
.content-downarrow {
  width: 9px;
  height: 7px;
  background: url("@{imgUrl}/list/downarrow.png") no-repeat;
  background-size: contain;
}
.content-headimgstyle {
  width: 25px;
  display: flex;
  justify-content: center;
}
.content-footimgstyle {
  width: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.center {
  margin: 0 auto;
}
.outside {
  width: 100%;
  height: 125px;
  position: relative;
}
.xz {
  width: 100%;
  height: 105px;
  overflow: auto;
}
.xz::-webkit-scrollbar {
  width: 0 !important;
}
</style>