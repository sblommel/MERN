import logo from './logo.svg';
import './App.css';
import StarWars from './components/StarWars';
import Detail from './components/Details';
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <div className="App container">
      <h1>Star Wars API</h1>
        <StarWars></StarWars>
        <Switch>
          <Route exact path = "/:category/:id">
          <Detail></Detail>
          </Route>
          </Switch> 
                    
    </div>
    </BrowserRouter>
  );
}

export default App;
