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
  ];

  return (
    <div style={{ position: 'static' }}>
      <RingContainer ringArray={ringArray} />
    </div>
  );
}

export default App;
