import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  GetCandidateSkills,
  DeleteCandidateSkill,
} from "../../../redux/action";
import SkillsModalComp from "./Modals/SkillsModalComp";
import { skillTypeDrop } from "../../../utils/DropDownUtils";

export default function SkillsComponent({ isView }) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    callGetCandidateSkill();
  }, []);

  const callGetCandidateSkill = async () => {
    await dispatch(GetCandidateSkills());
  };

  const deleteCandidateSkill = async (id, index) => {
    await dispatch(DeleteCandidateSkill(id, index));
  };

  const [show, setShow] = useState(false);
  const [updateData, setUpdateData] = useState(false);
  const [modalDataIndex, setModalDataIndex] = useState(0);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
    console.log("testing", show);
  };

  return (
    <>
      {/* skills */}
      <div id="it_skills_bx" className="job-bx table-job-bx bg-white m-b30">
        <div className="d-flex">
          <h5 className="m-b15">Skills</h5>
          {!isView && (
            <Link
              to={"#"}
              data-toggle="modal"
              data-target="#itskills"
              onClick={() => {
                setUpdateData(false);
                handleShow();
              }}
              className="site-button add-btn button-sm"
            >
              <i className="fa fa-pencil m-r5"></i> Add
            </Link>
          )}
        </div>
        <p>
          Skills are the first thing recruiters notice in your profile. List
          down your expertise and identify Top 3 skills to highlight your
          profile.
        </p>
        <table>
          <thead>
            <tr>
              <th>Skill Name</th>
              <th>Skill Type</th>
              <th>Proficiency</th>
              <th>Top 3 Skills</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {state.candidateSkills?.length > 0 &&
              state.candidateSkills.map((item, index) => (
                <tr key={index}>
                  <td>
                    {
                      state?.skills.findIndex((x) => x?.id == item?.skill_id) ==
                      -1
                        ? ""
                        : state?.skills[
                            state?.skills.findIndex(
                              (x) => x?.id == item?.skill_id
                            )
                          ].name
                      // state.skills[
                      //   state.skills.findIndex((x) => x.id == item.skill_id)
                      // ].name
                    }
                  </td>
                  <td>
                    {
                      skillTypeDrop[
                        skillTypeDrop.findIndex((x) => x.id == item.skill_type)
                      ].name
                    }
                  </td>
                  <td>{item.skill_level}</td>
                  <td>
                    {item.is_top ? (
                      <i class="fa fa-check" style={{ color: "green" }}></i>
                    ) : (
                      <span
                        class=""
                        style={{ color: "red", fontWeight: "bolder" }}
                      ></span>
                    )}
                  </td>
                  <td>
                    {!isView && (
                      <>
                        {/* <Link
                          to={"#"}
                          data-toggle="modal"
                          data-target="#itskills"
                          onClick={() => {
                            console.log("tests", index);
                            setUpdateData(true);
                            setModalDataIndex(index);
                            handleShow();
                          }}
                          className="site-button add-btn button-sm"
                        >
                          <i className="fa fa-pencil m-r5"></i> Edit
                        </Link> */}
                        {/* <span
                       
                        className="m-l15 cursorPointer font-14"
                        data-toggle="modal"
                        data-target="#itskills"
                      >
                        <i className="fa fa-pencil"></i>
                      </span> */}
                        <span
                          onClick={() => {
                            console.log("tests", index);

                            deleteCandidateSkill(item.id, index);
                          }}
                          className="m-l15 cursorPointer font-14"
                          data-toggle="modal"
                          data-target="#itskills"
                        >
                          <i className="fa fa-minus text-danger"></i>
                        </span>
                      </>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <Modal
        show={show}
        onHide={() => handleClose()}
        className="modal fade modal-bx-info editor"
      >
        <SkillsModalComp
          id={
            state.candidateSkills[modalDataIndex]
              ? state.candidateSkills[modalDataIndex].id
              : ""
          }
          ItSkillsProp={
            state.candidateSkills[modalDataIndex]
              ? state.candidateSkills[modalDataIndex].skill_id
              : ""
          }
          ItSkillsNameProp={
            state.candidateSkills[modalDataIndex]
              ? state.candidateSkills[modalDataIndex].skill_id
              : ""
          }
          IsTopSkillProp={
            state.candidateSkills[modalDataIndex]
              ? state.candidateSkills[modalDataIndex].is_top
              : ""
          }
          ProLevProp={
            state.candidateSkills[modalDataIndex]
              ? state.candidateSkills[modalDataIndex].skill_level
              : ""
          }
          SkillTypeProp={
            state.candidateSkills[modalDataIndex]
              ? state.candidateSkills[modalDataIndex].skill_type
              : ""
          }
          isUpdate={updateData}
          index={modalDataIndex}
          handleClose={() => handleClose()}
          handleShow={() => handleShow()}
        />
      </Modal>
    </>
  );
}
