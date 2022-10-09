import './App.css';
import RingContainer from './components/rings-background/ring-container.component';

function App() {
  const ringArray = [
    {
      x: 100,
      y: 100,
      radius: 350,
      color: 'red',
    },
    {
      x: 200,
      y: 200,
      radius: 200,
      color: 'blue',
    },
    {
      x: 300,
      y: 300,
      radius: 50,
      color: 'black',
    },
  ];
  return (
    <div>
      <RingContainer ringArray={ringArray} />
    </div>
  );
}

export default App;
