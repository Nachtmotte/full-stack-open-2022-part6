const initialState = "";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_FILTER":
      return action.data.filter;
    default:
      return state;
  }
};

export default reducer;
