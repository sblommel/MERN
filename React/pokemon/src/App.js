import logo from './logo.svg';
import './App.css';
import Pokemon from './components/Pokemon'
import PokemonAxios from './components/PokemonAxios';

function App() {
  return (
    <div className="App">
      <h1>Pokemon API</h1>
      {/* <Pokemon></Pokemon> */}
      <PokemonAxios></PokemonAxios>
    </div>
  );
}

export default App;
