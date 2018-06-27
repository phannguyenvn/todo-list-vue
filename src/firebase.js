import firebase from 'firebase'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyBb9EDilrHi0vvi5HCJewGqfAk5Z--oJcE",
    authDomain: "todos-vuejs.firebaseapp.com",
    databaseURL: "https://todos-vuejs.firebaseio.com",
    projectId: "todos-vuejs",
    storageBucket: "todos-vuejs.appspot.com",
    messagingSenderId: "346117369999"
}

const firebaseApp = firebase.initializeApp(config)

const firestore = firebaseApp.firestore()
firestore.settings({ timestampsInSnapshots: true })

export default firestore