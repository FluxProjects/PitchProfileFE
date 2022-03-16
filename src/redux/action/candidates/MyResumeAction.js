import axios from "axios";
import { URL } from "../../../utils/APIUtils";

import { toast } from "react-toastify";
import { lazySlidesOnLeft } from "react-slick/lib/utils/innerSliderUtils";

import * as fs from "fs";

export const AddCandidateSkill =
  (skill_id, skill_type, skill_level, is_top, setModal) =>
  async (dispatch, state) => {
    console.log("logging,");
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

export const UpdateCandidateSkill =
  (id, skill_id, skill_type, skill_level, is_top, index, setModal) =>
  async (dispatch, state) => {
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
    candidate_id,
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
    console.log("logging", state().authToken);
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
          var resData = state().candidateEducations.push(response.data.data[0]);
          dispatch({
            type: "SetCandidateEducation",
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

          var resData = state().candidateEducations.splice(index, 1);
          resData.push(response.data.data);
          console.log("testing tdyew", resData);
          dispatch({
            type: "SetCandidateEducation",
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
          type: "SetCandidateEducation",
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
          var resData = state().candidateEducations.splice(index, 1);
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
    candidate_id,
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
    console.log("logging", state().authToken);
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
          var resData = state().candidateEmployments.push(
            response.data.data[0]
          );
          dispatch({
            type: "SetCandidateEmployment",
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

          var resData = state().candidateEmployments.splice(index, 1);
          resData.push(response.data.data);
          console.log("testing tdyew", resData);
          dispatch({
            type: "SetCandidateEmployment",
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
          type: "SetCandidateEmployment",
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
          var resData = state().candidateEmployments.splice(index, 1);
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
    .then(function (response) {
      console.log(response.data);

      if (response.data.successful) {
        dispatch({
          type: "SetCandidateCertificate",
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
    candidate_id,
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
          var resData = state().candidateReferences.push(response.data.data[0]);
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
      url: `${URL}/profile/update_candidatecereference`,
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

          var resData = state().candidateReferences.splice(index, 1);
          resData.push(response.data.data);
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
    .then(function (response) {
      console.log(response.data);

      if (response.data.successful) {
        dispatch({
          type: "SetCandidateReference",
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
          type: "SetCandidateReference",
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
          var resData = state().candidateReferences.splice(index, 1);
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
  (candidate_id, social_profile_id, url, description, setModal) =>
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
          var resData = state().candidateSocialProfiles.push(
            response.data.data[0]
          );
          dispatch({
            type: "SetCandidateSocialProfile",
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

          var resData = state().candidateSocialProfiles.splice(index, 1);
          resData.push(response.data.data);
          console.log("testing tdyew", resData);
          dispatch({
            type: "SetCandidateSocialProfile",
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
      console.log(response.data);

      if (response.data.successful) {
        dispatch({
          type: "SetCandidateSocialProfile",
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
          type: "SetCandidateSocialProfile",
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
          var resData = state().candidateSocialProfiles.splice(index, 1);
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

export const UploadProfileImg = (filePath) => async (dispatch, state) => {
  var myHeaders = new Headers();

  var formdata = new FormData();
  formdata.append("file", filePath);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  fetch(`${URL}/profile/profilepic`, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      toast.success("Update Success!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log(result);
    })
    .catch((error) => console.log("error", error));
};

export const UploadProfileVid = (filePath) => async (dispatch, state) => {
  var formdata = new FormData();
  formdata.append("video", filePath);

  var requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  fetch(`${URL}/profile/profilevideo`, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      toast.success("Update Success!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log(result);
    })
    .catch((error) => console.log("error", error));
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
