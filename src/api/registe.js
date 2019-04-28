import { get, post } from "./request";

// 获取用户列表
export const fetchRegiste = params => post("/api/modules/registe/roleUpdate ", params);