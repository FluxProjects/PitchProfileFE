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
  validatePhoneNumber,
} from "../../../utils/functions";
import Chat from "../../Pages/MyChat/Chat/Chat";
import ChatContacts from "../../Pages/MyChat/ChatContacts/ChatContacts";
import AttachVideo from "./AttachVideo";
import DropDownModalComponent from "./DropDownModalComponent";
import TextAreaModalComponent from "./TextAreaModalComponent";
import TextInputModal from "./TextInputModal";

export default function HeaderCandidateResume({
  isView,
  candiateSkilssData,
  callAddRoom,
}) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [ToggleIsActive, setToggleIsActive] = useState(
    state.singleUserData.is_active
  );
  const [ResumeHeadline, setResumeHeadline] = useState(
    state.singleUserData.headline
  );
  const [ChatModal, setChatModal] = useState(false);

  const [fname, setFname] = useState(state.singleUserData.f_name);
  const [lname, setLname] = useState(state.singleUserData.l_name);
  const [phone, setPhone] = useState(state.singleUserData.phone);
  const [email, setEmail] = useState(state.singleUserData.email);

  const userDetail = useSelector((state) => state.singleUserData);

  const [stateName, setStateName] = useState();
  const [cityName, setCityName] = useState();
  const [countryName, setCountryName] = useState();
  const [city, setCity] = useState(state.singleUserData.city_id);
  const [stateNameDrop, setStateNameDrop] = useState(
    state.singleUserData.state_id
  );
  const [country, setCountry] = useState(state.singleUserData.country_id);
  const [hometownCountry, setHometownCountry] = useState(
    state.singleUserData.hometown_country_id
  );
  const [cityLoading, setCityLoading] = useState(true);

  useEffect(async () => {
    callGetCityState(
      userDetail.state_id,
      userDetail.city_id,
      userDetail.country_id
    );
  }, []);

  const toggleModal = () => {
    setChatModal(!ChatModal);
  };

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
    if (phone == null || phone != "") {
      if (!validatePhoneNumber(phone)) {
        setFieldAlert(true);
        //   setFieldText("Phone not valid");
        //   setBtnLoading(false);
        return;
        console.log("this is not vlais");
      }
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
    await dispatch(GetCities(stateId, setCity));
  };

  const CallGetStates = async (stateId) => {
    await dispatch(GetStates(stateId, setStateName, CallGetCities));
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
                  state.singleUserData?.pic != null
                    ? state.singleUserData?.pic
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
          </div>
          <div className="text-white  browse-job text-left">
            <h4 className="m-b0">
              {userDetail.f_name} {userDetail.l_name}
            </h4>
            <p className="m-b15">
              {state.singleUserData.headline}
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
              {state.singleUserData.phone != "" && (
                <li className="w-100">
                  <i className="ti-mobile"></i> {state.singleUserData.phone}
                </li>
              )}
              <li className="w-100">
                <div>
                  <a
                    className="arem"
                    href={`mailto:${state.singleUserData.email}`}
                    style={{
                      color: "white",
                    }}
                  >
                    <i className="ti-email"></i> {state.singleUserData.email}
                  </a>
                </div>
              </li>
            </ul>

            <div className="progress-box m-t10">
              <div className="customFlexRow mb-2">
                <p className="textColorGold mr-2">Top Skills</p>
                <div className=" ">
                  {state?.singleUserData?.candidate_skills?.map((item) => (
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
                <div className="mt-0 ml-4 mlPhoneHeader customFlexRow">
                  <p className="ml-2 text-white mlPhoneHeader font-weight-bold m-b15">
                    {ToggleIsActive ? "Actively Looking" : "Happily Employed"}
                  </p>
                </div>
              </div>

              {/* message */}
              <>
                <p
                  style={{
                    position: "fixed",
                    bottom: 20,
                    right: 30,
                    padding: 8,
                    zIndex: 10,
                  }}
                >
                  <button
                    onClick={() => {
                      console.log("clis");
                      toggleModal();
                    }}
                    style={{
                      background: "transparent",
                      border: "transparent",
                      fontSize: 40,
                    }}
                    className="btnChatStyle radius-xl"
                  >
                    <i className="fa fa-comment"></i>
                    {state.IsReadLength > 0 && (
                      <sup
                        style={{
                          position: "relative",
                          right: "16px",
                          zIndex: 10,
                          bottom: "13px",
                        }}
                      >
                        <span
                          style={{ fontSize: 10 }}
                          class="badge badge-pill badge-danger "
                        >
                          {state.IsReadLength}
                        </span>
                      </sup>
                    )}
                  </button>
                </p>
              </>
              {/* message */}

              {/* Chatmodal */}
              <Modal
                // backdrop={false}
                scrollable={true}
                show={ChatModal}
                onHide={() => toggleModal()}
                className="modal fade modal-bx-info editor"
              >
                <ChatContacts
                  setCloseModal={() => toggleModal()}
                  otherIdProp={state?.singleUserData.id}
                  RoomIdProp={state.SingleRoomName}
                  RoomNameProp={userDetail.f_name + " " + userDetail.l_name}
                />
                {/* <Chat
                  otherId={state?.singleUserData.id}
                  RoomId={state.SingleRoomName}
                /> */}
                {/* <ChatContacts /> */}
              </Modal>

              {/* {state.myRooms} */}
              {state.userDetails?.company_name && (
                <div className="customFlexRow mt-0">
                  <button
                    onClick={() => {
                      console.log("clis");
                      callAddRoom(toggleModal());
                    }}
                    className="site-button radius-xl"
                    // style={{ position: "fixed", bottom: 20, right: 30 }}
                  >
                    <i className="fa fa-comment"></i> Message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-5 col-md-5 col-sm-12">
        <div className=" text-white ">
          <AttachVideo isView={isView} />
        </div>
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
                          setCity(-1);
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
                          setEmail(e.target.value.toLowerCase());
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
                        placeholder={"0044 7123456789"}
                        onChange={(e) => {
                          setPhone(e.target.value);
                        }}
                        value={phone}
                      />
                      <small>ex: 00447123456789</small>
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
