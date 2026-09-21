import { useState } from "react";
import { submitContactForm } from "../services/contactService";

const getErrorMessage = (err) => {
  const backendMessage = err?.response?.data?.message;

  if (backendMessage) {
    return backendMessage;
  }

  if (typeof err?.response?.data === "string") {
    return err.response.data;
  }

  return err?.message || "Unable to send message.";
};

export default function useContact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const sendMessage = async (values) => {
    try {
      setLoading(true);
      setError("");
      setSuccess(false);

      await submitContactForm(values);

      setSuccess(true);

      return true;
    } catch (err) {
      setSuccess(false);
      setError(getErrorMessage(err));
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    success,
    error,
    sendMessage,
  };
}