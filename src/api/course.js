import { get, post } from "./request";


export const fetchCourseList = params => post("/api/modules/course/courseList", params);


