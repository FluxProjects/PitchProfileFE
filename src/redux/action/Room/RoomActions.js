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
        console.log("message sdnsa", response.data);
        if (response.data.message == "Rooms get Successfully") {
          await dispatch({
            type: "SingleRoomData",
            data: response.data.data,
          });
          await dispatch({
            type: "SingleRoomName",
            data: response.data.room_id,
          });
        } else if (response.data.message == "Room created Successfully") {
          const arr = state?.myRooms.push(response.data);
          console.log("message sdnsa", response.data);

          await dispatch({
            type: "myRooms",
            data: arr,
          });

          await dispatch({
            type: "SingleRoomName",
            data: response.data.room,
          });
          await dispatch({
            type: "SingleRoomId",
            data: response.data.room_id,
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
      var arr = response.data.data;

      const uniqueAddresses = Array.from(
        new Set(arr.map((a) => a.company?.company_name))
      ).map((id) => {
        return arr.find((a) => a.company?.company_name === id);
      });
      dispatch({
        type: "myRooms",
        data: uniqueAddresses,
        IsReadLength: response.data?.IsReadLength,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const setIsChatModalUp = (index) => async (dispatch, state) => {
  dispatch({
    type: "isChatModalUp",
    data: !state().isChatModalUp,
    // IsReadLength: state().IsReadLength - 1,
  });
};

export const setRoomNameRedux = (data) => async (dispatch, state) => {
  dispatch({
    type: "RoomNameProp",
    data: data,
  });
};

export const setRoomIdRedux = (data) => async (dispatch, state) => {
  dispatch({
    type: "SingleRoomName",
    data: data,
  });
};

export const UpdateRoom = (index) => async (dispatch, state) => {
  state().myRooms[index].isRead = true;
  const data = state().myRooms;
  dispatch({
    type: "myRooms",
    data,
    // IsReadLength: state().IsReadLength - 1,
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
      var arr = response.data.data;

      const uniqueAddresses = Array.from(
        new Set(arr.map((a) => a.candidate.f_name + " " + a.candidate.l_name))
      ).map((id) => {
        return arr.find(
          (a) => a.candidate.f_name + " " + a.candidate.l_name === id
        );
      });

      dispatch({
        type: "myRooms",
        data: uniqueAddresses,
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
      const roomIndex = state().myRooms.findIndex(
        (item) => item.id === room_id
      );
      state().myRooms[roomIndex].isRead = true;
      const data = state().myRooms;
      dispatch({
        type: "myRooms",
        data,
        IsReadLength: response.data?.IsReadLength,
      });
      // dispatch({
      //   type: "myRoomsUpdated",
      //   data: response.data.data,
      //   // IsReadLength: response.data?.IsReadLength,
      // });
    })
    .catch(function (error) {
      console.log(error);
    });
};
