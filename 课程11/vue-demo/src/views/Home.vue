<template>
    <div class="home">
        <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>   
         <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>
              <router-link to="/">首页</router-link>
            </el-breadcrumb-item>
            <el-breadcrumb-item>
              <router-link to="/login">登录</router-link>
            </el-breadcrumb-item>
            <el-breadcrumb-item>
              <router-link to="/register">注册</router-link>
            </el-breadcrumb-item>
            <el-breadcrumb-item>
            </el-breadcrumb-item>
          </el-breadcrumb>
        </el-header>
        <el-main>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>
    .home,.el-container{
        width: 100%;
        height: 100%;
    }
</style>