import React, { useEffect, useState } from "react";
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
	getSingleUserData,
	GetSkills,
} from "./redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import WeavyApp from "./weavy/WeavyApp";
import Weavy from "./weavy/Weavy";
import { SocketContext, socket } from "./utils/socket";
import Chat from "./markup/Pages/MyChat/Chat/Chat";
import ChatContacts from "./markup/Pages/MyChat/ChatContacts/ChatContacts";

function App() {
	const state = useSelector((state) => state);
	const dispatch = useDispatch();

	const [loading, setLoading] = useState(true);
	const [show, setShow] = useState(false);
	const [ChatModal, setChatModal] = useState(false);
	const [otherId, setOtherId] = useState("");

	useEffect(() => {
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
	}, []);

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
	};

	return (
		<SocketContext.Provider value={socket}>
			<div className="App">
				<button
					onClick={() => {
						console.log("clis");
						toggleModal();
					}}
					className="site-button radius-xl"
					style={{ position: "fixed", bottom: 20, right: 30 }}
				>
					<i className="fa fa-comment"></i>
				</button>

				<Modal
					// backdrop={false}
					scrollable={true}
					show={ChatModal}
					onHide={() => toggleModal()}
					className="modal fade modal-bx-info editor"
				>
					{/* <Chat otherId={otherId} /> */}
					<ChatContacts />
				</Modal>

				<Markup />
				<ToastContainer
					position="top-right"
					autoClose={1000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
				/>
			</div>
		</SocketContext.Provider>
	);
}

export default App;
