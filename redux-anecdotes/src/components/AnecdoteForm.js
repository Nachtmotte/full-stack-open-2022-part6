import { useDispatch } from "react-redux";
import { newAnecdote } from "../redux/actions/anecdoteActions";
import {
  hideNotification,
  showNotification,
} from "../redux/actions/notificationActions";

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const addAnecdote = (event) => {
    event.preventDefault();
    const content = event.target.content.value;
    event.target.content.value = "";
    dispatch(newAnecdote(content));
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
