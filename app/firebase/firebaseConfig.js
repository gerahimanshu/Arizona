import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyDcyo7w90Y1W6OjAu61lv5ctyIV5MheRhg",
    authDomain: "arizonaacademy-76c92.firebaseapp.com",
    databaseURL: "https://arizonaacademy-76c92.firebaseio.com",
    projectId: "arizonaacademy-76c92",
    storageBucket: "arizonaacademy-76c92.appspot.com",
    messagingSenderId: "840096427585"
}

let firebaseInstance = null

const getFirebaseInstance = () => {
    if(firebaseInstance == null){ 
        firebaseInstance = firebase.initializeApp(config)
    }
    return firebaseInstance
}

export const firebaseApp = getFirebaseInstance()