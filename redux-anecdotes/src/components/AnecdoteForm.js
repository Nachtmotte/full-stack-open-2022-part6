import { useDispatch } from "react-redux";
import anecdoteService from "../services/anecdotes";
import { newAnecdote } from "../redux/actions/anecdoteActions";
import {
  hideNotification,
  showNotification,
} from "../redux/actions/notificationActions";

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const addAnecdote = async (event) => {
    event.preventDefault();
    const content = event.target.content.value;
    event.target.content.value = "";
    const anecdoteCreated = await anecdoteService.createNew(content);
    dispatch(newAnecdote(anecdoteCreated));
    dispatch(showNotification(`you added '${content}'`));
    setTimeout(() => dispatch(hideNotification()), 5000);
  };

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input name="content" />
        </div>
        <button type="submit">create</button>
      </form>
    </>
  );
};

export default AnecdoteForm;
