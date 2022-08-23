import React from "react";
import { Link } from "react-router-dom";

export default function AppliedJobListCard({ index, item }) {
  return (
    <li key={index}>
      <div className="post-bx">
        <div className="job-post-info m-a0">
          <h4>
            <Link to={"/job-detail"}>{item.title}</Link>
          </h4>
          <ul>
            <li>
              <Link to={"/"}>@company-name</Link>
            </li>
            <li>
              <i className="fa fa-map-marker"></i> Sacramento, California
            </li>
            <li>
              <i className="fa fa-money"></i> 25,000
            </li>
          </ul>
          <div className="job-time m-t15 m-b10">
            <Link to={""} className="mr-1">
              <span>PHP</span>
            </Link>
            <Link to={""} className="mr-1">
              <span>Angular</span>
            </Link>
            <Link to={""} className="mr-1">
              <span>Bootstrap</span>
            </Link>
            <Link to={""} className="mr-1">
              <span>Wordpress</span>
            </Link>
          </div>
          <div className="posted-info clearfix">
            <p className="m-tb0 text-primary float-left">
              <span className="text-black m-r10">Posted:</span> 2 day ago
            </p>
            <Link
              to={"/jobs-my-resume"}
              className={
                item.application == "Applied"
                  ? "site-button bg-warning button-sm float-right"
                  : "site-button  button-sm float-right"
              }
            >
              {item.application}
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
}
