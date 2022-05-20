import React, { useRef, useEffect, useState } from "react";
import SlideShow from "../Slideshow/SlideShow.js";
import "./Home.css";
import Clean from "../Background/clean.avif";
import Moon from "../Background/moon.webp";
import Sea from "../Background/sea.jpg";
import Globe from "./Globe/giphy.gif";
import "animate.css/animate.min.css";
import WeTheOne from "../img/pexels-lisa-fotios-3972467.jpg";
import UseTitle from "../Title.js";

const Home = () => {
  const myref = useRef();
  const [visible, setVisible] = useState();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setVisible(entry.isIntersecting);
    });
    observer.observe(myref.current);
  }, []);
  UseTitle("computing");
  return (
    <React.Fragment>
      <SlideShow />

      <div className="container-large">
        <div className="flex-container">
          <div className="flex-child magenta">Flex Column 1</div>

          <div className="flex-child green">Flex Column 2</div>
          <div className="flex-child magenta">Flex Column 1</div>

          <div className="flex-child green">Flex Column 2</div>
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

      <h1 className="HeadingTitle">Team</h1>
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
      <br />
      <br />
      <br />
    </React.Fragment>
  );
};

export default Home;
