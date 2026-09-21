export const capitalize = (text) =>
  text.charAt(0).toUpperCase() + text.slice(1);

export const truncate = (text, max) =>
  text.length > max
    ? `${text.substring(0, max)}...`
    : text;

export const scrollTop = () =>
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });