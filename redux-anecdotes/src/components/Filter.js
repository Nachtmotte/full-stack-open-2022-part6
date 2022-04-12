import React from "react";
import { connect } from "react-redux";
//import { useDispatch } from "react-redux";
import { updateFilter } from "../redux/actions/filterActions";

const Filter = (props) => {
  //const dispatch = useDispatch();

  const handleChange = (event) => {
    //dispatch(updateFilter(event.target.value));
    props.updateFilter(event.target.value);
  };
  const style = {
    marginBottom: 10,
  };

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  );
};

export default connect(null, { updateFilter })(Filter);
