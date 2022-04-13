import Card from './components/Card';
import './App.scss';

function App() {
  return (
    <main>
      <h1 style={{ opacity: 0 }}>Main heading</h1>
      <div className="app">
        <Card />
      </div>
    </main>
  );
}

export default App;
