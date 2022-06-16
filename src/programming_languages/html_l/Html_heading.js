import React from "react";
import "./html_style.css";
import UseTitle from "../../Title.js";
import RelatedLinks from "./html_links/related_links";
import Highlight, { defaultProps } from "prism-react-renderer";
// import Element from "../../img/html_images/html_tag.PNG";
import { Link } from "react-router-dom";

export default function Html_heading() {
  UseTitle("What is HTML Heading?");
  const html_heading = `
  <!DOCTYPE html>
  <html>
    <!-- HTML starting head -->
    <head>
      <title>A Page Title</title>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">

      <!--- Bootstrap CSS -->
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"> 

      <!--- React js -->
      <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
      <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
      <style> 
        .center_red{
          text-align: center;
          color: red;
        }
      </style>
    </head>
    <!-- HTML ending head -->
    <body>

      <p class="center_red"> Hello, world! </p>

    </body>
  </html> 
  `;

  return (
    <>
      <div id="container">
        <div id="left">
          <li className="list">
            <Link className="list" to="/">
              {" "}
              Home
            </Link>
            <Link className="list" to="/">
              {" "}
              Home
            </Link>
            <Link className="list" to="/">
              {" "}
              Home
            </Link>
          </li>
        </div>
        <div id="middle">
          <h1>What is HTML Heading Tag?</h1>
          <p>
            HTMl Heading Tag is used to create heading in HTML. You can have
            title, style, script, meta, link, and other tags in heading.
          </p>
          <h1>HTML Head Element </h1>
          <p>
            The HTML head element is used to contain the head section of the
            HTML and also know as container for metadata {"(data about data)"}{" "}
            and is placed between the <code>{"<html>"}</code> tag and the{" "}
            <code>{"<body>"}</code> tag. HTML metadata is data about the HTML
            document. Metadata does not display on the page. Metadata typically
            define the document title, character set, styles, scripts, and other
            meta information.
          </p>
          <h1>For Example</h1>

          <Highlight {...defaultProps} code={html_heading} language="jsx">
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <pre className={className} style={style}>
                {tokens.map((line, i) => (
                  <div {...getLineProps({ line, key: i })}>
                    {line.map((token, key) => (
                      <span {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        </div>

        <div id="right">
          <RelatedLinks />
        </div>
      </div>
    </>
  );
}
