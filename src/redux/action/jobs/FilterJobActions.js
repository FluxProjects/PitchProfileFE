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
  var resultCompanySize = [];
  // ? company filter
  resultCompanySize = state().BackupAlljobs.filter(function (item) {
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
    data: resultCompanySize,
  });
};

export const filterIndustryName =
  (IndustryFilter) => async (dispatch, state) => {
    console.log("companyNamecompanyName", IndustryFilter);
    var resultCompanySize = [];
    // ? company filter
    resultCompanySize = state().BackupAlljobs.filter(function (item) {
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
      data: resultCompanySize,
    });
  };

export const filterCompanySize = (CompanySize) => async (dispatch, state) => {
  console.log("companyNamecompanyName", CompanySize);
  var resultCompanySize = [];
  // ? company filter
  resultCompanySize = state().BackupAlljobs.filter(function (item) {
    if (item?.company?.company_size == CompanySize) return item;
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
    data: resultCompanySize,
  });
};

export const filterJobAll =
  (companyName, IndustryFilter, CompanySize) => async (dispatch, state) => {
    // return;
    var result = [];
    var resultIndustry = [];
    var resultCompanySize = [];
    // var resultDesignation = [];
    //    ? is company name filter
    console.log("this is result dep", companyName);

    state().BackupAlljobs.filter(function (item) {
      if (companyName?.length == 0 || companyName == null) {
        result.push(item);
      } else if (item?.company?.company_name == companyName) {
        result.push(item);
      }
    });

    console.log("this is result dep", result);

    result.filter(function (item) {
      if (IndustryFilter?.length == 0 || IndustryFilter == null) {
        resultIndustry.push(item);
      } else if (item?.company?.industry == IndustryFilter) {
        resultIndustry.push(item);
      }
    });
    console.log("resultIndustry", resultIndustry);

    resultIndustry.filter(function (item) {
      if (CompanySize?.length == 0 || CompanySize == null) {
        resultCompanySize.push(item);
      } else if (item?.company?.company_size == CompanySize) {
        resultCompanySize.push(item);
      }
    });

    const uniqueResults = Array.from(
      new Set(resultCompanySize.map((a) => a.id))
    ).map((id) => {
      return resultCompanySize.find((a) => a.id === id);
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
      data: uniqueResults,
    });
  };

export const ResetfilterJobs = () => async (dispatch, state) => {
  dispatch({
    type: "FilterAllJobs",
    data: state().BackupAlljobs,
  });
};
