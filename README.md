# React Redux

```bash
  npm install react-redux react-router-dom
```

## 순서

### store.js 생성

### Provider 연결
```js
import {Provider} from 'react-redux'
<Provider store={store}>
    <App />
</Provider>,
```
- index.js에서 ReactDOM 내부의 <App/>을 Provider로 감싸기

### getState
- `connect`, `mapStateToProps`
- component와 store를 연결
- 만약 Home.js에서 store 데이터를 사용하고 싶다?

```js
function mapStateToProps (state,ownProps){
  return {toDos: state};
}
// connect()는 getCurrentState로 리턴하는 값을
// Home에 props로 보내줌
export default connect(mapStateToProps)(Home);

```

### dispatch
- `mapDispatchToProps`