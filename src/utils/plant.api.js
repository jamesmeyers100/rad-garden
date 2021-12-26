import http from "./http-common";

const getAllPlants = () => {
  return http.get("/plant");
};

const getPlant = (id) => {
  return http.get(`/plant/${id}`);
};

const createPlant = (data) => {
  return http.post("/plant", data);
};

const updatePlant = (id, data) => {
  return http.put(`/plant/${id}`, data);
};

const removePlant = (id) => {
  return http.delete(`/plant/${id}`);
};

export { getAllPlants, getPlant, createPlant, updatePlant, removePlant };
