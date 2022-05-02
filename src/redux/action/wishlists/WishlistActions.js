import axios from "axios";
import { cloudURL, URL } from "../../../utils/APIUtils";

import { toast } from "react-toastify";
import { lazySlidesOnLeft } from "react-slick/lib/utils/innerSliderUtils";

export const AddWishlistCandidate = (job_id) => async (dispatch, state) => {
  var data = JSON.stringify({
    data: {
      candidate_id: state().userDetails.id,
      company_id: -1,
      job_id,
    },
  });

  console.log("data is m datata", data);

  var config = {
    method: "post",
    url: `${URL}/wishlist/add_wishlist_candidate`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log("my response data", response.data);

      if (response.data.status == "success") {
        dispatch({
          type: "GetWishlist",
          data: response.data.data,
        });
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const AddWishlistCompany = (job_id) => async (dispatch, state) => {
  var data = JSON.stringify({
    data: {
      candidate_id: -1,
      company_id: state().userDetails.id,
      job_id,
    },
  });

  console.log("data is m datata", data);

  var config = {
    method: "post",
    url: `${URL}/wishlist/add_wishlist_company`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log("my response data", response.data);

      if (response.data.status == "success") {
        dispatch({
          type: "GetWishlist",
          data: response.data.data,
        });
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const GetWishlistCompany = (job_id) => async (dispatch, state) => {
  var config = {
    method: "get",
    url: `${URL}/wishlist/get_wishlist_company/${state().userDetails.id}`,
    headers: {},
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));

      if (response.data.status == "success") {
        dispatch({
          type: "GetWishlist",
          data: response.data.data,
        });
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const GetWishlistCandidate = (job_id) => async (dispatch, state) => {
  var config = {
    method: "get",
    url: `${URL}/wishlist/get_wishlist_candidate/${state().userDetails.id}`,
    headers: {},
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));

      if (response.data.status == "success") {
        dispatch({
          type: "GetWishlist",
          data: response.data.data,
        });
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};
