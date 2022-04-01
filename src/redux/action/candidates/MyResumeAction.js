import axios from "axios";
import { URL } from "../../../utils/APIUtils";

import { toast } from "react-toastify";
import { lazySlidesOnLeft } from "react-slick/lib/utils/innerSliderUtils";

import * as fs from "fs";
import {
  GetCityName,
  GetCountryName,
  GetStateName,
  SortSameVals,
} from "../../../utils/functions";

export const AddCandidateSkill =
  (skill_id, skill_type, skill_name, skill_level, is_top, setModal) =>
  async (dispatch, state) => {
    var count = 0;
    state().candidateSkills.forEach((v) => v.is_top === true && count++);

    if (is_top == true && count < 3) {
      console.log("countssss", count);

      var data = JSON.stringify({
        data: {
          candidate_id: state().userDetails.id,
          skill_id,
          skill_type,
          skill_level,
          skill_name,
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

          if (response.data.status) {
            toast.success("Updated Successfully!", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            var resData = state().candidateSkills;
            resData.push(response.data.data[0]);
            dispatch({
              type: "SetCandidateSkill",
              data: resData,
            });
            var arr = state().pedningActions;
            SortSameVals(arr);
            arr.splice(arr.indexOf("No skills added"), 1);
            dispatch({
              type: "setPendingAction",
              data: arr,
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
    } else if (is_top == false) {
      console.log("countssss", count);

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

          if (response.data.status) {
            toast.success("Updated Successfully!", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            var resData = state().candidateSkills;
            resData.push(response.data.data[0]);
            dispatch({
              type: "SetCandidateSkill",
              data: resData,
            });
            var arr = state().pedningActions;
            SortSameVals(arr);
            arr.splice(arr.indexOf("No skills added"), 1);
            dispatch({
              type: "setPendingAction",
              data: arr,
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
    } else {
      toast.error("Cannot Have More Than 3 Top Skills", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

export const UpdateCandidateSkill =
  (
    id,
    skill_id,
    skill_type,
    skill_name,
    skill_level,
    is_top,
    index,
    setModal
  ) =>
  async (dispatch, state) => {
    var count = 0;
    state().candidateSkills.forEach((v) => v.is_top === true && count++);

    if (is_top == true && count < 3) {
      console.log("modalDataIndex", index);
      var data = JSON.stringify({
        data: {
          id,
          candidate_id: state().userDetails.id,
          skill_id,
          skill_type,
          skill_level,
          skill_name,
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

            var resData = state().candidateSkills;
            resData[index] = response.data.data;
            console.log("testing tdyew", resData);
            dispatch({
              type: "SetCandidateSkill",
              data: resData,
            });
            var arr = state().pedningActions;
            SortSameVals(arr);
            arr.splice(arr.indexOf("No skills added"), 1);
            dispatch({
              type: "setPendingAction",
              data: arr,
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
    } else if (is_top == false) {
      console.log("modalDataIndex", index);
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

            var resData = state().candidateSkills;
            resData[index] = response.data.data;
            console.log("testing tdyew", resData);
            dispatch({
              type: "SetCandidateSkill",
              data: resData,
            });
            var arr = state().pedningActions;
            SortSameVals(arr);
            arr.splice(arr.indexOf("No skills added"), 1);
            dispatch({
              type: "setPendingAction",
              data: arr,
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
    } else {
      toast.error("Cannot Have More Than 3 Top Skills", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
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
        var arr = state().pedningActions;

        dispatch({
          type: "SetCandidateSkill",
          data: response.data.data,
        });
      } else {
        var arr = state().pedningActions;
        arr.push({
          message: "No skills added",
        });
        SortSameVals(arr);
        dispatch({
          type: "setPendingAction",
          data: arr,
        });
        // toast.error(response.data.message, {
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

export const DeleteCandidateSkill = (id, index) => async (dispatch, state) => {
  var config = {
    method: "get",
    url: `${URL}/profile/delete_candidateskill/${id}`,
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
        var resData = state().candidateSkills;
        resData.splice(index, 1);
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

export const AddCandidateEducation =
  (
    institute,
    department_id,
    education_level,
    course,
    start_date,
    end_date,
    is_current,
    setModal
  ) =>
  async (dispatch, state) => {
    var count = 0;
    state().candidateEducations.forEach((v, i) => {
      if (v.is_current === true) {
        count++;
      }
    });
    if (count > 0 && is_current == true) {
      toast.error("Cannot have more than one current institutes", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      var data = JSON.stringify({
        data: {
          candidate_id: state().userDetails.id,
          institute,
          department_id,
          education_level,
          course,
          start_date,
          end_date,
          is_current,
        },
      });

      var config = {
        method: "post",
        url: `${URL}/profile/add_candidateeducation`,
        headers: {
          Authorization: `Bearer ${state().authToken}`,
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          console.log("res tu ran", response.data);

          if (response.data.status) {
            toast.success("Updated Successfully!", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            var resData = state().candidateEducations;

            resData.push(response.data.data[0]);
            dispatch({
              type: "SetCandidateEducation",
              data: resData,
            });
            var arr = state().pedningActions;
            SortSameVals(arr);
            arr.splice(arr.indexOf("No education added"), 1);
            dispatch({
              type: "setPendingAction",
              data: arr,
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
    }
  };

export const UpdateCandidateEducation =
  (
    id,
    institute,
    department_id,
    education_level,
    course,
    start_date,
    end_date,
    is_current,
    index,
    setModal
  ) =>
  async (dispatch, state) => {
    var count = 0;
    state().candidateEducations.forEach((v, i) => {
      if (v.is_current === true && index != i) {
        count++;
      }
    });
    console.log("testing the test mk11", count);
    if (count > 0 && is_current == true) {
      toast.error("Cannot have more than one current institutes", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      var data = JSON.stringify({
        data: {
          id,
          candidate_id: state().userDetails.id,
          institute,
          department_id,
          education_level,
          course,
          start_date,
          end_date,
          is_current,
        },
      });

      var config = {
        method: "post",
        url: `${URL}/profile/update_candidateeducation`,
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

            var resData = state().candidateEducations;
            resData[index] = response.data.data;
            console.log("testing tdyew", resData);
            dispatch({
              type: "SetCandidateEducation",
              data: resData,
            });
            var arr = state().pedningActions;
            SortSameVals(arr);
            arr.splice(arr.indexOf("No education added"), 1);
            dispatch({
              type: "setPendingAction",
              data: arr,
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
    }
  };

export const GetCandidateEducations = () => async (dispatch, state) => {
  var config = {
    method: "get",
    url: `${URL}/profile/get_candidateeducations/${state().userDetails.id}`,
    headers: {},
  };

  axios(config)
    .then(function (response) {
      console.log(response.data);

      if (response.data.successful) {
        dispatch({
          type: "SetCandidateEducation",
          data: response.data.data,
        });
      } else {
        var arr = state().pedningActions;
        arr.push({
          message: "No education added",
        });
        SortSameVals(arr);
        dispatch({
          type: "setPendingAction",
          data: arr,
        });
        dispatch({
          type: "SetCandidateEducation",
          data: [],
        });
      }
    })
    .catch(function (error) {
      var arr = state().pedningActions;
      arr.push({
        message: "No education added",
      });
      SortSameVals(arr);
      dispatch({
        type: "setPendingAction",
        data: arr,
      });
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

export const DeleteCandidateEducation =
  (id, index) => async (dispatch, state) => {
    var config = {
      method: "get",
      url: `${URL}/profile/delete_candidateeducation/${id}`,
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
          var resData = state().candidateEducations;
          resData.splice(index, 1);
          console.log("index", resData);
          dispatch({
            type: "SetCandidateEducation",
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

export const AddCandidateEmployment =
  (
    organization,
    industry_id,
    department_id,
    role,
    description,
    start_date,
    end_date,
    is_current,
    setModal
  ) =>
  async (dispatch, state) => {
    var count = 0;
    state().candidateEmployments.forEach(
      (v) => v.is_current === true && count++
    );

    console.log("countdesgdrg", count);
    if (count > 0 && is_current == true) {
      toast.error("Cannot have more than one current employments", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      {
        console.log("logging", industry_id, department_id);
        var data = JSON.stringify({
          data: {
            candidate_id: state().userDetails.id,
            organization,
            industry_id,
            department_id,
            role,
            description,
            start_date,
            end_date,
            is_current,
          },
        });

        var config = {
          method: "post",
          url: `${URL}/profile/add_candidateemployment`,
          headers: {
            Authorization: `Bearer ${state().authToken}`,
            "Content-Type": "application/json",
          },
          data: data,
        };

        axios(config)
          .then(function (response) {
            console.log("res tu ran", response.data);

            if (response.data.status) {
              toast.success("Updated Successfully!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
              var resData = state().candidateEmployments;
              resData.push(response.data.data[0]);
              dispatch({
                type: "SetCandidateEmployment",
                data: resData,
              });
              var arr = state().pedningActions;
              SortSameVals(arr);
              arr.splice(arr.indexOf("No employments added"), 1);
              dispatch({
                type: "setPendingAction",
                data: arr,
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
      }
    }
  };

export const UpdateCandidateEmployment =
  (
    id,
    organization,
    industry_id,
    department_id,
    role,
    description,
    start_date,
    end_date,
    is_current,
    index,
    setModal
  ) =>
  async (dispatch, state) => {
    var count = 0;
    state().candidateEmployments.forEach((v, i) => {
      if (v.is_current === true && index != i) {
        count++;
      }
    });
    console.log("testing the test mk11", count);
    if (count > 0 && is_current == true) {
      toast.error("Cannot have more than one current employments", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      var data = JSON.stringify({
        data: {
          id,
          candidate_id: state().userDetails.id,
          organization,
          industry_id,
          department_id,
          role,
          description,
          start_date,
          end_date,
          is_current,
        },
      });

      var config = {
        method: "post",
        url: `${URL}/profile/update_candidateemployment`,
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

            var resData = state().candidateEmployments;
            resData[index] = response.data.data;
            console.log("testing tdyew", resData);
            dispatch({
              type: "SetCandidateEmployment",
              data: resData,
            });
            var arr = state().pedningActions;
            SortSameVals(arr);
            arr.splice(arr.indexOf("No employments added"), 1);
            dispatch({
              type: "setPendingAction",
              data: arr,
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
    }
  };

export const GetCandidateEmployments = () => async (dispatch, state) => {
  var config = {
    method: "get",
    url: `${URL}/profile/get_candidateemployments/${state().userDetails.id}`,
    headers: {},
  };

  axios(config)
    .then(function (response) {
      console.log(response.data);

      if (response.data.successful) {
        dispatch({
          type: "SetCandidateEmployment",
          data: response.data.data,
        });
      } else {
        // toast.error(response.data.message, {
        //   position: "top-right",
        //   autoClose: 5000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        // });
        var arr = state().pedningActions;
        arr.push({
          message: "No employments added",
        });
        SortSameVals(arr);
        dispatch({
          type: "setPendingAction",
          data: arr,
        });
        dispatch({
          type: "SetCandidateEmployment",
          data: [],
        });
      }
    })
    .catch(function (error) {
      var arr = state().pedningActions;
      arr.push({
        message: "No employments added",
      });
      SortSameVals(arr);
      dispatch({
        type: "setPendingAction",
        data: arr,
      });
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

export const DeleteCandidateEmployment =
  (id, index) => async (dispatch, state) => {
    var config = {
      method: "get",
      url: `${URL}/profile/delete_candidateemployment/${id}`,
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
          var resData = state().candidateEmployments;
          resData.splice(index, 1);
          console.log("index", resData);
          dispatch({
            type: "SetCandidateEmployment",
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

export const AddCandidateProject =
  (title, client_name, description, start_date, end_date, setModal) =>
  async (dispatch, state) => {
    console.log("logging", state().authToken);
    var data = JSON.stringify({
      data: {
        candidate_id: state().userDetails.id,
        title,
        client_name,
        description,
        start_date,
        end_date,
      },
    });

    var config = {
      method: "post",
      url: `${URL}/profile/add_candidateproject`,
      headers: {
        Authorization: `Bearer ${state().authToken}`,
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log("res tu ran", response.data);

        if (response.data.status) {
          toast.success("Added Successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          var resData = state().candidateProjects;
          resData.push(response.data.data[0]);

          dispatch({
            type: "SetCandidateProject",
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

export const UpdateCandidateProject =
  (
    id,
    title,
    client_name,
    description,
    start_date,
    end_date,
    index,
    setModal
  ) =>
  async (dispatch, state) => {
    var data = JSON.stringify({
      data: {
        id,
        candidate_id: state().userDetails.id,
        title,
        client_name,
        description,
        start_date,
        end_date,
      },
    });

    var config = {
      method: "post",
      url: `${URL}/profile/update_candidateproject`,
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

          var resData = state().candidateProjects;
          resData[index] = response.data.data;
          console.log("testing tdyew", resData);
          dispatch({
            type: "SetCandidateProject",
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

export const GetCandidateLanguages = () => async (dispatch, state) => {
  var config = {
    method: "get",
    url: `${URL}/profile/get_candidatelanguages/${state().userDetails.id}`,
    headers: {},
  };

  axios(config)
    .then(function (response) {
      console.log("mydata", response.data.data);
      if (response.data.successful) {
        dispatch({
          type: "SetCandidateLanguages",
          data: response.data.data,
        });
      } else {
        dispatch({
          type: "SetCandidateLanguages",
          data: [],
        });
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const UpdateCandidateLanguages =
  (id, language_id, proficiency_level, index, setModal) =>
  async (dispatch, state) => {
    var data = JSON.stringify({
      data: {
        id,
        candidate_id: state().userDetails.id,
        language_id,
        proficiency_level,
      },
    });

    var config = {
      method: "post",
      url: `${URL}/profile/update_candidatelanguage`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));

        var count = 0;
        state().candidateLanguages.forEach((v) => {
          if (v.language_id == language_id && v.id != id) {
            count++;
          }
        });

        if (count < 1) {
          if (response.data.successful) {
            var resData = state().candidateLanguages;
            resData[index] = response.data.data;
            dispatch({
              type: "SetCandidateLanguages",
              data: resData,
            });
            if (setModal) {
              setModal();
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
        } else {
          toast.error("Language already exists", {
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

export const AddCandidateLanguages =
  (language_id, proficiency_level, setModal) => async (dispatch, state) => {
    var count = 0;
    state().candidateLanguages.forEach(
      (v) => v.language_id === language_id && count++
    );

    if (count < 1) {
      var data = {
        data: {
          candidate_id: state().userDetails.id,
          language_id,
          proficiency_level,
        },
      };

      var config = {
        method: "post",
        url: `${URL}/profile/add_candidatelanguage`,
        headers: {
          Authorization: `Bearer ${state().authToken}`,
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          if (response.data.status) {
            var resData = state().candidateLanguages;
            resData.push(response.data.data[0]);
            dispatch({
              type: "SetCandidateLanguages",
              data: resData,
            });
            if (setModal) {
              setModal();
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
          console.log(error);
        });
    } else {
      toast.error("Language already exists", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

export const DeleteCandidateLanguages =
  (id, index) => async (dispatch, state) => {
    var data = JSON.stringify({
      data: {
        candidate_id: state().userDetails.id,
        language_id: id,
      },
    });
    var config = {
      method: "get",
      url: `${URL}/profile/delete_candidatelanguage/${id}`,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        if (response.data.successful) {
          var resData = state().candidateLanguages;
          resData.splice(index, 1);
          dispatch({
            type: "SetCandidateLanguages",
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
      });
  };

export const GetCandidateProjects = () => async (dispatch, state) => {
  console.log("testing");
  var config = {
    method: "get",
    url: `${URL}/profile/get_candidateprojects/${state().userDetails.id}`,
    headers: {},
  };

  axios(config)
    .then(function (response) {
      console.log("tum", response.data);

      if (response.data.successful) {
        console.log("testing");
        dispatch({
          type: "SetCandidateProject",
          data: response.data.data,
        });
      } else {
        // toast.error(response.data.message, {
        //   position: "top-right",
        //   autoClose: 5000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        // });
        dispatch({
          type: "SetCandidateProject",
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

export const DeleteCandidateProject =
  (id, index) => async (dispatch, state) => {
    var config = {
      method: "get",
      url: `${URL}/profile/delete_candidateproject/${id}`,
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
          var resData = state().candidateProjects;
          resData.splice(index, 1);
          console.log("index", resData);
          dispatch({
            type: "SetCandidateProject",
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

export const AddCandidateCertificate =
  (name, body, year_obtained, ref_no, setModal) => async (dispatch, state) => {
    console.log("logging", state().authToken);
    var data = JSON.stringify({
      data: {
        candidate_id: state().userDetails.id,
        name,
        body,
        year_obtained,
        ref_no,
      },
    });

    var config = {
      method: "post",
      url: `${URL}/profile/add_candidatecertificate`,
      headers: {
        Authorization: `Bearer ${state().authToken}`,
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log("res tu ran", response.data);

        if (response.data.status) {
          toast.success("Updated Successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          var resData = state().candidateCertificates;
          resData.push(response.data.data[0]);
          dispatch({
            type: "SetCandidateCertificate",
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

export const UpdateCandidateCertificate =
  (id, name, body, year_obtained, ref_no, index, setModal) =>
  async (dispatch, state) => {
    var data = JSON.stringify({
      data: {
        id,
        candidate_id: state().userDetails.id,
        name,
        body,
        year_obtained,
        ref_no,
      },
    });

    var config = {
      method: "post",
      url: `${URL}/profile/update_candidatecertificate`,
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

          var resData = state().candidateCertificates;
          resData[index] = response.data.data;
          console.log("testing tdyew", resData);
          dispatch({
            type: "SetCandidateCertificate",
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

export const GetCandidateCertificates = () => async (dispatch, state) => {
  var config = {
    method: "get",
    url: `${URL}/profile/get_candidatecertificates/${state().userDetails.id}`,
    headers: {},
  };

  axios(config)
    .then(async function (response) {
      console.log(response.data);

      if (response.data.successful) {
        dispatch({
          type: "SetCandidateCertificate",
          data: response.data.data,
        });
      } else {
        // toast.error(response.data.message, {
        //   position: "top-right",
        //   autoClose: 5000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        // });
        dispatch({
          type: "SetCandidateCertificate",
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

export const DeleteCandidateCertificate =
  (id, index) => async (dispatch, state) => {
    var config = {
      method: "get",
      url: `${URL}/profile/delete_candidatecertificate/${id}`,
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
          var resData = state().candidateCertificates;
          resData.splice(index, 1);
          console.log("index", resData);
          dispatch({
            type: "SetCandidateCertificate",
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

export const AddCandidateReference =
  (
    referer_name,
    organization,
    job_title,
    city_id,
    state_id,
    country_id,
    phone,
    email,
    setModal
  ) =>
  async (dispatch, state) => {
    console.log("logging", state().authToken);
    var data = JSON.stringify({
      data: {
        candidate_id: state().userDetails.id,
        referer_name,
        organization,
        job_title,
        city_id,
        state_id,
        country_id,
        phone,
        email,
      },
    });

    var config = {
      method: "post",
      url: `${URL}/profile/add_candidatereference`,
      headers: {
        Authorization: `Bearer ${state().authToken}`,
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log("res tu ran", response.data);

        if (response.data.status) {
          toast.success("Updated Successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          var resData = state().candidateReferences;
          resData.push(response.data.data[0]);
          dispatch({
            type: "SetCandidateReference",
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

export const UpdateCandidateReference =
  (
    id,
    referer_name,
    organization,
    job_title,
    city_id,
    state_id,
    country_id,
    phone,
    email,
    index,
    setModal
  ) =>
  async (dispatch, state) => {
    var data = JSON.stringify({
      data: {
        id,
        candidate_id: state().userDetails.id,
        referer_name,
        organization,
        job_title,
        city_id,
        state_id,
        country_id,
        phone,
        email,
      },
    });

    var config = {
      method: "post",
      url: `${URL}/profile/update_candidatereference`,
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

          var resData = state().candidateReferences;
          resData[index] = response.data.data;
          console.log("testing tdyew", resData);
          dispatch({
            type: "SetCandidateReference",
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
export const GetCandidateReferences = () => async (dispatch, state) => {
  var config = {
    method: "get",
    url: `${URL}/profile/get_candidatereferences/${state().userDetails.id}`,
    headers: {},
  };

  axios(config)
    .then(async function (response) {
      console.log(response.data);

      if (response.data.successful) {
        var newArr = [];

        dispatch({
          type: "SetCandidateReference",
          data: response.data.data,
        });
      } else {
        // toast.error(response.data.message, {
        //   position: "top-right",
        //   autoClose: 5000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        // });
        // dispatch({
        //   type: "SetCandidateReference",
        //   data: [],
        // });
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

export const DeleteCandidateReference =
  (id, index) => async (dispatch, state) => {
    var config = {
      method: "get",
      url: `${URL}/profile/delete_candidatereference/${id}`,
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
          var resData = state().candidateReferences;
          resData.splice(index, 1);
          console.log("index", resData);
          dispatch({
            type: "SetCandidateReference",
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

export const AddCandidateSocialProfile =
  (social_profile_id, url, description, setModal) =>
  async (dispatch, state) => {
    console.log("logging", state().authToken);
    var data = JSON.stringify({
      data: {
        candidate_id: state().userDetails.id,
        social_profile_id,
        url,
        description,
      },
    });

    var config = {
      method: "post",
      url: `${URL}/profile/add_candidatesocial_profile`,
      headers: {
        Authorization: `Bearer ${state().authToken}`,
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log("res tu ran", response.data);

        if (response.data.status) {
          toast.success("Updated Successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          var resData = state().candidateSocialProfiles;
          resData.push(response.data.data[0]);
          dispatch({
            type: "SetCandidateSocialProfile",
            data: resData,
          });
          var arr = state().pedningActions;
          SortSameVals(arr);
          arr.splice(arr.indexOf("No social profiles added"), 1);
          dispatch({
            type: "setPendingAction",
            data: arr,
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

export const UpdateCandidateSocialProfile =
  (id, social_profile_id, url, description, index, setModal) =>
  async (dispatch, state) => {
    var data = JSON.stringify({
      data: {
        id,
        candidate_id: state().userDetails.id,
        social_profile_id,
        url,
        description,
      },
    });

    var config = {
      method: "post",
      url: `${URL}/profile/update_candidatesocial_profile`,
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

          var resData = state().candidateSocialProfiles;
          resData[index] = response.data.data;
          console.log("testing tdyew", resData);
          dispatch({
            type: "SetCandidateSocialProfile",
            data: resData,
          });
          var arr = state().pedningActions;
          SortSameVals(arr);
          arr.splice(arr.indexOf("No social profiles added"), 1);
          dispatch({
            type: "setPendingAction",
            data: arr,
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

export const GetCandidateSocialProfiles = () => async (dispatch, state) => {
  var config = {
    method: "get",
    url: `${URL}/profile/get_candidatesocial_profiles/${
      state().userDetails.id
    }`,
    headers: {},
  };

  axios(config)
    .then(function (response) {
      console.log("Social profile res", response.data);

      if (response.data.successful) {
        dispatch({
          type: "SetCandidateSocialProfile",
          data: response.data.data,
        });
      } else {
        // toast.error(response.data.message, {
        //   position: "top-right",
        //   autoClose: 5000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        // });
        var arr = state().pedningActions;
        arr.push({
          message: "No social profiles added",
        });
        SortSameVals(arr);
        dispatch({
          type: "setPendingAction",
          data: arr,
        });
        dispatch({
          type: "SetCandidateSocialProfile",
          data: [],
        });
      }
    })
    .catch(function (error) {
      var arr = state().pedningActions;
      arr.push({
        message: "No social profiles added",
      });
      SortSameVals(arr);
      dispatch({
        type: "setPendingAction",
        data: arr,
      });
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

export const DeleteCandidateSocialProfile =
  (id, index) => async (dispatch, state) => {
    var config = {
      method: "get",
      url: `${URL}/profile/delete_candidatesocial_profile/${id}`,
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
          var resData = state().candidateSocialProfiles;
          resData.splice(index, 1);
          console.log("index", resData);
          dispatch({
            type: "SetCandidateSocialProfile",
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

export const UpdateCandidateProfile =
  (
    id,
    f_name,
    l_name,
    headline,
    city_id,
    state_id,
    country_id,
    phone,
    email,
    authToken,
    setModal
  ) =>
  async (dispatch, state) => {
    var data = JSON.stringify({
      data: {
        id,
        f_name,
        l_name,
        headline,
        city_id,
        state_id,
        country_id,
        phone,
        email,
      },
    });

    var config = {
      method: "post",
      url: `${URL}/profile/update_candidateprofile`,
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        if (response.data.successful) {
          console.log("data", response.data.data);
          toast.success("Update Success!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

          dispatch({
            type: "RegisterUser",
            data: response.data.data[0],
          });
          dispatch({
            type: "SetAuthToken",
            data: response.data.accessToken,
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

export const UpdateCandidateSummary =
  (summary, setModal) => async (dispatch, state) => {
    var data = JSON.stringify({
      data: {
        id: state().userDetails.id,
        summary,
      },
    });

    var config = {
      method: "post",
      url: `${URL}/profile/update_candidatesummary`,
      headers: {
        Authorization: `Bearer ${state().authToken}`,
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        if (response.data.successful) {
          console.log("data", response.data);
          toast.success("Update Success!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

          var resData = state().userDetails;
          resData.summary = response.data.data.summary;

          dispatch({
            type: "RegisterUser",
            data: resData,
          });
          dispatch({
            type: "SetAuthToken",
            data: response.data.accessToken,
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

export const UploadProfileStatus = (status) => async (dispatch, state) => {
  var data = JSON.stringify({
    data: {
      id: state().userDetails.id,
      status: status,
    },
  });

  var config = {
    method: "post",
    url: `${URL}/profile/update_candidatestatus`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log(response.data);
      if (response.data.successful) {
        console.log("data", response.data);
        toast.success("Update Success!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        var resData = state().userDetails;
        resData.is_active = response.data.data.status;

        dispatch({
          type: "RegisterUser",
          data: resData,
        });
        dispatch({
          type: "SetAuthToken",
          data: response.data.accessToken,
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

export const UpdateDesiredCareer =
  (
    industry_id,
    department_id,
    role,
    job_type,
    employment_type,
    preferred_shift,
    available_join,
    expected_salary,
    city_id,
    state_id,
    country_id,
    handleClose,
    callGetCityState
  ) =>
  async (dispatch, state) => {
    console.log(
      "dedw",
      industry_id,
      department_id,
      role,
      job_type,
      employment_type,
      preferred_shift,
      available_join,
      expected_salary,
      city_id,
      state_id,
      country_id
    );
    var data = JSON.stringify({
      data: {
        candidate_id: state().userDetails.id,
        id: state().candidateDesiredCareer.id,
        industry_id,
        department_id,
        role,
        job_type,
        employment_type,
        preferred_shift,
        available_join,
        expected_salary,
        city_id,
        state_id,
        country_id,
      },
    });

    var config = {
      method: "post",
      url: `${URL}/profile/update_desiredcareer`,
      headers: {
        Authorization: `Bearer ${state().authToken}`,
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(async function (response) {
        console.log(JSON.stringify(response.data));
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

          dispatch({
            type: "SetDesiredCareer",
            data: response.data.data,
          });
          console.log(
            "response.data.data.state_id",
            response.data.data.state_id
          );
          if (callGetCityState) {
            await callGetCityState(
              response.data.data.state_id,
              response.data.data.city_id,
              response.data.data.country_id
            );
          }
          if (handleClose) {
            handleClose();
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

export const GetDesiredCareer = () => async (dispatch, state) => {
  var config = {
    method: "get",
    url: `${URL}/profile/get_desiredcareer/${state().userDetails.id}`,
    headers: {},
  };

  console.log("workied");
  axios(config)
    .then(function (response) {
      console.log("GetDesiredCareer", response.data);
      if (response.data.successful) {
        dispatch({
          type: "SetDesiredCareer",
          data: response.data.data[0],
        });
      } else {
        var arr = state().pedningActions;
        arr.push({
          message: "No desired career added",
        });
        SortSameVals(arr);
        dispatch({
          type: "setPendingAction",
          data: arr,
        });

        // toast.error(response.data.message, {
        //   position: "top-right",
        //   autoClose: 5000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        // });
      }
    })
    .catch(function (error) {
      var arr = state().pedningActions;
      arr.push({
        message: "No desired career added",
      });
      SortSameVals(arr);
      dispatch({
        type: "setPendingAction",
        data: arr,
      });
      console.log(error);
    });
};

export const UpdateResumeHeader =
  (
    f_name,
    l_name,
    headline,
    city_id,
    state_id,
    country_id,
    hometown_country_id,
    phone,
    email,
    setModal,
    callGetCityState
  ) =>
  async (dispatch, state) => {
    var data = JSON.stringify({
      data: {
        id: state().userDetails.id,
        f_name,
        l_name,
        city_id,
        state_id,
        country_id,
        hometown_country_id,
        phone,
        email,
        headline,
      },
    });

    var config = {
      method: "post",
      url: `${URL}/profile/update_resueme_headline`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        if (response.data.successful) {
          console.log("data", response.data.data);
          toast.success("Update Success!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

          dispatch({
            type: "RegisterUser",
            data: response.data.data,
          });
          dispatch({
            type: "SetAuthToken",
            data: response.data.accessToken,
          });
          if (callGetCityState) {
            callGetCityState(
              response.data.data.state_id,
              response.data.data.city_id,
              response.data.data.country_id
            );
          }
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
        console.log(error);
      });
  };
