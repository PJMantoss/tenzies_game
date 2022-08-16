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
        <Die value={2} />
        <Die value={3} />
        <Die value={4} />
        <Die value={5} />
        <Die value={6} />
        <Die value={7} />
        <Die value={8} />
        <Die value={9} />
        <Die value={10} />
      </div>
    </main>
  );
}

export default App;
