import { sendContactMessage } from "../api/contactApi";

export const submitContactForm = async (formData) => {
  const payload = {
    name: formData.name.trim(),
    email: formData.email.trim().toLowerCase(),
    company: formData.company?.trim() || "",
    message: formData.message.trim(),
  };

  const response = await sendContactMessage(payload);
  return response.data;
};