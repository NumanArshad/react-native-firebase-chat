import * as firebase from "firebase";
import firestore from 'firebase/firestore'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDOSew5jSJtcQEF9Brc9Yq0ZzGzV5OUksE",
    authDomain: "native-expo-sample.firebaseapp.com",
    databaseURL: "https://native-expo-sample.firebaseio.com",
    projectId: "native-expo-sample",
    storageBucket: "native-expo-sample.appspot.com",
    messagingSenderId: "26909316323",
    appId: "1:26909316323:web:4e551bde90c8af6cb021d6",
    measurementId: "G-TMWNP5RC0B"
  };

  firebase.initializeApp(firebaseConfig);

  firebase.firestore();
  export default firebase