import axios from 'axios'

axios.defaults.timeout = 1000000;

async function onFulfilled(response) {
  if (response.status === 200) {
    switch (response.data.statusCode) {
      case 10200:
        return response.data;
      case 10401:
        break;
      default:
        break;
    }
  }
  // await message.error(response.data.message || response.message || "请稍后再试");
  return Promise.reject(response.data);
}

async function onRejected(error) {
  let content = "请稍后再试";
  if (error.response) {
    if (error.response.status === 403) {
      content = error.response.data.message || "您无权限访问";
    } else if (typeof error.response.data !== 'string') {
      content = error.response.data.message || "操作失败";
    }
  }
  // await message.error(content);
  return Promise.reject(error); // 要调用 reject 方法，否则，会执行调用者的 then() 方法
}

const defaultInstance = axios.create({
  baseURL: process.env.VUE_APP_FRONT_CONTEXT_PATH
});

defaultInstance.interceptors.response.use(response => onFulfilled(response),
  error => onRejected(error));

export function defaultRequest(options) {
  return defaultInstance(options);
}

