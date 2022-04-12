export const setNotification = (message, seconds) => {
  return async (dispatch) => {
    dispatch({
      type: "SHOW",
      data: { message },
    });
    await new Promise((resolve) => {
      setTimeout(() => 
          resolve(
            dispatch({
              type: "HIDE",
              data: {},
            })
          ),
        seconds * 1000
      );
    });
  };
};
