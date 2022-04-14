import axios from "axios";
import { cloudURL, URL } from "../../../utils/APIUtils";

import { toast } from "react-toastify";

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
    files
  ) =>
  async (dispatch, state) => {
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "pitchprofile");

    await axios.post(`${cloudURL}/video/upload`, formData).then(async (res) => {
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
          department_id,
          preferred_shift,
          video: res.data.secure_url,
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
          toast.success("Job added Successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          dispatch({
            type: "PreviewPost",
            data: response.data.data,
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    });
  };
