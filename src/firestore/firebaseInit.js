import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage"
import "firebase/database"
import firebaseConfig from "./firebaseConfig";
firebase.initializeApp(firebaseConfig);
require("firebase/auth")

// utils
const db = firebase.firestore();
// const auth = firebase.auth();
// const firebaseStorage = firebase.storage();

const event = db.collection("event");
const achievement = db.collection("achievement");
const news = db.collection("news");
const accounts = db.collection("accounts");
const minutesofmeetings = db.collection("minutesofmeetings");
const receipts = db.collection("receipts");

// export utils/refs
export { event,achievement,news,accounts,minutesofmeetings,receipts };
