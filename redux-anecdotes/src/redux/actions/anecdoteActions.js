import anecdoteService from "../../services/anecdotes";

export const updateAnecdote = (id, anecdote) => {
  return async (dispatch) => {
    const updatedAnecdote = await anecdoteService.update(id, anecdote);
    dispatch({
      type: "UPDATE_ANECDOTE",
      data: updatedAnecdote,
    });
  };
};

export const newAnecdote = (content) => {
  return async (dispatch) => {
    const anecdoteCreated = await anecdoteService.createNew(content);
    dispatch({
      type: "NEW_ANECDOTE",
      data: anecdoteCreated,
    });
  };
};

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();
    dispatch({
      type: "INIT_ANECDOTES",
      data: anecdotes,
    });
  };
};
