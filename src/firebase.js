// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCRkhK-kVecxoxkMSIhGTMDibmJNFLL0NY",
  authDomain: "tic-tac-toe-7fcb8.firebaseapp.com",
  projectId: "tic-tac-toe-7fcb8",
  storageBucket: "tic-tac-toe-7fcb8.appspot.com",
  messagingSenderId: "10330753603",
  appId: "1:10330753603:web:75fb744d4e4265f5b462f6",
  measurementId: "G-VF53CYGXB2",
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth, provider };
