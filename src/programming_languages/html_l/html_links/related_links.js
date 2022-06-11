import React from "react";
import "../../programming_languages.css";
import { Link } from "react-router-dom";

export default function RelatedLinks() {
  return (
    <div>
      <Link className="related_links" to="/html_home">
        HTML Home
      </Link>
      <Link className="related_links" to="/html_intro">
        HTML Introduciton
      </Link>
      <Link className="related_links" to="/html_editor">
        HTML Editor
      </Link>
    </div>
  );
}
