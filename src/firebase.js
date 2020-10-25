import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyClL6tv7DoyvwHRQ0T2DbXierckpHcswR8",
    authDomain: "whats-app-clone-e55ad.firebaseapp.com",
    databaseURL: "https://whats-app-clone-e55ad.firebaseio.com",
    projectId: "whats-app-clone-e55ad",
    storageBucket: "whats-app-clone-e55ad.appspot.com",
    messagingSenderId: "391961166664",
    appId: "1:391961166664:web:fa30aee2f8aa46eb77e97d",
    measurementId: "G-NJG0V3X1XT"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;