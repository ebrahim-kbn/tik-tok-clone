import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDybKzIn8WP6WejjnvW_Icf-LoqTs6Hae8",
  authDomain: "tik-tok-clone-4428f.firebaseapp.com",
  databaseURL: "https://tik-tok-clone-4428f.firebaseio.com",
  projectId: "tik-tok-clone-4428f",
  storageBucket: "tik-tok-clone-4428f.appspot.com",
  messagingSenderId: "580213272101",
  appId: "1:580213272101:web:583c17570af3c13e3f99cc",
  measurementId: "G-KMDMLC9HT6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
