import React from "react";
import "./About.css";
import WeTheOne from "../img/pexels-lisa-fotios-3972467.jpg";
import "bootstrap/dist/css/bootstrap.css";

function About () {
  return(
    <>
      <div className="contin">
        <div className="weTheOne"> <img src={WeTheOne} alt="we the one not found"/> </div>
        <div className="Connecting"> <img src={WeTheOne} alt="we the one not found"/> </div>
      </div>
      <div className="whatWeDo">
          <h1 className="WhatWeDoInfoHeader">What we do!</h1>
          <p className="WhatWeDoInfo">
            We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing 
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
      </div>


      <div className="ToWhom">
        
        <div className="weTheOne">
          <p className="Info"> We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          </p>
        
        </div> 
        
        <div className="Connecting"> <img src={WeTheOne} alt="we the one not found"/>  </div>

        <div className="Third"> 
          <p className="Info"> We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          </p>
        </div>
      
      </div>
    </>
  );
}

export default About;
