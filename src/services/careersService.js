import * as careersApi from "../api/careersApi";

export const fetchJobs = async () => {
  const response = await careersApi.getJobs();
  console.log(response)
  return response.data;
};

export const fetchJob = async (id) => {
  const response = await careersApi.getJobById(id);
  return response.data;
};

export const submitApplication = async (id, data) => {
  const response = await careersApi.applyJob(id, data);
  return response.data;
};