import { get, post } from "./request";

// 获取用户列表
export const fetchDetailList = params => post("/api/modules/registe/roleDetail  ", params);