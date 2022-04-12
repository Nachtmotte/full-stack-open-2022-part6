import React from "react";
//import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { newAnecdote } from "../redux/actions/anecdoteActions";
import { setNotification } from "../redux/actions/notificationActions";

const AnecdoteForm = (props) => {
  //const dispatch = useDispatch();

  const addAnecdote = async (event) => {
    event.preventDefault();
    const content = event.target.content.value;
    event.target.content.value = "";
    //dispatch(newAnecdote(content));
    //dispatch(setNotification(`you added '${content}'`, 5));
    props.newAnecdote(content);
    props.setNotification(`you added '${content}'`, 5);
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

export default connect(null, { newAnecdote, setNotification })(AnecdoteForm);
