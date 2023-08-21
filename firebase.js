// // Import the functions you need from the SDKs you need
// import * as firebase from "firebase";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
// 	apiKey: "AIzaSyC5wGr-hfk8Q8IKUXNkjAgkwWN1jTJImtk",
// 	authDomain: "design-interview.firebaseapp.com",
// 	projectId: "design-interview",
// 	storageBucket: "design-interview.appspot.com",
// 	messagingSenderId: "733936320156",
// 	appId: "1:733936320156:web:cd867ae508076272a97759",
// 	measurementId: "G-J33HWF2H6K",
// };

// // Initialize firebase
// let app;

// if (firebase.apps.length === 0) {
// 	app = firebase.initializeApp(firebaseConfig);
// } else {
// 	app = firebase.app();
// }

// const auth = firebase.auth();

// export {auth};

// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyC5wGr-hfk8Q8IKUXNkjAgkwWN1jTJImtk",
	authDomain: "design-interview.firebaseapp.com",
	projectId: "design-interview",
	storageBucket: "design-interview.appspot.com",
	messagingSenderId: "733936320156",
	appId: "1:733936320156:web:cd867ae508076272a97759",
	measurementId: "G-J33HWF2H6K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
