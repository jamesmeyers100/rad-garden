import http from "../http-common";

const getAllGardens = () => {
  return http.get("/garden");
};

const getGarden = (id) => {
  return http.get(`/garden/${id}`);
};

const createGarden = (data) => {
  return http.post("/garden", data);
};

const updateGarden = (id, data) => {
  return http.put(`/garden/${id}`, data);
};

const removeGarden = (id) => {
  return http.delete(`/garden/${id}`);
};

export default {
  getAllGardens,
  getGarden,
  createGarden,
  updateGarden,
  removeGarden,
};
