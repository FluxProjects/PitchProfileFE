const initialState = {
  userDetails: [],
};

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case "set":
      return { ...state, ...rest };
    case "RegisterUser":
      return { ...state, userDetails: rest.data };

    default:
      return state;
  }
};

export default changeState;
