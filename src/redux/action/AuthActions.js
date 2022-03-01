import axios from "axios";
import { URL } from "../../utils/APIUtils";

export const registerUser =
  (f_name, l_name, email, password, router) => async (dispatch) => {
    var data = {
      r_data: {
        f_name,
        l_name,
        email,
        password,
      },
    };

    var config = {
      method: "post",
      url: `${URL}/profile/register`,
      headers: {},
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log("datsss", response.data.successful);
        if (response.data.successful) {
          dispatch({
            type: "RegisterUser",
            data: response.data.data[0],
          });
          router.push("/");
        } else {
          alert("Something went wrong");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
