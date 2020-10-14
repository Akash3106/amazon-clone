import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBCHYBebo-ePVgkVH8XTBLlms9OtxtjmTs",
  authDomain: "eshop-85231.firebaseapp.com",
  databaseURL: "https://eshop-85231.firebaseio.com",
  projectId: "eshop-85231",
  storageBucket: "eshop-85231.appspot.com",
  messagingSenderId: "15943456149",
  appId: "1:15943456149:web:05e7e143faef8047b9129c",
  measurementId: "G-EET1X3NBCB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
