import NewProductForm from './components/NewProductForm'; //importing the form we create
import{
  BrowserRouter,  //tells front end app to enable routing
  Switch,
  Route,
  Link
} from "react-router-dom";
import AllProducts from './components/AllProducts';
import OneProduct from './components/OneProduct';
import EditProduct from './components/EditProduct';
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
        
         {/* <Link to ="/new"><button>Add Product</button></Link> */}
          <Switch>
            <Route exact path= "/">
            <h1>Product Info!</h1>
              <NewProductForm></NewProductForm>
              {/* <NewNinjaForm newNinjaAdded={newNinjaAdded} setNewNinjaAdded={setNewNinjaAdded}></NewNinjaForm> */}
              <hr />
              <AllProducts></AllProducts>
              {/* <AllNinjas newNinjaAdded={newNinjaAdded}></AllNinjas> */}
            </Route>
            {/* <Route exact path = "/new">--this for going to new page to enter in new person
              <NewProductForm></NewProductForm>
            </Route> */}
            <Route exact path = "/:id">
              <OneProduct></OneProduct>
            </Route>
            <Route exact path = "/edit/:id">
              <EditProduct></EditProduct>
            </Route>  
            </Switch> 
        
      </div>
    </BrowserRouter>
    
  );
}

export default App;


