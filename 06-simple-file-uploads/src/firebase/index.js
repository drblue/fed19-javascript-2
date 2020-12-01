import firebase from 'firebase/app';
import "firebase/storage";

// get configuration from Project Settings for app in Firebase Console
const firebaseConfig = {
	apiKey: "AIzaSyDWPskhiu0hDY5mXbG6XgZ6hT5w2aVPFew",
	authDomain: "fed20-61a11.firebaseapp.com",
	databaseURL: "https://fed20-61a11.firebaseio.com",
	projectId: "fed20-61a11",
	storageBucket: "fed20-61a11.appspot.com",
	messagingSenderId: "1062906611383",
	appId: "1:1062906611383:web:0453e0a52c2e453ca6af32"
};

// initialize connection to Firebase
firebase.initializeApp(firebaseConfig);

// initialize Firebase Cloud Storage
const storage = firebase.storage();

export { storage, firebase as default }
