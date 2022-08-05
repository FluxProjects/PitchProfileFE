import axios from "axios";
import { cloudURL, URL } from "../../../utils/APIUtils";

import { toast } from "react-toastify";

export const ApplyJobPost =
  (
    job_id,
    company_id,
    status,
    description,
    jobTitle,
    company_name,
    company_email,
    router,
    useUploaded
  ) =>
  async (dispatch, state) => {
    console.log("testing the ", job_id);
    var data = JSON.stringify({
      data: {
        candidate_id: state().userDetails.id,
        email: state().userDetails.email,
        firstname: state().userDetails.f_name,
        jobTitle,
        company_name,
        job_id,
        company_id,
        status,
        description,
        company_email,
        attachment_url: useUploaded
          ? state().userDetails.cover_letter
          : state()?.CoverLetterForApplying.secure_url,
        attachment_name: useUploaded
          ? state().userDetails.cover_letter_url
          : state()?.CoverLetterForApplying.name,
      },
    });

    var config = {
      method: "post",
      url: `${URL}/apply_jobs/add_job`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log("better stun", response.data);
        if (response.data.status) {
          toast.success("Job added Successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          router.push("/jobs-applied-job");

          // dispatch({
          //   type: "SavePreviewPost",
          //   data: response.data.data,
          // });
        } else {
          toast.success(response.data.message, {
            position: "top-right",
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

export const GetJobApplications = (id) => async (dispatch, state) => {
  var config = {
    method: "get",
    url: `${URL}/apply_jobs/get_all_applications/${state().userDetails.id}`,
    headers: {},
  };

  axios(config)
    .then(function (response) {
      if (response.data.successful) {
        dispatch({
          type: "GetJobApplications",
          data: response.data.data,
        });
        dispatch({
          type: "GetBackupJobApplications",
          data: response.data.data,
        });
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const SortByFreshnessApplicationJobs = () => async (dispatch, state) => {
  var resultClosingDate = [];

  resultClosingDate = state().JobApplicationsBackup.sort(function (a, b) {
    return new Date(b.closing_date) - new Date(a.closing_date);
  });

  // toast.success("Updated Successfully!", {
  //   position: "top-right",
  //   autoClose: 5000,
  //   hideProgressBar: false,
  //   closeOnClick: true,
  //   pauseOnHover: true,
  //   draggable: true,
  //   progress: undefined,
  // });

  dispatch({
    type: "GetJobApplications",
    data: resultClosingDate,
  });
};

export const resetSortByFreshnessApplicationJobs =
  () => async (dispatch, state) => {
    dispatch({
      type: "GetJobApplications",
      data: state().JobApplicationsBackup,
    });
  };

export const GetJobCandidateApplications = (id) => async (dispatch, state) => {
  var config = {
    method: "get",
    url: `${URL}/apply_jobs/get_all_candidate_applications/${
      state().userDetails.id
    }`,
    headers: {},
  };

  axios(config)
    .then(function (response) {
      console.log("responsdesugdhv", response.data);
      if (response.data.successful) {
        dispatch({
          type: "GetJobApplications",
          data: response.data.data,
        });
        dispatch({
          type: "GetBackupJobApplications",
          data: response.data.data,
        });
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const UploadCoverLetterJob = (files) => async (dispatch, state) => {
  const formData = new FormData();
  formData.append("file", files[0]);
  formData.append("upload_preset", "pitchprofile");

  await axios.post(`${cloudURL}/image/upload`, formData).then(async (res) => {
    const val = res.data;
    val.name = files[0].name;

    dispatch({
      type: "CoverLetterForApplying",
      data: val,
    });
  });
};

export const ResetCoverLetterJob = () => async (dispatch) => {
  dispatch({
    type: "CoverLetterForApplying",
    data: "",
  });
};
