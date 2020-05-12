import * as firebase from "firebase/app";
import "firebase/auth"

const app= firebase.initializeApp({
    apiKey: "AIzaSyCGRdND1-Lwa-CgX2sPrxfZ8Y6Q-9vHCqM",
    authDomain: "traveladvisor-bfa0b.firebaseapp.com",
    databaseURL: "https://traveladvisor-bfa0b.firebaseio.com",
    projectId: "traveladvisor-bfa0b",

    messagingSenderId: "102472724626",
    appId: "1:102472724626:web:e70b54a0fc2f0890c0364b",
    measurementId: "G-W36WEW6WT6"
});

export default app;