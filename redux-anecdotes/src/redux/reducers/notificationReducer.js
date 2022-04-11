const initialState = { message: "", view: false };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW":
      return { message: action.data.message, view: true };
    case "HIDE":
      return initialState;
    default:
      return state;
  }
};

export default reducer;
