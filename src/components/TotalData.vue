<template>
  <div class="p-6">
    <div class="text-slate-300 text-center">
      数据总量：
      <span
        ref="totalCountTarget"
        class="text-7xl ml-2 mr-2 font-bold font-[Electronic] text-gradient"
      >
        {{ totalCount }}
      </span>
      条记录
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const totalCount = ref(0);
const token = localStorage.getItem("token");
const lat = ref(0);
const lng = ref(0);

let eventSource;

onMounted(() => {
  eventSource = new EventSource(
    `http://123.60.85.23:9500/api/collection/records/range/stream?centerLat=${lat.value}&centerLng=${lng.value}&radiusMeters=50000000&token=${token}`
  );

  eventSource.onmessage = (e) => {
    const data = JSON.parse(e.data);

    // 计算 ph 数据总量
    totalCount.value = data.records.filter(
      (record) => record.ph !== undefined
    ).length;
  };
});

onUnmounted(() => {
  // 组件卸载时关闭 EventSource
  if (eventSource) {
    eventSource.close();
  }
});
</script>

<style lang="scss" scoped></style>
