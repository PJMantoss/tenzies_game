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

  function holdDice(id){
    /* 
    flip the 'isHeld' property on the object in the array
    that was clicked based on the 'id' prop that was passed
    into the function
     */  
    setDiceNumbers(oldDice => oldDice.map(() => {
      
    }));
  };

  return (
    <main>
      <div className='dieContainer'>
        {diceNumbers.map(diceNum => {
          return <Die 
                    value={diceNum.value} 
                    key={diceNum.id} 
                    isHeld={diceNum.isHeld}
                    holdDice={() => holdDice(diceNum.id)}
                  />
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
