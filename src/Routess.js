import React from 'react';
// import './App.css';
import Home from './Home/Home.js';
import About from './About/About.js';
import Shop from './Shop';
import ItemDetails from "./ItemDetails";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';



// Sitemap: https://www.xml-sitemaps.com/
//https://www.npmjs.com/package/react-localstorage
//Login with google : https://www.freakyjolly.com/google-signin-login-button-in-react-js-example-using-react-google_login-package/
function Routess() {

  return (
    <Router>
        <Routes>
          <Route exact path="/" element={ <Home /> }/>
          <Route exact path="/about" element={<About />}/>
          <Route exact path="/shop" element={<Shop />}/>
          <Route path="/shop/:id" element={<ItemDetails />}/>
          {/* <Route path="*">
            <Navigate to="/" />
          </Route> */}
        </Routes>
    </Router>
  );
}

export default Routess;
