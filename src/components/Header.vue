<template>
        <div>
            <div class="header_title">接口监控管理平台</div>
            <el-dropdown :hide-on-click="false" class="header_dropDown">
                <a  href="javascript:void(0)">
                    <span class="header_userInfo_span" >{{this.$session.get('username')}}</span>
                    <i class="el-icon-setting" style="margin-right: 15px"></i>
                </a>

                <el-dropdown-menu slot="dropdown" >
                    <el-dropdown-item  @click.native="logout()" >注销</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>

</template>
<script>
    export default {
        methods: {
            logout: function () {

                this.$confirm('您确定要退出吗?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$session.destroy();
                    this.$router.push('/');
                }).catch(() => {

                });
            }
        }
    }
</script>
<style>
    .header_title {
        color: black;
        font-size: 22px;
        display: inline;
        float: left;
        margin:15px 0 0 15px;
    }
    .header_userInfo_span {
        color: black;
        cursor: pointer;
        font-size: 16px;
    }
    .header_dropDown{
        float: right;
        margin:15px 0 0 15px;
    }

</style>