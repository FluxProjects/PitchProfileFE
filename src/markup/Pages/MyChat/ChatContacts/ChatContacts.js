import React, { useState, useEffect, useContext } from "react";
import queryString from "query-string";

import TextContainer from "../TextContainer/TextContainer";
import Messages from "../Messages/Messages";
import InfoBar from "../InfoBar/InfoBar";
import Input from "../Input/Input";

import "./ChatContacts.css";
import { URL } from "../../../../utils/APIUtils";
import { useDispatch, useSelector } from "react-redux";
import {
  AddMessage,
  getMessages,
} from "../../../../redux/action/Messages/MessagesActions";
import { SocketContext } from "../../../../utils/socket";
import {
  getMyRoomsCandidate,
  getMyRoomsCompany,
} from "../../../../redux/action";
import Chat from "../Chat/Chat";
import { Modal } from "react-bootstrap";

const ChatContacts = ({ location }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [ChatModal, setChatModal] = useState(false);
  const [otherId, setOtherId] = useState("");
  const [RoomId, setRoomId] = useState("");

  const toggleModal = () => {
    setChatModal(!ChatModal);
  };

  useEffect(() => {
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

  return (
    <div className="">
      <div className="containerChatContact">
        <InfoBar room={"Chat"} />
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            flex: 1,
            alignItems: "center",
          }}
        >
          {state?.myRooms?.map((item) => (
            <button
              className="btnStyle"
              onClick={() => {
                setOtherId(
                  state.userDetails?.company_name
                    ? item?.candidate_id
                    : item?.company_id
                );
                setRoomId(item?.id);
                setChatModal(true);
              }}
            >
              {state.userDetails?.company_name
                ? item?.candidate?.f_name + " " + item?.candidate?.l_name
                : item?.company?.company_name}
            </button>
          ))}
        </div>

        <Modal
          // backdrop={false}
          scrollable={true}
          show={ChatModal}
          onHide={() => toggleModal()}
          className="modal fade modal-bx-info editor"
        >
          <Chat otherId={otherId} RoomId={RoomId} />
        </Modal>
      </div>
    </div>
  );
};

export default ChatContacts;
