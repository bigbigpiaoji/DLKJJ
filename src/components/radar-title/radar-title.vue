  <template>
  <div>
    <div class="radar-title l-mt-10">
      <div class="radar-title2 l-ml-15">
        <div :class="showCity?'radar-content2':'active'"
             @click="selectedModeLeft">{{content1}}</div>
      </div>
      <div class="radar-title2">
        <div class="radar-content1">{{content2}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "radar-title",
  props: {
    content1: {
      type: String,
      default: "",
    },
    content2: {
      type: String,
      default: "",
    },
    showCity:{
      type:Boolean,
      default:false
    }
  },
  data () {
    return {
      activeStatus:'',
      
    };
  },
  watch: {
    activeStatus (val) {
      this.$emit("onvalchange",val);
    },
  },

  methods: {
    selectedModeLeft () {
        this.activeStatus = !this.showCity 
        
      this.$emit('selectedLeft',this.activeStatus)
      
    },
  }
};
</script>
<style lang="less" scoped>
@import "../../style/var.less";

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
    cursor: pointer;
  }
  .radar-title2 {
    // flex: 1;
    .radar-content2 {
      font-size: 16px;
      font-family: "ysbth";
      color: #c7e5ff;
      cursor: pointer;
    }
    .radar-content1 {
      font-size: 12px;
      font-family: 'Microsoft YaHei';
      color: #c7e5ff;
      margin-left: 30px;
    }
  }
}
</style>