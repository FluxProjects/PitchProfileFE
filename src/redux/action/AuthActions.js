import axios from "axios";
import { URL } from "../../utils/APIUtils";

import { toast } from "react-toastify";
import { lazySlidesOnLeft } from "react-slick/lib/utils/innerSliderUtils";

export const registerUser =
  (f_name, l_name, email, password, router) => async (dispatch) => {
    var data = {
      r_data: {
        f_name,
        l_name,
        email,
        password,
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

export const LogoutUser = (router) => async (dispatch) => {
  dispatch({
    type: "RegisterUser",
    data: [],
  });
  dispatch({
    type: "SetAuthToken",
    data: "",
  });
  router.push("/jobs-profile");
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
    router
  ) =>
  async (dispatch, state) => {
    var data = JSON.stringify({
      data: {
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
        console.log(JSON.stringify(response.data));
        if (response.data.Successful) {
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

export const LoginUser = (email, password, router) => async (dispatch) => {
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
};

export const getAuthToken = (authToken, router) => async (dispatch, state) => {
  console.log("testing auth wor", authToken);
  var config = {
    method: "get",
    url: `${URL}/profile/getauth`,
    headers: {
      Authorization: `Bearer ${authToken}`,
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