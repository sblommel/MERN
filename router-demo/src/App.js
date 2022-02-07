import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter,
  Link, //link is like an anchor tag but won't reload whole page
  Switch, //tells application which routes are available and can switch in and out of 
  Route //route tag to specify a specific route for a component
} from "react-router-dom";
import Profile from './components.jsx/Profile';
import Group from './components.jsx/Group';
import Info from './components.jsx/UseParams';
import { useParams } from './components.jsx/UseParams';
    
function App() {
  return (
    <BrowserRouter>  
    {/* Browser Router is now the parent */}
      <div className= "App">
      <h1>Routing Example-BookFace</h1>
      <p>
        <Link to = "/"><button>Go home</button></Link>
        <Link to="/profile">Go to my profile</Link>
         | 
        <Link to="/groups">Go to Groups Page</Link>
        <Switch>
          {/* inside of Switch tag we can render at specific routes only */}
          <Route path = "/profile">
          <Profile></Profile>
          </Route>
          <Route path = "/groups">
          <Group></Group>
          </Route>
          <Route path = "/">
            <p>Property of BookFace</p>
            </Route>
          </Switch>
             {/* {<Switch> -this for UseParams Example
               <Route exact path = "/profile/:id">
                 <Info></Info>

               </Route>

             </Switch>/*  */} 
      </p>
      </div>
    </BrowserRouter>
  );
}
    
export default App;


