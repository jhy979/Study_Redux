import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../store";

function Home({props,dispatch}) {
  console.log(props)
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setText("");
    dispatch(addTodo(text))
  };

  return (
    <div>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange}></input>
        <button>Add</button>
      </form>
      <ul></ul>
    </div>
  );
}

// 
function mapStateToProps (state,ownProps){
  return {toDos: state};
}

function mapDispatchToProps(dispatch, ownProps){
    return {
      dispatch
    }
}
// connect()는 getCurrentState로 리턴하는 값을
// Home에 props로 보내줌
export default connect(mapStateToProps)(Home);
