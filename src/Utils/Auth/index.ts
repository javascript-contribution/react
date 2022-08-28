import { useState, useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase";

// Custom Hook
export function useAuth() {
    const [currentUser, setCurrentUser] = useState();
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, user => { 
        // @ts-ignore
        setCurrentUser(user)
      });
      return unsubscribe;
    }, [])
  
    return currentUser;
  }
  
  // Storage
  // export async function upload(file: Blob | Uint8Array | ArrayBuffer, currentUser: { uid: string; }, setLoading: (arg0: boolean) => void ) {
  //   const fileRef = ref(storage, currentUser.uid + '.png');
  
  //   setLoading(true);
    
  //   const snapshot = await uploadBytes(fileRef, file);
  //   const photoURL = await getDownloadURL(fileRef);
  
  //   updateProfile(currentUser, {photoURL});
    
  //   setLoading(false);
  //   alert("Uploaded file!");
  // }
