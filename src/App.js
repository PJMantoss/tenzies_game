import Die from './components/Die';
import './App.css';

function App() {

  const allNewDice = () => {
    let arr = [];
    arr.length = 10;
    for()
  };

  return (
    <main>
      <div className='dieContainer'>
        <Die value={1} />
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
