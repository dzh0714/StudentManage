
import request from "../utils/require"
// 登陆接口
export let login = (code:any) => {
  return request.post("/teacher/login", code);
};

//注册接口
export let register = (code:any) => {
  return request.post("/teacher/register", code);
};

//检查用户信息
export let checkuser = (code:any) => {
  return request.get("/teacher/checkuser", code);
};
