const express= require('express')
const path =require('path')
const bodyParser =require('body-parser')
const db= require('./db/mongodb');
const validator =require('validator');

const app =express()

//设置用户表单提交动作信息的中间件，所有的信息都会保存在req.body里
app.use(bodyParser.urlencoded({extended:false}));

app.post('/',(req,res)=>{
    const { body } =req
    const { username,password } = body
    let errors={};
    if(!username){
        errors['username']="账号不能为空"
    }
    if(!password){
        errors['password']="密码不能为空"
    }
    if(username && password){
        db.collection('users').find({$and:[{username,password}]},function(err,result){
            if(err) throw err
            if(result.length==0){
                errors['username']="用户名或密码错误"
                res.json({
                    code:0,
                    error:errors,
                    mes:'用户登录失败'
                })
                return
            }
            res.json({
                code:1,
                error:errors,
                mes:'用户登录成功'
            })
        })
        return
    }
    res.json({
        code:0,
        error:errors,
        mes:'用户登录失败'
    })
})
app.post('/register',(req,res)=>{
    const { body } =req
    const { username,password,phone,email } = body
    //错误信息对象
    let errors={};
    if(username){//验证账号
        if(username.length<3||username.length>8){
            errors['username']="账号长度不能小于3或大于8"
        }
    }else{
        errors['username']="账号不能为空"
    }
    if(password) {//验证密码
        if(!(password.length >= 6 && password.length <= 18)){
            errors['password'] = '密码长度不正确'
        }
    }else{
        errors['password'] = '密码不能为空'
    }
  
    if(phone) {//验证手机
        if(!validator.isMobilePhone(phone,'zh-CN')){
        errors['phone'] = '手机号码不正确'
        }
    }else{
        errors['phone'] = '手机不能为空'
    }
      
    if(email) {//验证邮箱
        if(!validator.isEmail(email)){
        errors['email'] = '邮箱格式不正确'
        }
    }else{
        errors['email'] = '邮箱不能为空'
    }
    if(Object.keys(errors).length==0){
        db.collection('users').find({$or:[{username},{phone},{email}]},function(err,result){
            if (err) throw err
            if(result.length==0){
                db.collection('users').insert({username,password,phone,email},function(err,result){
                    if(err) throw err
                    res.json({
                        code:1,
                        error:errors,
                        mes:'添加用户成功'
                    })
                })
                return
            }
            result.forEach(element => {
                if(element.username==username){
                    errors['username'] = "用户已注册"
                }
                if(element.phone==phone){
                    errors['phone'] = "手机已注册"
                }
                if(element.email==email){
                    errors['email'] = "邮箱已注册"
                }
            });
            res.json({
                code:0,
                error:errors,
                mes:'添加用户失败'
            })
        })
        return
    }
    res.json({
        code:0,
        error:errors,
        mes:'添加用户失败'
    })
})


//渲染404错误页面
app.use((req,res)=>{
    res.status(400)
})
let server =app.listen(3000,()=>{
    console.log("启动成功")
})