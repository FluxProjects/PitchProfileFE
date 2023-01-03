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
  GetUserCities,
  GetUserStates,
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
    state?.userDetails?.country_id ? state?.userDetails?.country_id : 0
  );
  const [loading, setLoading] = useState(true);
  const [BtnLoading, setBtnLoading] = useState(false);
  const [stateLoad, setStateLoad] = useState(true);
  const [cityLoad, setCityLoad] = useState(true);
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

    if (city == "") {
      setBtnLoading(false);
      setFieldText("Enter City");
      setFieldAlert(true);
      return;
    }
    if (stateName == "") {
      setBtnLoading(false);
      setFieldText("Enter State");
      setFieldAlert(true);
      return;
    }
    if (country == "") {
      setBtnLoading(false);
      setFieldText("Enter Country");
      setFieldAlert(true);
      return;
    }
    if (companyName == "") {
      setBtnLoading(false);
      setFieldText("Enter Company Name");
      setFieldAlert(true);
      return;
    }
    if (email == "") {
      setBtnLoading(false);
      setFieldText("Enter Email");
      setFieldAlert(true);
      return;
    }
    if (CompanyTypeVal == "") {
      setBtnLoading(false);
      setFieldText("Enter Company Type");
      setFieldAlert(true);
      return;
    }
    if (industry == null) {
      setBtnLoading(false);
      setFieldText("Enter Industry");
      setFieldAlert(true);
      return;
    }
    if (address == "") {
      setBtnLoading(false);
      setFieldText("Enter Address");
      setFieldAlert(true);
      return;
    }
    if (agreement == false) {
      setBtnLoading(false);
      setFieldText("Check User Agreement");
      setFieldAlert(true);
      return;
    }
    if (Description == "") {
      setBtnLoading(false);
      setFieldText("Enter Company Description");
      setFieldAlert(true);
      return;
    }
    if (website != "" && website != null) {
      if (isValidUrl(website) == false) {
        setFieldAlert(true);
        setFieldText("Enter Valid Website URL");
        setBtnLoading(false);
        return;
      }
    }
    if (facebook != "" && facebook != null) {
      if (isValidUrl(facebook) == false) {
        setFieldAlert(true);
        setFieldText("Enter Valid Facebook URL");
        setBtnLoading(false);
        return;
      }
    }
    if (twitter != "" && twitter != null) {
      if (isValidUrl(twitter) == false) {
        setFieldAlert(true);
        setFieldText("Enter Valid Twitter URL");
        setBtnLoading(false);
        return;
      }
    }
    if (linkedin != "" && linkedin != null) {
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
        setFieldText("Enter Valid Phone Number");
        setBtnLoading(false);
        return;
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
    CallGetDropDown();
  }, []);

  const CallGetDropDown = async () => {
    if (state.departments.length < 1) {
      await dispatch(GetDepartments());
    }
    await CallGetStates(state?.userDetails?.country_id);
    await CallGetCities(state?.userDetails?.state_id);
    if (state.skills.length < 1) {
      await dispatch(GetSkills());
    }
    if (state.educationLevels.length < 1) {
      await dispatch(GetEducationLevels());
    }
    await dispatch(GetCountries());

    setIsFirstFecth(false);
    if (state.industries.length < 1) {
      await dispatch(GetIndustries());
    }
    setLoading(false);
  };
  const CallGetCities = async (stateId) => {
    setCityLoad(true);
    await dispatch(GetUserCities(stateId, setCity, isFirstFecth));
    setCityLoad(false);
  };
  const CallGetStates = async (stateId) => {
    setStateLoad(true);
    await dispatch(GetUserStates(stateId, setStateName, CallGetCities));
    setStateLoad(false);
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
                              <label>
                                Phone: <span className="text-danger"> *</span>
                              </label>
                              <TextInputModal
                                onChange={(e) => {
                                  setPhone(e.target.value);
                                }}
                                value={phone}
                                placeholder=""
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
                              <TextInputModal
                                disabled={true}
                                onChange={(e) => {
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
                              <DropDownModalComponent
                                onChange={(e) => {
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
                              {!stateLoad ? (
                                <DropDownModalComponent
                                  onChange={(e) => {
                                    if (!isFirstFecth) {
                                      CallGetCities(e.target.value);
                                    }
                                    setStateName(e.target.value);
                                  }}
                                  value={stateName}
                                  options={state?.userState}
                                />
                              ) : (
                                "Loading..."
                              )}
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="form-group">
                              <label>
                                City: <span className="text-danger"> *</span>
                              </label>
                              {!cityLoad ? (
                                <DropDownModalComponent
                                  onChange={(e) => {
                                    setCity(e.target.value);
                                  }}
                                  value={city}
                                  options={state?.userCity}
                                />
                              ) : (
                                "Loading..."
                              )}
                            </div>
                          </div>
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
                                  setFacebook(e.target.value);
                                }}
                                value={facebook}
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
                                  setTwitter(e.target.value);
                                }}
                                value={twitter}
                              />
                              <small>
                                ex: https://twitter.com/profile_name
                              </small>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                              <label>Linkedin:</label>
                              <TextInputModal
                                onChange={(e) => {
                                  setLinkedin(e.target.value);
                                }}
                                value={linkedin}
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
