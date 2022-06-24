import React from "react";
import "../../programming_languages.css";
import { Link } from "react-router-dom";
//https://html.com/
export default function RelatedLinks() {
  return (
    <ul className="html_links">
      <h1 className="topic">Topic</h1>
      <li className="blockShadow">
        <Link className="HtmlLinks" to="/html_home">
          HTML Home
        </Link>
      </li>
      <li className="blockShadow">
        <Link className="HtmlLinks" to="/html_intro">
          HTML Introduciton
        </Link>
      </li>
      <li className="blockShadow">
        <Link className="HtmlLinks" to="/html_editor">
          HTML Editor
        </Link>
      </li>
      <li className="blockShadow">
        <Link className="HtmlLinks" to="/html_element">
          HTML Element
        </Link>
      </li>
      <li className="blockShadow">
        <Link className="HtmlLinks" to="/html_attributes">
          HTML Attributes
        </Link>
      </li>
      <li className="blockShadow">
        <Link className="HtmlLinks" to="/html_tags">
          HTML Tags
        </Link>
      </li>
      <li className="blockShadow">
        <Link className="HtmlLinks" to="/html_comment">
          HTML Comments
        </Link>
      </li>
      <li className="blockShadow">
        <Link className="HtmlLinks" to="/html_head">
          HTML Head
        </Link>
      </li>
      <li className="blockShadow">
        <Link className="HtmlLinks" to="/html_paragraph">
          HTML Paragraph
        </Link>
      </li>
      <li className="blockShadow">
        <Link className="HtmlLinks" to="/html_input_types">
          HTML Input Types
        </Link>
      </li>
      <li className="blockShadow">
        <Link className="HtmlLinks" to="/html_tables">
          HTML Tables
        </Link>
      </li>
      <li className="blockShadow">
        <Link className="HtmlLinks" to="/html_list">
          HTML List
        </Link>
      </li>
    </ul>
  );
}
