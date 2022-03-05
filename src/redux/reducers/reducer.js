const initialState = {
  //  Auth actions
  userDetails: [],
  authToken: "",

  // Dropdown data actions
  languages: [],
  countries: [],
  states: [],
  cities: [],
};

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case "set":
      return { ...state, ...rest };
    //  Auth actions
    case "RegisterUser":
      return { ...state, userDetails: rest.data };
    case "SetAuthToken":
      return { ...state, authToken: rest.data };

    // Dropdown data actions
    case "setLangs":
      return { ...state, languages: rest.data };
    case "setCountries":
      return { ...state, countries: rest.data };
    case "setStates":
      return { ...state, states: rest.data };
    case "setCities":
      return { ...state, cities: rest.data };

    default:
      return state;
  }
};

export default changeState;
