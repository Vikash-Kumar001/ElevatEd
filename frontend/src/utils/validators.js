export const isValidEmail = (email) => {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
};

export const isStrongPassword = (password) => {
  return password.length >= 6;
};

export const isEmpty = (value) => {
  return !value || value.trim() === "";
};
