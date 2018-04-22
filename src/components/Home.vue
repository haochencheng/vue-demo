
<template>
    <Row class="home_container" align="top">
        <Row class="home_header">
            <Header />
        </Row>
        <Row>
            <Col span="4" class="home_menu">
                <NavigationMenu />
            </Col>
            <Col span="20" class="home_body">

            </Col>
        </Row>
    </Row>
</template>
<script>
    export default {
        components: {
            'Header': () => import('./Header'),
            'NavigationMenu': () => import('./NavigationMenu')
        } ,
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


</style>