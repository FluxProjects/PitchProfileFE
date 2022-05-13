import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LogoutUser, UpdateJobVideo } from "../../redux/action";

var bnr3 = require("./../../images/background/bg3.jpg");

export default function Header2() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const router = useHistory();
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  useEffect(() => {
    var btn = document.querySelector(".navicon");
    var aaa = document.querySelector(".myNavbar ");

    function toggleFunc() {
      return aaa.classList.toggle("show");
    }

    btn.addEventListener("click", toggleFunc);

    // Sidenav li open close
    var navUl = [].slice.call(document.querySelectorAll(".navbar-nav > li"));
    for (var y = 0; y < navUl.length; y++) {
      navUl[y].addEventListener("click", function () {
        checkLi(this);
      });
    }

    function checkLi(current) {
      navUl.forEach((el) => el.classList.remove("open"));
      current.classList.add("open");
    }
  }, []);

  const links = [
    {
      name: "All Companies",
      link: "/companies",
      index: "2",
    },
    {
      name: "All Candidates",
      link: "/browse-candidate-grid",
      index: "3",
    },
    {
      name: "All Jobs",
      link: "/browse-job-grid",
      index: "4",
    },
    {
      name: "About",
      link: "/about-us",
      index: "5",
    },
    {
      name: "Contact",
      link: "/contact",
      index: "6",
    },
  ];

  const dropDownVals = [
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
    { name: "Log Out", link: "/", icon: "fa fa-sign-out" },
  ];

  const callLogoutUser = async () => {
    await dispatch(LogoutUser(router));
  };

  return (
    <>
      <header className="site-header mo-left header fullwidth">
        <div className="sticky-header main-bar-wraper navbar-expand-lg">
          <div className="main-bar clearfix">
            <div className="container clearfix">
              <div style={{ marginTop: 5 }} className="logo-header mostion">
                <Link to={"./"}>
                  <img
                    src={require("./../../images/logo.png")}
                    className="logo"
                    alt="img"
                  />
                </Link>
              </div>

              <button
                className="navbar-toggler collapsed navicon justify-content-end"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>

              <div
                style={{ marginTop: 5 }}
                className="float-right header-nav navbar-collapse collapse myNavbar justify-content-start"
                id="navbarNavDropdown"
              >
                <ul className="nav navbar-nav">
                  {links.map((item, index) => (
                    <li
                      className={
                        item.link === `react/${window.location.pathname}`
                          ? "active"
                          : ""
                      }
                    >
                      <Link to={item.link} className="dez-page">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                  <li></li>
                  {/* <li style={{ marginLeft: 100 }}></li> */}

                  {state.authToken ? (
                    <>
                      <li className="active float-right">
                        <Link
                          onClick={(e) => {
                            e.preventDefault();
                            callLogoutUser();
                          }}
                          className="site-button"
                        >
                          <i className="fa fa-user"></i> Logout
                        </Link>
                      </li>

                      <li className="float-right " style={{ padding: 0 }}>
                        <Link className="noHover" to={"/company-profile"}>
                          <div className="testimonial-picHead radius ">
                            <img
                              src={
                                state.userDetails?.pic != null
                                  ? state.userDetails.pic
                                  : "https://as2.ftcdn.net/v2/jpg/00/64/67/63/1000_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
                              }
                              style={{
                                minHeight: "55px",
                                maxHeight: "55px",
                                maxWidth: "60px",
                                minWidth: "60px",
                              }}
                              alt=""
                              width="20"
                              height="20"
                            />
                          </div>
                        </Link>
                        {/* <Link className="dez-page">All links</Link> */}
                        <ul className="sub-menu">
                          {dropDownVals.map((item) => (
                            <li>
                              <Link to={item.link} className="dez-page">
                                {item.name}
                                {/* <span className="new-page">New</span> */}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                      <li
                        className="float-right noselect"
                        style={{ padding: 0 }}
                      >
                        <ul className="sub-menu">
                          {dropDownVals.map((item) => (
                            <li>
                              <Link to={item.link} className="dez-page">
                                {item.name}
                                {/* <span className="new-page">New</span> */}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    </>
                  ) : (
                    <li className="active float-right">
                      <Link to={"/login"} className="site-button">
                        <i className="fa fa-user"></i> Login
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/*  Model Start */}
      <Modal
        show={show}
        onHide={() => handleClose}
        className=" lead-form-modal"
        centered
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <button type="button" className="close" onClick={() => handleClose}>
              <span aria-hidden="true">&times;</span>
            </button>
            <div className="modal-body row m-a0 clearfix">
              <div
                className="col-lg-6 col-md-6 overlay-primary-dark d-flex p-a0"
                style={{
                  backgroundImage: "url(" + bnr3 + ")",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <div className="form-info text-white align-self-center">
                  <h3 className="m-b15">Login To You Now</h3>
                  <p className="m-b15">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry has been the industry.
                  </p>
                  <ul className="list-inline m-a0">
                    <li>
                      <Link to={"#"} className="m-r10 text-white">
                        <i className="fa fa-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to={"#"} className="m-r10 text-white">
                        <i className="fa fa-google-plus"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to={"#"} className="m-r10 text-white">
                        <i className="fa fa-linkedin"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to={"#"} className="m-r10 text-white">
                        <i className="fa fa-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to={"#"} className="m-r10 text-white">
                        <i className="fa fa-twitter"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 p-a0">
                <div className="lead-form browse-job text-left">
                  <form>
                    <h3 className="m-t0">Personal Details</h3>
                    <div className="form-group">
                      <input
                        value=""
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        value=""
                        className="form-control"
                        placeholder="Mobile Number"
                      />
                    </div>
                    <div className="clearfix">
                      <button
                        type="button"
                        className="btn-primary site-button btn-block"
                      >
                        Submit{" "}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      {/*  Model END */}
    </>
  );
}
