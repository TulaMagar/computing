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
              <h3 className="Footer_Column_Header">Company</h3>
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
              <li>
                {" "}
                <Link className="FooterLinkColors" to="/careers">
                  {" "}
                  Career{" "}
                </Link>
              </li>
              <li>
                {" "}
                <Link className="FooterLinkColors" to="/tour">
                  {" "}
                  Tour{" "}
                </Link>
              </li>
            </div>

            <div className="MiddleFooter">
              <h3 className="Footer_Column_Header">Product</h3>
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
              <h3 className="Footer_Column_Header">Social</h3>
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
