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
      x: 40,
      y: 10,
      radius: 30,
      color: 'red',
    },
  ];

  return (
    <div>
      <RingContainer ringArray={ringArray} />
      <div style={{ zIndex: 10, position: 'absolute' }}>
        <h1>hello world</h1>
      </div>
    </div>
  );
}

export default App;
