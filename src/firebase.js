
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, getFirestore, collection} from "firebase/firestore";
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyCBBVLBSO3-Fn3p5nGCn-J-Xm8hn03o3_w",
  authDomain: "netflix-clone-f948d.firebaseapp.com",
  projectId: "netflix-clone-f948d",
  storageBucket: "netflix-clone-f948d.firebasestorage.app",
  messagingSenderId: "435821574300",
  appId: "1:435821574300:web:f3019cfadd3957319cd559"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (namme, email, password) => {
        try{
          const res = await createUserWithEmailAndPassword(auth, email, password);
          const user = res.user;

          await addDoc(collection(db, "users"), {
            uid: user.uid,
            name: namme,
            authProvider: "local",
            email,
          })
        }catch(error){
            console.error("Error signing up: ", error);
            toast.error(error.code.split("/")[1].split("-").join(" "));
        }
}


const login = async (email,password) => {
 try{
     await signInWithEmailAndPassword(auth, email, password)

 }catch(error){
    console.error("Error logging in: ", error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
 }
}

const logout = () => {
    signOut(auth)
}

export { auth, db, signup, login, logout };