import React from "react";

import "./Message.css";

import ReactEmoji from "react-emoji";
import { useSelector } from "react-redux";
import moment from "moment";

const Message = ({ message }) => {
  let isSentByCurrentUser = false;

  const state = useSelector((state) => state);

  if (state.userDetails.id === message.sent_by) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div className="messageContainerChat justifyEndChat">
      {/* <p className="sentTextChat pr-10Chat">{trimmedName}</p> */}
      <div className="messageBoxChat backgroundBlueChat">
        <p className="messageTextChat colorWhiteChat">
          {ReactEmoji.emojify(message.text)}
          <br />
          <span className="timeStampMsg">
            {moment(message.created_at).format("DD/MM/YYYY - HH:mm")}
          </span>
        </p>
      </div>
    </div>
  ) : (
    <div className="messageContainerChat justifyStartChat">
      <div className="messageBoxChat backgroundLightChat">
        <p className="messageTextChat colorDarkChat">
          {ReactEmoji.emojify(message.text)}
          <br />
          <span className="timeStampMsg">
            {moment(message.created_at).format("DD/MM/YYYY - HH:mm")}
          </span>
        </p>
      </div>
      {/* <p className="sentText pl-10 ">{user}</p> */}
    </div>
  );
};

export default Message;
