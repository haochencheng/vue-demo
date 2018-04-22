import Vue from 'vue'
import App from './App.vue'
import iView from 'iview/dist/iview'
import Routers from './router/router'
import 'iview/dist/styles/iview.css';

Vue.config.productionTip = false;

Vue.use(iView);

const router = Routers;

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});