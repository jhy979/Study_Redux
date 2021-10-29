import { createStore } from "redux";
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

// 액션들
const addToDo = (text) => {
  return { type: ADD_TODO, text };
};
const deleteToDo = (id) => {
  return { type: DELETE_TODO, id };
};

// 리듀서
const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE_TODO:
      return state.filter((toDO) => toDO.id !== parseInt(action.id));
    default:
      return state;
  }
};

// 스토어 생성 
const store = createStore(reducer);

// 리듀서에게 액션 보내기
const dispatchAddToDo = (text) => {
  store.dispatch(addToDo(text));
};
const dispatchDeleteToDo = (e) => {
  const id = e.target.parentNode.id;
  store.dispatch(deleteToDo(id));
};

// 추가 버튼 클릭
const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  if (toDo === "") return;
  dispatchAddToDo(toDo);
};

// li 추가
const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.forEach((toDo) => {
    const li = document.createElement("li");
    li.id = toDo.id;
    li.innerText = toDo.text;
    ul.appendChild(li);
    const btn = document.createElement("button");
    btn.innerText = "delete";
    btn.addEventListener("click", dispatchDeleteToDo);
    li.appendChild(btn);
  });
};

// store 변동 시 다시 li 렌더링
store.subscribe(paintToDos);

// submit 작동 시 함수 호출
form.addEventListener("submit", onSubmit);
