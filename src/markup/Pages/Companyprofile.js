import React, { useState, useEffect } from "react";
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
import {
  GetCities,
  GetCountries,
  GetStates,
  updateCompany,
} from "../../redux/action";
import TextInputModal from "../Components/JobsMyResume/TextInputModal";

export default function Companyprofile() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [city, setCity] = useState(state.userDetails.city_id);
  const [stateName, setStateName] = useState(state.userDetails.state_id);
  const [country, setCountry] = useState(state.userDetails.country_id);
  const [loading, setLoading] = useState(true);
  const [companyName, setCompanyName] = useState(
    state.userDetails.company_name
  );
  const [tagline, setTagline] = useState(state.userDetails?.tagline);
  const [Description, setDescription] = useState(
    state.userDetails?.description
  );
  const [CompanyTypeVal, setCompanyTypeVal] = useState(
    state.userDetails?.company_type ? state.userDetails?.company_type : 0
  );
  const [CompanySize, setCompanySize] = useState(
    state.userDetails?.company_size ? state.userDetails?.company_size : 0
  );
  const [industry, setIndustry] = useState(
    state.userDetails?.industry ? state.userDetails?.industry : 0
  );
  const [website, setWebsite] = useState(state.userDetails?.website);
  const [address, setAddress] = useState(state.userDetails.address);
  const [phone, setPhone] = useState(state.userDetails.phone);
  const [email, setEmail] = useState(state.userDetails.email);
  const [facebook, setFacebook] = useState(state.userDetails?.facebook);
  const [twitter, setTwitter] = useState(state.userDetails?.twitter);
  const [google, setGoogle] = useState(state.userDetails?.google);
  const [linkedin, setLinkedin] = useState(state.userDetails?.linkedin);
  let inputRef;

  const callUpdateCompany = async () => {
    await dispatch(
      updateCompany(
        companyName,
        tagline,
        Description,
        CompanyTypeVal,
        CompanySize,
        industry,
        website,
        address,
        phone,
        email,
        facebook,
        twitter,
        google,
        linkedin,
        city,
        stateName,
        country
      )
    );
  };

  useEffect(() => {
    //  to get languages
    CallGetDropDown();
  }, []);

  const CallGetDropDown = async () => {
    await dispatch(GetCountries());
    await dispatch(GetStates(230));
    await dispatch(GetCities(3866));

    setLoading(false);
  };
  const CallGetCities = async (stateId) => {
    await dispatch(GetCities(stateId));
  };

  const CallGetStates = async (stateId) => {
    await dispatch(GetStates(stateId));
  };

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
                            <TextInputModal
                              onChange={(e) => {
                                console.log(e.target.value);
                                setCompanyName(e.target.value);
                              }}
                              value={companyName}
                              placeholder="Enter Company Name"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Tagline</label>
                            <TextInputModal
                              onChange={(e) => {
                                console.log(e.target.value);
                                setTagline(e.target.value);
                              }}
                              value={tagline}
                              placeholder="Enter Company Tagline"
                            />
                          </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                          <div className="form-group">
                            <label>Description:</label>
                            <textarea
                              value={Description}
                              onChange={(e) => {
                                setDescription(e.target.value);
                              }}
                              className="form-control"
                            ></textarea>
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
                                setCompanyTypeVal(e.target.value);
                              }}
                              value={CompanyTypeVal}
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
                                setCompanySize(e.target.value);
                              }}
                              value={CompanySize}
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
                                setIndustry(e.target.value);
                              }}
                              value={industry}
                              options={defaultPlaceholder}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Website</label>
                            <TextInputModal
                              onChange={(e) => {
                                console.log(e.target.value);
                                setWebsite(e.target.value);
                              }}
                              value={website}
                              placeholder="Website Link"
                            />
                          </div>
                        </div>
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
                            <TextInputModal
                              onChange={(e) => {
                                console.log(e.target.value);
                                setPhone(e.target.value);
                              }}
                              value={phone}
                              placeholder="Phone"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Email</label>
                            <TextInputModal
                              onChange={(e) => {
                                console.log(e.target.value);
                                setEmail(e.target.value);
                              }}
                              value={email}
                              placeholder="Email"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                          <div className="form-group">
                            <label>
                              Address
                              <span className="text-danger"> *</span>
                            </label>
                            <textarea
                              value={address}
                              onChange={(e) => {
                                setAddress(e.target.value);
                              }}
                              className="form-control"
                            ></textarea>
                          </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <div className="form-group">
                            <label>Country:</label>

                            {/* <DropdownSearch items={state.countries} /> */}
                            <DropDownModalComponent
                              onChange={(e) => {
                                console.log("eee", e.target.value);
                                CallGetStates(e.target.value);
                                setCountry(e.target.value);
                              }}
                              value={country}
                              options={state.countries}
                            />
                          </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <div className="form-group">
                            <label>State:</label>
                            <DropDownModalComponent
                              onChange={(e) => {
                                console.log("eee", e.target.value);
                                CallGetCities(e.target.value);

                                setStateName(e.target.value);
                                //   setLastUsed(e.target.value);
                              }}
                              value={stateName}
                              options={state.states}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <div className="form-group">
                            <label>City:</label>
                            <DropDownModalComponent
                              onChange={(e) => {
                                console.log("eee", e.target.value);
                                setCity(e.target.value);
                                //   setLastUsed(e.target.value);
                              }}
                              value={city}
                              options={state.cities}
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
                          Social links
                        </h5>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Facebook</label>
                            <TextInputModal
                              onChange={(e) => {
                                console.log(e.target.value);
                                setFacebook(e.target.value);
                              }}
                              value={facebook}
                              placeholder="https://www.facebook.com/"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Twitter</label>
                            <TextInputModal
                              onChange={(e) => {
                                console.log(e.target.value);
                                setTwitter(e.target.value);
                              }}
                              value={twitter}
                              placeholder="https://www.twitter.com/"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Google</label>
                            <TextInputModal
                              onChange={(e) => {
                                console.log(e.target.value);
                                setGoogle(e.target.value);
                              }}
                              value={google}
                              placeholder="https://www.google.com/"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Linkedin</label>
                            <TextInputModal
                              onChange={(e) => {
                                console.log(e.target.value);
                                setLinkedin(e.target.value);
                              }}
                              value={linkedin}
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
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          callUpdateCompany();
                        }}
                        type="submit"
                        className="site-button m-b30"
                      >
                        Save
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
