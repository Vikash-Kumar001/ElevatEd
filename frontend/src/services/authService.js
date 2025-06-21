import API from "./api";

export const login = (credentials) => API.post("/auth/login", credentials);
export const register = (data) => API.post("/auth/register", data);
export const resetPassword = (email) =>
  API.post("/auth/reset-password", { email });
export const getProfile = () => API.get("/auth/profile");
