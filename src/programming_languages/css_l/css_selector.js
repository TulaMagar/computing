import React, { lazy } from "react";
import UseTitle from "../../Title.js";
const LeftNav = lazy(() => import("../../LeftNav/leftNav.js"));
const RelatedCssLinks = lazy(() => import("./css_links/related_css_links.js"));

const HtmlCssJsEditor = lazy(() => import("../../Editor/HtmlCssJsEditor.js"));

export default function CSS_selector() {
  UseTitle("What is CSS Selector?");

  return (
    <>
      <div id="container">
        <div id="left">
          <LeftNav />
        </div>
        <div id="middle">
          <h1>What is CSS Selector?</h1>
          <p>
            CSS Selector is a way to select HTML elements. It is a string of
            characters that tells the browser which HTML elements to select.
          </p>
        </div>

        <div id="right">
          <RelatedCssLinks />
        </div>
      </div>
    </>
  );
}
