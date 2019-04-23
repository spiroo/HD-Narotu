import { post } from "./request";

//账号密码登陆
export const appLogin = params => post("/api/modules/auth/login", params);

//验证码图片POST /modules/password/getVerification
export const loginImg = params => post("/api/modules/password/getVerification", params);

export const dataCeshi = params => post("/api/modules/account/accountList", params);

// //账号密码登陆
// export const authinfo = params => post("modules/auth/login", params);

// //账号密码登陆
// export const checkFirstIntoHome = params => post("modules/auth/login", params);

// //账号密码登陆
// export const getVificationCode = params => post("modules/auth/login", params);

// //账号密码登陆
// export const login = params => post("modules/auth/login", params);

// //账号密码登陆
// export const login = params => post("modules/auth/login", params);

// //账号密码登陆
// export const login = params => post("modules/auth/login", params);
