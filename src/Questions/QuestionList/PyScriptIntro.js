import React from "react";
import "../Questions_List.css";
import "bootstrap/dist/css/bootstrap.css";
import UseTitle from "../../Title.js";
import "../QuestionList/TitleInReact.css";

function PyScriptIntro() {
  UseTitle("Getting started with PyScript?");

  return (
    <>
      <div id="container">
        <div id="left">
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
        </div>

        <div id="middle">
            <h1>Getting started with PyScript</h1>
            <p>This website will guide you through getting started with PyScript.</p>
            <h1>Development setup</h1>
            <p>
                PyScript does not require any development environment other than a web browser. We recommend using 
                <a className="NoUnderLine" href="https://www.google.com/chrome/downloads/"> Chrome. </a>
                If you're using <a className="NoUnderLine" href="https://code.visualstudio.com/"> VSCode</a>, the 
                <a className="NoUnderLine" href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer"> Live Server extension </a> can be used to reload the page as you edit the HTML file.
            </p>
            <h1>Installation</h1>
            <p>
                There is no installation required. In this document, we'll use the PyScript assets served on
                <a className="pyScriptFullPath" href="https://pyscript.net"> https://pyscript.net. </a>
                If you want to download the source and build it yourself, follow the instructions in the README.md file.
            </p>

            <h1>Your first PyScript HTML file</h1>
            <p>Here's a "Hello, world!" example using PyScript.</p>

            <p>
                Using your favorite editor, create a new file called hello.html in the same directory as your PyScript, 
                JavaScript, and CSS files with the following content, and open the file in your web browser. You can 
                typically open an HTML by double-clicking it in your file explorer.
            </p>
            <pre className="CodeSampleBackground">
                <span class="pl-kos">&lt;</span>
                <span class="pl-ent">html</span>
                <span class="pl-kos">&gt;</span>
                <span class="pl-kos">&lt;</span>
                <span class="pl-ent">head</span>
                <span class="pl-kos">&gt;</span>
                <span class="pl-kos">&lt;</span>
                <span class="pl-ent">link</span> 
                <span class="pl-c1">rel</span>="
                <span class="pl-s">stylesheet</span>" 
                <span class="pl-c1">href</span>="
                <span class="pl-s">https://pyscript.net/alpha/pyscript.css</span>" /&gt;
                <span class="pl-kos">&lt;</span><span class="pl-ent">script</span> 
                <span class="pl-c1">defer</span> 
                <span class="pl-c1">src</span>="
                <span class="pl-s">https://pyscript.net/alpha/pyscript.js</span>"
                <span class="pl-kos">&gt;</span><span class="pl-kos">&lt;/
                </span><span class="pl-ent">script</span>
                <span class="pl-kos">&gt;</span>
                <span class="pl-kos">&lt;/</span>
                <span class="pl-ent">head</span>
                <span class="pl-kos">&gt;</span>
                <span class="pl-kos">&lt;</span>
                <span class="pl-ent">body</span>
                <span class="pl-kos">&gt;</span> 
                <span class="pl-kos">&lt;</span>
                <span class="pl-ent">py-script</span>
                <span class="pl-kos">&gt;</span> print('Hello, World!') 
                <span class="pl-kos">&lt;/</span>
                <span class="pl-ent">py-script</span>
                <span class="pl-kos">&gt;</span> 
                <span class="pl-kos">&lt;/</span>
                <span class="pl-ent">body</span>
                <span class="pl-kos">&gt;</span>
                <span class="pl-kos">&lt;/</span>
                <span class="pl-ent">html</span>
                <span class="pl-kos">&gt;</span>
            </pre>
        </div>

        <div id="right">
          <h3 style={{ color: "lightblue" }}>Related Question and Answer</h3>
          <button>
            <a href="https://techcomputinginfo.com/#/question/blog">
              For example, relating questions For example, relating questions
              For example, relating questions
            </a>
          </button>
          <br />
          <button>
            <a href="https://techcomputinginfo.com/#/question/blog">
              For example, relating questions
            </a>
          </button>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHT SIDE</h1>

          <br />
        </div>
      </div>
    </>
  );
}

export default PyScriptIntro;
