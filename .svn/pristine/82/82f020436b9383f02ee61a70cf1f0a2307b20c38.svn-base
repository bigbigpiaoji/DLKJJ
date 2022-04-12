  <template>
  <div>
    <div class="radar-title l-mt-4">
      <div class="radar-title2 l-ml-5 content">
        <div :class="showCity ? 'radar-content2' : 'active'">
          {{ content1 }}
        </div>
      </div>
      <div class="radar-title2">
        <div class="radar-content1">{{ content2 }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "analysis-radar-title",
  props: {
    content1: {
      type: String,
      default: "",
    },
    content2: {
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
      activeStatus: "",
    };
  },
};
</script>
<style lang="less" scoped>
@import "../../style/var.less";
.content {
  flex: 1;
}
.radar-title {
  display: flex;
  align-items: center;
  .radar-title1 {
    flex: 1;
  }
  .active {
    font-size: 16px;
    font-family: "ysbth";
    color: #00ffea;
  }
  .radar-title2 {
    .radar-content2 {
      font-size: 16px;
      font-family: "ysbth";
      color: #c7e5ff;
    }
    .radar-content1 {
      font-size: 10px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(212, 219, 242,0.6);
      margin-top: 5px;
    }
  }
}
</style>