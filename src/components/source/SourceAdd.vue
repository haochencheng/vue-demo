<template>
    <div style="margin: 20px;">
        <el-form :model="sourceForm" :rules="rules" ref="sourceForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="一级来源" prop="SourceName">
                <el-input v-model="sourceForm.SourceName"></el-input>
            </el-form-item>
            <el-form-item label="二级来源" prop="SourceSecName">
                <el-input v-model="sourceForm.SourceSecName"></el-input>
            </el-form-item>
            <el-form-item label="即时配送" prop="is_share_session">
                <el-switch v-model="sourceForm.flag"></el-switch>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('sourceForm')">确定</el-button>
                <el-button @click="$router.replace('/')">关闭</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import {postRequest} from '../../utils/api';

    export default {
        data() {
            return {
                sourceForm: {
                    SourceName: '',
                    SourceSecName: '',
                    flag: false,
                },
                rules: {
                    SourceName: [
                        { required: true, message: '请输入一级来源', trigger: 'blur' },
                    ],
                    SourceSecName: [
                        { required: true, message: '请输入二级来源', trigger: 'blur' },
                    ],
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        let formData=this.sourceForm;
                        let flag = formData.flag;
                        formData['flag']=flag?1:0;
                        formData['type']='add';
                        const data = postRequest('/user/AddSource', {
                            data: formData
                        });
                        if(data.status==1){
                            this.$message({
                                message: '添加成功',
                                type: 'success'
                            });
                        }else {
                            this.$message.error('添加失败');
                        }
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
        }
    }
</script>
<style scoped>

</style>