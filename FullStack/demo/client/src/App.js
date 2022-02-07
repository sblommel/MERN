import logo from './logo.svg';
import './App.css';
import NewNinjaForm from './components/NewNinjaForm'; //importing the form we create
import{
  BrowserRouter,  //tells front end app to enable routing
  Switch,
  Route,
  Link
} from "react-router-dom";
import AllNinjas from './components/AllNinjas';
import OneNinja from './components/OneNinja';
import EditNinja from './components/EditNinja';
import React, {useState} from 'react';

// collect info from FORM when form submits, using axios to create new info
//state variables for form info
//onchange

function App() {

  let [newNinjaAdded, setNewNinjaAdded] = useState(false)//this variable send to form component so that whenever that form submits to create new ninja, this variable will update.
  //We also send this variable to Allninjas component.

  return (
    <BrowserRouter>
      <div className="App container">
        <h1>Hello Ninjas!</h1>
        <Link to ="/new"><button class="btn btn-success ">Add Ninja</button></Link>
          <Switch>
            <Route exact path= "/">
              <NewNinjaForm newNinjaAdded={newNinjaAdded} setNewNinjaAdded={setNewNinjaAdded}></NewNinjaForm>
              <hr />
              <AllNinjas newNinjaAdded={newNinjaAdded}></AllNinjas>
            </Route>
            <Route exact path = "/new">--this for going to new page to enter in new person
              <NewNinjaForm></NewNinjaForm>
            </Route>
            <Route exact path = "/ninjas/:id">
              <OneNinja></OneNinja>
            </Route>
            <Route exact path = "/ninjas/edit/:id">
              <EditNinja></EditNinja>
            </Route>
          </Switch>
        
      </div>
    </BrowserRouter>
    
  );
}

export default App;
