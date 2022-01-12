// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, /* createUserWithEmailAndPassword */ } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBYeK948zDOKCJXfhDYx7FDcQTh2YQGqw",
  authDomain: "totallook-746d2.firebaseapp.com",
  projectId: "totallook-746d2",
  storageBucket: "totallook-746d2.appspot.com",
  messagingSenderId: "199234735619",
  appId: "1:199234735619:web:af723a7ff018d5bda10836"
};

// Initialize Firebase


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

/* export function signUp (email, password){
    return createUserWithEmailAndPassword(auth, email, password)
} */


