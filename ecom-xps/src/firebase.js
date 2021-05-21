import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAmACclgen54qcpmJXDSjyFMfT5vvLhVVY",
  authDomain: "ecom-xps-b7832.firebaseapp.com",
  projectId: "ecom-xps-b7832",
  storageBucket: "ecom-xps-b7832.appspot.com",
  messagingSenderId: "998520328236",
  appId: "1:998520328236:web:2c9c4eb9fd9c9f2a22c189",
  measurementId: "G-ND6D4SJ341",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
