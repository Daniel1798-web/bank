


export const environment = {
  production: false,
    
};

export const   firebaseConfig = {

apiKey: "AIzaSyAZUc5OTwCKwBdqAUD6jWhUA-31rMqKjyw",
authDomain: "galaxicoin-137be.firebaseapp.com",
projectId: "galaxicoin-137be",
storageBucket: "galaxicoin-137be.appspot.com",
messagingSenderId: "954792632491",
appId: "1:954792632491:web:dff2a11115bbdb813217ee"
}


import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";




// Your web app's Firebase configuration


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth(app);





