<template>
  <div class="area-swiper">
    <swiper
      :options="swiperOptions"
      :auto-update="true"
      :auto-destroy="true"
      :delete-instance-on-destroy="true"
      :cleanup-styles-on-destroy="true"
      class="area-swiper-card"
    >
      <swiper-slide
        class="area-swiper-card-slide"
        v-for="item in data"
        :key="item.index"
      >
        <div class="area-swiper-card-bg">
          <div class="area-swiper-card-head">
            <div class="area-swiper-card-head-title">{{ item.name }}</div>
            <div class="area-swiper-card-head-date">{{ item.date }}当期</div>
          </div>
          <div class="area-swiper-card-tail">
            <industry-electricity
              :data="item.powerGrowth"
              title="用电增速最快行业"
            ></industry-electricity>
            <industry-electricity
              :data="item.powerReduction"
              title="用电降速最快行业"
              class="l-mt-10"
            ></industry-electricity>
          </div>
        </div>
      </swiper-slide>
      <div class="area-swiper-card-swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
import industryElectricity from "@/components/industry-electricity";
export default {
  name: "area-swiper-card",
  components: {
    industryElectricity,
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      selected: "",
      currentIndex: 0,

      swiperOptions: {
        slidesPerView: 6,
  //       pagination: {
  //       el: '.area-swiper-card-swiper-pagination',
  //       type: 'fraction',
  //       renderFraction: function (currentClass, totalClass) {
  //         return "<div style='width:5px;height:5px;background-color: aqua;'></div><div style='width:5px;height:5px;background-color: aqua;'></div>"
  //       },
  // },
        slidesPerGroup: 6,
        // slidesPerGroupSkip:6,
        // loop: true,
        pagination: {
          el: ".area-swiper-card-swiper-pagination",
          clickable: true,
          paginationClickable: true,

        },
        // autoplay: {
        //   delay: 3000, //3秒切换一次
        //   stopOnLastSlide: false,
        //   disableOnInteraction: false,
        // },
      },
    };
  },
};
</script>
<style lang="less">
@import "../../style/var.less";
.area-swiper {
  &-card {
    &-bg {
      background: url("@{imgUrl}/electricity-img/1.png") center center no-repeat;
      height: 240px;
      background-size: 100% 100%;
      padding: 12px 8px;
    }
    &-head {
      display: flex;
      height: 35px;
      background: linear-gradient(
        90deg,
        rgb(7, 107, 140, 0.5),
        rgba(25, 47, 112, 0.5)
      );
      padding-top: 8px;
      &-title {
        flex: 1;
        font-size: 16px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: #ffffff;
        margin-left: 10px;
      }
      &-date {
        font-size: 12px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(192, 213, 254, 0.8);
        line-height: 16px;
        margin-right: 10px;
      }
    }
    &-swiper-pagination {
      margin-top: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .swiper-slide {
    margin-right: 0px !important;
  }
  .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    background-color: #455064;
    border-radius: 50%;
    text-align: center;
    &-active {
      background: #0d90ff;
      border-radius: 50%;
    }
  }
}
</style>