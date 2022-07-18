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
          <h5 className="m-b15">
            Skills{" "}
            <span style={{ color: "red", fontSize: 11 }}>
              {
                "(This section is mandatory please add at leaset top 3 skills. )"
              }
            </span>
          </h5>
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
            {state.singleUserData.candidate_skills?.length > 1 &&
              state.singleUserData.candidate_skills.map((item, index) => (
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
                  <td></td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
