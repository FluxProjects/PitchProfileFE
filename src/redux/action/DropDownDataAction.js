import axios from "axios";
import { URL } from "../../utils/APIUtils";

import { toast } from "react-toastify";

export const GetLanguages = () => async (dispatch) => {
  var config = {
    method: "get",
    url: `${URL}/language/getlanguages`,
    headers: {},
  };

  axios(config)
    .then(function (response) {
      console.log("languages get", response.data);
      if (response.data.successful) {
        dispatch({
          type: "setLangs",
          data: response.data.data,
        });
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

export const GetCountries = () => async (dispatch) => {
  var config = {
    method: "get",
    url: `${URL}/locations/countries`,
    headers: {},
  };

  axios(config)
    .then(function (response) {
      if (response.data.successful) {
        dispatch({
          type: "setCountries",
          data: response.data.data,
        });
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

export const GetStates = (country) => async (dispatch) => {
  var config = {
    method: "get",
    url: `${URL}/locations/states/${country}`,
    headers: {},
  };

  axios(config)
    .then(function (response) {
      // console.log("testing the ", response.data);

      if (response.data.successful) {
        dispatch({
          type: "setStates",
          data: response.data.states,
        });
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

export const GetCities = (id) => async (dispatch) => {
  // console.log("teteteecvr", id);

  var config = {
    method: "get",
    url: `${URL}/locations/cities/${id}`,
    headers: {},
  };

  axios(config)
    .then(function (response) {
      // console.log("testing the ", response.data);
      if (response.data.successful) {
        dispatch({
          type: "setCities",
          data: response.data.cities_data,
        });
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

export const GetDepartments = (id) => async (dispatch) => {
  var config = {
    method: "get",
    url: `${URL}/profile/get_departments`,
    headers: {},
  };

  axios(config)
    .then(function (response) {
      // console.log("res data", response.data);
      if (response.data.successful) {
        dispatch({
          type: "GetDepartments",
          data: response.data.data,
        });
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

export const GetIndustries = (id) => async (dispatch) => {
  var config = {
    method: "get",
    url: `${URL}/profile/get_industries`,
    headers: {},
  };

  axios(config)
    .then(function (response) {
      // console.log(JSON.stringify(response.data));
      if (response.data.successful) {
        dispatch({
          type: "GetIndustries",
          data: response.data.data,
        });
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

export const GetSkills = (id) => async (dispatch) => {
  console.log("api callsed get skilled");
  var config = {
    method: "get",
    url: `${URL}/profile/get_skills`,
    headers: {},
  };

  axios(config)
    .then(function (response) {
      // console.log(JSON.stringify(response.data));
      if (response.data.successful) {
        dispatch({
          type: "GetSkills",
          data: response.data.data,
        });
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

export const GetEducationLevels = (id) => async (dispatch) => {
  var config = {
    method: "get",
    url: `${URL}/profile/get_education_levels`,
    headers: {},
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      if (response.data.successful) {
        dispatch({
          type: "GetEducationLevels",
          data: response.data.data,
        });
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
