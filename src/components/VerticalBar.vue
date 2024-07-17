<template>
  <div class="log-container">
    <div class="map-wrapper">
      <div id="mini-map" class="mini-map"></div>
    </div>
    <div class="log-list">
      <div class="log-item danger">
        <div class="icon"></div>
        <div class="content">
          <h3>危险</h3>
          <ul>
            <li v-for="(log, index) in dangerLogs" :key="index">{{ log }}</li>
          </ul>
        </div>
      </div>
      <div class="log-item normal">
        <div class="icon"></div>
        <div class="content">
          <h3>正常</h3>
          <ul>
            <li v-for="(log, index) in normalLogs" :key="index">{{ log }}</li>
          </ul>
        </div>
      </div>
      <div class="log-item warning">
        <div class="icon"></div>
        <div class="content">
          <h3>警告</h3>
          <ul>
            <li v-for="(log, index) in warningLogs" :key="index">{{ log }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dangerLogs: [],
      normalLogs: [],
      warningLogs: [],
    };
  },
  mounted() {
    if (!window.BMapGL) {
      console.error("ERJaT2zREz57EesvlgMEX0fp7aMP1p8k");
      return;
    }
    this.initMiniMap();
    // 模拟日志数据
    this.dangerLogs = ["设备 A 温度过高", "设备 B 压力异常"];
    this.normalLogs = ["设备 C 运行正常", "设备 D 运行正常"];
    this.warningLogs = ["设备 E 电量过低", "设备 F 网络连接不稳定"];
  },
  methods: {
    initMiniMap() {
      const map = new BMapGL.Map("mini-map");
      map.centerAndZoom(new BMapGL.Point(105.0, 38.0), 4);
      map.setMapStyleV2({ styleId: "4bd789919ce64340a474a788c5bb0a22" }); // 使用简洁的样式
      map.disableDragging(); // 禁止拖拽
      map.disableScrollWheelZoom(); // 禁止鼠标滚轮缩放
    },
  },
};
</script>

<style scoped>
.log-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  overflow-y: auto;
}

.map-wrapper {
  height: 30%;
  padding: 10px;
}

.mini-map {
  width: 100%;
  height: 100%;
}

.log-list {
  flex: 1;
  padding: 10px;
}

.log-item {
  display: flex;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
}

.log-item.danger {
  background-color: #ffebee;
  color: #f44336;
}

.log-item.normal {
  background-color: #f1f8e9;
  color: #4caf50;
}

.log-item.warning {
  background-color: #fff3e0;
  color: #ff9800;
}

.icon {
  width: 20px;
  height: 20px;
  margin-right: 10px;
  border-radius: 50%;
}

.icon:before {
  content: "";
  display: block;
  width: 10px;
  height: 10px;
  margin: 5px;
  border-radius: 50%;
}

.log-item.danger .icon:before {
  background-color: #f44336;
}

.log-item.normal .icon:before {
  background-color: #4caf50;
}

.log-item.warning .icon:before {
  background-color: #ff9800;
}

.content {
  flex: 1;
}

.content h3 {
  margin: 0 0 5px 0;
  font-size: 16px;
}

.content ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.content li {
  font-size: 14px;
}
</style>
