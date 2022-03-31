import React from "react";
import { Link } from "react-router-dom";

function BlogList() {
  const BlogPath = ["blog1", "blog2", "blog1", "blog2", "blog3-4-5"];

  return (
    <>
      {BlogPath.map((path, index) => (
        <div key={index}>
          <Link to={path}>{path}</Link>
        </div>
      ))}
    </>
  );
}

export default BlogList;
