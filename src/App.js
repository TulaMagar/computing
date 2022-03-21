import React from 'react';
import './App.css';
import Navigation from './Navigation/Navigation.js';
import Home from './Home/Home.js';
import About from './About/About.js';
import Thop from './Shop';
import Shop from './Questions/RouterWithBootstrap.js';
import ItemDetails from "./ItemDetails";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from './Footer/Footer';
import Routess from './Routess';


// Sitemap: https://www.xml-sitemaps.com/
//https://www.npmjs.com/package/react-localstorage
//Login with google : https://www.freakyjolly.com/google-signin-login-button-in-react-js-example-using-react-google_login-package/

function App() {

  return (
    <Router>
      <div className="App background">
        <Navigation/>
        <Routes>
          <Route exact path="/" element={ <Home /> }/>
          <Route exact path="/about" element={<About />}/>
          <Route exact path="/shop" element={<Shop />}/>
          <Route path="/shop/:id" element={<ItemDetails />}/>
        </Routes>
        <Footer/>
      </div>

    </Router>
  );
}

export default App;
