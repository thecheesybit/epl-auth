 import firebase from 'firebase';
 
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBnVbo2218PfdB5ZBFER0ttxOCYMaSkYRM",
    authDomain: "epl-auth-e3a84.firebaseapp.com",
    projectId: "epl-auth-e3a84",
    storageBucket: "epl-auth-e3a84.appspot.com",
    messagingSenderId: "493178981876",
    appId: "1:493178981876:web:0834b9a55397ec8b64fda1"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;