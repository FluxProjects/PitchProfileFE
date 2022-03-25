import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  DeleteCandidateLanguages,
  GetLanguages,
  updateUser,
} from "../../../redux/action";
import { proficiencyLevelDrop } from "../../../utils/DropDownUtils";
import { formatDate } from "../../../utils/functions";
import DropDownModalComponent from "./DropDownModalComponent";
import DropdownSearch from "./DropdownSearch";
import AddLanguagesForm from "./Modals/AddLanguagesForm";
import TextInputModal from "./TextInputModal";

export default function ProfileDetailsComponent({ isView }) {
  const [show, setShow] = useState(false);

  const [LangArr, setLangArr] = useState([
    {
      language: "",
      level: "",
    },
  ]);

  const state = useSelector((state) => state);
  const userDetails = useSelector((state) => state.userDetails);
  const dispatch = useDispatch();

  const [dob, setDob] = useState(userDetails.dob);
  const [gender, setGender] = useState(state.userDetails.gender);
  const [isMarried, setIsMarried] = useState(state.userDetails.marital_status);
  const [Disability, setHasDisability] = useState(state.userDetails.disability);
  const [disabilityDescription, setDisabilityDescription] = useState(
    state.userDetails.disability_description
  );

  const callUpdateUser = async () => {
    await dispatch(
      updateUser(
        userDetails.id,
        userDetails.fname,
        userDetails.lname,
        dob,
        gender,
        isMarried,
        userDetails.passport,
        Disability,
        disabilityDescription,
        userDetails.address,
        userDetails.city,
        userDetails.stateName,
        userDetails.country,
        userDetails.hometownCountry,
        userDetails.phone,
        userDetails.email,
        state.userDetails.authToken,
        // router
        setShow()
      )
    );
  };

  const [updateData, setUpdateData] = useState(false);
  const [modalDataIndex, setModalDataIndex] = useState(0);
  const [showLang, setShowLang] = useState(false);

  const deleteCandidateVal = async (id, index) => {
    await dispatch(DeleteCandidateLanguages(id, index));
  };

  useEffect(() => {
    //  to get languages
    CallGetLanguages();
  }, []);
  const CallGetLanguages = async () => {
    if (state.languages.length < 1) await dispatch(GetLanguages());
  };

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  const handleCloseLang = () => {
    setShowLang(false);
  };
  const handleShowLang = () => {
    setShowLang(true);
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

  return (
    <>
      {/* Profile details */}
      <div id="personal_details_bx" className="job-bx bg-white m-b30">
        <div className="d-flex">
          <h5 className="m-b30">Personal Details</h5>
          {!isView && (
            <Link
              to={"#"}
              data-toggle="modal"
              data-target="#personaldetails"
              onClick={() => handleShow()}
              className="site-button add-btn button-sm"
            >
              <i className="fa fa-pencil m-r5"></i> Edit
            </Link>
          )}
        </div>

        <Modal
          show={show}
          onHide={() => handleClose()}
          className="modal fade modal-bx-info editor"
        >
          <div className="modal-dialog my-0" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="PersonaldetailsModalLongTitle">
                  Personal Details
                </h5>
                <button
                  type="button"
                  className="close"
                  onClick={() => {
                    setShow(false);
                  }}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="row m-b30">
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
                                defaultChecked={gender == 1 ? true : false}
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
                                defaultChecked={gender == 2 ? true : false}
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

                    <div className="col-lg-12 col-md-12">
                      {/* <div className="form-group">
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
                                checked={Disability == true ? true : false}
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
                                checked={Disability == false ? true : false}
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
                      </div> */}
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
                    )}
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="site-button"
                  data-dismiss="modal"
                  onClick={() => setShow(false)}
                >
                  Cancel
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    callUpdateUser();
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

        <Modal
          show={showLang}
          onHide={() => handleCloseLang()}
          className="modal fade modal-bx-info editor"
        >
          <AddLanguagesForm
            data={state.candidateLanguages[modalDataIndex]}
            index={modalDataIndex}
            isUpdate={updateData}
            handleClose={() => handleCloseLang()}
          />
        </Modal>

        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            {/* <h5 className="m-b30">Personal Details</h5> */}
            <div className="row">
              <div className="clearfix m-b20 col-md-6 col-sm-12 col-lg-4">
                <label className="m-b0">Date of Birth</label>
                <span className="clearfix font-13">
                  {userDetails.dob
                    ? formatDate(userDetails.dob)
                    : "Not Entered"}
                </span>
              </div>
              <div className="clearfix m-b20 col-md-6 col-sm-12 col-lg-4">
                <label className="m-b0">Gender</label>
                <span className="clearfix font-13">
                  {userDetails.gender == 1
                    ? "Male"
                    : userDetails.gender == 2
                    ? "Female"
                    : "Not Selected"}
                </span>
              </div>
              <div className="clearfix m-b20 col-md-6 col-sm-12 col-lg-4">
                <label className="m-b0">Marital Status</label>
                <span className="clearfix font-13">
                  {userDetails.marital_status == 1
                    ? "Married"
                    : userDetails.marital_status == 2
                    ? "Single"
                    : "Not Selected"}
                </span>
              </div>

              {/* <div className="clearfix m-b20 col-md-6 col-sm-12 col-lg-4">
                <label className="m-b0">Differently Abled</label>
                <span className="clearfix font-13">
                  {userDetails.disability ? "Yes" : "No"}
                </span>
              </div> */}
              <div className="clearfix m-b20 col-md-12 col-sm-12 col-lg-12">
                <div className="d-flex">
                  <h5 className="m-b15">Languages</h5>
                  {!isView && (
                    <Link
                      to={"#"}
                      data-toggle="modal"
                      data-target="#educations"
                      onClick={() => {
                        setUpdateData(false);
                        handleShowLang();
                      }}
                      className="site-button add-btn button-sm"
                    >
                      <i className="fa fa-plus m-r5"></i> Add
                    </Link>
                  )}
                </div>
                {state.candidateLanguages.map((item, index) => (
                  <>
                    <h6 className="font-14 mt-3 m-b0">
                      <span className="float-right">
                        {!isView && (
                          <>
                            <span
                              onClick={() => {
                                setUpdateData(true);
                                setModalDataIndex(index);
                                handleShowLang();
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
                          </>
                        )}
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
                          <label className="m-b0">Proficiency Level</label>
                          <span className="clearfix font-13">
                            {proficiencyLevelDrop.findIndex(
                              (x) => x?.id == item?.proficiency_level
                            ) != -1
                              ? proficiencyLevelDrop[
                                  proficiencyLevelDrop.findIndex(
                                    (x) => x?.id == item?.proficiency_level
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
