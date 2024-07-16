<template>
  <div class="page-wrapper">
    <div
      class="bg-[url('assets/imgs/bg.jpg')] bg-cover bg-center min-h-screen text-white p-2 flex flex-col flex-grow"
      v-if="data"
    >
      <!-- 中上 -->
      <TotalData
        class="bg-opacity-50 bg-slate-800 p-3 h-1/5 w-full"
        :data="data.totalData"
      />

      <div class="flex flex-1 mt-2 flex-grow">
        <div class="flex-1 mr-2 flex flex-col">
          <!-- 中下--><MapChart
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

    <Footer class="mt-2" />
  </div>
</template>

<script setup>
import TotalData from "./components/TotalData.vue";
import MapChart from "./components/MapChart.vue";
import VerticalBar from "./components/VerticalBar.vue";
import Footer from "./components/Footer.vue";
import { ref, onMounted, onUnmounted } from "vue";

const data = ref({});
const token = localStorage.getItem("token");
const lat = ref(0);
const lng = ref(0);
const eventSource = new EventSource(`
  http://123.60.85.23:9500/api/collection/records/range/stream?centerLat=${lat.value}&centerLng=${lng.value}&radiusMeters=50000000&token=${token}
`);

eventSource.onmessage = (e) => {
  const tmp = JSON.parse(e.data);
  if (!tmp.type) {
    for (let i = 0; i < tmp.records.length; i++) {
      data.value[tmp.records[i].record.deviceId.toString()] = tmp.records[i];
    }
  } else {
    for (let i = 0; i < tmp.ids.length; i++) {
      delete data.value[tmp.ids[i].record.deviceId.toString()];
    }
  }
  console.log(data.value);
};
</script>

<style scoped>
.footer {
  background-color: rgba(0, 0, 0, 0.5);
  padding: 1rem;
  text-align: center;
  font-size: 0.8rem;
  width: 100%;
}

.page-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
