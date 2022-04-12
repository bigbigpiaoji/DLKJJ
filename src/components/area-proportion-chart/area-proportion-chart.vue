<template>
  <div class="area-proportion-chart">
    <div class="message-point line-block">
      <div class="message-left line-block">
        <div class="message-left-content">
          {{ proportionData.proTitle }}停电时间：
        </div>
        <div class="message-left-value">{{ proportionData.proValue }}</div>
        <div class="message-left-unit">&nbsp;小时/户</div>
      </div>
      <div class="message-right line-block">
        <div class="message-right-content">同比</div>
        <div class="message-right-value"></div>
        <div class="message-right-unit">{{ proportionData.proTb }}%</div>
      </div>
      <div></div>
    </div>
    <div class="message-box">
      <div class="line-block">
        <div
          class="proportion-left"
          :style="{ width: proportionData.proFault + '%' }"
        ></div>
        <div
          class="proportion-right"
          :style="{ width: proportionData.proPlane + '%' }"
        ></div>
      </div>
      <div class="line-block message-mark">
        <div class="full-all line-block">
          <div class="message-content">故障停电&nbsp;</div>
          <div class="message-value">{{ proportionData.proFault }}%</div>
        </div>
        <div class="line-block right-style">
          <div class="message-content">计划停电&nbsp;</div>
          <div class="message-value-right">{{ proportionData.proPlane }}%</div>
        </div>
      </div>
      <div class="top-style left-style">
        <div class="line-block buttom-style">
          <div class="line-block full-all">
            <div class="message-rectangle"></div>
            <div class="message-bottom-content">故障停电</div>
            <div class="message-bottom-content-left">
              {{ proportionData.proFaultValue }}&nbsp;小时/户
            </div>
          </div>
          <div class="line-block right-style">
            <div class="message-bottom-content">同比</div>
            <div class="message-bottom-triangle"></div>
            <div class="message-bottom-content">
              {{ proportionData.proFaultTb }}%
            </div>
          </div>
        </div>
        <div class="line-block buttom-style">
          <div class="line-block full-all">
            <div class="message-rectangle-right"></div>
            <div class="message-bottom-content">计划停电</div>
            <div class="message-bottom-content-left">
              {{ proportionData.proPlaneValue }}&nbsp;小时/户
            </div>
          </div>
          <div class="line-block right-style">
            <div class="message-bottom-content">同比</div>
            <div class="message-bottom-triangle"></div>
            <div class="message-bottom-content">
              {{ proportionData.proPlaneTb }}%
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "area-proportion-chart",
  props: {
    proportionData: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="less" scoped>
@import "../../style/var.less";
.area-proportion-chart {
  height: 200px;
  width: 510px;
}
.line-block {
  display: flex;
}
.full-all {
  flex: 1;
}
.message-point {
  width: 100%;
  margin-top: 16px;
  margin-bottom: 15px;
  height: 40px;
  background: url("@{imgUrl}/area-power/message-point.png") no-repeat;
  background-size: 100% 100%;
}
.message-left {
  margin-left: 14px;
  line-height: 40px;
  flex: 1;
  &-content {
    font-size: 14px;
    font-family: Microsoft YaHei;
    font-weight: bold;
    color: #ffffff;
  }
  &-value {
    font-size: 24px;
    font-family: Impact;
    font-weight: 400;
    color: #ffffff;

    background: linear-gradient(0deg, #7fbaf4 0%, #ffffff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  &-unit {
    font-size: 12px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #ffffff;
  }
}
.message-right {
  margin-right: 14px;
  line-height: 40px;
  &-content {
    font-size: 14px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #ffffff;
  }
  &-value {
    width: 14px;
    height: 10px;
    background: url("@{imgUrl}/list/uparrow.png") center center no-repeat;
    background-size: 100% 100%;
    margin: 15px 9px 0 9px;
  }
  &-unit {
    font-size: 14px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #ffffff;
  }
}
.message-box {
  height: 124px;
  width: 100%;
  // width: 507px;
  background: url("@{imgUrl}/area-power/message-box.png") center center
    no-repeat;
  background-size: 100% 100%;
}
.proportion-left {
  margin-top: 11px;
  margin-left: 15px;
  // width: 24.24%;
  height: 16px;
  border: 1px solid #000000;
  border-right: none;
  //   opacity: 0.4;
  background: linear-gradient(
    90deg,
    RGBA(110, 91, 57, 1) 0%,
    rgba(255, 184, 59, 1) 100%
  );
}
.proportion-right {
  margin-top: 11px;
  margin-right: 14px;
  // width: 76.56%;
  height: 16px;
  border: 1px solid #000000;
  border-left: none;
  //   opacity: 0.4;
  background: linear-gradient(
    90deg,
    RGBA(76, 163, 127, 1) 0%,
    rgba(116, 249, 173, 1) 100%
  );
}
.message-mark {
  margin-top: 11px;
  margin-bottom: 4px;
}
.message-content {
  margin-left: 15px;

  height: 14px;
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #ffffff;
}
.message-value {
  height: 14px;
  font-size: 16px;
  font-family: Impact;
  font-weight: 400;
  color: #fcb53b;
}
.message-value-right {
  height: 14px;
  font-size: 16px;
  font-family: Impact;
  font-weight: 400;
  color: #74f9ad;
}
.right-style {
  margin-right: 15px;
}
.top-style {
  margin-top: 19px;
}
.buttom-style {
  margin-bottom: 15px;
}
.left-style {
  margin-left: 15px;
}
.message-rectangle {
  width: 10px;
  height: 10px;
  background: linear-gradient(
    90deg,
    RGBA(110, 91, 57, 1) 0%,
    rgba(255, 184, 59, 1) 100%
  );
  margin: 3px 8px 0 0px;
}
.message-rectangle-right {
  width: 10px;
  height: 10px;
  background: linear-gradient(
    90deg,
    RGBA(76, 163, 127, 1) 0%,
    rgba(116, 249, 173, 1) 100%
  );
  margin: 3px 8px 0 0px;
}
.message-bottom-content {
  // width: 48px;
  height: 13px;
  font-size: 12px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #ffffff;
  // line-height: 52px;
}
.message-bottom-content-left {
  margin-left: 17px;
  height: 13px;
  font-size: 12px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #ffffff;
}
.message-bottom-triangle {
  width: 12px;
  height: 8px;
  background: url("@{imgUrl}/list/uparrow.png") center center no-repeat;
  background-size: 100% 100%;
  margin: 3px 8px 0 8px;
}
</style>
