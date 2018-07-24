<template>
        <div>
            <div class="home_title">接口监控管理平台</div>
            <el-dropdown :hide-on-click="false">
                <a  href="javascript:void(0)">
                    <span class="home_userInfo_span" >{{this.$session.get('username')}}</span>
                    <i class="el-icon-setting" style="margin-right: 15px"></i>
                </a>

                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item  @click.native="logout()" >注销</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>

</template>
<script>
    export default {
        methods: {
            logout: function () {
                alert('logout');
                this.$session.destroy();
                this.$router.push('/');
            }
        }
    }
</script>
<style>
    .home_title {
        color: black;
        font-size: 22px;
        display: inline;
        float: left;
        margin:25px 0 0 15px;
    }
    .home_userInfo_span {
        color: black;
        cursor: pointer;
        font-size: 16px;
    }
</style>