// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYE8NMiRcrV_SlkGxNrHBywnvLsNsSZWA",
  authDomain: "clone-fc9d3.firebaseapp.com",
  projectId: "clone-fc9d3",
  storageBucket: "clone-fc9d3.appspot.com",
  messagingSenderId: "505070615064",
  appId: "1:505070615064:web:54cbadbdd3a69ca8e2616d",
  measurementId: "G-PDHB8NB7W7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export { auth };

