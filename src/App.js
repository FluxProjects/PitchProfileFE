import React, { useContext, useEffect, useState } from "react";
import Markup from "./markup/Markup";
import "./css/plugins.css";
import "./css/style.css";
import "./css/MyStyles.css";
import "./css/templete.css";
import "./css/skin/skin-1.css";
import "./plugins/slick/slick.min.css";
import "./plugins/slick/slick-theme.min.css";

// git@github.com-personal:FluxProjects/pitchprofile.git

import { ToastContainer } from "react-toastify";
import { Form, Modal, ToggleButton } from "react-bootstrap";

import "react-toastify/dist/ReactToastify.css";
import {
  getAuthToken,
  GetCandidateLanguages,
  GetDepartments,
  GetEducationLevels,
  GetIndustries,
  getMessages,
  getMyRoomsCandidate,
  getMyRoomsCompany,
  getSingleUserData,
  GetSkills,
  setIsChatModalUp,
} from "./redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import WeavyApp from "./weavy/WeavyApp";
import Weavy from "./weavy/Weavy";
import Chat from "./markup/Pages/MyChat/Chat/Chat";
import ChatContacts from "./markup/Pages/MyChat/ChatContacts/ChatContacts";
import { socket } from "./utils/socket";

function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);
  const [ChatModal, setChatModal] = useState(false);
  const [otherId, setOtherId] = useState("");
  const [socketId, setSocketId] = useState("");

  useEffect(() => {
    if (false) {
      if (!window.console) window.console = {};
      var methods = [
        "log",
        "debug",
        "warn",
        "info",
        "dir",
        "dirxml",
        "trace",
        "profile",
      ];
      for (var i = 0; i < methods.length; i++) {
        console[methods[i]] = function () {};
      }
    }
    callGetDrop();
  }, []);

  const callGetDrop = async () => {
    if (state.departments.length < 1) {
      await dispatch(GetDepartments());
    }
    if (state.industries.length < 1) {
      await dispatch(GetIndustries());
    }
    if (state.skills.length < 1) {
      await dispatch(GetSkills());
    }
    if (state.educationLevels.length < 1) {
      await dispatch(GetEducationLevels());
    }
  };

  useEffect(() => {
    //  to get languages

    callGetSingleUserData();
    callGetRooms();
  }, []);

  const callGetRooms = async (id) => {
    if (state.userDetails?.company_name) {
      console.log("Company called");

      await dispatch(getMyRoomsCompany());
    } else {
      console.log("Candidate called");

      await dispatch(getMyRoomsCandidate());
    }
    setLoading(false);
  };

  const callGetSingleUserData = async () => {
    var url_string = window.location.href; //
    var url = new URL(url_string);
    var id = url.searchParams.get("id");
    setOtherId(id);
    console.log("window.location.href", id);

    await dispatch(getSingleUserData(id));
    console.log("singleUserData", state.singleUserData);
    setLoading(false);
  };

  const toggleModal = () => {
    setChatModal(!ChatModal);
    dispatch(setIsChatModalUp());
  };

  // socket
  // const socket = useContext(SocketContext);

  useEffect(() => {
    socket.emit("setup", state.userDetails.id);
    socket.on("connected", () => {
      console.log("setup connected", socket.id); // x8WIv7-mJelg7on_ALbx

      setSocketId(socket.id);
    });
    // socket.on("connection", () => {
    //   socket.emit("setup", state.userDetails.id);
    //   console.log("setup connected", socket.id); // x8WIv7-mJelg7on_ALbx

    //   setSocketId(socket.id);
    // });
  }, [socket]);

  socket.on("message recieved", (data) => {
    console.log(
      "testings t mesgs rece",
      state.userDetails.id == data?.company_id ||
        (state.userDetails.id == data?.candidate_id &&
          state.userDetails.id != data?.sent_by)
    );
    // if (!state?.isChatModalUp) {
    if (
      state.userDetails.id == data?.company_id ||
      (state.userDetails.id == data?.candidate_id &&
        state.userDetails.id != data?.sent_by)
    ) {
      callGetRooms();
    }
    // }
  });

  return (
    <div className="App">
      {console.log(
        "window.location.pathnamewindow.location.pathname",
        window.location.pathname,
        window.location.pathname != "/view-candidate-profile"
      )}
      {state?.authToken ? (
        // window.location.pathname != "/view-candidate-profile" ||
        // window.location.pathname == "/my-wishlists-candidate" ||
        // window.location.pathname == "/company-profile" ||
        // window.location.pathname == "/company-post-jobs" ||
        // window.location.pathname == "/company-manage-job" ||
        // window.location.pathname == "/company-resume" ||
        // window.location.pathname == "/company-change-password" ||
        // // window.location.pathname == "/company-detail" ||
        // // window.location.pathname == "/job-detail" ||
        // window.location.pathname == "/my-wishlists-company" ?
        <>
          <p
            style={{
              position: "fixed",
              bottom: 20,
              right: 30,
              padding: 8,
              zIndex: 10,
            }}
          >
            <button
              onClick={() => {
                console.log("clis");
                toggleModal();
              }}
              style={{
                background: "transparent",
                border: "transparent",
                fontSize: 40,
                outline: "none",
              }}
              className=" radius-xl"
            >
              <i
                style={{
                  color: "rgb(71, 120, 240)",
                }}
                className="btnChatStyle fa fa-comment"
              ></i>
              {state.IsReadLength > 0 && (
                <sup
                  style={{
                    position: "relative",
                    right: "16px",
                    zIndex: 10,
                    bottom: "13px",
                  }}
                >
                  <span
                    style={{ fontSize: 10 }}
                    class="badge badge-pill badge-danger "
                  >
                    {state.IsReadLength}
                  </span>
                </sup>
              )}
            </button>
          </p>
          {ChatModal && (
            <Modal
              // backdrop={false}
              scrollable={true}
              show={true}
              onHide={() => toggleModal()}
              className="modal fade modal-bx-info editor"
            >
              {/* <Chat otherId={otherId} /> */}
              <ChatContacts setCloseModal={() => toggleModal()} />
            </Modal>
          )}
        </>
      ) : null}

      <Markup />
      <ToastContainer
        position="bottom-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
      />
    </div>
  );
}

export default App;
