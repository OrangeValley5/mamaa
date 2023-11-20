import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js";


const firebaseConfig = {
    apiKey: "AIzaSyAYZ9HJYrtdVxJfDPtOBUhUoeeS0LytRXA",
    authDomain: "parte-11191.firebaseapp.com",
    databaseURL: "https://parte-11191-default-rtdb.firebaseio.com",
    projectId: "parte-11191",
    storageBucket: "parte-11191.appspot.com",
    messagingSenderId: "117686824843",
    appId: "1:117686824843:web:f0d741f71d8c106140c98e",
    measurementId: "G-JLSRFDZ8NH"
  };

  //intialize firebase
 const app = initializeApp(firebaseConfig);

 const db = getDatabase(app);

 document.getElementById("submit").addEventListener('click', function(e){

    set(ref(db, ))
 })






  








