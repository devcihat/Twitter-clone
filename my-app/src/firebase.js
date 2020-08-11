import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAeVVrLmUKiCMnArSH3o5oJMdOtx7OcD8o",
  authDomain: "twitterclone-3bdcd.firebaseapp.com",
  databaseURL: "https://twitterclone-3bdcd.firebaseio.com",
  projectId: "twitterclone-3bdcd",
  storageBucket: "twitterclone-3bdcd.appspot.com",
  messagingSenderId: "47410824894",
  appId: "1:47410824894:web:c7e8d3bfc4aa66cb8340ef",
  measurementId: "G-DS2KZ9JF29",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
