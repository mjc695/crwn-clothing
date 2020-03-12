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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // console.log(firestore.doc('users/fuor0101'))
  // console.log('users', firestore.collection('users'))
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  if (!snapShot.exists) { // if snapshot doesn't exist create a user
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (err) {
      console.log('error creating user', err.message)
    }
  }
  return userRef
}


firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase


