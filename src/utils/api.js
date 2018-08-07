import axios from 'axios'

let base = 'http://58.87.64.219';

import qs from 'qs';

//请求时拦截
axios.interceptors.request.use((config) => {
    let user = sessionStorage.getItem('user');
    console.log('user============',user);
    if (config.method == "post") {
        config.data = qs.stringify(config.data);
        config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

// 响应时拦截
axios.interceptors.response.use(function (response) {
    console.log('response=============',response);
    // 返回响应时做一些处理
    if (response.status == 200) {
        //成功
        var result = response.data;
        if (result.code == 200) {
            return {data: result.data}
        } else {
            return {status: 0, msg: result.msg}
        }
    } else {
        return {status: 0, msg: '请求错误'}
    }
}, function (error) {
    // 当响应异常时做一些处理
    return Promise.reject(error);
});


export const postRequest = (url, params) => {
    return axios({
        method: 'post',
        url: `${base}${url}`,
        data: params.data,
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    }).then(resp => {
        return resp;
    });
}

export const uploadFileRequest = (url, params) => {
    return axios({
        method: 'post',
        url: `${base}${url}`,
        data: params,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}

export const getRequest = (url, params) => {
    return axios({
        method: 'get',
        data: params,
        transformRequest: [function (data) {
            let ret = ''
            for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            }
            return ret
        }],
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        url: `${base}${url}`
    }).then(resp => {
        return resp;
    });
    ;
}
