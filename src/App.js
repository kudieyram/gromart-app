
import React from 'react';
import './App.css';
import Product from './components/HomePage';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import NotFound from './components/NotFound';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from './components/HomePage';
import ProductDetails from './components/ProductDetails';




function App() {
  return (
    <div className="App">
       <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          
          {/* <Route path="/productdetails/:id"> <ProductDetails/> </Route> */}


          <Route path="/login"><LogIn/></Route>

          <Route path="/signup"><SignUp/></Route>

          <Route path="/dashboard"><HomePage/></Route>

          <Route path="/productdetails"><ProductDetails/></Route>

          <Route exact path="/"><HomePage/></Route>

          <Route><NotFound/></Route>
    
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
