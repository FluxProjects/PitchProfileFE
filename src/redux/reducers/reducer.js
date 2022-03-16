const initialState = {
  //  Auth actions
  userDetails: {},
  authToken: "",

  // Dropdown data actions
  languages: [],
  countries: [],
  states: [],
  cities: [],
  departments: [],
  industries: [],
  skills: [],
  educationLevels: [],

  // Candidate my resume
  candidateSkills: [],
  candidateEducations: [],
  candidateEmployments: [],
  candidateProjects: [],
  candidateCertificates: [],
  candidateReferences: [],
  candidateSocialProfiles: [],
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
    case "GetDepartments":
      return { ...state, departments: rest.data };
    case "GetIndustries":
      return { ...state, industries: rest.data };
    case "GetSkills":
      return { ...state, skills: rest.data };
    case "GetEducationLevels":
      return { ...state, educationLevels: rest.data };

    //  Candidate my resume
    case "SetCandidateSkill":
      return {
        ...state,
        candidateSkills: rest.data,
      };
    case "SetCandidateEducation":
      return {
        ...state,
        candidateEducations: rest.data,
      };
    case "SetCandidateEmployment":
      return {
        ...state,
        candidateEmployments: rest.data,
      };
    case "SetCandidateProject":
      return {
        ...state,
        candidateProjects: rest.data,
      };
    case "SetCandidateCertificate":
      return {
        ...state,
        candidateCertificates: rest.data,
      };

    case "SetCandidateReference":
      return {
        ...state,
        candidateReferences: rest.data,
      };

    case "SetCandidateSocialProfile":
      return {
        ...state,
        candidateReferences: rest.data,
      };
    default:
      return state;
  }
};

export default changeState;
