import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AddCandidateEducation,
  AddCandidateLanguages,
  UpdateCandidateEducation,
  UpdateCandidateLanguages,
} from "../../../../redux/action";
import { proficiencyLevelDrop } from "../../../../utils/DropDownUtils";
import DropDownModalComponent from "../DropDownModalComponent";
import TextInputModal from "../TextInputModal";

export default function AddLanguagesForm({
  data,
  index,
  handleClose,
  isUpdate,
}) {
  const state = useSelector((state) => state);

  const dispatch = useDispatch();
  const [level, setLevel] = useState(
    data?.proficiency_level ? data?.proficiency_level : 1
  );
  const [languages, setLanguages] = useState(
    data?.language_id ? data?.language_id : 1
  );
  const callAction = async () => {
    if (isUpdate) {
      console.log("update called");
      await dispatch(
        UpdateCandidateLanguages(
          data.id,
          languages,
          level,
          index,
          handleClose()
        )
      );
    } else {
      console.log("add called");
      await dispatch(AddCandidateLanguages(languages, level, handleClose()));
    }
  };

  return (
    <>
      <div className="modal-dialog mx-0 my-0" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="EmploymentModalLongTitle">
              Languages
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
                    <label>Languages:</label>
                    {/* <DropdownSearch items={state.languages} /> */}
                    <DropDownModalComponent
                      onChange={(e) => {
                        console.log("eee", e.target.value);
                        setLanguages(e.target.value);
                      }}
                      value={languages}
                      options={state.languages}
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group">
                    <label>Proficiency Level:</label>
                    <DropDownModalComponent
                      onChange={(e) => {
                        console.log("eee", e.target.value);
                        setLevel(e.target.value);
                      }}
                      value={level}
                      options={proficiencyLevelDrop}
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
