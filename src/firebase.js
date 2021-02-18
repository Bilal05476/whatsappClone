import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "apiKey",
  authDomain: "mywhatsapp-clone-project.firebaseapp.com",
  projectId: "mywhatsapp-clone-project",
  storageBucket: "mywhatsapp-clone-project.appspot.com",
  messagingSenderId: "711010424423",
  appId: "appId",
  measurementId: "G-ZMLF71GZCJ",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
