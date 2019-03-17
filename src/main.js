import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAMap from 'vue-amap';
import './registerServiceWorker'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

import './assets/css/common.css'
Vue.use(VueAMap);
Vue.use(iView, {
  transfer: true,
  size: 'large'
});
Vue.config.productionTip = false
VueAMap.initAMapApiLoader({
  key: 'your amap key',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
