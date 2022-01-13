// import logo from './logo.svg';
// import './App.css';
import Menu from './components/MenuCard'

function App() {
  return (
    <div className="App">
    <Menu dish = {"Calamari"} price = {12.99} likes = {2}>
      <p>Description: Fried food</p>
    </Menu>
    <hr/>
    <Menu dish = {"Fish"} price = {10.99} likes = {3}>
      <p>Description: Healthy food</p>
    </Menu>
    <hr/>  
      
    </div>
  );
}

export default App;
