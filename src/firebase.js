import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyClxWKXUxuUG9hKZorqV9w75IWE0RmJLhY",
    authDomain: "basiccrud-4b21e.firebaseapp.com",
    databaseURL: "https://basiccrud-4b21e.firebaseio.com",
    projectId: "basiccrud-4b21e",
    storageBucket: "basiccrud-4b21e.appspot.com",
    messagingSenderId: "312309969501",
    appId: "1:312309969501:web:12f063f162521f638893b4"
  };

  var fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();

