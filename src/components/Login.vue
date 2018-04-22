<template>
    <Form ref="loginForm" :model="loginForm" :rules="ruleLoginForm" class="login-container" label-position="left">
        <h3 class="login_title">系统登录</h3>
        <FormItem prop="user">
            <i-input type="text" v-model="loginForm.username" placeholder="用户名" auto-complete="off">
                <Icon type="ios-person-outline" slot="prepend">{{loginForm.username}}</Icon>
            </i-input>
        </FormItem>
        <FormItem prop="password">
            <i-input type="password" v-model="loginForm.password" placeholder="密码" auto-complete="off">
                <Icon type="ios-locked-outline" slot="prepend">{{loginForm.password}}</Icon>
            </i-input>
        </FormItem>
        <span @click="switch_remember_me()"><Checkbox class="login_remember" :model="loginForm.remember_me" >记住密码</Checkbox></span>
        <FormItem>
            <Button type="primary" @click="handleSubmit('loginForm')" style="width: 100%">登录</Button>
        </FormItem>
    </Form>
</template>
<script>
    import {postRequest} from '../utils/api'
    export default {
        data () {
            return {
                loginForm: {
                    username: '',
                    password: '',
                    remember_me:false
                },
                ruleLoginForm: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码必须大于6位', trigger: 'blur' },
                        { type: 'string', max: 16, message: '密码必须小于16位', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit(loginData) {
                this.$refs[loginData].validate((valid) => {
                    if (!valid) {
                        return;
                    }
                    postRequest('/login',{
                        data:this.loginForm
                    }).then(resp=>{
                        if(resp.status==200){
                            //成功
                            var result=resp.data;
                            this.$Message.success('登录成功!');
                            this.$session.start();
                            this.$session.set('username',result.data.username);
                            this.$router.push('/home');
                        }else {
                            this.$Message('登录失败!', '失败!');
                        }
                    }, resp=> {
                        this.$Message('找不到服务器⊙﹏⊙∥!', '失败!');
                    });
                })
            },
            switch_remember_me: function(){
                this.loginForm.remember_me=!this.loginForm.remember_me;
            }
        }
    }
</script>
<style>
    .login-container {
        border-radius: 15px;
        background-clip: padding-box;
        margin: 180px auto;
        width: 350px;
        padding: 35px 35px 15px 35px;
        background: #fff;
        border: 1px solid #eaeaea;
        box-shadow: 0 0 25px #cac6c6;
    }

    .login_title {
        margin: 0px auto 40px auto;
        text-align: center;
        color: #505458;
    }

    .login_remember {
        margin: 0px 0px 25px 0px;
        text-align: left;
        float:left;
    }
</style>
