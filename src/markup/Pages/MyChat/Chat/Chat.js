import React, { useState, useEffect, useContext } from "react";
import queryString from "query-string";

import TextContainer from "../TextContainer/TextContainer";
import Messages from "../Messages/Messages";
import InfoBar from "../InfoBar/InfoBar";
import Input from "../Input/Input";

import "./Chat.css";
import { URL } from "../../../../utils/APIUtils";
import { useDispatch, useSelector } from "react-redux";
import {
  AddMessage,
  getMessages,
} from "../../../../redux/action/Messages/MessagesActions";
import { SocketContext } from "../../../../utils/socket";

const Chat = ({
  location,
  otherId,
  RoomId,
  loading,
  setIsLoading,
  RoomName,
}) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  // socket
  const socket = useContext(SocketContext);

  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState("");
  // const [otherId, setOtherId] = useState(otherid);
  const [socketId, setSocketId] = useState("");

  const [message, setMessage] = useState("");
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    callGetMessages(otherId);

    socket.emit("setup", state.userDetails.id);
    socket.on("connected", () => {
      console.log("setup connected", socket.id); // x8WIv7-mJelg7on_ALbx

      setSocketId(socket.id);
    });

    // socket.emit("join", { name, room }, (error) => {
    //   if (error) {
    //     alert(error);
    //   }
    // });
  }, [socket, loading]);

  const callGetMessages = async (id) => {
    console.log("message called");
    await dispatch(
      getMessages(
        state.userDetails.company_name ? id : state.userDetails.id,
        state.userDetails.company_name ? state.userDetails.id : id
      )
    );
    // console.log("state.", state.messagesChat);
    setIsLoading(false);
  };

  const sendMessage = async (event) => {
    event.preventDefault();
    await dispatch(
      AddMessage(
        state.userDetails.company_name ? otherId : state.userDetails.id,
        state.userDetails.company_name ? state.userDetails.id : otherId,
        message,
        RoomId
      )
    );

    socket.emit("new message", {
      candidate_id: state.userDetails.company_name
        ? otherId
        : state.userDetails.id,
      company_id: state.userDetails.company_name
        ? state.userDetails.id
        : otherId,
      text: message,
      sent_by: state.userDetails.id,
    });
    socket.on("message recieved", (data) => {
      callGetMessages(otherId);
    });
  };

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="">
          <div className="containerChat">
            {/* <InfoBar room={RoomName} /> */}
            <Messages messages={state.messagesChat} />
            <Input
              message={message}
              setMessage={setMessage}
              sendMessage={sendMessage}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Chat;
