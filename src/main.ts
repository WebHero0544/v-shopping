import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/boot.scss';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')  //在App组件中本来有一个id=app的div元素，但是我感觉多余就删了，只留了<router-view/>，但是没有报错，任然可以正常使用
