// import firebase from 'firebase'
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: 'AIzaSyDJdM9tV2ev2YeqED1-gfnSrVHSrgw4zCU',
//   authDomain: 'math-wizard-app.firebaseapp.com',
//   projectId: 'math-wizard-app',
//   storageBucket: 'math-wizard-app.appspot.com',
//   messagingSenderId: '970067583907',
//   appId: '1:970067583907:web:ab640ff333e7dbb6dff016',
// };

// // Initialize Firebase
// firebase.initializeApp();

// export default firebase.firestore();

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJdM9tV2ev2YeqED1-gfnSrVHSrgw4zCU",
  authDomain: "math-wizard-app.firebaseapp.com",
  projectId: "math-wizard-app",
  storageBucket: "math-wizard-app.appspot.com",
  messagingSenderId: "970067583907",
  appId: "1:970067583907:web:ab640ff333e7dbb6dff016"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);