import React from "react";
import SlideShow from "../Slideshow/SlideShow.js";
import "./Home.css";
import Clean from "../Background/clean.avif";
import Moon from "../Background/moon.webp";
import Sea from "../Background/sea.jpg";
// import { Helmet } from "react-helmet";
import Globe from "./Globe/giphy.gif";
import "animate.css/animate.min.css";
import WeTheOne from "../img/pexels-lisa-fotios-3972467.jpg";
import UseTitle from '../Title.js';

//Module build failed (from ./node_modules/source-map-loader/dist/cjs.js):

const Home = () => {
  UseTitle("computing home page");
  return (
    <React.Fragment>

      <div className="moon"> </div>
      <SlideShow />

      <div className="container-large">
        <div className="flex-container">
          <div className="flex-child magenta">Flex Column 1</div>

          <div className="flex-child green">Flex Column 2</div>
          <div className="flex-child magenta">Flex Column 1</div>

          <div className="flex-child green">Flex Column 2</div>
        </div>
      </div>
      {/* <p className="context">
        <span>
          Find the similar issues and solution.{" "}
          <strong>
            {" "}
            Not avaiable: Right now, posting a issue isn't avaiable but I will
            build it soon!{" "}
          </strong>
        </span>
      </p> */}

      <div className="whatWeDo">
        <h1 className="WhatWeDoInfoHeader">Everything you need to know</h1>
        <p className="WhatWeDoInfo">
          We have created a fictional band website. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
      </div>

      <div className="container-L-image">
        <div className="Static-container">
          <div className="image">
            <img src={Clean} alt="Clean not found" />
          </div>

          <div className="image">
            <img src={Moon} alt="Clean not found" />
          </div>
          <div className="image">
            <img src={Sea} alt="Clean not found" />
          </div>

          <div className="image">
            <img src={Clean} alt="Clean not found" />
          </div>

        </div>
      </div>

      <div className="whatWeDo">
        <h1 className="WhatWeDoInfoHeader">Benefits</h1>
        <p className="WhatWeDoInfo">
          We have created a fictional band website. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
      </div>
      
      <div className="testing">
      <div className="CardContainer">
        <div className="card">
          <img className="PersonImage" src={WeTheOne} alt="Avatar" loading="lazy" style={{ width: "100%" }} />
          <div className="container">
            <h4>
              <b>Tula Magar</b>
            </h4>
            <p>Owner & Coder..</p>
          </div>
        </div>
        <div className="card">
          <img className="PersonImage" src={WeTheOne} alt="Avatar" loading="lazy" style={{ width: "100%" }} />
          <div className="container">
            <h4>
              <b>Tula Magar</b>
            </h4>
            <p>Owner & Coder..</p>
          </div>
        </div>
        <div className="card">
          <img className="PersonImage" src={Globe} alt="Avatar" loading="lazy" style={{ width: "100%" }} />
          <div className="container">
            <h4>
              <b>Tula Magar</b>
            </h4>
            <p>Owner & Coder..</p>
          </div>
        </div>
      </div>
      </div>
      <div className="whatWeDo">
        <h1 className="WhatWeDoInfoHeader">Footer!</h1>
        <p className="WhatWeDoInfo">
          We have created a fictional band website. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
      </div>
    </React.Fragment>
  );
};

export default Home;
