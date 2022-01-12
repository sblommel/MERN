import logo from './logo.svg';
import './App.css';
import MenuItem from './components/MenuItem';

function App() {
  return (
    <div className="App">
      <h1>Dojo Diner-Fine Foods</h1>
      <MenuItem price = {15.99} food = {"Salmon"}></MenuItem>
      <hr>
      <MenuItem price = {12.99} food = {"Squash"}></MenuItem>
      </hr>
    </div>
  );
}

export default App;
