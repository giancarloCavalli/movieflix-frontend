import LoginCard from 'components/LoginCard';
import Navbar from 'components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Navbar />
          <LoginCard />
        </div>
      </header>
    </div>
  );
}

export default App;
