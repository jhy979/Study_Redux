import { createStore } from "redux";
const ADD = "ADD";
const DELETE = "DELETE";

export const addTodo = (text) => {
  return {
    type: ADD,
    text,
  };
};
export const deleteTodo = (id) => {
  return {
    type: DELETE,
    id,
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [{ type: ADD, text: action.text }];
    case DELETE:
      return state.filter((el) => el.id !== parseInt(action.id));
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
