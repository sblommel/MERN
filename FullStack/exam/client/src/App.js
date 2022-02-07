import logo from './logo.svg';
import './App.css';

import{
  BrowserRouter,  //tells front end app to enable routing
  Switch,
  Route,
  Link
} from "react-router-dom";
import AllPets from './components/AllPets';
import OnePet from './components/OnePet';
import EditPet from './components/EditPet';
import NewPet from './components/NewPet';
import React, {useState} from 'react';

function App() {

  return (
    <BrowserRouter>
      <div className="App container">
        <h1>Pet Shelter</h1>
        
         
          <Switch>
            <Route exact path= "/">
            <Link to ="/pets/new">Add A Pet to the Shelter</Link>
            <AllPets></AllPets>
              
            </Route>
            <Route exact path = "/pets/new"> 
            <Link to ="/">Back to Home</Link>
            <h3>Know a pet needing a good home</h3>
            
              <NewPet></NewPet>
              
            </Route>
            <Route exact path = "/pets/:id">
            <Link to ="/">Back to home</Link>
              <OnePet></OnePet>
            </Route>
            <Route exact path = "/pets/:id/edit">
            <Link to ="/">Back to Home</Link>
              <EditPet></EditPet>
              
            </Route>  
            </Switch> 
        
      </div>
    </BrowserRouter>
    
  );
}
  

export default App;
