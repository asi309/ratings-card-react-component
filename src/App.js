import Card from './components/Card';
import './App.scss';

function App() {
  return (
    <main>
      <div className="app">
        <h1 style={{ opacity: 0, width: 0 }}>Main heading</h1>
        <Card />
      </div>
    </main>
  );
}

export default App;
