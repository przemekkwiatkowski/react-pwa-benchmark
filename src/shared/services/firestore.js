import firebase from 'firebase';
import 'firebase/firestore';

const REACT_APP_COLLECTION_NAME = 'benchmark';
const REACT_APP_DOC_NAME = 'pwa';

export const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  collectionName: REACT_APP_COLLECTION_NAME,
  docName: REACT_APP_DOC_NAME,
};

export const initializeFirestore = () => firebase.initializeApp(config);

export const getFirestore = () =>
  firebase
    .firestore()
    .collection(config.collectionName)
    .doc(config.docName);
