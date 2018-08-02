import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import UserList from '@/components/user/UserList'

Vue.use(Router)


export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: '登录',
            hidden: true,
            component: Home,
            children: [
                {
                    path: '/login',
                    components: {
                        default: Login,
                    }
                },
                {
                    path: '/home',
                    components: {
                        default: Home,
                    },
                    name: '',
                    children: [
                        {

                            path: '/user_list',
                            name: '用户列表',
                            component: UserList,
                            hidden: true
                        }]
                },

            ]
        }
    ]
})