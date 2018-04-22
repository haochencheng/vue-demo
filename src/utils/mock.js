const Mock=require('mockjs')

Mock.mock('/login',(res,resp)=>{
   return {
       status:0,
       msg:'登录成功',
       data:{
           'username':'叶晨'
       }
   }
});
