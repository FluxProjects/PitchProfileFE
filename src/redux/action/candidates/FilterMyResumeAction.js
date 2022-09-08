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
      if (item?.is_active?.toString() === is_active?.toString()) {
        console.log("item.isactive", item?.is_active, is_active);
        result.push(item);
      }
    });

    // toast.success("Updated Successfully!", {
    //   position: "bottom-center",
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    // });
    dispatch({
      type: "GetAllCandidates",
      data: result,
    });
  };

export const filterCandidateName = (nameFilter) => async (dispatch, state) => {
  var resultNameFilter = [];
  // ? company filter
  resultNameFilter = state().backupCandidates.filter(function (item) {
    if (item?.f_name + " " + item?.l_name == nameFilter) return item;
  });

  // toast.success("Updated Successfully!", {
  //   position: "bottom-center",
  //   autoClose: 5000,
  //   hideProgressBar: false,
  //   closeOnClick: true,
  //   pauseOnHover: true,
  //   draggable: true,
  //   progress: undefined,
  // });
  dispatch({
    type: "GetAllCandidates",
    data: resultNameFilter,
  });
};

export const filterCandidateSkill = (skill_id) => async (dispatch, state) => {
  var resultSkill = [];

  //  ? skill filter
  state().backupCandidates.map((itemM) => {
    itemM.candidate_skills.filter((item) => {
      if (item.skill_name == skill_id) {
        resultSkill.push(itemM);
      }
    });
  });

  // toast.success("Updated Successfully!", {
  //   position: "bottom-center",
  //   autoClose: 5000,
  //   hideProgressBar: false,
  //   closeOnClick: true,
  //   pauseOnHover: true,
  //   draggable: true,
  //   progress: undefined,
  // });
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

    // toast.success("Updated Successfully!", {
    //   position: "bottom-center",
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    // });
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

    // toast.success("Updated Successfully!", {
    //   position: "bottom-center",
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    // });
    dispatch({
      type: "GetAllCandidates",
      data: resultDesignation,
    });
  };

export const filterCandidateAll =
  (is_active, skill_id, companyFilter, designationFilter, nameFilter) =>
  async (dispatch, state) => {
    console.log("filterCandidateAllfilterCandidateAll", is_active);
    // return;
    var result = [];
    var resultSkill = [];
    var resultCompany = [];
    var resultDesignation = [];
    var resultNameFilter = [];
    //    ? is available filter
    console.log("is_activeis_activeis_activeis_active", is_active);
    state().backupCandidates.filter((item) => {
      console.log("is_active null", item?.is_active);
      if (is_active?.length == 0 || is_active == null) {
        result.push(item);
      } else if (item?.is_active?.toString() == is_active?.toString()) {
        console.log("is_active else", item?.is_active, is_active);

        result.push(item);
      }
    });

    console.log("resulte unavailable", result);
    //  ? skill filter
    result.map((itemM) => {
      if (itemM.candidate_skills.length > 0) {
        itemM.candidate_skills.filter((item) => {
          console.log("item.skill_name == skill_id", item.skill_name, skill_id);

          if (skill_id == null || skill_id?.length == 0) {
            console.log("skill_id null");
            resultSkill.push(itemM);
            // result.push(itemM);
          } else if (item.skill_name == skill_id) {
            resultSkill.push(itemM);

            // result.push(itemM);
          }
        });
      } else {
        if (skill_id == null || skill_id?.length == 0) {
          console.log("skill_id null");
          resultSkill.push(itemM);
          // result.push(itemM);
        }
      }
    });

    console.log("resultSkill unavailable", resultSkill);

    // ? company filter
    resultCompany = resultSkill.filter(function (item) {
      if (companyFilter == null || companyFilter?.length == 0) {
        console.log("companyFilter null");

        return item;
      } else if (item?.employments[0]?.organization == companyFilter) return item;
    });
    console.log("resultCompany unavailable", resultCompany);

    resultDesignation = resultCompany.filter(function (item) {
      if (designationFilter == null || designationFilter?.length == 0) {
        console.log("designationFilter null", designationFilter);

        return item;
      } else if (item?.employments[0]?.role == designationFilter) return item;
    });

    resultNameFilter = resultDesignation.filter(function (item) {
      if (designationFilter == null || designationFilter?.length == 0) {
        return item;
      } else {
        if (item?.f_name + " " + item?.l_name == nameFilter) return item;
      }
    });

    console.log("resultDesignation unavailable", resultNameFilter);

    const uniqueResults = Array.from(
      new Set(resultNameFilter.map((a) => a.id))
    ).map((id) => {
      return resultNameFilter.find((a) => a.id === id);
    });

    // toast.success("Updated Successfully!", {
    //   position: "bottom-center",
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    // });
    dispatch({
      type: "GetAllCandidates",
      data: uniqueResults,
    });
  };

export const ResetfilterCandidate = () => async (dispatch, state) => {
  dispatch({
    type: "GetAllCandidates",
    data: state().backupCandidates,
  });
};
