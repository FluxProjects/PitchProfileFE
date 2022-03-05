import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header2 from "./../Layout/Header2";
import Footer from "./../Layout/Footer";
import Profilesidebar from "./../Element/Profilesidebar";
import TextInputModal from "../Components/JobsMyResume/TextInputModal";
import DropDownModalComponent from "../Components/JobsMyResume/DropDownModalComponent";
import TextAreaModalComponent from "../Components/JobsMyResume/TextAreaModalComponent";
import { useDispatch, useSelector } from "react-redux";
import {
  GetCities,
  GetCountries,
  GetLanguages,
  GetStates,
} from "../../redux/action";
import Header from "../Layout/Header";
import DropdownSearch from "../Components/JobsMyResume/DropdownSearch";

export default function Jobprofile() {
  const [Disability, setHasDisability] = useState(false);

  const [LangArr, setLangArr] = useState([
    {
      language: "",
      level: "",
    },
  ]);

  const [loading, setLoading] = useState(true);

  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    //  to get languages
    CallGetDropDown();
  }, []);
  const CallGetDropDown = async () => {
    if (state.languages.length < 1) await dispatch(GetLanguages());

    if (state.countries.length < 1) await dispatch(GetCountries());
    if (state.states.length < 1) await dispatch(GetStates());
    if (state.cities.length < 1) await dispatch(GetCities(4));

    setLoading(false);
  };
  const CallGetCities = async (stateId) => {
    await dispatch(GetCities(stateId));
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...LangArr];
    list.splice(index, 1);
    setLangArr(list);
  };

  // handle click event of the Add button
  const handleAddClickOption = (i) => {
    const list = [...LangArr];
    list.push("");

    setLangArr(list);
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
                  <Profilesidebar />
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
                              <label>First Name:</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Alexander Weir"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                              <label>Last Name:</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder=" Weir"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                              <label>Date of birth:</label>
                              <TextInputModal
                                type="date"
                                onChange={(e) => console.log(e.target.value)}
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
                                      name="example1"
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
                                      name="example1"
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
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your passport number"
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

                          <div className="col-lg-12 col-md-12">
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
                                <textarea className="form-control"></textarea>
                              </div>
                            </div>
                          )}
                        </div>

                        <div className="col-12">
                          {LangArr.map((item, i) => (
                            <div className="row">
                              <div className="col-lg-3 col-md-3 col-sm-12">
                                <div className="form-group">
                                  <label>Languages:</label>
                                  {/* <DropdownSearch items={state.languages} /> */}
                                  <DropDownModalComponent
                                    onChange={(e) => {
                                      console.log("eee", e.target.value);
                                    }}
                                    options={state.languages}
                                  />
                                </div>
                              </div>

                              <div className="col-lg-3 col-md-3 col-sm-12">
                                <div className="form-group">
                                  <label>Proficiency Level:</label>
                                  <DropDownModalComponent
                                    onChange={(e) => {
                                      console.log("eee", e.target.value);
                                    }}
                                    options={[
                                      { id: 1, name: "test 1" },
                                      { id: 2, name: "test 2" },
                                    ]}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-3 col-md-3 col-sm-12">
                                <span
                                  onClick={() => {
                                    handleAddClickOption(i);
                                  }}
                                  className="btn btn-primary mt-4"
                                >
                                  <i className="fa fa-plus m-r5"></i> Add
                                </span>
                              </div>

                              {LangArr.length !== 1 && (
                                <div className="col-lg-3 col-md-3 col-sm-12">
                                  <span
                                    onClick={() => {
                                      handleRemoveClick(i);
                                    }}
                                    className="btn btn-danger mt-4"
                                  >
                                    <i className="fa fa-minus m-r5"></i> Remove
                                  </span>
                                </div>
                              )}
                            </div>
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
                                  // setDescription(e.target.value);
                                }}
                                //   value={description}
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
                                  CallGetCities(e.target.value);
                                }}
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
                                  //   setLastUsed(e.target.value);
                                }}
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
                                  //   setLastUsed(e.target.value);
                                }}
                                options={state.cities}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="form-group">
                              <label>Hometown:</label>
                              <DropDownModalComponent
                                onChange={(e) => {
                                  console.log("eee", e.target.value);
                                  //   setLastUsed(e.target.value);
                                }}
                                options={[
                                  { id: 1, name: "test 1" },
                                  { id: 2, name: "test 2" },
                                ]}
                              />
                            </div>
                          </div>

                          <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                              <label>Email Address:</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="info@example.com"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                              <label>Phone:</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Phone number"
                              />
                            </div>
                          </div>
                        </div>
                        <button className="site-button m-b30">
                          Save Setting
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
      </div>
    );
  }
}
