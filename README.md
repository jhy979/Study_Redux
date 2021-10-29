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
const onChange = () => {
  console.log("there was a change");
  number.innerText = countStore.getState();
};
store.subscribe(onChange);
```

4. replaceReducer :

---

## Reducer

- reducer : data를 modify 하는 역할 (오직 여기서만 data를 바꿀 수 있음.)
- return 값이 앱의 data가 됨
- never mutate state, 반드시 새롭게 만드는 것!

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
store.dispatch({ type: "ADD" });
store.dispatch({ type: "MINUS" });
```

- 위의 코드도 좋지만, 디버깅을 위해 ADD와 MINUS라는 상수를 만들어줍니다.

```js
const ADD = "ADD";
store.dispatch({ type: ADD });
```
---
## Redux 생성 순서 정리 (주관적으로) 

1. Reducer 생성
    ```js
    const reducer = (state=[],action) =>{
      switch(action.type){
        ...
      }
    }
    ```
2. Store 생성
    ```js
    const store = createStore(reducer)
    ```
3. 어떤 Action들을 만들 것인지 생각
  - 각 Action에 맞는 상수 생성 
    ```js
    const ADD_TODO = "ADD_TODO"
    ```
  - 각 Action Type을 반환하는 함수 생성
    ```js
    const addTodo = (text)=>{
      return {
        type: ADD_TODO,
        text
      }
    }
    ```
  - 각 Action을 dispatch하는 함수 생성 
    ```js
    const dispatchAddTodo = (text)=>{
      store.dispatch(addTodo(text))
    }
    ```

4. store.subscribe()로 store 변동 시 원하는 동작 구현 