export const isValidEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const minLength = (value, length) =>
  value.trim().length >= length;

export const isEmpty = (value) =>
  value.trim() === "";