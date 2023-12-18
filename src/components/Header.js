import {signOut , onAuthStateChanged} from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser,removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUGAE } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () =>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    const showGptSearch = useSelector(store=>store.gpt.showGptSearch);
    const handleGptSearchClick = ()=>{
      dispatch(toggleGptSearchView());
    }
    const handleSignOut = ()=>{
        signOut(auth).then(() => {
          }).catch((error) => {
            navigate("/error");
          });
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid, email, displayName, photoURL} = user;
              dispatch(addUser({uid: uid,email: email,displayName: displayName,photoURL:photoURL}));
              navigate("/browse")
            } else {
              dispatch(removeUser());
              navigate("/");
             
            }
          });

          return ()=> unsubscribe();

    },[]);

    const handleLanguageChange = (e)=>{
      dispatch(changeLanguage(e.target.value));
    }
    return (
        <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
            <img className = "w-44 mx-auto md:mx-0" src = {LOGO} alt = "logo"/>
            {user && (
            <div className="flex p-2 justify-between">
              { showGptSearch && 
                <select className="p-2 m-2 bg-gray-900 text-white" onChange={handleLanguageChange}>
                  {
                    SUPPORTED_LANGUGAE.map((lang)=>(<option key = {lang.identifer} value = {lang.identifer}>{lang.name}</option>))
                  }
                </select>
              }
                <button className="py-2 px-2 mx-4 my-2 bg-purple-800 text-white rounded-lg" onClick={handleGptSearchClick}>{showGptSearch?"Home Page":"GPT Search"}</button>
                <img className = "hidden md:block w-12 h-12" alt = "userIcon" src = {user.photoURL}/>
                <button className="font-bold text-white" onClick={handleSignOut}>Sign Out</button>
            </div>)
            }
        </div>
    );
}
export default Header;