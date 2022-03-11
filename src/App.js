import React, { useEffect } from "react";
import Markup from "./markup/Markup";
import "./css/plugins.css";
import "./css/style.css";
import "./css/MyStyles.css";
import "./css/templete.css";
import "./css/skin/skin-1.css";
import "./plugins/slick/slick.min.css";
import "./plugins/slick/slick-theme.min.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  GetDepartments,
  GetEducationLevels,
  GetIndustries,
  GetSkills,
} from "./redux/action";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    callGetDrop();
  }, []);

  const callGetDrop = async () => {
    if (state.departments.length < 1) {
      dispatch(GetDepartments());
    }
    if (state.industries.length < 1) {
      dispatch(GetIndustries());
    }
    if (state.skills.length < 1) {
      dispatch(GetSkills());
    }
    if (state.educationLevels.length < 1) {
      dispatch(GetEducationLevels());
    }
  };

  return (
    <div className="App">
      <Markup />

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
