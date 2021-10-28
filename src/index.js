import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

// reducer : data를 modify 하는 역할 (오직 여기서만 data를 바꿀 수 있음.)
// return 값이 앱의 data가 됨
const reducer = (count = 0, action) => {
  if (action.type==="ADD")
    return count+1;
  else if (action.type==="MINUS")
    return count-1;
  else 
    return count;
};

// store : data를 넣는 곳
// store 생성 시 reducer(함수)가 필요
// countStore 객체는 4개의 함수가 있음.
const countStore = createStore(reducer);

// store에 dispatch로 원하는 actioh(객체)을 보내줍니다.
countStore.dispatch({type: "ADD"})
countStore.dispatch({type: "MINUS"})

const onChange = () =>{
  console.log("there was a change")
  number.innerText = countStore.getState();
}
countStore.subscribe(onChange)

add.addEventListener("click",()=>{
  countStore.dispatch({type: "ADD"})
});
minus.addEventListener("click",()=>{
  countStore.dispatch({type: "MINUS"})
});