import React from "react";
import UseTitle from "../../Title.js";

//https://www.toptal.com/designers/htmlarrows/arrows/

function UpdateProjectInReact() {
  UseTitle("How to Upgrade React?");
  return (
    <>
      <div id="container">
        <div id="left">
          <br />
          <h1>RIGHTTT SIDE1</h1>
          <br />
          <h1>RIGHT SIDE2</h1>
          <br />
          <h1>RIGHT SIDE3</h1>
          <br />
          <h1>RIGHT SIDE4</h1>
          <br />
          <h1>RIGHT SIDE5</h1>
          <br />
          <h1>RIGHT SIDE6</h1>
          <br />
          <h1>RIGHTTT SIDE7</h1>
        </div>

        <div id="middle">
          <h1>How to Upgrade, Install and Uninstall React?</h1>
          <p>
            In this article, we will learn how to upgrade your React app,
            dependencys, and more. We will also cover how to install dependencys
            and how to use them.
          </p>

          <h1> Upgrade Existing React App </h1>
          <p>
            Sometimes you need to upgrade your React app to a new version. You
            can do this by running the following command from your project root
            directory:
          </p>
          <pre className="CodeSampleBackground">
            <li className="OneLine"> npm install --save react@latest </li>
          </pre>
          <p>
            <code>--save </code>
            will save the depenency in the package.json file. Sometimes
            upgrading to new react version using above command line might give
            you a conflict so you can use following command line:{" "}
          </p>
          <pre className="CodeSampleBackground">
            <li className="OneLine">
              {" "}
              npm install --save react@latest --force
            </li>
          </pre>
          <p>
            {" "}
            <code>--force </code> will fetch resource and install everything{" "}
          </p>

          <pre className="CodeSampleBackground">
            <li className="OneLine">
              {" "}
              npm install --save react@latest --legacy-peer-deps
            </li>
          </pre>
          <p>
            {" "}
            <code>--legacy-peer-deps </code>will not install any older version
            dependencies{" "}
          </p>

          <h1> Install Packages or Dependencies & Node_Modules </h1>
          <p>
            You might save react app in a cloud server, USB or somethings else.
            Your not using the same computer to develop react app and use a
            different computer to run it. In this case you need to install the
            dependencys. You can install dependencys using the following command
            from your project root directory (i.e. where package.json is
            located):
          </p>
          <pre className="CodeSampleBackground">
            <li className="OneLine"> npm install --save</li>
          </pre>
          <p>
            <code> npm install --save </code>
            will install the dependencies for your app, rather than install it
            as a module.
          </p>
          <p>
            <span className="Note">Note that: </span>
            above command can also be use to install node_modules folder.
          </p>
        </div>

        <div id="right">
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
          <br />
          <h1>RIGHT SIDE</h1>
          <br />
          <h1>RIGHTT SIDE</h1>
          <br />
        </div>
      </div>
    </>
  );
}

export default UpdateProjectInReact;
