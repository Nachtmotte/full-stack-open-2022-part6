export const showNotification = (message) => {
  return {
    type: "SHOW",
    data: { message },
  };
};

export const hideNotification = () => {
  return {
    type: "HIDE",
    data: {},
  };
};
