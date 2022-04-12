const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_ANECDOTE": {
      const updatedAnecdote = action.data;
      return state.map((anecdote) =>
        anecdote.id !== updatedAnecdote.id ? anecdote : updatedAnecdote
      );
    }
    case "NEW_ANECDOTE":
      return state.concat(action.data);
    case "INIT_ANECDOTES":
      return action.data;
    default:
      return state;
  }
};

export default reducer;
