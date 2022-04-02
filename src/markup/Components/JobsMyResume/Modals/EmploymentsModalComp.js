import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AddCandidateEmployment,
  UpdateCandidateEmployment,
} from "../../../../redux/action";
import TextAreaModalComponent from "../TextAreaModalComponent";
import DropDownModalComponent from "../DropDownModalComponent";
import TextInputModal from "../TextInputModal";

export default function EmploymentsModalComp({
  data,
  index,
  handleClose,
  isUpdate,
}) {
  const state = useSelector((state) => state);

  const dispatch = useDispatch();

  const [organization, setOrganization] = useState(
    isUpdate == true ? data?.organization : ""
  );
  const [industry, setIndustry] = useState(
    isUpdate == false ? 1 : data?.industry_id ? data?.industry_id : 1
  );
  const [department, setDepartment] = useState(
    isUpdate == false ? 1 : data?.department_id ? data?.department_id : 1
  );
  const [role, setRole] = useState(isUpdate == true ? data?.role : "");
  const [description, setDescription] = useState(
    isUpdate == true ? data?.description : ""
  );
  const [startDate, setStartDate] = useState(
    isUpdate == true ? data?.start_date : ""
  );
  const [endDate, setEndDate] = useState(
    isUpdate == true ? data?.end_date : ""
  );
  const [isCurrent, setIsCurrent] = useState(
    isUpdate == true ? data?.is_current : false
  );
  const [fieldAlert, setFieldAlert] = useState(false);

  const callAction = async () => {
    if (organization == null || organization == "") {
      setFieldAlert(true);
      return;
    }
    if (industry == null || industry == "") {
      setFieldAlert(true);
      return;
    }
    if (department == null || department == "") {
      setFieldAlert(true);
      return;
    }
    if (role == null || role == "") {
      setFieldAlert(true);
      return;
    }
    if (description == null || description == "") {
      setFieldAlert(true);
      return;
    }
    if (startDate == null || startDate == "") {
      setFieldAlert(true);
      return;
    }
    if (endDate == null || endDate == "") {
      setFieldAlert(true);
      return;
    }
    // if (isCurrent == null) {
    //   setFieldAlert(true);
    //   return;
    // }
    setFieldAlert(false);

    if (isUpdate) {
      console.log("update called");
      await dispatch(
        UpdateCandidateEmployment(
          data.id,
          organization,
          industry,
          department,
          role,
          description,
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
        AddCandidateEmployment(
          organization,
          industry,
          department,
          role,
          description,
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
      <div className="modal-dialog my-0" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="EmploymentModalLongTitle">
              Add Employment
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
                    <label>Organisation</label>
                    <TextInputModal
                      placeholder="Enter Organisation"
                      onChange={(e) => setOrganization(e.target.value)}
                      value={organization}
                    />
                  </div>
                </div>

                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <label>Industry</label>
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
                <div className="col-lg-12 col-md-12">
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
                </div>

                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <label>Role</label>
                    <TextInputModal
                      placeholder="Enter Role"
                      onChange={(e) => setRole(e.target.value)}
                      value={role}
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <label>Start Date</label>
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-12">
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
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <label>End Date</label>
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-12">
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
                  </div>
                </div>

                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <label>Description</label>
                    <TextAreaModalComponent
                      onChange={(e) => {
                        setDescription(e.target.value);
                      }}
                      value={description}
                      placeholder="Type Description"
                    />
                  </div>
                </div>
                {!endDate && (
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>Is this your current company?</label>
                      <div className="row">
                        <div className="col-lg-4 mb-2 col-md-6 col-sm-6 col-6">
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
                        <div className="col-lg-4 mb-2 col-md-6 col-sm-6 col-6">
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
                )}
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
