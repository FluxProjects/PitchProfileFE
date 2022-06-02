import axios from "axios";
import { cloudURL, URL } from "../../../utils/APIUtils";

import { toast } from "react-toastify";
import { formatDate } from "../../../utils/functions";

export const AddRoom =
  (candidate_id, company_id, room_name) => async (dispatch, state) => {
    var data = {
      candidate_id,
      company_id,
      room_name,
    };

    var config = {
      method: "post",
      url: `${URL}/rooms/add_room`,
      headers: {},
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log("message sdnsa", response.data);
        if (response.data.status) {
          dispatch({
            type: "myRooms",
            data: response.data.data,
          });
          // router.push("/company-manage-job");
        } else {
          toast.success(response.data.message, {
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

export const getMyRoomsCandidate = () => async (dispatch, state) => {
  var config = {
    method: "get",
    url: `${URL}/rooms/get_my_rooms_candidate/${state().userDetails.id}`,
    headers: {},
  };

  axios(config)
    .then(function (response) {
      console.log("messsgaes gettig woo", response.data);
      dispatch({
        type: "myRooms",
        data: response.data.data,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const getMyRoomsCompany = () => async (dispatch, state) => {
  var config = {
    method: "get",
    url: `${URL}/rooms/get_my_rooms_company/${state().userDetails.id}`,
    headers: {},
  };

  axios(config)
    .then(function (response) {
      console.log("messsgaes gettig woo", response.data);
      dispatch({
        type: "myRooms",
        data: response.data.data,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
};
