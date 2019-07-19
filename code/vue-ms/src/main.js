// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

//element-ui 引用
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from './App'
import router from './router'
import store from './vuex/store'

//检车是否拿到数据
// store.dispatch('GET_USERLIST').then(() => {
//   console.log('user data: ', store.state.userList)
// })


//引入axios
import axios from 'axios'
//挂载在vue
Vue.prototype.axios = axios;

//引入vueparticles
import VueParticles from 'vue-particles'
//挂载在vue
Vue.use(VueParticles);

//注册element-ui
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
