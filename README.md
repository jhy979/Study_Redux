# Vanilla Redux
> Redux에 대한 이해를 높이기 위한 학습 공간입니다.

## Store
- store : data를 넣는 곳
- store 생성 시 reducer(함수)가 필요
- Store 객체는 4개의 함수가 있음.
```js
const countStore = createStore(reducer);
```
---
## Reducer
- reducer : data를 modify 하는 역할 (오직 여기서만 data를 바꿀 수 있음.)
- return 값이 앱의 data가 됨
```js
const reducer = (count=0)=>{
  return count
}
```
---
