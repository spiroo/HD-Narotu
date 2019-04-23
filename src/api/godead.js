import { post } from "./request";

//登陆
export const getTableList = pageInfo => post("/api/modules/depart/accountLsinfoList", pageInfo);
