import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";

var bnr3 = require("./../../images/background/bg3.jpg");

export default function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
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

  return (
    <>
      <header className="site-header mo-left header fullwidth">
        <div className="sticky-header main-bar-wraper navbar-expand-lg">
          <div className="main-bar clearfix">
            <div className="container clearfix">
              <div className="logo-header mostion">
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

              <div className="extra-nav">
                <div className="extra-cell">
                  <Link to={"/login"} className="site-button">
                    <i className="fa fa-user"></i> Sign Up
                  </Link>

                  <Link
                    to={"#"}
                    title="READ MORE"
                    onClick={() => handleShow()}
                    className="site-button"
                  >
                    <i className="fa fa-lock"></i> login{" "}
                  </Link>
                </div>
              </div>

              <div
                className="header-nav navbar-collapse collapse myNavbar justify-content-start"
                id="navbarNavDropdown"
              >
                <ul className="nav navbar-nav">
                  <li className="active">
                    {/* <Link to={""}> */}
                    <Link to={"/"} className="dez-page">
                      Home
                      {/* <i className="fa fa-chevron-down"></i> */}
                    </Link>
                    {/* <ul className="sub-menu">
                        <li>
                          <Link to={"./"} className="dez-page">
                            Home 1
                          </Link>
                        </li>
                        <li>
                          <Link to={"/index-2"} className="dez-page">
                            Home 2
                          </Link>
                        </li>
                      </ul> */}
                  </li>
                  <li>
                    <Link to={"/browse-candidates"}>For Candidates</Link>
                  </li>
                  <li>
                    <Link to={""}>
                      For Employers <i className="fa fa-chevron-down"></i>
                    </Link>
                    <ul className="sub-menu">
                      <li>
                        <Link to={"/company-profile"} className="dez-page">
                          Company Profile <span className="new-page">New</span>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/company-resume"} className="dez-page">
                          Employer Resume <span className="new-page">New</span>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/company-post-jobs"} className="dez-page">
                          Post A Jobs <span className="new-page">New</span>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/company-manage-job"} className="dez-page">
                          Manage jobs <span className="new-page">New</span>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/company-transactions"} className="dez-page">
                          Transactions <span className="new-page">New</span>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/browse-candidates"} className="dez-page">
                          Browse Candidates
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to={""}>
                      Pages <i className="fa fa-chevron-down"></i>
                    </Link>
                    <ul className="sub-menu">
                      <li>
                        <Link to={"/about-us"} className="dez-page">
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link to={"/job-detail"} className="dez-page">
                          Job Detail
                        </Link>
                      </li>
                      <li>
                        <Link to={"/companies"} className="dez-page">
                          companies
                        </Link>
                      </li>

                      <li>
                        <Link to={""} className="dez-page">
                          Browse Job <i className="fa fa-angle-right"></i>
                        </Link>
                        <ul className="sub-menu">
                          <li>
                            <Link to={"/browse-job-list"} className="dez-page">
                              browse job list
                            </Link>
                          </li>
                          <li>
                            <Link to={"/browse-job-grid"} className="dez-page">
                              browse job grid{" "}
                              <span className="new-page">New</span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to={"/browse-job-filter-list"}
                              className="dez-page"
                            >
                              browse filter list{" "}
                              <span className="new-page">New</span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to={"/browse-job-filter-grid"}
                              className="dez-page"
                            >
                              browse filter grid{" "}
                              <span className="new-page">New</span>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to={""} className="dez-page">
                          Jobs<i className="fa fa-angle-right"></i>
                        </Link>
                        <ul className="sub-menu">
                          <li>
                            <Link
                              to={"/category-all-jobs"}
                              className="dez-page"
                            >
                              all jobs <span className="new-page">New</span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to={"/category-company-jobs"}
                              className="dez-page"
                            >
                              company jobs <span className="new-page">New</span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to={"/category-designations-jobs"}
                              className="dez-page"
                            >
                              designations jobs{" "}
                              <span className="new-page">New</span>
                            </Link>
                          </li>
                          <li>
                            <Link to={"/category-jobs"} className="dez-page">
                              category jobs{" "}
                              <span className="new-page">New</span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to={"/category-location-jobs"}
                              className="dez-page"
                            >
                              location jobs{" "}
                              <span className="new-page">New</span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to={"/category-skill-jobs"}
                              className="dez-page"
                            >
                              skill jobs <span className="new-page">New</span>
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <Link to={"/login"} className="dez-page">
                          Login
                          {/* <i className="fa fa-angle-right"></i> */}
                        </Link>
                      </li>
                      <li>
                        <Link to={"/register"} className="dez-page">
                          register <i className="fa fa-angle-right"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/error-404"} className="dez-page">
                          Error 404
                        </Link>
                      </li>

                      <li>
                        <Link to={"/contact"} className="dez-page">
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/*  Model Start */}
      <Modal
        show={show}
        onHide={() => handleClose()}
        className=" lead-form-modal"
        centered
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <button
              type="button"
              className="close"
              onClick={() => handleClose()}
            >
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
                      <input className="form-control" placeholder="Name" />
                    </div>
                    <div className="form-group">
                      <input
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
