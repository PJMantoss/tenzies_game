import { useState } from 'react';
import Die from './components/Die';
import './App.css';

function App() {
  const [diceNumbers, setDiceNumbers] = useState(allNewDice);

  function allNewDice(){
    let arr = [];
    arr.length = 10;
    for(let i=0; i<arr.length; i++){
      arr[i] = Math.floor(Math.random() * 6) + 1;
    }

    return arr;
  };

  allNewDice();

  return (
    <main>
      <div className='dieContainer'>
        {diceNumbers.map((diceNum, idx) => {
          return <Die value={diceNum} key={idx} />
        })}
      </div>
      <button onClick={handleClick}>Roll</button>
    </main>
  );
}

export default App;
