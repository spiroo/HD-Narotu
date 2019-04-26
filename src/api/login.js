import { post } from "./request";

//账号密码登陆
export const appLogin = params => post("/api/modules/auth/login", params);

//验证码图片POST /modules/password/getVerification
export const loginImg = params => post("/api/modules/password/getVerification", params);

export const dataCeshi = params => post("/api/modules/account/accountList", params);


