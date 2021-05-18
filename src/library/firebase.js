import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

/* import { seedDatabase } from '../seed'; */

const config = {
  apiKey: 'AIzaSyCNjHAmGPtF5C2-GlHkD0DliXixUz48dmY',
  authDomain: 'socialapp-ebdcf.firebaseapp.com',
  databaseURL: 'https://socialapp-ebdcf-default-rtdb.firebaseio.com',
  projectId: 'socialapp-ebdcf',
  storageBucket: 'socialapp-ebdcf.appspot.com',
  messagingSenderId: '531272576636',
  appId: '1:531272576636:web:f16540ee2710503ffb23f9',
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

/* seedDatabase(firebase); */

export { firebase, FieldValue };
