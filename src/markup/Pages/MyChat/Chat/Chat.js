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
import { socket } from "../../../../utils/socket";

const Chat = ({ location, otherId, loading, setIsLoading }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  // socket
  // const socket = useContext(SocketContext);

  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState("");
  // const [otherId, setOtherId] = useState(otherid);
  const [socketId, setSocketId] = useState("");

  const [message, setMessage] = useState("");
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("otherIdotherId", otherId);
    callGetMessages(otherId);

    // socket.emit("setup", state.userDetails.id);
    // socket.on("connected", () => {
    //   console.log("setup connected", socket.id); // x8WIv7-mJelg7on_ALbx

    // setSocketId(socket.id);
    // });

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

  socket.on("message recieved", (data) => {
    if (
      state.userDetails.id == data?.company_id ||
      (state.userDetails.id == data?.candidate_id &&
        state.userDetails.id != data?.sent_by)
    ) {
      console.log("testing the messages", data);
      callGetMessages(otherId);
    }
  });

  const sendMessage = async (event) => {
    event.preventDefault();
    state.messagesChat.push({
      sent_by: state?.userDetails?.id,
      text: message,
    });
    await dispatch(
      AddMessage(
        state.userDetails.company_name ? otherId : state.userDetails.id,
        state.userDetails.company_name ? state.userDetails.id : otherId,
        message,
        state.SingleRoomName
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
  };

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="">
          <div className="containerChat">
            {/* <InfoBar room={RoomName} /> */}
            {state?.RoomNameProp && state?.myRooms?.length > 0 ? (
              <>
                {console.log(
                  "state.messagesChatstate.messagesChat",
                  state.messagesChat
                )}
                <Messages messages={state.messagesChat} />
                <Input
                  message={message}
                  setMessage={setMessage}
                  sendMessage={sendMessage}
                />
              </>
            ) : (
              <p
                style={{
                  borderLeft: "1px solid lightgray",
                  // width: "80%",
                  display: "flex",
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                Please select the user from the left panel to start chatting
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Chat;
