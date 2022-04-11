import { useSelector, useDispatch } from "react-redux";
import { voteAnecdote } from "../redux/actions/anecdoteActions";
import {
  hideNotification,
  showNotification,
} from "../redux/actions/notificationActions";

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

  const vote = (anecdote) => {
    dispatch(voteAnecdote(anecdote.id));
    dispatch(showNotification(`you voted '${anecdote.content}'`));
    setTimeout(() => dispatch(hideNotification()), 5000);
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
