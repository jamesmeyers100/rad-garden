import http from "./http-common";

const getAllUsers = () => {
  return http.get("/user");
};

const getUser = (id) => {
  return http.get(`/user/${id}`);
};

const createUser = (data) => {
  return http.post("/user", data);
};

const updateUser = (id, data) => {
  return http.put(`/user/${id}`, data);
};

const removeUser = (id) => {
  return http.delete(`/user/${id}`);
};

export { getAllUsers, getUser, createUser, updateUser, removeUser };
