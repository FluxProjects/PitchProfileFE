import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCGVmoLiM3D1HhFzcctWhtJxI43qsUeg0Y",
  authDomain: "pitchprofile-chat.firebaseapp.com",
  projectId: "pitchprofile-chat",
  storageBucket: "pitchprofile-chat.appspot.com",
  messagingSenderId: "9233157137",
  appId: "1:9233157137:web:f8d388f6f597af6d05f5b0",
  measurementId: "G-8WZY2K3TWG",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
