import React, { useRef } from "react";
import Slideshow from "../Slideshow/SlideShow.js";
import "./Home.css";
import Moon from "../Background/moon.webp";
import Sea from "../Background/sea.jpg";
import "animate.css/animate.min.css";
import UseTitle from "../Title.js";
import { Link } from "react-router-dom";
const Home = () => {
  const [ Ref, Ref2, Ref3, Ref4] = [
    useRef(),
    useRef(),
    useRef(),
    useRef(),
  ];

  const MoveToBenefits = () =>
    window.scrollTo({
      top: Ref.current.offsetTop - 115,
      behavior: "smooth",
    });

  const MoveToTeam = () =>
    window.scrollTo({
      top: Ref2.current.offsetTop - 115,
      behavior: "smooth",
    });

  const MoveToMission = () =>
    window.scrollTo({
      top: Ref3.current.offsetTop - 115,
      behavior: "smooth",
    });

  const Move = () =>
    window.scrollTo({
      top: Ref4.current.offsetTop - 115,
      behavior: "smooth",
    });

  UseTitle("Computing");
  return (
    <React.Fragment>
      <Slideshow />

      <div className="container-large">
        <div className="flex-container">
          <button className="flex-child" onClick={MoveToBenefits}>
            Move To Benefits
          </button>
          <button className="flex-child" onClick={MoveToTeam}>
            Move To Team
          </button>
          <button className="flex-child" onClick={MoveToMission}> 
            Move To Mission
          </button>
          <button className="flex-child" onClick={Move}>
            Move To Gain
          </button>
        </div>
      </div>

      <div className="b_g_Info">
        <div className="whatWeDo">
          <h1 className="WhatWeDoInfoHeader">Everything you need to know</h1>
          <p className="WhatWeDoInfo">
            This is a website that will help you learn about the computer
            science, programming, information technology, engineering fields and
            more. Most of the information is provided by me and vast information
            resources. This website is a project that I undertook to learn more
            about the computer science, programming, information technology,
            engineering fields and more. Soon, I will be adding more to this
            website. I hope you enjoy the website. Please, help us to make this
            website better. You can contact to this website by email via
            <Link className="Link_Color" to="/contact">
              {" "}
              contact{" "}
            </Link>
            . Thank you. Find out Questions and answers about the computer
            science, programming, information technology, engineering fields and
            more from{" "}
            <Link className="Link_Color" to="/question">
              {" "}
              Questions{" "}
            </Link>
            . Find out about the suitable books for you from
            <Link className="Link_Color" to="/book">
              {" "}
              Books{" "}
            </Link>
            .
          </p>
        </div>
      </div>

      <div className="container-L-image">
        <div className="Static-container">
          <div className="image">
            <img loading="lazy" src={Sea} alt="Clean not found" />
          </div>

          <div className="image">
            <img loading="lazy" src={Moon} alt="Clean not found" />
          </div>
          <div className="image">
            <img loading="lazy" src={Sea} alt="Clean not found" />
          </div>

          <div className="image">
            <img loading="lazy" src={Moon} alt="Clean not found" />
          </div>
        </div>
      </div>

      <div className="Benefit_bg">
        <div className="whatWeDo">
          <h1 className="WhatWeDoInfoHeader">Benefits</h1>
          <p className="WhatWeDoInfo">
            The benefit of this website is that you can learn about the computer
            science, programming, information technology, engineering fields and
            more. You can find out about the suitable books for you from{" "}
            <Link className="Link_Color" to="/book">
              {" "}
              Books{" "}
            </Link>{" "}
            and related problems and solutions from{" "}
            <Link className="Link_Color" to="/question">
              {" "}
              Questions{" "}
            </Link>
            . You will gain the knowledge of the computer science, programming,
            information technology, engineering fields and more and make a
            better use of the programming language, technology and more. The
            learning curve and projects that your working will be easy for you
            in the coming days. Note that the website is still under
            construction and resources are limited at the moment. All the
            questions solutions and books are free to use. lease, help us to
            make this website better. You can contact to this website by email
            via
            <Link className="Link_Color" to="/contact">
              {" "}
              contact{" "}
            </Link>
            .
          </p>
        </div>
      </div>




      <div className="programming_name">
        <div className="html"> 
          <h1>lorem</h1>
          <p>What is it?</p>
          <Link className="different_site" to="/contact">Learn More to Different Site &#x2192;</Link>
         </div>
        <div className="css"><h1>lorem</h1>
        <p>What is it?</p>
          <Link className="different_site" to="/contact">Learn More to Different Site &#x2192;</Link>
         </div>
        <div className="javascript"><h1>lorem</h1>
        <p>What is it?</p>
          <Link className="different_site" to="/contact">Learn More to Different Site &#x2192;</Link>
         </div>
        <div className="python"><h1>lorem</h1>
        <p>What is it?</p>
          <Link className="different_site" to="/contact">Learn More to Different Site &#x2192;</Link>
         </div>
        <div className="react"><h1>lorem</h1>
        <p>What is it?</p>
          <Link className="different_site" to="/contact">Learn More to Different Site &#x2192;</Link>
         </div>
        <div className="node"><h1>lorem</h1>
        <p>What is it?</p>
          <Link className="different_site" to="/contact">Learn More to Different Site &#x2192;</Link>
         </div>
        <div className="cshard"><h1>lorem</h1>
        <p>What is it?</p>
          <Link className="different_site" to="/contact">Learn More to Different Site &#x2192;</Link>
         </div>
        <div className="java"><h1>lorem</h1>
        <p>What is it?</p>
          <Link className="different_site" to="/contact">Learn More to Different Site &#x2192;</Link>
         </div>
        <div className="cplusplus"><h1>lorem</h1>
        <p>What is it?</p>
          <Link className="different_site" to="/contact">Learn More to Different Site &#x2192;</Link>
         </div>
        <div><h1>lorem</h1>
        <p>What is it?</p>
          <Link className="different_site" to="/contact">Learn More to Different Site &#x2192;</Link>
         </div>
        <div><h1>lorem</h1>
        <p>What is it?</p>
          <Link className="different_site" to="/contact">Learn More to Different Site &#x2192;</Link>
         </div>
        <div><h1>lorem</h1>
        <p>What is it?</p>
          <Link className="different_site" to="/contact">Learn More to Different Site &#x2192;</Link>
         </div>
        <div><h1>lorem</h1>
        <p>What is it?</p>
          <Link className="different_site" to="/contact">Learn More to Different Site &#x2192; </Link>
         </div>
      </div>


    </React.Fragment>
  );
};

export default Home;
