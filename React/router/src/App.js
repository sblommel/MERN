import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter,
  Link,
  Switch,
  Route
} from "react-router-dom";
import Welcome from './components.jsx/Welcome';
import Hello from './components.jsx/Hello';
import Number from './components.jsx/Number'
import WordColor from './components.jsx/WordColor';



function App() {
  
  return (
    <BrowserRouter>
      <div className = "App">
      <h1>Routing assignment</h1>   
      
      <Switch>
        <Route exact path= "/">
        <h1>Routing click link below</h1>
        <Link to="/home"><button>Welcome Route</button></Link>
        <Link to="/hello">Hello Route</Link> 
        </Route>
        <Route path="/home">
          <Welcome></Welcome>
        </Route>
        <Route path="/:word">
          <Hello></Hello>
        </Route>
        <Route exact path="/:id">
          <Number></Number>
        </Route>
        <Route exact path = "/profile/:id">
            <WordColor></WordColor>
            </Route>
      </Switch>
      </div>
    </BrowserRouter>
  );
}
  
  

export default App;
