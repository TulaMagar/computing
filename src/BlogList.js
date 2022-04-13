import React, { useState, useEffect } from "react";
import "../src/Questions/RouterWithBootstrap.css";
import { Link } from "react-router-dom";

//https://codesandbox.io/s/admiring-kalam-lpxwel?file=/src/Navigation.js

function BlogList() {
  const textInput = React.createRef(); // React use ref to get input value

  const datas = [
    { url: "test", description: "blog" },
    { url: "test", description: "blog2" },
  ];

  const BlogPath = ["blog1", "blog2", "blog1", "blog2", "blog3-4-5"];

  const [filter, setFilter] = useState("");

  useEffect(() => {});
  return (
    <>
      <div id="container">
        <div id="left">
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
          <ul className="question-list">
            {BlogPath
              .filter(
                (f) =>
                  f
                    .toString()
                    .toLowerCase()
                    .includes(filter.toString().toLowerCase()) || filter === ""
              )
              .map((f, index) => (
                <div key={index}>
                  <li> {f} </li>

                  <Link to={f}>{f}</Link>
                </div>
              ))}
          </ul>
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
        </div>
      </div>
    </>
  );
}

export default BlogList;
