// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsGPRMAvkiwSIF6G4OA09NYAXWDIY-2_M",
  authDomain: "to-do-app-96c70.firebaseapp.com",
  projectId: "to-do-app-96c70",
  storageBucket: "to-do-app-96c70.appspot.com",
  messagingSenderId: "273735276062",
  appId: "1:273735276062:web:1c7a5ec118647650bb800f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth