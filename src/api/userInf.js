import { post } from "./request";
// 获取用户列表
export const accountList = params => post("/api/modules/account/accountList", params);
//获取用户详细信息POST /modules/account/accountDetail
export const accountDetail = params => post("/api/modules/account/accountDetail", params);