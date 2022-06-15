import React from "react";
import "./html_style.css";
import UseTitle from "../../Title.js";
import RelatedLinks from "./html_links/related_links";
// import Highlight, { defaultProps } from "prism-react-renderer";
import Html_attributes from "../../img/html_images/html_attributes.PNG";
import { Link } from "react-router-dom";
export default function html_intro() {
  UseTitle("What is HTML Attributes?");

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
          <h1>What is HTML Attributes?</h1>   
          <p>
            The below image shows the HTML tag and its attributes. If you understand what the image trying to tell you then you can easily
             understand the HTML attributes, where to put them, and what they do.
          </p>
          <img className="html_learning" src={Html_attributes} alt="html_attributes"/>
          <p>
            HTML attributes are properties that are added to HTML elements and inside opening tags. 
            Attributes are used to add extra information to HTML elements.
          </p>
          <h1>
            Extra Information About HTML Elements?
          </h1>
          <section>
            They are many HTML attributes that are used to add extra information to HTML elements.
            <table className="html_attributes_table">
              <thead>
                <tr>
                  <th>Attribute</th>
                  <th> Elements Belongs to</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <code>class</code>
                  </td>
                  <td>
                    <code>any html elements</code>
                  </td>
                  <td>
                    This is used to add a class to an HTML element.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>id</code>
                  </td>
                  <td>
                    <code>any html elements</code>
                  </td>
                  <td>
                    This is used to add an id to an HTML element.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>style</code>
                  </td>
                  <td>
                    <code> 
                      inline css style for any html elements
                    </code>
                  </td>
                  <td>
                    This is used to add a style to an HTML element.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>src</code>
                  </td>
                  <td>
                    <code>img</code>

                  </td>
                  <td>
                    This is used to add a source to an HTML element.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>alt</code>
                  </td>
                  <td>
                    <code>img</code>
                  </td>
                  <td>
                    This is used to add an alt to an HTML element.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>href</code>
                  </td>
                  <td>
                    <code>a tag</code>
                  </td>
                  <td>
                    This is used to add a href to an HTML element.
                  </td>
                </tr>
                <tr>
                 <td><code> accept-charset</code></td>
                  <td><code>form</code></td>


                  <td>
                    This is used to add a accept-charset to an HTML element.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>accesskey</code>
                  </td>
                  <td>
                    button, input, label, legend, textarea 
                  </td>
                  <td>
                    This is used to add an accesskey to an HTML element.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>action</code>
                  </td>
                  <td>
                    form 
                  </td>
                  <td>
                    This is used to add an action to an HTML element.
                  </td>
                </tr>
                <tr>
                  <td>
                    <td>
                    <code>autocomplete</code>
                    </td>
                    <td>
                    input
                    </td>
                  </td>
                  <td>
                    This is used to add an autocomplete to an HTML element.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>autofocus</code>
                  </td>
                  <td>
                    input 
                  </td>
                  <td>
                    This is used to add an autofocus to an HTML element.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>autoplay</code>
                  </td>
                  <td>
                    video
                  </td>
                  <td>
                    This is used to add an autoplay to an HTML element.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>checked</code>
                  </td>
                  <td>
                    input
                  </td>
                  <td>
                    This is used to add a checked to an HTML element.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>cols</code>
                  </td>
                  <td>
                    textarea
                  </td>
                  <td>

                    This is used to add a cols to an HTML element.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>colspan</code>
                  </td>
                  <td>
                    td, th
                  </td>
                  <td>
                    This is used to add a colspan to an HTML element.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>content</code>
                  </td>
                  <td>
                    meta
                  </td>
                  <td>
                    This is used to add a content to an HTML element.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>contenteditable</code>
                  </td>
                  <td>
                    any html elements
                  </td>
                  <td>
                    This is used to add a contenteditable to an HTML element.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>contextmenu</code>
                  </td>
                  <td>
                    any html elements
                  </td>
                  <td>
                    This is used to add a contextmenu to an HTML element.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>controls</code>
                  </td>
                  <td>
                    audio, video
                  </td>
                  <td>
                    This is used to add a controls to an HTML element.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>coords</code>
                  </td>
                  <td>
                    area
                  </td>
                  <td>
                    This is used to add a coords to an HTML element.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>data</code>
                  </td>
                  <td>
                    any html elements
                  </td>
                  <td>
                    This is used to add a data to an HTML element.

                  </td>
                </tr>
                <tr>
                  <td>
                    <code>datetime</code>
                  </td>
                  <td>
                    This is used to add a datetime to an HTML element.
                  </td>
                </tr>
                <tr>
                  <td> class </td>
                  <td>
                    This is used to add a class to an HTML element.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>dir</code>
                  </td>
                  <td>
                    This is used to add a dir to an HTML element.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>disabled</code>
                  </td>
                  <td>
                    This is used to add a disabled to an HTML element.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>enctype</code>
                  </td>
                  <td>
                    This is used to add a enctype to an HTML element.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>for</code>
                  </td>

                  <td>
                    This is used to add a for to an HTML element.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>formaction</code>
                  </td>
                  <td>
                    This is used to add a formaction to an HTML element.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>formenctype</code>
                  </td>
                  <td>
                    This is used to add a formenctype to an HTML element.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>formmethod</code>
                  </td>
                  <td>
                    This is used to add a formmethod to an HTML element.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>formtarget</code>
                  </td>
                  <td>
                    This is used to add a formtarget to an HTML element.
                  </td>
                </tr>
                <tr>
                  <td>
                     scripts
                  </td>
                  <td>
                    This is used to add a scripts to an HTML element.
                  </td>
                </tr>
                <tr>
                  <td>
                    crossorigin
                  </td>
                  <td>
                    This is used to add a crossorigin to an HTML element.
                  </td>
                </tr>
                <tr>
                  <td>
                    decoding </td>
                  <td>
                    This is used to add a decoding to an HTML element.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>draggable</code>
                  </td>
                  <td>
                    This is used to add a draggable to an HTML element.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>dropzone</code>
                  </td>
                  <td>
                    This is used to add a dropzone to an HTML element.
                  </td>
                </tr>
                <tr>
                  <td>
                    defer
                  </td>
                  <td>
                    This is used to add a defer to an HTML element.
                  </td>
                </tr>
                </tbody>
                </table>
          </section>
        </div>

        <div id="right">
          <RelatedLinks />
        </div>
      </div>
    </>
  );
}
