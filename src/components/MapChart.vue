<template>
  <div class="map-container">
    <baidu-map
      class="map"
      :center="{ lng: centerLng, lat: centerLat }"
      :zoom="15"
      :scroll-wheel-zoom="true"
    >
      <bm-panorama :longitude="116.404" :latitude="39.915"></bm-panorama>
      <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
      <bm-geolocation
        anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
        :showAddressBar="true"
        @locationSuccess="locationSuccess"
      ></bm-geolocation>
    </baidu-map>
  </div>
</template>

<script>
export default {
  data() {
    return {
      centerLng: 116.404, // 默认经度
      centerLat: 39.915, // 默认纬度
    };
  },
  methods: {
    locationSuccess(e) {
      // 定位成功回调函数
      this.centerLng = e.point.lng;
      this.centerLat = e.point.lat;
    },
  },
};
</script>

<style>
.map-container {
  display: flex;
  width: 100%;
  height: 500px; /* 根据需要调整地图高度 */
}

.map {
  flex-grow: 1;
}
</style>
