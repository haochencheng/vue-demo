import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import UserList from '@/components/user/UserList'
import SourceList from '@/components/source/SourceList'
import SourceAdd from '@/components/source/SourceAdd'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/login',
            components: {
                default: Login,
            }
        },
        {
            path: '/',
            name: '登录',
            hidden: true,
            component: Home,
            children: [

                {
                    path: '/home',
                    components: {
                        default: Home,
                    },
                    name: '',
                    children: [
                        {
                            path: '/user/list',
                            name: '用户列表',
                            component: UserList,
                            hidden: true
                        },
                        {

                            path: '/source/list',
                            name: '来源列表',
                            component: SourceList,
                            hidden: true
                        },
                        {

                            path: '/source/add',
                            name: '添加来源',
                            component: SourceAdd,
                            hidden: true
                        },
                        ]
                },

            ]
        }
    ]
})