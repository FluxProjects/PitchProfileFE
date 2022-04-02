import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import {
  GetCities,
  GetStates,
  UpdateCandidateSummary,
  UpdateIsActive,
  UpdateResumeHeader,
  UploadImage,
  UploadProfileImg,
} from "../../../redux/action";
import {
  GetCityName,
  GetCountryName,
  GetStateName,
} from "../../../utils/functions";
import AttachVideo from "./AttachVideo";
import DropDownModalComponent from "./DropDownModalComponent";
import TextAreaModalComponent from "./TextAreaModalComponent";
import TextInputModal from "./TextInputModal";

export default function HeaderMyResume({ isView }) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [ToggleIsActive, setToggleIsActive] = useState(
    state.userDetails.is_active
  );
  const [ResumeHeadline, setResumeHeadline] = useState(
    state.userDetails.headline
  );

  const [fname, setFname] = useState(state.userDetails.f_name);
  const [lname, setLname] = useState(state.userDetails.l_name);
  const [phone, setPhone] = useState(state.userDetails.phone);
  const [email, setEmail] = useState(state.userDetails.email);

  const userDetail = useSelector((state) => state.userDetails);

  const [stateName, setStateName] = useState();
  const [cityName, setCityName] = useState();
  const [countryName, setCountryName] = useState();
  const [city, setCity] = useState(state.userDetails.city_id);
  const [stateNameDrop, setStateNameDrop] = useState(
    state.userDetails.state_id
  );
  const [country, setCountry] = useState(state.userDetails.country_id);
  const [hometownCountry, setHometownCountry] = useState(
    state.userDetails.hometown_country_id
  );
  const [cityLoading, setCityLoading] = useState(true);

  useEffect(async () => {
    callGetCityState(
      userDetail.state_id,
      userDetail.city_id,
      userDetail.country_id
    );
  }, []);

  const callGetCityState = async (state_id, city_id, country_id) => {
    console.log("test workddddd", state_id, city_id, country_id);
    setCityLoading(true);
    await GetStateName(state_id, setStateName);
    await GetCityName(city_id, setCityName);
    await GetCountryName(country_id, setCountryName);
    setCityLoading(false);
  };

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  const callUpdateCandidateSummary = async () => {
    dispatch(UpdateCandidateSummary(ResumeHeadline, handleClose()));
  };
  const [fieldAlert, setFieldAlert] = useState(false);

  const callUpdateResumeHeader = async () => {
    if (fname == null || fname == "") {
      setFieldAlert(true);
      return;
    }
    if (lname == null || lname == "") {
      setFieldAlert(true);
      return;
    }
    if (ResumeHeadline == null || ResumeHeadline == "") {
      setFieldAlert(true);
      return;
    }
    dispatch(
      UpdateResumeHeader(
        fname,
        lname,
        ResumeHeadline,
        city,
        stateNameDrop,
        country,
        hometownCountry,
        phone,
        email.toLowerCase(),
        handleClose(),
        callGetCityState
      )
    );
  };

  const callUpdateIsActive = async (val) => {
    await dispatch(UpdateIsActive(val));
    setToggleIsActive(val);
  };

  const CallGetCities = async (stateId) => {
    await dispatch(GetCities(stateId));
  };

  const CallGetStates = async (stateId) => {
    await dispatch(GetStates(stateId));
  };

  return (
    <>
      <div className="col-lg-7 col-md-7 col-sm-12 candidate-info">
        <div className="candidate-detail  ">
          <div
            style={{
              height: "200px",
              width: "200px",
            }}
            className="canditate-des  text-center"
          >
            <Link to={""}>
              <img
                alt=""
                src={
                  state.userDetails?.pic != null
                    ? state.userDetails?.pic
                    : "https://as2.ftcdn.net/v2/jpg/00/64/67/63/1000_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
                }
                style={{
                  minHeight: "200px",
                  maxHeight: "200px",
                  maxWidth: "200px",
                  minWidth: "200px",
                  height: "10px",
                  borderRadius: "30%",
                }}
              />
            </Link>
            {!isView && (
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

                    dispatch(UploadImage(e.target.files));
                  }}
                  className="update-flie"
                />
                <i className="fa fa-camera"></i>
              </div>
            )}
          </div>
          <div className="text-white  browse-job text-left">
            <h4 className="m-b0">
              {userDetail.f_name} {userDetail.l_name}
              {!isView && (
                <span
                  onClick={() => handleShow()}
                  className="m-l15 font-16 text-white"
                >
                  <i className="fa fa-pencil"></i>
                </span>
              )}
            </h4>
            <p className="m-b15">
              {state.userDetails.headline}
              {/* <span
                onClick={() => handleShow()}
                className="m-l15 font-16 text-white"
              >
                <i className="fa fa-pencil"></i>
              </span> */}
            </p>
            <ul className="clearfix">
              <li className="w-100">
                <i className="ti-location-pin"></i>{" "}
                {cityName != null && cityName != "" ? (
                  <>{cityName},</>
                ) : (
                  <>City,</>
                )}{" "}
                {stateName != null && stateName != "" ? (
                  <>{stateName},</>
                ) : (
                  <>State,</>
                )}{" "}
                {countryName != null && countryName != "" ? (
                  <>{countryName}</>
                ) : (
                  <>Country</>
                )}
              </li>
              {state.userDetails.phone != "" && (
                <li className="w-100">
                  <i className="ti-mobile"></i> {state.userDetails.phone}
                </li>
              )}
              <li className="w-100">
                <i className="ti-email"></i> {state.userDetails.email}
              </li>
            </ul>

            <div className="progress-box m-t10">
              <div className="customFlexRow mb-2">
                <p className="textColorGold mr-2">Top Skills</p>
                <div className=" ">
                  {state.candidateSkills.map((item) => (
                    <>
                      {item.is_top == true && (
                        <div className="mr-2">
                          <p className="mb-0">
                            <span className="mr-2"> ⭐ </span>
                            {state?.skills.findIndex(
                              (x) => x?.id == item?.skill_id
                            ) == -1
                              ? ""
                              : state?.skills[
                                  state?.skills.findIndex(
                                    (x) => x?.id == item?.skill_id
                                  )
                                ].name}
                          </p>
                        </div>
                      )}
                    </>
                  ))}
                </div>
              </div>

              <div className="customFlexRow mt-0">
                <p className="textColorGold mr-2">Status</p>
                <div className="mt-0 ml-4 customFlexRow">
                  {!isView && (
                    <div>
                      <Toggle
                        defaultChecked={ToggleIsActive}
                        onChange={() => {
                          callUpdateIsActive(!ToggleIsActive);
                        }}
                      />
                    </div>
                  )}

                  <p className="ml-2 text-white font-weight-bold m-b15">
                    {ToggleIsActive ? "Available" : "Unavailable"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-5 col-md-5 col-sm-12">
        {/* <Link to={""}> */}
        {/* AttachVideo */}
        <div className=" text-white ">
          <AttachVideo isView={isView} />

          {/* <h5>Pending Action</h5>
    <ul className="list-check secondry">
      <li>Verify Mobile Number</li>
      <li>Add Preferred Location</li>
      <li>Add Resume</li>
    </ul> */}
        </div>
        {/* </Link> */}
      </div>

      <Modal
        show={show}
        onHide={() => handleClose()}
        className="modal fade modal-bx-info editor"
      >
        <div className="modal-dialog my-0 mx-0" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="EmploymentModalLongTitle">
                Basic Information
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => handleClose()}
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="form-group">
                      <label>First Name</label>
                      <TextInputModal
                        placeholder="Enter First Name"
                        onChange={(e) => setFname(e.target.value)}
                        value={fname}
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="form-group">
                      <label>Last Name</label>
                      <TextInputModal
                        placeholder="Enter Last Name"
                        onChange={(e) => setLname(e.target.value)}
                        value={lname}
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="form-group">
                      <label>Resume Headline</label>
                      <TextAreaModalComponent
                        placeholder="Enter Description"
                        onChange={(e) => setResumeHeadline(e.target.value)}
                        value={ResumeHeadline}
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="form-group">
                      <label>Country:</label>
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

                          setStateNameDrop(e.target.value);
                          //   setLastUsed(e.target.value);
                        }}
                        value={stateNameDrop}
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
                      <input
                        type="text"
                        className="form-control"
                        placeholder="info@example.com"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        value={email}
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
                        onChange={(e) => {
                          setPhone(e.target.value);
                        }}
                        value={phone}
                      />
                    </div>
                  </div>
                </div>
              </form>
              {fieldAlert && (
                <p className="text-danger">
                  Please fill all the required fields.
                </p>
              )}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="site-button"
                data-dismiss="modal"
                onClick={() => handleClose()}
              >
                Cancel
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  callUpdateResumeHeader();
                }}
                type="button"
                className="site-button"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
