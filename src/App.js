import React from 'react';
import './App.css';
import Navigation from './Navigation';
import About from './About';
import Shop from './Shop';
import ItemDetails from "./ItemDetails";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SlideShow from './SlideShow';


function App() {

  return (
    <Router>
      <div className="App">
        <Navigation/>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/shop" element={<Shop />}/>
          <Route path="/shop/:id" element={<ItemDetails />}/>
        </Routes>
      </div>

    </Router>
  );
}

const Home = () => (
  
  <>
    <SlideShow/>
  </>
);

export default App;
