import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBW4G_MbQpcCjZAfRgUT1ReAc-lJ56d8E4",
  authDomain: "mywhatsapp-clone-project.firebaseapp.com",
  projectId: "mywhatsapp-clone-project",
  storageBucket: "mywhatsapp-clone-project.appspot.com",
  messagingSenderId: "711010424423",
  appId: "1:711010424423:web:ad48963bec3e7d19e8e6c2",
  measurementId: "G-ZMLF71GZCJ",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
