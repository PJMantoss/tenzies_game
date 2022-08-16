import { useState } from 'react';
import Die from './components/Die';
import './App.css';

function App() {
  const [diceNumbers, setDiceNumbers] = useState(allNewDice);

  const allNewDice = () => {
    let arr = [];
    arr.length = 10;
    for(let i=0; i<arr.length; i++){
      arr[i] = Math.floor(Math.random() * 6) + 1;
    }

    return setDiceNumbers(arr);
  };

  allNewDice();

  return (
    <main>
      <div className='dieContainer'>
        {diceNumbers.map(diceNum => {
          return <Die value={diceNum} />
        })}
      </div>
    </main>
  );
}

export default App;
