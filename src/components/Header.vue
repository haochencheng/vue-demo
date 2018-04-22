<template>
    <div>
        <div class="home_title">接口监控管理平台</div>
        <div class="home_userinfo">
            <Dropdown >
                <a  href="javascript:void(0)">
                    <span class="home_userinfo_span" >{{this.$session.get('username')}}</span>
                    <Icon type="arrow-down-b"></Icon>
                </a>
                <DropdownMenu slot="list">
                    <span @click="logout()"><DropdownItem >注销</DropdownItem></span>
                </DropdownMenu>
            </Dropdown>
        </div>
    </div>
</template>
<script>
    export default {

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
    .home_userinfo {
        float: right;
        margin:35px 25px 0 15px;
    }
    .home_userinfo_span {
        color: black;
        cursor: pointer;
        font-size: 16px;
    }
</style>