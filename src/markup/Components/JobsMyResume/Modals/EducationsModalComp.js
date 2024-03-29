import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AddCandidateEducation,
  UpdateCandidateEducation,
} from "../../../../redux/action";
import DropDownModalComponent from "../DropDownModalComponent";
import TextInputModal from "../TextInputModal";

export default function EducationsModalComp({
  data,
  index,
  handleClose,
  isUpdate,
}) {
  const state = useSelector((state) => state);

  const dispatch = useDispatch();

  const [institute, setInstitute] = useState(
    isUpdate == true ? data.institute : ""
  );
  const [educationLevel, setEducationLevel] = useState(
    isUpdate == true ? data?.education_level_id : 1
  );

  const [department, setDepartment] = useState(
    isUpdate == true ? data?.department_id : 1
  );

  const [course, setCourse] = useState(isUpdate == true ? data?.course : "");

  const [startDate, setStartDate] = useState(
    isUpdate == true ? data?.start_date : ""
  );
  const [endDate, setEndDate] = useState(
    isUpdate == true ? data?.end_date : null
  );
  const [isCurrent, setIsCurrent] = useState(
    isUpdate == true ? data?.is_current : false
  );
  const [fieldAlert, setFieldAlert] = useState(false);
  const [fieldText, setFieldText] = useState(false);

  const callAction = async () => {
    if (institute == null || institute == "") {
      setFieldAlert(true);
      setFieldText("Please enter institute");
      return;
    }
    if (educationLevel == null || educationLevel == "") {
      setFieldAlert(true);
      setFieldText("Please enter education level");

      return;
    }
    if (department == null || department == "") {
      setFieldAlert(true);
      setFieldText("Please enter department");

      return;
    }
    if (course == null || course == "") {
      setFieldAlert(true);
      setFieldText("Please enter course");

      return;
    }
    if (startDate == null || startDate == "") {
      setFieldAlert(true);
      setFieldText("Please enter start date");

      return;
    }

    if (isCurrent == false) {
      if (endDate == null || endDate == "") {
        setFieldAlert(true);
        setFieldText("Please enter end date");

        return;
      }
    }

    setFieldAlert(false);

    if (isUpdate) {
      console.log("update called");
      await dispatch(
        UpdateCandidateEducation(
          data.id,
          institute,
          educationLevel,
          department,
          course,
          startDate,
          endDate,
          isCurrent,
          index,
          handleClose()
        )
      );
    } else {
      console.log("add called");
      await dispatch(
        AddCandidateEducation(
          institute,
          department,
          educationLevel,
          course,
          startDate,
          endDate,
          isCurrent,
          handleClose()
        )
      );
    }
  };

  return (
    <>
      <div className="modal-dialog mx-0 my-0" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="EmploymentModalLongTitle">
              Education
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
                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <label>
                      Institute Name <span className="text-danger"> *</span>
                    </label>
                    <TextInputModal
                      placeholder="Enter Your Institute Name"
                      onChange={(e) => setInstitute(e.target.value)}
                      value={institute}
                    />
                  </div>
                </div>

                {/* <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <label>Department</label>
                    <DropDownModalComponent
                      onChange={(e) => {
                        console.log("eee", e.target.value);
                        setDepartment(e.target.value);
                      }}
                      value={department}
                      options={state.departments}
                    />
                  </div>
                </div> */}

                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <label>
                      Education Level <span className="text-danger"> *</span>
                    </label>
                    <DropDownModalComponent
                      onChange={(e) => {
                        console.log("testing ", e.target.value);
                        setEducationLevel(e.target.value);
                      }}
                      value={educationLevel}
                      options={state.educationLevels}
                    />
                  </div>
                </div>

                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="form-group">
                    <label>
                      Major <span className="text-danger"> *</span>
                    </label>
                    <TextInputModal
                      placeholder="Enter Major"
                      onChange={(e) => setCourse(e.target.value)}
                      value={course}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-xs-12">
                  <div className="form-group">
                    <label>
                      Start Date <span className="text-danger"> *</span>
                    </label>
                    <TextInputModal
                      label=""
                      type="date"
                      onChange={(e) => {
                        console.log("test", e.target.value);
                        setStartDate(e.target.value);
                      }}
                      value={startDate}
                    />
                  </div>
                </div>

                {isCurrent == false && (
                  <div className="col-lg-6 col-md-6 col-xs-12">
                    <div className="form-group">
                      <label>
                        End Date <span className="text-danger"> *</span>
                      </label>
                      <TextInputModal
                        label=""
                        type="date"
                        onChange={(e) => {
                          console.log("test", e.target.value);
                          setEndDate(e.target.value);
                        }}
                        value={endDate}
                      />
                    </div>
                  </div>
                )}
                {/* {!endDate && ( */}
                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <label>
                      Is this your current Institute?{" "}
                      <span className="text-danger"> *</span>
                    </label>
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input"
                            id="employ_yes"
                            name="example1"
                            checked={isCurrent == true ? true : false}
                            value={true}
                            onChange={() => setIsCurrent(true)}
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="employ_yes"
                          >
                            Yes
                          </label>
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input"
                            id="employ_no"
                            name="example1"
                            checked={isCurrent == false ? true : false}
                            value={false}
                            onChange={() => setIsCurrent(false)}
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="employ_no"
                          >
                            No
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* )} */}
              </div>
            </form>
            {fieldAlert && <p className="text-danger">{fieldText}</p>}
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
                callAction();
              }}
              type="button"
              className="site-button"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
