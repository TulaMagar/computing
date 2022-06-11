/* eslint-disable*/
import React from "react";
import { Route } from "react-router-dom";

// Files locations:

// programing_languages/html_l/allfiles.js:
import Html_home from "../../programming_languages/html_l/Html_home.js";
import Html_intro from "../../programming_languages/html_l/Html_Intro.js";
import Heading_tag from "../../programming_languages/html_l/heading_tag.js";
import Html_editor from "../../programming_languages/html_l/Html_editor.js";

const html_routes = [
  [<Route path="/html_home" element={<Html_home />} />],
  [<Route path="/html_intro" element={<Html_intro />} />],
  [<Route path="/heading_tag" element={<Heading_tag />} />],
  [<Route path="/html_editor" element={<Html_editor />} />],
];

export default html_routes;
/*eslint-enable */
