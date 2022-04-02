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
      if (item.is_active.toString() === is_active.toString()) {
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
      if (item.skill_name == skill_id) {
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
      if (is_active == null || is_active == "") {
        console.log("is_active null");

        result.push(item);
      } else if (item.is_active.toString() === is_active.toString()) {
        result.push(item);
      }
    });

    //  ? skill filter

    result.map((itemM) => {
      itemM.candidate_skills.filter((item) => {
        if (skill_id == null || skill_id == "") {
          console.log("skill_id null");
          resultSkill.push(itemM);
          // result.push(itemM);
        } else if (item.skill_name == skill_id) {
          resultSkill.push(itemM);
          // result.push(itemM);
        }
      });
    });

    // ? company filter

    resultCompany = resultSkill.filter(function (item) {
      if (companyFilter == null || companyFilter == "") {
        console.log("companyFilter null");

        return item;
      } else if (item?.employments[0]?.organization == companyFilter) return item;
    });

    resultDesignation = resultCompany.filter(function (item) {
      if (designationFilter == null || designationFilter == "") {
        console.log("designationFilter null", designationFilter);

        return item;
      } else if (item?.employments[0]?.role == designationFilter) return item;
    });

    // resultDesignation = state().backupCandidates.filter(function (item) {
    //   if () return item;
    // });

    // var arr = result.concat(
    //   resultSkill.concat(resultCompany.concat(resultDesignation))
    // );

    // const uniqueResults = Array.from(new Set(arr.map((a) => a.id))).map(
    //   (id) => {
    //     return arr.find((a) => a.id === id);
    //   }
    // );

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

// export const filterCandidateAll =
// (is_active, skill_id, companyFilter, designationFilter) =>
// async (dispatch, state) => {
//   var result = [];
//   var wasResultFiltered = false;
//   var resultSkill = [];
//   var wasResultSkillFiltered = false;
//   var resultCompany = [];
//   var wasResultCompanyFiltered = false;
//   var resultDesignation = [];
//   //    ? is available filter
//   if (is_active != null) {
//     state().backupCandidates.filter((item) => {
//       if (item.is_active.toString() === is_active.toString()) {
//         console.log("item.isactive", item.is_active, is_active);
//         result.push(item);
//       }
//     });
//     wasResultFiltered = true;
//   } else {
//     result = state().backupCandidates;
//     wasResultFiltered = false;
//   }

//   //  ? skill filter
//   if (wasResultFiltered == true) {
//     if (skill_id != null) {
//       wasResultSkillFiltered = true;
//       result.map((itemM) => {
//         itemM.candidate_skills.filter((item) => {
//           if (item.skill_name == skill_id) {
//             resultSkill.push(itemM);
//           }
//         });
//       });
//     } else {
//       resultSkill = result;
//       wasResultSkillFiltered = false;
//     }
//   } else {
//     if (skill_id != null) {
//       wasResultSkillFiltered = true;
//       state().backupCandidates.map((itemM) => {
//         itemM.candidate_skills.filter((item) => {
//           if (item.skill_name == skill_id) {
//             resultSkill.push(itemM);
//           }
//         });
//       });
//     } else {
//       resultSkill = state().backupCandidates;
//       wasResultSkillFiltered = false;
//     }
//   }

//   // ? company filter
//   if (wasResultSkillFiltered == true) {
//     if (companyFilter != null) {
//       wasResultCompanyFiltered = true;
//       resultCompany = resultSkill.filter(function (item) {
//         if (item?.employments[0]?.organization == companyFilter) return item;
//       });
//     } else {
//       wasResultCompanyFiltered = false;

//       resultCompany = resultSkill;
//     }
//   } else {
//     if (companyFilter != null) {
//       wasResultCompanyFiltered = true;
//       resultCompany = state().backupCandidates.filter(function (item) {
//         if (item?.employments[0]?.organization == companyFilter) return item;
//       });
//     } else {
//       wasResultCompanyFiltered = false;

//       resultCompany = state().backupCandidates;
//     }
//   }

//   if (wasResultCompanyFiltered == true) {
//     resultDesignation = resultCompany.filter(function (item) {
//       if (item?.employments[0]?.role == designationFilter) return item;
//     });
//   } else {
//     resultDesignation = state().backupCandidates;
//   }

//   console.log("My sample orgafnization Accountant", resultDesignation);

//   // return;

//   toast.success("Updated Successfully!", {
//     position: "top-right",
//     autoClose: 5000,
//     hideProgressBar: false,
//     closeOnClick: true,
//     pauseOnHover: true,
//     draggable: true,
//     progress: undefined,
//   });
//   dispatch({
//     type: "GetAllCandidates",
//     data: resultDesignation,
//   });
// };

export const ResetfilterCandidate = () => async (dispatch, state) => {
  dispatch({
    type: "GetAllCandidates",
    data: state().backupCandidates,
  });
};
