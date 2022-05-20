import React, { useRef, useEffect, useState } from "react";
import "./About.css";
import WeTheOne from "../img/pexels-lisa-fotios-3972467.jpg";
import "bootstrap/dist/css/bootstrap.css";
import UseTitle from "../Title.js";

function About() {
  const myref = useRef();
  const [visible, setVisible] = useState();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setVisible(entry.isIntersecting);
    });
    observer.observe(myref.current);
  }, []);
  console.log(myref);
  console.log(visible);
  UseTitle("About Computing");

  return (
    <React.Fragment>
      <div className="testing">
        <div className="Respawn">
          <div className="glassesBackground"> </div>
          <div className="glassesBackground"> </div>
          <div className="glassesBackground"> </div>
          <div className="glassesBackground"> </div>
          <div className="glassesBackground"> </div>
        </div>
      </div>

      <div className="contin">
        <div className="weTheOne">
          <img src={WeTheOne} alt="we the one not found" loading="lazy" />{" "}
        </div>
        <div className="Connecting">
          <img src={WeTheOne} alt="we the one not found" loading="lazy" />{" "}
        </div>
      </div>

      <div className="whatWeDo">
        <h1 className="WhatWeDoInfoHeader HeadingTitle">What we do!</h1>
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

      <div className="ToWhom">
        <div
          className="weTheOne"
          ref={myref}
          id={`${visible ? "Left_Filp" : ""}`}
        >
          <p className="Info">
            We have created a fictional band website. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>

        <div className="Connecting">
          <p className="Info">
            We have created a fictional band website. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>

        <div
          className="Third"
          ref={myref}
          id={`${visible ? "Right_Filp" : ""}`}
        >
          <p className="Info">
            We have created a fictional band website. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>
      </div>

      <div className="Team">
        <h1 className="HeadingTitle">Team</h1>
        <div className="CardContainer">
          <div className="card">
            <img
              className="PersonImage"
              src={WeTheOne}
              alt="Avatar"
              loading="lazy"
              style={{ width: "100%" }}
            />
            <div className="container">
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
          <div className="card">
            <img
              className="PersonImage"
              src={WeTheOne}
              alt="Avatar"
              loading="lazy"
              style={{ width: "100%" }}
            />
            <div className="container">
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
          <div className="card ComeFromRight">
            <img
              className="PersonImage"
              src={WeTheOne}
              alt="Avatar"
              loading="lazy"
              style={{ width: "100%" }}
            />
            <div className="container">
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
    </React.Fragment>
  );
}

export default About;
