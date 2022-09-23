// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGVmoLiM3D1HhFzcctWhtJxI43qsUeg0Y",
  authDomain: "pitchprofile-chat.firebaseapp.com",
  projectId: "pitchprofile-chat",
  storageBucket: "pitchprofile-chat.appspot.com",
  messagingSenderId: "9233157137",
  appId: "1:9233157137:web:f8d388f6f597af6d05f5b0",
  measurementId: "G-8WZY2K3TWG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
