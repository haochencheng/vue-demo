<template>
        <el-menu :default-openeds="['1', '3']">
            <el-submenu index="1">
                <template slot="title"><i class="el-icon-message"></i>用户管理</template>
                <el-menu-item-group>
                    <el-menu-item index="1-1" @click.native="userList()">用户列表</el-menu-item>
                    <el-menu-item index="1-2"></el-menu-item>
                </el-menu-item-group>
                <!--<el-menu-item-group title="分组2">-->
                    <!--<el-menu-item index="1-3">选项3</el-menu-item>-->
                <!--</el-menu-item-group>-->
                <!--<el-submenu index="1-4">-->
                    <!--<template slot="title">选项4</template>-->
                    <!--<el-menu-item index="1-4-1">选项4-1</el-menu-item>-->
                <!--</el-submenu>-->
            </el-submenu>
        </el-menu>
</template>

<script>
    export default {
        methods:{
            userList:function () {
                this.$router.push('/user_list');
            }
        }
    }
</script>
<style>

</style>