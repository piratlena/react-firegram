import * as firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDb5EHVzyW3YaMpEcf7H8neSRUBbllTybw",
  authDomain: "react-firegram-230ab.firebaseapp.com",
  projectId: "react-firegram-230ab",
  storageBucket: "react-firegram-230ab.appspot.com",
  messagingSenderId: "484771589348",
  appId: "1:484771589348:web:d80560f18e6a33df5890f1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFireStore = firebase.firestore();

export { projectFireStore, projectStorage };
