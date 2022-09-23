import axios from "axios";
import { cloudURL, URL } from "../../../utils/APIUtils";

import { toast } from "react-toastify";
import { formatDate } from "../../../utils/functions";

export const AddMessage =
  (candidate_id, company_id, text, room_id) => async (dispatch, state) => {
    var data = {
      candidate_id,
      company_id,
      text,
      room_id,
      sent_by: state().userDetails.id,
    };

    var config = {
      method: "post",
      url: `${URL}/messages/add_message`,
      headers: {},
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log("message sdnsa", response.data);
        if (response.data.status) {
          toast.success(" added Successfully!", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          // dispatch({
          //   type: "messagesChat",
          //   data: response.data.data,
          // });
          // router.push("/company-manage-job");
        } else {
          toast.success(response.data.message, {
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

export const clearMessages = () => async (dispatch, state) => {
  dispatch({
    type: "messagesChat",
    data: [],
  });
};

export const getMessages =
  (candidate_id, company_id) => async (dispatch, state) => {
    // dispatch({
    //   type: "messagesChat",
    //   data: [],
    // });
    var config = {
      method: "get",
      url: `${URL}/messages/get_messages/${candidate_id}/${company_id}`,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log("messsgaes gettig woo", response.data);
        dispatch({
          type: "messagesChat",
          data: response.data.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
