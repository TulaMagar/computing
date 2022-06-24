import React from "react";
import "./html_style.css";
import UseTitle from "../../Title.js";
import RelatedLinks from "./html_links/related_links";
import RowCloumn from "./html_images/rows-and-columns.png";
import { Link } from "react-router-dom";
import HtmlCssJsEditor from "../../Editor/HtmlCssJsEditor.js";
export default function Html_tables() {
  UseTitle("What is HTML Table?");

  const TableIntro = ` <table>
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
  </tr>
</table>`;

  const TableIntro2 = ` <table>
    <thead>
        <tr>
            <th> Serial No </th>
            <th> Item Price </th>
            <th> Sold Price </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td> 1 </td>
            <td> 100 </td>
            <td> 200 </td>
        </tr>
        <tr>
            <td> 2 </td>
            <td> 200 </td>
            <td> 300 </td>
        </tr>
        <tr>
            <td> 3 </td>
            <td> 300 </td>
            <td> 305 </td>
        </tr>
    </tbody>
    <tfoot>
        <tr> 
            <td colspan="2"> Total </td> 
            <td> 805 </td> 
        </tr>
    </tfoot>
            
</table>`;

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
          <h1>What is Table in HTML?</h1>
          <p>
            A table is a way to display data in a HTML document. It is a way to
            organize data in a way that is easy to read and easy to use. Table
            has a table header and a table body. Table header is the top of the
            table and table body is below the table header. Table only has
            column and row.
          </p>
          <HtmlCssJsEditor props={TableIntro} />
          <p>
            Above is a simple table. We wrapped the table row (tr), column (th),
            and row (td) in table tag. then We wrapped column (th), and row (td)
            in the table row (tr).
          </p>
          <ul>
            <h1>Table Children Tags:</h1>
            <li>
              <code>{"<tr>"}</code> creates a new row and <code>{"</tr>"}</code>{" "}
              closes that row.
            </li>
            <li>
              <code>{"<th>"}</code> creates a new column cell and{" "}
              <code>{"</th>"}</code> closes that column cell.{" "}
              <strong>Firstname, Lastname, Age</strong> are the column header.
              Each vertical data belongs to the column header.
            </li>
            <li>
              <code>{"<td>"}</code> creates a new row cell and{" "}
              <code>{"</td>"}</code> closes that row cell.
            </li>
          </ul>
          <p>Here is the Microsoft excel table.</p>
          <img
            className="html_learning"
            src={RowCloumn}
            alt="Microsoft excel table for row and column"
          />
          <h1>Readable Table in HTML</h1>
          <p>
            To make a table readable in the code we can use the following way:
          </p>
          <HtmlCssJsEditor props={TableIntro2} />
          <ul>
            <li>
              <code>{"<thead>"}</code> tag is used to group header content in an
              HTML table.
            </li>
            <li>
              <code>{"<tbody>"}</code> tag is used to group body content in an
              HTML table. Group body content means to the data in the table.
            </li>
            <li>
              <code>{"<tfoot>"}</code> tag is used to group footer content in an
              HTML table. It is used to display totals and other information at
              the end of the table.
            </li>
          </ul>
        </div>

        <div id="right">
          <RelatedLinks />
        </div>
      </div>
    </>
  );
}
