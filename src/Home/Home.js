import React, { useRef, useEffect, useState } from "react";
import SlideShow from "../Slideshow/SlideShow.js";
import "./Home.css";
import myGa from "../MyGa.js";
import Clean from "../Background/clean.avif";
import Moon from "../Background/moon.webp";
import Sea from "../Background/sea.jpg";
import Globe from "./Globe/giphy.gif";
import "animate.css/animate.min.css";
import WeTheOne from "../img/pexels-lisa-fotios-3972467.jpg";
import UseTitle from "../Title.js";

const Home = () => {
  const [myref, Ref, Ref2, Ref3, Ref4] = [
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
  ];
  const [visible, setVisible] = useState();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setVisible(entry.isIntersecting);
    });
    observer.observe(myref.current);
  }, [myref]);

  useEffect(() => {
    myGa();
  }, []);

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
      <SlideShow />

      <div className="container-large">
        <div className="flex-container">
          <button className="flex-child magenta" onClick={MoveToBenefits}>
            Move To Benefits
          </button>
          <button className="flex-child green" onClick={MoveToTeam}>
            Move To Team
          </button>
          <button className="flex-child magenta" onClick={MoveToMission}>
            Move To Mission
          </button>
          <button className="flex-child green" onClick={Move}>
            Move To Gain
          </button>
        </div>
      </div>

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
            <img loading="lazy" src={Clean} alt="Clean not found" />
          </div>

          <div className="image">
            <img loading="lazy" src={Moon} alt="Clean not found" />
          </div>
          <div className="image">
            <img loading="lazy" src={Sea} alt="Clean not found" />
          </div>

          <div className="image">
            <img loading="lazy" src={Clean} alt="Clean not found" />
          </div>
        </div>
      </div>

      <div className="whatWeDo" ref={Ref}>
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

      <h1 className="HeadingTitle" ref={Ref2}>
        Team
      </h1>
      <div className="Team">
        <div className="CardContainer">
          <div
            className="card"
            ref={myref}
            id={`${visible ? "ComeFromLeft" : ""}`}
          >
            <img
              className="PersonImage"
              src={WeTheOne}
              alt="Avatar"
              loading="lazy"
            />
            <div className="containert">
              <h4>
                <b>Tula Magar</b>
              </h4>
              <h5>Owner & Coder..</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis vitae, sapiente placeat facere molestiae omnis
                tempore facilis dolor sint quo?
              </p>
            </div>
          </div>
          <div
            className="card"
            ref={myref}
            id={`${visible ? "SmallToBig" : ""}`}
          >
            <img
              className="PersonImage"
              src={WeTheOne}
              alt="Avatar"
              loading="lazy"
              // style={{ width: "100%" }}
            />
            <div className="containert">
              <h4>
                <b>Tula Magar</b>
              </h4>
              <h5>Owner & Coder..</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis vitae, sapiente placeat facere molestiae omnis
                tempore facilis dolor sint quo?
              </p>
            </div>
          </div>
          <div
            className="card"
            ref={myref}
            id={`${visible ? "ComeFromRight" : ""}`}
          >
            <img
              className="PersonImage"
              src={Globe}
              alt="Avatar"
              loading="lazy"
              // style={{ width: "100%" }}
            />
            <div className="containert">
              <h4>
                <b>Tula Magar</b>
              </h4>
              <h5>Owner & Coder..</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis vitae, sapiente placeat facere molestiae omnis
                tempore facilis dolor sint quo?
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="whatWeDo" ref={Ref3}>
        <h1 className="WhatWeDoInfoHeader">Mission</h1>
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
      <div className="whatWeDo" ref={Ref4}>
        <h1 className="WhatWeDoInfoHeader">What you gain from this website?</h1>
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
      <br />
      <br />
      <br />
    </React.Fragment>
  );
};

export default Home;
