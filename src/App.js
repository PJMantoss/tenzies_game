import { useState, useEffect } from 'react';
import Die from './components/Die';
import {nanoid} from 'nanoid';
import Confetti from 'react-confetti';
import './App.css';

function App() {
  const [diceNumbers, setDiceNumbers] = useState(allNewDice);
  const [tenzies, setTenzies] = useState(false);

  function generateNewDice(){
    return {
        value: Math.floor(Math.random() * 6) + 1, 
        isHeld: false,
        id: nanoid()
    }
  }

  function allNewDice(){
    let arr = [];
    arr.length = 10;
    for(let i=0; i<arr.length; i++){
      arr.push(generateNewDice());
    }

    return arr;
  };

  allNewDice();

  function rollDice(){
    /*
    Roll all new dice, but do NOT roll
    those that are being held
    */
   if(!tenzies){
    setDiceNumbers(oldDice => oldDice.map(die => {
      return die.isHeld ? 
          die : 
          generateNewDice()
    }));
   } else {
    setTenzies(false);
    setDiceNumbers(allNewDice());
   }
    
  };

  function holdDice(id){
    /* 
    flip the 'isHeld' property on the object in the array
    that was clicked based on the 'id' prop that was passed
    into the function
     */  
    setDiceNumbers(oldDice => oldDice.map(die => {
      return die.id === id ? 
          {...oldDice, isHeld: !die.isHeld} : 
          die
    }));
  };

  useEffect(() => {
    const allHeld = diceNumbers.every(dice => dice.isHeld);
    const firstValue = diceNumbers[0].value;
    const allSame = diceNumbers.every(dice => dice[0].value === firstValue);
    if(allHeld && allSame){
      setTenzies(true);
    };
    
  }, [diceNumbers]);

  return (
    <main>
      {tenzies && <Confetti />}
      <h1 className='title'>Tenzies</h1>
      <p className='instructions'>Roll until all dice are the same. Click each die to freeze it
      at its current value between rolls.</p>

      <div className='diceContainer'>
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
        {tenzies ? "New Game" : "Roll"}
      </button>
    </main>
  );
}

export default App;
