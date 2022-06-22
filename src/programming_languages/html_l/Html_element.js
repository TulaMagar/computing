import React from "react";
import "./html_style.css";
import UseTitle from "../../Title.js";
import RelatedLinks from "./html_links/related_links";
// import Highlight, { defaultProps } from "prism-react-renderer";
import Element from "../../img/html_images/html_tag.PNG";
import { Link } from "react-router-dom";
//https://html.com/tags/
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
          {/* <table className="html_attributes_table">
            <thead>
              <tr>
                <th>Block</th>
                <th>Inline</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Block element can have a inline element inside it.</td>
                <td>Inline element can't have a block element inside it.</td>
              </tr>
              <tr>
                <td>
                  Block element can have a block element inside it. Inline element can have a inline element inside it.
                </td>
                <td>&lt;head&gt;</td>
              </tr>
            </tbody>
          </table> */}

          <h1>For Example Of HTML Element</h1>
          <img className="html_learning" src={Element} alt="html_element" />

          <h1>List Of Element</h1>
          <table className="html_attributes_table">
            <thead>
              <tr>
                <th>Element</th>
                <th>Description</th>
                <th>Block or Inline</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>&lt;a&gt;</td>
                <td>Hyperlink is used to create a link.</td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;abbr&gt;</td>
                <td>
                  Abbreviation is used to create a abbreviation or acronym or
                  short form of a word.
                </td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;acronym&gt;</td>
                <td>
                  Acronym is used to create a abbreviation or acronym or short
                  form of a word.
                </td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;address&gt;</td>
                <td>
                  Address is used to create a address. It's like our living home
                  address. You can use address to contain contact information
                  for the person, author, the publisher, or the place of
                  publication, company name, etc.
                </td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;applet&gt;</td>
                <td>
                  Applet is used to create a applet. It's like a small program.
                  Applet let you embed a program in your web page. However, it's
                  not a good idea to use applet in your web page. Most of the
                  broswers don't support applet. You can other way such as{" "}
                  <code>{"<video> and <audio>"}</code> to embed a program in
                  your web page.
                </td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;area&gt;</td>
                <td>
                  Area is used to create a mathatical area figure of a image or
                  map such as a rectangle, circle, triangle, etc.
                </td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;article&gt;</td>
                <td>
                  Article element defines an article, i.e., a self-contained
                  unit of a Web page. The article should be a single,
                  stand-alone entity that is not part of another page or
                  section.
                </td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;aside&gt;</td>
                <td>
                  Aside element defines content that is quoted from another
                  source, but appears on the same page. The aside element can be
                  used to create a sidebar.
                </td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;audio&gt;</td>
                <td>
                  Audio element can be used to embed a audio file in your web
                  page. Browser audio built-in let you play audio files rather
                  than using plugins.
                </td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;b&gt;</td>
                <td>
                  Bold is used to create a bold text. Bold text look like this{" "}
                  <b>Bold Text</b>
                </td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;base&gt;</td>
                <td>
                  Base is used to create a base url. Base url is a links. It's a
                  link to the root of the web page.
                </td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;basefont&gt;</td>
                <td>
                  Basefont is used to create a base font size of a text or html
                  document. However, it has been removed from the HTML5
                  specification.
                </td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;bdo&gt;</td>
                <td>
                  bdo stand for bidirectional override. It's used to override
                  the directionality of text from left to right or right to
                  left. You need to use <code>{"dir=ltr or dir-rtl"}</code>{" "}
                  attribute to set the directionality.
                </td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;bgsound&gt;</td>
                <td>
                  Bgsound is used to create a background sound while loading the
                  web page. However, most of the browsers don't support bgsound
                  and it has deprecated.
                </td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;big&gt;</td>
                <td>
                  Big is used to create a big text. Big text look like this{" "}
                  <big>Big Text</big> in a line of text. Most of the browsers
                  still supports the big tag. However, it has been removed from
                  the HTML5 specification.
                </td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;blink&gt;</td>
                <td>blink is used to create a blink.</td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;blockquote&gt;</td>
                <td>
                  Blockquote is used to create a blockquote. Blockquote is a way
                  to quote a passage from another source. It's like a quotation
                  in a book.
                </td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;body&gt;</td>
                <td>
                  Body is used to create a body. Body is a container for all the
                  content of the web page such as text, images, and other HTML
                  elements.
                </td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;br&gt;</td>
                <td>
                  Br is used to create a line break. It's like break a line and
                  create a new line in a text.
                </td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;button&gt;</td>
                <td>
                  Button is used to create a button. Button is a clickable area
                  in a web page.
                </td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;canvas&gt;</td>
                <td>
                  Canvas is used to create a canvas. It's like a drawing board.
                </td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;caption&gt;</td>
                <td>Caption is a title of a table.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;center&gt;</td>
                <td>
                  Center is used to create a center text. Center text look like
                  this <center>Center Text</center>
                </td>

                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;cite&gt;</td>
                <td>
                  Cite is used to create a citation. Cite is a way to quote a
                  source of a passage.
                </td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;code&gt;</td>
                <td>
                  Code is a way to display a programming code in a web page and
                  it doesn't execute.
                </td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;col&gt;</td>
                <td>
                  Col is a way to create a column in a table and children of col
                  is td. colgroup is the parent of col.
                </td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;colgroup&gt;</td>
                <td>
                  Colgroup is a way to create a column group in a table. Col is
                  the child of colgroup.
                </td>

                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;command&gt;</td>
                <td>command is used to create a command.</td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;datalist&gt;</td>
                <td>
                  Datalist is used to create a datalist. Datalist is a select or
                  dropdown list of pre-defined options with a value for a user
                  to choose from.
                </td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;dd&gt;</td>
                <td>
                  Dd is a way to define a definition. Dd is a child of dt or dt
                  is a parent of dd. dt is used to define a term. dl is a parent
                  of dd and dt.
                </td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;del&gt;</td>
                <td>
                  The <code>{"<del>"}</code> tag is used to identify text that
                  has been deleted from a document but retained to show the
                  history of modifications made to the document. Pair a{" "}
                  <code>{"<del>"}</code> element with an <code>{"<ins>"}</code>{" "}
                  element to identify the inserted text that replaced the
                  deleted text.
                </td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;details&gt;</td>
                <td>
                  Details is a container for a set of related information. It's
                  a way to show or hide a set of information using a{" "}
                  <code>{"<summary>"}</code> tag. Details is a parent of{" "}
                  <code>{"<summary>"}</code>.
                </td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;dfn&gt;</td>
                <td>
                  The <code>{"<dfn>"}</code> element is used to identify the
                  defining instance of a term in an HTML document. When a term
                  is wrapped in <code>{"<dfn>"}</code> tags, browsers and web
                  crawlers will understand that nearby text contains a
                  definition of the term.
                </td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;dialog&gt;</td>
                <td>
                  Dialog is a container for a dialog. Dialog is a pop up window
                  or a modal window.
                </td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;dir&gt;</td>
                <td>
                  Dir is a container for a directory. It has been removed from
                  the HTML5 specification.
                </td>
                <td>Block</td>
              </tr>

              <tr>
                <td>&lt;div&gt;</td>
                <td>
                  Div is used to create a div. Div is a container for all the
                  content of the web page.
                </td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;dl&gt;</td>
                <td>dl is used to create a dl.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;dt&gt;</td>
                <td>dt is used to create a dt.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;em&gt;</td>
                <td>em is used to create a em.</td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;embed&gt;</td>
                <td>embed is used to create a embed.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;fieldset&gt;</td>
                <td>fieldset is used to create a fieldset.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;figcaption&gt;</td>
                <td>figcaption is used to create a figcaption.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;figure&gt;</td>
                <td>figure is used to create a figure.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;footer&gt;</td>

                <td>footer is used to create a footer.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;form&gt;</td>
                <td>form is used to create a form.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;h1&gt;</td>
                <td>h1 is used to create a h1.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;h2&gt;</td>
                <td>h2 is used to create a h2.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;h3&gt;</td>
                <td>h3 is used to create a h3.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;h4&gt;</td>
                <td>h4 is used to create a h4.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;h5&gt;</td>
                <td>h5 is used to create a h5.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;h6&gt;</td>
                <td>h6 is used to create a h6.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;head&gt;</td>
                <td>head is used to create a head.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;header&gt;</td>
                <td>header is used to create a header.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;hgroup&gt;</td>
                <td>hgroup is used to create a hgroup.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;hr&gt;</td>
                <td>hr is used to create a hr.</td>

                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;html&gt;</td>
                <td>html is used to create a html.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;input&gt;</td>
                <td>input is used to create a input.</td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;ins&gt;</td>
                <td>ins is used to create a ins.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;kbd&gt;</td>
                <td>kbd is used to create a kbd.</td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;keygen&gt;</td>
                <td>keygen is used to create a keygen.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;label&gt;</td>
                <td>label is used to create a label.</td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;legend&gt;</td>

                <td>legend is used to create a legend.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;li&gt;</td>
                <td>li is used to create a li.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;link&gt;</td>
                <td>link is used to create a link.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;main&gt;</td>
                <td>main is used to create a main.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;map&gt;</td>
                <td>map is used to create a map.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;mark&gt;</td>
                <td>mark is used to create a mark.</td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;menu&gt;</td>
                <td>menu is used to create a menu.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;menuitem&gt;</td>
                <td>menuitem is used to create a menuitem.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;meta&gt;</td>
                <td>meta is used to create a meta.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;meter&gt;</td>
                <td>meter is used to create a meter.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;nav&gt;</td>
                <td>nav is used to create a nav.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;noscript&gt;</td>
                <td>noscript is used to create a noscript.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;object&gt;</td>
                <td>object is used to create a object.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;ol&gt;</td>
                <td>ol is used to create a ol.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;optgroup&gt;</td>
                <td>optgroup is used to create a optgroup.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;option&gt;</td>
                <td>option is used to create a option.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;output&gt;</td>
                <td>output is used to create a output.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;p&gt;</td>
                <td>p is used to create a p.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;param&gt;</td>
                <td>param is used to create a param.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;picture&gt;</td>
                <td>picture is used to create a picture.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;pre&gt;</td>
                <td>pre is used to create a pre.</td>

                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;progress&gt;</td>
                <td>progress is used to create a progress.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;q&gt;</td>
                <td>q is used to create a q.</td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;rp&gt;</td>
                <td>rp is used to create a rp.</td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;rt&gt;</td>
                <td>rt is used to create a rt.</td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;ruby&gt;</td>
                <td>ruby is used to create a ruby.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;s&gt;</td>
                <td>s is used to create a s.</td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;samp&gt;</td>
                <td>samp is used to create a samp.</td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;script&gt;</td>
                <td>script is used to create a script.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;section&gt;</td>
                <td>section is used to create a section.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;select&gt;</td>
                <td>select is used to create a select.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;small&gt;</td>
                <td>small is used to create a small.</td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;source&gt;</td>
                <td>source is used to create a source.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;span&gt;</td>
                <td>span is used to create a span.</td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;strong&gt;</td>
                <td>strong is used to create a strong.</td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;style&gt;</td>
                <td>style is used to create a style.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;sub&gt;</td>
                <td>sub is used to create a sub.</td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;summary&gt;</td>
                <td>summary is used to create a summary.</td>
                <td>Block</td>
              </tr>

              <tr>
                <td>&lt;sup&gt;</td>
                <td>sup is used to create a sup.</td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;table&gt;</td>
                <td>table is used to create a table.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;tbody&gt;</td>
                <td>tbody is used to create a tbody.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;td&gt;</td>
                <td>td is used to create a td.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;textarea&gt;</td>
                <td>textarea is used to create a textarea.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;tfoot&gt;</td>
                <td>tfoot is used to create a tfoot.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;th&gt;</td>
                <td>th is used to create a th.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;thead&gt;</td>
                <td>thead is used to create a thead.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;time&gt;</td>
                <td>time is used to create a time.</td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;title&gt;</td>
                <td>title is used to create a title.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;tr&gt;</td>
                <td>tr is used to create a tr.</td>

                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;track&gt;</td>
                <td>track is used to create a track.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;u&gt;</td>
                <td>u is used to create a u.</td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;ul&gt;</td>
                <td>ul is used to create a ul.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;var&gt;</td>
                <td>var is used to create a var.</td>

                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;video&gt;</td>
                <td>video is used to create a video.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;wbr&gt;</td>
                <td>wbr is used to create a wbr.</td>
                <td>Inline</td>
              </tr>
            </tbody>
          </table>
          <p>
            <strong>Note:</strong> There are many other tags that are not listed
            in this table. You can find a complete list of tags on the{" "}
            <a href="https://www.w3schools.com/tags/default.asp">
              W3Schools page
            </a>
            .
          </p>
        </div>

        <div id="right">
          <RelatedLinks />
        </div>
      </div>
    </>
  );
}
