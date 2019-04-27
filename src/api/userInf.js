import { post } from "./request";
// 获取用户列表
export const accountList = params => post("/api/modules/account/accountList", params);