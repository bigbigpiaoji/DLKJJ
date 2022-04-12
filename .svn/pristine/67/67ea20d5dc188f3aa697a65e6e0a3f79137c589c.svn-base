import axios from 'axios';
import router from '@/router';
import Cookies from 'js-cookie';
const CancelToken = axios.CancelToken;
Cookies.set('JSESSIONID', '48178474E186D667D6C9C0008A11C7DD');
// 创建一个错误

function errorCreate(msg) {
  const err = new Error(msg);
  errorLog(msg);
  throw err;
}

// 记录和显示错误

function errorLog(msg) {
  // 打印到控制台
  if (process.env.NODE_ENV === 'development') {
    console.log(msg);
  }
}

// 创建一个 axios 实例
const service = axios.create({
  baseURL: CONFIG.baseUrl,
  timeout: 15000,
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {

    const token = Cookies.get('token');
    if (token) {
      // 根据token做对应的逻辑
      // config.headers['access-token'] = token;
    }
    // config.headers['Origin'] = 'http://218.19.148.221';
    config.cancelToken = new CancelToken((c) => {
      config['cancel'] = c;
    });

    // Referer:http://218.19.148.221/zc/?code=YylByGa2uFD6-18xjObZ14EjLv6ojpn7MxIZ-G8c0gM&state=STATE
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    // dataAxios 是 axios 返回数据中的 data
    const dataAxios = response.data;
    const {
      code
    } = dataAxios;
    // console.log('code', code);

    if (code === 1) {
      return dataAxios;
    } else if (code === 0) {
      errorCreate(`${dataAxios.note}: ${response.config.url}`);
      return Promise.reject(dataAxios);
    } else {
      return dataAxios;
    }

    // if(code === undefined){
    //     return dataAxios;
    // }
    // errorCreate(`${dataAxios.note}: ${response.config.url}`);
    // return dataAxios;
  },
  (error) => {
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          error.message = '请求错误';
          break;
        case 401:
          error.message = '未授权，请登录';
          Cookies.remove('token');
          // 重新登录
          // router.replace({
          //   name: 'login',
          //   query: {
          //     redirect: router.currentRoute.fullPath
          //   },
          // });
          break;
        case 403:
          error.message = '拒绝访问';
          break;
        case 404:
          error.message = `请求地址出错: ${error.response.config.url}`;
          break;
        case 408:
          error.message = '请求超时';
          break;
        case 500:
          error.message = '服务器内部错误';
          break;
        case 501:
          error.message = '服务未实现';
          break;
        case 502:
          error.message = '网关错误';
          break;
        case 503:
          error.message = '服务不可用';
          break;
        case 504:
          error.message = '网关超时';
          break;
        case 505:
          error.message = 'HTTP版本不受支持';
          break;
        default:
          break;
      }
    }
    errorLog(error.message);
    return Promise.reject(error);
  }
);

export default service;