import api from "./api";

export const sendContactMessage = (data) => {
  return api.post("/api/contact", data);
};