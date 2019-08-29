import axios from "axios";
import {getCookie} from './index.ts';
console.log(getCookie)

const service=axios.create({
  // baseURL: "http://148.70.121.59:9001",
  baseURL:'',
  timeout:5000
})

service.interceptors.request.use(
  config=>{
    if(getCookie()){
      config.headers['authorization']=getCookie() 
    }
    return config
  },
  error=>{
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response=>response.data,
  error=>{
    return Promise.reject(error)
  }
)

export default service;
