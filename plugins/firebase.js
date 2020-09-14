import firebase from "firebase/app";
import "firebase/firestore";
if (!firebase.apps.length) {
  const config = {
    apiKey: process.env.firebaseAPIKey,
    authDomain: process.env.firebaseAuthDomain,
    databaseURL: process.env.firebaseDatabaseURL,
    projectId: process.env.firebaseProjectId,
    storageBucket: process.env.firebaseStorageBucket,
    messagingSenderId: process.env.firebaseMessagingSenderId,
    appId: process.env.firebaseAppId,
    measurementId: process.env.firebaseMeasurementId
  };
  firebase.initializeApp(config);
}
const fireDb = firebase.firestore();
export { fireDb };
