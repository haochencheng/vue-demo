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

Mock.mock('/user/GetAllSource',(res,resp)=>{
    return {
        "code": 200,
        "data": [
            {
                "sourceName": "后台管理",
                "sourceSecNames": [
                    "后台管理",
                    "测试用例",
                    "url管理"
                ]
            },
            {
                "sourceName": "一零二四",
                "sourceSecNames": [
                    "一零二四",
                    "在线视频"
                ]
            },
            {
                "sourceName": "后台管理测试",
                "sourceSecNames": [
                    "线上系统"
                ]
            }
        ],
        "msg": "ok"
    }
});



