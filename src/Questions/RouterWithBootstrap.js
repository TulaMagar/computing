import React, { useState, useEffect } from "react";
import "./RouterWithBootstrap.css";
import { Link } from "react-router-dom";

//https://www.toptal.com/designers/htmlarrows/arrows/

function RouterWithBootstrap() {
  const textInput = React.createRef(); // React use ref to get input value

  const BlogPath = [
    { url: "test", description: "blog" },
    { url: "test", description: "blog2" },
    { url: "test", description: "blog" },
    { url: "test", description: "blog2" },
    { url: "test", description: "blog" },
    { url: "test", description: "blog2" },
    { url: "test", description: "blog" },
    { url: "test", description: "blog2" },
    { url: "test", description: "blog" },
    { url: "test", description: "blog2" },
    { url: "test", description: "blog" },
    { url: "test", description: "blog2" },
    { url: "test", description: "blog" },
    { url: "test", description: "blog2" },
    { url: "test", description: "blog" },
    { url: "test", description: "blog2" },
    { url: "test", description: "blog" },
    { url: "test", description: "blog2" },
    { url: "test", description: "blog" },
    { url: "test", description: "blog2" },
    { url: "test", description: "blog" },
    { url: "test", description: "blog2" },
    { url: "test", description: "blog" },
    { url: "test", description: "blog2" },
    { url: "test", description: "blog" },
    { url: "test", description: "blog2" },
    { url: "test", description: "blog" },
    { url: "test", description: "blog2" },
    { url: "test", description: "blog" },
    { url: "test", description: "blog2" },
    { url: "test", description: "blog" },
    { url: "test", description: "blog2" },
    { url: "test", description: "blog" },
    { url: "test", description: "blog2" },
    { url: "test", description: "blog" },
    { url: "test", description: "blog2" },

  ];

  // const BlogPath = ["blog1", "blog2", "blog1", "blog2", "blog3-4-5"];

  const [filter, setFilter] = useState("");

  useEffect(() => {});
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
            {BlogPath
              .filter(
                (f) =>
                  f.description
                    .toString()
                    .toLowerCase()
                    .includes(filter.toString().toLowerCase()) || filter === ""
              )
              .map((f, index) => (
                <div  key={index}>
                
                  <div id="curves" className="line"> <Link to={f.description} style={{ textDecoration: 'none' }}> &nbsp; {f.description}</Link> 
                    <div id="curve1" > </div>
                    <span className="arrow-right">  </span>
                    &nbsp; {f.url}
                  </div>
                  <br/>
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
