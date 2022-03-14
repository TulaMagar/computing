import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import ItemDetails from "./ItemDetails";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import img from './img/background.png';
import SlideShow from './SlideShow';


function App() {

  return (
    <Router>
      <div className="App">
        <Nav/>
        <SlideShow/>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/about" element={<About />}/>
          <Route exact path="/shop" element={<Shop />}/>
          <Route path="/shop/:id" element={<ItemDetails />}/>
        </Routes>
      </div>
    </Router>
  );
}

const Home = () => (
  
  <section className='bgimg-1'>

  </section>
);

export default App;
