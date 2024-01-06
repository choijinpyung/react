import logo from './logo.svg';
import './App.css';

function App() {  //return문 하나에 태그 하나만 쓸 수 있음<div></div>쓰고 아래에 또 <div></div>쓸 수 없음 
  return (
    <div className="App">
      <h3 className='alert alert-info'>오늘부터 리액트 시작!</h3>
    </div>
  );
}

export default App;
