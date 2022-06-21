import React from "react";
import "./html_style.css";
import UseTitle from "../../Title.js";
import RelatedLinks from "./html_links/related_links";
// import Highlight, { defaultProps } from "prism-react-renderer";
import Element from "../../img/html_images/html_tag.PNG";
import { Link } from "react-router-dom";
export default function html_intro() {
  UseTitle("Html Intro");

  return (
    <>
      <div id="container">
        <div id="left">
          <li className="list">
            <Link className="list" to="/">
              Home
            </Link>
            <Link className="list" to="/">
              Home
            </Link>
            <Link className="list" to="/">
              Home
            </Link>
          </li>
        </div>
        <div id="middle">
          <h1>What is HTML Element?</h1>
          <p>
            HTML element is a part of HTML document. HTML element can be
            container for other elements. HTML element can be used to create a
            web page. Element can be block or inline. Block element is a part of
            a line and has a full line width. Inline element is a part of a line
            and doesn't have a full line width.
          </p>
          <table className="html_attributes_table">
            <thead>
              <tr>
                <th>Element</th>
                <th>Description</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>&lt;html&gt;</td>
                <td>
                  HTML element is the root element of the document. It is the
                  first element of the document.
                </td>
                <td>&lt;html&gt;</td>
              </tr>
              <tr>
                <td>&lt;head&gt;</td>
                <td>
                  Head element is the container for the title of the document.
                </td>
                <td>&lt;head&gt;</td>
              </tr>
            </tbody>
          </table>

          <h1>For Example Of HTML Element</h1>
          <img className="html_learning" src={Element} alt="html_element" />

          <h1>Block Element</h1>
          <p>
            Block element is a section of content that is not broken into lines.
            There are many block elements like h tags, p, div, pre, code,
            blockquote, address, article, aside, footer, header, main, nav,
            section, figure, figcaption, time, dl, dt, dd, ol, ul, li, table,
            caption, tbody, thead, tfoot, tr, th, td, form, fieldset, legend,
            label, input, button, select, option, textarea, noscript, iframe,
            embed, object, param, video, audio, source, track, map, area,
            canvas, time, mark, q, ins, del, script, noscript, style, link,
            meta, title, head, body, html.
          </p>
        </div>

        <div id="right">
          <RelatedLinks />
        </div>
      </div>
    </>
  );
}
