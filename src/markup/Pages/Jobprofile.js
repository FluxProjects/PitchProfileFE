import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Header2 from "./../Layout/Header2";
import Footer from "./../Layout/Footer";
import Profilesidebar from "./../Element/Profilesidebar";
import TextInputModal from "../Components/JobsMyResume/TextInputModal";
import DropDownModalComponent from "../Components/JobsMyResume/DropDownModalComponent";
import TextAreaModalComponent from "../Components/JobsMyResume/TextAreaModalComponent";
import { useDispatch, useSelector } from "react-redux";
import { proficiencyLevelDrop } from "../../utils/DropDownUtils";
import {
  GetCities,
  GetCountries,
  GetLanguages,
  GetStates,
  updateUser,
  GetCandidateLanguages,
  AddCandidateLanguages,
  DeleteCandidateLanguages,
  GetStateName,
  GetCountryName,
  GetCityName,
  getAuthToken,
} from "../../redux/action";
import Header from "../Layout/Header";
import DropdownSearch from "../Components/JobsMyResume/DropdownSearch";
import AddLanguagesForm from "../Components/JobsMyResume/Modals/AddLanguagesForm";
import { Modal } from "react-bootstrap";

export default function Jobprofile() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const router = useHistory();

  useEffect(() => {
    // auth
    if (state.authToken) {
      callGetAuth();
    } else {
      router.push("/login");
    }
  }, []);

  const callGetAuth = async () => {
    await dispatch(getAuthToken(state.authToken, router));
  };

  // states
  const [fname, setFname] = useState(state.userDetails.f_name);
  const [lname, setLname] = useState(state.userDetails.l_name);
  const [dob, setDob] = useState(state.userDetails.dob);
  const [gender, setGender] = useState(state.userDetails.gender);
  const [passport, setPassport] = useState(state.userDetails.passport_number);
  const [isMarried, setIsMarried] = useState(state.userDetails.marital_status);
  const [Disability, setHasDisability] = useState(state.userDetails.disability);
  const [disabilityDescription, setDisabilityDescription] = useState(
    state.userDetails.disability_description
  );
  const [city, setCity] = useState(state.userDetails.city_id);
  const [stateName, setStateName] = useState(state.userDetails.state_id);
  const [country, setCountry] = useState(state.userDetails.country_id);
  const [hometownCountry, setHometownCountry] = useState(
    state.userDetails.hometown_country_id
  );
  const [address, setAddress] = useState(state.userDetails.address);
  const [phone, setPhone] = useState(state.userDetails.phone);
  const [email, setEmail] = useState(state.userDetails.email);
  const [fieldAlert, setFieldAlert] = useState(false);

  const [LangArr, setLangArr] = useState([
    {
      language: "",
      level: "",
    },
  ]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //  to get languages
    CallGetDropDown();
    CallGetCandidateLanguages();
  }, []);

  const CallGetCandidateLanguages = async () => {
    await dispatch(GetCandidateLanguages());
  };

  const CallGetDropDown = async () => {
    await dispatch(GetLanguages());

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

  const callUpdateUser = async () => {
    if (fname == null || fname == "") {
      setFieldAlert(true);
      return;
    }
    if (lname == null || lname == "") {
      setFieldAlert(true);
      return;
    }
    if (gender == null || gender == "") {
      setFieldAlert(true);
      return;
    }
    if (address == null || address == "") {
      setFieldAlert(true);
      return;
    }
    if (country == null || country == "") {
      setFieldAlert(true);
      return;
    }
    if (city == null || city == "") {
      setFieldAlert(true);
      return;
    }
    if (stateName == null || stateName == "") {
      setFieldAlert(true);
      return;
    }
    if (email == null || email == "") {
      setFieldAlert(true);
      return;
    }
    if (phone == null || phone == "") {
      setFieldAlert(true);
      return;
    }
    await dispatch(
      updateUser(
        state.userDetails.id,
        fname,
        lname,
        dob,
        gender,
        isMarried,
        passport,
        Disability,
        disabilityDescription,
        address,
        city,
        stateName,
        country,
        hometownCountry,
        phone,
        email.toLowerCase(),
        state.userDetails.authToken
        // router
      )
    );
  };

  const deleteCandidateVal = async (id, index) => {
    await dispatch(DeleteCandidateLanguages(id, index));
  };

  const [show, setShow] = useState(false);
  const [updateData, setUpdateData] = useState(false);
  const [modalDataIndex, setModalDataIndex] = useState(0);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  if (loading) {
    return (
      <div className="page-wraper">
        <Header />
        <p>Loading... </p>
        <Footer />
      </div>
    );
  } else {
    return (
      <div className="page-wraper">
        <Header />
        <div className="page-content bg-white">
          <div className="content-block">
            <div className="section-full bg-white browse-job p-t50 p-b20">
              <div className="container">
                <div className="row">
                  <div className="col-xl-3 col-lg-4 m-b30">
                    <Profilesidebar isActive="Profile" />
                  </div>
                  <div className="col-xl-9 col-lg-8 m-b30">
                    <div className="job-bx job-profile">
                      <div className="job-bx-title clearfix">
                        <h5 className="font-weight-700 pull-left text-uppercase">
                          Basic Information
                        </h5>
                        <Link
                          to={"./"}
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
                                First Name:{" "}
                                <span className="text-danger"> *</span>
                              </label>
                              <TextInputModal
                                placeholder={"Enter First Name"}
                                value={fname}
                                onChange={(e) => {
                                  setFname(e.target.value);
                                }}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                              <label>
                                Last Name:{" "}
                                <span className="text-danger"> *</span>
                              </label>

                              <TextInputModal
                                placeholder={"Enter Last Name"}
                                value={lname}
                                onChange={(e) => {
                                  setLname(e.target.value);
                                }}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                              <label>Date of birth:</label>
                              <TextInputModal
                                type="date"
                                value={dob}
                                onChange={(e) => {
                                  setDob(e.target.value);
                                }}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                              <label>Gender</label>
                              <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                  <div className="custom-control custom-radio">
                                    <input
                                      type="radio"
                                      className="custom-control-input"
                                      id="male"
                                      name="gender"
                                      defaultChecked={
                                        gender == 1 ? true : false
                                      }
                                      onChange={() => {
                                        setGender(1);
                                      }}
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="male"
                                    >
                                      Male
                                    </label>
                                  </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                  <div className="custom-control custom-radio">
                                    <input
                                      type="radio"
                                      className="custom-control-input"
                                      id="female"
                                      name="gender"
                                      defaultChecked={
                                        gender == 2 ? true : false
                                      }
                                      onChange={() => {
                                        setGender(2);
                                      }}
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="female"
                                    >
                                      Female
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                              <label>Passport Number:</label>

                              <TextInputModal
                                placeholder={"Enter passport number"}
                                value={passport}
                                onChange={(e) => {
                                  setPassport(e.target.value);
                                }}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                              <label>Marital Status</label>
                              <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                  <div className="custom-control custom-radio">
                                    <input
                                      type="radio"
                                      className="custom-control-input"
                                      id="married"
                                      name="married"
                                      checked={isMarried == 1 ? true : false}
                                      onChange={() => {
                                        setIsMarried(1);
                                      }}
                                      value={1}
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="married"
                                    >
                                      Married
                                    </label>
                                  </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                  <div className="custom-control custom-radio">
                                    <input
                                      type="radio"
                                      className="custom-control-input"
                                      id="single"
                                      name="married"
                                      checked={isMarried == 2 ? true : false}
                                      onChange={() => {
                                        setIsMarried(2);
                                      }}
                                      value={2}
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="single"
                                    >
                                      Single
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* <div className="col-lg-12 col-md-12">
                            <div className="form-group">
                              <label>Any disability?</label>
                              <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                  <div className="custom-control custom-radio">
                                    <input
                                      type="radio"
                                      className="custom-control-input"
                                      id="yes"
                                      onChange={() => {
                                        setHasDisability(true);
                                      }}
                                      checked={
                                        Disability == true ? true : false
                                      }
                                      name="disability"
                                    />

                                    <label
                                      className="custom-control-label"
                                      htmlFor="yes"
                                    >
                                      Yes
                                    </label>
                                  </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                  <div className="custom-control custom-radio">
                                    <input
                                      type="radio"
                                      className="custom-control-input"
                                      id="no"
                                      onChange={() => {
                                        setHasDisability(false);
                                      }}
                                      checked={
                                        Disability == false ? true : false
                                      }
                                      name="disability"
                                    />
                                    <label
                                      className="custom-control-label"
                                      htmlFor="no"
                                    >
                                      No
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {Disability && (
                            <div className="col-lg-12 col-md-12">
                              <div className="form-group">
                                <label>Disability Description:</label>
                                <textarea
                                  onChange={(e) => {
                                    setDisabilityDescription(e.target.value);
                                  }}
                                  value={disabilityDescription}
                                  className="form-control"
                                ></textarea>
                              </div>
                            </div>
                          )} */}
                        </div>

                        <div className="col-12">
                          <div className="d-flex">
                            <h5 className="m-b15">Languages</h5>
                            <Link
                              to={"#"}
                              data-toggle="modal"
                              data-target="#educations"
                              onClick={() => {
                                setUpdateData(false);
                                handleShow();
                              }}
                              className="site-button add-btn button-sm"
                            >
                              <i className="fa fa-plus m-r5"></i> Add
                            </Link>
                          </div>
                          {state.candidateLanguages.map((item, index) => (
                            <>
                              <h6 className="font-14 mt-5 m-b0">
                                {/* Education Board Edit{" "} */}
                                <span className="float-right">
                                  <span
                                    onClick={() => {
                                      setUpdateData(true);
                                      setModalDataIndex(index);
                                      handleShow();
                                    }}
                                    className="site-button add-btn button-sm"
                                  >
                                    <i className="fa fa-pencil m-r5"></i> Edit
                                  </span>
                                  <span
                                    onClick={() => {
                                      console.log("tests", index);

                                      deleteCandidateVal(item.id, index);
                                    }}
                                    className="m-l15 cursorPointer font-14"
                                  >
                                    <i className="fa fa-minus text-danger"></i>
                                  </span>
                                </span>
                              </h6>

                              <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                  <div className="clearfix m-b20">
                                    <label className="m-b0">Language</label>
                                    <span className="clearfix font-13">
                                      {state?.languages.findIndex(
                                        (x) => x?.id == item?.language_id
                                      ) != -1
                                        ? state?.languages[
                                            state?.languages.findIndex(
                                              (x) => x?.id == item?.language_id
                                            )
                                          ].name
                                        : ""}
                                    </span>
                                  </div>
                                </div>

                                <div className="col-lg-4 col-md-6 col-sm-12">
                                  <div className="clearfix m-b20">
                                    <label className="m-b0">
                                      Proficiency Level
                                    </label>
                                    <span className="clearfix font-13">
                                      {proficiencyLevelDrop.findIndex(
                                        (x) => x?.id == item?.proficiency_level
                                      ) != -1
                                        ? proficiencyLevelDrop[
                                            proficiencyLevelDrop.findIndex(
                                              (x) =>
                                                x?.id == item?.proficiency_level
                                            )
                                          ].name
                                        : ""}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </>
                          ))}
                        </div>

                        <div className="job-bx-title clearfix">
                          <h5 className="font-weight-700 pull-left text-uppercase">
                            Contact Information
                          </h5>
                        </div>
                        <div className="row">
                          <div className="col-lg-12 col-md-12">
                            <div className="form-group">
                              <label>Address:</label>
                              <TextAreaModalComponent
                                onChange={(e) => {
                                  setAddress(e.target.value);
                                }}
                                value={address}
                                placeholder="Full address"
                              />
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
                          {/* <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="form-group">
                              <label>Hometown:</label>
                              <DropDownModalComponent
                                onChange={(e) => {
                                  console.log("eee", e.target.value);
                                  setHometownCountry(e.target.value);
                                  //   setLastUsed(e.target.value);
                                }}
                                value={hometownCountry}
                                options={state.countries}
                              />
                            </div>
                          </div> */}

                          <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                              <label>Email Address:</label>
                              <TextInputModal
                                placeholder={"info@example.com"}
                                value={email}
                                onChange={(e) => {
                                  setEmail(e.target.value);
                                }}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                              <label>Phone:</label>
                              <TextInputModal
                                placeholder={"Phone number"}
                                value={phone}
                                onChange={(e) => {
                                  setPhone(e.target.value);
                                }}
                              />
                            </div>
                          </div>
                        </div>
                        {fieldAlert && (
                          <p className="text-danger">
                            Please fill all the required fields.
                          </p>
                        )}
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            callUpdateUser();
                          }}
                          className="site-button m-b30"
                        >
                          Update
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

        <Modal
          show={show}
          onHide={() => handleClose()}
          className="modal fade modal-bx-info editor"
        >
          <AddLanguagesForm
            data={state.candidateLanguages[modalDataIndex]}
            index={modalDataIndex}
            isUpdate={updateData}
            handleClose={() => handleClose()}
          />
        </Modal>
      </div>
    );
  }
}
