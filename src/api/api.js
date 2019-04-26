import { get, post } from "./request";

//登陆
<<<<<<< HEAD
export const login = login => post("/api/post/user/login", login);

=======
export const login=(login)=>post('/api/post/user/login',login);
>>>>>>> parent of 52fd49e... new
//上传
export const upload = upload => get("/api/get/upload", upload);
