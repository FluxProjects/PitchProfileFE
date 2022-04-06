import React from "react";
import { Link } from "react-router-dom";
import Header2 from "./../Layout/Header2";
import Footer from "./../Layout/Footer";
import { Form } from "react-bootstrap";
import GoogleMaps from "simple-react-google-maps";
import DropDownModalComponent from "../Components/JobsMyResume/DropDownModalComponent";
import {
  CompanySizeLevel,
  CompanyType,
  defaultPlaceholder,
} from "../../utils/DropDownUtils";
import { useDispatch, useSelector } from "react-redux";

export default function Companyprofile() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  let inputRef;

  return (
    <>
      <Header2 />
      <div className="page-content bg-white">
        <div className="content-block">
          <div className="section-full bg-white p-t50 p-b20">
            <div className="container">
              <div className="row">
                <div className="col-xl-3 col-lg-4 m-b30">
                  <div className="sticky-top">
                    <div className="candidate-info company-info">
                      <div className="candidate-detail text-center">
                        <div className="canditate-des">
                          <Link to={""}>
                            <img
                              alt=""
                              src={require("./../../images/logo/icon3.jpg")}
                            />
                          </Link>
                          <div
                            className="upload-link"
                            title="update"
                            data-toggle="tooltip"
                            data-placement="right"
                          >
                            <input type="file" className="update-flie" />
                            <i className="fa fa-pencil"></i>
                          </div>
                        </div>
                        <div className="candidate-title">
                          <h4 className="m-b5">
                            <Link to={""}>@COMPANY</Link>
                          </h4>
                        </div>
                      </div>
                      <ul>
                        <li>
                          <Link to={"/company-profile"} className="active">
                            <i className="fa fa-user-o" aria-hidden="true"></i>
                            <span>Company Profile</span>
                          </Link>
                        </li>
                        <li>
                          <Link to={"/company-post-jobs"}>
                            <i
                              className="fa fa-file-text-o"
                              aria-hidden="true"
                            ></i>
                            <span>Post A Job</span>
                          </Link>
                        </li>
                        <li>
                          <Link to={"/company-transactions"}>
                            <i className="fa fa-random" aria-hidden="true"></i>
                            <span>Transactions</span>
                          </Link>
                        </li>
                        <li>
                          <Link to={"/company-manage-job"}>
                            <i
                              className="fa fa-briefcase"
                              aria-hidden="true"
                            ></i>
                            <span>Manage jobs</span>
                          </Link>
                        </li>
                        <li>
                          <Link to={"/company-resume"}>
                            <i
                              className="fa fa-id-card-o"
                              aria-hidden="true"
                            ></i>
                            <span>Resume</span>
                          </Link>
                        </li>
                        <li>
                          <Link to={"/jobs-change-password"}>
                            <i className="fa fa-key" aria-hidden="true"></i>
                            <span>Change Password</span>
                          </Link>
                        </li>
                        <li>
                          <Link to={"./"}>
                            <i
                              className="fa fa-sign-out"
                              aria-hidden="true"
                            ></i>
                            <span>Log Out</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-8 m-b30">
                  <div className="job-bx submit-resume">
                    <div className="job-bx-title clearfix">
                      <h5 className="font-weight-700 pull-left text-uppercase">
                        Company Profile
                      </h5>
                      <Link
                        to={"/company-profile"}
                        className="site-button right-arrow button-sm float-right"
                      >
                        Back
                      </Link>
                    </div>
                    <form>
                      <div className="row m-b30">
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>
                              Company Name
                              <span className="text-danger"> *</span>
                            </label>

                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Company Name"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Tagline</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Website Link"
                            />
                          </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                          <div className="form-group">
                            <label>Description:</label>
                            <textarea className="form-control"></textarea>
                          </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>
                              Company Type
                              <span className="text-danger"> *</span>
                            </label>
                            <DropDownModalComponent
                              onChange={(e) => {
                                console.log("eee", e.target.value);
                              }}
                              // value={industry}
                              options={CompanyType}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Company Size</label>
                            <DropDownModalComponent
                              onChange={(e) => {
                                console.log("eee", e.target.value);
                              }}
                              // value={industry}
                              options={CompanySizeLevel}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>
                              Industry
                              <span className="text-danger"> *</span>
                            </label>
                            <DropDownModalComponent
                              onChange={(e) => {
                                console.log("eee", e.target.value);
                                // setIndustry(e.target.value);
                              }}
                              // value={industry}
                              options={defaultPlaceholder}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Website</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Website Link"
                            />
                          </div>
                        </div>

                        {/* <div className="col-lg-12 col-md-12">
                          <form className="attach-resume">
                            <div className="row">
                              <div className="col-lg-12 col-md-12">
                                {state.singleUserData.cover_letter ? (
                                  <>
                                    <span
                                      onClick={() => inputRef.click()}
                                      className="site-button add-btn button-sm float-right"
                                    >
                                      <i className="fa fa-pencil m-r5"></i> Edit
                                      <input
                                        ref={(refParam) =>
                                          (inputRef = refParam)
                                        }
                                        type="file"
                                        className="site-button form-control"
                                        id="customFile"
                                        style={{ display: "none" }}
                                        onChange={(e) => {
                                          // dispatch(
                                          //   UploadCoverLetter(e.target.files)
                                          // );
                                        }}
                                      />
                                    </span>
                                    <br />
                                    <br />
                                    <a
                                      download
                                      href={state.singleUserData.cover_letter}
                                    >
                                      {state.singleUserData.cover_letter}
                                    </a>
                                  </>
                                ) : (
                                  <div className="form-group">
                                    <div className="custom-file">
                                      <p className="m-auto align-self-center">
                                        <i className="fa fa-upload"></i>
                                        Upload Logo File size is 3 MB
                                      </p>
                                      <input
                                        type="file"
                                        className="site-button form-control"
                                        id="customFile"
                                        onChange={(e) => {
                                          // dispatch(
                                          //   UploadCoverLetter(e.target.files)
                                          // );
                                        }}
                                      />
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          </form>
                        </div> */}
                      </div>

                      <div className="job-bx-title clearfix">
                        <h5 className="font-weight-700 pull-left text-uppercase">
                          Contact Information
                        </h5>
                      </div>
                      <div className="row m-b30">
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Phone</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="+1 123 456 7890"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Email</label>
                            <input
                              type="email"
                              className="form-control"
                              placeholder="exemple@gmail.com"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                          <div className="form-group">
                            <label>
                              Address
                              <span className="text-danger"> *</span>
                            </label>
                            <textarea className="form-control"></textarea>
                          </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>
                              City
                              <span className="text-danger"> *</span>
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Delhi"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>
                              State
                              <span className="text-danger"> *</span>
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              placeholder="504030"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>
                              Contry
                              <span className="text-danger"> *</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="India"
                            />
                          </div>
                        </div>

                        {/* <div className="col-lg-12">
                          <GoogleMaps
                            apiKey={"AIzaSyBPDjB2qkV4Yxn9h0tGSk2X5uH6NKmssXw"}
                            style={{
                              height: "300px",
                              width: "100%",
                              border: "0",
                            }}
                            zoom={6}
                            center={{ lat: 37.4224764, lng: -122.0842499 }}
                            markers={{ lat: 37.4224764, lng: -122.0842499 }} //optional
                          />
                        </div> */}
                      </div>

                      <div className="job-bx-title clearfix">
                        <h5 className="font-weight-700 pull-left text-uppercase">
                          Social link
                        </h5>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Facebook</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="https://www.facebook.com/"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Twitter</label>
                            <input
                              type="email"
                              className="form-control"
                              placeholder="https://www.twitter.com/"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Google</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="https://www.google.com/"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Linkedin</label>
                            <input
                              type="email"
                              className="form-control"
                              placeholder="https://www.linkedin.com/"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="job-bx-title clearfix">
                        <h5 className="font-weight-700 pull-left text-uppercase">
                          Disclaimer
                        </h5>
                      </div>

                      <div className="row">
                        <div class="form-group form-check">
                          <input
                            type="checkbox"
                            class="form-check-input"
                            id="exampleCheck1"
                          />
                          <label class="" for="exampleCheck1">
                            I can confirm that I am an authorised representative
                            of this company and then have the permission to
                            create this page on company's behalf.
                          </label>
                        </div>
                      </div>
                      <button type="submit" className="site-button m-b30">
                        Update Setting
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
