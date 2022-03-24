import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCBnr_zsEfeOlFo8zxW0f4k9C71OPOH-NI",
    authDomain: "netflix-clone-1e7cd.firebaseapp.com",
    projectId: "netflix-clone-1e7cd",
    storageBucket: "netflix-clone-1e7cd.appspot.com",
    messagingSenderId: "478582019083",
    appId: "1:478582019083:web:05de6dfdb56445d45ea30e"
  };

 const firebaseApp = firebase.initializeApp(firebaseConfig);

 //firestore is database
 const db = firebaseApp.firestore();

 const auth = firebase.auth();


 export {auth,db}

//  export default db ;