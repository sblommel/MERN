import logo from './logo.svg';
import './App.css';
import Person from './components/PersonCard'

function App() {
  return (
    <div className="App">
      <h3>Person Card with Functional Components</h3>
      <Person fname = {"Jane "} lname = {"Doe"} age = {45} hair = {"blonde"}></Person>
      <Person fname = {"Susan "} lname = {"Smith"} age = {35} hair = {"grey"}></Person>
      <Person fname = {"Brenda "} lname = {"Jones"} age = {25} hair = {"red"}></Person>
      <Person fname = {"Ginger "} lname ={"Rogers"} age = {55} hair = {"black"}></Person>
    </div>
  );
}

export default App;
