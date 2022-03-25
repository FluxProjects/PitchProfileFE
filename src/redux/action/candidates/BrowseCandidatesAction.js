import axios from "axios";
import { URL } from "../../../utils/APIUtils";

import { toast } from "react-toastify";
import { lazySlidesOnLeft } from "react-slick/lib/utils/innerSliderUtils";

import * as fs from "fs";
import {
  GetCityName,
  GetCountryName,
  GetStateName,
} from "../../../utils/functions";

export const GetAllCandidates = () => async (dispatch, state) => {
  var config = {
    method: "get",
    url: "https://pitchprofile.herokuapp.com/profile/get_all_candidates",
    headers: {},
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      if (response.data.successful) {
        var arr = state().pedningActions;

        dispatch({
          type: "GetAllCandidates",
          data: response.data.data,
        });
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};
