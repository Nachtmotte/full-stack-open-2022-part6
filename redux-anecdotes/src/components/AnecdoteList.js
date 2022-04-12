import { useSelector, useDispatch } from "react-redux";
import { updateAnecdote } from "../redux/actions/anecdoteActions";
import { setNotification } from "../redux/actions/notificationActions";

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => {
    const filter = state.filter;
    return state.anecdotes
      .filter((anecdote) =>
        anecdote.content.toLowerCase().includes(filter.toLowerCase())
      )
      .sort((a, b) => b.votes - a.votes);
  });
  const dispatch = useDispatch();

  const vote = async ({ id, content, votes }) => {
    dispatch(updateAnecdote(id, { content, votes: votes + 1 }));
    dispatch(setNotification(`you voted '${content}'`, 5));
  };

  return (
    <>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default AnecdoteList;
