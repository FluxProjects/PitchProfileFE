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
  (is_active) => async (dispatch, state) => {
    var result = [];
    //    ? is available filter
    state().backupCandidates.filter((item) => {
      if (item.is_active.toString() === is_active) {
        console.log("item.isactive", item.is_active, is_active);
        result.push(item);
      }
    });

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
      data: result,
    });
  };

export const filterCandidateSkill = (skill_id) => async (dispatch, state) => {
  var resultSkill = [];

  //  ? skill filter
  state().backupCandidates.map((itemM) => {
    itemM.candidate_skills.filter((item) => {
      if (item.skill_id == skill_id) {
        resultSkill.push(itemM);
      }
    });
  });

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
    data: resultSkill,
  });
};

export const filterCandidateCompany =
  (companyFilter) => async (dispatch, state) => {
    var resultCompany = [];
    // ? company filter
    resultCompany = state().backupCandidates.filter(function (item) {
      if (item?.employments[0]?.organization == companyFilter) return item;
    });

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
      data: resultCompany,
    });
  };

export const filterCandidateRole =
  (designationFilter) => async (dispatch, state) => {
    var resultDesignation = [];

    resultDesignation = state().backupCandidates.filter(function (item) {
      if (item?.employments[0]?.role == designationFilter) return item;
    });

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

export const filterCandidateAll =
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
