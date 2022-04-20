import React, { useState, useEffect } from "react";
import "./RouterWithBootstrap.css";
import { Link } from "react-router-dom";
import UseTitle from "../Title.js";

//https://www.toptal.com/designers/htmlarrows/arrows/

function RouterWithBootstrap() {
  const textInput = React.createRef(); // React use ref to get input value

  const BlogPath = [
    {
      url: "blog",
      title: "Coming Soon Microsoft Outlook Navigation Panel",
      description: "Coming Soon Microsoft Outlook Navigation Panel",
    },
    {
      url: "blog2",
      title: "blog2 title",
      description: "Coming Soon Microsoft Outlook Navigation Panel",
    },
  ];

  // const BlogPath = ["blog1", "blog2", "blog1", "blog2", "blog3-4-5"];

  const [filter, setFilter] = useState("");

  useEffect(() => {});
  UseTitle("computing question and answer");
  return (
    <>
      <div id="container">
        <div id="left">
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
        </div>

        <div id="middle">
          <p className="input-container">
            <input
              id="filter"
              className="input"
              name="filter"
              type="text"
              value={filter}
              placeholder="type to search for similar question and answer"
              onChange={(event) => setFilter(event.target.value)}
            />
          </p>
          <div className="question-list">
            {BlogPath.filter(
              (f) =>
                f.title
                  .toString()
                  .toLowerCase()
                  .includes(filter.toString().toLowerCase()) || filter === ""
            ).map((f, index) => (
              <div key={index}>
                <div id="curves" className="line">
                  {" "}
                  <Link
                    to={f.url}
                    style={{ textDecoration: "none", color: "yellow" }}
                  >
                    {" "}
                    &nbsp; {f.title}
                  </Link>
                  <div id="curve1"> </div>
                  <span className="arrow-right"> </span>
                  &nbsp; {f.description}
                </div>
                <br />
              </div>
            ))}
          </div>
        </div>

        <div id="right">
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
        </div>
      </div>
    </>
  );
}

export default RouterWithBootstrap;
