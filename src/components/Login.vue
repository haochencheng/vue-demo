<template>
    <el-form :model="loginForm" :rules="ruleLoginForm" ref="loginForm" label-width="100px" class="login-container"
             :label-position="labelPosition">
        <h3 class="login_title">系统登录</h3>
        <el-form-item label="用户名" prop="username">
            <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="loginForm.password"></el-input>
        </el-form-item>
        <div>
            <el-checkbox  v-model="loginForm.remember_me" label="记住我" name="remember_me" />
            <span v-model="err_msg" v-show="is_show" class="err_msg">{{err_msg}}</span>
        </div>
        <el-form-item>
            <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
        </el-form-item>
    </el-form>
</template>
<script>
    import {postRequest} from '../utils/api'
    var md5 = require('md5');

    export default {
        data() {
            return {
                labelPosition: 'left',
                is_show: false,
                err_msg: '',
                loginForm: {
                    username: '',
                    password: '',
                    remember_me: false,
                },
                ruleLoginForm: {
                    username: [
                        {required: true, message: '请输入用户名', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '请输入密码', trigger: 'blur'},
                        {min: 5, max: 16, message: '长度在 5 到 16 个字符', trigger: 'blur'}
                    ],
                }
            };
        },
        methods: {
            submitForm(loginForm) {
                this.$refs[loginForm].validate((valid) => {
                    this.is_show=false;
                    const data=this.loginForm;
                    data['password']=md5(data.password);
                    console.log('data.password',data.password);
                    data['source']='877a58ea5920542fc20b32632d1a796c';
                    if (valid) {
                        console.log(this.loginForm);
                        postRequest('/user/auth', {
                            data: data
                        }).then(resp => {
                            console.log('resp',resp);
                            if (resp.status == 200) {
                                //成功
                                var result = resp.data;
                                if (result.code == 200) {
                                    this.$message({
                                        message: '登录成功',
                                        type: 'success',
                                        duration:1200
                                    });
                                    this.$session.start();
                                    this.$session.set('username', result.data.username);
                                    this.$router.push('/');
                                } else {
                                    this.err_msg = result.msg;
                                    this.is_show = true;

                                }
                            } else {
                                this.$message('登录失败!', '失败!');
                            }
                        });
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
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
        float: left;
    }

    .err_msg {
        color: red;
    }
</style>
