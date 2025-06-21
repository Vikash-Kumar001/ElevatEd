import API from './api';

export const getAllUsers = () => API.get('/admin/users');
export const getAllInstructors = () => API.get('/admin/instructors');
export const getAllStudents = () => API.get('/admin/students');


