import { get, post } from "./request";

// 获取用户列表
export const fetchRoleList = params => post("/api/modules/registe/roleList ", params);