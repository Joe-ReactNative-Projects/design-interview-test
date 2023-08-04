// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyD_miguxBrHRIBxIas8ni_5HHtjnO_e6Ng",
	authDomain: "starbucks-a5bd4.firebaseapp.com",
	projectId: "starbucks-a5bd4",
	storageBucket: "starbucks-a5bd4.appspot.com",
	messagingSenderId: "550336687249",
	appId: "1:550336687249:web:0baaa7949baccb44e26330",
	measurementId: "G-XY8C1MSN8P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
