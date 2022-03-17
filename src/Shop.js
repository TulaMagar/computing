import React, {useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import './Shop.css';

function Shop() {

  const [isVisible, setIsVisible] = useState(true);
  const [height, setHeight] = useState(0)
  
  useEffect(() => {   
    window.addEventListener("scroll", listenToScroll);
    return () => 
       window.removeEventListener("scroll", listenToScroll); 
  }, [])
  
  const listenToScroll = () => {
    let heightToHideFrom = 200;
    const winScroll = document.body.scrollTop || 
        document.documentElement.scrollTop;
    setHeight(winScroll);

    if (winScroll > heightToHideFrom) {  
         isVisible && setIsVisible(false);
    } else {
         setIsVisible(true);
    }  
  };

  return (
   <div id="container">
      <div id="height">
        <b>height: {height} - {isVisible?"show":"hide"}</b> 
      </div>
     {
        isVisible 
         && 
       <div id="hide">
            Content hidden when scrolled beyond  200px
       </div>
      }
   </div>
  );
}


export default Shop;
