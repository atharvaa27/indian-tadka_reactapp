import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCgdjngzzmHgaMnMj8XD7hay1lfRsPHocI",
    authDomain: "indian-tadka-resto.firebaseapp.com",
    databaseURL: "https://indian-tadka-resto.firebaseio.com",
    projectId: "indian-tadka-resto",
    storageBucket: "indian-tadka-resto.appspot.com",
    messagingSenderId: "915318679149",
    appId: "1:915318679149:web:ac6502141d6577f5fc0164",
    measurementId: "G-KWQW9CGEP6"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };