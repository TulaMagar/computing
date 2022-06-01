import React, { useRef, useEffect, useState } from "react";
import "./About.css";
import WeTheOne from "../img/pexels-lisa-fotios-3972467.jpg";
import "bootstrap/dist/css/bootstrap.css";
import UseTitle from "../Title.js";
import { Link } from "react-router-dom";
// import { useSpring, animated } from "react-spring";
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

      <div className="B_g_WhatWeDo">
        <div className="whatWeDo">
          <h1 className="WhatWeDoInfoHeader">What we do!</h1>
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
      <div className="B_g_WhatWeDo">
        <div className="whatWeDo">
          <h1 className="WhatWeDoInfoHeader">Who we are</h1>
          <p className="WhatWeDoInfo">
             Founded in 2022, this website is a project that I undertook to learn more about the computer science, 
             programming, information technology, engineering fields and more. I hope you enjoy the website. Please, help us to make this website better. You can contact to this website by email via
             <Link className="Link_Color" to="/contact">
              {" "}
              contact{" "}
            </Link>
            , thank you. We empower people to learn and share their knowledge with the world through this website.
          </p>
          <p className="WhatWeDoInfo">
            Joining the teams of this website is a great way to contribute to the developers and technologies and to the world of people. 
            Because of you, people will get more knowledge and experience which will help them to be more successful in the future. Thank You.
          </p>

          <p className="WhatWeDoInfo">
            Everything in this website is free. You can use it for free. You can even find the source code of this website on 
            <a className="Link_Color" href="https://github.com/TulaMagar/computing.git"> GitHub </a>.
          </p>

          <p className="WhatWeDoInfo">
            The books that I have written are free. You can use them for free. If you have wrote a book, you can find post them here for free.
            If you have blog posts, you can iframe or link them here for free.
          </p>
        </div>
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

      <h1 className="HeadingTitle">Team</h1>

      <div className="Team">
        <div className="card">
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
              I am a computer science student and I am passionate about the
              computer inside and outside. I love to learn new things and I am
              always trying to learn more about the computer science,
              programming, information technology, engineering fields and more.
            </p>
          </div>
        </div>
        <div className="card">
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
              I am a computer science student and I am passionate about the
              computer inside and outside. I love to learn new things and I am
              always trying to learn more about the computer science,
              programming, information technology, engineering fields and more.
            </p>
          </div>
        </div>
        <div className="card">
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
              I am a computer science student and I am passionate about the
              computer inside and outside. I love to learn new things and I am
              always trying to learn more about the computer science,
              programming, information technology, engineering fields and more.
            </p>
          </div>
        </div>
        <div className="card">
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
              I am a computer science student and I am passionate about the
              computer inside and outside. I love to learn new things and I am
              always trying to learn more about the computer science,
              programming, information technology, engineering fields and more.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default About;
