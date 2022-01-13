import logo from './logo.svg';
import './App.css';
import PetForm from './components/PetForm';

function App() {
  return (
    <div className="App container"> 
    {/* adding container getting from Bootstrap allows the field boxes to be more rounded and attractive  */}
      <h1>Hello world</h1>
      <PetForm></PetForm>
      
    </div>
  );
}

export default App;
