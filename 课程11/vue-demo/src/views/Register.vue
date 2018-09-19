<template>
    <div class="login">
        <h2>注册页面</h2>
        <el-form ref="form" label-width="100px">

            <el-form-item label="账号：" >
                <el-input v-model="data.username"></el-input>
                <div class="err">{{error.username}}</div>
            </el-form-item>

            <el-form-item label="邮箱：" >
                <el-input v-model="data.email"></el-input>
                <div class="err">{{error.email}}</div>
            </el-form-item>

            <el-form-item label="电话：" >
                <el-input v-model="data.phone"></el-input>
                <div class="err">{{error.phone}}</div>
            </el-form-item>

            <el-form-item label="密码：" >
                <el-input type="password" v-model="data.password"></el-input>
                <div class="err">{{error.password}}</div>
            </el-form-item> 

            <el-button type="primary" size='medium' @click='register'>注册</el-button>
        </el-form>
        <br>
            <router-link to="/login">已有账号？</router-link>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data(){
            return{
                error:{},
                data:{
                    username:'',
                    password:'',
                    phone:'',
                    email:''
                }
            }
        },
        methods:{
            register(){
                let postData = this.$qs.stringify(this.data);
                axios
                .post('/api/register',postData)
                .then((res)=>{
                    console.log(res)
                     if(res.data.code===1){
                        this.$router.push('/login')
                    }
                    this.error=res.data.error
                })
                .catch(err=>{
                    console.log(err)
                })
            }
        }
    }
</script>

<style>
    .login{
        width: 400px;
        height: 500px;
        margin: 20px auto;
        border: 1px solid gray;
        border-radius: 6px;
        text-align: center;
        padding: 0 30px;

    }
    .el-button{
        width: 100%;
    }
    .err{
        height: 24px;
    }
</style>