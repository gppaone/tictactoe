import { useState } from 'react';
import './App.css';
// full square function
function Square(){
  const [value, setValue] = useState(null);

  function handleClick(){
    setValue('X');
  }
  return(
    <button className="square" onClick={ handleClick }>{ value }</button>
  );
}
// full board function
function Board(){
  const [squares,setSquares] = useState(Array(9).fill(null));
   
  return (
    <div className="gamegrid">
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
    </div>
  );
}

function App() {
  return(
    <Board />

  );
}

export default App;
