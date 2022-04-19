


var firebaseConfig = {
    apiKey: "AIzaSyBv48OKKLgv8f9d5yog07OqGolF7fIqnB4",
    authDomain: "kwitter-app-2-ade93.firebaseapp.com",
    databaseURL: "https://kwitter-app-2-ade93-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-2-ade93",
    storageBucket: "kwitter-app-2-ade93.appspot.com",
    messagingSenderId: "251681434324",
    appId: "1:251681434324:web:cd5e63cec1fbed84576941"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
  
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();

