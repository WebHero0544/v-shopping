import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import './assets/styles/boot.scss';
import VueLazyload from 'vue-lazyload';

Vue.use(iView);

Vue.use(VueLazyload)
// or with options
// Vue.use(VueLazyload, {
//   preLoad: 1.3,
//   error: 'dist/error.png',
//   loading: 'dist/loading.gif',
//   attempt: 1
// })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')  //在App组件中本来有一个id=app的div元素，但是我感觉多余就删了，只留了<router-view/>，但是没有报错，任然可以正常使用
