import axios from "axios";
import { cloudURL, URL } from "../../../utils/APIUtils";

import { toast } from "react-toastify";
import { formatDate } from "../../../utils/functions";

export const AddJobPost =
  (
    job_title,
    job_type,
    employment_type,
    min_salary,
    max_salary,
    city_id,
    state_id,
    country_id,
    role,
    key_responsibilities,
    looking_for,
    the_perks,
    closing_date,
    expirience,
    department_id,
    preferred_shift,
    seniority_level,
    salary_range,
    files,
    skill_id1,
    skill_id2,
    skill_id3,
    skill_id4,
    skill_id5,
    router
  ) =>
  async (dispatch, state) => {
    var data = JSON.stringify({
      data: {
        company_id: state().userDetails.id,
        job_title,
        job_type,
        employment_type,
        min_salary,
        max_salary,
        city_id,
        state_id,
        country_id,
        role,
        key_responsibilities,
        looking_for,
        the_perks,
        closing_date,
        expirience: expirience,
        department_id: department_id,
        preferred_shift,
        seniority_level,
        salary_range,
        video: files,
        skill_id1,
        skill_id2,
        skill_id3,
        skill_id4,
        skill_id5,
      },
    });
    var config = {
      method: "post",
      url: `${URL}/jobs/add_job`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        if (response.data.successful) {
          toast.success("Job added Successfully!", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          dispatch({
            type: "SavePreviewPost",
            data: response.data.data,
          });
          router.push("/company-manage-job");
        } else {
          toast.success(response.data.message, {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

export const SaveJobVideo = (files, setLoading) => async (dispatch, state) => {
  const formData = new FormData();
  formData.append("file", files[0]);
  formData.append("upload_preset", "pitchprofile");

  await axios.post(`${cloudURL}/video/upload`, formData).then(async (res) => {
    if (res.data.secure_url) {
      // toast.success(
      //   "Uploaded successfully. Your uploaded video is being reviewed by admin. Please note your profile will be live once approved. You will shortly recieve a confirmation",
      //   {
      //     position: "bottom-center",
      //     autoClose: 10000,
      //     hideProgressBar: false,
      //     closeOnClick: true,
      //     pauseOnHover: true,
      //     draggable: true,
      //     progress: undefined,
      //   }
      // );

      dispatch({
        type: "SaveJobVideo",
        data: res.data.secure_url,
      });
      setLoading(false);
    }
  });
};

export const UpdateJobVideo = (files) => async (dispatch, state) => {
  dispatch({
    type: "SaveJobVideo",
    data: files,
  });
};

export const UpdateJobPost =
  (
    id,
    job_title,
    job_type,
    employment_type,
    min_salary,
    max_salary,
    city_id,
    state_id,
    country_id,
    role,
    key_responsibilities,
    looking_for,
    the_perks,
    closing_date,
    expirience,
    department_id,
    preferred_shift,
    seniority_level,
    salary_range,
    video,
    router
  ) =>
  async (dispatch, state) => {
    // const formData = new FormData();
    // formData.append("file", files[0]);
    // formData.append("upload_preset", "pitchprofile");
    // await axios.post(`${cloudURL}/video/upload`, formData).then(async (res) => {
    var data = JSON.stringify({
      data: {
        id: id,
        company_id: state().userDetails.id,
        job_title,
        job_type,
        employment_type,
        min_salary,
        max_salary,
        city_id,
        state_id,
        country_id,
        role,
        key_responsibilities,
        looking_for,
        the_perks,
        closing_date,
        expirience: expirience,
        department_id: department_id,
        preferred_shift,
        seniority_level,
        salary_range,
        video,
      },
    });
    var config = {
      method: "post",
      url: `${URL}/jobs/update_job`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        if (response.data.successful) {
          toast.success("Job updated Successfully!", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          dispatch({
            type: "SavePreviewPost",
            data: response.data.data,
          });
          router.push("/company-manage-job");
        } else {
          toast.success(response.data.message, {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          router.push("/company-manage-job");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    // });
  };

export const UpdateJobWithVideoPost =
  (
    id,
    job_title,
    job_type,
    employment_type,
    min_salary,
    max_salary,
    city_id,
    state_id,
    country_id,
    role,
    key_responsibilities,
    looking_for,
    the_perks,
    closing_date,
    expirience,
    department_id,
    preferred_shift,
    seniority_level,
    salary_range,
    files
  ) =>
  async (dispatch, state) => {
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "pitchprofile");

    await axios.post(`${cloudURL}/video/upload`, formData).then(async (res) => {
      var data = JSON.stringify({
        data: {
          id: id,
          company_id: state().userDetails.id,
          job_title,
          job_type,
          employment_type,
          min_salary,
          max_salary,
          city_id,
          state_id,
          country_id,
          role,
          key_responsibilities,
          looking_for,
          the_perks,
          closing_date,
          expirience: expirience,
          department_id: department_id,
          preferred_shift,
          seniority_level,
          salary_range,
          video: res.data.secure_url,
        },
      });
      var config = {
        method: "post",
        url: `${URL}/jobs/update_job`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };
      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          if (response.data.successful) {
            toast.success("Job added Successfully!", {
              position: "bottom-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            dispatch({
              type: "SavePreviewPost",
              data: response.data.data,
            });
          } else {
            toast.success(response.data.message, {
              position: "bottom-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    });
  };

export const GetMyJobPosts = () => async (dispatch, state) => {
  var config = {
    method: "get",
    url: `${URL}/jobs/get_all_my_listed_jobs/${state().userDetails.id}`,
    headers: {},
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));

      var resultClosingDate = [];

      resultClosingDate = response.data.data.sort(function (a, b) {
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(a.closing_date) - new Date(b.closing_date);
      });

      dispatch({
        type: "MyPostedJobs",
        data: resultClosingDate,
      });
      dispatch({
        type: "MyPostedJobsBackup",
        data: resultClosingDate,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const filterClosingDate = () => async (dispatch, state) => {
  var resultClosingDate = [];

  resultClosingDate = state().BackupAlljobs.sort(function (a, b) {
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return new Date(b.closing_date) - new Date(a.closing_date);
  });

  toast.success("Updated Successfully!", {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
  dispatch({
    type: "MyPostedJobsBackup",
    data: resultClosingDate,
  });
};

export const resetFilterClosingDate = () => async (dispatch, state) => {
  dispatch({
    type: "MyPostedJobsBackup",
    data: state().MyPostedJobsBackup,
  });
};

export const GetAllJobPosts = () => async (dispatch, state) => {
  var config = {
    method: "get",
    url: `${URL}/jobs/get_all_jobs`,
    headers: {},
  };

  axios(config)
    .then(function (response) {
      console.log("res.dattatata", response.data);
      var companyNames = [];
      var jobNames = [];
      var cityNames = [];
      response.data.data.map((item, index) => {
        companyNames.push(item?.company?.company_name);
        jobNames.push(item?.job_title);
        cityNames.push(item?.city?.name);
        // DesignationDrop.push(item?.company?.role);
      });
      let uniquejobNames = [...new Set(jobNames)];
      let unique = [...new Set(companyNames)];
      let uniqueCityNames = [...new Set(cityNames)];
      console.log(uniqueCityNames, "uniqueCityNamesuniqueCityNames");

      dispatch({
        type: "AllCompanyNames",
        data: unique,
      });
      dispatch({
        type: "AllJobNames",
        data: uniquejobNames,
      });
      dispatch({
        type: "AllCityJobNames",
        data: uniqueCityNames,
      });
      dispatch({
        type: "Alljobs",
        data: response.data.data,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const GetSingleJob = (company_id, id) => async (dispatch, state) => {
  var config = {
    method: "get",
    url: `${URL}/jobs/get_single_job/${company_id}/${id}`,
    headers: {},
  };

  axios(config)
    .then(function (response) {
      console.log("mydatatat", response.data.data[0].closing_date);
      var newVal = response.data.data[0];
      newVal.closingDate = formatDate(response.data.data[0].closing_date);
      dispatch({
        type: "PreviewPost",
        data: newVal,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const DeleteSingle = (id, index) => async (dispatch, state) => {
  var config = {
    method: "get",
    url: `${URL}/jobs/delete_job/${id}`,
    headers: {},
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      var resData = state().MyPostedJobs;
      resData.splice(index, 1);
      console.log("index", resData);

      dispatch({
        type: "MyPostedJobs",
        data: resData,
      });
      // dispatch({
      //   type: "PreviewPost",
      //   data: response.data.data[0],
      // });
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const GetFeaturedJobs = (company_id) => async (dispatch, state) => {
  console.log("FeaturedJobsFeaturedJobs", company_id);
  var config = {
    method: "get",
    url: `${URL}/jobs/get_my_featured_listed_jobs/${company_id}`,
    headers: {},
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      dispatch({
        type: "GetFeaturedJobs",
        data: response.data.data,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
};
