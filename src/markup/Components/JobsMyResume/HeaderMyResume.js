import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import {
  UpdateCandidateSummary,
  UpdateIsActive,
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

export default function HeaderMyResume({}) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [ToggleIsActive, setToggleIsActive] = useState(
    state.userDetails.is_active
  );
  const [ResumeHeadline, setResumeHeadline] = useState(
    state.userDetails.summary
  );

  const userDetail = useSelector((state) => state.userDetails);

  const [stateName, setStateName] = useState();
  const [cityName, setCityName] = useState();
  const [countryName, setCountryName] = useState();

  useEffect(() => {
    GetStateName(userDetail.state_id, setStateName);
    GetCityName(userDetail.city_id, setCityName);
    GetCountryName(userDetail.country_id, setCountryName);
  }, []);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  const callUpdateCandidateSummary = async () => {
    dispatch(UpdateCandidateSummary(ResumeHeadline, handleClose()));
  };

  const callUpdateIsActive = async (val) => {
    await dispatch(UpdateIsActive(val));
    setToggleIsActive(val);
  };

  return (
    <>
      <div className="col-lg-8 col-md-7 candidate-info">
        <div className="candidate-detail">
          <div className="canditate-des text-center">
            <Link to={""}>
              <img
                alt=""
                src={
                  state.userDetails?.pic != null
                    ? state.userDetails?.pic
                    : "https://as2.ftcdn.net/v2/jpg/00/64/67/63/1000_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
                }
                style={{
                  minHeight: "110px",
                  maxHeight: "145px",
                  maxWidth: "110px",
                  minWidth: "110px",
                  height: "10px",
                }}
              />
            </Link>
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

            <div className="mt-2">
              <Toggle
                defaultChecked={ToggleIsActive}
                onChange={() => {
                  callUpdateIsActive(!ToggleIsActive);
                }}
              />

              <p className="text-white font-weight-bold m-b15">
                {ToggleIsActive ? "Available" : "Unavailable"}
              </p>
            </div>
          </div>
          <div className="text-white browse-job text-left">
            <h4 className="m-b0">
              {userDetail.f_name} {userDetail.l_name}
              <span
                onClick={() => handleShow()}
                className="m-l15 font-16 text-white"
              >
                <i className="fa fa-pencil"></i>
              </span>
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
              <li>
                <i className="ti-location-pin"></i> {cityName}, {stateName}
              </li>
              <li>
                <i className="ti-mobile"></i> {state.userDetails.phone}
              </li>
              <li>
                <i className="ti-location-pin"></i> {countryName}
              </li>
              <li>
                <i className="ti-email"></i> {state.userDetails.email}
              </li>
            </ul>
            <div className="progress-box m-t10">
              <div className="progress-info">
                Profile Strength (Average)<span>70%</span>
              </div>
              <div className="progress">
                <div
                  className="progress-bar bg-primary"
                  style={{ width: "80%" }}
                  role="progressbar"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4  col-md-5">
        {/* <Link to={""}> */}
        {/* AttachVideo */}
        <div className=" text-white ">
          <AttachVideo />

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
                Resume Title
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
                        // onChange={(e) => setProjectsTitle(e.target.value)}
                        // value={ProjectsTitle}
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="form-group">
                      <label>Last Name</label>
                      <TextInputModal
                        placeholder="Enter Last Name"
                        // onChange={(e) => setProjectsTitle(e.target.value)}
                        // value={ProjectsTitle}
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
                          //   setLastUsed(e.target.value);
                        }}
                        options={[
                          { id: 1, name: "test 1" },
                          { id: 2, name: "test 2" },
                        ]}
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
                        options={[
                          { id: 1, name: "test 1" },
                          { id: 2, name: "test 2" },
                        ]}
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
                        options={[
                          { id: 1, name: "test 1" },
                          { id: 2, name: "test 2" },
                        ]}
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
              </form>
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
                  callUpdateCandidateSummary();
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
