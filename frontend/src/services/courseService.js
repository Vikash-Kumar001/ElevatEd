import API from "./api";

export const getAllCourses = () => API.get("/courses");
export const getCourseDetails = (id) => API.get(`/courses/${id}`);
export const enrollInCourse = (id) => API.post(`/courses/${id}/enroll`);
export const createCourse = (data) => API.post("/courses", data);
export const uploadLecture = (courseId, lectureData) =>
  API.post(`/courses/${courseId}/lectures`, lectureData);
