// App.vue (主组件)
<template>
  <div class="p-6 relative">
    <div class="absolute top-0 right-0">
      <div class="bg-gray-800 text-white px-2 py-1 rounded-md text-sm mb-2">
        设备电量：{{ batteryLevel }}%
      </div>
      <div
        class="bg-orange-500 text-white px-2 py-1 rounded-md text-sm mb-2"
        v-if="errorMessage"
      >
        故障信息：{{ errorMessage }}
      </div>
      <div
        class="bg-purple-500 text-white px-2 py-1 rounded-md text-sm cursor-pointer"
        @click="showLogModal = true"
      >
        故障日志
      </div>
    </div>

    <div class="text-slate-300 text-center">
      <span
        ref="totalCountTarget"
        class="text-7xl ml-2 mr-2 font-bold font-[Electronic]"
        :class="{
          'text-green-400': isSystemNormal,
          'text-red-500': !isSystemNormal,
        }"
      >
        {{ isSystemNormal ? "良好" : "故障" }}
      </span>
    </div>
    <div class="absolute top-0 left-0">
      <div class="bg-red-500 text-white px-2 py-1 rounded-md text-sm mb-2">
        温度：{{ temperature }}℃
      </div>
      <div class="bg-blue-500 text-white px-2 py-1 rounded-md text-sm mb-2">
        PH值：{{ ph }}
      </div>
      <div class="bg-green-500 text-white px-2 py-1 rounded-md text-sm mb-2">
        含氧量：{{ oxygen }}%
      </div>
      <div class="bg-yellow-500 text-white px-2 py-1 rounded-md text-sm">
        坐标：{{ coordinates }}
      </div>
    </div>

    <ErrorLogModal
      :show="showLogModal"
      :logs="errorLogs"
      @close="showLogModal = false"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import ErrorLogModal from "./ErrorLogModal.vue";

const totalCount = ref(0);
const temperature = ref(0);
const ph = ref(0);
const oxygen = ref(0);
const coordinates = ref("0, 0");
const batteryLevel = ref(100);
const errorMessage = ref("");
const errorLogs = ref(["故障日志"]); // 初始化 errorLogs 数组
const showLogModal = ref(false);
const systemStatus = ref(true);

const isSystemNormal = computed(() => {
  return systemStatus.value && temperature.value <= 50;
});

onMounted(() => {
  const intervalId = setInterval(() => {
    temperature.value = Math.floor(Math.random() * (60 - 10 + 1)) + 10;
    ph.value = (Math.random() * (8 - 6) + 6).toFixed(2);
    oxygen.value = (Math.random() * (100 - 80) + 80).toFixed(2);
    coordinates.value = `${Math.random() * 180 - 90}, ${
      Math.random() * 360 - 180
    }`;
    batteryLevel.value = Math.max(batteryLevel.value - 1, 0);

    systemStatus.value = Math.random() > 0.2;

    if (!isSystemNormal.value) {
      errorMessage.value = "系统故障";
      errorLogs.value.push(`[${new Date().toLocaleString()}] 系统故障`);
    } else {
      errorMessage.value = "";
    }
  }, 2000);

  onUnmounted(() => {
    clearInterval(intervalId);
  });
});
</script>

<style lang="scss" scoped>
.text-gradient {
  background: linear-gradient(to right, #ff0000, #ffff00, #00ff00, #0000ff);
  -webkit-background-clip: text;
  color: transparent;
}
</style>
