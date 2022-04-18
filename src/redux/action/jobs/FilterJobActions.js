import axios from "axios";
import { URL } from "../../../utils/APIUtils";

import { toast } from "react-toastify";

import {
  GetCityName,
  GetCountryName,
  GetStateName,
  SortSameVals,
} from "../../../utils/functions";

export const filterCompanyName = (companyName) => async (dispatch, state) => {
  console.log("companyNamecompanyName", companyName);
  var resultCompany = [];
  // ? company filter
  resultCompany = state().BackupAlljobs.filter(function (item) {
    if (item?.company?.company_name == companyName) return item;
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
    type: "FilterAllJobs",
    data: resultCompany,
  });
};

export const filterIndustryName =
  (IndustryFilter) => async (dispatch, state) => {
    console.log("companyNamecompanyName", IndustryFilter);
    var resultCompany = [];
    // ? company filter
    resultCompany = state().BackupAlljobs.filter(function (item) {
      if (item?.company?.industry == IndustryFilter) return item;
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
      type: "FilterAllJobs",
      data: resultCompany,
    });
  };

export const ResetfilterJobs = () => async (dispatch, state) => {
  dispatch({
    type: "FilterAllJobs",
    data: state().BackupAlljobs,
  });
};
