import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
import {getDatabase} from 'firebase/database';

const app = initializeApp({
	apiKey: "AIzaSyBwJ3nxwlq8FDOoKvJ7_-qhQssDwU7zJt4",
	authDomain: "cybernext-80933.firebaseapp.com",
	databaseURL: "https://cybernext-80933-default-rtdb.firebaseio.com",
	projectId: "cybernext-80933",
	storageBucket: "cybernext-80933.appspot.com",
	messagingSenderId: "825364112650",
	appId: "1:825364112650:web:f9ec0d069ea475979506f3"
});

const auth = getAuth(app);
const firestoreStorage = getFirestore(app);
const storage = getStorage(app);
const realtimeDatabase = getDatabase(app, 'https://cybernext-80933-default-rtdb.firebaseio.com/');


export {auth, firestoreStorage, storage, realtimeDatabase};

export default app;
