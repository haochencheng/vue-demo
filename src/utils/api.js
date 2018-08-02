import axios from 'axios'

let base = 'http://58.87.64.219';

import qs from 'qs';

axios.interceptors.request.use( (config) => {
    if (config.method=="post"){
        config.data = qs.stringify(config.data);
        config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    }
    return config;
},  (error) => {
    return Promise.reject(error);
});

export const postRequest = (url, params) => {
    console.log(' params.data', params.data);
    return axios({
        method: 'post',
        url: `${base}${url}`,
        data: params.data,
        headers: {
            'Content-Type': 'multipart/form-data',
        }
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
    });
}
