// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKe-Q-ulY6tDonlF29qdUT3FrAYuGEqwE",
  authDomain: "router-firebase-integrat-bf3a3.firebaseapp.com",
  projectId: "router-firebase-integrat-bf3a3",
  storageBucket: "router-firebase-integrat-bf3a3.appspot.com",
  messagingSenderId: "184512869275",
  appId: "1:184512869275:web:df2dfa9d89cd259301273e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app