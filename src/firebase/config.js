import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyDd6uVZ6tTYyP98VYk8rt6eWawA-rZcKPg',
	authDomain: 'muso-ninjas-cf182.firebaseapp.com',
	projectId: 'muso-ninjas-cf182',
	storageBucket: 'muso-ninjas-cf182.appspot.com',
	messagingSenderId: '227336021013',
	appId: '1:227336021013:web:b48c158514f2cf351b9a1c',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectAuth, timestamp };
