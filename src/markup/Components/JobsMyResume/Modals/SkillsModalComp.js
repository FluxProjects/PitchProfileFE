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

  const [ItSkills, setItSkills] = useState(ItSkillsProp);
  const [skillType, setSkillType] = useState(SkillTypeProp);
  const [ProLev, setProLev] = useState(ProLevProp);
  const [IsTopSkill, setIsTopSkill] = useState(IsTopSkillProp);

  const callAddCandidateSkill = async () => {
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
                    <DropDownModalComponent
                      onChange={(e) => {
                        console.log("ret", e.target.value);
                        setItSkills(e.target.value);
                      }}
                      value={ItSkills}
                      options={state.skills}
                    />
                  </div>
                </div>
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
                    <label>Proficiency</label>
                    <TextInputModal
                      placeholder="Rate your Skill from 1 to 10"
                      type="number"
                      min={1}
                      max={10}
                      onChange={(e) => setProLev(e.target.value)}
                      value={ProLev}
                    />
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
