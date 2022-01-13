import logo from './logo.svg';
import './App.css';
import PersonInfo from './components/PersonInfo';

function App() {
  return (
    <div className="App">
      <h1>Person Card</h1>
      <PersonInfo fname = {"Jane "} lname = {"Doe"} age = {"45"} hair = {"black"}></PersonInfo>
      <PersonInfo fname = {"Bob "} lname = {"Smith"} age = {"40"} hair = {"blonde"}></PersonInfo>
      <PersonInfo fname = {"Connor "} lname = {"Blue"} age = {"20"} hair = {"brown"}></PersonInfo>
      <PersonInfo fname = {"Robyn "} lname = {"Moore"} age = {"18"} hair = {"blue"}></PersonInfo>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
