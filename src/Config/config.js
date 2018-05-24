import firebase from "firebase/app";

// export default !firebase.apps.length ? firebase.initializeApp(DB_MY_CONFIG) : firebase.app();
  
  const DB_MY_CONFIG = {
    apiKey: "AIzaSyDHnOW4POi-zqo8X0joNw4rGnxx99fubTA",
    authDomain: "to-do-app-react-notes.firebaseapp.com",
    databaseURL: "https://to-do-app-react-notes.firebaseio.com",
    projectId: "to-do-app-react-notes",
    storageBucket: "to-do-app-react-notes.appspot.com",
    messagingSenderId: "561221501176"
  };

  export default !firebase.apps.length ? firebase.initializeApp(DB_MY_CONFIG) : firebase.app();