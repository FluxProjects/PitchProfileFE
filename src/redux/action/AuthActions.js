import axios from "axios";
import { cloudURL, URL } from "../../utils/APIUtils";

import { toast } from "react-toastify";
import { lazySlidesOnLeft } from "react-slick/lib/utils/innerSliderUtils";

export const registerUser =
  (f_name, l_name, email, password, router, setModal, setIsDisabled) =>
  async (dispatch) => {
    var val = Math.floor(1000 + Math.random() * 9000);
    console.log(val);
    dispatch({
      type: "SetOTP",
      data: val,
    });

    var data = {
      r_data: {
        f_name,
        l_name,
        email,
        password,
        otp: val,
      },
    };

    var config = {
      method: "post",
      url: `${URL}/profile/register`,
      headers: {},
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log("datsss", response.data);
        if (response.data.successful) {
          setModal(true);
          setIsDisabled(false);
          toast.success("OTP has been sent to your email!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          dispatch({
            type: "RegisterUser",
            data: response.data.data,
          });
          // dispatch({
          //   type: "SetAuthToken",
          //   data: response.data.accessToken,
          // });
          // router.push("/");
        } else {
          setIsDisabled(false);
          toast.error(`Something went wrong! ${response.data.message}`, {
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

        toast.error(error, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

// verify_email
export const verifyCandidate =
  (setModal, router) => async (dispatch, state) => {
    console.log("is avcllefsr", state().userDetails);
    var data = JSON.stringify({
      data: {
        id: state().userDetails,
      },
    });

    var config = {
      method: "post",
      url: `${URL}/profile/verify_email`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    await axios(config)
      .then(function (response) {
        console.log("testsjhde", response.data);

        if (response.data.successful == true) {
          console.log(JSON.stringify(response.data));
          setModal(false);
          toast.success("Verified successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          dispatch({
            type: "RegisterUser",
            data: response.data.data,
          });
          dispatch({
            type: "SetAuthToken",
            data: response.data.accessToken,
          });
          router.push("/jobs-profile");
        } else {
          toast.error(response.data.message, {
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

export const getSingleUserData = (id) => async (dispatch) => {
  var config = {
    method: "get",
    url: `${URL}/profile/get_candidateprofile/${id}`,
    headers: {},
  };

  await axios(config)
    .then(function (response) {
      console.log("Ayoooo", response.data);
      if (response.data.successful) {
        dispatch({
          type: "setSingleUserData",
          data: response.data.data[0],
        });
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const getAllUserData = () => async (dispatch) => {
  console.log("tesing fall");
  var config = {
    method: "get",
    url: `${URL}/profile/get_all_candidates/`,
    headers: {},
  };

  await axios(config)
    .then(function (response) {
      console.log("AllUserDataAllUserDataAllUserData", response.data);
      if (response.data.successful) {
        dispatch({
          type: "setAllUserData",
          data: response.data.data,
        });
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const LogoutUser = (router) => async (dispatch) => {
  dispatch({
    type: "LogoutUser",
    data: {},
  });

  router.push("/login");
};

export const updateUser =
  (
    id,
    f_name,
    l_name,
    dob,
    gender,
    marital_status,
    passport_number,
    disability,
    disability_description,
    address,
    city_id,
    state_id,
    country_id,
    hometown_country_id,
    phone,
    email,
    authToken,
    setModal
  ) =>
  async (dispatch, state) => {
    var data = JSON.stringify({
      data: {
        id,
        f_name,
        l_name,
        dob,
        gender: parseInt(gender),
        marital_status: parseInt(marital_status),
        passport_number,
        disability,
        disability_description,
        address,
        city_id,
        state_id,
        country_id,
        hometown_country_id,
        phone,
        email,
      },
    });
    var config = {
      method: "post",
      url: `${URL}/profile/update_profile`,
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        console.log(response.data);
        if (response.data.successful) {
          console.log("data", response.data.data);
          toast.success("Update Success!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

          dispatch({
            type: "RegisterUser",
            data: response.data.data,
          });
          dispatch({
            type: "SetAuthToken",
            data: response.data.accessToken,
          });
          if (setModal) {
            setModal(false);
          }
        } else {
          toast.error(response.data.Message, {
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

export const updateUserProfileModal =
  (id, f_name, l_name, dob, gender, marital_status, setModal) =>
  async (dispatch, state) => {
    console.log(
      "update_profile_modalupdate_profile_modalupdate_profile_modalupdate_profile_modal",
      id,
      f_name,
      l_name,
      dob,
      gender,
      marital_status
    );

    var data = JSON.stringify({
      data: {
        id,
        f_name,
        l_name,
        dob,
        gender: parseInt(gender),
        marital_status: parseInt(marital_status),
      },
    });
    var config = {
      method: "post",
      url: `${URL}/profile/update_profile_modal`,
      headers: {
        Authorization: `Bearer ${state().authToken}`,
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        console.log(response.data);
        if (response.data.successful) {
          console.log("data", response.data.data);
          toast.success("Update Success!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

          dispatch({
            type: "RegisterUser",
            data: response.data.data,
          });
          dispatch({
            type: "SetAuthToken",
            data: response.data.accessToken,
          });
          if (setModal) {
            setModal(false);
          }
        } else {
          toast.error(response.data.Message, {
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

// Update is active
export const UpdateIsActive = (is_active) => async (dispatch, state) => {
  var data = JSON.stringify({
    data: {
      id: state().userDetails.id,
      is_active,
    },
  });

  var config = {
    method: "post",
    url: `${URL}/profile/update_candidateprofile_is_active`,
    headers: {
      Authorization: `Bearer ${state().authToken}`,
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      if (response.data.successful) {
        console.log("data", response.data.data);
        toast.success("Update Success!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        dispatch({
          type: "RegisterUser",
          data: response.data.data,
        });
        dispatch({
          type: "SetAuthToken",
          data: response.data.accessToken,
        });
      } else {
        toast.error(response.data.Message, {
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

export const UploadImage = (files) => async (dispatch, state) => {
  const formData = new FormData();
  formData.append("file", files[0]);
  formData.append("upload_preset", "pitchprofile");

  await axios.post(`${cloudURL}/image/upload`, formData).then(async (res) => {
    console.log("ressss", res.data);
    var data = JSON.stringify({
      data: {
        id: state().userDetails.id,
        pic: res.data.secure_url,
      },
    });

    var config = {
      method: "post",
      url: `${URL}/profile/update_profile_pic`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    await axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        if (response.data.successful) {
          console.log("data", response.data.data);
          toast.success("Update Success!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

          dispatch({
            type: "RegisterUser",
            data: response.data.data,
          });
          dispatch({
            type: "SetAuthToken",
            data: response.data.accessToken,
          });
        } else {
          toast.error(response.data.Message, {
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
  });
};

export const UploadCoverLetter = (files) => async (dispatch, state) => {
  const formData = new FormData();
  formData.append("file", files[0]);
  formData.append("upload_preset", "pitchprofile");

  await axios.post(`${cloudURL}/image/upload`, formData).then(async (res) => {
    console.log("ressss", res.data);
    var data = JSON.stringify({
      data: {
        id: state().userDetails.id,
        cover_letter_url: res.data.secure_url,
        cover_letter: res.data.original_filename,
      },
    });

    var config = {
      method: "post",
      url: `${URL}/profile/update_profile_cover_letter`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    await axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        if (response.data.successful) {
          console.log("data", response.data.data);
          toast.success("Update Success!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

          dispatch({
            type: "RegisterUser",
            data: response.data.data,
          });
          dispatch({
            type: "setSingleUserData",
            data: response.data.data,
          });

          dispatch({
            type: "SetAuthToken",
            data: response.data.accessToken,
          });
        } else {
          toast.error(response.data.Message, {
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
  });
};

export const UploadProfileVid = (files) => async (dispatch, state) => {
  const formData = new FormData();
  formData.append("file", files[0]);
  formData.append("upload_preset", "pitchprofile");

  await axios.post(`${cloudURL}/video/upload`, formData).then(async (res) => {
    console.log("ressss", res.data);
    var data = JSON.stringify({
      data: {
        id: state().userDetails.id,
        video: res.data.secure_url,
      },
    });

    var config = {
      method: "post",
      url: `${URL}/profile/update_profile_vid`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    await axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        if (response.data.successful) {
          console.log("data", response.data.data);
          toast.success(
            "Uploaded susscessfully. Your uploaded video is being reviewed.",
            {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            }
          );
          // var myVal = state().pedningActions;
          // var arr = myVal.push(
          //   "You will receive an email shortly once it is approved. Please note your profile will be LIVE once video is reviewed and approved"
          // );
          // dispatch({
          //   type: "setPendingAction",
          //   data: arr,
          // });
          // come here
          dispatch({
            type: "RegisterUser",
            data: response.data.data,
          });
          dispatch({
            type: "SetAuthToken",
            data: response.data.accessToken,
          });
        } else {
          toast.error(response.data.Message, {
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
  });
};

export const LoginUser = (email, password, router) => async (dispatch) => {
  if (email == "admin@pitchprofile.com" && password == "123456") {
    toast.success("Login Success!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    dispatch({
      type: "RegisterUser",
      data: { name: "admin" },
    });
    dispatch({
      type: "SetAuthToken",
      data: "admin",
    });
    router.push("/admin");
    return;
  } else {
    var data = JSON.stringify({
      l_data: {
        email,
        password,
      },
    });

    var config = {
      method: "post",
      url: `${URL}/profile/login`,
      headers: {
        accessToken:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NDYxNzU4NTF9.RnFe9tJ93rcNfqQ9pQq7YfUoR2ZrebIXjZp4dipzwbQ",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NDYxNzU4NTF9.RnFe9tJ93rcNfqQ9pQq7YfUoR2ZrebIXjZp4dipzwbQ",
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        if (response.data.successful) {
          console.log("data", response.data.data);
          toast.success("Login Success!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          dispatch({
            type: "RegisterUser",
            data: response.data.data,
          });
          dispatch({
            type: "SetAuthToken",
            data: response.data.accessToken,
          });
          router.push("/jobs-profile");
        } else {
          toast.error(response.data.msg, {
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
        toast.error(error, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  }
};

export const getAuthToken = (authToken, router) => async (dispatch, state) => {
  console.log("testing auth wor", state().authToken);
  var config = {
    method: "get",
    url: `${URL}/profile/getauth`,
    headers: {
      Authorization: `Bearer ${state().authToken}`,
    },
  };

  axios(config)
    .then(function (response) {
      console.log("workd", response);
      if (response.data.successful) {
        dispatch({
          type: "RegisterUser",
          data: response.data.data,
        });
      } else {
        router.push("/login");
        toast.error("Something went wrong! Please login.", {
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
      router.push("/login");
      toast.error(`Something went wrong! Please login. ${error}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log(error);
    });
};

export const UpdateUserPassword =
  (id, password, authToken, router) => async (dispatch, state) => {
    var data = JSON.stringify({
      pr_data: {
        password,
        id,
        name: state().userDetails.f_name,
      },
    });

    var config = {
      method: "post",
      url: `${URL}/profile/passwordreset`,
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        if (response.data.status) {
          toast.success("Password Updated Successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          toast.error("Something went wrong!", {
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
