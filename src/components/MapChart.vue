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
      <bm-point-collection
        :points="randomPoints"
        shape="BMAP_POINT_SHAPE_CIRCLE"
        color="blue"
        size="BMAP_POINT_SIZE_SMALL"
      ></bm-point-collection>
    </baidu-map>
  </div>
</template>

<script>
export default {
  data() {
    return {
      centerLng: 116.404, // 默认经度
      centerLat: 39.915, // 默认纬度
      randomPoints: [],
    };
  },
  mounted() {
    this.generateRandomPoints(100);
  },
  methods: {
    locationSuccess(e) {
      this.centerLng = e.point.lng;
      this.centerLat = e.point.lat;
    },
    generateRandomPoints(count) {
      const bounds = this.getBoundsHubei(); // 修改为获取湖北省边界
      for (let i = 0; i < count; i++) {
        this.randomPoints.push({
          lng: Math.random() * (bounds.maxX - bounds.minX) + bounds.minX,
          lat: Math.random() * (bounds.maxY - bounds.minY) + bounds.minY,
        });
      }
    },
    // 获取湖北省地理范围
    getBoundsHubei() {
      return {
        minX: 108.9,
        maxX: 116.05,
        minY: 29.3,
        maxY: 33.15,
      };
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
