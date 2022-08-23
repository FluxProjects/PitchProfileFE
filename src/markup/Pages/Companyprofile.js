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
  GetDepartments,
  GetEducationLevels,
  GetIndustries,
  GetSkills,
  GetStates,
  updateCompany,
} from "../../redux/action";
import TextInputModal from "../Components/JobsMyResume/TextInputModal";
import Profilesidebar from "../Element/CompanyProfileSidebar";
import { isValidUrl, validatePhoneNumber } from "../../utils/functions";

export default function Companyprofile() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [city, setCity] = useState(
    state?.userDetails?.city_id ? state?.userDetails?.city_id : 2
  );
  const [stateName, setStateName] = useState(
    state?.userDetails?.state_id ? state?.userDetails?.state_id : 3805
  );
  const [country, setCountry] = useState(
    state?.userDetails?.country_id ? state?.userDetails?.country_id : 230
  );
  const [loading, setLoading] = useState(true);
  const [BtnLoading, setBtnLoading] = useState(false);

  const [companyName, setCompanyName] = useState(
    state?.userDetails?.company_name
  );
  const [tagline, setTagline] = useState(state?.userDetails?.tagline);
  const [Description, setDescription] = useState(
    state?.userDetails?.description ? state?.userDetails?.description : ""
  );
  const [CompanyTypeVal, setCompanyTypeVal] = useState(
    state?.userDetails?.company_type ? state?.userDetails?.company_type : 1
  );
  const [CompanySize, setCompanySize] = useState(
    state?.userDetails?.company_size ? state?.userDetails?.company_size : 1
  );
  const [industry, setIndustry] = useState(
    state?.userDetails?.industry ? state?.userDetails?.industry : 1
  );
  const [website, setWebsite] = useState(state?.userDetails?.website);
  const [address, setAddress] = useState(state?.userDetails?.address);
  const [phone, setPhone] = useState(state?.userDetails?.phone);
  const [email, setEmail] = useState(state?.userDetails?.email);
  const [facebook, setFacebook] = useState(state?.userDetails?.facebook);
  const [twitter, setTwitter] = useState(state?.userDetails?.twitter);
  const [google, setGoogle] = useState(state?.userDetails?.google);
  const [linkedin, setLinkedin] = useState(state?.userDetails?.linkedin);
  const [fieldAlert, setFieldAlert] = useState(false);
  const [agreement, setAgreement] = useState(state?.userDetails?.agreement);
  const [FieldText, setFieldText] = useState("");
  const [isFirstFecth, setIsFirstFecth] = useState(true);

  let inputRef;

  const callUpdateCompany = async () => {
    setFieldAlert(false);
    if (companyName == "") {
      console.log("companyName", companyName);
      setBtnLoading(false);
      setFieldText("Enter Company Name");

      setFieldAlert(true);
      return;
    }
    if (email == "") {
      console.log("email", email);
      setBtnLoading(false);
      setFieldText("Enter email");
      setFieldAlert(true);
      return;
    }
    if (CompanyTypeVal == "") {
      console.log("CompanyTypeVal", CompanyTypeVal);
      setBtnLoading(false);
      setFieldText("Enter CompanyTypeVal");

      setFieldAlert(true);
      return;
    }
    if (industry == null) {
      console.log("industry", industry);
      setBtnLoading(false);
      setFieldText("Enter industry");

      setFieldAlert(true);
      return;
    }
    if (address == "") {
      console.log("address", address);
      setBtnLoading(false);
      setFieldText("Enter address");

      setFieldAlert(true);
      return;
    }
    if (agreement == false) {
      console.log("agreement", agreement);
      setBtnLoading(false);
      setFieldText("Enter agreement");

      setFieldAlert(true);
      return;
    }
    if (Description == "") {
      console.log("Description", Description);
      setBtnLoading(false);
      setFieldText("Enter Description");

      setFieldAlert(true);
      return;
    }
    if (website != "") {
      if (isValidUrl(website) == false) {
        setFieldAlert(true);
        setFieldText("Enter valid URL");
        setBtnLoading(false);

        return;
      }
    }

    if (facebook != "") {
      if (isValidUrl(facebook) == false) {
        setFieldAlert(true);
        setFieldText("Enter valid Facebook URL");
        setBtnLoading(false);

        return;
      }
    }
    if (twitter != "") {
      if (isValidUrl(twitter) == false) {
        setFieldAlert(true);
        setFieldText("Enter valid Twitter URL");
        setBtnLoading(false);

        return;
      }
    }
    if (linkedin != "") {
      if (isValidUrl(linkedin) == false) {
        setFieldAlert(true);
        setFieldText("Enter valid Linkedin URL");
        setBtnLoading(false);

        return;
      }
    }
    if (phone != "") {
      if (!validatePhoneNumber(phone)) {
        setFieldAlert(true);
        setFieldText("Phone not valid");
        setBtnLoading(false);
        return;
        console.log("this is not vlais");
      }
    }

    setFieldAlert(false);

    await dispatch(
      updateCompany(
        companyName,
        tagline,
        Description,
        CompanyTypeVal,
        CompanySize,
        industry,
        state?.industries.findIndex((x) => x?.id == industry) == -1
          ? ""
          : state?.industries[
              state?.industries.findIndex((x) => x?.id == industry)
            ].name,
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
        country,
        agreement
      )
    );
    setBtnLoading(false);
  };

  useEffect(() => {
    //  to get languages
    CallGetDropDown();
  }, []);

  const CallGetDropDown = async () => {
    if (state.departments.length < 1) {
      await dispatch(GetDepartments());
    }

    if (state.skills.length < 1) {
      await dispatch(GetSkills());
    }
    if (state.educationLevels.length < 1) {
      await dispatch(GetEducationLevels());
    }
    await dispatch(GetCountries());
    await dispatch(
      GetStates(
        state?.userDetails?.country_id ? state?.userDetails?.country_id : 230,
        setStateName,
        CallGetCities,
        true
      )
    );
    await dispatch(
      GetCities(
        state?.userDetails?.state_id ? state?.userDetails?.state_id : 3805,
        setCity,
        true
      )
    );
    setIsFirstFecth(false);
    if (state.industries.length < 1) {
      await dispatch(GetIndustries());
    }
    setLoading(false);
  };
  const CallGetCities = async (stateId) => {
    await dispatch(GetCities(stateId, setCity, isFirstFecth));
  };

  const CallGetStates = async (stateId) => {
    await dispatch(GetStates(stateId, setStateName, CallGetCities));
  };

  if (loading) {
    return <p>Loading...</p>;
  } else {
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
                      <Profilesidebar
                        loading={loading}
                        image={`require("./../../images/team/pic1.jpg")`}
                        isActive="Company Profile"
                      />
                    </div>
                  </div>
                  <div className="col-xl-9 col-lg-8 m-b30">
                    <div className="job-bx submit-resume">
                      <div className="job-bx-title clearfix">
                        <h5 className="font-weight-700 pull-left text-uppercase">
                          Company Profile
                        </h5>
                        <Link
                          to={"/"}
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
                                Company Name:
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
                              <label>Tagline:</label>
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
                              <label>
                                Description:{" "}
                                <span className="text-danger"> *</span>
                              </label>
                              <textarea
                                value={Description}
                                onChange={(e) => {
                                  setDescription(e.target.value);
                                }}
                                maxlength={500}
                                className="form-control"
                              ></textarea>
                              <small>
                                Characters left: {500 - Description?.length}
                              </small>
                            </div>
                          </div>

                          <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                              <label>
                                Company Type:
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
                              <label>Company Size:</label>
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
                                Industry:
                                <span className="text-danger"> *</span>
                              </label>
                              <DropDownModalComponent
                                onChange={(e) => {
                                  console.log("eee", e.target.value);
                                  setIndustry(e.target.value);
                                }}
                                value={industry}
                                options={state.industries}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                              <label>Website:</label>
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
                              <label>Phone:</label>
                              <TextInputModal
                                onChange={(e) => {
                                  console.log(e.target.value);
                                  setPhone(e.target.value);
                                }}
                                value={phone}
                                placeholder={"0044 7123456789"}
                              />
                              <small>ex: 00447123456789</small>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                              <label>
                                Email: <span className="text-danger"> *</span>
                              </label>
                              <br />
                              {/* <label>{email}</label> */}

                              <TextInputModal
                                disabled={true}
                                onChange={(e) => {
                                  console.log(e.target.value);
                                  // setEmail(e.target.value.toLowerCase());
                                }}
                                value={email}
                                placeholder="Email"
                              />
                            </div>
                          </div>
                          <div className="col-lg-12 col-md-12">
                            <div className="form-group">
                              <label>
                                Address:
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
                              <label>
                                Country: <span className="text-danger"> *</span>
                              </label>

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
                              <label>
                                State: <span className="text-danger"> *</span>
                              </label>
                              <DropDownModalComponent
                                onChange={(e) => {
                                  console.log("eee state", e.target.value);
                                  if (!isFirstFecth) {
                                    CallGetCities(e.target.value);
                                  }

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
                              <label>
                                City: <span className="text-danger"> *</span>
                              </label>
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
                              <label>Facebook:</label>
                              <TextInputModal
                                onChange={(e) => {
                                  console.log(e.target.value);
                                  setFacebook(e.target.value);
                                }}
                                value={facebook}
                                placeholder="https://www.facebook.com/"
                              />
                              <small>
                                ex: https://www.facebook.com/profile_name
                              </small>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                              <label>Twitter:</label>
                              <TextInputModal
                                onChange={(e) => {
                                  console.log(e.target.value);
                                  setTwitter(e.target.value);
                                }}
                                value={twitter}
                                placeholder="https://www.twitter.com/"
                              />
                              <small>
                                ex: https://twitter.com/profile_name
                              </small>
                            </div>
                          </div>
                          {/* <div className="col-lg-6 col-md-6">
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
                        </div> */}
                          <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                              <label>Linkedin:</label>
                              <TextInputModal
                                onChange={(e) => {
                                  console.log(e.target.value);
                                  setLinkedin(e.target.value);
                                }}
                                value={linkedin}
                                placeholder="https://www.linkedin.com/"
                              />
                              <small>
                                ex: https://www.linkedin.com/in/profile_name
                              </small>
                            </div>
                          </div>
                        </div>
                        <div className="job-bx-title clearfix">
                          <h5 className="font-weight-700 pull-left text-uppercase">
                            Disclaimer <span className="text-danger"> *</span>
                          </h5>
                        </div>

                        <div className="row">
                          <div class="form-group form-check">
                            <input
                              type="checkbox"
                              class="form-check-input"
                              id="permanent"
                              name="exampleCheck1"
                              checked={agreement == true ? true : false}
                              value={0}
                              onChange={() => setAgreement(!agreement)}
                            />
                            {/* <input
                            type="checkbox"
                            class="form-check-input"
                            id="exampleCheck1"
                            onChange={e}
                          /> */}
                            <label class="" for="exampleCheck1">
                              I can confirm that I am an authorised
                              representative of this company and then have the
                              permission to create this page on company's
                              behalf.
                            </label>
                          </div>
                        </div>
                        {fieldAlert && (
                          <p className="text-danger">{FieldText}</p>
                        )}
                        {!BtnLoading ? (
                          <button
                            onClick={(e) => {
                              setBtnLoading(true);
                              setFieldAlert(false);
                              e.preventDefault();
                              callUpdateCompany();
                            }}
                            type="submit"
                            className="site-button m-b30 mr-3"
                          >
                            {tagline ? "Update" : "Save"}
                          </button>
                        ) : (
                          <button
                            type="submit"
                            className="site-button m-b30 mr-3"
                          >
                            Loading....
                          </button>
                        )}
                        {/* {!loading ? (
                          <Link
                            to={{
                              pathname: "/company-detail",
                              search: `?company_id=${state.userDetails?.id}`,
                              state: {
                                company_id: state.userDetails?.id,
                                showBack: true,
                              },
                            }}
                            className="site-button  m-b30"
                          >
                            Preview
                          </Link>
                        ) : (
                          <button
                            type="button"
                            className="site-button mr-4 m-b30"
                          >
                            Loading...
                          </button>
                        )} */}
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
}
