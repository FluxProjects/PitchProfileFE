import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  UpdateJobVideo,
  UploadCompanyProfileImage,
  UploadImage,
} from "../../redux/action";

export default function Profilesidebar(props) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const links = [
    { name: "Company Profile", link: "/company-profile", icon: "fa fa-user-o" },
    {
      name: "Post A Job",
      link: "/company-post-jobs",
      icon: "fa fa-file-text-o",
      onClick: () => {
        dispatch(UpdateJobVideo(""));
      },
    },
    // {
    //   name: "View My Resume",
    //   link: "/jobs-my-resume-view",
    //   icon: "fa fa-file-text-o",
    // },
    // {
    //   name: "Transactions",
    //   link: "/company-transactions",
    //   icon: "fa fa-heart-o",
    // },
    {
      name: "Manage jobs",
      link: "/company-manage-job",
      icon: "fa fa-briefcase",
    },
    { name: "Applications", link: "/company-resume", icon: "fa fa-bell-o" },
    // { name: "CV Manager", link: "/jobs-cv-manager", icon: "fa fa-id-card-o" },
    {
      name: "Change Password",
      link: "/company-change-password",
      icon: "fa fa-key",
    },
    {
      name: "Candidate Wishlist",
      link: "/my-wishlists-company",
      icon: "fa fa-heart",
    },
    // { name: "Log Out", link: "/", icon: "fa fa-sign-out" },
  ];

  return (
    <div className="sticky-top">
      <div className="candidate-info">
        <div className="candidate-detail text-center">
          <div className="canditate-des">
            <Link to={""}>
              <img
                alt=""
                src={
                  state.userDetails?.pic != null
                    ? state.userDetails?.pic
                    : "https://as2.ftcdn.net/v2/jpg/00/64/67/63/1000_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
                }
                style={{
                  minHeight: "145px",
                  maxHeight: "145px",
                }}
              />
            </Link>
            <div
              className="upload-link"
              title="update"
              data-toggle="tooltip"
              data-placement="right"
            >
              <input
                type="file"
                onChange={(e) => {
                  console.log("eeee", e.target.value);

                  dispatch(UploadCompanyProfileImage(e.target.files));
                }}
                className="update-flie"
              />
              <i className="fa fa-camera"></i>
            </div>
          </div>
          <div className="candidate-title">
            <div className="">
              <h4 className="m-b5">{state.userDetails?.company_name}</h4>
              <p className="m-b0">
                <Link to={""}>{state.userDetails?.tagline}</Link>
              </p>
            </div>
          </div>
        </div>
        <ul>
          {links.map((item) => (
            <li>
              <Link
                onClick={item.onClick}
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
