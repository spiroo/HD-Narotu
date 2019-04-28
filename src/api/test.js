import { get, post } from "./request";


export const fetchTestUser = params => get("/test/users", params);
