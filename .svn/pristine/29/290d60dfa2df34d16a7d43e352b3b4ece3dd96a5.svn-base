<template>
  <base-container
    :show-aside-right="false"
    :aside-left-width="300"
    class="electricity"
  >
    <div slot="left" class="electricity-left l-mt-20">
      <breadcrumb
        class="l-pt-20"
        :data.sync="breadcrumb"
        @change="onBreadcrumbChange"
      ></breadcrumb>
      <power-rank></power-rank>

      <area-layout
        ref="area"
        :leftData="leftData"
        :disabled="streetData.disabled"
        @change="onDistrict"
        class="electricity-area-layout"
      ></area-layout>
    </div>
    <div class="electricity-container">
      <area-electricity-map ref="map" class="l-flex mappadding">
        <breadcrumb
          slot="bottom"
          :show-bg="false"
          :data.sync="breadcrumb"
          @change="onBreadcrumbChange"
        ></breadcrumb>
      </area-electricity-map>
      <div class="occupy"></div>
      <area-popup>
        <area-popup-panel :data="popupPanelData"></area-popup-panel>
      </area-popup>
    </div>
  </base-container>
</template>

<script>
import * as api from "@/api/area";
import areaElectricityMap from "@/components/area-electricity-map";
import areaPopup from "@/components/area-popup";
import areaPopupPanel from "./area-popup-panel";
import powerRank from "@/components/power-rank";
export default {
  components: {
    areaElectricityMap,
    areaPopup,
    areaPopupPanel,
    powerRank,
  },
  props: {
    nav: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      orgCode: "0403",
      orgType: 3,
      breadcrumb: [
        {
          name: "深圳",
          value: "sz",
          area: "city",
          lat: 22.68,
          lng: 114.2,
          zoom: 9,
        },
      ],
      leftData: {},
      popupPanelData: {},
      districtData: {
        value: "zc",
        disabled: true,
        data: [
          {
            sort: "NO.1",
            value: 230.7984481,
            unit: "亿千瓦时",
            name: "宝安区",
            areaname: "",
            zoom: 13,
            area: "area",
            percentage: (230.7984481 / 230.7984481) * 100,
            lng: 113.84637756347564,
            lat: 22.661625845544663,
          },
          {
            sort: "NO.2",
            value: 45.45652079,
            unit: "亿千瓦时",
            name: "坪山区",
            areaname: "",
            percentage: (45.45652079 / 230.7984481) * 100,
            zoom: 13,
            area: "area",
            lng: 114.35277862548634,
            lat: 22.683543869431603,
          },
          {
            sort: "NO.3",
            value: 99.93171106,
            unit: "亿千瓦时",
            name: "光明区",
            areaname: "",
            zoom: 13,
            area: "area",
            percentage: (99.93171106 / 230.7984481) * 100,
            lng: 113.92259521484192,
            lat: 22.783229564426208,
          },
          {
            sort: "NO.4",
            value: 6.168330984,
            unit: "亿千瓦时",
            percentage: (6.168330984 / 230.7984481) * 100,
            name: "深汕区",
            areaname: "",
            zoom: 13,
            area: "area",
            lng: 115.03908081056159,
            lat: 22.88511588118915,
          },
          {
            sort: "NO.5",
            value: 104.7074945,
            unit: "亿千瓦时",
            name: "龙华区",
            areaname: "",
            zoom: 13,
            area: "area",
            percentage: (104.7074945 / 230.7984481) * 100,
            lng: 114.01941223144365,
            lat: 22.714840770320734,
          },
          {
            sort: "NO.6",
            value: 69.21200851,
            unit: "亿千瓦时",
            name: "福田区",
            areaname: "",
            area: "area",
            percentage: (69.21200851 / 230.7984481) * 100,
            zoom: 13,
            lng: 114.04550476074138,
            lat: 22.551329302202106,
          },
          {
            sort: "NO.7",
            value: 35.08643781,
            unit: "亿千瓦时",
            name: "罗湖区",
            areaname: "",
            percentage: (35.08643781 / 230.7984481) * 100,
            zoom: 13,
            area: "area",
            lng: 114.13751525878752,
            lat: 22.579228731137476,
          },
          {
            sort: "NO.8",
            value: 150.6233246,
            unit: "亿千瓦时",
            name: "龙岗区",
            areaname: "",
            zoom: 13,
            area: "area",
            percentage: (150.6233246 / 230.7984481) * 100,
            lng: 114.22932784674447,
            lat: 22.707505037211078,
          },
          {
            sort: "NO.9",
            value: 11.58208233,
            unit: "亿千瓦时",
            name: "大鹏区",
            areaname: "",
            percentage: (11.58208233 / 230.7984481) * 100,
            zoom: 13,
            area: "area",
            lng: 114.4712249755849,
            lat: 22.619165806300046,
          },
          {
            sort: "NO.10",
            value: 10.24781122,
            unit: "亿千瓦时",
            percentage: (10.24781122 / 230.7984481) * 100,
            name: "盐田区",
            areaname: "",
            zoom: 13,
            area: "area",
            lng: 114.25836486816314,
            lat: 22.611559637833523,
          },
          {
            sort: "NO.11",
            value: 87.69119417,
            unit: "亿千瓦时",
            name: "南山区",
            areaname: "",
            area: "area",
            percentage: (87.69119417 / 230.7984481) * 100,
            zoom: 13,
            lng: 113.9665405273418,
            lat: 22.60268524306848,
          },
        ],
      },
      streetData: {
        value: "jd",
        disabled: false,
        data: [
          {
            sort: "NO.1",
            name: "南山街道",
            value: 1922.32,
            unit: "万度",
            street: "street",
            percentage: 88.75,
            zoom: 16,
            lng: 113.93386698809701,
            lat: 22.60536370027316,
          },
          {
            sort: "NO.2",
            name: "南头街道",
            value: 1922.32,
            unit: "万度",
            street: "street",
            percentage: 77.75,
            zoom: 16,
            lng: 113.97175185880695,
            lat: 22.625035358034893,
          },
          {
            sort: "NO.3",
            name: "西丽街道",
            value: 1922.32,
            unit: "万度",
            street: "street",
            percentage: 63.75,
            zoom: 16,
            lng: 113.9977977074214,
            lat: 22.599170188797416,
          },
          {
            sort: "NO.4",
            name: "沙河街道",
            value: 1922.32,
            unit: "万度",
            street: "street",
            percentage: 73.75,
            zoom: 16,
            lng: 113.98941384999256,
            lat: 22.58753334243829,
          },
          {
            sort: "NO.5",
            name: "蛇口街道",
            value: 1922.32,
            unit: "万度",
            street: "street",
            percentage: 93.75,
            zoom: 16,
            lng: 113.94324166381233,
            lat: 22.559474519810294,
          },
          {
            sort: "NO.6",
            name: "招商街道",
            value: 1922.32,
            unit: "万度",
            street: "street",
            percentage: 85.75,
            zoom: 16,
            lng: 113.93968995718308,
            lat: 22.51755785632588,
          },
          {
            sort: "NO.7",
            name: "粤海街道",
            value: 1922.32,
            unit: "万度",
            street: "street",
            percentage: 87.75,
            zoom: 16,
            lng: 113.87418070157759,
            lat: 22.506985558753442,
          },
          {
            sort: "NO.8",
            name: "桃园街道",
            value: 1922.32,
            unit: "万度",
            street: "street",
            percentage: 83.75,
            zoom: 16,
            lng: 113.91679484430972,
            lat: 22.494084323322312,
          },
        ],
      },
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.initLeftData();
      this.quueryElectricitySorting();
      this.quueryElectricitySortingArea();
    },
    initLeftData() {
      this.leftData = this.districtData;
    },
    onDistrict(item) {
      this.flyTo(item);
      if (item.name === "南山区") {
        this.leftData = this.streetData;
        this.breadcrumb.push(item);
        this.popupPanelData = item;
      }
    },
    onBreadcrumbChange(item) {
      if (item.name === "深圳") {
        this.leftData = this.districtData;
        this.popupPanelData = item;
      }
      this.flyTo(item);
    },
    flyTo(item) {
      this.$refs.map.flyTo({
        center: [item.lng, item.lat],
        zoom: item.zoom,
      });
    },

    quueryElectricitySorting() {
      api
        .quueryElectricitySorting({
          valueType: 2,
          recordType: 1,
          orgCode: "04",
          dataPeriod: 3,
          time: "2021-12",
          orgType: 2,
        })
        .then((res) => {
          this.districtData.data = (res || []).map((item, index) => {
            item.value = item.electricityConsumption;
            item.name = item.orgName;
            item.percentage = parseFloat(item.valueOneZb);
            item.unit = this.districtData.data[index].unit;
            item.lng = this.districtData.data[index].lng;
            item.lat = this.districtData.data[index].lat;
            item.zoom = this.districtData.data[index].zoom;
            item.area = this.districtData.data[index].area;
            item.areaname = item.orgCode;

            item.sort = this.districtData.data[index].sort;
            return item;
          });
        });
    },
    quueryElectricitySortingArea() {
      api
        .quueryElectricitySorting({
          valueType: 2,
          recordType: 1,
          orgCode: this.orgCode,
          dataPeriod: 3,
          time: "2021-12",
          orgType: 3,
        })
        .then((res) => {
          res.forEach((item, index) => {
            this.streetData.data[index].value = item.electricityConsumption;
            this.streetData.data[index].name = item.orgName;
            this.streetData.data[index].percentage = parseFloat(
              item.valueOneZb
            );
          });
        });
    },
  },
};
</script>

<style lang="less" scoped>
.electricity {
  height: calc(100% - 46px);
  overflow: hidden;
  &-left {
    display: flex;
    flex-direction: column;
    background-color: rgba(14, 29, 56, 0.8);
    height: calc(100% - 60px);
  }

  &-container {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 99.7%;
  }
  &-area-layout {
  }
}
.mappadding {
  padding: 20px 35px 0px 35px;
  max-height: 630px;
}
.occupy {
  height: 300px;
}
</style>