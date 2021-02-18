import * as firebase from 'firebase'
import admin from 'firebase-admin';

const serviceAccount = require('./service');
const firebaseConfig = {
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    databaseURL: process.env.DATABASEURL,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGSENDER,
    appId: process.env.APIID,
    measurementId: process.env.MEASUREMENTID
  };
  
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://savanapointofficial.firebaseio.com"
  });


firebase.initializeApp(firebaseConfig);


const firestore = firebase.firestore();
const auth = firebase.auth();
const database = firebase.database();
const adminAuth =  admin.auth();


export { firestore, auth, database, adminAuth }