<template>
    <el-menu  default-active="$route.path" router>
        <el-submenu index="1">
            <template slot="title"><i class="el-icon-menu"></i>后台管理</template>
            <el-submenu index="1-1">
                <template slot="title"><i class=""></i>来源管理</template>
                <el-menu-item-group>
                    <el-menu-item index="/source/list">来源列表</el-menu-item>
                    <el-menu-item index="/source/add">添加来源</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="1-2">
                <template slot="title"><i class=""></i>用户管理</template>
                <el-menu-item-group>
                    <el-menu-item index="/user/list">用户列表</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="1-3">
                <template slot="title"><i class=""></i>权限管理</template>
                <el-menu-item-group>
                    <el-menu-item index="/role/user">用户权限</el-menu-item>
                    <el-menu-item index="/role/list">权限列表</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-submenu>
        <el-submenu index="url">
            <template slot="title"><i class="el-icon-menu"></i>url监控管理</template>

        </el-submenu>
    </el-menu>
</template>

<script>
    export default {
        methods: {

        }
    }

</script>
<style>

</style>