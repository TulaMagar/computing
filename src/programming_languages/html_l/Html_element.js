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
                <td>hyperlink is used to create a link.</td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;abbr&gt;</td>
                <td>abbreviation is used to create a abbreviation.</td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;acronym&gt;</td>
                <td>acronym is used to create a acronym.</td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;address&gt;</td>
                <td>address is used to create a address.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;applet&gt;</td>
                <td>applet is used to create a applet.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;area&gt;</td>
                <td>area is used to create a area.</td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;article&gt;</td>
                <td>article is used to create a article.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;aside&gt;</td>
                <td>aside is used to create a aside.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;audio&gt;</td>
                <td>audio is used to create a audio.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;b&gt;</td>
                <td>bold is used to create a bold.</td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;base&gt;</td>
                <td>base is used to create a base.</td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;basefont&gt;</td>
                <td>basefont is used to create a basefont.</td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;bdo&gt;</td>
                <td>bdo is used to create a bdo.</td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;bgsound&gt;</td>
                <td>bgsound is used to create a bgsound.</td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;big&gt;</td>
                <td>big is used to create a big.</td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;blink&gt;</td>
                <td>blink is used to create a blink.</td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;blockquote&gt;</td>
                <td>blockquote is used to create a blockquote.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;body&gt;</td>
                <td>body is used to create a body.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;br&gt;</td>
                <td>br is used to create a br.</td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;button&gt;</td>
                <td>button is used to create a button.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;canvas&gt;</td>
                <td>canvas is used to create a canvas.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;caption&gt;</td>
                <td>caption is used to create a caption.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;center&gt;</td>
                <td>center is used to create a center.</td>

                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;cite&gt;</td>
                <td>cite is used to create a cite.</td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;code&gt;</td>
                <td>code is used to create a code.</td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;col&gt;</td>
                <td>col is used to create a col.</td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;colgroup&gt;</td>
                <td>colgroup is used to create a colgroup.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;command&gt;</td>
                <td>command is used to create a command.</td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;datalist&gt;</td>
                <td>datalist is used to create a datalist.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;dd&gt;</td>
                <td>dd is used to create a dd.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;del&gt;</td>
                <td>del is used to create a del.</td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;details&gt;</td>
                <td>details is used to create a details.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;dfn&gt;</td>
                <td>dfn is used to create a dfn.</td>
                <td>Inline</td>
              </tr>
              <tr>
                <td>&lt;dialog&gt;</td>
                <td>dialog is used to create a dialog.</td>
                <td>Block</td>
              </tr>
              <tr>
                <td>&lt;dir&gt;</td>
                <td>dir is used to create a dir.</td>
                <td>Block</td>
              </tr>

              <tr>
                <td>&lt;div&gt;</td>
                <td>div is used to create a div.</td>
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
