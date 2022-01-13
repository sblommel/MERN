import logo from './logo.svg';
import './App.css';
import PersonInfo from './components/PersonInfo';

function App() {
  return (
    <div className="App">
      <h1>Person Card</h1>
      <PersonInfo name = {"Jane Doe"} age = {45} hair = {"black"}></PersonInfo>
      <PersonInfo name = {"Bob Smith"} age = {40} hair = {"blonde"}></PersonInfo>
      <PersonInfo name = {"Connor Blue"} age = {20} hair = {"brown"}></PersonInfo>
      <PersonInfo name = {"Robyn Moore"} age = {18} hair = {"blue"}></PersonInfo>


    </div>
  );
}

export default App;
