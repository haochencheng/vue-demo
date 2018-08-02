import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Routers from './router/router';
require('./utils/mock');
import VueSession from 'vue-session';


Vue.config.productionTip = false;
// axios.defaults.withCredentials=true; //携带cookie 测试是否不开启可以携带sid

Vue.use(ElementUI);
Vue.use(VueSession)

const router = Routers;

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});