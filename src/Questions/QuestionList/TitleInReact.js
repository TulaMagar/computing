import React, { useState } from "react";
import "../Questions_List.css";
import "bootstrap/dist/css/bootstrap.css";
import UseTitle from "../../Title.js";
import "../QuestionList/TitleInReact.css"
import {Link} from "react-router-dom";

import Blog  from "../../Questions/QuestionList/blog.js";

function TitleInReact() {
  UseTitle("How to Create Title in React?");

  const BlogItem = () => { <Blog/> }
  const [ShowIframe, SetShowIframe] = useState(false);
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
        </div>

        <div id="middle">
          <h1 className="TitleInReact"> How to Create Title in React? </h1>

          <p className="ReusableTitleInReact">
             There are varity of way to render a HTML title in react but I am going to create a simple react component. I am 
             going to create a functional react component that returns the HTML title element. The function will takes the property as a react props and 
             return the HTML title element. You can reuse the code by exporting then importing in different react file.
          </p>

          <h3 className="ReactTitleBegin">Let's begin</h3>
          <p>
              I am going to create a seperate file called Title.js in my src folder. In Title file, I am going to create a custom react hook and export it at the end. 
          </p>
          {ShowIframe ? <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/CI_mFIfFars" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; picture-in-picture" allowFullScreen></iframe> : null}
          <button onClick={() => SetShowIframe(!ShowIframe)}>teswt</button>
          <button><a href="https://techcomputinginfo.com/#/question/blog">For example, relating questions</a></button>
          <button onClick={BlogItem()}>testtt</button>
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

export default TitleInReact;
