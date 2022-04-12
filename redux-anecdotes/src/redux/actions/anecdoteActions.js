export const updateAnecdote = (anecdote) => {
  return {
    type: "UPDATE_ANECDOTE",
    data: anecdote,
  };
};

export const newAnecdote = (anecdote) => {
  return {
    type: "NEW_ANECDOTE",
    data: anecdote,
  };
};

export const initializeAnecdotes = (anecdotes) => {
  return {
    type: "INIT_ANECDOTES",
    data: anecdotes,
  };
};
