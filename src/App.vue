<template>
  <div
    class="bg-[url('assets/imgs/bg.jpg')] bg-cover bg-center h-screen text-white p-2 flex overflow-hidden"
    v-if="data"
  >
    <!-- 左 -->
    <div class="flex-1 mr-5 bg-opacity-50 bg-slate-800 p-3 flex flex-col">
      <RadarBar class="h-1/3 box-border pb-4" :data="data.riskData" />
    </div>
    <!-- 中 /> -->
    <div class="w-1/2 mr-2 flex flex-col">
      <!-- 数据展示图 -->
      <TotalData class="bg-opacity-50 bg-slate-800 p-3" />
      <!-- 地图可视化 -->
      <MapChart class="bg-opacity-50 bg-slate-800 p-3 mt-4 flex-1" />
    </div>
    <!-- 右 /> -->
    <div class="flex-1 bg-opacity-50 bg-slate-800 p-3 flex flex-col">
      <VerticalBar class="h-1/3 box-border pb-4" :data="data.serverData" />
    </div>
  </div>
</template>

<script setup>
import RadarBar from "./components/RadarBar.vue";
import TotalData from "./components/TotalData.vue";
import MapChart from "./components/MapChart.vue";
import VerticalBar from "./components/VerticalBar.vue";

import { ref } from "vue";
import { getVisualization } from "@/apis/visualization.js";

const data = ref(null);
const loadData = async () => {
  data.value = await getVisualization();
  //console.log(data.value);
};
loadData();

setInterval(() => {
  loadData();
}, 3000);
</script>

<style scoped></style>
