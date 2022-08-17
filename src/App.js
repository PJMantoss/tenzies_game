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

  function rollDice(){
    setDiceNumbers(diceNumbers.value);
  };

  return (
    <main>
      <div className='dieContainer'>
        {diceNumbers.value.map((diceNum, idx) => {
          return <Die value={diceNum} key={idx} />
        })}
      </div>
      <button 
        className='roll-dice' 
        onClick={rollDice}
      >
        Roll
      </button>
    </main>
  );
}

export default App;
