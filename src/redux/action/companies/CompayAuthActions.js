import axios from "axios";
import { cloudURL, URL } from "../../../utils/APIUtils";

import { toast } from "react-toastify";

export const registerCompany =
  (company_name, email, password, router) => async (dispatch) => {
    var data = {
      r_data: {
        company_name,
        email,
        password,
      },
    };

    var config = {
      method: "post",
      url: `${URL}/company_profile/register`,
      headers: {},
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log("datsss", response.data.successful);
        if (response.data.successful) {
          toast.success("Registered Successfully!", {
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
            data: response.data.data[0],
          });
          dispatch({
            type: "SetAuthToken",
            data: response.data.accessToken,
          });
          router.push("/");
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

export const LogoutUser = (router) => async (dispatch) => {
  dispatch({
    type: "LogoutUser",
    data: {},
  });

  router.push("/login");
};

export const UploadCompanyProfileImage = (files) => async (dispatch, state) => {
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
      url: `${URL}/company_profile/update_profile_pic`,
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

export const updateCompany =
  (
    company_name,
    tagline,
    description,
    company_type,
    company_size,
    industry,
    website,
    address,
    phone,
    email,
    facebook,
    twitter,
    google,
    linkedin,
    city_id,
    state_id,
    country_id,
    agreement,
    authToken,
    setModal
  ) =>
  async (dispatch, state) => {
    var data = JSON.stringify({
      data: {
        id: state().userDetails.id,
        company_name,
        tagline,
        agreement,
        description,
        company_type,
        company_size,
        industry,
        website,
        phone,
        email,
        address,
        city_id,
        state_id,
        country_id,
        facebook,
        twitter,
        google,
        linkedin,
      },
    });
    var config = {
      method: "post",
      url: `${URL}/company_profile/update_profile`,
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

// // Update is active
// export const UpdateIsActive = (is_active) => async (dispatch, state) => {
//   var data = JSON.stringify({
//     data: {
//       id: state().userDetails.id,
//       is_active,
//     },
//   });

//   var config = {
//     method: "post",
//     url: `${URL}/profile/update_candidateprofile_is_active`,
//     headers: {
//       Authorization: `Bearer ${state().authToken}`,
//       "Content-Type": "application/json",
//     },
//     data: data,
//   };

//   axios(config)
//     .then(function (response) {
//       console.log(JSON.stringify(response.data));
//       if (response.data.successful) {
//         console.log("data", response.data.data);
//         toast.success("Update Success!", {
//           position: "top-right",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//         });

//         dispatch({
//           type: "RegisterUser",
//           data: response.data.data,
//         });
//         dispatch({
//           type: "SetAuthToken",
//           data: response.data.accessToken,
//         });
//       } else {
//         toast.error(response.data.Message, {
//           position: "top-right",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//         });
//       }
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// };

// export const UploadImage = (files) => async (dispatch, state) => {
//   const formData = new FormData();
//   formData.append("file", files[0]);
//   formData.append("upload_preset", "pitchprofile");

//   await axios.post(`${cloudURL}/image/upload`, formData).then(async (res) => {
//     console.log("ressss", res.data);
//     var data = JSON.stringify({
//       data: {
//         id: state().userDetails.id,
//         pic: res.data.secure_url,
//       },
//     });

//     var config = {
//       method: "post",
//       url: `${URL}/profile/update_profile_pic`,
//       headers: {
//         "Content-Type": "application/json",
//       },
//       data: data,
//     };

//     await axios(config)
//       .then(function (response) {
//         console.log(JSON.stringify(response.data));
//         if (response.data.successful) {
//           console.log("data", response.data.data);
//           toast.success("Update Success!", {
//             position: "top-right",
//             autoClose: 5000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//           });

//           dispatch({
//             type: "RegisterUser",
//             data: response.data.data,
//           });
//           dispatch({
//             type: "SetAuthToken",
//             data: response.data.accessToken,
//           });
//         } else {
//           toast.error(response.data.Message, {
//             position: "top-right",
//             autoClose: 5000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//           });
//         }
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   });
// };

// export const UploadCoverLetter = (files) => async (dispatch, state) => {
//   const formData = new FormData();
//   formData.append("file", files[0]);
//   formData.append("upload_preset", "pitchprofile");

//   await axios.post(`${cloudURL}/image/upload`, formData).then(async (res) => {
//     console.log("ressss", res.data);
//     var data = JSON.stringify({
//       data: {
//         id: state().userDetails.id,
//         cover_letter_url: res.data.secure_url,
//         cover_letter: res.data.original_filename,
//       },
//     });

//     var config = {
//       method: "post",
//       url: `${URL}/profile/update_profile_cover_letter`,
//       headers: {
//         "Content-Type": "application/json",
//       },
//       data: data,
//     };

//     await axios(config)
//       .then(function (response) {
//         console.log(JSON.stringify(response.data));
//         if (response.data.successful) {
//           console.log("data", response.data.data);
//           toast.success("Update Success!", {
//             position: "top-right",
//             autoClose: 5000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//           });

//           dispatch({
//             type: "RegisterUser",
//             data: response.data.data,
//           });
//           dispatch({
//             type: "SetAuthToken",
//             data: response.data.accessToken,
//           });
//         } else {
//           toast.error(response.data.Message, {
//             position: "top-right",
//             autoClose: 5000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//           });
//         }
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   });
// };

// export const UploadProfileVid = (files) => async (dispatch, state) => {
//   const formData = new FormData();
//   formData.append("file", files[0]);
//   formData.append("upload_preset", "pitchprofile");

//   await axios.post(`${cloudURL}/video/upload`, formData).then(async (res) => {
//     console.log("ressss", res.data);
//     var data = JSON.stringify({
//       data: {
//         id: state().userDetails.id,
//         video: res.data.secure_url,
//       },
//     });

//     var config = {
//       method: "post",
//       url: `${URL}/profile/update_profile_vid`,
//       headers: {
//         "Content-Type": "application/json",
//       },
//       data: data,
//     };

//     await axios(config)
//       .then(function (response) {
//         console.log(JSON.stringify(response.data));
//         if (response.data.successful) {
//           console.log("data", response.data.data);
//           toast.success("Update Success!", {
//             position: "top-right",
//             autoClose: 5000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//           });

//           dispatch({
//             type: "RegisterUser",
//             data: response.data.data,
//           });
//           dispatch({
//             type: "SetAuthToken",
//             data: response.data.accessToken,
//           });
//         } else {
//           toast.error(response.data.Message, {
//             position: "top-right",
//             autoClose: 5000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//           });
//         }
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   });
// };

export const LoginCompany = (email, password, router) => async (dispatch) => {
  var data = JSON.stringify({
    l_data: {
      email,
      password,
    },
  });

  var config = {
    method: "post",
    url: `${URL}/company_profile/login`,
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
        router.push("/company-profile");
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
};