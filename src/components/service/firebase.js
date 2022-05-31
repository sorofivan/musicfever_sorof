// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9VhICQ3YxemrnezXvch-52SIM5AzEzSg",
  authDomain: "proyecto-musicfever.firebaseapp.com",
  projectId: "proyecto-musicfever",
  storageBucket: "proyecto-musicfever.appspot.com",
  messagingSenderId: "484499487964",
  appId: "1:484499487964:web:c63aa82328fc85427d0819",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const bd = getFirestore(app);

export default bd;
