import Die from './components/Die';
import './App.css';

function App() {
  return (
    <main>
      <div className='dieContainer'>
        <Die>1</Die>
        <Die>2</Die>
        <Die>3</Die>
        <Die>4</Die>
        <Die>5</Die>
        <Die>6</Die>
      </div>
    </main>
  );
}

export default App;
