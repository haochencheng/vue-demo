<template>
    <el-container class="home_container">

        <el-header>
            <Header/>
        </el-header>

        <el-container>

            <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
                <NavigationMenu/>
            </el-aside>

            <el-main>
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </el-main>

        </el-container>

        <el-footer style="text-align: right; font-size: 12px">
            <Footer/>
        </el-footer>
    </el-container>

</template>
<script>
    export default {
        components: {
            'Header': () => import('./Header'),
            'NavigationMenu': () => import('./NavigationMenu'),
            'Footer': () => import('./Footer'),
        },
        mounted: function () {
            let user = sessionStorage.getItem('user');
            if (user==null) {
                this.$router.replace('/login');
                console.log('before:' + this.$session.getAll());
            }
        },
        data() {
            return {}
        },
        methods: {
            logout: function () {
                this.$session.destroy();
                this.$router.replace('/login');
            }
        }
    }
</script>
<style>
    .home_container {
        height: 100%;
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        border: 1px solid #eee
    }

    .home_header {
        height: 10%;
        background-color: #48A0F8;
    }
</style>

