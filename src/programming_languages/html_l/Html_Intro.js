import React from "react";
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

        <div id="middle"></div>

        <div id="right">
          <RelatedLinks />
        </div>
      </div>
    </>
  );
}
