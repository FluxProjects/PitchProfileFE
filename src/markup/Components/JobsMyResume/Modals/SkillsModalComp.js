import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AddCandidateSkill,
  UpdateCandidateSkill,
} from "../../../../redux/action";
import { skillTypeDrop } from "../../../../utils/DropDownUtils";
import DropDownModalComponent from "../DropDownModalComponent";
import TextInputModal from "../TextInputModal";

export default function SkillsModalComponent({
  id,
  index,
  ItSkillsProp,
  ProLevProp,
  IsTopSkillProp,
  SkillTypeProp,
  handleClose,
  isUpdate,
}) {
  const state = useSelector((state) => state);

  const dispatch = useDispatch();

  const [ItSkills, setItSkills] = useState(ItSkillsProp ? ItSkillsProp : 1);
  const [skillType, setSkillType] = useState(SkillTypeProp ? SkillTypeProp : 1);
  const [ProLev, setProLev] = useState(ProLevProp ? ProLevProp : 1);
  const [IsTopSkill, setIsTopSkill] = useState(
    IsTopSkillProp ? IsTopSkillProp : false
  );
  const [fieldAlert, setFieldAlert] = useState(false);

  const callAddCandidateSkill = async () => {
    if (ItSkills == null || ItSkills == "") {
      setFieldAlert(true);
      return;
    }
    if (skillType == null || skillType == "") {
      setFieldAlert(true);
      return;
    }
    if (ProLev == null || ProLev == "") {
      setFieldAlert(true);
      return;
    }

    if (IsTopSkill == null || IsTopSkill == "") {
      setFieldAlert(true);
      return;
    }

    if (isUpdate) {
      console.log("update called");
      await dispatch(
        UpdateCandidateSkill(
          id,
          ItSkills,
          skillType,
          ProLev,
          IsTopSkill,
          index,
          handleClose()
        )
      );
    } else {
      console.log("add called");
      await dispatch(
        AddCandidateSkill(
          ItSkills,
          skillType,
          ProLev,
          IsTopSkill,
          handleClose()
        )
      );
    }
  };

  return (
    <>
      {/* skills */}

      <div className="modal-dialog my-0" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="EmploymentModalLongTitle">
              Skills
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
                <div className="col-lg-6 col-md-12">
                  <div className="form-group">
                    <label>Skill Name</label>
                    <select
                      value={ItSkills}
                      onChange={(e) => {
                        console.log("ret", e.target.value);
                        setItSkills(e.target.value);
                      }}
                      className="form-control"
                    >
                      {state.skills.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.name}
                        </option>
                      ))}
                      <option key={"other"} value={"other"}>
                        other
                      </option>
                    </select>
                  </div>
                </div>
                {ItSkills == "other" && (
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <div>
                        <label>Add New Skill</label>
                      </div>

                      <TextInputModal
                        placeholder=""
                        type="number"
                        min={1}
                        max={10}
                        onChange={(e) => {
                          // setProLev(e.target.value)
                        }}
                        // value={ProLev}
                      />
                      <div style={{ marginBottom: 10 }}>
                        <small></small>
                      </div>
                    </div>
                  </div>
                )}
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group">
                    <label>Skill Type</label>
                    <DropDownModalComponent
                      onChange={(e) => {
                        console.log("eee", e.target.value);
                        setSkillType(e.target.value);
                      }}
                      value={skillType}
                      options={skillTypeDrop}
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-md-12">
                  <div className="form-group">
                    <div>
                      <label>Proficiency</label>
                    </div>

                    <TextInputModal
                      placeholder=""
                      type="number"
                      min={1}
                      max={10}
                      onChange={(e) => setProLev(e.target.value)}
                      value={ProLev}
                    />
                    <div style={{ marginBottom: 10 }}>
                      <small>Rate your Skill from 1 to 10</small>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-12">
                  <div className="form-group">
                    <label>Top Skill</label>
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input"
                            id="employ_yes"
                            name="example1"
                            checked={IsTopSkill == true ? true : false}
                            value={true}
                            onChange={() => setIsTopSkill(true)}
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
                            checked={IsTopSkill == false ? true : false}
                            value={false}
                            onChange={() => setIsTopSkill(false)}
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
                callAddCandidateSkill();
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
