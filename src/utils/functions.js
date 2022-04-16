import axios from "axios";
import { toast } from "react-toastify";
import { URL } from "./APIUtils";

export const allLetter = (inputtxt) => {
  var letters = /^[A-Za-z]+$/;
  if (inputtxt.value.match(letters)) {
    return true;
  } else {
    alert("message");
    return false;
  }
};

export const GetStateName = async (id, setVal) => {
  var config = {
    method: "get",
    url: `${URL}/locations/get_state/${id}`,
    headers: {},
  };

  await axios(config)
    .then(function (response) {
      console.log("NWO", response.data.data[0].name);
      if (response.data.successful) {
        if (setVal) {
          setVal(response.data.data[0].name);
        }
        return response.data.data[0].name;
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

export const GetCityName = async (id, setVal) => {
  var config = {
    method: "get",
    url: `${URL}/locations/get_city/${id}`,
    headers: {},
  };

  await axios(config)
    .then(function (response) {
      console.log("NWO", response.data.data[0].name);
      if (response.data.successful) {
        if (setVal) {
          setVal(response.data.data[0].name);
        }
        return response.data.data[0].name;
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

export const GetCountryName = async (id, setVal) => {
  var config = {
    method: "get",
    url: `${URL}/locations/get_country/${id}`,
    headers: {},
  };

  await axios(config)
    .then(function (response) {
      console.log("NWO", response.data.data[0].name);
      if (response.data.successful) {
        if (setVal) {
          setVal(response.data.data[0].name);
        }
        return response.data.data[0].name;
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

export const formatDate = (date) => {
  let tempDate = [...date];
  let day = tempDate.slice(8);
  let month = tempDate.slice(5, 7);
  let year = tempDate.slice(0, 4);
  let newDate = `${day}-${month}-${year}`;
  return newDate.split(",").join(""); // Change This Line
};

export const SortSameVals = (a) => {
  return a.sort().filter(function (item, pos, ary) {
    return !pos || item != ary[pos - 1];
  });
};

export const daysSinceGivenDate = (date) => {
  const dateInSeconds = Math.floor(
    (new Date().valueOf() - date.valueOf()) / 1000
  );
  const oneDayInSeconds = 86400;

  return (dateInSeconds / oneDayInSeconds) | 0; // casted to int
};
