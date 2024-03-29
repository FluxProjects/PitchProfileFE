const initialState = {
  //  Auth Actions
  userDetails: {},
  authToken: "",
  pedningActions: [],
  otp: "",

  // Admin
  AllUserData: [],
  isChatModalUp: false,
  RoomNameProp: "",
  GetAllCandidatesNames: [],
  
  // Messages
  messagesChat: [],
  myRooms: [],
  IsReadLength: 0,
  SingleRoomData: {},
  SingleRoomName: "",
  SingleRoomId: "",
  myroomupdated: {},

  // Dropdown data actions
  languages: [],
  countries: [],
  states: [],
  cities: [],
  departments: [],
  industries: [],
  skills: [],
  educationLevels: [],
  userState: {},
  userCity: {},
  userCountry: {},
  organizationDrop: [],
  AllCompanyNames: [],
  AllCityJobNames: [],
  AllJobNames: [],
  DesignationDrop: [],

  // Candidate Resume
  candidateSkills: [],
  candidateEducations: [],
  candidateEmployments: [],
  candidateProjects: [],
  candidateCertificates: [],
  candidateReferences: [],
  candidateSocialProfiles: [],
  candidateLanguages: [],
  candidateDesiredCareer: {},
  singleUserData: {},

  // Browse Candidate
  allCandidates: [],
  backupCandidates: [],

  // Job Candidates
  PreviewPost: {},
  MyPostedJobs: [],
  MyPostedJobsBackup: [],
  Alljobs: [],
  BackupAlljobs: [],
  SavePreviewPost: {},
  SaveJobVideo: "",
  
  PreviewSingleCompany: {},

  wishlist: [],

  CoverLetterForApplying: "",
  AddDocApply: "",
};

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case "set":
      return { ...state, ...rest };
    case "setPendingAction":
      return { ...state, pedningActions: rest.data };
    case "RegisterUser":
      return { ...state, userDetails: rest.data };
    case "SetOTP":
      return { ...state, otp: rest.data };
    case "setSingleUserData": {
      return { ...state, singleUserData: rest.data };
    }
    case "setAllUserData": {
      return { ...state, AllUserData: rest.data };
    }
    case "myRoomsUpdated": {
      return { ...state, myRoomsUpdated: rest.data };
    }
    case "RoomNameProp":  {
      return { ...state, RoomNameProp: rest.data };
    }
    case "LogoutUser":
      return {
        ...state,
        userDetails: {},
        authToken: "",
        pedningActions: [],
        wishlist: [],

        // Dropdown Data
        languages: [],
        countries: [],
        states: [],
        cities: [],
        departments: [],
        industries: [],
        skills: [],
        educationLevels: [],
        userState: {},
        userCity: {},
        userCountry: {},

        // Candidate Resume
        candidateSkills: [],
        candidateEducations: [],
        candidateEmployments: [],
        candidateProjects: [],
        candidateCertificates: [],
        candidateReferences: [],
        candidateSocialProfiles: [],
        candidateLanguages: [],
        candidateDesiredCareer: {},

        // Browse Candidate
        allCandidates: [],
        backupCandidates: [],

        // Jobs
        AllCompanies: [],
        BackupAllCompanies: [],
        JobApplications: [],
        JobApplicationsBackup: [],
        FeaturedJobs: [],
      };
    case "SetAuthToken":
      return { ...state, authToken: rest.data };
    case "GetAllCandidatesNames":
      return { ...state, GetAllCandidatesNames: rest.data };
      
    // Dropdown Data
    case "SetOrganizationDrop":
      return { ...state, organizationDrop: rest.data, DesignationDrop: rest.DesignationDrop };
    case "AllCompanyNames":
      return { ...state, AllCompanyNames: rest.data };
    case "AllJobNames":
      return { ...state, AllJobNames: rest.data };
    case "AllCityJobNames":
      return { ...state, AllCityJobNames: rest.data };
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
    case "GetUserState":
      return { ...state, userState: rest.data };
    case "GetUserCountry":
      return { ...state, userCountry: rest.data };
    case "GetUserCity":
      return { ...state, userCity: rest.data };
      
    //Chat
    case "messagesChat":
      return { ...state, messagesChat: rest.data };
    case "myRooms":
      return { ...state, myRooms: rest.data, IsReadLength: rest.IsReadLength };
    case "isChatModalUp":
      return { ...state, isChatModalUp: rest.data };
    case "SingleRoomData":
      return { ...state, SingleRoomData: rest.data };
    case "SingleRoomName":
      return { ...state, SingleRoomName: rest.data };
    case "SingleRoomId":
      return { ...state, SingleRoomId: rest.data };

    //  Candidate Resume
    case "SetCandidateSkill":
      return { ...state, candidateSkills: rest.data };
    case "SetCandidateEducation":
      return { ...state, candidateEducations: rest.data };
    case "SetCandidateEmployment":
      return { ...state, candidateEmployments: rest.data };
    case "SetCandidateProject":
      return { ...state, candidateProjects: rest.data };
    case "SetCandidateCertificate":
      return { ...state, candidateCertificates: rest.data };
    case "SetCandidateReference":
      return { ...state, candidateReferences: rest.data };
    case "SetCandidateSocialProfile":
      return { ...state, candidateSocialProfiles: rest.data };
    case "SetDesiredCareer":
      return { ...state, candidateDesiredCareer: rest.data };
    case "SetCandidateLanguages":
      return { ...state, candidateLanguages: rest.data };

    // Browse Candidate
    case "GetAllCandidates":
      return { ...state, allCandidates: rest.data };
    case "BackupAllCandidates":
      return { ...state, backupCandidates: rest.data };

    // Job Posts
    case "PreviewPost":
      return { ...state, PreviewPost: rest.data };
    case "SaveJobVideo":
      return { ...state, SaveJobVideo: rest.data };
    case "MyPostedJobs":
      return { ...state, MyPostedJobs: rest.data };
    case "MyPostedJobsBackup":
      return { ...state, MyPostedJobsBackup: rest.data };
    case "Alljobs":
      return { ...state, Alljobs: rest.data, BackupAlljobs: rest.data };
    case "FilterAllJobs":
      return { ...state, Alljobs: rest.data };
    case "SavePreviewPost":
      return { ...state, SavePreviewPost: rest.data };
    case "AllCompanies":
      return { ...state, AllCompanies: rest.data };
    case "BackupAllCompanies":
      return { ...state, BackupAllCompanies: rest.data };
    case "PreviewSingleCompany":
      return { ...state, PreviewSingleCompany: rest.data };
    case "GetJobApplications":
      return { ...state, JobApplications: rest.data };
    case "GetBackupJobApplications":
      return { ...state, JobApplicationsBackup: rest.data };
    case "GetFeaturedJobs":
      return { ...state, FeaturedJobs: rest.data };
    case "GetWishlist":
      return { ...state, wishlist: rest.data };
    case "CoverLetterForApplying":
      return { ...state, CoverLetterForApplying: rest.data };
    case "AddDocApply":
      return { ...state, AddDocApply: rest.data };
    default:
      return state;
  }
};

export default changeState;
