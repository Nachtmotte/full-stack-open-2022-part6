const getId = () => (100000 * Math.random()).toFixed(0);

export const voteAnecdote = (id) => {
  return {
    type: "VOTE",
    data: { id },
  };
};

export const newAnecdote = (content) => {
  return {
    type: "NEW_ANECDOTE",
    data: {
      content,
      votes: 0,
      id: getId(),
    },
  };
};
