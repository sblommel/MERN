import logo from './logo.svg';
import './App.css';
import Crypto from './components/Crypto';
import CryptoAxios from './components/CryptoAxios';
import CryptoUseEffect from './components/CryptoUseEffect';
// import CryptoSearch from './components/CryptoSearch';

function App() {
  return (
    <div className="App">
      <h1>Crypto API</h1>
      {/* <Crypto></Crypto> */}
      <CryptoAxios></CryptoAxios>
      {/* <CryptoUseEffect></CryptoUseEffect> */}
      {/* <CryptoAxiosSerach></CryptoAxiosSearch> */}

    </div>
  );
}

export default App;
