import Navbar from 'components/Navbar';
import Login from 'pages/Login';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Navbar />
          <Login />
        </div>
      </header>
    </div>
  );
}

export default App;
