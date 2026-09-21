import api from "./api";

export const getJobs = () => {
  return api.get("/jobs");
};

export const getJobById = (id) => {
  return api.get(`/jobs/${id}`);
};

export const applyJob = (id, data) => {
  return api.post(`/jobs/${id}/apply`, data);
};