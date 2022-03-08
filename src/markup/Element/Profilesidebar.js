import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Profilesidebar(props) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const links = [
    { name: "Profile", link: "/jobs-profile", icon: "fa fa-user-o" },
    { name: "My Resume", link: "/jobs-my-resume", icon: "fa fa-file-text-o" },
    { name: "Saved Jobs", link: "/jobs-saved-jobs", icon: "fa fa-heart-o" },
    {
      name: "Applied Jobs",
      link: "/jobs-applied-job",
      icon: "fa fa-briefcase",
    },
    { name: "Job Alerts", link: "/jobs-alerts", icon: "fa fa-bell-o" },
    { name: "CV Manager", link: "/jobs-cv-manager", icon: "fa fa-id-card-o" },
    {
      name: "Change Password",
      link: "/jobs-change-password",
      icon: "fa fa-key",
    },
    { name: "Log Out", link: "/", icon: "fa fa-sign-out" },
  ];

  return (
    <div className="sticky-top">
      <div className="candidate-info">
        <div className="candidate-detail text-center">
          <div className="canditate-des">
            <Link to={""}>
              <img alt="" src={props.image} />
            </Link>
            <div
              className="upload-link"
              title="update"
              data-toggle="tooltip"
              data-placement="right"
            >
              <input type="file" className="update-flie" />
              <i className="fa fa-camera"></i>
            </div>
          </div>
          <div className="candidate-title">
            <div className="">
              <h4 className="m-b5">
                {state.userDetails.f_name} {state.userDetails.l_name}
              </h4>
              <p className="m-b0">
                <Link to={""}>Web developer</Link>
              </p>
            </div>
          </div>
        </div>
        <ul>
          {links.map((item) => (
            <li>
              <Link
                to={item.link}
                className={props.isActive == item.name ? "active" : ""}
              >
                <i className={item.icon} aria-hidden="true"></i>
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
