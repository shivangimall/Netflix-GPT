// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCM3MO1FBsZOAReYCrlz_T_Pl1sgk5HJas",
//   authDomain: "netflixgpt-443ce.firebaseapp.com",
//   projectId: "netflixgpt-443ce",
//   storageBucket: "netflixgpt-443ce.appspot.com",
//   messagingSenderId: "1065689913375",
//   appId: "1:1065689913375:web:ff39418d66ce4c60de9d2a",
//   measurementId: "G-YEW26BKFE7"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxnoT-fUt2xfgKUjlCQZ1bjO3LMK8nPHA",
  authDomain: "netflixgpt-68193.firebaseapp.com",
  projectId: "netflixgpt-68193",
  storageBucket: "netflixgpt-68193.appspot.com",
  messagingSenderId: "1020831897826",
  appId: "1:1020831897826:web:cae9dbdedba989564ce6bb",
  measurementId: "G-218N1TW4WS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();