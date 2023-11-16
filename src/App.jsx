import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Square({value, onSquareClick}) {
  return <button className="square" onClick={onSquareClick}>{value}</button>;
}

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  function handleClick() {
    const nextSquares = squares.slice();
    nextSquares[0] = "X";
    setSquares(nextSquares);
  }
  return (
    <>
    <div className="board-row">
        <Square value={Square[0]} onSquareClick={handleClick}/>
        <Square value={Square[1]}/>
        <Square value={Square[2]}/>
      </div>
      <div className="board-row">
        <Square value={Square[3]}/>
        <Square value={Square[4]}/>
        <Square value={Square[5]}/>
      </div>
      <div className="board-row">
        <Square value={Square[6]}/>
        <Square value={Square[7]}/>
        <Square value={Square[8]}/>
      </div>
    </>
    
  )
}

export default App
