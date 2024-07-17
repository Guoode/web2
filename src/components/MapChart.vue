<template>
  <div class="map-container">
    <baidu-map
      class="map"
      :center="{ lng: 116.404, lat: 39.915 }"
      :zoom="15"
      :scroll-wheel-zoom="true"
    >
    </baidu-map>
  </div>
</template>

<script>
export default {
  // 组件相关的逻辑代码 (如果有的话)
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
