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
  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " years";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    const Day = Math.floor(interval);
    if (Day == 1) {
      return Day + " day";
    } else {
      return Day + " days";
    }
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes";
  }
  return Math.floor(seconds) + " seconds";
};
