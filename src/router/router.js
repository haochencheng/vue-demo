import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import UserList from '@/components/user/UserList'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name:'登录',
            hidden:true,
            component:Login,
        },
        {
            path: '/home',
            components: {
                default: Home,
            },
            hidden: true,
            name: 'home',
        },
        {
            path: '/user_list',
            name: '用户列表',
            component: UserList,
            hidden: true
        },

    ]
})