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
            The below image shows the HTML tag and its attributes. If you
            understand what the image trying to tell you then you can easily
            understand the HTML attributes, where to put them, and what they do.
          </p>
          <img
            className="html_learning"
            src={Html_attributes}
            alt="html_attributes"
          />
          <p>
            HTML attributes are properties that are added to HTML elements and
            inside opening tags. Attributes are used to add extra information to
            HTML elements.
          </p>
          <h1>Extra Information About HTML Elements?</h1>
          <section>
            They are many HTML attributes that are used to add extra information
            to HTML elements.
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
                    HTMl class attributes are used that defines the specific
                    class name of the one to many elements. Class attribute is
                    used to select the elements that have the same class name.
                    Css and JavaScript can access the class name of the elements
                    to do specific tasks.
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
                    ID attribute is used to select the element that has the same
                    ID. Or ID and class attribute is used to select the element
                    that has the same ID and class name. But the different is ID
                    can't have multiple same attribute name. ID most be unique
                    everything you gave a ID attribute. ID is like database row
                    ID such as excel, sql, etc. They don't allow duplicate ID.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>style</code>
                  </td>
                  <td>
                    <code>inline css style for any html elements</code>
                  </td>
                  <td>
                    Style attribute is used to add css style to the elements.
                    You can add inline css style to the elements.
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
                    Src attribute is used to add the image source to the image.
                    You src local or online images.
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
                    Alt attribute is used to add the image description to the
                    image. If the image is not found then the description will
                    be shown.
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
                    Href attribute is used to add the link to the link. You can
                    add the local or online link.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code> accept-charset</code>
                  </td>
                  <td>
                    <code>form</code>
                  </td>

                  <td>
                    Accept-charset attribute is used to add the charset to the
                    form and encodes the data to utf-8. You don't need to add
                    the accept-charset if you are specific meta data as an utf-8
                    in the head.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>accesskey</code>
                  </td>
                  <code>button, input, label, legend, textarea</code>
                  <td>
                    The accesskey attribute specifies a shortcut key to
                    activate/focus an element.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>action</code>
                  </td>
                  <td>
                    <code>form</code>
                  </td>
                  <td>
                    The action attribute specifies the action to be performed on
                    a form and is used to send the form data to the server.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>autocomplete</code>
                  </td>
                  <td>
                    <code>input</code>
                  </td>
                  <td>
                    The autocomplete attribute specifies whether the input field
                    should be autocompleted by using on and off value.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>autofocus</code>
                  </td>
                  <td>
                    <code>form, input</code>
                  </td>
                  <td>
                    The autofocus attribute specifies that the which input field
                    should be focused when the page loads.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>autoplay</code>
                  </td>
                  <td>
                    <code>video</code>
                  </td>
                  <td>
                    The autoplay attribute specifies that the video should be
                    autoplayed.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>checked</code>
                  </td>
                  <td>
                    <code>input, radio-button</code>
                  </td>
                  <td>
                    The checked attribute specifies that the check field should
                    be checked.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>cols</code>
                  </td>
                  <td>
                    <code>textarea</code>
                  </td>
                  <td>
                    The cols attribute specifies the number of columns in a
                    textarea.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>colspan</code>
                  </td>
                  <td>
                    <code>td, th</code>
                  </td>
                  <td>
                    The colspan attribute specifies the number of columns a cell
                    should span.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>content</code>
                  </td>
                  <td>
                    <code>meta</code>
                  </td>
                  <td>
                    The content attribute specifies the content of the meta tag.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>contenteditable</code>
                  </td>
                  <td>
                    <code>any html elements</code>
                  </td>
                  <td>
                    The contenteditable attribute specifies whether the content
                    of the element is editable.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>contextmenu</code>
                  </td>
                  <td>
                    <code>any html elements</code>
                  </td>
                  <td>This is used to add a contextmenu to an HTML element.</td>
                </tr>
                <tr>
                  <td>
                    <code>controls</code>
                  </td>
                  <td>
                    <code>audio, video</code>
                  </td>
                  <td>
                    The controls attribute specifies that the media element
                    should be displayed with controls.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>coords</code>
                  </td>
                  <td>
                    <code>area</code>
                  </td>
                  <td>
                    The coords attribute specifies the coordinates of the shape.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>data</code>
                  </td>
                  <td>
                    <code>any html elements</code>
                  </td>
                  <td>
                    The data attribute specifies the value of the element.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>datetime</code>
                  </td>
                  <td>
                    <code>input</code>
                  </td>
                  <td>
                    The datetime attribute specifies the date and time when the
                    element was last modified.
                  </td>
                </tr>

                <tr>
                  <td>
                    <code>dir</code>
                  </td>
                  <code> any html elements</code>
                  <td>
                    The dir attribute specifies the text direction of the
                    element. You can use ltr or rtl to specify the text
                    direction. ltr is for left to right and rtl is for right to
                    left. The default value is ltr.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>disabled</code>
                  </td>
                  <td>
                    <code>button, input, select, textarea</code>
                  </td>
                  <td>
                    The disabled attribute specifies that the element should be
                    disabled cannot be used.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>enctype</code>
                  </td>
                  <td>
                    <code>form</code>
                  </td>
                  <td>
                    The enctype attribute specifies how the form-data should be
                    encoded.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>for</code>
                  </td>
                  <td>
                    <code>label</code>
                  </td>

                  <td>
                    The for attribute specifies which form element a label is
                    for.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>formaction</code>
                  </td>
                  <td>
                    <code>input, button</code>
                  </td>
                  <td>
                    The formaction attribute specifies the action of the form.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>formenctype</code>
                  </td>
                  <td>
                    <code>input, button</code>
                  </td>
                  <td>
                    The formenctype attribute specifies how the form-data should
                    be encoded.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>formmethod</code>
                  </td>
                  <td>
                    <code>input, button</code>
                  </td>
                  <td>
                    The formmethod attribute specifies the HTTP method used to
                    send the form-data.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>formtarget</code>
                  </td>
                  <td>
                    <code>input, button</code>
                  </td>
                  <td>
                    The formtarget attribute specifies where to display the form
                    - in a new window or in the same window.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>script</code>
                  </td>
                  <td>
                    <code> script {"( Code )"}</code>
                  </td>
                  <td>
                    The script attribute specifies a script to be run when the
                    page is loaded.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>crossorigin</code>
                  </td>
                  <td>
                    <code>img, audio, video, script, and link</code>
                  </td>
                  <td>
                    The crossorigin attribute specifies whether the content of
                    the element can be loaded from a source, different or
                    orginal origin.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>decoding </code>
                  </td>
                  <td>
                    <code>img, audio, video, script, and link</code>
                  </td>
                  <td>
                    The decoding attribute specifies how the element should be
                    decoded.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>draggable</code>
                  </td>
                  <td>
                    <code>img, audio, video, script, and link</code>
                  </td>
                  <td>
                    The draggable attribute specifies whether the element can be
                    dragged here and there on the page.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>dropzone</code>
                  </td>
                  <td>
                    <code>img, audio, video, script, and link</code>
                  </td>
                  <td>
                    The dropzone attribute ttribute specifies whether the
                    dragged data is copied, moved, or linked, when it is dropped
                    on an element.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code> defer </code>
                  </td>
                  <td>
                    <code> script </code>
                  </td>
                  <td>
                    The defer attribute specifies that the script should be
                    loaded after the page has been loaded.
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
