import React from "react";
import { Link } from "react-router-dom";

export default function ListingSidebarRouterLink(props) {
  return (
    <li>
      <Link
        style={{
          backgroundColor: "#1d46f5",
          color: "white",
        }}
        // activeClass="active"
        className="scroll-bar nav-link"
        to="/jobs-my-resume-view"
      >
        <span>View my resume</span>
      </Link>
    </li>
  );
}
