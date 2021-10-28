# Vanilla Redux

> Redux에 대한 이해를 높이기 위한 학습 공간입니다.

## Store

- store : data를 넣는 곳.
- store 생성 시 reducer(함수)가 필요.
- Store 객체는 4개의 함수가 있음.

```js
const countStore = createStore(reducer);
```
### 4개의 함수
1. dispatch : Action을 reducer에게 보냄.
2. getState : data를 가져옴.
3. subscribe : store 내부의 변화를 알 수 있게 해줌.
```js
const onChange = () =>{
  console.log("there was a change")
  number.innerText = countStore.getState();
}
store.subscribe(onChange)
```
4. replaceReducer : 
---

## Reducer

- reducer : data를 modify 하는 역할 (오직 여기서만 data를 바꿀 수 있음.)
- return 값이 앱의 data가 됨

```js
const reducer = (count = 0) => {
  return count;
};
```

---
## Action
- reducer에게 data를 변동시키는 특정 행동(함수)을 말합니다.
- Action을 보낼 때에는 반드시 객체 형태로 보내야합니다.
```js
// store에 dispatch로 원하는 actioh(객체)을 보내줍니다.
store.dispatch({type: "ADD"})
store.dispatch({type: "MINUS"})
```
