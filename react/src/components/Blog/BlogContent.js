import React from "react";
import {Link} from "react-router-dom";

function BlogContent(props) {
  return (
    <div className="resume-item">
      <h5 className={props.title ? "resume-title" : "resume-no-title"}>
        {props.title}
      </h5>
      <ul>
        <em>{props.date}</em>
      </ul>
      <Link variant="primary" to={`/blog-content/${props.id}`}>
        Read
      </Link>
    </div>
  );
}

export default BlogContent;
