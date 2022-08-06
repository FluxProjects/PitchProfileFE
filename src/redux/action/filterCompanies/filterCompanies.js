import axios from "axios";
import { cloudURL, URL } from "../../../utils/APIUtils";

import { toast } from "react-toastify";

export const filterCompanyAlphabetical =
  (filterAlpha) => async (dispatch, state) => {
    var result = [];

    result = state().BackupAllCompanies.filter(function (item) {
      if (item?.company_name.toLowerCase().charAt(0) == filterAlpha)
        return item;
    });
    console.log("item?.company_name.charAt(0)", result);

    toast.success("Updated Successfully!", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    dispatch({
      type: "AllCompanies",
      data: result,
    });
  };
