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
    url: `${URL}/profile/get_all_candidates`,
    headers: {},
  };

  axios(config)
    .then(function (response) {
      console.log("test", response.data);
      if (response.data.successful) {
        var organizationDrop = [];
        var DesignationDrop = [];
        console.log("employments", response.data.data[0].employments);

        response.data.data.map((item, index) => {
          organizationDrop.push(item?.employments[0]?.organization);
          DesignationDrop.push(item?.employments[0]?.role);
        });

        console.log("testing", DesignationDrop);

        var arr = state().pedningActions;

        dispatch({
          type: "SetOrganizationDrop",
          data: organizationDrop,
          DesignationDrop: DesignationDrop,
        });
        dispatch({
          type: "GetAllCandidates",
          data: response.data.data,
        });
        dispatch({
          type: "BackupAllCandidates",
          data: response.data.data,
        });
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};
