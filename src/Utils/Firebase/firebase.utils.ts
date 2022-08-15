// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBjIwfRj_ysHjFlhTyHOrEhPrWwZ_wqJ6U",
  authDomain: "reactjs-template-db.firebaseapp.com",
  projectId: "reactjs-template-db",
  storageBucket: "reactjs-template-db.appspot.com",
  messagingSenderId: "567880957892",
  appId: "1:567880957892:web:a769f64bf76debb76d6e91",
  measurementId: "G-3YN2HPCFGB"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);





export const auth = getAuth();
// firebaseApp.auth().useDeviceLanguage();

// signInWithRedirect(auth, provider);

// sign in with popup
// Using a popup.


// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });


//   // create User With Email
//   createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
    prompt : "select_account"
})

export const googleSignInWithPopup = signInWithPopup(auth, provider)
  // .then((result) => {
  //   // This gives you a Google Access Token. You can use it to access the Google API.
  //   const credential = GoogleAuthProvider.credentialFromResult(result);
  //   // const token = credential.accessToken;
  //   // The signed-in user info.
  //   // const user = result.user;
  //   // ...
  // }).catch((error) => {
  //   // Handle Errors here.
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   // The email of the user's account used.
  //   const email = error.customData.email;
  //   // The AuthCredential type that was used.
  //   const credential = GoogleAuthProvider.credentialFromError(error);
  //   // ...
  // });