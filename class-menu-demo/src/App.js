import logo from './logo.svg';
import './App.css';
import MenuItem from './components/MenuItem';

function App() {
    return (
      <div className="App">
         <h1>Dojo Diner-Fine Foods</h1>
         <MenuItem food = {"sushi"} price = {11.99} likes = {2}></MenuItem>
         <p>Can order spicy too</p>
         <em>Allergy info</em>
         <MenuItem food = {"crab"} price = {7.50} likes = {3}></MenuItem>
         <MenuItem food = {"fish"} price = {9.90} likes = {1}></MenuItem>
         {/* <MenuItem price = {15.99} food = {"Salmon"}></MenuItem>
         <hr>
         <MenuItem price = {12.99} food = {"Squash"}></MenuItem>
         </hr> */}
      </div>
  );
}

export default App;
