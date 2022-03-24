// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTGt94elYBtmXIF8kf_toYtuGYBkvI5XM",
  authDomain: "book-conversation.firebaseapp.com",
  projectId: "book-conversation",
  storageBucket: "book-conversation.appspot.com",
  messagingSenderId: "925649583993",
  appId: "1:925649583993:web:de83b84526c281146c79a8",
  measurementId: "G-PT3576F5CD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
