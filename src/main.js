import Vue from 'vue'
import App from './App.vue'
import iView from 'iview/dist/iview'
import Routers from './router/router'
import 'iview/dist/styles/iview.css'
require('./utils/mock')
import axios from 'axios'
import VueSession from 'vue-session'


Vue.config.productionTip = false;
// axios.defaults.withCredentials=true; //携带cookie 测试是否不开启可以携带sid

Vue.use(iView);
Vue.use(VueSession)

const router = Routers;

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});