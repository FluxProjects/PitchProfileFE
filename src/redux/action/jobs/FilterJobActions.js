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

  dispatch({
    type: "FilterAllJobs",
    data: resultCompanySize,
  });
};

export const filterJobName = (jobName) => async (dispatch, state) => {
  console.log("jobNamejobName", jobName);
  var resultJobName = [];
  // ? company filter
  resultJobName = state().BackupAlljobs.filter(function (item) {
    if (item?.job_title == jobName) return item;
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
    type: "FilterAllJobs",
    data: resultJobName,
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
      type: "FilterAllJobs",
      data: resultEmploymentType,
    });
  };

export const filterLocationFilter =
  (LocationFilter) => async (dispatch, state) => {
    console.log("LocationFilter", LocationFilter);
    var resultLocationFilter = [];
    // ? company filter
    console.log(
      "this is my filter testthis is my filter test",
      resultLocationFilter
    );
    state().BackupAlljobs.filter(function (item) {
      if (item?.city?.name == LocationFilter) resultLocationFilter.push(item);
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
      type: "FilterAllJobs",
      data: resultLocationFilter,
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
    type: "FilterAllJobs",
    data: resultJobType,
  });
};

export const filterSkillType = (SkillType) => async (dispatch, state) => {
  console.log("skilltype", SkillType);
  var resultSkillType = [];

  resultSkillType = state().BackupAlljobs.filter(function (item) {
    if (item?.skill_id1 == SkillType) return item;
    if (item?.skill_id2 == SkillType) return item;
    if (item?.skill_id3 == SkillType) return item;
    if (item?.skill_id4 == SkillType) return item;
    if (item?.skill_id5 == SkillType) return item;
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
    type: "FilterAllJobs",
    data: resultSkillType,
  });
};

export const filterJobAll =
  (
    companyName,
    DepartmentName,
    IndustryFilter,
    CompanySize,
    ShiftType,
    JobType,
    LocationFilter,
    EmploymentType,
    SeniorityLevel,
    SalaryRange,
    jobName,
    SkillType
  ) =>
  async (dispatch, state) => {
    // return;
    var result = [];
    var resultIndustry = [];
    var resultCompanySize = [];
    var resultDepartmentName = [];
    var resultJobType = [];
    var resultShiftType = [];
    var resultLocationFilter = [];
    var resultEmploymentType = [];
    var resultSeniorityLevel = [];
    var resultSalaryRange = [];
    var resultJobName = [];
    var resultSkillType = [];

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

    // ? location filter
    resultShiftType.filter(function (item) {
      if (LocationFilter?.length == 0 || LocationFilter == null) {
        resultLocationFilter.push(item);
      } else if (item?.city?.name == LocationFilter) {
        resultLocationFilter.push(item);
      }
    });

    console.log("this is my filter test ", resultLocationFilter);
    resultLocationFilter.filter(function (item) {
      if (EmploymentType?.length == 0 || EmploymentType == null) {
        resultEmploymentType.push(item);
      } else if (item?.employment_type == EmploymentType) {
        resultEmploymentType.push(item);
      }
    });

    resultEmploymentType.filter(function (item) {
      if (SeniorityLevel?.length == 0 || SeniorityLevel == null) {
        resultSeniorityLevel.push(item);
      } else if (item?.seniority_level == SeniorityLevel) {
        resultSeniorityLevel.push(item);
      }
    });

    //? Salary range
    resultSeniorityLevel.filter(function (item) {
      if (SalaryRange?.length == 0 || SalaryRange == null) {
        resultSalaryRange.push(item);
      } else if (item?.salary_range == SalaryRange) {
        resultSalaryRange.push(item);
      }
    });

    resultSalaryRange.filter(function (item) {
      if (jobName?.length == 0 || jobName == null) {
        resultJobName.push(item);
      } else if (item?.job_title == jobName) {
        resultJobName.push(item);
      }
    });

    resultJobName.filter(function (item) {
      if (SkillType?.length == 0 || SkillType == null) {
        resultSkillType.push(item);
      } else {
        if (item?.skill_id1 == SkillType) resultSkillType.push(item);
        if (item?.skill_id2 == SkillType) resultSkillType.push(item);
        if (item?.skill_id3 == SkillType) resultSkillType.push(item);
        if (item?.skill_id4 == SkillType) resultSkillType.push(item);
        if (item?.skill_id5 == SkillType) resultSkillType.push(item);
      }
    });

    const uniqueResults = Array.from(
      new Set(resultSkillType.map((a) => a.id))
    ).map((id) => {
      return resultSkillType.find((a) => a.id === id);
    });
    console.log("tgihjsycdgsb", resultSkillType, SkillType);

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

export const filterJobsbyId = (JobID, router) => async (dispatch, state) => {
  console.log("JobID", JobID);
  var resultJobID = [];

  resultJobID = state().JobApplicationsBackup.filter(function (item) {
    if (item?.job_id == JobID) return item;
  });

  console.log("resultJobIDresultJobID", resultJobID);

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
    type: "GetJobApplications",
    data: resultJobID,
  });
};
