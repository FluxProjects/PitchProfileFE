import axios from "axios";
import { URL } from "../../../utils/APIUtils";

import { toast } from "react-toastify";

import {
  GetCityName,
  GetCountryName,
  GetStateName,
  SortSameVals,
} from "../../../utils/functions";

export const filterCandidateAvailability =
  (is_active, skill_id, companyFilter, designationFilter) =>
  async (dispatch, state) => {
    var result = [];
    var resultSkill = [];
    var resultCompany = [];
    var resultDesignation = [];
    //    ? is available filter
    state().backupCandidates.filter((item) => {
      if (item.is_active.toString() === is_active) {
        console.log("item.isactive", item.is_active, is_active);
        result.push(item);
      }
    });

    //  ? skill filter
    result.map((itemM) => {
      itemM.candidate_skills.filter((item) => {
        if (item.skill_id == skill_id) {
          resultSkill.push(itemM);
        }
      });
    });

    // ? company filter
    resultCompany = resultSkill.filter(function (item) {
      if (item?.employments[0]?.organization == companyFilter) return item;
    });

    resultDesignation = resultCompany.filter(function (item) {
      if (item?.employments[0]?.role == designationFilter) return item;
    });

    console.log("My sample orgafnization Accountant", resultDesignation);

    // return;

    toast.success("Updated Successfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    dispatch({
      type: "GetAllCandidates",
      data: resultDesignation,
    });
  };

export const ResetfilterCandidate = () => async (dispatch, state) => {
  dispatch({
    type: "GetAllCandidates",
    data: state().backupCandidates,
  });
};