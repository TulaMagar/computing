import React from 'react';
import './App.css';
import Navigation from './Navigation';
import Home from './Home';
import About from './About';
import Shop from './Shop';
import ItemDetails from "./ItemDetails";
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';


function App() {

  return (
    <Router>
      <div className="App">
        <Navigation/>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/about" element={<About />}/>
          <Route exact path="/shop" element={<Shop />}/>
          <Route path="/shop/:id" element={<ItemDetails />}/>
          {/* <Route path="*">
            <Navigate to="/" />
          </Route> */}
        </Routes>
      </div>

    </Router>
  );
}

export default App;
