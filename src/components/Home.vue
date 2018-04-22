<template>
    <Row class="home_container" align="top">
        <Row class="home_header">
            <div class="home_title">接口监控管理平台</div>
            <div>{{this.$session.get('username')}}</div>
        </Row>
        <Row>
            <Col span="4" class="home_menu">

            </Col>
            <Col span="8" class="home_body">

            </Col>
        </Row>
    </Row>
</template>
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
</style>