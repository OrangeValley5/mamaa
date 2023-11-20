
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
  firebase.initializeApp(firebaseConfig);


// Reference to the create account button
const createAccountButton = document.querySelector('.flow');

// Add a click event listener to the create account button
createAccountButton.addEventListener('click', () => {
  const email = document.getElementById('email').value;
  const password = document.querySelector('.input-field[type="password"]').value;

  // Create a user account using Firebase Authentication
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Account creation was successful
      const user = userCredential.user;
      console.log('Account created for: ' + user.email);

      // Redirect to another page on your website
      window.location.href = 'your-redirect-page.html';
    })
    .catch((error) => {
      // Handle account creation errors
      console.error('Account creation error:', error);
    });
});
