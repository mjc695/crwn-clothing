import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyCnPt8jAuBCpJzAxF1ytQS0Iwn3spm34xk",
  authDomain: "crwn-db-63ac0.firebaseapp.com",
  databaseURL: "https://crwn-db-63ac0.firebaseio.com",
  projectId: "crwn-db-63ac0",
  storageBucket: "crwn-db-63ac0.appspot.com",
  messagingSenderId: "956118831566",
  appId: "1:956118831566:web:d73fa99224feb8ca1d1b9f"
};

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase


