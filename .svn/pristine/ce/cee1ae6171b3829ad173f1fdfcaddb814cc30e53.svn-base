<template>
  <div class="rank-list">
    <div class="rank-inner"
         v-for="(row,rowIndex) in displayData"
         :key="'row'+rowIndex">

      <div class="rank-item"
           v-for="item in row"
           :key="item.name">
        <div class="rank-sort">{{item.sort}}</div>
        <div class="rank-name c-ellipsis"
             :title="item.name">{{item.name}}</div>
        <div class="rank-label">{{item.label}}</div>
      </div>
    </div>

    <!-- <div class="rank-inner rank-faker"
         v-for="item in fakerData"
         :key="'faker_rank'+item">

      <div class="rank-item">
        <div class="rank-sort">&nbsp;</div>
        <div class="rank-name c-ellipsis">&nbsp;</div>
        <div class="rank-label">&nbsp;</div>
      </div>
    </div> -->

  </div>
</template>

<script>
export default {
  name: 'rank-list',
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    columnCount: {
      type: [Number, String],
      default: 1,
    },
  },
  computed: {
    displayData() {
      let total = this.data.length
      let avg = Math.ceil(total / this.columnCount)
      let ret = []
      let temp = []
      this.data.forEach((item) => {
        if (temp.length < avg) {
          temp.push(item)
        } else {
          ret.push(temp)
          temp = []
          temp.push(item)
        }
      })
      if (temp.length) {
        ret.push(temp)
      }
      return ret
    },
  },
}
</script>

<style lang="less" scoped>
.rank{
  &-faker{

  }
  &-list{
    // break-inside: avoid;
    // break-after: avoid;
    // break-before: avoid;
    display: flex;
    padding-bottom: 3px;
  }
  &-inner{
    flex : 1;
    overflow: hidden;
    margin-left: 25px;
    &:first-child{
      margin-left: 0;
    }
    // padding-top: 10px;
    // height: 40px;
  }
  &-item{
    display: flex;
    align-items: center;
    // margin-top: 10px;
    margin : 8px 0;
    background-color: rgba(37, 181, 255, 0.05);
    color : #fff;
    padding : 7px;
    
   
  }
  &-sort{
    font-size: 12px;
    width: 18px;
    height: 18px;
    text-align: center;
    line-height: 18px;
    background: linear-gradient(0deg, #274184, #4E6AB1);
    border: 1px solid linear-gradient(-20deg, #4A71D3, #5B7CD0);
    border-radius: 50%;
    overflow: hidden;
  }
  &-name{
    font-size: 14px;
    margin : 0 10px;
    flex : 1;
  }
   &-label{
    font-size: 14px;
  }
}
</style>