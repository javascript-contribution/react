// import React, { useContext, useState, useEffect, createContext } from "react"
// import { firebaseApp } from "../Firebase"

// const AuthContext = createContext(null)

// export function useAuth() {
//   return useContext(AuthContext)
// }

// export function AuthProvider({ children }) {
//   const [currentUser, setCurrentUser] = useState()
//   const [loading, setLoading] = useState(true)

//   function signup(email , password) {
//     return firebaseApp.createUserWithEmailAndPassword(email, password)
//   }

//   function login(email , password) {
//     return firebaseApp.signInWithEmailAndPassword(email, password)
//   }

//   function logout() {
//     return firebaseApp.signOut()
//   }

//   function resetPassword(email) {
//     return firebaseApp.sendPasswordResetEmail(email)
//   }

//   function updateEmail(email) {
//     return currentUser?.updateEmail(email)
//   }

//   function updatePassword(password) {
//     return currentUser?.updatePassword(password)
//   }

//   useEffect(() => {
//     const unsubscribe = firebaseApp.onAuthStateChanged((user) => {
//       setCurrentUser(user)
//       setLoading(false)
//     })

//     return unsubscribe
//   }, [])

//   const value = {
//     currentUser,
//     login,
//     signup,
//     logout,
//     resetPassword,
//     updateEmail,
//     updatePassword
//   }

//   return (
//     <AuthContext.Provider value={value}>
//       {!loading && children}
//     </AuthContext.Provider>
//   )
// }


// import React, { useContext, useState, useEffect, createContext } from "react"
// import { firebaseApp } from "../Firebase/firebase.utils"

// const AuthContext = createContext("")
// interface Auth {
//   createUserWithEmailAndPassword : (email: string, password: string) => void;
//   signInWithEmailAndPassword : (email: string, password: string) => void;
//   signOut : () => void;
//   sendPasswordResetEmail : (email : string) => void;
//   updatePassword : ( password: string) => void;
//   onAuthStateChanged : (user: any ) => void;
// }
// // @ts-ignore
// const firebaseAuth: Auth = firebaseApp
// export function useAuth() {
//   return useContext(AuthContext)
// }

// export function AuthProvider({ children }: any) {
//   const [currentUser, setCurrentUser] = useState()
//   const [loading, setLoading] = useState(true)

//   function signup(email : string, password: string) {
//     return firebaseApp.createUserWithEmailAndPassword(email, password)
//   }

//   function login(email : string, password: string) {
//     return firebaseApp.signInWithEmailAndPassword(email, password)
//   }

//   function logout() {
//     return firebaseAuth.signOut()
//   }

//   function resetPassword(email: string) {
//     return firebaseAuth.sendPasswordResetEmail(email)
//   }

//   function updateEmail(email: string) {
//     return currentUser?.updateEmail(email)
//   }

//   function updatePassword(password: string) {
//     return currentUser?.updatePassword(password)
//   }

//   useEffect(() => {
//     const unsubscribe = firebaseAuth.onAuthStateChanged((user: React.SetStateAction<string>) => {
//       setCurrentUser(user)
//       setLoading(false)
//     })

//     return unsubscribe
//   }, [])

//   const value = {
//     currentUser,
//     login,
//     signup,
//     logout,
//     resetPassword,
//     updateEmail,
//     updatePassword
//   }

//   return (
//     <AuthContext.Provider value={value}>
//       {!loading && children}
//     </AuthContext.Provider>
//   )
// }
