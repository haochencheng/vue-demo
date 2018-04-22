<template>
    <div class="navigationMenu">
        <Row>
            <Col span="12">
            <Menu :theme="theme2">
                <Submenu name="1">
                    <template slot="title">
                        <Icon type="ios-paper"></Icon>
                        接口管理
                    </template>
                    <MenuItem name="1-2">接口列表</MenuItem>
                </Submenu>
                <Submenu name="2">
                    <template slot="title">
                        <Icon type="ios-people"></Icon>
                        接口报表
                    </template>
                    <MenuItem name="2-1">日报表</MenuItem>
                    <MenuItem name="2-2">总报表</MenuItem>
                </Submenu>
            </Menu>
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                theme2: 'light'
            }
        }
    }
</script>
<style>
    .navigationMenu{
        margin: 0 0 0 -30px;
    }
</style>