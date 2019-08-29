
import request from "../utils/require"
// 添加班级
export let create = (code:any) => {
  return request.put("class/create", code);
};


// 班级列表
export let lists = (code:any) => {
  return request.get("class/lists", code);
};


//添加重点名单
export let addStudent = (code:any) => {
  return request.put("student/add", code);
};

//重点名单列表
export let studentlists = (params:any) => {
  return request.get("student/lists", {params});
};

//添加成绩
export let addrecord = (code:any) => {
  return request.put("student/addrecord", code);
};

// 成绩列表
export let recordlists = (params:any) => {
  return request.get("student/recordlists", {params});
};

