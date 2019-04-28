import { get } from "./request";

export const fetchUser = params => get("/test/users", params);
