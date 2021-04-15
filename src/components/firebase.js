import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyByU-RpVvg_gVwKLRAhduYhCEdrgPJrdwY",
  authDomain: "clone-96fb2.firebaseapp.com",
  projectId: "clone-96fb2",
  storageBucket: "clone-96fb2.appspot.com",
  messagingSenderId: "958911783227",
  appId: "1:958911783227:web:799d013c12c232779dd71e",
  measurementId: "G-LDCQDCNH44",
});

const auth = firebase.auth();

export { auth };
