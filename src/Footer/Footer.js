import React from "react";
import "./Footer.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { Link } from "react-router-dom";

//https://stackoverflow.com/questions/40491483/hide-collapse-navbar-after-link-click-react-redux-react-bootstrap

function Footer() {
  return (
    <>
      <div className="FooterBackgroundColor">
        <div className="FooterWidth">
          <div className="FooterContainer">
            <div className="LeftFooter">
              <li>
                {" "}
                <Link className="FooterLinkColors" to="/contact">
                  {" "}
                  contact{" "}
                </Link>
              </li>
              <li>
                {" "}
                <Link className="FooterLinkColors" to="/about">
                  {" "}
                  about{" "}
                </Link>
              </li>
            </div>

            <div className="MiddleFooter">
              <li>
                {" "}
                <Link className="FooterLinkColors" to="/contact">
                  {" "}
                  contact{" "}
                </Link>
              </li>
              <li>
                {" "}
                <Link className="FooterLinkColors" to="/about">
                  {" "}
                  about{" "}
                </Link>
              </li>
            </div>

            <div className="RightFooter">
              <li>
                {" "}
                <Link className="FooterLinkColors" to="/contact">
                  {" "}
                  contact{" "}
                </Link>
              </li>
              <li>
                {" "}
                <Link className="FooterLinkColors" to="/about">
                  {" "}
                  about{" "}
                </Link>
              </li>
            </div>
          </div>
        </div>
        <div className="Logo">
          <a href="https://iconscout.com/icons/tmall" rel="noopener">
            Tmall Logo Icon
          </a>{" "}
          on <a href="https://iconscout.com">Iconscout</a>
        </div>
      </div>
    </>
  );
}

export default Footer;
