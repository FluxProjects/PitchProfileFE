import React, { useState, useEffect, useContext } from "react";
import queryString from "query-string";

import TextContainer from "../TextContainer/TextContainer";
import Messages from "../Messages/Messages";
import InfoBar from "../InfoBar/InfoBar";
import ScrollToBottom from "react-scroll-to-bottom";

import Input from "../Input/Input";

import "./ChatContacts.css";
import { URL } from "../../../../utils/APIUtils";
import { useDispatch, useSelector } from "react-redux";
import {
  AddMessage,
  clearMessages,
  getMessages,
} from "../../../../redux/action/Messages/MessagesActions";
import { SocketContext } from "../../../../utils/socket";
import {
  getMyRoomsCandidate,
  getMyRoomsCompany,
  setRoomIdRedux,
  setRoomNameRedux,
  updateMyRoomsisRead,
  UpdateRoom,
} from "../../../../redux/action";
import Chat from "../Chat/Chat";
import { Modal } from "react-bootstrap";
import { getUserAvatar } from "../../../../utils/functions";

const ChatContacts = ({
  location,
  otherIdProp,

  setCloseModal,
}) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [ChatModal, setChatModal] = useState(false);
  const [otherId, setOtherId] = useState(otherIdProp ? otherIdProp : "");

  const [RoomName, setRoomName] = useState(state?.RoomNameProp);

  const [TrueIndex, setTrueIndex] = useState(false);
  const [indexSelected, setIndexSelected] = useState(-1);

  const toggleModal = () => {
    setChatModal(!ChatModal);
  };

  useEffect(() => {
    callGetRooms();
    roomIndexSelect();
  }, []);

  // useEffect(() => {
  //   if (!TrueIndex) {
  //     roomIndexSelect();
  //   }
  // }, [state?.myRooms]);

  const roomIndexSelect = () => {
    const val = state?.myRooms?.map((item, index) => {
      const nameRoomItem = state.userDetails?.company_name
        ? item?.candidate?.f_name + " " + item?.candidate?.l_name
        : item?.company?.company_name;

      if (state?.RoomNameProp == nameRoomItem) {
        setIndexSelected(index);
        setTrueIndex(true);
      }
    });
  };

  useEffect(() => {
    setIsLoading(true);
  }, [otherId, state.SingleRoomName]);

  const callUpdateMyRoomsisRead = async (room_id) => {
    await dispatch(updateMyRoomsisRead(room_id)).then(() => {
      // callGetRooms();
      roomIndexSelect();
      console.log("test");
    });
  };

  const callGetRooms = async (id) => {
    if (state.userDetails?.company_name) {
      console.log("Company called");

      await dispatch(getMyRoomsCompany());
      // setRoomId(state?.myRooms[0].id);
      // setRoomName(
      //   state.userDetails?.company_name
      //     ? state?.myRooms[0].candidate?.f_name +
      //         " " +
      //         state?.myRooms[0].candidate?.l_name
      //     : state?.myRooms[0].company?.company_name
      // );
    } else {
      console.log("Candidate called");

      await dispatch(getMyRoomsCandidate());
      // setRoomId(state?.myRooms[0].id);
      // setRoomName(
      //   state.userDetails?.company_name
      //     ? state?.myRooms[0].candidate?.f_name +
      //         " " +
      //         state?.myRooms[0].candidate?.l_name
      //     : state?.myRooms[0].company?.company_name
      // );
    }
    setLoading(false);
  };

  return (
    <div className="">
      <div className="containerChatContact">
        <InfoBar
          room={
            state?.RoomNameProp != ""
              ? state?.RoomNameProp
              : `Messages ${
                  state?.IsReadLength > 0 ? "(" + state?.IsReadLength + ")" : ""
                }`
          }
          setCloseModal={setCloseModal}
        />
        <div
          // style={{
          //   width: "100%",
          //   display: "flex",
          //   flexDirection: "column",
          //   flex: 1,
          //   alignItems: "center",
          // }}
          className="row"
        >
          <div
            style={{
              paddingRight: 0,
            }}
            className="col-md-4 col-sm-12"
          >
            <ScrollToBottom style={{}}>
              {state?.myRooms?.length > 0
                ? state?.myRooms?.map((item, index) => (
                    <>
                      <div
                        className="cursorPointer"
                        style={{
                          borderBottom: "1px solid",
                          flexDirection: "row",
                          paddingTop: "10px",
                          paddingBottom: "10px",
                          background:
                            indexSelected == index
                              ? "lightgray"
                              : "transparent",
                        }}
                      >
                        <span
                          style={{
                            border: "1px solid",
                            borderRadius: 500,
                            width: 28,
                            marginLeft: 10,
                            marginRight: 10,
                          }}
                        >
                          <img
                            style={{
                              maxWidth: "21px",
                              borderRadius: 100,
                              height: "21px",
                              marginBottom: "4px",
                            }}
                            width={30}
                            src={
                              state.userDetails?.company_name
                                ? item?.candidate?.pic
                                  ? item?.candidate?.pic
                                  : getUserAvatar(
                                      item?.candidate?.f_name +
                                        " " +
                                        item?.candidate?.l_name
                                    )
                                : item?.company?.pic
                                ? item?.company?.pic
                                : getUserAvatar(item?.company?.company_name)
                            }
                          />
                        </span>
                        <a
                          className="btnStyle"
                          onClick={() => {
                            dispatch(clearMessages());

                            dispatch(
                              setRoomNameRedux(
                                state.userDetails?.company_name
                                  ? item?.candidate?.f_name +
                                      " " +
                                      item?.candidate?.l_name
                                  : item?.company?.company_name
                              )
                            );
                            dispatch(setRoomIdRedux(item?.id));

                            // dispatch(UpdateRoom(index));

                            setIsLoading(true);
                            console.log(
                              "item?.candidate_iditem?.candidate_id",
                              item?.candidate_id
                            );
                            setOtherId(
                              state.userDetails?.company_name
                                ? item?.candidate_id
                                : item?.company_id
                            );

                            // setRoomName(
                            //   state.userDetails?.company_name
                            //     ? item?.candidate?.f_name +
                            //         " " +
                            //         item?.candidate?.l_name
                            //     : item?.company?.company_name
                            // );
                            callUpdateMyRoomsisRead(item?.id);
                            setIndexSelected(index);
                            // roomIndexSelect();
                            setChatModal(true);
                          }}
                          style={{
                            color: indexSelected == index ? "#2e55fa" : "black",
                          }}
                        >
                          {state.userDetails?.company_name
                            ? item?.candidate?.f_name +
                              " " +
                              item?.candidate?.l_name
                            : item?.company?.company_name}
                          {item?.isRead == false && (
                            <span
                              style={{
                                position: "absolute",
                                background: "red",
                                width: "10px",
                                height: "10px",
                                borderRadius: "50%",
                              }}
                            ></span>
                          )}
                        </a>
                      </div>
                    </>
                  ))
                : "No chats added yet"}
            </ScrollToBottom>
          </div>
          <div
            style={{
              paddingLeft: 0,
            }}
            className="col-md-8 col-sm-12"
          >
            <Chat
              loading={isLoading}
              setIsLoading={(e) => setIsLoading(e)}
              otherId={otherId}
            />
          </div>
        </div>
        {/* 
        <Modal
          // backdrop={false}
          scrollable={true}
          show={ChatModal}
          onHide={() => toggleModal()}
          className="modal fade modal-bx-info editor"
        >
          <Chat otherId={otherId} RoomId={RoomId} />
        </Modal> */}
      </div>
    </div>
  );
};

export default ChatContacts;
