import React from "react";
import "./html_style.css";
import UseTitle from "../../Title.js";
import RelatedLinks from "./html_links/related_links";
import Highlight, { defaultProps } from "prism-react-renderer";
import { Link } from "react-router-dom";
//https://github.com/ryanseddon/react-frame-component
export default function Html_paragraph() {
  UseTitle("What is HTML Heading?");
  const test = `
  <!DOCTYPE html>
  <html>
  <title>W3.CSS</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
  <body>
  
  <div class="w3-container">
    <h2>Text Alignments</h2>
  
    <div class="w3-container w3-border w3-large">
      <div class="w3-left-align"><p>Left aligned text.</p></div>
      <div class="w3-right-align"><p>Right aligned text.</p></div>
    </div>
  </div>
  
  </body>
  </html>
  `;

  const html_single_paragraph = ` 
  <p>This is single paragraph</p>
  `;

  const html_spaceAndNewlines = ` 
  <p>
    This is single paragraph
    I want a start a new line
    this types of       spaces and newlines will be removed in the output or web.
  </p>
  `;

  const html_spaceAndNewlines_result = `
  This is single paragraph I want a start a new line this types of spaces and newlines will be removed in the output or web. 
  `;
  const html_break_multiple_paragraph = ` 
  <p>This is line one <br/>
   This is line two </p>
`;

  const html_pre_paragraph = ` 
  <pre> 
     Below we are going to create a some paragraphs in a single pre tag.
     You don't need to break a line in a pre tag to create a new line.

     This is line one of paragraph one.
     This is line two of paragraph one.

     this is line one of paragraph two.
        this is line two of paragraph two.

        this is line one of paragraph 3.
    this is line two of paragraph 3. 
  </pre>
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
          <h1>What is HTML Paragraph Element?</h1>
          <p>
            <strong>HTML Paragraph</strong> is a block of text that is used to{" "}
            format the text. It is used to create a paragraph. In HTML,{" "}
            <code>{"<p> </p>"}</code> tag is known as paragraph. You can create
            single and multiple lines of text in <code>{"<p> </p>"}</code>.
          </p>
          <h1>Inline Paragraph</h1>
          <Highlight
            {...defaultProps}
            code={html_single_paragraph}
            language="jsx"
          >
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
          <h1>Spaces and New Lines in Paragraph are Ignored</h1>
          <p>
            By default
            <code>{"<p> </p>"}</code> tag will remove all the spaces and new
            lines in the output or web. You need to use other tags to create a
            new line such as <code>{"<br/> and <pre>"}</code> and spaces
            entities such as <code>{"&nbsp; , &ensp; , &emsp; <pre>"}</code>.
          </p>
          <Highlight
            {...defaultProps}
            code={html_spaceAndNewlines}
            language="jsx"
          >
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
          <h1>Above Code Result on Web</h1>
          <Highlight
            {...defaultProps}
            code={html_spaceAndNewlines_result}
            language="jsx"
          >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <pre id="own_width" className={className} style={style}>
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
          <h1>Mutiple lines Paragraph</h1>

          <Highlight
            {...defaultProps}
            code={html_break_multiple_paragraph}
            language="jsx"
          >
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
          <p>
            The <code>{"<br/>"}</code> tag is used to create a line break or
            break a line and start a new line. You can apply this
            <code>{"<br/>"}</code> technique create a new starting line.
          </p>
          <h1>Pre Element </h1>
          <Highlight
            id="own_width"
            {...defaultProps}
            code={html_pre_paragraph}
            language="jsx"
          >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <pre id="own_width" className={className} style={style}>
                {tokens.map((line, i) => (
                  <div id="own_width" {...getLineProps({ line, key: i })}>
                    {line.map((token, key) => (
                      <span id="own_width" {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
          <p>
            The <code>{"<pre>"}</code> tag is used to create a preformatted
            text. With this tag, you can create a block of text that is not to
            be formatted and don't need to use the <code>{"<br/>"}</code> tag.
          </p>
        </div>

        <div id="right">
          <RelatedLinks />
        </div>
      </div>
    </>
  );
}
