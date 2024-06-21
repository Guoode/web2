<template>
  <div
    class="bg-[url('assets/imgs/bg.jpg')] bg-cover bg-center h-screen text-white p-2 flex overflow-hidden"
  >
    <!-- 左 -->
    <div class="flex-1 mr-5 bg-opacity-50 bg-slate-800 p-3 flex flex-col">
      <!-- 横向柱状图 -->
      <HorizontalBar class="h-1/3 box-border pb-4" />
      <!-- 雷达图 -->
      <RadarBar class="h-1/3 box-border pb-4" />
      <!-- 数据传递关系图 -->
      <Relation class="h-1/3" />
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
      <!-- 竖向柱状图 -->
      <VerticalBar class="h-1/3 box-border pb-4" />
      <!-- 环形资源占比图 -->
      <RingBar class="h-1/3 box-border pb-4" />
      <!-- 数据云图 -->
      <WordCloud class="h-1/3 box-border" />
    </div>
  </div>
</template>

<script setup>
import HorizontalBar from "./components/HorizontalBar.vue";
import RadarBar from "./components/RadarBar.vue";
import Relation from "./components/Relation.vue";
import TotalData from "./components/TotalData.vue";
import MapChart from "./components/MapChart.vue";
import VerticalBar from "./components/VerticalBar.vue";
import RingBar from "./components/RingBar.vue";
import WordCloud from "./components/WordCloud.vue";
import "./apis/visualization.js";
</script>

<style scoped></style>
