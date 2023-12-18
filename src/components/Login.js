import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";
import { BG_URL } from "../utils/constants";


const Login = ()=>{
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const dispatch = useDispatch();
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const handleButtonClick = ()=>{
        const message = checkValidData(email.current.value,password.current.value);
        setErrorMessage(message);
        if(message)
          return;
        if(!isSignInForm){
            createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
            .then((userCredential) => { 
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: name.current.value, photoURL: USER_AVATAR,
                  }).then(() => {
                    const {uid, email, displayName, photoURL} = auth.currentUser;
                    dispatch(addUser({uid: uid,email: email,displayName: displayName,photoURL:photoURL}));
                 
                  }).catch((error) => {
                    setErrorMessage(error.message);
                  });
            
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + "-" +errorMessage);
            });

        }
        else{
            signInWithEmailAndPassword(auth, email.current.value,password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
          
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + "-" +errorMessage);
            });

        }
            
           
    }
    const toggleSignInForm =()=>{
        setIsSignInForm(!isSignInForm);
    }
    return (
        <div>
             <Header/>
             <div className="absolute" >
                <img className="h-full object-cover" src ={BG_URL}  alt = "logo"/>
            </div>
            <form onSubmit = {(e)=>{e.preventDefault()}} className=" w-full md:w-4/12 absolute p-10 bg-black my-24 mx-auto left-0 right-0 text-white bg-opacity-80">
                <h1 className="font-bold text-2xl py-4">{isSignInForm? "Sign In": "Sign Up"}</h1>
                {
                    !isSignInForm && <input ref = {name} type = "name" placeholder="Full Name" className="p-2 my-2 w-full bg-gray-700"/>
                }
                <input ref = {email} type = "text" placeholder="Email Address" className="p-2 my-2 w-full bg-gray-700"/>
                <input ref = {password} type = "password" placeholder="Password" className="p-2 my-2 w-full bg-gray-700"/>
                <p className="py-2 font-bold text-red-700">{errorMessage}</p>
                <button className="p-4 my-3 w-full bg-red-700 rounded-md" onClick={handleButtonClick}>{isSignInForm? "Sign In": "Sign Up"}</button>
                <p className="p-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm? "New to Netflix? Sign Up Now": "Already Registered? Sign In Now."}</p>
            </form>
        </div>
    );
}
export default Login;