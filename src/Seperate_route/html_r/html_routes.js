/* eslint-disable*/
import React from "react";
import { Route } from "react-router-dom";

// Files locations:

// programing_languages/html_l/allfiles.js:
import Html_home from "../../programming_languages/html_l/Html_home.js";
import Html_intro from "../../programming_languages/html_l/Html_Intro.js";
import Heading_tag from "../../programming_languages/html_l/heading_tag.js";
import Html_editor from "../../programming_languages/html_l/Html_editor.js";
import Html_element from "../../programming_languages/html_l/Html_element.js";
import Html_attributes from "../../programming_languages/html_l/Html_attributes.js";
import Html_tags from "../../programming_languages/html_l/Html_tags.js";
import Html_comment from "../../programming_languages/html_l/Html_comment.js";
import Html_head from "../../programming_languages/html_l/Html_head.js";


const html_routes = [
  [<Route path="/html_home" element={<Html_home />} />],
  [<Route path="/html_intro" element={<Html_intro />} />],
  [<Route path="/heading_tag" element={<Heading_tag />} />],
  [<Route path="/html_editor" element={<Html_editor />} />],
  [<Route path="/html_element" element={<Html_element />} />],
  [<Route path="/html_attributes" element={<Html_attributes />} />],
  [<Route path="/html_tags" element={<Html_tags />} />],
  [<Route path="/html_comment" element={<Html_comment />} />],
  [<Route path="/html_head" element={<Html_head />} />],
  
];

export default html_routes;
/*eslint-enable */
