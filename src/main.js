import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import BaiduMap from 'vue-baidu-map-3x'

// 创建应用实例
const app = createApp(App);

// 注册百度地图插件
app.use(BaiduMap, {
  ak: 'ERJaT2zREz57EesvlgMEX0fp7aMP1p8k',
});

// 挂载应用实例到 DOM
app.mount('#app');
