const initialState = {
  userDetails: [],
  authToken: "",
};

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case "set":
      return { ...state, ...rest };
    case "RegisterUser":
      return { ...state, userDetails: rest.data };
    case "SetAuthToken":
      return { ...state, authToken: rest.data };
    default:
      return state;
  }
};

export default changeState;
