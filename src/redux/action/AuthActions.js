import axios from "axios";
import { cloudURL, URL } from "../../utils/APIUtils";
import { toast } from "react-toastify";
import { lazySlidesOnLeft } from "react-slick/lib/utils/innerSliderUtils";

export const registerUser =
  (f_name, l_name, email, password, router, setModal, setIsDisabled) =>
  async (dispatch) => {
    var val = Math.floor(1000 + Math.random() * 9000);
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
        if (response.data.successful) {
          setModal(true);
          setIsDisabled(false);
          dispatch({
            type: "RegisterUser",
            data: response.data.data,
          });
        } else {
          setIsDisabled(false);
          toast.error(`Something went wrong! ${response.data.message}`, {
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
        toast.error(error, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

export const verifyCandidate =
  (setModal, router) => async (dispatch, state) => {
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
        if (response.data.successful == true) {
          setModal(false);
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

export const forgetPassFuncCandidate =
  (email, setModal, router) => async (dispatch, state) => {
    var data = JSON.stringify({
      email,
    });
    var config = {
      method: "post",
      url: `${URL}/profile/forgetPassword`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    await axios(config)
      .then(function (response) {
        if (response.data.successful == true) {
          setModal(false);
          toast.success("Email Sent to your function!", {
            position: "bottom-center",
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

export const getSingleUserData = (id) => async (dispatch) => {
  var config = {
    method: "get",
    url: `${URL}/profile/get_candidateprofile/${id}`,
    headers: {},
  };

  await axios(config)
    .then(function (response) {
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
  var config = {
    method: "get",
    url: `${URL}/profile/get_all_candidates/`,
    headers: {},
  };

  await axios(config)
    .then(function (response) {
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
        disability: "",
        disability_description: "",
        address,
        city_id,
        state_id,
        country_id,
        hometown_country_id: "",
        phone: `${phone}`,
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
        if (response.data.successful) {
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

export const updateUserProfileModal =
  (id, f_name, l_name, dob, gender, marital_status, setModal) =>
  async (dispatch, state) => {
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
        if (response.data.successful) {
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
      if (response.data.successful) {
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

export const UploadImage = (files) => async (dispatch, state) => {
  const formData = new FormData();
  formData.append("file", files[0]);
  formData.append("upload_preset", "pitchprofile");

  await axios.post(`${cloudURL}/image/upload`, formData).then(async (res) => {
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
        if (response.data.successful) {
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

export const UploadCoverLetter = (files) => async (dispatch, state) => {
  const formData = new FormData();
  formData.append("file", files[0]);
  formData.append("upload_preset", "pitchprofile");

  await axios.post(`${cloudURL}/image/upload`, formData).then(async (res) => {
    var data = JSON.stringify({
      data: {
        id: state().userDetails.id,
        cover_letter_url: res.data.url,
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
        if (response.data.successful) {
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

export const UploadProfileVid = (files) => async (dispatch, state) => {
  const formData = new FormData();
  formData.append("file", files[0]);
  formData.append("upload_preset", "pitchprofile");

  await axios.post(`${cloudURL}/video/upload`, formData).then(async (res) => {
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
        if (response.data.successful) {
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

export const LoginUser = (email, password, router) => async (dispatch) => {
  if (email == "admin@pitchprofile.com" && password == "123456") {
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
        if (response.data.successful) {
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
        toast.error(error, {
          position: "bottom-center",
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
      if (response.data.successful) {
        dispatch({
          type: "RegisterUser",
          data: response.data.data,
        });
      } else {
        router.push("/login");
        toast.error("Something went wrong! Please login.", {
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
      router.push("/login");
      toast.error(`Something went wrong! Please login. ${error}`, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    });
};

export const UpdateUserPassword =
  (id, password, authToken, router) => async (dispatch, state) => {
    var data = JSON.stringify({
      pr_data: {
        password,
        id,
        name: state().userDetails.f_name,
        email: state().userDetails.email,
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
        if (response.data.successful) {
          toast.success("Password updated successfully!", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          toast.error(`${response.data?.message}!`, {
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
