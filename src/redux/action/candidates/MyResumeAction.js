import axios from "axios";
import { URL } from "../../../utils/APIUtils";

import { toast } from "react-toastify";
import { lazySlidesOnLeft } from "react-slick/lib/utils/innerSliderUtils";

export const AddCandidateSkill =
  (candidate_id, skill_id, skill_type, skill_level, is_top, setModal) =>
  async (dispatch, state) => {
    console.log("logging", state().authToken);
    var data = JSON.stringify({
      data: {
        candidate_id: state().userDetails.id,
        skill_id,
        skill_type,
        skill_level,
        is_top,
      },
    });

    var config = {
      method: "post",
      url: `${URL}/profile/add_candidateskill`,
      headers: {
        Authorization: `Bearer ${state().authToken}`,
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log("res tu ran", response.data);

        if (response.data.successful) {
          toast.success("Updated Successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          var resData = state().candidateSkills.push(response.data.data[0]);
          dispatch({
            type: "SetCandidateSkill",
            data: resData,
          });

          if (setModal) {
            setModal(false);
          }
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
        console.error(error);
        toast.error(error, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

export const GetCandidateSkills = () => async (dispatch, state) => {
  var config = {
    method: "get",
    url: `${URL}/profile/get_candidateskills/${state().userDetails.id}`,
    headers: {},
  };

  axios(config)
    .then(function (response) {
      console.log(response.data);

      if (response.data.successful) {
        // toast.success(response.data.message, {
        //   position: "top-right",
        //   autoClose: 5000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        // });
        dispatch({
          type: "SetCandidateSkill",
          data: response.data.data,
        });
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
        dispatch({
          type: "SetCandidateSkill",
          data: [],
        });
      }
    })
    .catch(function (error) {
      console.log(error);
      toast.error(error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    });
};

export const UpdateCandidateSkills =
  (id, skill_id, skill_type, skill_level, is_top, index, setModal) =>
  async (dispatch, state) => {
    var data = JSON.stringify({
      data: {
        id,
        candidate_id: state().userDetails.id,
        skill_id,
        skill_type,
        skill_level,
        is_top,
      },
    });

    var config = {
      method: "post",
      url: `${URL}/profile/update_candidateskill`,
      headers: {
        Authorization: `Bearer ${state().authToken}`,
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log("res vals", response.data);
        if (response.data.successful) {
          toast.success("Updated Successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

          var resData = state().candidateSkills.splice(index, 1);
          resData.push(response.data.data);
          console.log("testing tdyew", resData);
          dispatch({
            type: "SetCandidateSkill",
            data: resData,
          });

          if (setModal) {
            setModal(false);
          }
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
        console.error(error);
        toast.error(error, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

export const DeleteCandidateSkills = (id, index) => async (dispatch, state) => {
  var config = {
    method: "get",
    url: `${URL}/profile/delete_candidateskills/${id}`,
    headers: {},
  };

  axios(config)
    .then(function (response) {
      console.log("d", response.data);
      if (response.data.successful) {
        toast.success("Deleted Successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        var resData = state().candidateSkills.splice(index, 1);
        console.log("index", resData);
        dispatch({
          type: "SetCandidateSkill",
          data: resData,
        });
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
      toast.error(error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    });
};
