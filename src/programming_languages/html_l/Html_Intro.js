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
          <p>
            HTML is the standard markup language for creating Web pages. HTML is used to create pages that are displayed in a Web browser. 
            HTML is a markup language, which is a way to write instructions for a computer to format text, images, and other objects on a Web page.
          </p>
          <p>
            HTML is the easiest language to learn, and is the most basic language for creating Web pages.
            .
          </p>

        </div>

        <div id="right">
          <RelatedLinks />
        </div>
      </div>
    </>
  );
}
