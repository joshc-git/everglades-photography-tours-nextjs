import Rebase from 're-base';
import firebase from 'firebase';

let firebaseApp;

if(firebase.apps && firebase.apps.length > 0) {
    firebaseApp = firebase.apps[0]
  } else {
    firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyAnUye08rACWdxLFwCkHjbpBu2qZWSuSek",
        authDomain: "everglades-photography-tours.firebaseapp.com",
        databaseURL: "https://everglades-photography-tours.firebaseio.com"
    })
}

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;