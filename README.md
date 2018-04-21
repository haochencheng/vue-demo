# vue-demo
##  项目启动方式 
    需要环境nodejs,webpack,npm,yarn
### 启动方式
    1.yarn 
    2.测试环境  npm run dev
      开发环境  npm run server
#   前后端分离
##  Vue 项目架构设计与工程化实践
    https://github.com/berwin/Blog
##  Vue搭建参考
    https://github.com/lenve/VBlog
##  vue-cli
    https://github.com/vuejs/vue-cli    
### Quickstart
npm install -g @vue/cli
##### or
yarn global add @vue/cli    

vue create my-project

##  iview vue-ui框架
    https://github.com/iview/iview  
    
    npm install iview --save    

### Using a script tag for global use:
```
<script type="text/javascript" src="iview.min.js"></script>    
<link rel="stylesheet" href="dist/styles/iview.css"> 
```
###  Usage  <br>
```
<template>
    <Slider v-model="value" range />
</template>  <br>
<script>    <br>
    export default {    
        data () {   
            return {    
                value: [20, 50] 
            }
        }
    }
</script>      
```
###  Using css via import:   
import 'iview/dist/styles/iview.css';

##  vue使用babel
    https://vue-loader.vuejs.org/zh-cn/features/es2015.html

##  webpack
    https://doc.webpack-china.org/guides/production/
##  vue-webpack
    http://vuejs-templates.github.io/webpack/

### 【WEBPACK】分离css单独打包
    https://www.jianshu.com/p/439764e3eff2
    https://doc.webpack-china.org/loaders/css-loader/
    webpack 4.0 更换css独立打包为mini-css-extract-plugin
##  去除unused配置
uglifyjs-webpack-plugin
##  清除webpack-plugin
clean-webpack-plugin
##  拷贝webapack打包文件
copy-webpack-plugin
##  拷贝html
html-webpack-plugin
##  合并webpack文件
webpack-merge

#   yarn 
yarn add {node_module} {-dev}
yarn 安装依赖





