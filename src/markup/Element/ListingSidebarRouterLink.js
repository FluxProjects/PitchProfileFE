import React from "react";
import { Link } from "react-router-dom";

export default function ListingSidebarRouterLink({ isView }) {
  return (
    <li>
      {isView ? (
        <Link
          style={{
            backgroundColor: "#1d46f5",
            color: "white",
          }}
          // activeClass="active"
          className="scroll-bar nav-link"
          to="/jobs-my-resume"
        >
          <span>Back to edit</span>
        </Link>
      ) : (
        <Link
          style={{
            backgroundColor: "#1d46f5",
            color: "white",
          }}
          // activeClass="active"
          className="scroll-bar nav-link"
          to="/jobs-my-resume-view"
        >
          <span>View My Resume</span>
        </Link>
      )}
    </li>
  );
}
