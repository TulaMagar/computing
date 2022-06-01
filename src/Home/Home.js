import React, { useRef, useEffect, useState } from "react";
import Slideshow from "../Slideshow/SlideShow.js";
import "./Home.css";
import Moon from "../Background/moon.webp";
import Sea from "../Background/sea.jpg";
import Globe from "./Globe/giphy.gif";
import "animate.css/animate.min.css";
import WeTheOne from "../img/pexels-lisa-fotios-3972467.jpg";
import UseTitle from "../Title.js";
import { Link } from "react-router-dom";
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
        <div className="whatWeDo" ref={Ref}>
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
      <div className="Team_bg">
        <div className="Team_Info">
          <h1 className="HeadingTitle" ref={Ref2}>
            Team
          </h1>
          <div>
            <p>
              We are a team of people who are passionate about computer inside
              and outside. We collaborate to create a better learning curve for
              you and help you to learn more about the computer science,
              programming, information technology, engineering fields and more.
              This team is made up of 1 person but I would love to get a team
              who are more passionate about the same things. You can contact to
              this website by email via{" "}
              <Link className="Link_Color" to="/contact">
                {" "}
                contact{" "}
              </Link>
              . We the team are: <br />
            </p>
            <ul>
              <li> Do research about topic </li>
              <li>
                {" "}
                Plan, planning, analysis, design, implementation/development,
                testing/integration, and maintenance.
              </li>
              <li>Split code into small and post in the questions and books</li>
            </ul>
          </div>
        </div>
        <div className="Team">
          <div
            className="card"
            ref={myref}
            id={`${visible ? "ComeFromLeft" : ""}`}
          >
            <img
              className="PersonImage"
              src={Globe}
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
                programming, information technology, engineering fields and
                more.
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
                I am a computer science student and I am passionate about the
                computer inside and outside. I love to learn new things and I am
                always trying to learn more about the computer science,
                programming, information technology, engineering fields and
                more.
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
                I am a computer science student and I am passionate about the
                computer inside and outside. I love to learn new things and I am
                always trying to learn more about the computer science,
                programming, information technology, engineering fields and
                more.
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
                I am a computer science student and I am passionate about the
                computer inside and outside. I love to learn new things and I am
                always trying to learn more about the computer science,
                programming, information technology, engineering fields and
                more.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="Mission_bg">
        <div className="whatWeDo" ref={Ref3}>
          <h1 className="WhatWeDoInfoHeader">Mission</h1>
          <p className="WhatWeDoInfo">
            We have created a fictional band website. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
        </div>
      </div>
      <div className="Learn_bg">
        <div className="whatWeDo" ref={Ref4}>
          <h1 className="WhatWeDoInfoHeader">
            What you gain from this website?
          </h1>
          <p className="WhatWeDoInfo">
            We have created a fictional band website. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
