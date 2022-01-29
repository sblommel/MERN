import './App.css';

import NewAuthor from './components/NewAuthor'; //importing the form we create
import{
  BrowserRouter,  //tells front end app to enable routing
  Switch,
  Route,
  Link
} from "react-router-dom";
import AllAuthors from './components/AllAuthors';
// import OneAuthor from './components/OneAuthor';
import EditAuthor from './components/EditAuthor';
import React, {useState} from 'react';

// collect info from FORM when form submits, using axios to create new info
//state variables for form info
//onchange

function App() {

  // let [newProductAdded, setNewProductAdded] = useState(false)//this variable send to form component so that whenever that form submits to create new ninja, this variable will update.
  // //We also send this variable to Allninjas component.

  return (
    <BrowserRouter>
      <div className="App container">
        
         
          <Switch>
            <Route exact path= "/">
            <h1>Favorite Authors!</h1>
            <Link to ="/new">Add Author</Link>
            <AllAuthors></AllAuthors>
              {/* <NewAuthor></NewAuthor> */}
              {/* <NewNinjaForm newNinjaAdded={newNinjaAdded} setNewNinjaAdded={setNewNinjaAdded}></NewNinjaForm> */}
              <hr />
              {/* <AllAuthors></AllAuthors> */}
              {/* <AllNinjas newNinjaAdded={newNinjaAdded}></AllNinjas> */}
            </Route>
            <Route exact path = "/new"> 
            <Link to ="/">Home</Link>
            <h1>Add New Author</h1>
            {/* --this for going to new page to enter in new person */}
              <NewAuthor></NewAuthor>
              {/* <Link to ="/"><button>Cancel</button></Link>--this always stays on route  */}
                {/*goes back to home page the above link  */}
            </Route>
            {/* <Route exact path = "/:id">
              <OneAuthor></OneAuthor>
            </Route> */}
            <Route exact path = "/edit/:id">
            <Link to ="/"><button>Home</button></Link>
              <EditAuthor></EditAuthor>
              <Link to ="/"><button>Cancel</button></Link>
            </Route>  
            </Switch> 
        
      </div>
    </BrowserRouter>
    
  );
}

export default App;



