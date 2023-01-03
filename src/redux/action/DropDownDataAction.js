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
      if (response.data.successful) {
        dispatch({
          type: "setLangs",
          data: response.data.data,
        });
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

export const GetStates =
  (country, setStateName, CallGetCities, isFirstFecth, idCity) =>
  async (dispatch, state) => {
    var config = {
      method: "get",
      url: `${URL}/locations/states/${country}`,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        if (response.data.successful) {
          if (!isFirstFecth) {
            // setStateName(-1);
          }
          const sortedArr = response.data.states.sort((a, b) =>
            a.name.localeCompare(b.name)
          );
          CallGetCities(idCity ? idCity : sortedArr[0]?.id);
          dispatch({
            type: "setStates",
            data: sortedArr,
          });
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

export const GetCities = (id, setCity, isFirstFecth) => async (dispatch) => {
  var config = {
    method: "get",
    url: `${URL}/locations/cities/${id}`,
    headers: {},
  };

  axios(config)
    .then(function (response) {
      if (response.data.successful) {
        console.log("is firststs", isFirstFecth);
        if (!isFirstFecth) {
          // setCity(-1);
        }
        const sortedArr = response.data.cities_data.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        dispatch({
          type: "setCities",
          data: sortedArr,
        });
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

export const GetUserStates =
  (country, setStateName, CallGetCities, isFirstFecth) =>
  async (dispatch, state) => {
    var config = {
      method: "get",
      url: `${URL}/locations/states/${country}`,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        if (response.data.successful) {
          if (!isFirstFecth) {
            // setStateName(-1);
          }
          const sortedArr = response.data.states.sort((a, b) =>
            a.name.localeCompare(b.name)
          );
          CallGetCities(
            state().userDetails.state_id
              ? state().userDetails.state_id
              : sortedArr[0]?.id
          );
          dispatch({
            type: "GetUserState",
            data: sortedArr,
          });
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

export const GetUserCities =
  (id, setCity, isFirstFecth) => async (dispatch) => {
    var config = {
      method: "get",
      url: `${URL}/locations/cities/${id}`,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        if (response.data.successful) {
          console.log("is firststs", isFirstFecth);
          if (!isFirstFecth) {
            // setCity(-1);
          }
          const sortedArr = response.data.cities_data.sort((a, b) =>
            a.name.localeCompare(b.name)
          );
          dispatch({
            type: "GetUserCity",
            data: sortedArr,
          });
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

export const GetDepartments = (id) => async (dispatch) => {
  var config = {
    method: "get",
    url: `${URL}/profile/get_departments`,
    headers: {},
  };

  axios(config)
    .then(function (response) {
      if (response.data.successful) {
        dispatch({
          type: "GetDepartments",
          data: response.data.data,
        });
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

export const GetIndustries = (id) => async (dispatch) => {
  var config = {
    method: "get",
    url: `${URL}/profile/get_industries`,
    headers: {},
  };

  axios(config)
    .then(function (response) {
      if (response.data.successful) {
        dispatch({
          type: "GetIndustries",
          data: response.data.data,
        });
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

export const GetSkills = (id) => async (dispatch) => {
  var config = {
    method: "get",
    url: `${URL}/profile/get_skills`,
    headers: {},
  };

  axios(config)
    .then(function (response) {
      if (response.data.successful) {
        dispatch({
          type: "GetSkills",
          data: response.data.data,
        });
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

export const GetEducationLevels = (id) => async (dispatch) => {
  var config = {
    method: "get",
    url: `${URL}/profile/get_education_levels`,
    headers: {},
  };

  axios(config)
    .then(function (response) {
      if (response.data.successful) {
        dispatch({
          type: "GetEducationLevels",
          data: response.data.data,
        });
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
