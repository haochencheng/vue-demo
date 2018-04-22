import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name:'登录',
            hidden:true,
            component:Login
        },
        {
            path: '/home',
            name: '主页',
            component: Home,
            hidden: true
        }
    ]
})