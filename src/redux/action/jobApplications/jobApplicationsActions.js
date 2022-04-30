import axios from "axios";
import { cloudURL, URL } from "../../../utils/APIUtils";

import { toast } from "react-toastify";

export const ApplyJobPost =
  (job_id, company_id, status, description) => async (dispatch, state) => {
    var data = JSON.stringify({
      data: {
        candidate_id: state().userDetails.id,
        job_id,
        company_id,
        status,
        description,
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
        console.log(JSON.stringify(response.data));
        if (response.data.successful) {
          toast.success("Job added Successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
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
      console.log("GetJobApplications", response.data);

      if (response.data.successful) {
        dispatch({
          type: "GetJobApplications",
          data: response.data.data,
        });
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};
