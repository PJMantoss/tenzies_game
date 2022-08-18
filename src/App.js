import { useState } from 'react';
import Die from './components/Die';
import {nanoid} from 'nanoid';
import './App.css';

function App() {
  const [diceNumbers, setDiceNumbers] = useState(allNewDice);

  function allNewDice(){
    let arr = [];
    arr.length = 10;
    for(let i=0; i<arr.length; i++){
      arr.push({
        value: Math.floor(Math.random() * 6) + 1, 
        isHeld: false,
        id: nanoid()
      });
    }

    return arr;
  };

  allNewDice();

  function rollDice(){
    setDiceNumbers(allNewDice);
  };

  return (
    <main>
      <div className='dieContainer'>
        {diceNumbers.map((diceNum, idx) => {
          return <Die value={diceNum.value} key={diceNum.id} isHeld={diceNum.isHeld}/>
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
