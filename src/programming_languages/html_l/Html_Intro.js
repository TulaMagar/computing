import React, {useRef} from "react";
import UseTitle from "../../Title.js";
import RelatedLinks from "./html_links/related_links";
export default function html_intro() {

  UseTitle("Html Intro");

  return (
    <>
      <div id="container">
        <div id="left">
          <br />
          <h1>RIGHTTT SIDE1</h1>
          <br />
          <h1>RIGHT SIDE2</h1>
          <br />
          <h1>RIGHT SIDE3</h1>
          <br />
          <h1>RIGHT SIDE4</h1>
          <br />
          <h1>RIGHT SIDE5</h1>
          <br />
          <h1>RIGHT SIDE6</h1>
          <br />
          <h1>RIGHTTT SIDE7</h1>
        </div>

        <div id="middle">
          <h3>What is HTML?</h3>

          <ol>
            <li>HTML is a markup language.</li>
            <li>HTML is used to create pages that are displayed in a Web browser.</li>
            <li>HTML is a way to write instructions for a computer to format text, images, and other objects on a Web page.</li>
          </ol>
          <p>
            HTML is the easiest language to learn, and is the most basic language for creating Web pages.
            You don't need to use lots of logic to use HTML but you will need to know how to use it. 
            There are so many HTMl elements that you will need to know how to use them. 
            In this course you will learn how to use HTML and how to create your web pages in a simple to complex way. 
            So, you will be able to create your own web pages. If you complete this course you will master the HTML language. Bye Bye HTML!
          </p>

        </div>

        <div id="right">
          <RelatedLinks />
        </div>
      </div>
    </>
  );
}
