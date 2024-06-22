<template>
  <div
    class="bg-[url('assets/imgs/bg.jpg')] bg-cover bg-center h-screen text-white p-2 flex flex-col overflow-hidden"
    v-if="data"
  >
    <!-- 中上 -->
    <TotalData class="bg-opacity-50 bg-slate-800 p-3 h-1/5 w-full" />

    <div class="flex flex-1 mt-2">
      <div class="flex-1 mr-2 flex flex-col">
        <!-- 中下-->
        <MapChart
          class="bg-opacity-50 bg-slate-800 p-3 mt-2 flex-1"
          :data="data.mapData"
        />
      </div>

      <!-- 右 -->
      <div
        class="w-1/3 ml-5 bg-opacity-50 bg-slate-800 p-3 flex flex-col h-full"
      >
        <VerticalBar class="h-full box-border pb-4" :data="data.serverData" />
      </div>
    </div>
  </div>
</template>

<script setup>
import TotalData from "./components/TotalData.vue";
import MapChart from "./components/MapChart.vue";
import VerticalBar from "./components/VerticalBar.vue";

import { ref } from "vue";
import { getVisualization } from "@/apis/visualization.js";

const data = ref(null);
const loadData = async () => {
  data.value = await getVisualization();
};
loadData();

setInterval(() => {
  loadData();
}, 3000);
</script>

<style scoped></style>
