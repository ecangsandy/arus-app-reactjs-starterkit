import { axiosInstance } from "../config";

export const getListAnggota = async id => {
  const response = axiosInstance.get(`users/${id}/family`);

  return response;
};
export const getDetailAnggota = async (id, data) => {
  const response = axiosInstance.get(`users/${id}/family/${id}`);
  return response;
};
export const updateAnggota = async (id, data) => {
  const response = axiosInstance.put(`users/${id}/family/${id}`);
  return response;
};
export const deleteAnggota = async (id, data) => {
  const response = axiosInstance.delete(`users/${id}/family/${id}`);
  return response;
};
export const createAnggota = async id => {
  const response = axiosInstance.post(`users/${id}/family/`);
  return response;
};
