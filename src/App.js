import './App.css';
import RingContainer from './components/rings-background/ring-container.component';

function App() {
  const ringArray = [
    {
      x: 100,
      y: 100,
      radius: 350,
      color: 'blue',
    },
    {
      x: 250,
      y: 250,
      radius: 50,
      color: 'black',
    },
    {
      x: 400,
      y: 510,
      radius: 300,
      color: 'red',
    },
  ];

  return (
    <div>
      <RingContainer ringArray={ringArray} />
      <div style={{ position: 'absolute' }}>
        <h1>hello world</h1>
      </div>
    </div>
  );
}

export default App;
