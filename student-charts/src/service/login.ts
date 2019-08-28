
import request from "../utils/require"
// 登陆接口
export let login = code => {
  return request.post("/emstu/teacher/login", { code });
};

