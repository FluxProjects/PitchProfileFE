import React, { useContext, useEffect, useState } from "react";
import Markup from "./markup/Markup";
import "./css/plugins.css";
import "./css/style.css";
import "./css/MyStyles.css";
import "./css/templete.css";
import "./css/skin/skin-1.css";
import "./plugins/slick/slick.min.css";
import "./plugins/slick/slick-theme.min.css";
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
    callGetSingleUserData();
    callGetRooms();
  }, []);

  const callGetRooms = async (id) => {
    if (state.userDetails?.company_name) {
      await dispatch(getMyRoomsCompany());
    } else {
      await dispatch(getMyRoomsCandidate());
    }
    setLoading(false);
  };

  const callGetSingleUserData = async () => {
    var url_string = window.location.href; //
    var url = new URL(url_string);
    var id = url.searchParams.get("id");
    setOtherId(id);
    await dispatch(getSingleUserData(id));
    setLoading(false);
  };

  const toggleModal = () => {
    setChatModal(!ChatModal);
    dispatch(setIsChatModalUp());
  };

  useEffect(() => {
    socket.emit("setup", state.userDetails.id);
    socket.on("connected", () => {
      setSocketId(socket.id);
    });
  }, [socket]);

  socket.on("message recieved", (data) => {
    console.log(
      "testings t mesgs rece",
      state.userDetails.id == data?.company_id ||
        (state.userDetails.id == data?.candidate_id &&
          state.userDetails.id != data?.sent_by)
    );

    if (
      state.userDetails.id == data?.company_id ||
      (state.userDetails.id == data?.candidate_id &&
        state.userDetails.id != data?.sent_by)
    ) {
      callGetRooms();
    }
    
  });

  return (
    <div className="App">
      {console.log(
        "window.location.pathnamewindow.location.pathname",
        window.location.pathname,
        window.location.pathname != "/view-candidate-profile"
      )}
      {state?.authToken ? (
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
              scrollable={true}
              show={true}
              onHide={() => toggleModal()}
              className="modal fade modal-bx-info editor"
            >
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
