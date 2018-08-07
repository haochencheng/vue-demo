<template>
    <div>
        <el-table
                :data="list"
                border
                style="width: 100%">
            <el-table-column
                    prop="sourceName"
                    label="一级来源"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="sourceSecNames"
                    label="二级来源"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="flag"
                    label="是否共享session">
            </el-table-column>
            <el-table-column
                    fixed="right"
                    label="操作"
                    width="100">
                <template slot-scope="scope">
                    <el-button @click="editClick(scope.row)" type="text" size="small">编辑</el-button>
                    <el-button @click="deleteClick(scope.row)" type="text" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import {getRequest} from '../../utils/api'

    export default {
        data() {
            return {
                list: []
            }
        },
        created() {
            this.getList();
        },
        methods: {
            async getList() {
                let {data} = await getRequest('/user/GetAllSource', {});
                console.log(data)
                this.list = data
            },
            editClick(row){
                console.log('row======',row);
            },
            deleteClick(row){

            }
        }
    }
</script>
<style scoped>

</style>