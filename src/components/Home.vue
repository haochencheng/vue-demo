<template>
    <Row class="home_container" align="top">
        <Row class="home_header">
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
        </Row>
        <Row>
            <Col span="4" class="home_menu">

            </Col>
            <Col span="8" class="home_body">

            </Col>
        </Row>
    </Row>
</template>
<script>
    import Spin from "iview/src/components/spin/spin";

    export default {
        components: {Spin},
        mounted: function () {
            if (!this.$session.exists()) {
                this.$router.push('/');
                console.log('before:'+this.$session.getAll());
            }
        },
        data(){
            return  {
            }
        },
        methods: {
            logout: function () {
                this.$session.destroy();
                this.$router.push('/');
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
    }
    .home_header{
        height: 10%;
        background-color: #48A0F8;
    }
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