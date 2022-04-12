import { connect } from "react-redux";
//import { useSelector, useDispatch } from "react-redux";
import { updateAnecdote } from "../redux/actions/anecdoteActions";
import { setNotification } from "../redux/actions/notificationActions";

const AnecdoteList = (props) => {
  /*const anecdotes = useSelector((state) => {
    const filter = state.filter;
    return state.anecdotes
      .filter((anecdote) =>
        anecdote.content.toLowerCase().includes(filter.toLowerCase())
      )
      .sort((a, b) => b.votes - a.votes);
  });*/

  const anecdotesToShow = () => {
    const filter = props.filter;
    return props.anecdotes
      .filter((anecdote) =>
        anecdote.content.toLowerCase().includes(filter.toLowerCase())
      )
      .sort((a, b) => b.votes - a.votes);
  };

  //const dispatch = useDispatch();

  const vote = async ({ id, content, votes }) => {
    //dispatch(updateAnecdote(id, { content, votes: votes + 1 }));
    //dispatch(setNotification(`you voted '${content}'`, 5));
    props.updateAnecdote(id, { content, votes: votes + 1 });
    props.setNotification(`you voted '${content}'`, 5);
  };

  /*return (
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
  );*/

  return (
    <>
      {anecdotesToShow().map((anecdote) => (
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

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    filter: state.filter,
  };
};

const mapDispatchToProps = {
  updateAnecdote,
  setNotification,
};

const ConnectedAnecdoteList = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList);
export default ConnectedAnecdoteList;
