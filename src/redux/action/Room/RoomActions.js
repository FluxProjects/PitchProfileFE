import axios from "axios";
import { cloudURL, URL } from "../../../utils/APIUtils";

import { toast } from "react-toastify";
import { formatDate } from "../../../utils/functions";

export const AddRoom =
  (candidate_id, company_id, room_name, setModal) =>
  async (dispatch, state) => {
    console.log("room_name", room_name);
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
      .then(async function (response) {
        if (response.data.message == "Rooms get Successfully") {
          await dispatch({
            type: "SingleRoomData",
            data: response.data.data,
          });
          await dispatch({
            type: "SingleRoomName",
            data: response.data.room,
          });
        } else if (response.data.message == "Room created Successfully") {
          const arr = state?.myRooms.push(response.data);
          console.log("message sdnsa", arr);

          await dispatch({
            type: "myRooms",
            data: arr,
          });

          await dispatch({
            type: "SingleRoomName",
            data: response.data.room,
          });
          setModal(true);
          // router.push("/company-manage-job");
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

export const getMyRoomsCandidate = () => async (dispatch, state) => {
  var config = {
    method: "get",
    url: `${URL}/rooms/get_my_rooms_candidate/${state().userDetails.id}`,
    headers: {},
  };

  axios(config)
    .then(function (response) {
      console.log("messsgaes gettig rooms", response.data);
      dispatch({
        type: "myRooms",
        data: response.data.data,
        IsReadLength: response.data?.IsReadLength,
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
      console.log("messsgaes gettig rooms company", response.data);
      dispatch({
        type: "myRooms",
        data: response.data.data,
        IsReadLength: response.data?.IsReadLength,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const updateMyRoomsisRead = (room_id) => async (dispatch, state) => {
  var config = {
    method: "get",
    url: `${URL}/rooms/update_isRead/${room_id}`,
    headers: {},
  };

  axios(config)
    .then(function (response) {
      console.log("update messsgaes gettig woo", response.data);
      dispatch({
        type: "myRoomsUpdated",
        data: response.data.data,
        // IsReadLength: response.data?.IsReadLength,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
};
