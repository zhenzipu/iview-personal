import Vue from 'vue';
import iView from 'iview';
import App from './App.vue';
import 'iview/dist/styles/iview.css';

Vue.config.productionTip = false;

Vue.use(iView); // 导入组件库

import install from './../packages/index';
// 注册组件库
Vue.use(install);

new Vue({
    render: h => h(App)
}).$mount('#app');
