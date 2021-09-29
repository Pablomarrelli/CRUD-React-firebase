import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA8wODZCa8VNtdBCFuoBHahTD0B05L02BM",
  authDomain: "udemy-javascript-c228d.firebaseapp.com",
  databaseURL: "https://udemy-javascript-c228d.firebaseio.com",
  projectId: "udemy-javascript-c228d",
  storageBucket: "udemy-javascript-c228d.appspot.com",
  messagingSenderId: "386012537326",
  appId: "1:386012537326:web:59b51a212ae10866"
  };
  // Initialize Firebase
  
  const bd =  firebase.initializeApp(firebaseConfig);
  const auth = bd.auth();
 export {auth}
/*   firebase.analytics(); */