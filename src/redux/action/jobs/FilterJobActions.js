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
      if (item?.company?.industry_name == IndustryFilter) return item;
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

export const filterDepartmentName =
  (DepartmentName) => async (dispatch, state) => {
    console.log("companyNamecompanyName", DepartmentName);
    var resultDepartmentName = [];
    // ? company filter
    resultDepartmentName = state().BackupAlljobs.filter(function (item) {
      if (item?.department?.name == DepartmentName) return item;
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
      data: resultDepartmentName,
    });
  };

export const filterEmploymentType =
  (EmploymentType) => async (dispatch, state) => {
    console.log("companyNamecompanyName", EmploymentType);
    var resultEmploymentType = [];
    // ? company filter
    resultEmploymentType = state().BackupAlljobs.filter(function (item) {
      if (item?.employment_type == EmploymentType) return item;
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
      data: resultEmploymentType,
    });
  };
export const filterSeniorityLevel =
  (SeniorityLevel) => async (dispatch, state) => {
    console.log("companyNamecompanyName", SeniorityLevel);
    var resultSeniorityLevel = [];
    // ? company filter
    resultSeniorityLevel = state().BackupAlljobs.filter(function (item) {
      if (item?.seniority_level == SeniorityLevel) return item;
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
      data: resultSeniorityLevel,
    });
  };

export const filterSalaryRange = (SalaryRange) => async (dispatch, state) => {
  console.log("companyNamecompanyName", SalaryRange);
  var resultSalaryRange = [];
  // ? company filter
  resultSalaryRange = state().BackupAlljobs.filter(function (item) {
    if (item?.salary_range == SalaryRange) return item;
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
    data: resultSalaryRange,
  });
};

export const filterShiftType = (ShiftType) => async (dispatch, state) => {
  console.log("companyNamecompanyName", ShiftType);
  var resultShiftType = [];
  // ? company filter
  resultShiftType = state().BackupAlljobs.filter(function (item) {
    if (item?.preferred_shift == ShiftType) return item;
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
    data: resultShiftType,
  });
};

export const filterJobType = (JobType) => async (dispatch, state) => {
  console.log("companyNamecompanyName", JobType);
  var resultJobType = [];
  // ? company filter
  resultJobType = state().BackupAlljobs.filter(function (item) {
    if (item?.job_type == JobType) return item;
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
    data: resultJobType,
  });
};

export const filterJobAll =
  (
    companyName,
    DepartmentName,
    IndustryFilter,
    CompanySize,
    ShiftType,
    JobType
  ) =>
  async (dispatch, state) => {
    // return;
    var result = [];
    var resultIndustry = [];
    var resultCompanySize = [];
    var resultDepartmentName = [];
    var resultJobType = [];
    var resultShiftType = [];

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
      } else if (item?.company?.industry_name == IndustryFilter) {
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

    resultCompanySize.filter(function (item) {
      if (DepartmentName?.length == 0 || DepartmentName == null) {
        resultDepartmentName.push(item);
      } else if (item?.department?.name == DepartmentName) {
        resultDepartmentName.push(item);
      }
    });

    resultDepartmentName.filter(function (item) {
      if (JobType?.length == 0 || JobType == null) {
        resultJobType.push(item);
      } else if (item?.job_type == JobType) {
        resultJobType.push(item);
      }
    });

    resultJobType.filter(function (item) {
      if (ShiftType?.length == 0 || ShiftType == null) {
        resultShiftType.push(item);
      } else if (item?.preferred_shift == ShiftType) {
        resultShiftType.push(item);
      }
    });

    const uniqueResults = Array.from(
      new Set(resultShiftType.map((a) => a.id))
    ).map((id) => {
      return resultShiftType.find((a) => a.id === id);
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
